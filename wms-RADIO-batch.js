// ==UserScript==
// @name         RADIO
// @namespace    http://tampermonkey.net/
// @version      2024-05-10
// @description  try to take over the world!
// @author       You
// @match        https://wms-frontend-batching.wms.o3.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=o3.ru
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // Объявление переменных в глобальной области видимости
    window.rad_backcolor = "#434242";
    window.rad_logo = "black";
    window.rad_autoplay = false;
    window.rad_width = "responsive";
    window.rad_width_px = 330;
    window.rad_stations = [
 ['https://radiorecord.hostingradio.ru/ps96.aacp', 'Пиратская станция', 'pirate'],
    ['https://rr-90.hostingradio.ru/rr9096.aacp', 'Русское Радио Лихие Девяностые', 'rusradiolihie90'],
    ['https://radiodeepanet.xyz/dndnb', 'Radio Deepa.Net: Drum and Bass', 'deepanetdnb'],
    ['https://radiorecord.hostingradio.ru/rap96.aacp', 'Record Rap', 'recordrap'],
    ['https://pub0302.101.ru:8000/stream/pro/aac/64/191', 'Радио Король и Шут', 'korolishutradio'],
    ['https://radiorecord.hostingradio.ru/deep96.aacp', 'Record Deep', 'recorddeep'],
    ['https://radiorecord.hostingradio.ru/yo96.aacp', 'Record Black Rap', 'yofm'],
    ['https://radiorecord.hostingradio.ru/brks96.aacp', 'Record Breaks', 'recordbreaks'],
    ['https://radiorecord.hostingradio.ru/vip96.aacp', 'Record Vip House', 'vipmix'],
    ['https://radiorecord.hostingradio.ru/trap96.aacp', 'Record Trap', 'recordtrap'],
    ['https://radiorecord.hostingradio.ru/drumhits96.aacp', 'Record D\'n\'B Classics', 'recorddrumnbasshits'],
    ['https://radiorecord.hostingradio.ru/househits96.aacp', 'Record House Hits', 'recordhousehits'],
    ['https://radiorecord.hostingradio.ru/mf96.aacp', 'Record Маятник Фуко', 'recordmf'],
    ['https://radiorecord.hostingradio.ru/technopop96.aacp', 'Record Technopop', 'recordtechnopop'],
    ['https://radiorecord.hostingradio.ru/progr96.aacp', 'Record Progressive', 'recordprogressive'],
    ['https://radiorecord.hostingradio.ru/houseclss96.aacp', 'Record House Classics', 'recordhouseclassics'],
    ['https://radiorecord.hostingradio.ru/rus96.aacp', 'Record Russian Mix', 'russianmix'],
    ['https://ep256.hostingradio.ru:8052/europaplus256.mp3', 'Европа плюс', 'europaplus'],
    ['https://montecarlo.hostingradio.ru/montecarlo96.aacp', 'Радио Монте-Карло', 'montecarlo'],
    ['https://dfm.hostingradio.ru/dfm96.aacp', 'DFM', 'dfm'],
    ['https://dfm-dfmdeep.hostingradio.ru/dfmdeep96.aacp', 'DFM Deep', 'dfmdeep'],
    ['https://pub0302.101.ru:8443/stream/air/aac/64/102', 'Юмор FM', 'umor']
    ];

    // Ваш код для встраивания виджета радио
    var container = document.createElement('div');
    container.id = 'radiobells_container';
   // container.style.position = 'fixed'; // Фиксированное позиционирование
container.style.zIndex = '9999'; // Высокое значение z-index для наивысшего приоритета
container.style.right = '10px'; // Расположение справа
container.style.bottom = '10px'; // Расположение сверху, вместо снизу
    document.body.appendChild(container);

    var style = document.createElement('link');
    style.href = 'https://www.radiobells.com/script/style.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    document.head.appendChild(style);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = 'https://www.radiobells.com/script/v2_1.js';


    // Убедитесь, что DOM полностью загружен
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, существует ли объект RadiobellsPlayer
    if (typeof RadiobellsPlayer !== 'undefined') {
        // Инициализация виджета
        window.RadiobellsPlayer.init({
            container: 'radiobells_container',
            stations: window.rad_stations,
            autoplay: window.rad_autoplay,
            backcolor: window.rad_backcolor,
            logo: window.rad_logo,
            width: window.rad_width,
            width_px: window.rad_width_px
        });
    } else {
        console.error('RadiobellsPlayer не определен.');
    }
});
        document.body.appendChild(script);
})();