'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<string>('');

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('');

    if (!validate()) {
      return;
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      setStatus('Something went wrong. Please try again.');
      return;
    }

    setForm(initialState);
    setErrors({});
    setStatus('Thanks — we will follow up shortly.');
  };

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold uppercase tracking-wider">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full rounded-xl border border-line bg-cream px-4 py-3"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="mt-1 text-sm text-accent">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-wider">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full rounded-xl border border-line bg-cream px-4 py-3"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="mt-1 text-sm text-accent">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold uppercase tracking-wider">
          Company
        </label>
        <input
          id="company"
          name="company"
          value={form.company}
          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
          className="w-full rounded-xl border border-line bg-cream px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-xl border border-line bg-cream px-4 py-3"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="mt-1 text-sm text-accent">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="rounded-full border border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-cream"
      >
        Send Message
      </button>

      {status && <p className="text-sm text-charcoal/80">{status}</p>}
    </form>
  );
}
