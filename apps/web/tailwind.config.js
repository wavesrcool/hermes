/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

/** @type {import('tailwindcss').Config} */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

const baserel = {
  80: "20rem",
  88: "22rem",
  96: "24rem",
  104: "26rem",
  112: "28rem",
  116: "29rem",
  120: "30rem",
  124: "31rem",
  128: "32rem",
  132: "33rem",
  136: "34rem",
  144: "36rem",
  152: "38rem",
  160: "40rem",
  168: "42rem",
  176: "44rem",
  180: "45rem",
  184: "46rem",
  192: "48rem",
  200: "50rem",
  208: "52rem",
  216: "54rem",
  224: "56rem",
  232: "58rem",
  240: "60rem",
  360: "90rem",
};

const dt = require("tailwindcss/defaultTheme");
const Color = require("color");
const hsl = require("hsl-to-hex");

const alpha = (clr, val) => Color(clr).alpha(val).hsl().string();
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const hermescolors = {
  raspberry: {
    main: hsl(330, 65, 50),
  },
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./public/**/*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', ...dt.fontFamily.sans],
        serif: [...dt.fontFamily.serif],
        mono: [...dt.fontFamily.mono],
        segoe: ["Segoe UI"],
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2280px",
      },
      height: {
        ...baserel,
      },
      minHeight: {
        ...baserel,
      },
      width: {
        ...baserel,
      },
      minWidth: {
        ...baserel,
      },
      padding: {
        ...baserel,
      },
      margin: {
        ...baserel,
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      ringWidth: {
        6: "6px",
      },
      colors: {
        hermes: {
          raspberry: {
            DEFAULT: hermescolors.raspberry.main,
            lighter: lighten(hermescolors.raspberry.main, 0.1),
            darker: darken(hermescolors.raspberry.main, 0.1),
            75: alpha(hermescolors.raspberry.main, 0.75),
          },
        },
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
      animation: ["hover", "group-hover"],
      skew: ["hover", "group-hover"],
    },
  },
  corePlugins: {
    aspectRatio: false,
    fontFamily: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: ["light", "dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
