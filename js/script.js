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
}
// end

let persone = {
   name: "Jone",
   age: 25,
   maried: false
};

console.log(persone.name);
