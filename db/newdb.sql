create database if not exists pets;
use pets;

drop table if exists users;
drop table if exists dogs;
drop table if exists birds;
drop table if exists cats;
drop table if exists fish;
drop table if exists customer;
drop table if exists animals;


create table animals(
petid int NOT NULL AUTO_INCREMENT,
type varchar(255) NOT NULL,
name varchar(255),
primary key (petid));

create table dogs(
petid int NOT NULL,
breed varchar(255) NOT NULL,
price int NOT NULL,
description varchar(255) NOT NULL,
pic mediumtext NOT NULL,
CONSTRAINT FK_dogs FOREIGN KEY (petid) REFERENCES animals (petid) ON DELETE CASCADE);

create table cats(
petid int NOT NULL,
breed varchar(255) NOT NULL,
price int NOT NULL,
description varchar(255) NOT NULL,
pic mediumtext NOT NULL,
CONSTRAINT FK_cats FOREIGN KEY (petid) REFERENCES animals (petid) ON DELETE CASCADE);

create table birds(
petid int NOT NULL,
breed varchar(255) NOT NULL,
price int NOT NULL,
description varchar(255) NOT NULL,
pic mediumtext NOT NULL,
CONSTRAINT FK_birds FOREIGN KEY (petid) REFERENCES animals (petid) ON DELETE CASCADE);

create table fish(
petid int NOT NULL,
breed varchar(255) NOT NULL,
price int NOT NULL,
description varchar(255) NOT NULL,
pic mediumtext NOT NULL,
CONSTRAINT FK_fish FOREIGN KEY (petid) REFERENCES animals (petid) ON DELETE CASCADE);


create table users(
    userid varchar(255),
    password varchar(255)
);

insert into users values("admin@example.com","password");
------------------------------------------------------------------------------------------------------------------------------


create table customer(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    product varchar(255),
    price int (10) NOT NULL, 
    contact varchar(255),
    address varchar(255),
    primary key (id));

INSERT INTO customer(name ,product ,price,contact,address)
VALUES ("surya","dog","5000","9878454512","bangalore");
INSERT INTO customer(name ,product ,price,contact,address)
VALUES ("dinesh","fish","6000","9878454512","kolkatha");
INSERT INTO customer(name ,product ,price,contact,address)
VALUES ("ravi","dog","10000","8878454452","chennai");
INSERT INTO customer(name ,product ,price,contact,address)
VALUES ("manish","bird","1500","6878454789","hydrabad");
INSERT INTO customer(name ,product ,price,contact,address)
VALUES ("rahul","cat","5000","9878564354","ramanagar");
INSERT INTO customer(name ,product ,price,contact,address)
VALUES ("virat","fish","500","7878454852","madya");
INSERT INTO customer(name ,product ,price,contact,address)
VALUES ("yash","dog","4000","9128454321","mysore");









