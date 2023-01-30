/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#1E1F28",
          800: "#2a2f45",
          700: "#555770",
          600: "#4f566b",
          500: "#697386",
          400: "#8792a2",
          300: "#D2D3DD",
          200: "#e3e8ee",
          100: "#e3e8ee", //request toolbar bg
          50: "#f7fafc",
          25: "#FFFFFF",
        },
        primary: {
          50: "#f5fbff",
          500: "#556cd6",
        },
        orange: {
          400: "#e56f4a",
        },
        transparent: "transparent",
        "request-toolbar": "#3c4257",
        "response-toolbar": "#e3e8ee",
        "request-body":"#4f566b"
      },
      fontSize: {
        "ltitle-1-exbold": [
            "48px",
            {
                lineHeight: "72px",
                fontWeight: "725"
            }
        ],
        "ltitle-1-bold": [
            "48px",
            {
                lineHeight: "72px",
                fontWeight: "600"
            }
        ],
        "ltitle-2-exbold": [
            "40px",
            {
                lineHeight: "64px",
                fontWeight: "725"
            }
        ],
        "ltitle-2-bold": [
            "40px",
            {
                lineHeight: "64px",
                fontWeight: "600"
            }
        ],
        "ltitle-3-exbold": [
            "36px",
            {
                lineHeight: "48px",
                fontWeight: "725"
            }
        ],
        "ltitle-3-bold": [
            "36px",
            {
                lineHeight: "48px",
                fontWeight: "600"
            }
        ],
        "title-1-bold": [
            "28px",
            {
                lineHeight: "32px",
                fontWeight: "600"
            }
        ],
        "title-1": [
            "28px",
            {
                lineHeight: "32px",
                fontWeight: "325"
            }
        ],
        "title-2-bold": [
            "24px",
            {
                lineHeight: "28px",
                fontWeight: "600"
            }
        ],
        "title-2": [
            "24px",
            {
                lineHeight: "28px",
                fontWeight: "325px"
            }
        ],
        "title-3-bold": [
            "22px",
            {
                lineHeight: "28px",
                fontWeight: "600"
            }
        ],
        "title-3": [
            "22px",
            {
                lineHeight: "28px",
                fontWeight: "325p"
            }
        ],
        "title-4-bold": [
            "20px",
            {
                lineHeight: "28px",
                fontWeight: "600"
            }
        ],
        "title-4": [
            "20px",
            {
                lineHeight: "28px",
                fontWeight: "325"
            }
        ],
        "title-5-bold": [
            "18px",
            {
                lineHeight: "28px",
                fontWeight: "600"
            }
        ],
        "title-5": [
            "18px",
            {
                lineHeight: "28px",
                fontWeight: "325"
            }
        ],

        "body-1-bold": [
            "16px",
            {
                lineHeight: "24px",
                fontWeight: "600"
            }
        ],
        "body-1": [
            "16px",
            {
                lineHeight: "24px",
                fontWeight: "325"
            }
        ],
        "body-2-bold": [
            "14px",
            {
                lineHeight: "20px",
                fontWeight: "600"
            }
        ],
        "body-2": [
            "14px",
            {
                lineHeight: "20px",
                fontWeight: "325"
            }
        ],
        "caption-1-bold": [
            "12px",
            {
                lineHeight: "20px",
                fontWeight: "600"
            }
        ],
        "caption-1": [
            "12px",
            {
                lineHeight: "20px",
                fontWeight: "325"
            }
        ],
        "caption-2-bold": [
            "11px",
            {
                lineHeight: "16px",
                fontWeight: "600"
            }
        ],
        "caption-2": [
            "11px",
            {
                lineHeight: "16px",
                fontWeight: "325"
            }
        ],
        "caption-3-bold": [
            "10px",
            {
                lineHeight: "16px",
                fontWeight: "325"
            }
        ],
        "caption-3": [
            "10px",
            {
                lineHeight: "16px",
                fontWeight: "325"
            }
        ],
        "button-16-semibold": [
            "16px",
            {
                lineHeight: "24px",
                fontWeight: "450"
            }
        ],
        "button-14-semibold": [
            "14px",
            {
                lineHeight: "24px",
                fontWeight: "450"
            }
        ],
        "button-12-semibold": [
            "12px",
            {
                lineHeight: "20px",
                fontWeight: "450"
            }
        ]
    }
    },
  },
  plugins: [],
}