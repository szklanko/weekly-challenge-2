var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create(); 

gulp.task('sass', function(){
    return gulp.src('app/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
});

gulp.task('sass-watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
})

gulp.task('serve', function() {  
    browserSync.init({
        server: './app/',
    }); 

    gulp.start('sass-watch');
    gulp.watch('app/**/*.html').on('change', browserSync.reload);
    gulp.watch('app/**/*.css').on('change', browserSync.reload);
    gulp.watch('app/**/*.js').on('change', browserSync.reload);
});


gulp.task('default', ['serve']);

// INSTRUKCJA
// Aby tego uzyc nalezy zainstalowac zaleznoscbrowser-sync
// Pierwszy raz mozna to zrobic tak : po odpaleniu projektu w VS Code wchodzimy do terminala i odpalamy:
//
// npm install browser-sync gulp --save-dev
//
// Zainstaluje to browser-sync oraz doda ja do package.json
// Aby uruchomic nasz serwer uzyjcie w terminalu :
//
// gulp serve
//
// Serwer po chwili sie uruchomi i odpali nam strone w przegladarce. Zostaly ustawione wszystkie potrzebne watchery :
// gulp.start('sass-watch'); - uruchamia przerabianie SASS na CSS po zmianie czegos w plikach .scss
// gulp.watch('app/**/*.html').on('change', browserSync.reload); - odswieza strone po wykryciu zmian w dowolnym pliku html w folderze app
// gulp.watch('app/**/*.css').on('change', browserSync.reload); - odswieza strone po wykryciu zmian w dowolnym pliku css w folderze app
// gulp.watch('app/**/*.js').on('change', browserSync.reload); - odswieza strone po wykryciu zmian w dowolnym pliku js w folderze app
//
// .on('error', sass.logError) w linii 8 sprawia ze po wykryciu bledu w SASS serwer sie nie wylaczy a tylko wypisze blad