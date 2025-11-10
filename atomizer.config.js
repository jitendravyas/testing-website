module.exports = {
    // Custom rules for properties not natively supported
    custom: {
        // backdrop-filter support
        'backdrop-filter': {
            'Bdf': 'backdrop-filter'
        },
        // webkit prefix for better browser support
        '-webkit-backdrop-filter': {
            'Bdf': '-webkit-backdrop-filter'
        }
    }
};
