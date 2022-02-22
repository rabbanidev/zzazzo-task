module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        100: "32rem",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
      colors: {
        primary: "#273238",
        secondary: "#eaedf7",
        success: "#19b159",
        danger: "#f16d75",
        info: "#01b8ff",
        warning: "#ff9b21",
        darker: "#111827",
        dark: "#1f2937",
        lighter: "#f3f4f6",
        light: "#e2e4e8",
        orange: "#ff7722",
        yam: "#CC5801",
        aliceblue: "#F9FAFB",
        backdrop: "rgba(0,0,0,.5)",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      display: ["group-hover"],
      opacity: ["group-hover"],
      translate: ["group-hover"],
      transform: ["group-hover"],
      width: ["group-hover", "hover", "focus"],
      height: ["group-hover", "hover", "focus"],
      padding: ["group-hover", "hover", "focus"],
      animation: ["group-hover", "hover", "focus"],
      scale: ["group-hover", "hover", "focus"],
      backgroundColor: ["checked", "odd", "even"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
