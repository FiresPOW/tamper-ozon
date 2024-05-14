// ==UserScript==
// @name         ASC mini - hide my ass
// @namespace    -
// @version      0.2
// @description  help for work with asc
// @author       ilstrelkov.t.me
// @match        https://asc.s.o3.ru/exemplar_info/*
// @match        http://returns-service-center.rms.prod.s.o3.ru/exemplar_info/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// ==/UserScript==


function addRow() {
    const nameel = document.createElement('td');
    nameel.innerText = "hello";

    const markel = document.createElement('td');
    markel.innerText = "hello";

    //const photoel = document.createElement('td');
    //photoel.innerText = userData?.photo;
    //photoel.classList.add("img");
}

(function() {
    'use strict';

    // Your code here...
    //var button = document.createElement("Button");
    //button.innerHTML = "<b>ТЕСТ</b>";
    //button.style = "top:0;right:0;position:absolute;z-index:99999;padding:50px;";
    //document.body.appendChild(button);
    //let scan_img = document.querySelector("body > div.container > div:nth-child(1) > div.col-xs-2 > img");
    //scan_img.style = "Display: none;";

    //let nav_bar = document.querySelector("body > nav");
	// <p align=\"center\"><a href=\"https://ilstrelkov.t.me\">ASC mini<a/></p>
    //nav_bar.innerHTML = "";
    //nav_bar.style = "min-height: 1px;font-weight: bold; background-color: #ffffffab";



    //let tableCells = document.querySelector("body > div.container > div:nth-child(5) > table.table.table-bordered.table-hover.table-small-font > tbody > tr:nth-child(1)");
    //tableCells.innerHTML = tableCells.text + "hello"; //Изменили код элемента
    //table.style = "Display: none;";

    //let elems = document.querySelectorAll('body > div.container > div:nth-child(5) > table.table.table-bordered.table-hover.table-small-font > tbody > tr:nth-child(1) > td');

    //for (let elem of elems) {
     //   elem.textContent = '!!!';}


    // appendChild - добавить в конце
    // prepend - в начале
    let tableCells = document.querySelector("body > div.container > div:nth-child(5) > table.table.table-bordered.table-hover.table-small-font > tbody");
    var tr = document.createElement("tr");
    tr.innerHTML = '<tr><td style="text-align: center;"><b style="color:blue;">-</b></td><td><span data-toggle="tooltip" data-placement="top" title=""><b></b></span></td><td><span data-toggle="tooltip" data-placement="top" title="CD-28394, Списание и утилизация коммерческая 2">Списание брака</span></td><td><a href="/rezon_consig_info/?id=1139160290" target="_blank">1121146986</a></td><td>OZON\\rakperov</td><td>04.12.2023 17:47:32</td><td>12 298,33</td></tr>';
    tableCells.prepend(tr);
    // todo меняется цена
    // todo меняется дата











})();