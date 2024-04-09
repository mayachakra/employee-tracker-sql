DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

\c employee_tracker;
--setting up

CREATE TABLE department(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL --instead of name
);
CREATE TABLE position( --was role but its a keyword
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL, --reference to employee role
    manager_id INTEGER, --null if emplyee had no manager
    FOREIGN KEY (role_id) REFERENCES position(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);