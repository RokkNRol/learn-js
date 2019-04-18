'use strict';

button.onclick = function () {
   text.value += "in onclick";
   img.add += "in onclick";
   text.value += "!focus";
   text.value += "out onclick";
   reset.style.backgroundColor = "red";
   button.style.backgroundColor = "#fff";
   document.body.style.backgroundColor = "#DCDCDC";
   ulli.style.fontSize = "20px";
};
reset.onclick = function () {
   reset.style.backgroundColor = "#fff";
   button.style.backgroundColor = "blue";
   document.body.style.backgroundColor = "#fff";
   ulli.style.fontSize = "16px";
};
//
//console.log(persone.name);
//console.log(persone.name);
//let money, time;
//
//function detectDayBudget() {
//   money = +prompt("Ваш бюджет на месяц?", "");
//   time = prompt("Введите дату в формате YYYY-MM-DD", "");
//   while (isNaN(money) || money == "" || money == null) {
//      money = +prompt("Ваш бюджет на месяц?", "");
//   }
//};
//detectDayBudget();
//
//*end script button*/
//
//*start script Ul > li*/
//
var treeUl = document.getElementsByTagName('ul')[0];
var treeLis = treeUl.getElementsByTagName('li');
for (var i = 0; i < treeLis.length; i++) {
   var li = treeLis[i];
   var span = document.createElement('span');
   li.insertBefore(span, li.firstChild);
   span.appendChild(span.nextSibling);
}

treeUl.onclick = function (event) {
   var target = event.target;
   if (target.tagName != 'SPAN') {
      return;
   }

   var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
   if (!childrenContainer) return;
   childrenContainer.hidden = !childrenContainer.hidden;
};
// end
//
//let persone = {
//   name: "Jone",
//   age: 25,
//   maried: false
//};
//
//console.log(persone.name);
//console.log(persone.name);
//let money, time;
//
//function detectDayBudget() {
//   money = +prompt("Ваш бюджет на месяц?", "");
//   time = prompt("Введите дату в формате YYYY-MM-DD", "");
//   while (isNaN(money) || money == "" || money == null) {
//      money = +prompt("Ваш бюджет на месяц?", "");
//   }
//};
//detectDayBudget();
//
//let appData = {
//   cash: money,
//   timeData: time,
//   expenses: {},
//   optionalExpenses: {},
//   income: [],
//   savings: true
//};
//
//function detectLevel() {
//   for (var i = 0; i < 2; i++) {
//      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется", "");
//
//      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//      } else {
//         i--;
//         continue;
//      }
//   }
//};
//detectLevel();
//
//
//
//
//let i = 0;
//while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//      b = prompt("Во сколько обойдется", "");
//
//   if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//      i++;
//   } else {
//      i--;
//      continue;
//   }
//};
//let i = 0;
//do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//      b = prompt("Во сколько обойдется", "");
//
//   if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//     i++;
//  } else {
//      i--;
//      continue;
//   }
//}
//while (i < 2);
//
//appData.moneyPerDay = (appData.cash / 30).toFixed();
//alert("ежедневный бюджет: " + appData.moneyPerDay);
//if (appData.moneyPerDay < 100) {
//   console.log("Минимальный уровень достатка");
//   alert("Минимальный уровень достатка");
//} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//   console.log("Средний уровень достатка");
//   alert("Средний уровень достатка");
//} else if (appData.moneyPerDay) {
//   console.log("Высокий уровень достатка");
//   alert("Высокий уровень достатка");
//};
//
//function checkSaving() {
//   if (appData.savings == true) {
//      let save = +prompt("Какая сумма накоплений?"),
//         percent = +prompt("Какой процент?");
//      appData.montsIncome = save - 100 - 12 * percent;
//      alert("Доход в месяц с вашего депозита: " + appData.montsIncome);
//   }
//};
//
//checkSaving();
//
//function detectDayBudget() {
//   money = +prompt("Ваш бюджет на месяц?", "");
//   time = prompt("Введите дату в формате YYYY-MM-DD", "");
//   while (isNaN(money) || money == "" || money == null) {
//      money = +prompt("Ваш бюджет на месяц?", "");
//   }
//};
//detectDayBudget();
//let optionalExpenses = {
//
//};
//
//function chooseOptExpenses() {
//   for (var i = 1; i < 4; i++) {
//      let a = prompt("Введите статью необязательных расходов в этом месяце", "");
//
//      if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
//         console.log("done");
//         optionalExpenses[i] = a;
//      } else {
//         i--;
//         continue;
//      }
//   };
//};
//chooseOptExpenses();
// end script
//let option = {
//   width: 100,
//   height: 100,
//   name: "test"
//}
//console.log(option.width);
//option.bool = false;
//option.color = {
//   border: "back",
//   bg: "red"
//};
//console.log(option);
//delete option.color.bg;
//console.log(option);
//for (let key in option) {
//   console.log("Свойство " + key + " имеет значение " + option[key]);
//};
//console.log(Object.keys(option).length);
//
//let arr = ["first", 2, 3, "four", 5];
//arr.forEach(function(item, i, mass) {
//   console.log(i + ': ' + item + " = (массив: " + mass + ')');
//});
//let mass = [1,3,4,6,7];
//for (let key of mass) {
//   console.log(key + ' - значение;');
//}
//let ans = prompt('', ''),
//    arr = [];
//arr = ans.split(',');
//console.log(arr);
//let arr = ['hello', 'world', 'JS', 'by'],
//    i = arr.join(', ');
//console.log(i);
//let arr = [1, 15, 5, 7],
//    i = arr.sort(compare);
//function compare(a, b) {
//   return a-b;
//}
//
//console.log(arr);
//let a = 2;
//let c = [];
//for(var i = 1; i < 33; i++) {
//   let b = Math.pow(a, i);
//   c.push(b);
//   console.log("index = " + i + " value: " + b);
//
//};
//console.log(c);
let doc = document.body.querySelector('.block');

function ssd() {

   if(doc.style.backgroundColor == "red") {
   doc.style.backgroundColor = "orange";
   doc.style.width = '400px';
} else {
   doc.style.backgroundColor = "red";
   doc.style.width = '300px';
}
}
btn.addEventListener("click", ssd);




