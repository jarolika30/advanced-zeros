module.exports = function getZerosCount(number, base) {
  // your implementation
  //decompose a number into prime factors
  var primes = findPrimes(base);
  var sum = 0;
  var sumZeros = [];
  for (var i = 0; i < primes.length; i++) {
      for (var j = 1; ; j++) {
        var exponent = primes[i] ** j;
        if (exponent < number) {
          sum += Math.floor(number / exponent);
        } else {
           break;
        }
      }

      if (numberOfRepetitions(primes, primes[i]) !== 0) {
        var count = numberOfRepetitions(primes, primes[i]);
        sum = Math.floor(sum / count);
      }
      sumZeros.push(sum);
      sum = 0;
  }
  function numberOfRepetitions(mas, value) {
    var count = 0;
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] === value) {
            count++;
        }
    }
    return count;
  }
  function findPrimes(number) {
    var source = Math.abs(number);
    if (source === 0 || source === 1) {
        return 0;
    } 
    var primes = [];
    var prime = 2;
    while(source !== 1) {
        if (source % prime === 0) {
            primes.push(prime);
            source /= prime;
        } else {
            prime++;
            for (var i = prime; i < source; i++) {
                
                if (isPrime(i)) {
                    prime = i;
                    break;
                }
            }
        }
    
    }
    return primes;
  }

  function isPrime(number) {
      var count = 0;
      for (var j = 1; j <= number; j++) {
          if (number % j === 0) {
              count++;
          }
      }
      if (count === 2) {
          return true;
      }
      return false;
  }

  return Math.min.apply(null,sumZeros);
}