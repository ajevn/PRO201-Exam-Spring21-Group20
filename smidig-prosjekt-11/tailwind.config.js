module.exports = {
    purge: ['./src/**/*.html', './src/**/*.vue'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            logoBar: '#405C6A',
            secondary: '#ffed4a',
            danger: '#e3342f'
        }),
        textColor: {
            primary: '#3490dc',
            secondary: '#9FD18D',
            danger: '#e3342f'
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
