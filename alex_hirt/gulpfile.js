const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var allScripts = ['./*.js', './**/**/*.js'];

gulp.task('lint', () => {
  return gulp.src(allScripts)
  .pipe(eslint({}))
  .pipe(eslint.format());
});

gulp.task('lint:watch', () => {
  gulp.watch(allScripts, ['lint']);
});

var testScripts = ['./test/**/*test.js'];

gulp.task('mocha', () => {
  return gulp.src(testScripts)
  .pipe(mocha({ 'reporter': 'nyan' }));
});
