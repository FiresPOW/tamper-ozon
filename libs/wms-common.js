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

    // Example function
    function sayHello(name) {
        console.log(`Hello, ${name}!`);
    }

    // Export functions to window object
    window.commonModule = {
        sayHello: sayHello
    };
})();
