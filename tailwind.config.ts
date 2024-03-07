import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./resources/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            animation: {
                width: 'width 500ms linear',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-primary':
                    'linear-gradient(308deg, #C53F3F 7.42%, #F06666 93.88%)',
            },
            borderRadius: {
                '4xl': '36px',
                '5xl': '52px',
            },
            colors: {
                primary: {
                    accent: '#4472C4',
                    main: '#5B9BD5',
                    text: '#334CCF',
                },
            },
            keyframes: {
                width: {
                    '0%': { width: '0' },
                    '100%': { width: 'inherit' },
                },
            },
            maxWidth: {
                '2xs': '280px',
                '3xs': '240px',
                '8xl': '1440px',
            },
        },
    },
    plugins: [],
};

export default config;
