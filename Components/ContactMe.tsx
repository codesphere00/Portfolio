'use client';

import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Footer from "./Footer";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// PLACEHOLDER VARIABLE - Get your free access key at https://web3forms.com
// Enter your key below in VS Code to receive submissions directly in your email inbox!
const web3FormsAccessKey = "";

function ContactMe() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (web3FormsAccessKey) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsAccessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "Portfolio Contact Inquiry",
            message: formData.message,
          }),
        });

        const result = await response.json();
        if (result.success) {
          alert("Success! Your message was sent directly. Thank you!");
          reset(); // Clear form fields on success
        } else {
          alert("Unable to send directly. Opening your email app instead...");
          triggerMailtoFallback(formData);
        }
      } catch (error) {
        alert("Network error. Opening your email app instead...");
        triggerMailtoFallback(formData);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback to local mailto if no access key configured
      triggerMailtoFallback(formData);
    }
  };

  const triggerMailtoFallback = (formData: Inputs) => {
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nileshkmt2005@gmail.com?subject=${subject}&body=${body}`;
    alert("Message Prepared! Opening your default email client to send to nileshkmt2005@gmail.com...");
  };

  return (
    <div className="min-h-screen flex relative flex-col justify-between items-center max-w-7xl px-6 md:px-10 mx-auto pt-24 pb-0 w-full overflow-y-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:block">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 md:space-y-10 w-full max-w-2xl mt-auto mb-auto pt-8">
        <h4 className="text-2xl md:text-4xl font-semibold text-center leading-snug">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let&apos;s Talk.</span>
        </h4>

        <div className="space-y-4 md:space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+8112272380</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">nileshkmt2005@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">India</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full px-4 md:px-0 max-w-lg mx-auto">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div className="flex-1">
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                id="name"
                {...register("name", { required: true })}
                placeholder="Name"
                className="contactInput"
                type="text"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="contactInput"
                type="email"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <label htmlFor="subject" className="sr-only">Subject</label>
          <input
            id="subject"
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            disabled={isSubmitting}
          />

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput h-32 md:h-auto"
            required
            disabled={isSubmitting}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#F7AB0A] py-4 md:py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]/90 transition-colors duration-200 disabled:opacity-50"
            aria-label="Submit Contact Form"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default ContactMe;
