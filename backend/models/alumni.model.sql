use student_management_app;

create table if not exists alumni (
    id int PRIMARY KEY AUTO_INCREMENT,
    batch_year date,
    degree varchar(50),
    department varchar(50),
    current_company varchar(50),
    designation varchar(50),
    linkedin_url varchar(100),
    city varchar(50),
    CONSTRAINT fk_user_id FOREIGN KEY (id) REFERENCES users(id)
);

-- ALTER TABLE alumni RENAME COLUMN id TO user_id;
-- ALTER TABLE alumni
-- ADD COLUMN id INT PRIMARY KEY AUTO_INCREMENT FIRST;

