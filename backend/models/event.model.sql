use student_management_app;

create table if not exists event (
    id int primary key AUTO_INCREMENT,
    title varchar(100) not null,
    description TEXT not null,
    event_date DATETIME,
    location varchar(200) not null,
    posted_by int,
    is_public boolean DEFAULT false,
    CONSTRAINT fk_user_id_event FOREIGN KEY (posted_by) REFERENCES users(id)
)