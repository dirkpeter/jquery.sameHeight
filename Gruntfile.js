'use strict';

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // Load all grunt tasks matching the `grunt-*` pattern.
  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,

    uglify: {
      dist: {
        files: {
          'dist/jQuery.sameHeight.min.js': 'src/jQuery.sameHeight.js'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all:     ['src/**/*.js']
    }
  });


  // default task - $ grunt
  grunt.registerTask('default', [
    'jshint',
    'uglify'
  ]);
};
