-- Create the database task_saver_db and specified it for use.
-- DROP DATABASE IF EXISTS burger_eater_db;
-- CREATE DATABASE burger_eater_db;
-- USE burger_eater_db;

-- Create the table tasks.
CREATE TABLE IF NOT EXISTS burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    eaten BOOL DEFAULT false,
	PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (name, eaten) VALUES ("Catburger", false);
INSERT INTO burgers (name, eaten) VALUES ("Thatburger", false);
INSERT INTO burgers (name, eaten) VALUES ("Matte Burger", true);