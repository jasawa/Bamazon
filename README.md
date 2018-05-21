# Bamazon

## Introduction
Bamazon is an ultra-mini simulation of Amazon.com. It uses mySQL to create a table of purchaseable items and node.js to allow the customer to make a command line purchase in the terminal.

### Database
A database for Bamazon was created using mySQL and Sequel Pro. The table was populated mock data as can be seen below.

![Alt text](/images/database.png?raw=true "Optional Title")

### How the app works
The Bamazon storefront will appear in the terminal when the customer types *node bamazonCustomer.js*. The customer is prompted to input the id number of the item the customer desires to purchase.

![Alt text](/images/terminal1.png?raw=true "Optional Title")

If the customer desires to buy a self-driving car, the id number, 5575, will be typed. The customer will then be prompted to type the number of items they want to purchase. In this case 2.
* Note that there are 5 self-driving cars available for purchase at this time.

![Alt text](/images/terminal2.png?raw=true "Optional Title")
