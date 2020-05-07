"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var run = require("run-sequence");
var del = require("del");

gulp.task("style", function() {
  gulp.src("assets/templates/omega-template/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker({
        sort: false
      })
    ]))
    .pipe(gulp.dest("assets/templates/omega-template/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("assets/templates/omega-template/css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("images", function() {
  return gulp.src("assets/templates/omega-template/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("assets/templates/omega-template/img"));
});

gulp.task("symbols", function() {
  return gulp.src("assets/templates/omega-template/img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("assets/templates/omega-template/img"));
});

gulp.task("clean", function() {
    return del("build");
});

gulp.task("copy", function() {
    return gulp.src([
        "assets/templates/omega-template/fonts/**/*.{woff,woff2}",
        "assets/templates/omega-template/img/**",
        "assets/templates/omega-template/js/**",
        "*.html",
        "seo_pages/i5/*.html"
    ], {
        base: "."
    })
        .pipe(gulp.dest("build"));
});

gulp.task("build", function(fn) {
    run(
        "clean",
        "copy",
        "style",
        "images",
        "symbols",
        fn
    );
});

gulp.task("serve", function() {
  server.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
});

  gulp.watch("assets/templates/omega-template/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
