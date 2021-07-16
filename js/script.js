// vanilla javascript


var oneButton = document.getElementById('bone');
var twoButton = document.getElementById('btwo');
var threeButton = document.getElementById('bthree');
var onePara = document.getElementById('one');
var twoPara = document.getElementById('two');
var threePara = document.getElementById('three');
oneButton.addEventListener('click',function(){
	onePara.style.display = 'block';
	twoPara.style.display = 'none';
	threePara.style.display = 'none';
});
twoButton.addEventListener('click',function(){
	onePara.style.display = 'none';
	twoPara.style.display = 'block';
	threePara.style.display = 'none';
});
threeButton.addEventListener('click',function(){
	onePara.style.display = 'none';
	twoPara.style.display = 'none';
	threePara.style.display = 'block';
});




