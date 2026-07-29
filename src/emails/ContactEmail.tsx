import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
  Img,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#6366f1", // indigo-500
              },
            },
          },
        }}
      >
        <Body className="bg-slate-100 font-sans text-slate-900 py-10">
          <Container className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden mx-auto max-w-[600px]">
            {/* Header / Brand */}
            <Section className="bg-indigo-600 px-8 py-6 text-center">
              <Text className="text-white text-2xl font-bold m-0 tracking-tight">
                Adon Renji Portfolio
              </Text>
              <Text className="text-indigo-200 text-sm m-0 mt-1">
                New Contact Form Submission
              </Text>
            </Section>

            {/* Content */}
            <Section className="px-8 py-8">
              <Heading className="text-xl font-semibold text-slate-800 m-0 mb-6">
                You received a new message!
              </Heading>

              <Section className="bg-slate-50 border border-slate-100 rounded-xl p-6 mb-6">
                <Text className="m-0 mb-2 text-sm text-slate-500 font-medium uppercase tracking-wider">
                  Sender Details
                </Text>
                <Text className="m-0 mb-1 text-base text-slate-900">
                  <span className="font-semibold text-slate-700">Name:</span>{" "}
                  {name}
                </Text>
                <Text className="m-0 text-base text-indigo-600">
                  <span className="font-semibold text-slate-700">Email:</span>{" "}
                  <a href={`mailto:${email}`} className="text-indigo-600 underline">
                    {email}
                  </a>
                </Text>
              </Section>

              <Hr className="border-slate-200 my-6" />

              <Section>
                <Text className="m-0 mb-3 text-sm text-slate-500 font-medium uppercase tracking-wider">
                  Message Content
                </Text>
                <Text className="m-0 text-base text-slate-700 leading-relaxed whitespace-pre-wrap bg-slate-50 p-6 rounded-xl border border-slate-100">
                  {message}
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-slate-50 px-8 py-6 border-t border-slate-100 text-center">
              <Text className="text-xs text-slate-400 m-0 leading-relaxed">
                This email was sent automatically from your portfolio contact form.
                <br />
                To reply, simply reply directly to this email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactEmail.PreviewProps = {
  name: "John Doe",
  email: "john@example.com",
  message:
    "Hi Adon, I saw your portfolio and really loved your work. I'm reaching out to see if you would be interested in collaborating on a new project. Let me know when you're free for a quick call!",
} as ContactEmailProps;

export default ContactEmail;
