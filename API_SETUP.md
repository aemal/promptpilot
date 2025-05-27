# API Key Setup Guide

This project uses Task Master AI with MCP (Model Context Protocol) integration. To use the AI features, you'll need to set up API keys for the AI providers you want to use.

## Security Notice

**Never commit API keys to version control!** This repository includes safety measures to prevent accidental exposure of your API keys.

## Setup Instructions

### Option 1: Using Local MCP Configuration (Recommended for Cursor)

1. Copy the template configuration:
   ```bash
   cp .cursor/mcp.json .cursor/mcp.local.json
   ```

2. Edit `.cursor/mcp.local.json` and replace the placeholder values with your actual API keys:
   ```json
   {
       "mcpServers": {
           "task-master-ai": {
               "env": {
                   "ANTHROPIC_API_KEY": "your-actual-anthropic-key-here",
                   "PERPLEXITY_API_KEY": "your-actual-perplexity-key-here",
                   "OPENAI_API_KEY": "your-actual-openai-key-here"
               }
           }
       }
   }
   ```

3. In Cursor, use the local configuration by pointing to `.cursor/mcp.local.json` instead of `.cursor/mcp.json`

### Option 2: Using Environment Variables

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your API keys:
   ```
   ANTHROPIC_API_KEY=your-actual-anthropic-key-here
   PERPLEXITY_API_KEY=your-actual-perplexity-key-here
   OPENAI_API_KEY=your-actual-openai-key-here
   ```

## Required API Keys

- **ANTHROPIC_API_KEY**: For Claude models (primary recommendation)
- **PERPLEXITY_API_KEY**: For research-backed operations
- **OPENAI_API_KEY**: For GPT models (optional)

## Getting API Keys

- **Anthropic**: https://console.anthropic.com/
- **Perplexity**: https://www.perplexity.ai/settings/api
- **OpenAI**: https://platform.openai.com/api-keys

## Files to Keep Private

The following files contain sensitive information and should never be committed:
- `.cursor/mcp.local.json`
- `.env`

These are already included in `.gitignore` to prevent accidental commits. 