'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    includer = require("gulp-x-includer"),
    browserSync = require('browser-sync'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    newer = require('gulp-newer'),
    rename = require('gulp-rename'),
    svgSprite = require('gulp-svg-sprites'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    rimraf = require('rimraf'),
    postcss = require('gulp-postcss'),
    csswring = require('csswring'),
    mqpacker = require("css-mqpacker"),
    create = browserSync.create(),
    reload = browserSync.reload;


/*gulp.task('css', function () {
    var processors = [
        mqpacker({
            sort: true
        }),
        csswring
    ];
    return gulp.src('./build/styles/main.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./build/css/'));
});*/

var path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: './build/',
            scripts: './build/scripts/',
            styles: './build/styles/',
            images: './build/images/',
            maps: '../maps/',
            assets: './build/assets/'
        },
        src: { //Пути откуда брать исходники
            html: './src/pages/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            scripts: './src/scripts/*.js',//В стилях и скриптах нам понадобятся только main файлы
            styles: './src/styles/*.scss',
            images: './src/images/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            assets: './src/assets/**/*.*'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: './src/pages/**/*.html',
            scripts: './src/scripts/**/*.js',
            styles: './src/styles/**/*.scss',
            images: './src/images/**/*.*',
            assets: './src/assets/**/*.*'
        },
        clean: './build'
    },
    config = {
        server: {
            baseDir: "./build"
        },
        tunnel: false,
        host: 'localhost',
        port: 9005,
        logPrefix: "frontend",
        devBaseUrl: 'http://localhost'
    };

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(includer()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений*/
});

gulp.task('images:build', function (cb) {
    gulp.src(path.src.images) //Выберем файлы по нужному пути
        .pipe(newer(path.build.images))
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.images))//Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('scripts:build', function () {
    gulp.src(path.src.scripts) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.scripts)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('styles:build', function () {
    gulp.src(path.src.styles) //Выберем наш main.scss
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError)) //Скомпилируем
        .pipe(gulp.dest(path.build.styles)) //И в build
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        })) //Добавим вендорные префиксы
        .pipe(sourcemaps.write(path.build.maps, {
            addComment: true
        }))
        .pipe(gulp.dest(path.build.styles)) //И в build
        .pipe(reload({stream: true}));
});

gulp.task('assets:build', function () {
    gulp.src(path.src.assets)
        .pipe(gulp.dest(path.build.assets))
});

gulp.task('build', [
    'html:build',
    'scripts:build',
    'styles:build',
    'assets:build',
    'images:build'
]);

gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.styles], function (event, cb) {
        gulp.start('styles:build');
    });
    watch([path.watch.scripts], function (event, cb) {
        gulp.start('scripts:build');
    });
    watch([path.watch.assets], function (event, cb) {
        gulp.start('assets:build');
    });
    watch([path.watch.images], function (event, cb) {
        gulp.start('images:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);
