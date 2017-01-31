// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunct', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Antoine'));
//
// var person = {
//   name: 'Antoine',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();


// Challenge Area
function add (a, b) {
  return a + b;
}

var addCurly = (a,b) => {
  return a + b;
}

var addSingle = (a,b) => a+b;


console.log(add(2, 3));
console.log(addCurly(2, 3));
console.log(addSingle(2, 3));
