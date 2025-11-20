# Contact Form Data Integration

This project includes a contact form that automatically saves submissions to both a local JSON file and Google Sheets.

## 🚀 Quick Start

### 1. Google Sheets Setup (Required)

Follow the detailed guide in **`GOOGLE_SHEETS_SETUP.md`** to:

- Create a Google Cloud Project
- Enable Google Sheets API
- Create a Service Account
- Download credentials
- Share your Google Sheet with the service account

### 2. Configure Environment Variables

Create/update `.env.local` with your Google credentials:

```env
GOOGLE_SHEET_ID=1CNRtng3LXFUlOi64cQPqvfrzz5P89lj911ZKOAJDv1U
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

### 3. Verify Setup

Run the setup checker:

```bash
./check-setup.sh
```

### 4. Restart Server

```bash
nvm use 20 && npm run dev
```

### 5. Test the Form

Visit http://localhost:3001 and submit a test form. Check both:

- `data/contacts.json` file (created automatically)
- Your Google Sheet (should show a new row)

## 📋 Features

✅ **Dual Storage**: Saves to both JSON file and Google Sheets
✅ **Automatic Backup**: Local JSON file acts as a backup
✅ **Error Handling**: If Google Sheets fails, data is still saved locally
✅ **Toast Notifications**: User-friendly feedback on form submission
✅ **Validation**: Client and server-side validation
✅ **Timestamps**: Each submission includes a timestamp and unique ID

## 📂 Files Overview

- **`app/api/contact/route.ts`** - API endpoint for form submissions
- **`components/cta.tsx`** - Contact form component with submission logic
- **`GOOGLE_SHEETS_SETUP.md`** - Detailed Google Sheets setup guide
- **`API_DOCUMENTATION.md`** - API endpoint documentation
- **`check-setup.sh`** - Script to verify configuration
- **`.env.local`** - Environment variables (not in git)
- **`data/contacts.json`** - Local storage for submissions (not in git)

## 🔒 Security

- `.env.local` is excluded from git
- `data/` directory is excluded from git
- Service account has minimal required permissions
- Private keys are never exposed to the client

## 📊 Google Sheet Structure

| Column A  | Column B | Column C | Column D | Column E | Column F |
| --------- | -------- | -------- | -------- | -------- | -------- |
| Timestamp | Name     | Email    | Phone    | Service  | Message  |

## 🆘 Troubleshooting

If form submissions aren't appearing in Google Sheets:

1. **Check permissions**: Ensure the service account email has Editor access to your sheet
2. **Verify credentials**: Double-check all values in `.env.local`
3. **Check logs**: Look at the terminal for error messages
4. **Test locally**: Verify `data/contacts.json` is being created

For more help, see the detailed troubleshooting section in `GOOGLE_SHEETS_SETUP.md`.

## 📚 Documentation

- Full API documentation: `API_DOCUMENTATION.md`
- Google Sheets setup: `GOOGLE_SHEETS_SETUP.md`

---

**Your Google Sheet**: https://docs.google.com/spreadsheets/d/1CNRtng3LXFUlOi64cQPqvfrzz5P89lj911ZKOAJDv1U/edit
