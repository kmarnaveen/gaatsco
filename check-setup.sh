#!/bin/bash

echo "🔍 Checking Google Sheets Integration Setup..."
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ .env.local file not found"
    echo "   Please create .env.local with your Google credentials"
    exit 1
else
    echo "✅ .env.local file exists"
fi

# Check if required env variables are set (basic check)
if grep -q "GOOGLE_SHEET_ID=" .env.local && \
   grep -q "GOOGLE_SERVICE_ACCOUNT_EMAIL=" .env.local && \
   grep -q "GOOGLE_PRIVATE_KEY=" .env.local; then
    echo "✅ Required environment variables are defined"
else
    echo "❌ Missing required environment variables"
    echo "   Make sure .env.local contains:"
    echo "   - GOOGLE_SHEET_ID"
    echo "   - GOOGLE_SERVICE_ACCOUNT_EMAIL"
    echo "   - GOOGLE_PRIVATE_KEY"
    exit 1
fi

# Check if googleapis is installed
if [ -d "node_modules/googleapis" ]; then
    echo "✅ googleapis package is installed"
else
    echo "❌ googleapis package not found"
    echo "   Run: npm install googleapis --legacy-peer-deps"
    exit 1
fi

echo ""
echo "✨ Setup looks good! Next steps:"
echo ""
echo "1. Make sure you've shared your Google Sheet with the service account"
echo "2. Verify the Sheet ID matches your Google Sheet URL"
echo "3. Restart your dev server: nvm use 20 && npm run dev"
echo "4. Test the form at: http://localhost:3001"
echo ""
echo "📖 For detailed setup instructions, see: GOOGLE_SHEETS_SETUP.md"
