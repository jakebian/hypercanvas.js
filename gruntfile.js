module.exports = function (grunt) {
    grunt.initConfig({

    // define source files and their destinations
    uglify: {
        js: {
            files: { 
                'build/hypercanvas.min.js':[
                    'start/*.js',
                    'util/*.js',
                    'models/*.js',
                    'euclidean/*.js',
                    'mappings/*.js',
                    'shapes/*.js',
                    'drawing/*.js',
                    'demos/*.js'
                ]
            }
        }
    }
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');

// register at least this one task
grunt.registerTask('default', [ 'uglify' ]);
};