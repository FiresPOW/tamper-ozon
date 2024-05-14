// ==UserScript==
// @name         wms list ii
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       You
// @match        https://wms-frontend-reporting.wms.o3.ru/*/barcode-info/cell?barcode=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=o3.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Получение текущего URL и извлечение параметра 'barcode'
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    let idValue = url.searchParams.get('barcode').slice(2);
    console.log(idValue);

    // Функция для получения значения cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Получение токена и вывод в консоль
    let wms_token = getCookie('WMS_TOKEN');
    console.log(`"Bearer ${wms_token}"`);

    // Функция для отправки POST-запроса
    function sendPostRequest() {
        fetch("https://wms-csharp-web-reporting.wms.o3.ru/v3/content/cell", {
            headers: {
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
            },
            referrer: "https://wms-frontend-reporting.wms.o3.ru/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: `{"cell_id":${idValue},"warehouse_id":"18044249781000"}`,
            method: "POST",
            mode: "cors",
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            console.log('Ответ:', data);
            const barcodes = data.data.instances.map(instance => instance.barcode);
            console.log(barcodes);

            // Создание и отображение таблицы со штрих-кодами
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
            document.body.appendChild(table);

            // Создание кнопки для копирования штрих-кодов
            let copyButton = document.createElement('button');
            copyButton.textContent = 'Копировать штрих-коды';
            document.body.insertBefore(copyButton, table.nextSibling);

            // Функция для копирования штрих-кодов
            function copyBarcodes() {
                let textToCopy = barcodes.join('\n');
                navigator.clipboard.writeText(textToCopy).then(() => {
                    console.log('Копировать штрих-коды');
                }).catch(err => {
                    console.error('Ошибка при копировании: ', err);
                });
            }

            // Добавление обработчика событий на кнопку
            copyButton.addEventListener('click', copyBarcodes);
        })
        .catch((error) => {
            console.error('Ошибка:', error);
        });
    }

    // Вызов функции при загрузке страницы
    window.addEventListener('load', sendPostRequest);
})();
