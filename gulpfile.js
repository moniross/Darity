"use strict";
const { src, dest, series, watch } = require("gulp");
const gulp = require("gulp");
const del = require("del");
var multiDest = require("gulp-multi-dest");
const purgecss = require('gulp-purgecss')
const newer = require("gulp-newer");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-cleancss");
var sass = require('gulp-sass')(require('sass'));
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-Sync").create();
const panini = require("panini");
const nodepath = "node_modules/";
const files = {
	scssPath: "src/assets/scss/**/*.scss",
	jsPath: "src/assets/js/**/*.js",
	fontPath: "src/assets/fonts/**/*",
	imgPath: "src/assets/img/**/*",
	htmlPath: "src/pages/**/*.html",
};

// ======================= DELETE DIST FOLDER
function cleanDist(done) {
	console.log("-----------🧻🧻 REMOVING OLD FILES FROM DIST 🧻🧻-----------");
	del.sync(["dist", /*"Darity_main"*/]);
	return done();
}

// ======================= REPLACE JS PLUGINS
function jsPlugins(done) {
	console.log("-----------🍌🍌 REPLACE JS PLUGINS 🍌🍌-----------");
	src([
		nodepath + "bootstrap/dist/js/bootstrap.bundle.min.js",
	])
		.pipe(sourcemaps.init())
		// .pipe(concat("Plugins.js"))
		.pipe(sourcemaps.write("./"))
		.pipe(multiDest(["./dist/assets/js", /*"./Darity_main/assets/js"*/]))

		.pipe(browserSync.stream());
	done();
}
// ======================= REPLACE CSS PLUGINS
function cssPlugins(done) {
	console.log("-----------🖌🖌 REPLACE CSS PLUGINS 🖌🖌-----------");
	src([
		nodepath + "remixicon/fonts/*",
		nodepath + "bootstrap/dist/css/bootstrap.min.css",
	])
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write("./"))
		.pipe(multiDest(["./dist/assets/css/plugins", /*"./Darity_main/assets/css"*/]))

		.pipe(browserSync.stream());
	done();
}
// ======================= COMPILING SCSS
function compileSCSS(done) {
	console.log("-----------🌈🌈 COMPILING SCSS 🌈🌈-----------");
	src(files.scssPath)
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'expanded' }).on("error", sass.logError))
		.pipe(autoprefixer("last 2 versions"))
		.pipe(sourcemaps.write("./"))
		.pipe(multiDest(["./dist/assets/css"]))

		.pipe(browserSync.stream());
	done();
}
// ======================= COPY SCSS
function purgeCSS(done) {
	console.log("-----------🌈🌈 Purge SCSS 🌈🌈-----------");
	gulp.src('dist/assets/css/style.css')
		.pipe(purgecss({
			content: ['dist/**/*.html']
		}))
		.pipe(gulp.dest('dist/css'))
	done();
}
// ======================= COMPILING JS
function compileJS(done) {
	console.log("-----------🔥🔥 COMPILING JS 🔥🔥-----------");
	gulp
		.src(files.jsPath)
		.pipe(multiDest(["./dist/assets/js/", /*"./Darity_main/assets/js/"*/]));
	done();
}
// ======================= COMPILING HTML WITH PANINI
function compileHTML(done) {
	console.log("-----------🚀🚀 COMPILING HTML 🚀🚀-----------");
	panini.refresh();
	src(files.htmlPath)
		.pipe(
			panini({
				root: "src/pages/",
				layouts: "src/layouts",
				partials: "src/partials",
				data: "src/data",
				pages: "src/pages",
				helpers: "src/helpers",
			})
		)
		.pipe(multiDest(["./dist",/* "./Darity_main"*/]))
		.pipe(browserSync.stream())
		.on("finish", browserSync.reload);
	done();
}
// ======================= COPYING FONTS INTO DIST
function copyFont() {
	console.log("-----------🖍🖍 COPYING FONTS INTO DIST 🖍🖍-----------");
	return (
		src(files.fontPath)
			.pipe(multiDest(["./dist/assets/fonts", /* "./Darity_main/assets/fonts" */]))

			.pipe(browserSync.stream())
	);
}
// ================ COPYING IMAGES INTO DIST
function copyImages() {
	console.log("-----------🌄 🌄 OPTIMIZING IMAGES 🌄 🌄-----------");
	return (
		src(files.imgPath)
			.pipe(newer("./dist/assets/img"))
			.pipe(dest("./dist/assets/img"))
			.pipe(browserSync.stream())
	);
}

// RESET PANINI'S CACHE
function resetPages(done) {
	console.log("--------------- CLEARING PANINI 🍕 CACHE---------------");
	panini.refresh();
	done();
}

// BROWSER SYNC
function browserSyncInit(done) {
	console.log("---------------👀 BROWSER SYNC 👀---------------");
	browserSync.init({
		server: "./dist/",
		index: "/index.html",
	});
	return done();
}
// WATCH FILES
function watchFiles() {
	watch("src/partials/**/*.html", compileHTML);
	watch("src/helpers/*.js", compileHTML);
	watch("src/**/*.html", compileHTML);
	watch(["src/assets/scss/**/*", "src/assets/scss/*"], compileSCSS);
	watch("src/assets/js/*.js", compileJS);
	watch("src/assets/img/**/*", copyImages);
	watch("src/data/*.yml");
}
exports.clean = series(cleanDist);
exports.watch = series(watchFiles);
exports.browser = series(browserSyncInit);
exports.img = series(copyImages);
exports.html = series(compileHTML);
exports.purge = series(purgeCSS);
exports.sass = series(compileSCSS);

exports.default = series(
	jsPlugins,
	cssPlugins,
	compileSCSS,
	compileJS,
	compileHTML,
	copyFont,
	copyImages,
	resetPages,
	browserSyncInit,
	watchFiles,
	purgeCSS
);
