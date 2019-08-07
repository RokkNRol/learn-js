let forma = document.getElementById('forma'),
	int = document.querySelector('.int');

/*let newLi = document.createElement('li'),
	newSpan = document.createElement('span'),
	newCheck = document.createElement('input'),
	appDat;
newSpan.classList.add('newsp');
newCheck.classList.add('newcheck');
newCheck.setAttribute('type', 'checkbox');
appData.unshift(forma.value);*/
/*forma.addEventListener("keyup", function (event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		forma.value = '';

	}
});
console.log(asd);*/

let a = function () {
	if (forma.checked) {
		int.classList.add('inn');
	} else {
		int.classList.remove('inn');
	}
console.log(int.classList);
};
forma.addEventListener('click', a);
