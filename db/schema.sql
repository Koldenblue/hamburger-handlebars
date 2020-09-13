DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ("extremely regular burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("irregular burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("ornery burger", false);
