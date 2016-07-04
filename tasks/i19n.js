/*
 * grunt-i19n
 * https://github.com/ysy/grunt-i19n
 *
 * Copyright (c) 2016 ysy
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('i19n', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var src = this.data.src;
    var dest = this.data.dest;

    var lang = grunt.file.expand(src);

    require('i19n-for-grunt')(lang, dest, grunt);
  });

};
