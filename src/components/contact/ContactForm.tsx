"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Full name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

const inputClasses =
  "w-full border border-navy/20 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialState);
    }
  }

  if (submitted) {
    return (
      <div className="border border-navy/10 bg-background p-8">
        <p className="text-base font-semibold text-navy">Thank you for reaching out.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Your message has been received. Our corporate team will get back to
          you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-navy">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange("name")}
          className={cn("mt-2", inputClasses)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-navy">
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          className={cn("mt-2", inputClasses)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-navy">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange("phone")}
          className={cn("mt-2", inputClasses)}
        />
      </div>

      <div>
        <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wide text-navy">
          Subject / Reason for Contact
        </label>
        <input
          id="subject"
          type="text"
          value={values.subject}
          onChange={handleChange("subject")}
          className={cn("mt-2", inputClasses)}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-navy">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          className={cn("mt-2 resize-none", inputClasses)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-navy px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-navy-secondary"
      >
        Send Message
      </button>
    </form>
  );
}
