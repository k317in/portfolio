const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();


const PORT = process.env.PORT || 5001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(bodyParser.json());

// Google Sheets Configuration
const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY, // Path to your Service Account JSON
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;; // Replace with your Google Sheet ID

// Route to Add Data to Google Sheet
app.post('/submit', async (req, res) => {
  const { name, email, contactNumber, message } = req.body;

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'contactMe!A:D', // Adjust the range to match your sheet
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[name, email, contactNumber, message]],
      },
    });

    res.status(200).json({ message: 'Data submitted successfully!', response });
  } catch (error) {
    console.error('Error appending data to Google Sheets:', error);
    res.status(500).json({ error: 'Failed to submit data' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});