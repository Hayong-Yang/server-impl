create database spring;
use spring;

CREATE TABLE member (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    name VARCHAR(50) NOT NULL
);

create table post(
	id int auto_increment primary key,
    title varchar(500) not null,
    content text not null,
	writer_id int not null,
	created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    foreign key (writer_id) references member(id) on delete cascade
);

select * from member;
select * from post;