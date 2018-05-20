
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
    console.log("connected as id " + connection.threadId);
    displayProducts();
    //startSale();
});
  
function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        console.log("");
        console.log("------ BAMAZON products for sale ---------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + "$" + res[i].price);
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
        console.log(answer.id);
        console.log(answer.numOfUnits);
        answerId = answer.id;
        answerNum = answer.numOfUnits;
        checkOrder(answerId, answerNum);

    });
}

function checkOrder(id, quantity) {
    connection.query('SELECT * FROM products WHERE id = ' + id, function(err, res) {
        if (err) throw err;

        // checks the order to see that there is enough of the item in stock
        if (quantity <= res[0].stock_quantity) {
            console.log("You ordered " + quantity + " " + res[0].product_name);
            console.log("Thank you for you purchase!");
        }
        console.log(res);
        connection.end();

    });
}
  