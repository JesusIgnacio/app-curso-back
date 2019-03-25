let AWS = require("aws-sdk");
//let config = require("./config");
let aws_remote_config = {
    "region": "us-east-2",
    "accessKeyId": "AKIAID5GMTRH2WEBYGUQ",
    "secretAccessKey": "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" 
};

AWS.config.update(aws_remote_config);

let docClient = new AWS.DynamoDB.DocumentClient();

var table = "inscripcion";
var inscripcion_id = "4";
var rut = "123456780";
var nombre = "Han Solo";
var telefono = "224567891";
var email = "test@testmail.com";

var params = {
    TableName:table,
    Item:{
        "inscripcion_id": inscripcion_id,
        "rut": rut,
        "nombre": nombre,
        "telefono":telefono,
        "email": email 
    }
};

console.log("Adding a new item...");

docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});

