// Prompt Pilot Background Script (Service Worker)
// Handles API communication and cross-origin requests

console.log('🚀 Prompt Pilot background script loaded');

// Basic service worker setup - will be expanded in Task #3
class PromptPilotBackground {
    constructor() {
        this.init();
    }

    init() {
        console.log('Initializing Prompt Pilot background service...');
        
        // Listen for extension installation
        chrome.runtime.onInstalled.addListener((details) => {
            console.log('Prompt Pilot installed:', details.reason);
            
            if (details.reason === 'install') {
                // Set default settings on first install
                this.setDefaultSettings();
            }
        });

        // Listen for messages from content script
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            this.handleMessage(message, sender, sendResponse);
            return true; // Keep message channel open for async responses
        });

        console.log('✅ Prompt Pilot background service ready');
    }

    async setDefaultSettings() {
        const defaultSettings = {
            apiEndpoint: 'https://aemal.app.n8n.cloud/webhook-test/99dd3a64-0ff8-45c2-a807-ff4845274bdd',
            autoInsert: true,
            copyToClipboard: true,
            buttonStyle: 'minimal'
        };

        try {
            await chrome.storage.sync.set(defaultSettings);
            console.log('Default settings initialized');
        } catch (error) {
            console.error('Error setting default settings:', error);
        }
    }

    async handleMessage(message, sender, sendResponse) {
        try {
            switch (message.type) {
                case 'API_REQUEST':
                    // Will be implemented in Task #3
                    console.log('API request received (placeholder)');
                    sendResponse({ success: false, error: 'Not implemented yet' });
                    break;
                    
                default:
                    console.log('Unknown message type:', message.type);
                    sendResponse({ success: false, error: 'Unknown message type' });
            }
        } catch (error) {
            console.error('Error handling message:', error);
            sendResponse({ success: false, error: error.message });
        }
    }
}

// Initialize background service
new PromptPilotBackground(); 