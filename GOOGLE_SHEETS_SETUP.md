# Google Sheets Integration Setup Guide

## Overview

This guide will help you set up Google Sheets integration to automatically save contact form submissions.

## Prerequisites

- Google Account
- Access to Google Cloud Console

## Step-by-Step Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your project ID

### 2. Enable Google Sheets API

1. In Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Google Sheets API"
3. Click on it and press **Enable**

### 3. Create Service Account

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **Service Account**
3. Fill in the details:
   - Service account name: `contact-form-service`
   - Service account ID: (auto-generated)
   - Click **Create and Continue**
4. Grant role: **Editor** (or create a custom role with Sheets access)
5. Click **Done**

### 4. Create and Download Service Account Key

1. In the **Credentials** page, find your newly created service account
2. Click on the service account email
3. Go to the **Keys** tab
4. Click **Add Key** > **Create new key**
5. Choose **JSON** format
6. Click **Create** - the JSON file will download automatically

### 5. Extract Credentials from JSON

Open the downloaded JSON file. You'll need two values:

- `client_email` - This is your GOOGLE_SERVICE_ACCOUNT_EMAIL
- `private_key` - This is your GOOGLE_PRIVATE_KEY

### 6. Share Google Sheet with Service Account

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1CNRtng3LXFUlOi64cQPqvfrzz5P89lj911ZKOAJDv1U/edit
2. Click the **Share** button
3. Add the service account email (looks like: `contact-form-service@project-id.iam.gserviceaccount.com`)
4. Give it **Editor** permissions
5. Click **Share** or **Send**

### 7. Setup Sheet Headers (Optional but Recommended)

In your Google Sheet (Sheet1), add these headers in row 1:

| A         | B    | C     | D     | E       | F       |
| --------- | ---- | ----- | ----- | ------- | ------- |
| Timestamp | Name | Email | Phone | Service | Message |

### 8. Configure Environment Variables

Update your `.env.local` file with the actual values:

```env
GOOGLE_SHEET_ID=1CNRtng3LXFUlOi64cQPqvfrzz5P89lj911ZKOAJDv1U
GOOGLE_SERVICE_ACCOUNT_EMAIL=contact-form-service@your-project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour actual private key content\n-----END PRIVATE KEY-----\n"
```

**Important Notes:**

- The `GOOGLE_PRIVATE_KEY` must be wrapped in quotes
- Keep the `\n` characters in the private key as they are
- Never commit `.env.local` to version control

### 9. Restart Development Server

After updating `.env.local`, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
nvm use 20 && npm run dev
```

### 10. Test the Integration

1. Go to your contact form: http://localhost:3001
2. Fill out and submit the form
3. Check your Google Sheet - a new row should appear with the submission data

## Troubleshooting

### Error: "The caller does not have permission"

- Make sure you shared the Google Sheet with the service account email
- Verify the service account has Editor permissions

### Error: "Invalid credentials"

- Check that `GOOGLE_SERVICE_ACCOUNT_EMAIL` matches the email in your JSON file
- Ensure `GOOGLE_PRIVATE_KEY` includes the full key with BEGIN/END markers
- Make sure there are no extra spaces in your `.env.local` file

### Data not appearing in Google Sheets

- Check the sheet name (default is "Sheet1") - update the range in `route.ts` if different
- Verify the Sheet ID in `.env.local` matches your Google Sheet URL
- Check server logs for any error messages

### Private Key Issues

If you have issues with the private key format, you can also use this format:

```env
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...
...rest of your key...
-----END PRIVATE KEY-----"
```

## Data Format in Google Sheets

Each form submission will create a new row with:

- **Column A**: Timestamp (ISO format)
- **Column B**: Name
- **Column C**: Email
- **Column D**: Phone
- **Column E**: Service
- **Column F**: Message

## Security Best Practices

1. ✅ Never commit `.env.local` to git (already in `.gitignore`)
2. ✅ Use environment variables for all sensitive data
3. ✅ Limit service account permissions to only what's needed
4. ✅ Regularly rotate service account keys
5. ✅ Monitor Google Cloud Console for unusual activity

## Additional Resources

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google Service Accounts](https://cloud.google.com/iam/docs/service-accounts)
- [googleapis npm package](https://www.npmjs.com/package/googleapis)
