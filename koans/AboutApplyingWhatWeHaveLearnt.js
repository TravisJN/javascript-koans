var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      var canEat = function(product) {
        if (product.containsNuts === false && _(product.ingredients).all(function(x) { return x.indexOf("mushrooms") < 0; })) {
          return true;
        }
      }

      productsICanEat = _.filter(products, canEat);

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

        /* try chaining range() and reduce() */
    var sum = _.range(1000).reduce(function(tally, x) {
      if (x % 3 === 0 || x % 5 === 0) {
        return tally + x;
      } else {
        return tally;
      }    
    });

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    _.chain(products)
     .map(function(x) { return x.ingredients; })  //obtain an array of arrays of ingredients
     .flatten()       //flatten the nested arrays so all ingredients are in one array
     .reduce(function(count, x) {   //run a function that sets each ingredient as a key and its value is a counter
        ingredientCount[x] = (ingredientCount[x] || 0) + 1;   //increment by one
        return ingredientCount[x];
     }, 0);

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  it("should find the largest prime factor of a composite number", function () {
    function largestPrimeFactor(number){     
      var largestFactor = 0;

      //loop through each number from 0 and check to see if it's a factor of number AND a prime number
      //log the largest factor that is prime
      for (var i = 0; i < number; i++) {
        if (number % i === 0 && isPrime(i)) {
          largestFactor = i;
        }
      }

      return largestFactor;
    }

    function isPrime(num) {
      var start = 2;  //start at 2 because all numbers are divisible by 1
      for (var i = start; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      //if loop completes there are no divisible numbers then num is prime
      return true;
    }
    
    expect(largestPrimeFactor(123)).toBe(41);
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  
});
