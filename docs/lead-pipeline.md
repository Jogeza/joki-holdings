# Joki lead pipeline

The site submits normalized JSON to `POST /api/leads`. The frontend uses `REACT_APP_LEAD_ENDPOINT`; for same-origin Vercel hosting set it to `/api/leads`.

## Owner configuration

The API is prepared for:

- Supabase REST storage using `joki_leads`
- Resend internal notification email
- Optional Upstash Redis request limiting

Create the storage table with columns matching the record written by `api/leads.js`: `lead_id`, `created_at`, `service`, `source`, `name`, `email`, `phone`, `company`, `country`, `city`, `message`, `project_details` (JSON/JSONB), `consent` (boolean), and `delivery_state`.

Set the variables in `.env.example` in the server environment. Keep service keys server-only. Configure `REACT_APP_LEAD_ENDPOINT=/api/leads` for the browser build.

The API persists before notifying. If storage succeeds but notification fails, the API still accepts the lead and records `NOTIFICATION_FAILED` for recovery. If storage is unavailable, the visitor receives an error and no success message.

## Local behavior and testing

Without a configured endpoint, the frontend remains usable and does not claim delivery; WhatsApp remains available. Run `npm test -- --watchAll=false` for validation tests. Real storage retention and email delivery require an owner-configured staging environment and a real test submission.

Rotate or revoke provider keys through the provider dashboards, then update the server environment without committing credentials.
