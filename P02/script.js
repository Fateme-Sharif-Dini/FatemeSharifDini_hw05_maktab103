//Object Methodes
let stepCounter = {
  counterValue: 0,
  increase() {
    this.counterValue += 1;
    return stepCounter;
  },

  decrease() {
    this.counterValue -= 1;
    return stepCounter;
  },

  reset() {
    this.counterValue = 0;
    return stepCounter;
  },

  read() {
    const counterValue = 0;
    console.log(counterValue);
    return stepCounter;
  },
};

const stepCounterResult = stepCounter.increase().increase();
console.log(stepCounterResult);

// console.log(stepCounterResult);

// let stepCounterResult = decrease(decrease(decrease()));
// console.log(stepCounterResult);

// let stepCounterResult = reset();
// console.log(stepCounterResult);

// console.log(stepCounterResult);
