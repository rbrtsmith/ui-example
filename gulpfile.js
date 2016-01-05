/* globals require */
var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    notify = require('gulp-notify'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    path = require('path'),
    filesize = require('gulp-filesize'),
    newer = require('gulp-newer'),
    livereload = require('gulp-livereload'),
    gulpIgnore = require('gulp-ignore'),
    cssDest = 'dist/css',
    imgDest = 'dist/img',
    htmlDest = 'dist';


gulp.task('css', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(newer(cssDest))
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 4 versions'],
                cascade: false
            }))
            .pipe(minifyCSS({'advanced': false}))
            .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(cssDest))
        .pipe(livereload());
});



gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest(htmlDest))
        .pipe(livereload());
});

gulp.task('image', function() {
    gulp.src(['app/img/media/**/*'])
        .pipe(newer(imgDest))
        .pipe(imagemin({ 
            optimizationLevel: 3, 
            progressive: true, 
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()] 
        }))
        .pipe(gulp.dest(imgDest))
        .pipe(notify({ message: 'Images task complete' }));
    gulp.src('app/img/svg-sprite-partials/*.svg')
        .pipe(newer(imgDest))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            };
        }))
        .pipe(svgstore())
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest(imgDest))
        .pipe(livereload());
    return gulp;
});


gulp.task('default', ['html', 'css', 'image'], function() {
    livereload.listen();
    gulp.watch('app/scss/**/*.scss', ['css']);
    gulp.watch(['app/*.html'], ['html']);
    gulp.watch('app/img/**/*', ['image']);
});