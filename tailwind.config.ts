import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFC900",
          blue: "#087CF0",
          "blue-dark": "#0567CE",
          "footer-blue": "#0069D8",
          pink: "#F53667",
          "pink-dark": "#DD2454",
          "pink-soft": "#FFE5ED",
          green: "#41B84E",
          "green-dark": "#24943A",
          "green-soft": "#E7F7E9",
          orange: "#FF9D0A",
          "purple-soft": "#F0E8FF",
        },
        navy: "#10346A",
        body: "#26374F",
        muted: "#66758B",
        cream: "#FFF9EF",
        "soft-blue": "#F1F8FF",
        "soft-border": "#E7EDF4",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "sans-serif"],
        sans: ["var(--font-nunito)", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      borderRadius: {
        input: "12px",
        card: "18px",
        product: "22px",
        section: "30px",
      },
      boxShadow: {
        soft: "0 12px 35px rgba(16, 52, 106, 0.10)",
        "soft-lg": "0 20px 50px rgba(16, 52, 106, 0.14)",
        pink: "0 10px 24px rgba(245, 54, 103, 0.25)",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floating: "floating 4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
