let AWS = require("aws-sdk");
//let config = require("./config");
let aws_remote_config = {
    "region": "us-east-2",
    "accessKeyId": "AKIAID5GMTRH2WEBYGUQ",
    "secretAccessKey": "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" 
};

AWS.config.update(aws_remote_config);

let docClient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = function()
{
    let params ={
        TableName: "inscripcion",
        Key: {
            "inscripcion_id": "1"
        }
    };

        docClient.get(params, function(err,data){
            if(err){
                console.log("inscripcion::fetchOneByKey::error - " + JSON.stringify(err,null,2));
            }
            else{
                console.log("inscripcion::fetchOneByKey::success - " + JSON.stringify(data,null,2));
            }
        });
};

fetchOneByKey();
