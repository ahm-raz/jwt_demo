import { useState } from "react";
import axios from "axios";

export default function Logout({ onLogout }) {
  const [message, setMessage] = useState("");

  const handleLogout = async () => {
    try {
      const res = await axios.post("/logout");
      setMessage(res.data.message);
      onLogout(); // optional callback to reset frontend state
    } catch (err) {
      setMessage(err.response?.data?.message || "Error logging out");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl mb-4">Logout</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
