@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist C:\xam\hypersonic\scripts\ctl.bat (start /MIN /B C:\xam\server\hsql-sample-database\scripts\ctl.bat START)
if exist C:\xam\ingres\scripts\ctl.bat (start /MIN /B C:\xam\ingres\scripts\ctl.bat START)
if exist C:\xam\mysql\scripts\ctl.bat (start /MIN /B C:\xam\mysql\scripts\ctl.bat START)
if exist C:\xam\postgresql\scripts\ctl.bat (start /MIN /B C:\xam\postgresql\scripts\ctl.bat START)
if exist C:\xam\apache\scripts\ctl.bat (start /MIN /B C:\xam\apache\scripts\ctl.bat START)
if exist C:\xam\openoffice\scripts\ctl.bat (start /MIN /B C:\xam\openoffice\scripts\ctl.bat START)
if exist C:\xam\apache-tomcat\scripts\ctl.bat (start /MIN /B C:\xam\apache-tomcat\scripts\ctl.bat START)
if exist C:\xam\resin\scripts\ctl.bat (start /MIN /B C:\xam\resin\scripts\ctl.bat START)
if exist C:\xam\jboss\scripts\ctl.bat (start /MIN /B C:\xam\jboss\scripts\ctl.bat START)
if exist C:\xam\jetty\scripts\ctl.bat (start /MIN /B C:\xam\jetty\scripts\ctl.bat START)
if exist C:\xam\subversion\scripts\ctl.bat (start /MIN /B C:\xam\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist C:\xam\lucene\scripts\ctl.bat (start /MIN /B C:\xam\lucene\scripts\ctl.bat START)
if exist C:\xam\third_application\scripts\ctl.bat (start /MIN /B C:\xam\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist C:\xam\third_application\scripts\ctl.bat (start /MIN /B C:\xam\third_application\scripts\ctl.bat STOP)
if exist C:\xam\lucene\scripts\ctl.bat (start /MIN /B C:\xam\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist C:\xam\subversion\scripts\ctl.bat (start /MIN /B C:\xam\subversion\scripts\ctl.bat STOP)
if exist C:\xam\jetty\scripts\ctl.bat (start /MIN /B C:\xam\jetty\scripts\ctl.bat STOP)
if exist C:\xam\hypersonic\scripts\ctl.bat (start /MIN /B C:\xam\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist C:\xam\jboss\scripts\ctl.bat (start /MIN /B C:\xam\jboss\scripts\ctl.bat STOP)
if exist C:\xam\resin\scripts\ctl.bat (start /MIN /B C:\xam\resin\scripts\ctl.bat STOP)
if exist C:\xam\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT C:\xam\apache-tomcat\scripts\ctl.bat STOP)
if exist C:\xam\openoffice\scripts\ctl.bat (start /MIN /B C:\xam\openoffice\scripts\ctl.bat STOP)
if exist C:\xam\apache\scripts\ctl.bat (start /MIN /B C:\xam\apache\scripts\ctl.bat STOP)
if exist C:\xam\ingres\scripts\ctl.bat (start /MIN /B C:\xam\ingres\scripts\ctl.bat STOP)
if exist C:\xam\mysql\scripts\ctl.bat (start /MIN /B C:\xam\mysql\scripts\ctl.bat STOP)
if exist C:\xam\postgresql\scripts\ctl.bat (start /MIN /B C:\xam\postgresql\scripts\ctl.bat STOP)

:end

