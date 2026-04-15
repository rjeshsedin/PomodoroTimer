// 1. Counter Factory
function createCounter(initialValue = 0) {
  // Your code here
  let value=initialValue;
  return{
    increment(){
        value++;
    },
    getValue(){
        return value;
    }
  };

}

const counter = createCounter(5);
counter.increment();
console.log(counter.getValue()); // Should be 6

// 2. Memoization Function
function memoize(fn) {
  // Your code here
  const cache={};
  return function(...args){
    const key=JSON.stringify(args);
    if(cache[key]!==undefined){
        return cache[key];
    }
    const result=fn(...args);
    cache[key]=result;
    return result;
  };
}

const slowAddition = (a, b) => {
  console.log("Computing heavily...");
  return a + b;
};
const memoizedAdd = memoize(slowAddition);
console.log(memoizedAdd(2, 2)); // Computes and prints 4
console.log(memoizedAdd(2, 2)); // Returns 4 from cache without computing

// 3. Private Variable Pattern
function createSecretHolder(secret) {
  // Your code here
  let privateSecret=secret;
  return{
    getSecret(){
        return privateSecret;
    },
    setSecret(newSecret){
        privateSecret=newSecret;
    }
  };
}

const obj = createSecretHolder("super secret");
console.log(obj.getSecret()); // "super secret"
obj.setSecret("new secret");
console.log(obj.getSecret()); // "new secret"
console.log(obj.secret); // undefined
