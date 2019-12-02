var gulp = require('gulp'),
    cleancss = require('gulp-clean-css'), // min CSS
    uglify = require('gulp-uglify'), // min JS
    imagemin = require('gulp-imagemin'), // min Image
    plumber = require('gulp-plumber'), // Prevent Stop Watching if Error occured
    rename = require('gulp-rename'), //to Rename css/imgs/js Files after Compressed
    
    autoprefixer = require('autoprefixer'), // this plugin depend on postcss plugin and using in put prefixes of css
    postcss = require('gulp-postcss'),

    sass = require('gulp-sass'), // to convert Sass to Css
    maps = require('gulp-sourcemaps'), // depend on gulp-sass plugin

    jade = require('gulp-pug'), // Convert index.pug File into index.html

    livereload = require('gulp-livereload'); // Livereload For Watchin

    var sassOptions = {
        outputStyle:'expanded',
        errLofToConsole:true
    };
//// Converting sass
gulp.task('convert_sass', function(){
    gulp.src('css/*.scss')
        .pipe(plumber())
        .pipe(maps.init())
        .pipe(sass(sassOptions))
        .pipe(maps.write())
        .pipe(postcss([autoprefixer({browsers:['last 10 versions']})]))
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});
//// min_css
gulp.task('min_css', function(){
    gulp.src('css/*.css')
        .pipe(plumber())
        .pipe(cleancss())
        //.pipe(rename({suffix:'.min'}))
        .pipe(postcss([autoprefixer({browsers:['last 10 versions']})]))
        .pipe(gulp.dest('css/min'))
        .pipe(livereload());
});
//// min_js
gulp.task('min_js', function(){
    gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        //.pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('js/min'))
        .pipe(livereload());
});
//// min_image
gulp.task('min_image', function(){
    gulp.src('imgs/**/*')
        .pipe(plumber())
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo([{removeViewBox: false}, {minifyStyles: false}])
            ], {verbose: true}))
        //.pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('imgs_min'))
        .pipe(livereload());
});
/// convert pug files
gulp.task('jade', function(){
    gulp.src('pug_files/index.pug')
        .pipe(plumber())
        .pipe(jade({pretty:true}))
        .pipe(gulp.dest(''))
        .pipe(livereload());
});
//// html -> task to watching any Edit alive
gulp.task('html',function(){
    gulp.src('*.html')
        .pipe(plumber())
        .pipe(livereload());
});
//// Task fo Watching Editing for Determing Tasks
gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('css/*.scss',['convert_sass']);
    gulp.watch('css/*.css',['min_css']);
    gulp.watch('js/*.js',['min_js']);
    //gulp.watch('imgs/**/*',['min_image']);
    gulp.watch('pug_files/index.pug',['jade']);
    gulp.watch('*.html',['html']);
})

gulp.task('default',['watch']);