(function() {
	var html = {
		inp: document.getElementById('startInp'),
		but: document.getElementById('but'),
		result: document.getElementById('result')
	},
	startNum,
	endNumRub,
	endNumCop,
	message;

	html.but.onclick = function () {
		if (html.inp.value) {
			createNumb(html.inp.value);
		}
	};

	function createNumb(num) {
		var num = ' ' + (num/ 10000).toFixed(2);
		endNumRub = num.split('.')[0];
		endNumCop = num.split('.')[1] ? num.split('.')[1] : 0;

		generateMessage();
	}

	function generateMessage() {
		message = endNumRub + ' ' + declOfNum(endNumRub, ['рубль', 'рубля', 'рублей']);
		message += endNumCop ? ' ' + endNumCop + ' ' + declOfNum(endNumCop, ['копейка', 'копейки', 'копеек']) : '';
		
		html.result.innerHTML = message;
	}

	function declOfNum(number, titles)  
	{  
  	  cases = [2, 0, 1, 1, 1, 2];  
   	  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}

})();