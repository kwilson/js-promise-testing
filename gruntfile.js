module.exports = function(grunt) {

  grunt.initConfig({
    typescript: {
      base: {
        src: ['app/**/*.ts'],
        dest: '',
        options: {
          module: 'amd', 
          target: 'es5',
          sourceMap: true,
          references: [
            "bower_components/DefinitelyTyped/angularjs/*.d.ts"
          ]
        }
      }
    },
    watch: {
      files: ['<%= typescript.base.src %>'],
      tasks: ['typescript']
    }
  });

  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['typescript']);
};