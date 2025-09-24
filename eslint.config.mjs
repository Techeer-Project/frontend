// ESLint Flat Config for Next.js + TypeScript + Storybook
import storybook from "eslint-plugin-storybook";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 전역 무시 파일들
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "storybook-static/**",
      "coverage/**",
      "next-env.d.ts",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },

  // Next.js 기본 설정
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  // 일반 파일들에 대한 설정
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // React 관련 규칙
      "react/react-in-jsx-scope": "off", // Next.js에서는 React import 불필요
      "react/jsx-filename-extension": "off",
      "react/jsx-props-no-spreading": "off",
      "react/prop-types": "off", // TypeScript 사용 시 불필요
      "react/no-unescaped-entities": "off", // 따옴표 이스케이프 허용
      "react/display-name": "off",

      // Next.js 관련 규칙
      "@next/next/no-img-element": "error", // next/image 사용 권장
      "@next/next/no-html-link-for-pages": "error",

      // 일반적인 규칙
      "prefer-const": "error",
      "no-unused-vars": "off", // TypeScript에서 처리
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn",
      "no-debugger": "error",
    },
  },

  // Storybook 파일들에 대한 설정
  ...storybook.configs["flat/recommended"],
  {
    files: ["**/*.stories.{js,jsx,ts,tsx}", "**/*.story.{js,jsx,ts,tsx}"],
    rules: {
      // Storybook에서는 더 관대한 규칙 적용
      "react/react-in-jsx-scope": "off",
      "import/no-anonymous-default-export": "off",
      "storybook/hierarchy-separator": "error",
      "storybook/default-exports": "error",
    },
  },
];

export default eslintConfig;
