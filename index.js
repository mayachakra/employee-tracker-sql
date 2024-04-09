const inquirer = require('inquirer');
const pool = require('./utils/db');

const main = () => {
    const prompt = inquirer.createPromptModule();
    prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices:[
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Exit',
        ], //fix this keeps repeating the choices menu

    }).then(({ choice }) => {
        switch(choice) {
            case 'View All Employees':
                viewAllEmployees(pool);//logic
                break;
            case 'Add Employee':
                addEmployee();//logic
                break;
            case 'Update Employee Role':
                updateRole();//logic
                break;
            case 'View All Roles':
                viewAllPositions(pool);//logic
                break;
            case 'Add Role':
                addPosition();//logic
                break;
            case 'View All Departments':
                viewAllDepartments(pool);//logic
                break;
            case 'Add Department':
                addDepartment();//logic
                break;
            case 'Exit':
                console.log('Exiting application...');
                process.exit(0);
            // default:
            //     console.log('invalid choice');
            //     break;
        }
        //main();
        //FIX ERROR OF RESTARTING MENU ONCE TASK IS FINISHED
    }).catch((error) => {
        console.error('Error: ', error);
    });
};


//do this type of approach for all the choices
//reading
//view all employees
const viewAllEmployees = () => {
    const sql = `
    SELECT e.id, e.first_name, e.last_name, p.title AS role 
    FROM employee e INNER JOIN position p on e.role_id = p.id
    `; //fix this
    pool.query(sql, (err, result) => {
        if(err){
            console.log('Error', error);
            return;
        }
        const employees = result.rows;
        console.table(employees);
        main();
    });
};
//view all roles/positions
const viewAllPositions = () => {
    const sql = `SELECT * FROM position`; //fix this
    pool.query(sql, (err, result) => {
        if(err){
            console.log('Error', error);
            return;
        }
        const positions = result.rows;
        console.table(positions);
        main();
    });
};

//view all departments
const viewAllDepartments = () => {
    const sql = `SELECT * FROM department`; //fix this
    pool.query(sql, (err, result) => {
        if(err){
            console.log('Error', error);
            return;
        }
        const departments = result.rows;
        console.table(departments);
        main();
    });
};
//adding
//add employee
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'firstName',
            message: 'Enter employee\'s first name:'
        },
        {
            type: 'input',
            name:'lastName',
            message: 'Enter employee\'s last name:'
        },
        {
            type: 'input',
            name:'roleID',
            message: 'Enter employee\'s role ID:'
        },
        {
            type: 'input',
            name:'managerID',
            message: 'Enter employee\'s manager ID (optional):'
        }
    ]).then(answers => {
    const { firstName, lastName, roleID, managerID} = answers;
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`; //add more
    const params = [firstName, lastName, roleID, managerID || null];
    pool.query(sql, params, (err, result) => {
        if(err){
            res.status(500).json({error: err.message});
            return;
        }
        console.log('Employee added!');
        main();
        });
    }).catch(err => {
        console.log('Error', err);
    });
};

//add role/position
const addPosition = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'title',
            message: 'Enter position title:'
        },
        {
            type: 'input',
            name:'salary',
            message: 'Enter position salary:'
        },
        {
            type: 'input',
            name:'departmentID',
            message: 'Enter department ID:'
        }
    ]).then(answers => {
    const { title, salary, departmentID } = answers;
    const sql = `INSERT INTO position (title, salary, departmentID) VALUES ($1, $2, $3)`; //add more
    const params = [title, salary, departmentID];
    pool.query(sql, params, (err, result) => {
        if(err){
            res.status(500).json({error: err.message});
            return;
        }
        console.log('Position added!');
        main();
        });
    }).catch(err => {
        console.log('Error', err);
    });
};

//add department
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'title',
            message: 'Enter department title:'
        }
    ]).then(answers => {
    const { title } = answers;
    const sql = `INSERT INTO department (title) VALUES ($1)`; //add more
    const params = [title];
    pool.query(sql, params, (err, result) => {
        if(err){
            res.status(500).json({error: err.message});
            return;
        }
        console.log('Department added!');
        main();
        });
    }).catch(err => {
        console.log('Error', err);
    });
};


//update employee role
//use console.table to display
const updateRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'employeeID',
            message: 'Enter employee ID:'
        },
        {
            type: 'input',
            name:'newRoleID',
            message: 'Enter new role ID:'
        }
    ]).then(answers => {
    const { employeeID, newRoleID } = answers;
    const sql = `UPDATE employee SET role_id = $1 WHERE id = $2`;
    const params = [newRoleID, employeeID];
    pool.query(sql, params, (err, result) => {
        if(err){
            res.status(500).json({error: err.message});
            return;
        }
        if(result.rowCount === 0){
            console.log('Employee not found');
            main();
        } else{
            console.log('Employee role updated!');
            main();
        }
        });
    }).catch(err => {
        console.log('Error', err);
    });
};

const startMain = () =>{
    console.log('Welcome to the Employee Management System!');
    main();
};

startMain();