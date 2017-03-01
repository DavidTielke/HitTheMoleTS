var gulp = require("gulp");
var watch = require("gulp-watch");
var batch = require("gulp-batch");
var clean = require("gulp-clean");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var gutil = require("gulp-util");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('sass', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write("maps"))
        .pipe(gulp.dest('dist'));
});

gulp.task("typescript", function () {
    return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write("../maps"))
    .pipe(gulp.dest("dist/scripts"));
});

gulp.task("html", function () {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("images", function () {
    return gulp.src(["src/**/*.png","src/**/*.jpg"])
        .pipe(gulp.dest("dist"));
});

gulp.task('copyJS', function () {
    console.log("Muh");
    gulp.src([
        'node_modules/requirejs/require.js'])
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task("watch", function () {
    watch("src/**/*", batch(function (events, done) {
        gulp.start("copyJS", done);
        gulp.start("typescript", done);
        gulp.start("sass", done);
        gulp.start("html");
        gulp.start("images");
    }));
})