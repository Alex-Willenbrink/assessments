
// Option 1: Working version of what I had before
function isPalindrome(num) {
  let strNum = num.toString();
  let j = strNum.length - 1;
    for(let i = 0; i < Math.floor(strNum.length / 2); i++) {
      if(strNum.charAt(i) !== strNum.charAt(j)) {
        return false;
      }
      j--;
    }
    return true;
}


// Option 2: More elegant form of isPalindrome
function isPalindrome_2(num) {
  return (num.toString() === (num.toString()).split("").reverse().join(""));
}

let largest = 0;
let currNum = null;

// Solve for the largest palindrome
for(let i = 100; i < 1000; i++){
  for(let j = 100; j < 1000; j++){
    currNum = i * j;
    if(isPalindrome(currNum) && currNum > largest){
      largest = currNum;
    }
  }
}

console.log(largest);
