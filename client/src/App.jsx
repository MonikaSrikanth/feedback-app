import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  //const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    const data = await response.json();
    alert(data.message);
    setName("");
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "90%",
          maxWidth: "800px",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "1.5rem" }}>
          Feedback Form
        </h1>

        <label style={{ fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <label style={{ fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>
          Message
        </label>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="5"
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "1.2rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit 
        </button>
      </form>
    </div>
  );
}

export default App;
