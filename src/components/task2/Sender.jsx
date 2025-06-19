"use client";

import { useEffect } from "react";
import { useSignalR } from "@/hooks/useSignalR";

export default function Sender() {
  const userName = "aljoboyer@gmail.com"; 
  const { sendLocation } = useSignalR({ userName });

  useEffect(() => {
    const interval = setInterval(() => {
      const lat = 23.81 + Math.random() * 0.01;
      const lon = 90.41 + Math.random() * 0.01;
      sendLocation(lat, lon);
    }, 3000);

    return () => clearInterval(interval);
  }, [sendLocation]);

  return <div>Sending live location as <b>{userName}</b></div>;
}
