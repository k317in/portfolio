const { google } = require('googleapis');

const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
  keyFile: 'path-to-your-service-account-key.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const readSheet = async () => {
  const authClient = await auth.getClient();
  const result = await sheets.spreadsheets.values.get({
    auth: authClient,
    spreadsheetId: 'YOUR_SPREADSHEET_ID',
    range: 'Sheet1!A1:E10', // Adjust range as needed
  });
  console.log(result.data.values); // The data from the sheet
};

readSheet();