// hooks/useSignalR.ts
import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";

interface UseSignalROptions {
  userName: string;
  onReceive?: (data: { userName: string; lat: number; lon: number }) => void;
}

export function useSignalR({ userName, onReceive }: UseSignalROptions) {
  const connectionRef = useRef<signalR.HubConnection | null>(null);

  useEffect(() => {
    const connect = new signalR.HubConnectionBuilder()
      .withUrl("https://tech-test.raintor.com/Hub")
      .withAutomaticReconnect()
      .build();

    connectionRef.current = connect;

    connect
      .start()
      .then(() => console.log("Connected to SignalR"))
      .catch((err) => console.error("SignalR Connection Error:", err));

    connect.on("ReceiveLatLon", (payload) => {
      if (onReceive) onReceive(payload);
    });

    return () => {
      connect.stop();
    };
  }, [onReceive]);

  const sendLocation = (lat: number, lon: number) => {
    connectionRef.current?.invoke("SendLatLon", lat, lon, userName).catch((err) => {
      console.error("SendLatLon failed:", err);
    });
  };

  return { sendLocation };
}
