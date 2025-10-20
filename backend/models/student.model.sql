use student_management_app;

create table if not exists student (
    id int,
    year_of_study date,
    student_id varchar(50),
    class varchar(50),
    department varchar(50),
    mentors varchar(50),
    CONSTRAINT fk_user_id FOREIGN KEY (id) REFERENCES users(id)
);