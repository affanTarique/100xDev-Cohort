function sum (a , b){
    return a +b
}

const ans = sum (2,10);
console.log(ans);



//cmi---command line interference ---- npm and pwd ek cmi hai... ok...

//thenble in js--

//Yeh code ek example hai ki await kisi bhi object ko resolve kar deta hai agar uske andar .then function hai. 1 second wait karega aur phir "hello world" print karega.
const thenable = {
    then: function(onFulfilled) {
        setTimeout(() => onFulfilled(42), 1000); 
    }

};

async function main() {
    const v = await thenable;
    console.log ("hello world")
}

main();