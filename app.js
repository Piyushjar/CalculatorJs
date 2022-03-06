//let inputField = document.getElementById("input");
// function addNum(num) {
//   inputField.textContent += num;
// }
// function equalTo() {
//   inputField.textContent
//     ? (inputField.textContent = eval(inputField.textContent))
//     : alert("invalid");
// }
// function clearInput() {
//   inputField.textContent = "";
// }

let result = document.getElementById("input");
let historyEl = document.getElementById("history");
let history = "";
let historyArr = [];

function addNum(num) {
  result.textContent += num;
  history += num;
}

function equalTo() {
  let y = parseStr(result.textContent);
  result.textContent = y;
  history += `= ${y}`;
  addHistory();
  history = y;
}

function clearInput() {
  result.textContent = "";
  history = "";
}

function addHistory() {
  historyArr.push(history);
  historyEl.innerHTML = "";
  historyArr.map((el) => {
    historyEl.innerHTML += `<p class="history">${el}</p>`;
  });
}

let num = [];
let oper = [];
let res = 0;
let number = "";

function parseStr(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "+" ||
      str.charAt(i) == "-" ||
      str.charAt(i) == "*" ||
      str.charAt(i) == "/"
    ) {
      oper.push(str.charAt(i));
      num.push(number);
      number = "";
    } else {
      number += str.charAt(i);
    }
  }
  num.push(number);
  number = "";

  console.log(num);
  console.log(oper);
  let answer = bodmas();
  return answer;
}

function bodmas() {
  for (let i = 0; i < oper.length; i++) {
    if (oper[i] == "/") {
      res = parseFloat(num[i]) / parseFloat(num[i + 1]);
      num[i] = `${res}`;
      rotate(num, i);
      rotate(oper, i - 1);
      i--;
    } else {
      continue;
    }
  }
  for (let i = 0; i < oper.length; i++) {
    if (oper[i] == "*") {
      res = parseFloat(num[i]) * parseFloat(num[i + 1]);
      num[i] = `${res}`;
      rotate(num, i);
      rotate(oper, i - 1);
      i--;
    } else {
      continue;
    }
  }
  for (let i = 0; i < oper.length; i++) {
    if (oper[i] == "+") {
      res = parseFloat(num[i]) + parseFloat(num[i + 1]);
      num[i] = `${res}`;
      rotate(num, i);
      rotate(oper, i - 1);
      i--;
    } else {
      continue;
    }
  }
  for (let i = 0; i < oper.length; i++) {
    if (oper[i] == "-") {
      res = parseFloat(num[i]) - parseFloat(num[i + 1]);
      num[i] = `${res}`;
      rotate(num, i);
      rotate(oper, i - 1);
      i--;
    } else {
      continue;
    }
  }

  let finalValue = num.pop();
  console.log(num);
  console.log(finalValue);
  return finalValue;
}

function rotate(arr, index) {
  for (let j = index + 1; j < arr.length; j++) {
    arr[j] = arr[j + 1];
  }
  arr.pop();
}
