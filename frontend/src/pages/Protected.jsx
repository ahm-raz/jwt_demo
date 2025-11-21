import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Protected() {
  const [message, setMessage] = useState("");
  useEffect(()=>{
    const fetchProtected = async () => {
      try {
        const res = await axios.get("/protected");
        setMessage(res.data.message)
      } catch (error) {
        setMessage(error.response?.data?.message || "Error fetching protected data")
      }
    }
    fetchProtected();
  },[]);
  return (
    <div className="max-w-md">
      <h1 className="">Protected Page</h1>
      <p>{message}</p>
    </div>
  )
}