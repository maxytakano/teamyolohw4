module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        htmlmin: {
            my_target: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeEmptyAttributes: true
                },
                files: {
                    '../min/index.html': ['../public/index.html']
                }
            },
            other_target: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true,
                    removeEmptyAttributes: true
                },
                files: [{
                    expand: true,
                    cwd: '../src/',
                    src: ['*.html', '!*.min.html'],
                    dest: '../min/',
                    ext:'.html'
                }]
            }
        },

        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: {
					'../min/main.js': ['../js/**/*.js', '../cloud/**/*.js']
				}
            }
        },

        cssmin: {
            my_target: {
                files:  {
					'../min/main.css': ['../css/**/*.css']
				}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    
    grunt.registerTask('default', ['cssmin', 'uglify', 'htmlmin']);
};
