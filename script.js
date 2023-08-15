//Determine 'n' and ensure it is > 1
//Loop and list all primes between 2 and 'n'
//
//Create isPrime = 2
//  This will log if it is prime, starting at 2
//Log 2 since this is the start and will always be logged since it is prime
//
//Loop to determine if ++isPrime is a prime number
//  This loop will divide all numbers between 2 and isPrime
//  let testPrime = 3
//  is testPrime <= isPrime
//  after the loop ++testPrime
//      if testPrime % isPrime return testPrime = false
//      else return isPrime = true
//If isPrime = true log it in the console
//if isPrime = false do not log
//++isPrime, loop until isPrime = 'n'

//input = the number to loop to
//isPrime = any number starting at 2 that will be tested if it is prime
//testPrime = every number between 1 and isPrime that will test if isPrime is a prime number

let n = 10;
let isPrime;
// I might need to create a function?

for (isPrime = 2; isPrime <= n; ++isPrime) {
    
    if (isPrimeTest = true) {
        console.log()
    }

    function isPrimeTest() {
        let testPrime;

        for (testPrime = 2; testPrime < isPrime; ++testPrime) { //loop to see if isPrime is a prime number
            if (testPrime % isPrime === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}