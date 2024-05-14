@echo off
setlocal enableextensions ENABLEDELAYEDEXPANSION

REM The below is an example of how to use the 'forfiles' command to call a commandline and log all filenames in the directory it is executed in.
REM forfiles /s /m *.StormReplay /c "cmd /c echo @file"
REM We want to do the same now but instead of logging the filename, we want to call the HeroesReplay parser and pipe its output into a JSON file of the same name.
REM This is achieved with the following call:
REM dotnet heroes-decode get-json --replay-path '@file' > @file.json"


set cnt=0
set current=0
set AREYOUSURE=N
for %%A in (*.StormReplay) do set /a cnt+=1
echo %cnt% replays found. This will take ~1sec per replay.

setlocal
set /P AREYOUSURE=Continue (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END



REM forfiles /s /m *.StormReplay /c "cmd /c echo parsing replay %current% of %cnt% & dotnet heroes-decode get-json --replay-path @file > @file.json" & echo parsing complete

for %%A in (*.StormReplay) do set /a current +=1 & cmd /c echo parsing replay !current! of %cnt% & dotnet heroes-decode get-json --replay-path "%%A" > %%A.json

echo parsing complete

endlocal
