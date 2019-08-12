DROP DATABASE IF EXISTS houseListing_DB;
CREATE DATABASE houseListing_DB;

USE houseListing_DB;

CREATE TABLE houseSearch(
  id INT NOT NULL AUTO_INCREMENT,
  price DECIMAL(10,4) NULL,
  beds DECIMAL(10,4) NULL,
  baths DECIMAL(10,4) NULL,
 
  PRIMARY KEY (id)
);


