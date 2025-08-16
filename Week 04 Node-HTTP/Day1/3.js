const fs = require("fs");

function main(fileName) {
    fs.readFile(fileName, "utf-8", function(err, data) {


    let totalWords = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === " ") {
            totalWords++;
        }
    }
    
    console.log("Total words in the file: " + (totalWords + 1));
    });

}

main("sample.txt");
