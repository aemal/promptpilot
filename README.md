# 🚀 Prompt Pilot - LinkedIn AI Comment Generator

> Transform your LinkedIn engagement with AI-powered comment suggestions

Prompt Pilot is a Chrome extension that enhances LinkedIn user engagement by providing intelligent, contextually relevant comment suggestions. With a single click, generate meaningful comments that boost your professional networking and save time.

## ✨ Features

### 🎯 Core Functionality
- **Smart AI Button**: Discrete AI button appears on every LinkedIn post
- **Intelligent Content Analysis**: Extracts and analyzes post content for context
- **AI-Powered Comments**: Generates relevant, engaging comments using advanced AI
- **One-Click Integration**: Automatically inserts comments into LinkedIn's comment box
- **Clipboard Ready**: Comments are automatically copied to your clipboard
- **Visual Feedback**: Loading states and success indicators keep you informed

### 🎨 User Experience
- **Non-Intrusive Design**: Seamlessly blends with LinkedIn's native interface
- **Responsive Layout**: Works across all screen sizes and devices
- **Accessibility First**: Full keyboard navigation and screen reader support
- **Performance Optimized**: Minimal impact on LinkedIn's loading speed

### 🔧 Advanced Features
- **Error Handling**: Robust retry mechanisms and user feedback
- **Customizable Settings**: Configure API endpoints and behavior preferences
- **Privacy Focused**: Clear indication of AI usage and data handling

## 🚀 Installation

### Method 1: Chrome Web Store (Coming Soon)
*Extension will be available on the Chrome Web Store once published*

### Method 2: Developer Mode (Current)

1. **Download the Extension**
   ```bash
   git clone https://github.com/yourusername/promptpilot.git
   cd promptpilot
   ```

2. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Navigate to `chrome://extensions/`
   - Or go to Chrome Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked" button
   - Select the `promptpilot` folder (the root directory containing `manifest.json`)
   - The extension should now appear in your extensions list

5. **Verify Installation**
   - Look for the Prompt Pilot icon in your Chrome toolbar
   - Visit LinkedIn.com to see AI buttons on posts

### 🔧 Configuration

1. **API Setup**
   - Click the Prompt Pilot extension icon
   - Configure your API endpoint (default is provided)
   - Adjust settings as needed

2. **Permissions**
   The extension requires these permissions:
   - `activeTab`: To interact with LinkedIn pages
   - `storage`: To save your preferences
   - `clipboardWrite`: To copy comments to clipboard

## 📖 How to Use

1. **Browse LinkedIn**: Navigate to your LinkedIn feed as usual
2. **Find AI Buttons**: Look for the discrete AI button next to each post
3. **Generate Comment**: Click the AI button to analyze the post
4. **Review & Edit**: The generated comment appears in the comment box
5. **Submit**: Edit if needed, then submit your comment

### 🎯 User Flow
```
LinkedIn Feed → AI Button → Post Analysis → Comment Generation → Auto-Insert → Edit (Optional) → Submit
```

## 🛠️ Development

### Prerequisites
- Google Chrome (version 88+)
- Basic knowledge of JavaScript, HTML, CSS
- Text editor or IDE

### Project Structure
```
promptpilot/
├── manifest.json          # Extension configuration
├── background.js          # Background script for API calls
├── content.js            # Content script for DOM manipulation
├── popup/
│   ├── popup.html        # Extension popup interface
│   ├── popup.js          # Popup functionality
│   └── popup.css         # Popup styling
├── icons/                # Extension icons
├── styles/               # CSS files
└── README.md            # This file
```

### Development Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/promptpilot.git
   cd promptpilot
   ```

2. **Install Dependencies** (if any)
   ```bash
   npm install
   ```

3. **Load in Chrome**
   - Follow the installation instructions above
   - Make changes to the code
   - Click the refresh button on the extension in `chrome://extensions/`

4. **Testing**
   - Visit LinkedIn.com
   - Test AI button functionality
   - Check console for any errors

### 🔌 API Integration

Prompt Pilot integrates with an external AI service:

**Endpoint**: `https://aemal.app.n8n.cloud/webhook-test/99dd3a64-0ff8-45c2-a807-ff4845274bdd`

**Request Format**:
```json
{
  "post": "LinkedIn post content here..."
}
```

**Response Format**:
```json
{
  "output": "Generated comment suggestion"
}
```

## 🎯 Target Users

- **Professional Networkers**: Busy professionals who want meaningful engagement
- **Content Creators**: Users who need to maintain high engagement levels
- **Sales Professionals**: LinkedIn users focused on lead generation
- **Job Seekers**: Individuals looking to increase their visibility

## 🔒 Privacy & Security

- **Data Handling**: Post content is only sent to the AI service when you click the AI button
- **No Storage**: Personal data is not stored permanently
- **Transparency**: Clear indicators show when AI is being used
- **User Control**: You can edit or reject any AI-generated content

## 🐛 Troubleshooting

### Common Issues

**AI Button Not Appearing**
- Refresh the LinkedIn page
- Check if the extension is enabled in `chrome://extensions/`
- Ensure you're on a supported LinkedIn page

**API Errors**
- Check your internet connection
- Verify the API endpoint is accessible
- Try refreshing the page and clicking the button again

**Comments Not Inserting**
- Make sure you're clicking on a post with a comment box
- Try scrolling to load the comment section
- Check browser console for error messages

### Debug Mode
1. Open Chrome DevTools (F12)
2. Go to Console tab
3. Look for Prompt Pilot related messages
4. Report issues with console output

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow Chrome Extension best practices
- Use Manifest V3 standards
- Ensure accessibility compliance
- Test across different LinkedIn layouts
- Maintain performance standards

## 📋 Roadmap

### Phase 1: MVP Foundation ✅
- [x] Basic Chrome extension setup
- [x] AI button injection
- [x] Post content extraction
- [x] API integration
- [x] Comment insertion

### Phase 2: Enhanced UX (In Progress)
- [ ] Improved visual feedback
- [ ] Error handling and retry mechanisms
- [ ] Settings popup interface
- [ ] Clipboard integration

### Phase 3: Advanced Features (Planned)
- [ ] Custom API endpoint configuration
- [ ] Multiple comment generation options
- [ ] Performance optimizations
- [ ] Usage analytics

### Phase 4: Enterprise Features (Future)
- [ ] Comment templates
- [ ] Bulk operations
- [ ] Team collaboration
- [ ] Advanced analytics

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern Chrome Extension APIs
- Powered by advanced AI technology
- Inspired by the need for better LinkedIn engagement

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/promptpilot/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/promptpilot/discussions)
- **Email**: support@promptpilot.dev

---

**Made with ❤️ for the LinkedIn community**

*Prompt Pilot - Making professional networking effortless, one comment at a time.* 