'use strict';

require('builder');
// // Fires up the localhost test environment
// gulp.task('webserver', ['sass:watch', 'views:watch'], () => {
//   gulp.src('./dist/')
//     .pipe(webserver({
//       livereload: true,
//       directoryListing: false,
//       compression: true
//     }));
// });






// // Import Dependancies
// const gulp = require('gulp'),
//       pug = require('gulp-pug'),
//       sass = require('gulp-sass'),
//       rimraf = require('gulp-rimraf'),
//       cleanCSS = require('gulp-clean-css'),
//       sassLint = require('gulp-sass-lint'),
//       webserver = require('gulp-webserver'),
//       autoprefixer = require('gulp-autoprefixer');

// const config = {
//   'sass': {
//     'src': './src/scss/*.s+(a|c)ss',
//     'dest': './dist/css'
//   },
//   'views': {
//     'src': './src/views/**/*.pug',
//     'dest': './dist/'
//   },
//   'js': {
//     'src': './src/js/*.js',
//     'dest': './dist/js'
//   }
// }



// // CSS BUild Tasks Below
// gulp.task('sass:watch', ['sass'], () => {
//   gulp.watch(config.sass.src, ['sass']);
// });

// gulp.task('sass', ['clean:sass'], () => {
//   return gulp.src(config.sass.src)
//     .pipe(sassLint({
//       configFile: '.sass-lint.yml'
//     }))
//     .pipe(sassLint.format())
//     .pipe(sassLint.failOnError())
//     .pipe(sass({
//       include: ['./node_modules/../']
//     }))
//     .pipe(autoprefixer({
//       browsers: ['>1%', 'last 2 versions']
//     }))
//     .pipe(cleanCSS({compatibility: 'ie9'}))
//     .pipe(gulp.dest(config.sass.dest))
// });

// // Clean the built directory
// gulp.task('clean:sass', () => {
//  return gulp.src(config.sass.dest, { read: false }) // much faster
//    .pipe(rimraf());
// });


// // CSS BUild Tasks Below
// gulp.task('views:watch', ['views'], () => {
//   gulp.watch(config.views.src, ['views']);
// });

// gulp.task('views', ['clean:views'], () => {
//   return gulp.src(config.views.src)
//     .pipe(pug())
//     .pipe(gulp.dest(config.views.dest))
// });

// // Clean the built directory
// gulp.task('clean:views', () => {
//  return gulp.src(config.views.dest + '*.html', { read: false }) // much faster
//    .pipe(rimraf());
// });
