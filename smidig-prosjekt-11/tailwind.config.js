module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            logoBar: '#405C6A',
            secondary: '#ffed4a',
            universalGreen: '#7EB46B'
        }),
        textColor: {
            primary: '#3490dc',
            secondary: '#9FD18D',
            danger: '#e3342f'
        },
        fontFamily: {
            standardText: ['Helvetica-Neue', 'Arial', 'sans-serif']
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
