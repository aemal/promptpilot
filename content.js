// Prompt Pilot Content Script
// This script runs on LinkedIn pages to inject AI buttons and handle interactions

console.log('🚀 Prompt Pilot content script loaded');

// Basic initialization - will be expanded in Task #2
class PromptPilotContent {
    constructor() {
        this.settings = null;
        this.init();
    }

    async init() {
        console.log('Initializing Prompt Pilot on LinkedIn...');
        
        // Load settings
        await this.loadSettings();
        
        // Listen for settings updates from popup
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.type === 'SETTINGS_UPDATED') {
                this.settings = message.settings;
                console.log('Settings updated:', this.settings);
            }
        });

        // Basic readiness check
        if (window.location.hostname.includes('linkedin.com')) {
            console.log('✅ Prompt Pilot ready on LinkedIn');
        }
    }

    async loadSettings() {
        try {
            const defaultSettings = {
                apiEndpoint: 'https://aemal.app.n8n.cloud/webhook-test/99dd3a64-0ff8-45c2-a807-ff4845274bdd',
                autoInsert: true,
                copyToClipboard: true,
                buttonStyle: 'minimal'
            };
            
            const result = await chrome.storage.sync.get(defaultSettings);
            this.settings = { ...defaultSettings, ...result };
            console.log('Settings loaded:', this.settings);
        } catch (error) {
            console.error('Error loading settings:', error);
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PromptPilotContent();
    });
} else {
    new PromptPilotContent();
} 