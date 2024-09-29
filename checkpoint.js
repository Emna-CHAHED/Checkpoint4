function reverseString(str) {
    var res = '';
    for (var i = str.length - 1; i >= 0; i--) {
      res = res + str[i];
    }
    return res;
  }

  function countCharacters(str) {
    return str.length;
  }  

  function capitalizeFirstLetters(sentence) {
    var str = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  function findMax(arr) {
    return Math.max(...arr);
  }

  function findMin(arr) {
    return Math.min(...arr);
  }

  function calculateSum(arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
      res= res+arr[i];
    }
    return res;
  }

  function filterArray(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]%2==0) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; 
      }
    }
    return true; 
  }

