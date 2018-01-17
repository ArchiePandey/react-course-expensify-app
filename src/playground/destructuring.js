//object destructuring
/*
const person = {
  // name: 'andrew',
    age: 26,
    location: {
        city: 'lucknow',
        temp: 75
    }
};

const {name : firstname = 'anonymous', age} = person; //giving new name to name and putting default to name
const {city, temp: temperature} = person.location;  //giving new name to temp
//const name=person.name;
//const age=person.age;
console.log(firstname,age);
console.log(city,temperature);
*/

//array destructuring

const arr=[];

//const [one,two,three,four] = arr; //subcripts contain an ordered list cuz matching happens by order
const [,two,three='3333'] = arr; //if we dont want all items
console.log(two,three);