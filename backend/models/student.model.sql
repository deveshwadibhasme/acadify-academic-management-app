use student_management_app;

create table if not exists student (
    id int primary key AUTO_INCREMENT,
    user_id int,
    year_of_study date,
    student_id varchar(50),
    class varchar(50),
    department varchar(50),
    mentors varchar(50),
    CONSTRAINT fk_user_id_stud FOREIGN KEY (user_id) REFERENCES users(id)
);