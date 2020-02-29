module.exports=function(grunt){
  grunt.initConfig({
    eslint:{
      options:{
        eslintrc:'./.eslint.json'
      },
      target:['*.js']
    }
  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default',['eslint']);
};
