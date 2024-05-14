// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-04-29
// @description  try to take over the world!
// @author       You
// @match        https://wms-frontend-inspecting.wms.o3.ru/process*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=o3.ru
// @grant        none
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function() {
    'use strict';

	let current_ii = "i12345678";

	//let uri = document.location.search;
	//console.log(uri);

	window.addEventListener("load", (event) => {
  		console.log("page is fully loaded");

		//let input_ii = $("#generated-id-1");  getElementById
		//console.log(input_ii);
		//input_ii.val("111111");
		let target = document.getElementById("app");
		console.log(target);

		// Конфигурация observer (за какими изменениями наблюдать)
		const config = {
  			attributes: true,
  			childList: true,
  			subtree: true,
		};
		const callback = function (mutationsList, observer) {


			let mutation = mutationsList[0];

			let input_ii = $("#generated-id-1");
			console.log(input_ii.val());
			let input_ii_val = input_ii.val();

			input_ii.bind("change",function() {
				console.log("input_ii change");
			});


			if (input_ii_val == current_ii) {
					console.log("совпали");
				} else {

					console.log("не совпали");

					current_ii = input_ii_val;4

					setTimeout(() => {
						let text_area = $('[data-test="reason-dropdown"]');
						text_area.click();
						console.log(text_area);
						//text_area.val("Нарушение регламента забора возвратов");

						let list = $('[data-test="reason-item"]');
						console.log(list);
						if (list.length > 10){
							list[14].click();
						};

    					}, 500);

					//let text_area = $('[data-test="comment-input"]');
   					 setTimeout(() => {
						let text_area2 = $('[data-test="compensation-type-dropdown"]');
						console.log(text_area2);
						text_area2.val("Без компенсации_Нарушение регламента забора возвратов");
    					}, 500);
					//console.log(text_area);
					//text_area.val("Нарушение регламента забора возвратов");

					  setTimeout(() => {
						let text_area3 = $('[data-test="comment-input"]');
						console.log(text_area3);
						text_area3.val("Нарушение регламента забора возвратов");
    					}, 500);


					  setTimeout(() => {
						let sub_button = $('[data-test="submit-button"]');
						console.log(sub_button);
						//sub_button.click();
    					}, 500);
				};


  			//for (let mutation of mutationsList) {
    			//if (mutation.type === "childList") {
    				//console.log("A child node has been added or removed.");

					//let input_ii = $("#generated-id-1");
					//console.log(input_ii);
   				//} else if (mutation.type === "attributes") {
   				//	console.log("The " + mutation.attributeName + " attribute was modified.");


				//	let input_ii = $("#generated-id-1");
				//	console.log(input_ii.val());
				//	let input_ii_val = input_ii.val();


				//	if (input_ii_val == current_ii) {
				//		console.log("совпали")
				//	} else {
					//	console.log("не совпали")
					//};
		//}
		//}
			};

		const observer = new MutationObserver(callback);
		observer.observe(target, config);


	});

	//const observer = new MutationObserver(mutations => {
  		// Изменения в DOM становятся реальностью, к которой нужно быть готовым.
		//console.log(mutations);
		//});
	//observer.observe(document, { childList: true, subtree: true });


	 //document.addEventListener('readystatechange', () => console.log('readyState:' + document.readyState));


	//let img = document.querySelector("#app > div.nu7xwYokBFjYM71WanLA > main > div > div.TMBYAX_n4Cw74o9fAeqw > div:nth-child(3) > div.AqbOPE9Gc9BTDE5Q_N6j > div");
	//img.addEventListener('load', () => {
  		//console.log("окно товара");
	//});

	//let tovar= $('div[data-test="tooltip-container"]');
	//console.log(tovar);
	//div[data-test="tooltip-container"]
	//let input_ii = $("input#generated-id-1");
	//console.log(input_ii);

	//input_ii.bind("change",function() {
	//	console.log("input_ii change");
	//});

	// Выбираем целевой элемент
	//let target = document.getElementById("generated-id-1");

	// Конфигурация observer (за какими изменениями наблюдать)
	//const config = {
  	//attributes: true,
  	//childList: true,
  	//subtree: true,
	//};

	// Колбэк-функция при срабатывании мутации
	//const callback = function (mutationsList, observer) {
  	//for (let mutation of mutationsList) {
    //	if (mutation.type === "childList") {
    //  		console.log("A child node has been added or removed.");
   // 	} else if (mutation.type === "attributes") {
   //   		console.log("The " + mutation.attributeName + " attribute was modified.");
   // 	}
  	//	}
	//	};

	// Создаём экземпляр наблюдателя с указанной функцией колбэка
	//const observer = new MutationObserver(callback);

	// Начинаем наблюдение за настроенными изменениями целевого элемента
	//observer.observe(target, config);



	//let img = document.querySelector('#generated-id-1');
	//img.addEventListener('load', () => {
  		//console.log("input_ii change");
	//});



})();