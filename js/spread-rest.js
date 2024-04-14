'use strict';
/* 
Використовуючи синтаксис залишкових параметрів, 
доповни код функції add() так, щоб вона приймала будь - яку 
кількість аргументів у параметр args і повертала їхню суму.
 */

function add(...args) {
  /*  console.log(arguments); //Arguments(2) [15, 27, callee: (...), Symbol(Symbol.iterator): ƒ]
  console.log(...args); //15 27
  console.log(args); //(2) [15, 27]
  console.log(arguments.length); // 2
  console.log(args.length); // 2 */
  let totalArgs = 0;
  for (let i = 0; i < args.length; i++) {
    totalArgs += args[i];
  }
  return totalArgs;
}
/* function add(...args) {
  // Використовуємо метод reduce для обчислення суми аргументів
  return args.reduce((total, current) => total + current, 0);
} */

console.log(add(15, 27)); //повертає 42
console.log(add(12, 4, 11, 48)); //повертає 75
console.log(add(32, 6, 13, 19, 8)); //повертає 78

/* Функція приймає довільну кількість аргументів чисел та 
обчислює суму тільки тих аргументів, які більші за задане число. 
Це число завжди буде передано першим аргументом. */
function addOverNum(value, ...args) {
  let total = 0;
  //   console.log(args.length);
  for (let i = 0; i < args.length; i++) {
    // console.log(i);
    if (args[i] > value) {
      total += args[i];
    }
  }

  return total;
}

console.log(addOverNum(50, 15, 27)); //повертає 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //повертає 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); // повертає 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //повертає 218

// приймає масив оцінок(чисел) у параметрі scores.
// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

function getExtremeScores(scores) {
  let worst = Math.min(...scores);
  let best = Math.max(...scores);
  return { best, worst };
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // повертає об'єкт { best: 93, worst: 17 }
console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); //повертає об'єкт { best: 81, worst: 4 }

/* У змінних firstGroupScores, secondGroupScores і thirdGroupScores 
зберігаються результати тестування окремих груп. 
Використовуючи розпилення, доповни код таким чином, щоб:
У змінній allScores зберігався масив всіх результатів.
У змінній bestScore був найвищий загальний бал.
У змінній worstScore був найнижчий загальний бал. */
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
console.log(bestScore, worstScore); // 97, 14

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };
console.log(finalSettings);
