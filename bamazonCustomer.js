
const MYSQL = require("mysql");
const INQUIRER = require("inquirer");

var connection = MYSQL.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazonDB"
});
  
connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);
    displayProducts();
});
  
function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        console.log("");
        console.log("------ BAMAZON products for sale ---------------");
        console.log("id   | Dept   |  Product   | Price | Quantity in Stock");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].dept_name + " | "  + res[i].product_name + " | " + "$" + res[i].price + " | "  + res[i].stock_quantity);
        }
        console.log("------------------------------------------------");
        startSale();
    });
}

function startSale() {
    INQUIRER.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the id number of the product you'd like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            name: "numOfUnits",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function(answer) {
        //console.log(answer.id);
        //console.log(answer.numOfUnits);
        var answerId = answer.id;
        var answerNum = answer.numOfUnits;
        checkOrder(answerId, answerNum);

    });
}

function checkOrder(id, quantity) {
    connection.query('SELECT * FROM products WHERE id = ' + id, function(err, res) {
        if (err) throw err;

        // checks the order by id number to see that there is enough of the item in stock
     
        if (quantity <= res[0].stock_quantity) {
            console.log("You ordered " + quantity + " " + res[0].product_name);
            console.log("Thank you for you purchase!");
            // updates the stock_quantity in database to reflect the purchase
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + quantity + ' WHERE id = ' + id);
            console.log("Please make another purchase");
            //console.log(res);
            displayProducts();
        }
        else {
            console.log("Sorry. Insufficient quantity of " + res[0].product_name + " in stock.");
            console.log("Please try again.");
            displayProducts();
        }

        connection.end();

    });
}
  