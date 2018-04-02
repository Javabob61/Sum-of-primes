function sumPrimes(num) {
  // sum all numbers up to and including the passed parameter.

  var total = 0;

  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      total = total + i;
    }
  }
  
  function isPrime(num) {

    for (var i = 2; i < num - 1; i++) {
      if (num % i === 0) {        
        return false;
      }
    }    
    return true;
  }
  
  return total;
  
}
sumPrimes(10);