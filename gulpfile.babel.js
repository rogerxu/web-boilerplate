/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import gulp from 'gulp';
import babel from 'gulp-babel';
import connect from 'gulp-connect';

const paths = {
  static: 'src'
};

gulp.task('connect', () => {
  connect.server({
    root: paths.static,
    livereload: false,
  });
});

gulp.task('main', () => {

});

gulp.task('default', ['connect', 'main']);
