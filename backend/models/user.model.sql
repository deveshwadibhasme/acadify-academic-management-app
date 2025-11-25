use student_management_app;

create table if not exists users (
    id int auto_increment primary key,
    first_name varchar(100) not null,
    last_name VARCHAR(100) not null,
    email varchar(100) not null unique,
    password varchar(255) not null,
    number varchar(20) not null,
    gender ENUM('male','female','other') not null,
    role enum('student','alumni') default 'student',
    created_at timestamp default current_timestamp
);

-- alter table users RENAME column 
-- name to first_name;
-- alter table users add column 
-- last_name varchar(100) after first_name;