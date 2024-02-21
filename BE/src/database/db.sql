create database manageBook;
use manageBook;
create table Books(
	id int primary key auto_increment,
    name varchar(50),
    description text(200),
    price int,
    created_at date,
    update_at date,
)

create table Authors(
    id int primary key auto_increment,
    name varchar(550),
    biography(1000),
)

create table Book_Author(
    id int primary key auto_increment,,
    book_id int,
    author_id int,
)