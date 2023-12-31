/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  mode: "jit",
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  safelist: [
    "alert-success",
    "alert-warning",
    "alert-error",
    "alert-info",
    "fill-slate-600",
    "fill-gray-600",
    "fill-zinc-600",
    "fill-neutral-600",
    "fill-stone-600",
    "fill-red-600",
    "fill-orange-600",
    "fill-amber-600",
    "fill-lime-600",
    "fill-green-600",
    "fill-emerald-600",
    "fill-teal-600",
    "fill-cyan-600",
    "fill-blue-600",
    "fill-indigo-600",
    "fill-violet-600",
    "fill-purple-600",
    "fill-fuchsia-600",
    "fill-pink-600",
    "fill-rose-600",
    "fill-white",
    "fill-black",
    "text-slate-200",
    "text-gray-200",
    "text-gray-700",
    "text-zinc-200",
    "text-neutral-200",
    "text-stone-200",
    "text-red-200",
    "text-orange-200",
    "text-amber-200",
    "text-lime-200",
    "text-green-200",
    "text-emerald-200",
    "text-teal-200",
    "text-cyan-200",
    "text-blue-200",
    "text-indigo-200",
    "text-violet-200",
    "text-purple-200",
    "text-fuchsia-200",
    "text-pink-200",
    "text-rose-200",
    "h-8",
    "h-4",
    "h-12",
    "w-8",
    "w-4",
    "w-12",
  ],
  daisyui: {
    darkTheme: "light",
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#f04f43",
        },
      },
    ],
  },
};