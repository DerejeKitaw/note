CREATE USER 'userone'@'localhost' IDENTIFIED BY 'userone';
GRANT ALL PRIVILEGES ON * . * TO 'userone'@'localhost';

Create connection using 'userone' user

CREATE DATABASE IF NOT EXISTS `ppmtcourse`;
USE `ppmtcourse`;
