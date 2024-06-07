const myButton = document.getElementById('btn');
        myButton.onclick = function() {
            const name = prompt('Enter your full name');
            document.getElementById('name').innerText = name;
        }

        // Variables
        const pi = 3.142;
        let name = 'Aaron Portuphy';
        let age = 216;
        let present = false;
        console.log(name);

        // Objects
        const car = {
            numberPlate: 'GR-345-24',
            model: 'Bentley',
            color: 'black',
            weight: 50,
            weightUnit: 'KG',
            owner: {
                name: 'Aaron Portuphy',
                driver: {
                    name: 'Fiifi',
                }
            }

        }
        console.log(car.numberPlate);
        console.log(car.owner.driver.name);
        console.log(car);

        car.owner.driver.name = 'Elizabeth';
        console.log(car.owner.driver.name);

        //Arrays
const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweets: 1,
  }
  const tweet2 = {
    text: 'I have learnt arrays today',
    likes: 8,
    shares: 3,
    retweets: 0,
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets;
   
  
  // Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  //If/Else
  if(today.getHours == 16){
    console.log('Class has ended!');
  } else{
    console.log('Class is in session!');
  }
  
  // For loop
  for (let i = 0; i <= 9; i++) {
    console.log('Notify friends!',i)
  }

  // Functions
// Defining functions
function login(username, password) {
  if (username == 'mickeymond' && password == '1234'){
    return 'User is logged in'
  } else if(username != 'mickeymond' && password != '1234'){
    return 'invalid username and password'
  }else if(username != 'mickeymond'){
    return 'Invalid Username';
  }
  else if (password != '1234'){
    return 'Invaid Password'
  }
  else{
    return 'invalid username or password!'
  }
}
// Invoking functions
login('mickeymon', '123');

// Basic Arithmetic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4; 

// Comparson operators
2 === 2;
3 !== 2;
3 !== '3';  
3 != '3'
3 == '3'

// Built-in Math functions

Math.round(37/24);
Math.floor(37/24);
Math.ceil(37/24);
Math.random(); 
Math.max(78, 12, 98, 14, 89);

Math.ceil(Math.random() * 1000000);
  
// String concatenation
const firstname = 'Aaron ';
const lastname = 'Portuphy'
firstname.trim() + ' ' + lastname.trim();

// Template literal
`${firstname.trim()} ${lastname.trim()}`

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length
//length is a property not methods
firstname.toUpperCase();
lastname.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`

// String conversion
String(2014);
