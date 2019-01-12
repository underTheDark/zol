const gulp=require("gulp");
const connect=require("gulp-connect");
const rename=require("gulp-rename");
const sass=require("gulp-sass");
const babel=require("gulp-babel");
const concat=require("gulp-concat");
const sourcemaps=require("gulp-sourcemaps");
const uglify=require("gulp-uglify");

//拷贝html;
     gulp.task("html",function(){
		 gulp.src("*.html")
		 .pipe(gulp.dest("dist"))
		 .pipe(connect.reload())
	 })
//拷贝img;
  gulp.task("img",function(){
		 gulp.src("img/**")
		 .pipe(gulp.dest("dist/image"))
		 
	 })
//拷贝css;
 gulp.task("css",function(){
		 gulp.src("css/*.scss")
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write())
		 .pipe(gulp.dest("dist/css"))
		
	 })
//拷贝js;
 gulp.task("js",function(){
		 gulp.src("js/*.js")
		 .pipe(babel({
			"presets":["es2015"]
		 }))
		 .pipe(uglify())
		 .pipe(gulp.dest("dist/js"))
	 })
//监听状态
gulp.task("watch",function(){
	gulp.watch(["./css/*.scss","./js/*.js","./img/**","./*.html"],["css","js","img","html"])
})
//搭建本地服务
gulp.task("connect",function(){
	connect.server({"root":"dist",
	                "livereload":true
	})
})
gulp.task("build",["connect","watch"])