use student_management_app;

create table if not exists otp_store(
    otp_value int not null,
    email varchar(100) unique not null
);