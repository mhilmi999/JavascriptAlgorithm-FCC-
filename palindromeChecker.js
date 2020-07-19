function palindrome(str) {
  str = str.toLowerCase().replace(/\W|_/g,"").split("");
  var balik = str.slice().reverse();
  return balik.join("") === str.join("");
}



palindrome("eye");
