Task 1: 

SELECT *
FROM hr.employees
WHERE salary > 30000
AND salary < 40000

SELECT *
FROM hr.employees
WHERE salary BETWEEN 30000 AND 40000


Task 2:
1 - 
SELECT *
FROM hr.employees
WHERE length(last_name) = 6

2- 
SELECT SUBSTRING(last_name FROM 1 for 6 ), job_id, salary
FROM hr.employees


Task 3:

-- select *, 
--     EXTRACT(YEAR FROM hire_date) AS "Hire year"
-- FROM hr.employees
-- WHERE salary > 8000 AND hire_date > '1995-12-31'
-- ORDER BY hire_date ASC


-- select *
-- FROM hr.employees
-- WHERE salary > 8000 AND EXTRACT(YEAR FROM hire_date) > '1996'
-- ORDER BY hire_date ASC;

-- select *
-- FROM hr.employees
-- WHERE salary > 8000 AND EXTRACT(YEAR FROM hire_date) > '1996'
-- ORDER BY hire_date ASC




Task 4:

Select first_name || ' ' || last_name AS "Full Name"
from hr.employees
WHERE department_id IN 
    (SELECT department_id FROM departments);



SELECT *
FROM hr.departments;

select *
from hr.employees
