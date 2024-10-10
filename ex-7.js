function isPalindrome(string) {
  const reverseStr = string.split("").reverse().join("");
  return reverseStr === string;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
