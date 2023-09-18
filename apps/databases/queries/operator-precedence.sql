/*
* DB: Store
* Table: Customers
* Question: 
* Select people either under 30 or over 50 with an income above 50000
* Include people that are 50
* that are from either Japan or Australia
*/

select firstname, income, age
from customers
where income > 50000
  and (age < 30 OR age >= 50)

  and (country = 'Japan' OR country = 'Australia');

/*
* DB: Store
* Table: Orders
* Question: 
* What was our total sales in June of 2004 for orders over 100 dollars?
*/
select sum(totalamount)
from orders
where (orderdate >= '2004-06-01' AND orderdate < '2004-07-01')
  AND totalamount > 100;