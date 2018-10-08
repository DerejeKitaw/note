> [To kill all instances of tomcat server](https://stackoverflow.com/questions/15236308/how-do-i-kill-this-tomcat-process-in-terminal)
ps -Af | grep "tomcat" | grep -v grep | awk '{print$2}' | xargs kill -9
