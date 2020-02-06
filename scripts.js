let favMovie = (movie='Star Wars', name='Kim') => console.log(`my name is ${name} and my favorite movie is ${movie}`);

favMovie('Star Wars', 'Kim');

let getFirstNameConcise = name => console.log(name.split(' ')[0]);

let getFirstName = (name) => {
    console.log(`My name is ${name.split(' ')[0]}`);    //template literal (step 10)
}; 

getFirstName('Kim Gawlowicz');
getFirstNameConcise('Bruce Gawlowicz');

//Spread syntax
let spread = (name, location, favFood) => {
    console.log(`My name is ${name}, I live in ${location}, My favorite food is ${favFood}`);

}

spread('Kim', 'Hoover', 'pizza');

let arr = ["Bruce","Buffalo","wings"]

spread(...arr)

let myFunction= (name) => {
    let arr = [...name]
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element)
        
    }
}

myFunction ('Kim Gawlowicz');