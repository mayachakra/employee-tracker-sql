# Employee Tracker - SQL, CMS (Content Management Systems)

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
## Acceptance Criteria
This site follows the acceptance criteria of:
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Description
For this assignment I created an employee management system that is accessed through the CLI where the user is granted a list of options to choose from to
view, add, or update to the management system. I used index.js to run the main prompt to ask the user to select from a list of choices as well as the code
to then check the sql and run queries to then be displayed on the CLI. I also created a schema.sql and seeds.sql to create tables for employees, positions, and
roles/positions and to also have data to then be accessed or updated.

## Deployment

Here is a video of how it works:
https://drive.google.com/file/d/1OYGpFYozhaDqyBB-wWuT71Ir3UyOBtRw/view?usp=sharing




