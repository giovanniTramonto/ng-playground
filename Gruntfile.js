module.exports = function (grunt) {
    
  grunt.initConfig({
    stylus: {
      options: {
        compress: false
      },
      compile: {
        files: {
          'assets/css/style.css': 'stylus/style.styl', // 1:1 compile
        }
      }
    },

    postcss: {
      options: {
        map: {
            inline: false, // save all sourcemaps as separate files...
            annotation: 'dist/css/maps/' // ...to the specified directory
        },
      
        processors: [
          //require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}) // add vendor prefixes
          //require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'assets/css/*.css'
      }
    },
    
    watch: {
      files: ['stylus/*'],
      tasks: ['stylus', 'postcss']
    }

  });
  
  // Load 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task(s).
  grunt.registerTask('default', ['stylus', 'postcss']);
  
  // Events
  grunt.event.on('watch', function(action, filepath) {});
  
}