
let randomNum = +prompt("choose any number");

while (Number.isInteger(randomNum) === false) {

    randomNum = +prompt("choose any integer", randomNum)

}

if (randomNum < 5) {

    console.log("Sorry, no numbers");

} else {

    for (let i = 1; i <= randomNum; i++) {

        if (i % 5 === 0) {

            console.log(i);

        }

    }

}


