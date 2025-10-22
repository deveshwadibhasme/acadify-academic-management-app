use student_management_app;

create table if not exists job (
    id int primary key AUTO_INCREMENT,
    role varchar(100) not null,
    description TEXT not null,
    company_name varchar(100) not null,
    created_at timestamp default current_timestamp,
    expires_on DATETIME not null,
    posted_by int,
    is_active boolean DEFAULT false,
    CONSTRAINT fk_alumni_id_job FOREIGN KEY (posted_by) REFERENCES alumni(id)
)

