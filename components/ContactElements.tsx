"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";

export default function ContactElements() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="flex flex-col gap-y-12">
      {/** Name */}
      <input
        type="text"
        placeholder="Name"
        className="w-64 bg-gray-200 h-9 pl-2 rounded-sm"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />

      {/** Email */}
      <input
        type="text"
        placeholder="Email"
        className="w-64 bg-gray-200 h-9 pl-2 rounded-sm"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />

      {/** Subject */}
      <input
        type="text"
        placeholder="Subject"
        className="w-72 bg-gray-200 h-9 pl-2 rounded-sm"
        value={subject}
        onChange={(event) => setSubject(event.currentTarget.value)}
      />

      <textarea
        placeholder="Message"
        className="h-32 w-72 bg-gray-200 pl-2 rounded-sm"
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
      />

      <CustomButton text="Contact Us" />
    </div>
  );
}
