"use server";

import { Resend } from "resend";
import { ContactEmail } from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Invalid email format" };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["adonrenji@gmail.com"], // The destination email
      subject: `New message from ${name}`,
      react: ContactEmail({ name, email, message }),
      replyTo: email,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { error: "Failed to send message. Please try again later." };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { error: "An unexpected error occurred." };
  }
}
