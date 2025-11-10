module.exports = {
    // Custom rules for properties not natively supported by default
    custom: {
        // backdrop-filter support (modern browsers only)
        'backdrop-filter': {
            'Bdf': 'backdrop-filter'
        }
    },
    // Target modern browsers only - no vendor prefixes needed
    options: {
        namespace: null
    }
};
