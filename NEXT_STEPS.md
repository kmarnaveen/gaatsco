# 📋 Next Steps - Google Sheets Integration

## ✅ What's Already Done

1. ✅ Installed `googleapis` package
2. ✅ Created API endpoint that saves to both JSON and Google Sheets
3. ✅ Updated contact form with submission handling
4. ✅ Added toast notifications for user feedback
5. ✅ Created comprehensive documentation
6. ✅ Added environment variable template

## 🎯 What You Need to Do Now

### Step 1: Get Google Cloud Credentials (15 minutes)

Follow **`GOOGLE_SHEETS_SETUP.md`** to:

1. Create Google Cloud Project
2. Enable Google Sheets API
3. Create Service Account
4. Download JSON credentials file
5. Share your Google Sheet with the service account email

### Step 2: Update .env.local (2 minutes)

Open `.env.local` and replace with your actual values:

```env
GOOGLE_SHEET_ID=1CNRtng3LXFUlOi64cQPqvfrzz5P89lj911ZKOAJDv1U
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-actual-email@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
Your actual private key from the JSON file
-----END PRIVATE KEY-----"
```

**Important:**

- Copy the ENTIRE private key including BEGIN/END markers
- Keep the quotes around the private key
- The `\n` characters should remain as `\n` (not actual line breaks)

### Step 3: Verify Setup (1 minute)

Run the verification script:

```bash
./check-setup.sh
```

### Step 4: Restart Server (1 minute)

Stop your current server (Ctrl+C) and restart:

```bash
nvm use 20 && npm run dev
```

### Step 5: Test! (2 minutes)

1. Go to http://localhost:3001
2. Scroll to the contact form
3. Fill it out and submit
4. Check your Google Sheet - you should see a new row!
5. Also check `data/contacts.json` for the local backup

## 📖 Documentation Files

- **`GOOGLE_SHEETS_SETUP.md`** - Detailed step-by-step setup guide
- **`CONTACT_FORM_README.md`** - Overview and quick start
- **`API_DOCUMENTATION.md`** - API endpoint details
- **`check-setup.sh`** - Setup verification script

## 🔗 Your Google Sheet

https://docs.google.com/spreadsheets/d/1CNRtng3LXFUlOi64cQPqvfrzz5P89lj911ZKOAJDv1U/edit

## 💡 Tips

- Start with **`GOOGLE_SHEETS_SETUP.md`** - it has screenshots and detailed instructions
- Don't skip sharing the sheet with your service account - this is the most common issue!
- If you get stuck, check the Troubleshooting section in the setup guide
- The local JSON file (`data/contacts.json`) will work even if Google Sheets isn't configured

## ⚡ Quick Command Reference

```bash
# Verify setup
./check-setup.sh

# Start development server
nvm use 20 && npm run dev

# Check if Node 20 is active
node --version  # Should show v20.x.x

# View environment variables (without exposing secrets)
grep GOOGLE .env.local | cut -d= -f1
```

---

**Need help?** Check `GOOGLE_SHEETS_SETUP.md` for detailed troubleshooting steps!
