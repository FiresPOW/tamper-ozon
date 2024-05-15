// ==UserScript==
// @name         wms barcode-info list
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  try to take over the world!
// @author       ilstrelkov.t.me
// @match        https://wms-frontend-reporting.wms.o3.ru/*/barcode-info/*?barcode=*
// @require      https://raw.githubusercontent.com/FiresPOW/tamper-ozon/main/libs/wms-common.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=o3.ru
// @grant        none
// ==/UserScript==

// https://wms-frontend-reporting.wms.o3.ru/18044249781000/barcode-info/boxing?barcode=bx10004226887
// https://wms-frontend-reporting.wms.o3.ru/18044249781000/barcode-info/cell?barcode=cl89554667
// https://wms-csharp-web-reporting.wms.o3.ru/v3/boxing/get

(async function() {
    'use strict';

    function getInfoTypeFromUrl(url) {
        const regex = /barcode-info\/(\w+)\?/;
        const match = url.match(regex);
        return match ? match[1] : null; // cell or boxing
    }

    function getWarehouseIdFromUrl(url) {
        const regex = /https:\/\/wms-frontend-reporting\.wms\.o3\.ru\/(\d+)\/barcode-info\/\w+\?barcode=.*/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    let currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const referrerUrl = "https://wms-frontend-reporting.wms.o3.ru/";

    let barcode_info_type = getInfoTypeFromUrl(currentUrl);
    let warehouse_id = getWarehouseIdFromUrl(currentUrl);

    console.log(warehouse_id);

    let wms_token = window.wms.getToken();
    console.log(`"Bearer ${wms_token}"`);

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

    let apiUrl;
    let item_indif;
    let body;

    async function prepareRequest() {
        if (barcode_info_type === "cell") {
            console.log(barcode_info_type);

            item_indif = url.searchParams.get('barcode').slice(2);
            apiUrl = "https://wms-csharp-web-reporting.wms.o3.ru/v3/content/cell";

            body = JSON.stringify({
                cell_id: item_indif,
                warehouse_id: warehouse_id
            });

        } else if (barcode_info_type === "boxing") {
            console.log(barcode_info_type);
            apiUrl = "https://wms-csharp-web-reporting.wms.o3.ru/v3/content/boxing";

            let barcode = url.searchParams.get('barcode'); // bx10004226887
            const pre_body = JSON.stringify({
                barcode: barcode,
                warehouse_id: warehouse_id
            });

            // Внутри асинхронной функции использовать await для выполнения первого запроса
            const preResponse = await fetch("https://wms-csharp-web-reporting.wms.o3.ru/v3/boxing/get", {
                method: "POST",
                headers: headers,
                referrer: referrerUrl,
                referrerPolicy: "strict-origin-when-cross-origin",
                body: pre_body,
                mode: "cors",
                credentials: "include"
            });

            const preData = await preResponse.json();
            item_indif = preData.data.id;

            body = JSON.stringify({
                boxing_id: item_indif,
                warehouse_id: warehouse_id
            });

        } else {
            console.log("неизвестный линк");
            return;
        }
    }

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
            console.log('Штрих-коды скопированы');
        }).catch(err => {
            console.error('Ошибка при копировании:', err);
        });
    }

    function handleResponse(data) {
        console.log('Ответ:', data);
        const barcodes = data.data.instances.map(instance => instance.barcode);
        const table = createTable(barcodes);
        const copyButton = createCopyButton(barcodes);

        document.body.appendChild(copyButton);
        document.body.appendChild(table);
    }

    async function sendPostRequest(event) {
        console.log('Тело запроса:', body);

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: headers,
            referrer: referrerUrl,
            referrerPolicy: "strict-origin-when-cross-origin",
            body: body,
            mode: "cors",
            credentials: "include"
        });

        const data = await response.json();
        handleResponse(data);
    }

    // Вызов функции при загрузке страницы
    window.addEventListener('load', async () => {
        await prepareRequest();
        sendPostRequest();
    });
})();
