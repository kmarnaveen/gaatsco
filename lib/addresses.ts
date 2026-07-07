// NOTE: `geo` coordinates and `hours` below are approximate defaults.
// Verify/replace them with the exact values from your Google Business Profile
// for the strongest local-search signals.

export const indiaOffice = {
  label: "India Office",
  lines: [
    "8-1-299/B, RP Business Park",
    "Shaikpet, Hyderabad",
    "500008, India",
  ],
  street: "8-1-299/B, RP Business Park, Shaikpet",
  locality: "Hyderabad",
  region: "Telangana",
  postalCode: "500008",
  country: "IN",
  geo: { lat: 17.4256, lng: 78.4507 },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "18:30" },
    { days: ["Saturday"], opens: "10:00", closes: "14:00" },
  ],
  mapsQuery: "8-1-299/B+RP+Business+Park+Shaikpet+Hyderabad+500008+India",
  mapsEmbed:
    "https://www.google.com/maps?q=8-1-299/B+RP+Business+Park+Shaikpet+Hyderabad+500008+India&output=embed",
}

export const usaOffice = {
  label: "USA Office",
  lines: [
    "311 S Mammoth Rd",
    "Manchester, NH 03109",
    "USA",
  ],
  street: "311 S Mammoth Rd",
  locality: "Manchester",
  region: "NH",
  postalCode: "03109",
  country: "US",
  geo: { lat: 42.9509, lng: -71.4162 },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
  ],
  mapsQuery: "311+S+Mammoth+Rd+Manchester+NH+03109+USA",
  mapsEmbed:
    "https://www.google.com/maps?q=311+S+Mammoth+Rd+Manchester+NH+03109+USA&output=embed",
}
