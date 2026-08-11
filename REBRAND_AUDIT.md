# Rebrand Audit — Nyumba → Joki Holdings

This non-destructive audit lists all user-facing references to the legacy brand (Nyumba / Nyumba Dynamics) found in the repository during initial inspection. For each occurrence I include: file path, matched string(s), type, and proposed action. I will not make destructive changes until these actions are either executed in focused commits or explicitly confirmed.

Summary (high level)
- Many user-facing strings, image alt text, image filenames, SEO metadata and public/index.html content still reference "Nyumba" or "Nyumba Dynamics".
- Footer contains numerous Nyumba references including legacy social links and phone numbers.
- PageSEO uses SITE_NAME = "Nyumba Dynamics".
- Several pages (HomeSlider, About, multiple pages under src/pages) include Nyumba content and Nyumba-branded image imports.

Audit items (non-exhaustive — these are the concrete items discovered so far):

1) src/component/Footer.tsx
   - Matches: "Stay Updated With Nyumba Dynamics", "Hire The Right Professionals", image alt attributes containing "Nyumba Dynamics project", social links to "nyumbadynamics" (facebook/x/instagram), phone number +256 7616 48679, copyright text "Nyumba Dynamics"
   - Type: user-facing copy / social links / assets / contact info
   - Planned action: Replace entire footer with Joki-branded content, remove or neutralize Nyumba social links, update phone numbers and emails to the verified Joki contacts, replace Nyumba images or archive them.

2) src/component/PageSEO.tsx
   - Matches: const SITE_NAME = 'Nyumba Dynamics'
   - Type: metadata default
   - Planned action: Change SITE_NAME to 'Joki Holdings Ltd' and ensure default templates use Joki copy and canonical https://www.jokiholdings.com

3) src/pages/HomeSlider.tsx
   - Matches: PageSEO title/description referencing handyman services and "Hire the right professionals" and multiple alt text references containing "Nyumba Dynamics" and copy such as "about nyumba dynamics", phone links to +2567761648679 and WhatsApp links to that number.
   - Type: page content, metadata, links, imagery
   - Planned action: Replace homepage content with new corporate sections (hero, who we are, businesses placeholders, approach, leadership, contact CTA). Remove Nyumba imagery or archive.

4) src/pages/About.tsx
   - Matches: multiple occurrences of "about nyumba dynamics", page description including "HEMS Nyumba Dynamics Company Limited" and "Hire The Right Professional" copy, phone numbers +256761648679 and image alt text referencing Nyumba Dynamics
   - Type: page content, imagery, metadata
   - Planned action: Rewrite About page to Joki corporate copy and replace imagery alt text. Archive or relocate Nyumba imagery.

5) public/index.html
   - Matches: meta description content includes "Nyumba Dynamics (NYD) — Home and Enterprise Maintenance Services... Hire The Right Professionals." Title currently reads "Joki Holdings | Creative, Print & Digital Solutions" (already Joki) — meta description still Nyumba.
   - Type: metadata
   - Planned action: Update meta description to Joki Holdings description and ensure theme-color and manifest references are updated to Joki brand assets.

6) public/manifest.json
   - Matches: generic Create React App manifest fields and theme_color: #0D0D0D; icons referencing logo192.png/logo512.png
   - Type: manifest / PWA config
   - Planned action: Update manifest name/short_name/icons/theme_color/background_color to Joki brand assets once logo assets are placed in public/brand-assets.

7) src/assets/images/about/* and src/assets/images/footer/*
   - Matches: filenames and image ALT attributes referencing Nyumba Dynamics and project images dedicated to Nyumba work.
   - Type: assets / imagery
   - Planned action: Move Nyumba-branded imagery to archive folder (e.g., src/assets/images/archive/nyumba/) and replace active references with neutral placeholders or editorial placeholders. Do not delete original files until watermark/usage is validated.

8) src/pages/SmartHome.tsx, Services pages, Project pages, Blog pages, Team pages
   - Matches: these pages contain copy, alt text and images referencing Nyumba or that speak to handyman/HEMS business model.
   - Type: page content
   - Planned action: Replace or rework content to reflect Joki Holdings positioning (broad holding company) — remove HEMS-specific copy unless it maps to an existing Joki venture.

9) src/component/Header.tsx
   - Matches: imports logo from src/assets/images/svg/logo.svg (unknown whether current file is Nyumba or Joki)
   - Type: asset import
   - Planned action: Ensure header uses the canonical approved Joki asset at public/brand-assets/joki-logo.png via the new Logo component. Do not delete or overwrite src/assets/images/svg/logo.svg until audit confirms it's not in use elsewhere.

10) src/component/WhatsAppFloat.jsx and ContactForm.tsx
   - Matches: phone numbers and WhatsApp links referencing Nyumba contact numbers
   - Type: component links
   - Planned action: Update these contact links to Joki numbers (+256 767 817556, +256 778 283522) and update email contact to info@jokiholdings.com and/or mjogeza@gmail.com depending on form destination.

11) README.md
   - Matches: generic CRA README; not Nyumba-specific but will be updated to Joki README with new branding notes.
   - Type: documentation
   - Planned action: Replace README with project documentation for Joki Holdings site.

12) src/component/Footer imports referencing:
   - FooterImg1, FooterImg2, FooterImg3 (images) currently used with alt text referencing Nyumba projects and an Instagram overlay; these assets need review.
   - Planned action: archive or replace with brand placeholders.

Notes / Decisions
- I will not perform destructive deletes. I will move replaced assets into an archive directory (e.g., src/assets/images/archive/nyumba/) to preserve history and enable rollbacks.
- I will update user-facing text, metadata, SEO, and image alt text to the Joki brand in focused commits.
- For images, I will prefer to add editorial placeholders (component) where the final photography is not yet available.
- I will not invent new social accounts and will remove legacy Nyumba social links.

Next steps (immediate)
1. Create `public/brand-assets/` and place the supplied official Joki logo at `public/brand-assets/joki-logo.png`. (I will request confirmation if repository upload is restricted — otherwise I will add the file.)
2. Commit the new Logo component (already added) and update Header and Footer to consume it.
3. Replace PageSEO default site name and update public/index.html meta description.
4. Replace homepage content with the new Joki homepage structure.

This document will be committed to the branch `feature/joki-holdings-rebrand` as the formal audit record before any destructive edits.
