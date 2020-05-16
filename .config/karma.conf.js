// karma.conf.js
module.exports = function (config) {
    config.set({
        basePath: '../',
        frameworks: ['qunit'],
        plugins: ['karma-qunit', 'karma-chrome-launcher'],

        browsers: ['Chrome'],

        client: {
            clearContext: false,
            qunit: {
                showUI: true,
                testTimeout: 5000
            }
        },

        files: [
            './src/*.js',

            './test/components/*.js',
            './test/utils/*.js',
            './test/fixtures/*.js',
            
            './test/*.test.js'
        ],

        reporters: ['progress'],

        colors: true,

        singleRun: false,
        autoWatch: true

    });
};