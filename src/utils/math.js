export const sum = (a, b) => a + b;
export const multi = (a, b) => a * b;
export const sub = (a, b) => a - b;
export const divide = (a, b) => a / b;

export const fetchName = callBack => {
  setTimeout(() => {
    callBack("Julia");
  }, 3000);
};

export const promiseEven = num => {
  return new Promise((res, rej) => {
    if (num % 2 == 0) res(num + " is an even number");
    else rej(num + " is not an even number");
  });
};
