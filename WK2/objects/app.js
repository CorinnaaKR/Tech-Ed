let city = {
  cityName: "Norwich",
  population: 250000,
  hasTrainStation: true,
};
console.log(city);

let newCity = {
  cityName: "Kingston-Upon-Hull",
  population: 300000,
  hasTrainStation: true,
  coffeeShops: ["Great Coffee", "Amazing Coffee", "Just Average Coffee"],
  companies: [
    { companyName: "Tech Educators", location: "some random building" },
    { companyName: "Tech Providers", location: "Unknown Building" },
  ],
};

console.log(newCity.coffeeShops);
console.log(newCity.coffeeShops[1]);

console.log(newCity.companies[0].companyName);

const person = {
  name: "Corinna",
  age: 28,
  favouriteColour: "purple",
  favouriteFood: "pasta",
};

person.favouriteAnimal = "panda";
console.log(person.favouriteFood);

const car = {
  name: "Ford Fiesta",
  year: 2012,
  model: "Z-tec",
  colour: "blue",
};
console.log(car);

const book = {
  title: "Pride & Prejudice",
  author: "Jane Austen",
  publication: "Penguin",
  status: "favourite",
};
console.log(book);

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Rodeo",
    age: 28,
    favouriteChocolateBar: "Kinder Beuno",
  },
  tags: ["coding", "javascript", "objects", "object-methods", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

//object methods
let thisCity = {
  cityName: "Norwich",
  population: 300000,
  saySlogan: function (visitor) {
    console.log(`A fine city, welcome ${visitor}`);
  },
};
thisCity.saySlogan(`Corinna`);

const newPerson = {
  username: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function (username) {
    console.log("Hello " + username + "!");
  },
  getAge: function () {
    return this.age;
  },
};

const age = newPerson.getAge();
console.log(age);

newPerson.sayHello("Alice");
