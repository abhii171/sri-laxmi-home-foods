@echo off
setlocal
cd /d "%~dp0sri-laxmi-home-foods"
echo Starting Sri Laxmi Home Foods Vite Server...
call npm.cmd run dev -- --host 0.0.0.0
