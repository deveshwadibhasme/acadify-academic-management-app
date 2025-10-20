use student_management_app;

CREATE TABLE if not exists admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    institute_name varchar(200) not null,
    password varchar(255) not null,
    number varchar(20) not null,
    email varchar(100) not null unique,
    type varchar(50),
    address varchar(240),
    affiliation_no varchar(50) unique,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE if not exists admin_alumni (
    admin_id INT,
    alumni_id INT,
    PRIMARY KEY (admin_id, alumni_id),
    FOREIGN KEY (admin_id) REFERENCES admin(id),
    FOREIGN KEY (alumni_id) REFERENCES alumni(id)
);

CREATE TABLE if not exists admin_students (
    admin_id INT,
    student_id INT,
    PRIMARY KEY (admin_id, student_id),
    FOREIGN KEY (admin_id) REFERENCES admin(id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE TABLE if not exists admin_events (
    admin_id INT,
    event_id INT,
    PRIMARY KEY (admin_id, event_id),
    FOREIGN KEY (admin_id) REFERENCES admin(id),
    FOREIGN KEY (event_id) REFERENCES event(id)
);

CREATE TABLE if not exists admin_jobs (
    admin_id INT,
    job_id INT,
    PRIMARY KEY (admin_id, job_id),
    FOREIGN KEY (admin_id) REFERENCES admin(id),
    FOREIGN KEY (job_id) REFERENCES job(id)
);
