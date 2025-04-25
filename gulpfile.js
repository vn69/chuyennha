const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');

// Tạo task để minify và gộp các file JS
gulp.task('minify-js', function() {
  return gulp.src([
      'js/jquery-3.4.1.min.js',
      'js/bootstrap.js',
      'js/carousel.js',
      'js/custom.js',
    ])
    .pipe(concat('all.min.js'))  // Gộp các file JS lại thành 'all.min.js'
    .pipe(uglify())  // Minify file JavaScript
    .pipe(gulp.dest('js'));  // Lưu file 'all.min.js' vào thư mục 'js'
});

// Tạo task để minify và gộp các file CSS
gulp.task('minify-css', function() {
  return gulp.src([
      'css/owl.carousel.min.css',
      'css/font-awesome.min.css',
      'css/responsive.css',
      'css/style.css'
    ])
    .pipe(concat('all.min.css')) // Gộp các file CSS lại thành 'add.css'
    .pipe(cssnano()) // Minify CSS
    .pipe(gulp.dest('css')); // Lưu file minified 'add.css.min' vào thư mục 'css'
});

// Tạo task mặc định để chạy cả hai task JS và CSS
gulp.task('default', gulp.series('minify-js', 'minify-css'));
