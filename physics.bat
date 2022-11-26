call ionic build

@REM  Android app

@REM call npx cap copy
@REM call npx cap sync
@REM npx cap open android

@REM  Desktop app

call npx cap copy @capacitor-community/electron
call npx cap sync @capacitor-community/electron
call ionic cap open electron