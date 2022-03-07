Dec-6



-- Single Row and group FUNCTION

--Single Row:
SELECT LAST_NAME,
    EXTRACT(MONTH FROM hire_date) AS "Hire MONTH"
FROM hr.employees where JOB_ID = 'MK_REP';


--Multiple Row:
SELECT MAX(salary) FROM hr.employees;



--Group by

--List the max salary
SELECT job_id, MAX(salary)
FROM hr.employees
GROUP BY job_id;


-- Count how many employees there are in each department
SELECT department_id, COUNT(*)
FROM hr.employees
GROUP by department_id;

-- || concatinates string

SELECT 'Hello ' || 'Dolly!';

SELECT SUBSTRING('Hello Dolly!' FROM 1 for 5);

SELECT POSITION('ll' IN 'Hello Dolly!');



-- Number FUNCTIONS
SELECT ROUND(453.1231231,4);
SELECT TRUNC(453.1231231,4);
SELECT ROUND(453.1231231,-1);
SELECT TRUNC(453.1231231,-2);
SELECT MOD(16, 5) Remains;




-- full name of hr.employee
-- if they more more then 100000 -> no range_intersect
-- if they are more less then 80000 -> defintely a raise
-- everyoje else -> maybe

-- Note - and: is more of a comparrison OPERATOR
-- Note - comma's seperate collumns
--"" are for column titles '' are for inserting data

--Just like an if else statement 
--could use ORDER BY Raise:
SELECT first_name || ' ' ||  last_name as "Full Name", salary,
CASE
    WHEN salary > 100000 THEN 'No Raise'
    WHEN salary BETWEEN 80000 AND 100000 THEN 'Maybe'
    ELSE 'Raise'
END as "Deserves a Raise"
FROM hr.employees








--Subqueries

SELECT salary
FROM hr.employees;

select AVG(SALARY)
FROM hr.employees;

-- --wont work
-- SELECT first_name
-- FROM hr.employees
-- WHERE salary > AVG(salary);


-- subquery
SELECT first_name
FROM hr.employees
WHERE salary > (select AVG(SALARY) FROM hr.employees);




SELECT *
FROM hr.locations;


SELECT *
FROM hr.departments;

--note can't use = because it's looking for one value, you must use IN
SELECT *
FROM hr.departments
WHERE location_id IN (SELECT location_id FROM hr.locations WHERE country_id = 'UK');






select *
from hr.employees;



SELECT first_name || ' ' || last_name
FROM hr.employees;

SELECT *
FROM hr.locations
WHERE city = 'Seattle';


SELECT first_name || ' ' || last_name
FROM hr.employees
WHERE department_id IN 
    (SELECT department_id FROM departments WHERE location_ID =
        (SELECT location_id from locations WHERE city = 'Seattle'));





--JOINS


-- PK: unique identifier for the COLUMN
--When joining a table it'll always involve a PK and FK
-- tables are temporary with join


--INNER JOIN
SELECT p.productid, p.description, s.saledate, s.amount
FROM sales s JOIN products p
ON (p.productid = s.productid);

--Types of join
-- INNER JOIN or just JOIN: a join of two tables returning only matched rows

-- OUTER: a join of two tables that returns the results of the inner join, and all unmatched rows from left table
    --LEFT (outer) JOIN
    --RIGHT JOIN

-- FULL JOIN: a join between two tables that returns the results of inner join, as well as the unmatched rows from the left and right tables of join
-- SELF JOIN