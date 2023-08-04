"use client";

import Image from "next/image";
import banner from "@/public/contact-us-banner.png";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

/**
 * Contact Page
 *
 * @returns Contact component
 */
export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="block space-y-12 mt-40 max-w-6xl mx-16 xl:mx-auto">
      <div className="flex flex-col items-start gap-y-7">
        <div className="flex flex-row text-5xl md:text-4xl lg:text-5xl font-bold space-x-2">
          <h3 className="text-primary">Contact</h3>
          <h3>Us</h3>
        </div>
        <Image src={banner} height={300} alt="Contact page banner" />
      </div>

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
    </div>
  );
}
