// ==UserScript==
// @name         wms boxing list ii
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  try to take over the world!
// @author       ilstrelkov.t.me
// @match        https://wms-frontend-reporting.wms.o3.ru/*/barcode-info/boxing?barcode=*
// @require      https://raw.githubusercontent.com/FiresPOW/tamper-ozon/main/libs/wms-common.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=o3.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Получение текущего URL и извлечение параметра 'barcode'
    let currentUrl = window.location.href;
    let url = new URL(currentUrl);
    let idValue = url.searchParams.get('barcode').slice(2);


    // Получение токена и вывод в консоль
    let wms_token = window.wms.getToken();
    console.log(`"Bearer ${wms_token}"`);

    const apiUrl = "https://wms-csharp-web-reporting.wms.o3.ru/v3/content/boxing";
    const referrerUrl = "https://wms-frontend-reporting.wms.o3.ru/";
    
    const headers = {
      "accept": "application/json, text/plain, */*",
      "accept-language": "ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
      "authorization": `Bearer ${wms_token}`,
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Chromium\";v=\"124\", \"Microsoft Edge\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-o3-app-name": "wms-frontend-reporting"
    };
    
    function createTable(barcodes) {
      let table = document.createElement('table');
      table.style.borderCollapse = 'collapse';
      table.style.margin = '10px';
    
      barcodes.forEach(value => {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = value;
        td.style.border = '1px solid black';
        td.style.padding = '5px';
        tr.appendChild(td);
        table.appendChild(tr);
      });
    
      return table;
    }
    
    function createCopyButton(barcodes) {
      let copyButton = document.createElement('button');
      copyButton.textContent = 'Копировать штрих-коды';
      copyButton.addEventListener('click', () => copyBarcodes(barcodes));
    
      return copyButton;
    }
    
    function copyBarcodes(barcodes) {
      let textToCopy = barcodes.join('\n');
      navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Копировать штрих-коды');
      }).catch(err => {
        console.error('Ошибка при копировании: ', err);
      });
    }
    
    function handleResponse(data) {
      console.log('Ответ:', data);
      const barcodes = data.data.instances.map(instance => instance.barcode);
      //console.log(barcodes);
    
      const table = createTable(barcodes);
      const copyButton = createCopyButton(barcodes);

      document.body.appendChild(copyButton);
      document.body.appendChild(table);

    }
    
    function sendPostRequest(idValue) {
      const body = JSON.stringify({
        boxing_id: idValue,
        warehouse_id: "18044249781000"
      });
    
      fetch(apiUrl, {
        method: "POST",
        headers: headers,
        referrer: referrerUrl,
        referrerPolicy: "strict-origin-when-cross-origin",
        body: body,
        mode: "cors",
        credentials: "include"
      })
      .then(response => response.json())
      .then(handleResponse) // возможно нужны двойные ковычки
      .catch((error) => {
        console.error('Ошибка:', error);
      });
    }
    

    // Вызов функции при загрузке страницы
    window.addEventListener('load', sendPostRequest);
})();
