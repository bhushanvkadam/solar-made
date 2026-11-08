// Central configuration — contact details, social links and content data.
// Everything the rest of the site reads lives here, so nothing is scattered
// across markup. Replace every TODO before launch.

export const CONTACT = {
  // Assumed +91 (India) since no country code was given — confirm this is correct.
  whatsappNumber: "919594048335",
  whatsappDisplay: "+91 95940 48335",
  // Same number as WhatsApp, used for the phone call CTA.
  phoneNumber: "+919594048335",
  phoneDisplay: "+91 95940 48335",
  // TODO: add the Instagram profile URL. Leave empty to hide the link.
  instagramUrl: "",
  location: "Sindhudurg, Maharashtra",
};

// TODO: add a GA4 measurement ID (e.g. "G-XXXXXXXXXX") to enable analytics.
// Leave empty to keep analytics disabled — main.js will not load GA when this is blank.
export const GA4_MEASUREMENT_ID = "";

// Selected website projects. Add a new object here to extend the Work
// section — no markup changes needed.
export const WORK = [
  {
    name: "Soumil's Stay",
    industry: "Hospitality", // TODO: confirm with the founder
    description: "A warm, visual website for a homestay brand.", // TODO: confirm with the founder
    url: "https://soumil-stays.vercel.app/",
    image: "https://ik.imagekit.io/tnf/Solar%20Made/Screenshot%202026-11-08%20at%2016.41.00.png",
  },
  {
    name: "The Native Folks",
    industry: "E-commerce",
    description: "An e-commerce website for a premium dry fruits brand.",
    url: "https://www.thenativefolks.com/",
    image: "https://ik.imagekit.io/tnf/Solar%20Made/Screenshot%202026-11-08%20at%2016.41.22.png",
  },
  {
    name: "Cinerea",
    industry: "Film", // TODO: confirm with the founder
    description: "A cinematic website for a film production studio.", // TODO: confirm with the founder
    url: "https://cinereafilms.com/",
    image: "https://ik.imagekit.io/tnf/Solar%20Made/Screenshot%202026-11-08%20at%2016.41.43.png",
  },
];

// Brand logos for the "Worked with" strip (founder's prior social media /
// digital campaign work — separate from the Work portfolio above).
export const BRAND_LOGOS = [
  { name: "T-Series", logoSrc: "https://ik.imagekit.io/tnf/Solar%20Made/Partner%20logos/T-series-logo.svg.webp" },
  { name: "Zee5", logoSrc: "https://ik.imagekit.io/tnf/Solar%20Made/Partner%20logos/Zee5-official-logo.jpeg" },
  { name: "Welcomhotel By ITC Hotels", logoSrc: "https://ik.imagekit.io/tnf/Solar%20Made/Partner%20logos/welcomhotel-logo.jpeg" },
  { name: "Sony Max", logoSrc: "https://ik.imagekit.io/tnf/Solar%20Made/Partner%20logos/images%20(4).jpeg" },
  { name: "Zee Marathi", logoSrc: "https://ik.imagekit.io/tnf/Solar%20Made/Partner%20logos/Zee_marathi_logo_2025.jpg" },
  { name: "Colors Marathi", logoSrc: "https://ik.imagekit.io/tnf/Solar%20Made/Partner%20logos/images%20(3).jpeg" },
  { name: "Sony Marathi", logoSrc: "https://ik.imagekit.io/tnf/Solar%20Made/Partner%20logos/6f6693e6facca86429434bfdfa347315.jpg" },
  { name: "Zee Talkies", logoSrc: "https://ik.imagekit.io/tnf/Solar%20Made/Partner%20logos/zee_talkies_channel_logo.jpeg" },
  { name: "Zee Yuva", logoSrc: "https://ik.imagekit.io/tnf/Solar%20Made/Partner%20logos/Zee-Yuva.avif" },
];
