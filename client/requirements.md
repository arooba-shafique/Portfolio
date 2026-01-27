## Packages
framer-motion | Complex animations and page transitions
react-icons | Rich icon set for social links and UI elements
lucide-react | Modern, clean icons (already in base but ensuring availability)

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["var(--font-display)"],
  body: ["var(--font-body)"],
  mono: ["var(--font-mono)"],
}
The resume file is located at `attached_assets/Arooba_1769502794082.pdf`. I will need to move this to `client/public/resume.pdf` during the build or reference it correctly if static serving is set up. For now, I will assume it's available at `/resume.pdf` or handled via import if inside assets.
Since this is a "no backend" request for the form, I will use Formspree as requested.
