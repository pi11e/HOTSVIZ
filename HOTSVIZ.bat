@echo off
start /b /wait .\hotsSetup\bin\Debug\net8.0\hotsSetup.exe
start /wait node ".\src\hotsdb.js"
start /b npm run dev
TIMEOUT /T 3
start "" http://localhost:1234