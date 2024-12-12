import React, { useState } from "react";

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();

    // Static admin credentials (use secure methods in production)
    const adminUsername = "admin";
    const adminPassword = "password123";

    if (credentials.username === adminUsername && credentials.password === adminPassword) {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleDownload = () => {
    fetch("http://localhost:5001/download")
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Failed to download file");
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "submissions.csv";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => console.error("Error downloading file:", error));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h2>Welcome, Admin</h2>
          <button onClick={handleDownload}>Download CSV File</button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;