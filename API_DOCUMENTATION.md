# Contact Form API

## Overview

This API endpoint saves contact form submissions to a JSON file (`data/contacts.json`).

## Endpoint

### POST `/api/contact`

Submits a new contact form entry.

#### Request Body

```json
{
  "name": "John Doe",
  "phone": "+91 98765 43210",
  "email": "john@example.com",
  "service": "Tax & Compliance",
  "message": "I need help with GST filing"
}
```

#### Required Fields

- `name` (string): Full name of the contact
- `phone` (string): Phone number
- `email` (string): Email address
- `service` (string): Service of interest
- `message` (string): Message/inquiry details

#### Success Response

**Status Code:** 201 Created

```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": "1700000000000",
    "name": "John Doe",
    "phone": "+91 98765 43210",
    "email": "john@example.com",
    "service": "Tax & Compliance",
    "message": "I need help with GST filing",
    "submittedAt": "2025-11-21T10:30:00.000Z"
  },
  "savedToSheet": true
}
```

#### Error Responses

**Status Code:** 400 Bad Request

```json
{
  "error": "All fields are required"
}
```

**Status Code:** 500 Internal Server Error

```json
{
  "error": "Failed to save contact form data"
}
```

## Data Storage

All contact form submissions are stored in `/data/contacts.json` with the following structure:

```json
[
  {
    "id": "1700000000000",
    "name": "John Doe",
    "phone": "+91 98765 43210",
    "email": "john@example.com",
    "service": "Tax & Compliance",
    "message": "I need help with GST filing",
    "submittedAt": "2025-11-21T10:30:00.000Z"
  }
]
```

## Google Sheets Integration

Data is automatically saved to Google Sheets with the following columns:

- **Column A**: Timestamp (ISO format)
- **Column B**: Name
- **Column C**: Email
- **Column D**: Phone
- **Column E**: Service
- **Column F**: Message

**Setup Required**: See `GOOGLE_SHEETS_SETUP.md` for complete configuration instructions.

## Notes

- The `data` directory is automatically created if it doesn't exist
- Each submission gets a unique ID based on timestamp
- The `data` folder is ignored by git (see `.gitignore`)
- Toast notifications are shown to users on form submission
- Data is saved to both JSON file (local backup) and Google Sheets (cloud storage)
- If Google Sheets fails, the data is still saved locally
