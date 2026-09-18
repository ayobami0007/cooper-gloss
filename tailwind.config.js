/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pulled directly from the Cooper Gloss logo file — do not
        // replace with a generic "beauty brand lilac" without checking
        // against the real logo again if the brand assets change.
        lilac: {
          deep: "#8665A6",   // logo outline/shadow tone — primary buttons, links
          DEFAULT: "#B390CB", // logo core fill tone — main accent
          soft: "#E4CBF0",   // logo highlight tone — tinted backgrounds, hovers
          cloud: "#F5F0F8",  // near-white lilac — page background
        },
        ink: "#2B2333", // warm near-black, not pure #000, for body text
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
