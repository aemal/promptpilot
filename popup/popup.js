// Popup functionality for Prompt Pilot
class PopupManager {
    constructor() {
        this.defaultSettings = {
            apiEndpoint: 'https://aemal.app.n8n.cloud/webhook-test/99dd3a64-0ff8-45c2-a807-ff4845274bdd',
            autoInsert: true,
            copyToClipboard: true,
            buttonStyle: 'minimal'
        };
        
        this.init();
    }

    async init() {
        await this.loadSettings();
        this.bindEvents();
        this.updateStatus();
    }

    // Load settings from Chrome storage
    async loadSettings() {
        try {
            const result = await chrome.storage.sync.get(this.defaultSettings);
            this.settings = { ...this.defaultSettings, ...result };
            this.populateForm();
        } catch (error) {
            console.error('Error loading settings:', error);
            this.settings = this.defaultSettings;
            this.populateForm();
        }
    }

    // Populate form with current settings
    populateForm() {
        const elements = {
            'api-endpoint': this.settings.apiEndpoint,
            'auto-insert': this.settings.autoInsert,
            'copy-clipboard': this.settings.copyToClipboard,
            'button-style': this.settings.buttonStyle
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = value;
                } else {
                    element.value = value;
                }
            }
        });
    }

    // Bind event listeners
    bindEvents() {
        // Save settings button
        document.getElementById('save-settings')?.addEventListener('click', () => {
            this.saveSettings();
        });

        // Test API button
        document.getElementById('test-api')?.addEventListener('click', () => {
            this.testAPI();
        });

        // Real-time validation for API endpoint
        document.getElementById('api-endpoint')?.addEventListener('input', (e) => {
            this.validateAPIEndpoint(e.target.value);
        });
    }

    // Save settings to Chrome storage
    async saveSettings() {
        const saveButton = document.getElementById('save-settings');
        const originalText = saveButton.textContent;
        
        try {
            saveButton.textContent = 'Saving...';
            saveButton.disabled = true;

            const newSettings = {
                apiEndpoint: document.getElementById('api-endpoint').value.trim(),
                autoInsert: document.getElementById('auto-insert').checked,
                copyToClipboard: document.getElementById('copy-clipboard').checked,
                buttonStyle: document.getElementById('button-style').value
            };

            // Validate API endpoint
            if (!this.isValidURL(newSettings.apiEndpoint)) {
                throw new Error('Invalid API endpoint URL');
            }

            await chrome.storage.sync.set(newSettings);
            this.settings = newSettings;

            // Show success feedback
            saveButton.textContent = 'Saved!';
            saveButton.style.background = '#28a745';
            
            // Notify content script of settings change
            this.notifyContentScript();

            setTimeout(() => {
                saveButton.textContent = originalText;
                saveButton.style.background = '';
                saveButton.disabled = false;
            }, 2000);

        } catch (error) {
            console.error('Error saving settings:', error);
            saveButton.textContent = 'Error!';
            saveButton.style.background = '#dc3545';
            
            setTimeout(() => {
                saveButton.textContent = originalText;
                saveButton.style.background = '';
                saveButton.disabled = false;
            }, 2000);
        }
    }

    // Test API connectivity
    async testAPI() {
        const testButton = document.getElementById('test-api');
        const apiStatus = document.getElementById('api-status');
        const originalText = testButton.textContent;
        
        try {
            testButton.textContent = 'Testing...';
            testButton.disabled = true;
            apiStatus.textContent = 'Testing...';
            apiStatus.style.color = '#ffc107';

            const apiEndpoint = document.getElementById('api-endpoint').value.trim();
            
            if (!this.isValidURL(apiEndpoint)) {
                throw new Error('Invalid API endpoint URL');
            }

            // Test API with sample data
            const testData = {
                post: "This is a test post to verify API connectivity for Prompt Pilot."
            };

            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(testData)
            });

            if (response.ok) {
                const result = await response.json();
                apiStatus.textContent = 'Connected';
                apiStatus.style.color = '#28a745';
                testButton.textContent = 'Success!';
                testButton.style.background = '#28a745';
            } else {
                throw new Error(`API returned ${response.status}: ${response.statusText}`);
            }

        } catch (error) {
            console.error('API test failed:', error);
            apiStatus.textContent = 'Failed';
            apiStatus.style.color = '#dc3545';
            testButton.textContent = 'Failed!';
            testButton.style.background = '#dc3545';
        } finally {
            setTimeout(() => {
                testButton.textContent = originalText;
                testButton.style.background = '';
                testButton.disabled = false;
            }, 2000);
        }
    }

    // Validate API endpoint URL
    validateAPIEndpoint(url) {
        const isValid = this.isValidURL(url);
        const input = document.getElementById('api-endpoint');
        
        if (isValid) {
            input.style.borderColor = '#28a745';
        } else {
            input.style.borderColor = '#dc3545';
        }
        
        return isValid;
    }

    // Check if URL is valid
    isValidURL(string) {
        try {
            const url = new URL(string);
            return url.protocol === 'http:' || url.protocol === 'https:';
        } catch (_) {
            return false;
        }
    }

    // Update extension status
    async updateStatus() {
        const extensionStatus = document.getElementById('extension-status');
        const apiStatus = document.getElementById('api-status');

        try {
            // Check if we're on a LinkedIn page
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            if (tab && (tab.url.includes('linkedin.com'))) {
                extensionStatus.textContent = 'Active on LinkedIn';
                extensionStatus.style.color = '#28a745';
            } else {
                extensionStatus.textContent = 'Visit LinkedIn to activate';
                extensionStatus.style.color = '#ffc107';
            }

            // Initial API status
            apiStatus.textContent = 'Ready';
            apiStatus.style.color = '#28a745';

        } catch (error) {
            console.error('Error updating status:', error);
            extensionStatus.textContent = 'Error';
            extensionStatus.style.color = '#dc3545';
        }
    }

    // Notify content script of settings changes
    async notifyContentScript() {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            if (tab && tab.url.includes('linkedin.com')) {
                await chrome.tabs.sendMessage(tab.id, {
                    type: 'SETTINGS_UPDATED',
                    settings: this.settings
                });
            }
        } catch (error) {
            // Content script might not be ready, which is fine
            console.log('Could not notify content script:', error.message);
        }
    }
}

// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PopupManager();
});

// Handle popup visibility
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Popup became visible, refresh status
        const popup = new PopupManager();
    }
}); 