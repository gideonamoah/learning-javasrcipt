// console.log("I am writting my first JavaScript code");
// console.log(20+5)*2;



//  const myname="Gideon Amoah";
//  const myage=20;
//  console.log(`my name is ${myname} , i am ${myage} years old`);

// let score=0;
// score+=10;
// console.log(score);

// const name="Gideon Amoah";
// let loginCount=1;
// loginCount=2;
// console.log(`Welcome ${name}, you have logged in ${loginCount} times`);
// console.log(typeof name);

// checking the data type of a variable
// const name ="Book Title";
// let countpage =350;
// const Harvover=true;
// console.log(typeof name);
// console.log(typeof countpage);
// console.log(typeof Harvover);


// comparison operators
//  let myage =20;
//  myage+=5;
//  console.log(myage);
//  let crucialage=18;
//  crucialage+=7;
//  console.log(myage == crucialage);

// logical operators
//  const isAdult=true;
//  const hasTicket =false;
//  console.log(isAdult && hasTicket);
//  console.log(isAdult || hasTicket);
//  console.log( ! hasTicket);

// strict equality and loose equality
// const num1=5;
// const num2="5";
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);

// let customerAge = 25;
// let hasMembership = false;
// let orderTotal = 200;
// console.log(customerAge >=65 || customerAge<=18);
// console.log(customerAge>18 && hasMembership);
// console.log(orderTotal===200)

// control flow
// const age = 17
// if(age < 12){
//    console.log("Ticket price:GHS 10")
// }

// else if (age >=12 && age <=17){
//     console.log("Ticket price:GHS 15")
// }
// else{
//     console.log("Ticket price :GHS 25")
// }

// switch case

const userRole ="Lecturer";
switch(userRole){
    case "Student":
        console.log("Youre qualified as a student")
        break;

    case "Lecturer":
        console.log("Youre qualified as a senior lecturer")   
        break;
    
    case "Security":  
    console.log("Youre qualified as a security")
    break;
    default:
        console.log("User not a member of the school")
}

// for loop
// for (let i=0;i<5; i++){
//     console.log("This is number:" +i);
// }

// Names =["Gideon Amoah","John Amoah","Kelvin Klien","John Stewart Mills","J.A Aurthur"]
// for(let i=0;i<Names.length;i++){
//     console.log("Your name is: "+ Names[i])
// }


// let CountDown =3
// while(CountDown >0){
//     console.log("Count from:"+CountDown)
//      CountDown--
// }











// Guessing game
// const secretNumber = parseInt(7)
// let guessedNumber=prompt("Enter a number:")

// while(Number(guessedNumber)!==secretNumber){
//     guessedNumber=prompt("Enter another number :")

// }

// console.log("You guessed the correct number!!!")



function Mycommand(){
    console.log("Pick it up !!!")
}

Mycommand()

const Myrequest = ()=>{
    console.log("Please can you get me my phone")
}

Myrequest()



































 