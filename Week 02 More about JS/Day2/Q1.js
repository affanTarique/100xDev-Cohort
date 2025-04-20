//create counter;
let counter = 0;

const updatecounter = () => {
    counter++;
    console.log(counter);
};

setInterval(updatecounter, 1000);
