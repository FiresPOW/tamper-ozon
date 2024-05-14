// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-04-29
// @description  try to take over the world!
// @author       You
// @match        https://wms-frontend-inspecting.wms.o3.ru/process*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=o3.ru
// @grant        none
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

//Нарушение регламента забора возвратов
//Без компенсации_Нарушение регламента забора возвратов


function setReactInputValue(input, value) {
  const previousValue = input.value;

  // eslint-disable-next-line no-param-reassign
  input.value = value;

  const tracker = input._valueTracker;
  if (tracker) {
    tracker.setValue(previousValue);
  }

  // 'change' instead of 'input', see https://github.com/facebook/react/issues/11488#issuecomment-381590324
  input.dispatchEvent(new Event('change', { bubbles: true }));
}


function setNativeValue(element, value) {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
  	prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
}


(function() {
    'use strict';

let i = setInterval(function() {
    if (document.querySelector("textarea[data-test='comment-input']")){
        // если нашли останавливаем таймер и вызываем алерт
        clearInterval(i);

		let input = document.querySelector("textarea[data-test='comment-input']");
        console.log(input);

		let lastValue = input.value;
		input.value = 'Тест тест тест тест';

		let event = new Event('input', { bubbles: true });
		// hack React16 内部定义了descriptor拦截value，此处重置状态
		let tracker = input._valueTracker;
		if (tracker) {
  		tracker.setValue(lastValue);
		}
		input.dispatchEvent(event);


    	}}, 1000);

let b = setInterval(function() {
    if (document.querySelector("input[data-test='reason-dropdown']")){
        // если нашли останавливаем таймер и вызываем алерт
        clearInterval(b);

		let input1 = document.querySelector("input[data-test='reason-dropdown']");
        console.log(input1);

		let lastValue = input1.selectedIndex;
		input1.selectedIndex = 11;

		//let event2 = new Event('select', { bubbles: true });
		 //hack React16 内部定义了descriptor拦截value，此处重置状态
		//let tracker3 = input1._valueTracker;

		//if (tracker3) {
  		//	tracker3.setValue(lastValue);
		//}
		//input1.dispatchEvent(event2);

		//setNativeValue(input1, 'Нарушение регламента забора возвратов');
		//input1.dispatchEvent(new Event('select', { bubbles: true }));

		setReactInputValue(input1, "Нарушение регламента забора возвратов");

		//input1.click();

    	}}, 1000);

	let task_id = 334349068; // это номер задания


fetch("https://wms-web-inspecting.wms.o3.ru/v2/product-info/search-products", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
    "authorization": "Bearer 05D807000000000035DFCFC4E2D63BB5C89E988F611FCD528F5C4726BEE01BE7800B14984D7D048F",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-o3-app-name": "wms-fe-inspecting"
  },
  "referrer": "https://wms-frontend-inspecting.wms.o3.ru/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"task_id\":334349068,\"filters\":[{\"inspecting_place_barcodes\":[],\"barcode\":{\"value\":\"ii6214533068\",\"types_for_search\":[]}}]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});


fetch("https://wms-web-inspecting.wms.o3.ru/v2/product-info/search-products", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
    "authorization": "Bearer 05D807000000000035DFCFC4E2D63BB5C89E988F611FCD528F5C4726BEE01BE7800B14984D7D048F",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-o3-app-name": "wms-fe-inspecting"
  },
  "referrer": "https://wms-frontend-inspecting.wms.o3.ru/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"task_id\":334349068,\"filters\":[{\"inspecting_place_barcodes\":[],\"barcode\":{\"value\":\"ii6547534800\",\"types_for_search\":[]}}]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});




}) ();
