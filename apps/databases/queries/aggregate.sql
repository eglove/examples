-- BEFORE YOU START
/*
 * What database should I use for these exercises?
 * Name: Employees
 */
--


-- Question 1: What is the average salary for the company?
-- Table: Salaries
select avg(salary)
from salaries;


-- Question 2: What year was the youngest person born in the company?
-- Table: employees
select min(birth_date)
from employees;

-- BEFORE YOU START
/*
 * What database should I use for these exercises?
 * Name: France
 */
--

-- Question 1: How many towns are there in france?
-- Table: Towns
select count(id)
from towns;

-- BEFORE YOU START
/*
 * What database should I use for these exercises?
 * Name: World
 */
--

-- Question 1: How many official languages are there?
-- Table: countrylanguage
select count(language)
from countrylanguage
where isofficial = true;

-- Question 2: What is the average life expectancy in the world?
-- Table: country
select avg(lifeexpectancy)
from country;

-- Question 3: What is the average population for cities in the netherlands?
-- Table: city
select avg(population)
from city
where countrycode = 'NLD';
