SystemJS.config({
    meta: {
        'scripts/search.js': {
            deps: ['scripts/lodash.min.js', 'scripts/typeahead.bundle.min.js', 'scripts/handlebars.js', 'scripts/jquery.min.js'],
            format: 'global'
        },
        'scripts/typeahead.bundle.min.js': {
            deps: ['scripts/jquery.min.js'],
            format: 'global'
        },
        'scripts/jquery.min.js': {
            format: 'global',
            exports: '$'
        }
    }
});
SystemJS.import('scripts/linenumber.js');
SystemJS.import('scripts/typeahead.bundle.min.js');
SystemJS.import('scripts/search.js');