# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
select products.productName, categories.categoryName
from products
join categories on products.categoryId = categories.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
select orders.orderId, shippers.shipperName
from orders
join shippers on orders.shipperId = shippers.shipperId
where order.orderDate >= 1997-09-01

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
select products.productName, orderDetails.quantity
from products
join orderDetails on products.productId = orderDetails.productId 
where orderId = 10251
order by products.productName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
select orders.orderId, customers.customerName, employees.lastName 
from orders
join customers on orders.customerId = customers.customerId
join employees on orders.employeeId = employees.employeeId

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 