select * from employees;

select count(dept_no) from departments;

select count(emp_no) from salaries where emp_no = 10001;

select title from titles where emp_no = 10006;

select emp_no as "Employee #", birth_date as "Birthday", first_name as "First Name"
from employees;

select concat(emp_no, ' is a ', title) AS "Employee Title" from titles;

select count(firstname)
from customers
where (state = 'OR'
    OR state = 'NY')
  AND gender = 'F';