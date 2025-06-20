"use client";

import dynamic from "next/dynamic";
import Sender from "@/components/task2/Sender";

const Receiver = dynamic(() => import("@/components/task2/Receiver"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-lg_title font-bold my-4">Real-Time Location Sharing</h1>
      <div className="flex flex-col my-4">
         <Sender />
        <Receiver />
      </div>
    </div>
  );
}

