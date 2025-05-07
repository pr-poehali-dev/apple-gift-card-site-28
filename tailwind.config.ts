import { type Config } from "tailwindcss";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { fontFamily } from "tailwindcss/defaultTheme";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Функция для генерации случайного цвета в формате HEX
function randomHexColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
}

// Функция для генерации случайного RGB цвета
function randomRgbColor() {
  return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
}

// Функция для генерации HSL цвета с контролируемым диапазоном
function randomHslColor(hueMin = 0, hueMax = 360, satMin = 70, satMax = 90, lightMin = 50, lightMax = 65) {
  const h = Math.floor(Math.random() * (hueMax - hueMin) + hueMin);
  const s = Math.floor(Math.random() * (satMax - satMin) + satMin);
  const l = Math.floor(Math.random() * (lightMax - lightMin) + lightMin);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

// Случайная Apple-подобная цветовая схема
const randomAppleColors = {
  applePrimary: '#0071e3', // Классический Apple синий
  appleSecondary: randomHslColor(210, 230, 70, 85, 45, 55), // Вариации синего
  appleAccent: randomHslColor(180, 210, 80, 95, 55, 65), // Бирюзовые акценты
  appleGray: '#f5f5f7', // Классический Apple светло-серый
  appleGrayDark: '#1d1d1f', // Классический Apple темно-серый
  appleDanger: randomHslColor(0, 20, 75, 90, 55, 65), // Красные тона
  appleSuccess: randomHslColor(100, 150, 70, 85, 35, 45), // Зеленые тона
  appleWarning: randomHslColor(30, 50, 85, 95, 55, 65), // Оранжевые тона
  appleNeutral1: randomHslColor(0, 360, 10, 20, 85, 95), // Почти белый
  appleNeutral2: randomHslColor(0, 360, 10, 20, 75, 85), // Светло-серый
  appleNeutral3: randomHslColor(0, 360, 10, 20, 35, 45), // Темно-серый
  appleSpecial: randomHslColor(), // Полностью случайный акцент
};

// Случайный размер радиуса
const randomBorderRadius = {
  sm: `${Math.floor(Math.random() * 6) + 2}px`,
  DEFAULT: `${Math.floor(Math.random() * 10) + 6}px`,
  md: `${Math.floor(Math.random() * 10) + 8}px`,
  lg: `${Math.floor(Math.random() * 12) + 12}px`,
  xl: `${Math.floor(Math.random() * 14) + 16}px`,
  '2xl': `${Math.floor(Math.random() * 16) + 20}px`,
  '3xl': `${Math.floor(Math.random() * 20) + 24}px`,
  full: '9999px',
};

// Случайные значения для размеров отступов
const randomSpacing = {
  xs: `${Math.floor(Math.random() * 4) + 1}px`,
  sm: `${Math.floor(Math.random() * 6) + 4}px`,
  md: `${Math.floor(Math.random() * 8) + 8}px`,
  lg: `${Math.floor(Math.random() * 12) + 12}px`,
  xl: `${Math.floor(Math.random() * 16) + 16}px`,
  '2xl': `${Math.floor(Math.random() * 20) + 20}px`,
  '3xl': `${Math.floor(Math.random() * 24) + 24}px`,
};

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: randomAppleColors.applePrimary,
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: randomAppleColors.appleSecondary,
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: randomAppleColors.appleDanger,
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: randomAppleColors.appleSuccess,
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: randomAppleColors.appleWarning,
          foreground: "#000000",
        },
        muted: {
          DEFAULT: randomAppleColors.appleGray,
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: randomAppleColors.appleAccent,
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          border: "hsl(var(--sidebar-border))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          ring: "hsl(var(--sidebar-ring))",
          special: randomAppleColors.appleSpecial,
        },
      },
      borderRadius: {
        ...randomBorderRadius,
        DEFAULT: randomBorderRadius.DEFAULT,
      },
      spacing: {
        ...randomSpacing,
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "San Francisco", "SF Pro Text", "SF Pro Display", ...fontFamily.sans],
        appleDisplay: ["Inter", "SF Pro Display", "SF Pro Text", "-apple-system", "BlinkMacSystemFont", ...fontFamily.sans],
        appleText: ["Inter", "SF Pro Text", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "apple-bounce": {
          "0%, 100%": { transform: `translateY(0)` },
          "50%": { transform: `translateY(-${Math.floor(Math.random() * 8) + 4}px)` },
        },
        "apple-fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "apple-scale": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "apple-bounce": "apple-bounce 1s infinite",
        "apple-fade-in": "apple-fade-in 0.5s ease-out",
        "apple-scale": "apple-scale 0.3s ease-out",
      },
      boxShadow: {
        xs: `0 1px 2px rgba(0, 0, 0, ${Math.random() * 0.1})`,
        sm: `0 1px 3px rgba(0, 0, 0, ${Math.random() * 0.15})`,
        DEFAULT: `0 1px 3px rgba(0, 0, 0, ${Math.random() * 0.2}), 0 1px 2px rgba(0, 0, 0, ${Math.random() * 0.2})`,
        md: `0 4px 6px -1px rgba(0, 0, 0, ${Math.random() * 0.15}), 0 2px 4px -1px rgba(0, 0, 0, ${Math.random() * 0.15})`,
        lg: `0 10px 15px -3px rgba(0, 0, 0, ${Math.random() * 0.15}), 0 4px 6px -2px rgba(0, 0, 0, ${Math.random() * 0.1})`,
        xl: `0 20px 25px -5px rgba(0, 0, 0, ${Math.random() * 0.15}), 0 10px 10px -5px rgba(0, 0, 0, ${Math.random() * 0.1})`,
        '2xl': `0 25px 50px -12px rgba(0, 0, 0, ${Math.random() * 0.25})`,
        outline: `0 0 0 3px rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`,
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;