// ==UserScript==
// @name         ASC mini
// @namespace    -
// @version      0.5
// @description  help for work with asc
// @author       ilstrelkov.t.me
// @match        https://asc.s.o3.ru/exemplar_info/*
// @match        http://returns-service-center.rms.prod.s.o3.ru/exemplar_info/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //var button = document.createElement("Button");
    //button.innerHTML = "<b>ТЕСТ</b>";
    //button.style = "top:0;right:0;position:absolute;z-index:99999;padding:50px;";
    //document.body.appendChild(button);
    let scan_img = document.querySelector("body > div.container > div:nth-child(1) > div.col-xs-2 > img");
    scan_img.style = "Display: none;";

    let nav_bar = document.querySelector("body > nav");
	// <p align=\"center\"><a href=\"https://ilstrelkov.t.me\">ASC mini<a/></p>
    nav_bar.innerHTML = "";
    nav_bar.style = "min-height: 1px;font-weight: bold; background-color: #ffffffab";



    let table = document.querySelector("body > div.container > div:nth-child(4)");
    //table.innerHTML = ""; //Изменили код элемента
    table.style = "Display: none;";

    let table2 = document.querySelector("body > div.container > div:nth-child(3)");
    //table2.innerHTML = ""; //Изменили код элемента
    //table2.style = "Display: none;";

    let panel_info = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > div:nth-child(3)");
    panel_info.style = "Display: none";

    let panel_info2 = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > div:nth-child(4)");
    panel_info2.style = "Display: none";

    let addons = document.querySelector("body > div.container > div:nth-child(2) > div.panel-heading > div");
    addons.style = "Display: none";

    let p1_end = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > table > tbody > tr:nth-child(4)");
    p1_end.style = "Display:none"

    let tarnik = document.querySelector("body > div.container > div:nth-child(5) > table.table.table-striped.table-bordered > tbody > tr:nth-child(3) > td:nth-child(3)");
    tarnik.style = "Display: none";


    let price = document.querySelector("body > div.container > div:nth-child(5) > table.table.table-bordered.table-hover.table-small-font > thead > tr > th:nth-child(7)");
    //price.style = "Display: none";


    let number = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > table > tbody > tr:nth-child(1) > td:nth-child(1)");
    number.style = "Display: none";


    let theme = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > table > tbody > tr:nth-child(1) > td:nth-child(3) > span");
    theme.style = "font-size: 17px;";

    let number2 = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > table > tbody > tr:nth-child(4) > td:nth-child(2)");
    number2.style = "Display: none";

    let number3 = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > table > tbody > tr:nth-child(4) > td:nth-child(3)");
    number3.style = "Display: none";

    let number4 = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > table > tbody > tr:nth-child(4) > td:nth-child(4)");
    number4.style = "Display: none";





    let storage = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > table > tbody > tr:nth-child(2)");
    storage.style = "Display: none";

    let storage2 = document.querySelector("body > div.container > div:nth-child(2) > div.panel-body > table > tbody > tr:nth-child(3)");
    storage2.style = "Display: none";


    let footer = document.querySelector("body > footer");
    footer.style = "Display: none";

    let service = document.querySelector("body > div.container > div.panel.panel-warning > div.panel-footer");
    service.style = "Display: none";



})();