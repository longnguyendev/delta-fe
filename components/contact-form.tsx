"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormValues } from "@/constants";
import { useCreateContactMutation } from "@/generates";
import type { Dictionary } from "@/lib/i18n/vi";
import { Button } from "./ui";

/** Checkmark glyphs — the same mark the design template uses, both scales. */
function CheckMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M3.5 9.5L7 13l7.5-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Quote-request form over the `createContact` mutation.
 *
 * A Client Component because it owns the field state; the locale arrives as a
 * prop — `lang()` is server-only and must not be imported here.
 */
export function ContactForm({
  t,
  lang,
}: {
  t: Dictionary["contactForm"];
  lang: string;
}) {
  const [sent, setSent] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  // The schema carries dictionary messages, so it is rebuilt per locale.
  // react-hook-form defaults match the intent: validate on submit, then
  // re-check each field on change.
  const schema = useMemo(() => contactSchema(t.form), [t.form]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues, unknown, ContactFormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const mutation = useCreateContactMutation<Error>({
    onSuccess: () => setSent(true),
    // The visitor gets the localized line; the raw Strapi message is for us.
    onError: (error) => console.error("createContact failed", error),
  });

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const onSubmit = handleSubmit((values) => {
    mutation.mutate({
      data: {
        name: values.name,
        email: values.email,
        // The column is optional — send nothing rather than an empty string.
        phone: values.phone || undefined,
        message: values.message,
        locale: lang,
      },
    });
  });

  function handleReset() {
    mutation.reset();
    reset();
    setSent(false);
  }

  const pending = mutation.isPending;

  const fieldClass = (invalid: boolean) =>
    `h-11 w-full rounded-md border bg-surface px-3.5 text-[15px] text-fg transition-colors duration-150 outline-none placeholder:text-text-secondary disabled:opacity-60 ${
      invalid ? "border-error" : "border-line"
    }`;

  const labelClass =
    "mb-1.5 flex items-baseline justify-between gap-3 text-[13.5px] font-semibold text-fg";

  return (
    <div
      id="contact-form"
      className="mx-auto mt-12 grid max-w-[1000px] overflow-hidden rounded-md border border-line bg-container min-[900px]:grid-cols-[minmax(320px,4.6fr)_minmax(380px,5.4fr)]"
    >
      {/* Brand panel — one lime surface, ink text (never white-on-lime). */}
      <div className="relative flex min-h-[300px] flex-col justify-between gap-8 overflow-hidden bg-primary p-8 md:p-10 min-[900px]:min-h-0">
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 text-on-primary opacity-[0.14]"
        >
          <defs>
            <pattern
              id="contact-form-dots"
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.6" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="220" height="220" fill="url(#contact-form-dots)" />
        </svg>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[140px] -left-[100px] h-80 w-80 rounded-full bg-primary-active opacity-45"
        />

        <div className="relative flex items-center gap-3">
          <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white/20 text-on-primary">
            <CheckMark size={14} />
          </span>
          <span className="font-head text-lg font-extrabold tracking-[-0.01em] text-on-primary">
            {t.panel.brand}
          </span>
        </div>

        <div className="relative">
          <h3 className="text-[clamp(22px,2.6vw,30px)] leading-[1.15] tracking-[-0.02em] text-on-primary md:max-w-[24ch]">
            {t.panel.title}
          </h3>
          <ul className="mt-6 list-none p-0">
            {t.panel.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 py-1.5 text-[15px] leading-[1.45] text-on-primary"
              >
                <span className="mt-[3px]">
                  <CheckMark size={18} />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Form card — 1px rule, 3px radius, no shadow. */}
      <div className="border-t border-line p-6 md:p-8 min-[900px]:border-t-0 min-[900px]:border-l">
        {sent ? (
          <div
            ref={successRef}
            role="status"
            tabIndex={-1}
            className="flex flex-col items-center gap-4 py-8 text-center"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-success-bg text-success-active">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 13.5l4.5 4.5L20 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="text-xl text-fg">{t.success.title}</h3>
            <p className="max-w-[38ch] text-text-secondary">{t.success.body}</p>
            <Button variant="ghost" onClick={handleReset}>
              {t.success.reset}
            </Button>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={onSubmit}
            aria-busy={pending}
            className="flex flex-col gap-5"
          >
            <header>
              <h3 className="text-[clamp(20px,2.2vw,24px)] tracking-[-0.015em]">
                {t.form.title}
              </h3>
              <p className="mt-1.5 text-[15px] text-text-secondary">
                {t.form.support}
              </p>
            </header>

            <div className="grid gap-5 min-[540px]:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className={labelClass}>
                  <span>
                    {t.form.name.label}
                    <span aria-hidden="true" className="ml-0.5 text-accent-2">
                      *
                    </span>
                  </span>
                </label>
                <input
                  id="cf-name"
                  type="text"
                  autoComplete="name"
                  placeholder={t.form.name.placeholder}
                  disabled={pending}
                  aria-required="true"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "cf-name-error" : undefined}
                  className={fieldClass(Boolean(errors.name))}
                  {...register("name")}
                />
                {errors.name ? (
                  <p id="cf-name-error" className="mt-1 text-sm text-error">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="cf-email" className={labelClass}>
                  <span>
                    {t.form.email.label}
                    <span aria-hidden="true" className="ml-0.5 text-accent-2">
                      *
                    </span>
                  </span>
                </label>
                <input
                  id="cf-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t.form.email.placeholder}
                  disabled={pending}
                  aria-required="true"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "cf-email-error" : undefined}
                  className={fieldClass(Boolean(errors.email))}
                  {...register("email")}
                />
                {errors.email ? (
                  <p id="cf-email-error" className="mt-1 text-sm text-error">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="cf-phone" className={labelClass}>
                <span>{t.form.phone.label}</span>
                <span className="font-normal text-text-secondary">
                  {t.form.phone.optional}
                </span>
              </label>
              <input
                id="cf-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder={t.form.phone.placeholder}
                disabled={pending}
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={
                  errors.phone ? "cf-phone-error" : undefined
                }
                className={fieldClass(Boolean(errors.phone))}
                {...register("phone")}
              />
              {errors.phone ? (
                <p id="cf-phone-error" className="mt-1 text-sm text-error">
                  {errors.phone.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="cf-message" className={labelClass}>
                <span>
                  {t.form.message.label}
                  <span aria-hidden="true" className="ml-0.5 text-accent-2">
                    *
                  </span>
                </span>
              </label>
              <textarea
                id="cf-message"
                rows={5}
                placeholder={t.form.message.placeholder}
                disabled={pending}
                aria-required="true"
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={
                  errors.message ? "cf-message-error" : undefined
                }
                className={`w-full resize-y rounded-md border bg-surface px-3.5 py-3 text-[15px] leading-[1.6] text-fg transition-colors duration-150 outline-none placeholder:text-text-secondary disabled:opacity-60 ${
                  errors.message ? "border-error" : "border-line"
                }`}
                {...register("message")}
              />
              {errors.message ? (
                <p id="cf-message-error" className="mt-1 text-sm text-error">
                  {errors.message.message}
                </p>
              ) : null}
            </div>

            {mutation.isError ? (
              <p
                role="alert"
                className="rounded-md border border-error-border bg-error-bg px-3.5 py-3 text-sm text-error"
              >
                {t.error.generic}
                {process.env.NODE_ENV === "development" &&
                mutation.error?.message ? (
                  <span className="mt-1 block text-xs opacity-80">
                    {mutation.error.message}
                  </span>
                ) : null}
              </p>
            ) : null}

            <div className="flex flex-col gap-2.5">
              <Button
                type="submit"
                size="lg"
                disabled={pending}
                className="w-full disabled:opacity-60"
              >
                {pending ? t.form.submitting : t.form.submit}
              </Button>
              <p className="flex items-center gap-2 text-sm text-text-secondary">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    d="M2 6V4.5a4.5 4.5 0 019 0V6m-10 0h11v7H1.5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{t.form.privacy}</span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
