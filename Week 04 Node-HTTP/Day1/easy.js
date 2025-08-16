const fs =  require("fs"); //--fs (File System) Node.js ka built-in module hai jo files ko read, write, delete, update karne deta hai.

function main(fileName) { // Ek main function banaya gaya hai jo fileName parameter lega.-----Jaise main("sample.txt") matlab ye function sample.txt file ke content read karega aur words count karega.
    fs.readFile(fileName, "utf-8", function(err, data) {//utf-8": iska matlab file ko text mode me padho (agar encoding na do to Buffer milega, jo human readable nahi hota).
    //function(err, data) { ... }: callback function jisme
    //err: agar koi error aata hai file read karte waqt, to ye variable us error ko store karega.
    //data → file ka text content isme aayega.
    
    });
    
    
    //hello
    let totalWords = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === " " ) {
            totalWords++;
        }
    }
    console.log("Total words in the file: " + (totalWords + 1));
    

}
main("sample.txt");

/*fs → file padhne ke liye module.
main(fileName) → function jo dynamic file input accept kare.
fs.readFile → async tarike se file read karna, bina program block kiye.
"utf-8" → data readable string ke form me mile.
err, data → error handling aur file content access.
for loop → content me words ginna space ke basis pe.
console.log → output print karna.
main("sample.txt") → program ko start karna specific file ke liye. */

