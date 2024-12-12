const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const stringify = require("csv-stringify");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// CSV file path
const csvFilePath = path.join(__dirname, "submissions.csv");

// Ensure CSV file has headers (executed only once)
if (!fs.existsSync(csvFilePath)) {
  const headers = ["Name", "Email", "Contact Number", "Message"];
  fs.writeFileSync(csvFilePath, headers.join(",") + "\n");
}

// Endpoint to handle form submission
app.post("/submit", (req, res) => {
  const { name, email, contactNumber, message } = req.body;

  // Prepare data row
  const timestamp = new Date().toISOString();
  const dataRow = [name, email, contactNumber, message, timestamp];

  // Append data to CSV file
  fs.appendFile(csvFilePath, dataRow.join(",") + "\n", (err) => {
    if (err) {
      console.error("Error writing to CSV file:", err);
      return res.status(500).send("Failed to store data.");
    }

    res.status(200).send("Data saved successfully!");
  });
});

app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, "submissions.csv");
    
    // Ensure the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("File not found");
    }
  
    res.download(filePath, "submissions.csv", (err) => {
      if (err) {
        console.error("Error downloading file:", err);
        res.status(500).send("Error downloading file");
      }
    });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});