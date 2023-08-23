import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/**/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/aspect-ratio'), nextui()],
  theme: {},
};
export default config;
