--data
INSERT INTO department(title)
VALUES  ('Sales'),
        ('Legal'),
        ('Finance'),
        ('Engineering');

INSERT INTO position(title, salary, department_id)
VALUES  ('Sales Manager', '80000', '1'),
        ('Sales Associate', '60000', '1'),
        ('Legal Advisor', '90000', '2'),
        ('Financial Analyst', '80000', '3'),
        ('Software Engineer', '82000', '4');
        

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ('Maya', 'Chakravarty', 1, NULL),
        ('John', 'Krasinski', 3, 1), --maya is manager
        ('Katie', 'Maloney', 4, 1),
        ('Timothee', 'Chalamet', 4, 1),
        ('Cameron', 'Diaz', 2, 1);
        