'use strict';

button.onclick = function () {
   text.value += "in onclick";
   img.add += "in onclick";
   text.value += "!focus";
   text.value += "out onclick";
   reset.style.backgroundColor = "red";
   img.style.width = "550px";
   img.style.height = "100px";
   button.style.backgroundColor = "#fff";
   img.style.backgroundColor = "red";

};
reset.onclick = function () {
   reset.style.backgroundColor = "#fff";
   button.style.backgroundColor = "blue";
   img.style.backgroundColor = "blue";
};


/*end script button*/

/*start script Ul > li*/

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
//// end
//
//let persone = {
//   name: "Jone",
//   age: 25,
//   maried: false
//};
//
//console.log(persone.name);
//console.log(persone.name);
let money, time;

function detectDayBudget() {
   money = +prompt("Ваш бюджет на месяц?", "");
   time = prompt("Введите дату в формате YYYY-MM-DD", "");
   while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");
   }
};
detectDayBudget();

let appData = {
   cash: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true
};

function detectLevel() {
   for (var i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
         b = prompt("Во сколько обойдется", "");

      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
         console.log("done");
         appData.expenses[a] = b;
      } else {
         i--;
         continue;
      }
   }
};
detectLevel();




//let i = 0;
//while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//      b = prompt("Во сколько обойдется", "");
//
//   if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//      console.log("done");
//      appData.expenses[a] = b;
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
//      console.log("done");
//      appData.expenses[a] = b;
//      i++;
//   } else {
//      i--;
//      continue;
//   }
//}
//while (i < 2);

appData.moneyPerDay = (appData.cash / 30).toFixed();
alert("ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
   console.log("Минимальный уровень достатка");
   alert("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Средний уровень достатка");
   alert("Средний уровень достатка");
} else if (appData.moneyPerDay) {
   console.log("Высокий уровень достатка");
   alert("Высокий уровень достатка");
};

function checkSaving() {
   if (appData.savings == true) {
      let save = +prompt("Какая сумма накоплений?"),
         percent = +prompt("Какой процент?");
      appData.montsIncome = save - 100 - 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.montsIncome);
   }
};

checkSaving();

let optionalExpenses = {

};

function chooseOptExpenses() {

}
// end script
