// ==UserScript==
// @name         wms common module
// @namespace    http://your.namespace
// @version      1.0
// @description  Common functions for other scripts
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getToken() {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; WMS_TOKEN=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // вместо токена можно генерировать headers сразу

    // Export functions to window object
    window.wms = {
        getToken: getToken
    };
})();
