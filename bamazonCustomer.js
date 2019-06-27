const mysql = require("mysql");
var inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();


});

function afterConnection() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.log("=================Current Bamazon Inventory=======================")
        console.table(res);

        idPicked();
    });
}

// create function which prompts the user
// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.

function idPicked() {
    inquirer
        .prompt({
            name: "id",
            type: "input",
            message: "Input the id of the product you want to buy",

        })
        .then(function (answer) {
            connection.query("SELECT * FROM products WHERE id = ?",
                [
                    answer.id
                ],


                (err, res) => {
                    if (err) throw err;
                    console.table(res);
                    quantityPicked(res[0]);
                });
        });

}
// The second message should ask how many units of the product they would like to buy.

function quantityPicked(itemPicked) {
    
    inquirer
        .prompt({
            name: "quantity",
            type: "input",
            message: "How many you want to buy?",

        })
        .then(function (answer) {
            
            
            if (answer.quantity < itemPicked.quantity) {
                //subtrack the user input from the invetory quantity
                var newquantity = itemPicked.quantity - answer.quantity 
                connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            quantity: newquantity
                        },
                        {
                            id: itemPicked.id
                        }
                    ]
                    , (err, res) => {
                        if (err) throw err;
                        // Once the update goes through, show the customer the total cost of their purchase.
                        var totalcost = itemPicked.price * answer.quantity 
                        console.log("Your total cost is " + totalcost)
                        afterConnection();
                    });
            }
            else {
                console.log("Insufficient quantity!!")
            }

        });

}
