var buttonClick = document.querySelector('button');
var passcode1 = document.querySelectorAll('input')[0];
var passcode2 = document.querySelectorAll('input')[1];
var passcode3 = document.querySelectorAll('input')[2];
var passcode4 = document.querySelectorAll('input')[3];

// Adding Event Listener to run code as soon as button is clicked
buttonClick.addEventListener('click', function () {
  var passcodeLength = 10;
  var passArray1 = [];
  var passArray2 = [];
  var passArray3 = [];
  var passArray4 = [];

  var universalSet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "#", "$", "%" , "^", "&",
    "*", "(", ")", "_", "-", "=", "+", "[", "]", "{", "}", "<", ">", "."
  ];

  // for Password1
  for (var i = 0; i < passcodeLength; i++) {
    var genRandomNum1 = Math.floor(Math.random () * universalSet.length);
    var genRandomChars1 = universalSet[genRandomNum1];
    passArray1.push(genRandomChars1);
  }

var joinArray1 = passArray1.join("");
console.log(joinArray1);
passcode1.value = joinArray1;

  // for Passcode2
  for (var x = 0; x < passcodeLength; x++) {
    var genRandomNum2 = Math.floor(Math.random () * universalSet.length);
    var genRandomChars2 = universalSet[genRandomNum2];
    passArray2.push(genRandomChars2);
  }
  var joinArray2 = passArray2.join("");
  console.log(joinArray2);
  passcode2.value = joinArray2;

  // for Passcode3
  for (var y = 0; y < passcodeLength; y++) {
    var genRandomNum3 = Math.floor(Math.random () * universalSet.length);
    var genRandomChars3 = universalSet[genRandomNum3];
    passArray3.push(genRandomChars3);
  }
  var joinArray3 = passArray3.join("");
  console.log(joinArray3);
  passcode3.value = joinArray3;

  // for passcode4
  for (var z = 0; z < passcodeLength; z++) {
    var genRandomNum4 = Math.floor(Math.random () * universalSet.length);
    var genRandomChars4 = universalSet[genRandomNum4];
    passArray4.push(genRandomChars4);
  }
  var joinArray4 = passArray4.join("");
  console.log(joinArray4);
  passcode4.value = joinArray4;

});
