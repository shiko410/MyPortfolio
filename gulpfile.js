// 「gulp sass」コマンドを実行するための設定
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss') // 読み込むファイル(sassディレクトリのすべてのscssファイル)
    .pipe(sass({outputStyle: 'expanded'})) // cssファイルの記述方法(参考：nested, compact,compressed)
    .pipe(gulp.dest('./css')); //出力するファイル(cssディレクトリ)
});

gulp.task('sass:watch', function() { //タスク「sass:watch」と定義して、
  gulp.watch('./sass/**/*.scss', gulp.parallel('sass')); // watchメソッドの第一引数で監視するフォルダ、第２引数で実行するタスクを指定
});


// gulp@4.0.0以前の書き方
// gulp.task('sass:watch', function() { //タスク「sass:watch」と定義して、
//   gulp.watch('./sass/**/*.scss', ['sass']); // watchメソッドの第一引数で監視するフォルダ、第２引数で実行するタスクを指定
// });

