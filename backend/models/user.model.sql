use student_management_app;

create table if not exists users (
    id int auto_increment primary key,
    name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(255) not null,
    number varchar(20) not null,
    role enum('student','admin','alumni') default 'student',
    created_at timestamp default current_timestamp
);

-- alter table users auto_increment = 0;