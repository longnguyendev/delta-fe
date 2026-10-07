import * as yup from "yup";

import type { Dictionary } from "@/lib/i18n/vi";

/** The `contactForm.form` slice — `vi` and `en` share one shape. */
type ContactFormMessages = Dictionary["contactForm"]["form"];

/** Separators people actually type in a phone number. */
const PHONE_SEPARATORS = /[\s().-]/g;
/** Local (0xxxxxxxxx), international (+84xxxxxxxxx) — plus `84` without the `+`. */
const PHONE_RE = /^(?:\+?84|0)\d{8,10}$/;

/**
 * yup's built-in `.email()` accepts `a@b` (no TLD), which is not an address a
 * quote can be sent to — so the shape is pinned down as well.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Quote-request schema.
 *
 * A factory rather than a constant: every message comes from the dictionary, so
 * one schema serves both `/vi` and `/en`. Memoize the result per locale.
 *
 * `phone` is deliberately optional — the Strapi `ContactInput.phone` column is
 * nullable, so the form only checks the format when something was typed.
 */
export function contactSchema(t: ContactFormMessages) {
  return yup.object({
    name: yup.string().trim().default("").required(t.name.required),
    email: yup
      .string()
      .trim()
      .default("")
      .required(t.email.required)
      .email(t.email.invalid)
      .matches(EMAIL_RE, t.email.invalid),
    phone: yup
      .string()
      .trim()
      .default("")
      .test(
        "phone",
        t.phone.invalid,
        (value) => !value || PHONE_RE.test(value.replace(PHONE_SEPARATORS, "")),
      ),
    message: yup.string().trim().default("").required(t.message.required),
  });
}

export type ContactFormValues = yup.InferType<
  ReturnType<typeof contactSchema>
>;
