(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*!\n * Copyright (C) 2016 Sergey Akopkokhyants\n * This project is licensed under the terms of the MIT license.\n * https://github.com/akserg/ng2-slim-loading-bar\n */\n\n\n/* Styling for the Slim Loading Progress Bar container */\n\n\n.slim-loading-bar {\n    position: fixed;\n    margin: 0;\n    padding: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n}\n\n\n/* Styling for the Slim Loading Progress Bar itself */\n\n\n.slim-loading-bar-progress {\n    margin: 0;\n    padding: 0;\n    z-index: 99998;\n    background-color: green;\n    color: green;\n    box-shadow: 0 0 10px 0; /* Inherits the font color */\n    height: 2px;\n    opacity: 0;\n\n    /* Add CSS3 styles for transition smoothing */\n    transition: all 0.5s ease-in-out;\n}\n\n\n.full-width {\n  width: 100%; }\n\n\n.absolute {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n\n.absolute .tabled {\n    display: table;\n    width: 100%;\n    height: 100%; }\n\n\n.absolute .celled {\n    display: table-cell;\n    vertical-align: middle; }\n\n\n*:focus {\n  outline: 0px none transparent; }\n\n\n::-webkit-input-placeholder {\n  color: #fff !important; }\n\n\n::-ms-input-placeholder {\n  color: #fff !important; }\n\n\n::placeholder {\n  color: #fff !important; }\n\n\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: #3d84a8;\n  position: relative; }\n\n\nbody:before, body:after {\n    position: fixed;\n    content: '';\n    z-index: -1; }\n\n\nbody:before {\n    background: url('top-bg.svg') no-repeat;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    top: 100px;\n    right: 5px; }\n\n\nbody:after {\n    -webkit-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n    background: url('bottom-bg.svg') no-repeat;\n    width: 120px;\n    height: 120px;\n    background-size: 120px;\n    bottom: -10px;\n    right: -10px; }\n\n\nbody app-header, body app-card {\n    position: relative;\n    z-index: 100; }\n\n\n.pad {\n  padding: 15px 30px; }\n\n\nheader {\n  -webkit-display: flex;\n  -moz-display: flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background: #48466d;\n  padding: 15px 45px; }\n\n\nheader a, header .local-time {\n    display: inline-block; }\n\n\nheader a {\n    font: 300 36px \"Open Sans\";\n    color: #fff;\n    text-transform: uppercase;\n    display: block; }\n\n\nheader a img {\n      display: inline-block;\n      vertical-align: middle;\n      margin-right: 15px; }\n\n\nheader a span {\n      display: none; }\n\n\nheader a:hover, header a:visited {\n      color: #fff; }\n\n\nheader .local-time {\n    text-align: right; }\n\n\nheader .local-time span {\n      font: 300 13px \"Open Sans\";\n      display: block;\n      color: #fff;\n      margin-bottom: 8px; }\n\n\nheader .local-time span:last-child {\n        margin-bottom: 0; }\n\n\nheader .local-time span em {\n        color: #46cdcf;\n        font-style: normal;\n        position: relative;\n        padding-left: 22px;\n        display: inline-block;\n        text-transform: uppercase;\n        letter-spacing: 2px; }\n\n\nheader .local-time span em:before {\n          position: absolute;\n          top: 50%;\n          left: 0;\n          width: 14px;\n          height: 14px;\n          margin-top: -7px;\n          content: ''; }\n\n\nheader .local-time span:last-child em:before {\n        background: url('time.svg') no-repeat;\n        background-size: 14px; }\n\n\nheader .local-time span:first-child em:before {\n        background: url('calendar.svg') no-repeat;\n        background-size: 14px; }\n\n\n.card {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  background: #46cdcf;\n  color: #333;\n  display: block;\n  overflow: hidden;\n  margin: 11px 0; }\n\n\n.card:hover {\n    color: #333;\n    text-decoration: none; }\n\n\n.card .title {\n    font: 400 22px \"Open Sans\";\n    margin-left: -30px;\n    margin-right: -30px;\n    padding: 10px 30px;\n    background: #48466d;\n    color: #fff;\n    margin-bottom: 15px;\n    text-transform: uppercase;\n    text-align: center;\n    position: relative;\n    overflow: hidden; }\n\n\n.card .title a {\n      background: url('back.svg') no-repeat;\n      position: absolute;\n      top: 0;\n      left: 30px;\n      background-size: 20px;\n      background-position: center;\n      background-color: #67649b;\n      width: 50px;\n      height: 100%; }\n\n\n.card .temp {\n    text-align: center;\n    border-bottom: 1px solid #2fb2b3;\n    padding-bottom: 30px;\n    margin-bottom: 30px; }\n\n\n.card .temp span {\n      font: 300 50px \"Open Sans\";\n      position: relative;\n      padding: 0 25px 0 0;\n      display: inline-block;\n      color: #fff; }\n\n\n.card .temp span strong {\n        font-weight: 300; }\n\n\n.card .temp span:after {\n        background: url('celsius.svg') no-repeat;\n        content: '';\n        width: 20px;\n        height: 20px;\n        background-size: 20px;\n        position: absolute;\n        top: 50%;\n        right: 0;\n        margin-top: -10px; }\n\n\n.card .temp.no-after span {\n      padding-right: 0; }\n\n\n.card .temp.no-after span:after {\n        display: none; }\n\n\n.card .temp em {\n      border-radius: 20px;\n      font: 300 16px \"Open Sans\";\n      text-transform: capitalize;\n      font-style: normal;\n      padding: 2px 30px;\n      margin-top: 15px;\n      display: inline-block;\n      letter-spacing: 1px;\n      background: #2fb2b3;\n      color: #fff; }\n\n\n.card .humidity {\n    text-align: center;\n    color: #fff;\n    border-bottom: 1px solid #2fb2b3;\n    padding-bottom: 30px;\n    margin-bottom: 30px; }\n\n\n.card .humidity i {\n      font: 300 16px \"Open Sans\";\n      display: block;\n      text-transform: uppercase;\n      font-style: normal;\n      color: #333;\n      letter-spacing: 1px; }\n\n\n.card .humidity span {\n      font: 300 30px \"Open Sans\";\n      position: relative;\n      padding-right: 30px;\n      display: inline-block; }\n\n\n.card .humidity span em {\n        font: 300 22px \"Open Sans\";\n        position: absolute;\n        top: 50%;\n        right: 0;\n        margin-top: -14px;\n        font-style: normal; }\n\n\n.card .title2 {\n    font: 300 16px \"Open Sans\";\n    color: #333;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: 15px; }\n\n\n.card .max-min {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #2fb2b3;\n    text-align: center;\n    padding-bottom: 40px; }\n\n\n.card .max-min .temp {\n      border: none;\n      padding: 0;\n      margin: 0; }\n\n\n.card .max-min .temp span {\n        font-size: 40px; }\n\n\n.card .max-min .temp span i {\n          font: 300 18px \"Open Sans\";\n          font-style: normal; }\n\n\n.card .max-min .max {\n      margin-bottom: 30px; }\n\n\n.card .max-min .max .title2 span:after {\n        background: url('max.svg') no-repeat;\n        background-size: 24px; }\n\n\n.card .max-min .min .title2 span:after {\n      background: url('min.svg') no-repeat;\n      background-size: 24px; }\n\n\n.card .max-min .min .title2 span.wind-speed:after {\n      background: url('wind-speed.svg') no-repeat;\n      background-size: 24px; }\n\n\n.card .max-min .min .title2 span.wind-deg:after {\n      background: url('wind-deg.svg') no-repeat;\n      background-size: 24px; }\n\n\n.card .max-min .min .title2 span.latitude:after {\n      background: url('latitude.svg') no-repeat;\n      background-size: 24px; }\n\n\n.card .max-min .min .title2 span.longitude:after {\n      background: url('longitude.svg') no-repeat;\n      background-size: 24px; }\n\n\n.card .max-min .min .title2 span.sunrise:after {\n      background: url('sunrise.svg') no-repeat;\n      background-size: 24px; }\n\n\n.card .max-min.inverse {\n      display: flex;\n      flex-direction: column; }\n\n\n.card .max-min.inverse .max, .card .max-min.inverse .min {\n        margin: 20px 0; }\n\n\n.card .max-min.inverse.coordinates {\n        margin-top: 30px; }\n\n\n.mini-card .card .temp {\n  margin-bottom: 0;\n  border: none; }\n\n\n.mini-card .card .humidity, .mini-card .card .max-min {\n  display: none; }\n\n\n.no-data {\n  text-align: center; }\n\n\n.no-data span {\n    font: 300 18px \"Open Sans\";\n    color: #fff;\n    text-transform: capitalize;\n    position: relative;\n    display: inline-block;\n    padding: 100px 0 100px 50px; }\n\n\n.no-data span:before {\n      background: url('no-data.svg') no-repeat;\n      content: '';\n      width: 30px;\n      height: 30px;\n      background-size: 30px;\n      position: absolute;\n      top: 50%;\n      left: 0;\n      margin-top: -15px; }\n\n\n.forecast {\n  padding: 40px 0; }\n\n\n.forecast .forecast-title {\n    font: 300 22px \"Open Sans\";\n    text-transform: uppercase;\n    padding: 15px 0;\n    background: #22495d;\n    color: #fff;\n    text-align: center; }\n\n\n.forecast strong {\n    font: 300 20px \"Open Sans\";\n    padding: 30px 0;\n    display: block;\n    text-align: center;\n    color: #48466d;\n    text-transform: uppercase;\n    background: rgba(255, 255, 255, 0.15); }\n\n\n.forecast strong.seperate {\n      margin-top: 20px; }\n\n\n.forecast .degree-strip {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: stretch;\n    position: relative;\n    padding-top: 30px; }\n\n\n.forecast .degree-strip.no-pt {\n      padding-top: 0; }\n\n\n.forecast .degree-strip div:not(.degree-title) {\n      width: calc(100% / 3);\n      background: rgba(72, 70, 109, 0.25);\n      padding-left: 15px;\n      padding-right: 15px; }\n\n\n.forecast .degree-strip .degree-title {\n      font: 300 14px \"Open Sans\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 5px 0;\n      background: rgba(72, 70, 109, 0.5);\n      text-transform: uppercase;\n      text-align: center; }\n\n\n.forecast .degree-strip div {\n      font: 300 22px \"Open Sans\";\n      color: #fff;\n      text-align: center; }\n\n\n.forecast .degree-strip div span {\n        position: relative;\n        display: inline-block;\n        padding: 5px 20px 5px 0; }\n\n\n.forecast .degree-strip div span.conditions {\n          padding: 14px 0;\n          font-size: 13px; }\n\n\n.forecast .degree-strip div span.humidity, .forecast .degree-strip div span.conditions {\n          padding-right: 0;\n          margin-bottom: 0; }\n\n\n.forecast .degree-strip div span.humidity:after, .forecast .degree-strip div span.conditions:after {\n            display: none; }\n\n\n.forecast .degree-strip div span:after {\n          position: absolute;\n          top: 50%;\n          right: 0;\n          margin-top: -8px;\n          content: ''; }\n\n\n.forecast .degree-strip div span.deg:after {\n          background: url('celsius.svg') no-repeat;\n          content: '';\n          width: 16px;\n          height: 16px;\n          background-size: 16px; }\n\n\n.forecast .degree-strip div span.wind-speed:after {\n          background: url('wind-speed.svg') no-repeat;\n          content: '';\n          width: 16px;\n          height: 16px;\n          background-size: 16px; }\n\n\n.forecast .degree-strip.inverse {\n      padding-top: 0;\n      padding-bottom: 30px; }\n\n\n.forecast .degree-strip.inverse .degree-title {\n        top: auto;\n        bottom: 0; }\n\n\n.search-container {\n  position: relative;\n  padding: 20px 15px 30px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n\n\n.search-container span {\n    position: absolute;\n    bottom: -2px;\n    left: 15px;\n    font: 400 14px \"Open Sans\";\n    display: block;\n    color: #fff;\n    padding-left: 28px;\n    white-space: nowrap; }\n\n\n.search-container span:before {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      margin-top: -8px; }\n\n\n.search-container span.error:before {\n      background: url('error.svg') no-repeat;\n      content: '';\n      width: 16px;\n      height: 16px;\n      background-size: 16px; }\n\n\n.search-container span.fetch:before {\n      background: url('fetch.svg') no-repeat;\n      content: '';\n      width: 16px;\n      height: 16px;\n      background-size: 16px; }\n\n\n.search-container input[type=\"text\"] {\n    -moz-border-top-left-radius: 30px;\n    border-top-left-radius: 30px;\n    -moz-border-bottom-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n    font: 400 14px \"Open Sans\";\n    width: calc(100% - 100px);\n    height: 36px;\n    text-transform: uppercase;\n    background: transparent;\n    color: #fff;\n    border: 1px solid #f5f5f5;\n    border-right: none;\n    padding-left: 20px; }\n\n\n.search-container button {\n    font: 400 18px \"Open Sans\";\n    -moz-border-top-right-radius: 30px;\n    border-top-right-radius: 30px;\n    -moz-border-bottom-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    width: 100px;\n    height: 36px;\n    line-height: 34px;\n    border: 1px solid #fff;\n    background: #48466d;\n    color: #fff;\n    text-transform: uppercase; }\n\n\n.city-flex {\n  display: flex;\n  flex-direction: column; }\n\n\n@media only screen and (min-width: 480px) {\n  .search-container input[type=\"text\"] {\n    width: 400px; }\n  .search-container button {\n    width: 150px; }\n  header a span {\n    display: inline-block;\n    vertical-align: middle; }\n  .card .temp img {\n    display: inline-block;\n    margin-right: 5px; }\n  .card .temp span {\n    font-size: 65px; }\n  .card .humidity span {\n    font-size: 40px; }\n  .card .max-min {\n    padding: 0 30px 30px;\n    flex-direction: row; }\n    .card .max-min .max {\n      margin-bottom: 0; }\n  .card .title2 span {\n    position: relative;\n    padding-right: 30px; }\n    .card .title2 span:after {\n      position: absolute;\n      top: 50%;\n      right: 0;\n      width: 24px;\n      height: 24px;\n      content: '';\n      margin-top: -12px; } }\n\n\n@media only screen and (min-width: 768px) {\n  .card {\n    padding: 0 30px; }\n    .card .title a {\n      left: 0; } }\n\n\n@media only screen and (min-width: 992px) {\n  .card .max-min.inverse {\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n    justify-content: space-between;\n    padding-bottom: 55px;\n    margin-bottom: 55px;\n    flex-direction: row; }\n    .card .max-min.inverse.coordinates {\n      margin-top: 0; }\n  .city-flex {\n    width: 100%;\n    margin-bottom: 60px;\n    flex-direction: row;\n    padding-right: 25px;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #2fb2b3; }\n    .city-flex .temp, .city-flex .humidity {\n      border: none; }\n    .city-flex .humidity {\n      margin-left: 55px; } }\n\n\n@media only screen and (min-width: 1200px) {\n  a, button, input[type=\"submit\"] {\n    transition: all .3s ease-out; }\n  body app-header {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 100%;\n    z-index: 200; }\n  header a {\n    letter-spacing: 3px; }\n  header .local-time span {\n    font: 400 16px \"Open Sans\"; }\n  .content {\n    padding-top: 110px;\n    padding-bottom: 30px; }\n  a.card {\n    margin: 15px 0; }\n    a.card .temp em, a.card .title {\n      transition: all .3s ease-out; }\n    a.card:hover {\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n      background: #2fb2b3; }\n      a.card:hover .title {\n        background: #5d5a8c; }\n      a.card:hover .temp em {\n        background: #6ed8da; }\n  .card .title a:hover {\n    background-color: #48466d; }\n  .card .max-min.inverse .min {\n    margin-left: 90px; }\n  .card .max-min.coordinates .min:first-child {\n    margin-left: 0; }\n  .search-container {\n    margin-bottom: 0;\n    padding-bottom: 20px; }\n    .search-container span {\n      bottom: auto;\n      left: auto;\n      position: relative;\n      margin-left: 15px; }\n    .search-container button:hover {\n      background: transparent;\n      border-color: #fff; }\n  .forecast {\n    padding: 0;\n    margin-bottom: 40px; }\n    .forecast .forecast-title {\n      background: transparent;\n      color: #48466d;\n      font-size: 30px; } }\n\n\n@media only screen and (min-width: 1366px) {\n  .flex-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: stretch; }\n    .flex-container .flex-block:first-child {\n      width: 65%; }\n    .flex-container .flex-block:last-child {\n      width: 30%; }\n    .flex-container .flex-block .no-data {\n      margin: 170px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZzItc2xpbS1sb2FkaW5nLWJhci9zdHlsZS5jc3MiLCJzcmMvRjpcXEFuZ3VsYXJcXHN1bmxpdGUvc3JjXFxhc3NldHNcXHNjc3NcXF9iYXNlLnNjc3MiLCJzcmMvRjpcXEFuZ3VsYXJcXHN1bmxpdGUvc3JjXFxzdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHOzs7QUFHSCx5REFBeUQ7OztBQUN6RDtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7Q0FDbEI7OztBQUVELHNEQUFzRDs7O0FBQ3REO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUIsQ0FBQyw2QkFBNkI7SUFDckQsWUFBWTtJQUNaLFdBQVc7O0lBRVgsOENBQThDO0lBSTlDLGlDQUFpQztDQUNwQzs7O0FDcUZEO0VBQ0ksWUFBVyxFQUNkOzs7QUFDRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUyxFQVdaOzs7QUFqQkQ7SUFTUSxlQUFjO0lBQ2QsWUFBVztJQUNYLGFBQVksRUFDZjs7O0FBWkw7SUFjUSxvQkFBbUI7SUFDbkIsdUJBQXNCLEVBQ3pCOzs7QUN2SUw7RUFDSSw4QkREVyxFQ0VkOzs7QUFDRDtFQUNJLHVCQUFvQixFQUN2Qjs7O0FBSUQ7RUFDSSx1QkFBb0IsRUFDdkI7OztBQUZEO0VBQ0ksdUJBQW9CLEVBQ3ZCOzs7QUFDRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osMEJEYlU7RUNjVixtQkFBa0IsRUE0QnJCOzs7QUFoQ0Q7SUFPUSxnQkFBZTtJQUNmLFlBQVc7SUFDWCxZQUFXLEVBQ2Q7OztBQVZMO0lEZ0dJLHdDQUFzRDtJQ25GbEQsc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCxhQUFZO0lBQ1osV0FB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QUVMO0lBQ0ksV0FBVTtJQUNWLG9CQUFtQixFQU90QjtJQVREO01BS1Esd0JEaHJCRztNQ2lyQkgsZURockJFO01DaXJCRixnQkFBZSxFQUNsQixFQUFBOzs7QUFJVDtFQUNJO0lBQ0ksY0FBYTtJQUNiLG9CQUFtQjtJQUNuQiwrQkFBOEI7SUFDOUIscUJBQW9CLEVBYXZCO0lBakJEO01BUVksV0FBVSxFQUNiO0lBVFQ7TUFXWSxXQUFVLEVBQ2I7SUFaVDtNQWNZLGdCQUFlLEVBQ2xCLEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgU2VyZ2V5IEFrb3Brb2toeWFudHNcbiAqIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItc2xpbS1sb2FkaW5nLWJhclxuICovXG5cblxuLyogU3R5bGluZyBmb3IgdGhlIFNsaW0gTG9hZGluZyBQcm9ncmVzcyBCYXIgY29udGFpbmVyICovXG4uc2xpbS1sb2FkaW5nLWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuXG4vKiBTdHlsaW5nIGZvciB0aGUgU2xpbSBMb2FkaW5nIFByb2dyZXNzIEJhciBpdHNlbGYgKi9cbi5zbGltLWxvYWRpbmctYmFyLXByb2dyZXNzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB6LWluZGV4OiA5OTk5ODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMDsgLyogSW5oZXJpdHMgdGhlIGZvbnQgY29sb3IgKi9cbiAgICBoZWlnaHQ6IDJweDtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgLyogQWRkIENTUzMgc3R5bGVzIGZvciB0cmFuc2l0aW9uIHNtb290aGluZyAqL1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbiIsIi8vdmFyaWJsZXNcclxuJHc6ICNmZmY7XHJcbiRiOiAjMzMzO1xyXG4kdDogdHJhbnNwYXJlbnQ7XHJcbiRuYXZ5OiAjNDg0NjZkO1xyXG4kYmx1ZTogIzNkODRhODtcclxuJHRlYWw6ICM0NmNkY2Y7XHJcbiRhcXVhOiAjYWJlZGQ4O1xyXG4kYm9yZGVyMTogZGFya2VuKCR0ZWFsLCAxMCUpO1xyXG5cclxuQG1peGluIGxpZ2h0KCRzaXplKXtcclxuICAgIGZvbnQ6IDMwMCAjeyRzaXplfXB4ICdPcGVuIFNhbnMnO1xyXG59XHJcbkBtaXhpbiByZWcoJHNpemUpe1xyXG4gICAgZm9udDogNDAwICN7JHNpemV9cHggJ09wZW4gU2Fucyc7XHJcbn1cclxuQG1peGluIGJvbGQoJHNpemUpe1xyXG4gICAgZm9udDogNzAwICN7JHNpemV9cHggJ09wZW4gU2Fucyc7XHJcbn1cclxuQG1peGluIHRyYW5zaXRpb257XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0KCR0aW1lKXtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1vdXQ7XHJcbn1cclxuQG1peGluIHRyYW5zaXQoJHRpbWUsICRlYXNpbmcpe1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgJHRpbWUgJGVhc2luZztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsICR0aW1lICRlYXNpbmc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWUgJGVhc2luZztcclxufVxyXG5AbWl4aW4gdGwoJHRvcCwgJGxlZnQpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAkdG9wO1xyXG4gICAgbGVmdDogJGxlZnQ7XHJcbn1cclxuQG1peGluIHRyKCR0b3AsICRyaWdodCl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6ICR0b3A7XHJcbiAgICByaWdodDogJHJpZ2h0O1xyXG59XHJcbkBtaXhpbiBibCgkYm90dG9tLCAkbGVmdCl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206ICRib3R0b207XHJcbiAgICBsZWZ0OiAkbGVmdDtcclxufVxyXG5AbWl4aW4gYnIoJGJvdHRvbSwgJHJpZ2h0KXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogJGJvdHRvbTtcclxuICAgIHJpZ2h0OiAkcmlnaHQ7XHJcbn1cclxuQG1peGluIHJhZGl1cygkc2l6ZSl7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRzaXplO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkc2l6ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRzaXplO1xyXG59XHJcbkBtaXhpbiB0bC1yYWRpdXMoJHNpemUpe1xyXG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkc2l6ZTtcclxuICAgIC1tb3otYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHNpemU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkc2l6ZTtcclxufVxyXG5AbWl4aW4gdHItcmFkaXVzKCRzaXplKXtcclxuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRzaXplO1xyXG4gICAgLW1vei1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHNpemU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHNpemU7XHJcbn1cclxuQG1peGluIGJsLXJhZGl1cygkc2l6ZSl7XHJcbiAgICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRzaXplO1xyXG4gICAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkc2l6ZTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRzaXplO1xyXG59XHJcbkBtaXhpbiBici1yYWRpdXMoJHNpemUpe1xyXG4gICAgLXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHNpemU7XHJcbiAgICAtbW96LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkc2l6ZTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkc2l6ZTtcclxufVxyXG5AbWl4aW4gYm94c2hhZG93KCRhLCAkYiwgJGMsICRkLCAkZSwgJGYsICRnKXtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGEgJGIgJGMgcmdiYSgkZCwgJGUsICRmLCAkZyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRhICRiICRjIHJnYmEoJGQsICRlLCAkZiwgJGcpO1xyXG4gICAgYm94LXNoYWRvdzogJGEgJGIgJGMgcmdiYSgkZCwgJGUsICRmLCAkZyk7XHJcbn1cclxuQG1peGluIGJhc3ZnKCRzdmcsICR3aWR0aCwgJGhlaWdodCwgJGJnc2l6ZSl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvI3skc3ZnfS5zdmcnKSBuby1yZXBlYXQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRiZ3NpemU7XHJcbn1cclxuQG1peGluIGJhanBnKCRqcGcsICR3aWR0aCwgJGhlaWdodCwgJGJnc2l6ZSl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvI3skanBnfS5qcGcnKSBuby1yZXBlYXQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRiZ3NpemU7XHJcbn1cclxuQG1peGluIGJhcG5nKCRwbmcsICR3aWR0aCwgJGhlaWdodCwgJGJnc2l6ZSl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvI3skcG5nfS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRiZ3NpemU7XHJcbn1cclxuQG1peGluIHRyYW5zZm9ybSgkdCl7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHQ7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHQ7XHJcbiAgICB0cmFuc2Zvcm06ICR0O1xyXG59XHJcbkBtaXhpbiBzdmcoJHN2Zyl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvI3skc3ZnfS5zdmcnKSBuby1yZXBlYXQ7XHJcbn1cclxuQG1peGluIGpwZygkanBnKXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnYXNzZXRzL2ltYWdlcy8jeyRqcGd9LmpwZycpIG5vLXJlcGVhdDtcclxufVxyXG5AbWl4aW4gcG5nKCRwbmcpe1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdhc3NldHMvaW1hZ2VzLyN7JHBuZ30ucG5nJykgbm8tcmVwZWF0O1xyXG59XHJcbi5mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFic29sdXRle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG4gICAgLnRhYmxlZHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2VsbGVke1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2Jhc2UnO1xuQGltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9uZzItc2xpbS1sb2FkaW5nLWJhci9zdHlsZS5jc3NcIjtcblxuKjpmb2N1cyB7XG4gICAgb3V0bGluZTogMHB4IG5vbmUgJHQ7XG59XG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6ICR3ICFpbXBvcnRhbnQ7XG59XG46Oi1tb3otcGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6ICR3ICFpbXBvcnRhbnQ7XG59XG46OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiAkdyAhaW1wb3J0YW50O1xufVxuYm9keXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAmOmJlZm9yZXtcbiAgICAgICAgQGluY2x1ZGUgc3ZnKHRvcC1iZyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogODBweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgJjphZnRlcntcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZVkoMTgwZGVnKSk7XG4gICAgICAgIEBpbmNsdWRlIHN2Zyhib3R0b20tYmcpO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHg7XG4gICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICB9XG4gICAgYXBwLWhlYWRlciwgYXBwLWNhcmR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cbn1cbi5wYWR7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xufVxuaGVhZGVye1xuICAgIC13ZWJraXQtZGlzcGxheTogZmxleDtcbiAgICAtbW96LWRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICRuYXZ5O1xuICAgIHBhZGRpbmc6IDE1cHggNDVweDtcblxuICAgIGEsIC5sb2NhbC10aW1le1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIGF7XG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0KDM2KTtcbiAgICAgICAgY29sb3I6ICR3O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIsICY6dmlzaXRlZHtcbiAgICAgICAgICAgIGNvbG9yOiAkdztcbiAgICAgICAgfVxuICAgIH1cbiAgICAubG9jYWwtdGltZXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIEBpbmNsdWRlIGxpZ2h0KDEzKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICR3O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVte1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGVhbDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuXG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRsKDUwJSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCBlbTpiZWZvcmV7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKHRpbWUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQgZW06YmVmb3Jle1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHN2ZyhjYWxlbmRhcik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmNhcmR7XG4gICAgQGluY2x1ZGUgYm94c2hhZG93KDAsIDAsIDVweCwgMCwgMCwgMCwgMC4yNSk7XG4gICAgQGluY2x1ZGUgcmFkaXVzKDVweCk7XG4gICAgYmFja2dyb3VuZDogJHRlYWw7XG4gICAgY29sb3I6ICRiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxMXB4IDA7XG5cbiAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjogJGI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgICBAaW5jbHVkZSByZWcoMjIpO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogJG5hdnk7XG4gICAgICAgIGNvbG9yOiAkdztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgYXtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2ZyhiYWNrKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRsKDAsIDMwcHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkbmF2eSwgMTUlKTtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC50ZW1we1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyMTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIFxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoNTApO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyNXB4IDAgMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiAkdztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3Ryb25ne1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJhc3ZnKGNlbHNpdXMsIDIwcHgsIDIwcHgsIDIwcHgpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyKDUwJSwgMCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5uby1hZnRlcntcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcblxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVte1xuICAgICAgICAgICAgQGluY2x1ZGUgcmFkaXVzKDIwcHgpO1xuICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoMTYpO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlcjE7XG4gICAgICAgICAgICBjb2xvcjogJHc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmh1bWlkaXR5e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkdztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXIxO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgICBpe1xuICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoMTYpO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgY29sb3I6ICRiO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoMzApO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAgICAgZW17XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoMjIpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyKDUwJSwgMCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50aXRsZTJ7XG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0KDE2KTtcbiAgICAgICAgY29sb3I6ICRiO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAubWF4LW1pbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlcjE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG5cbiAgICAgICAgLnRlbXB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcblxuICAgICAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGxpZ2h0KDE4KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWF4e1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgICAgICAgLnRpdGxlMiBzcGFuOmFmdGVye1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHN2ZyhtYXgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWlue1xuICAgICAgICAgICAgLnRpdGxlMntcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKG1pbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi53aW5kLXNwZWVkOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKHdpbmQtc3BlZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYud2luZC1kZWc6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzdmcod2luZC1kZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYubGF0aXR1ZGU6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzdmcobGF0aXR1ZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYubG9uZ2l0dWRlOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKGxvbmdpdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5zdW5yaXNlOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKHN1bnJpc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuaW52ZXJzZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAubWF4LCAubWlue1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5jb29yZGluYXRlc3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLm1pbmktY2FyZHtcbiAgICAuY2FyZHtcbiAgICAgICAgLnRlbXB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5odW1pZGl0eSwgLm1heC1taW57XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuLm5vLWRhdGF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgc3BhbntcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQoMTgpO1xuICAgICAgICBjb2xvcjogJHc7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTAwcHggMCAxMDBweCA1MHB4O1xuXG4gICAgICAgICY6YmVmb3Jle1xuICAgICAgICAgICAgQGluY2x1ZGUgYmFzdmcobm8tZGF0YSwgMzBweCwgMzBweCwgMzBweCk7XG4gICAgICAgICAgICBAaW5jbHVkZSB0bCg1MCUsIDApO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uZm9yZWNhc3R7XG4gICAgcGFkZGluZzogNDBweCAwO1xuXG4gICAgLmZvcmVjYXN0LXRpdGxle1xuICAgICAgICBAaW5jbHVkZSBsaWdodCgyMik7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRibHVlLCAyMCUpO1xuICAgICAgICBjb2xvcjogJHc7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIHN0cm9uZ3tcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQoMjApO1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkbmF2eTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcblxuICAgICAgICAmLnNlcGVyYXRle1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGVncmVlLXN0cmlwe1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuXG4gICAgICAgICYubm8tcHR7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBkaXY6bm90KC5kZWdyZWUtdGl0bGUpe1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3MiwgNzAsIDEwOSwgMC4yNSk7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZWdyZWUtdGl0bGV7XG4gICAgICAgICAgICBAaW5jbHVkZSBsaWdodCgxNCk7XG4gICAgICAgICAgICBAaW5jbHVkZSB0bCgwLCAwKTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDcyLCA3MCwgMTA5LCAwLjUpO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBAaW5jbHVkZSBsaWdodCgyMik7XG4gICAgICAgICAgICBjb2xvcjogJHc7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMDtcblxuICAgICAgICAgICAgICAgICYuY29uZGl0aW9uc3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuaHVtaWRpdHksICYuY29uZGl0aW9uc3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cig1MCUsIDApO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5kZWd7XG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiYXN2ZyhjZWxzaXVzLCAxNnB4LCAxNnB4LCAxNnB4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLndpbmQtc3BlZWR7XG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBiYXN2Zyh3aW5kLXNwZWVkLCAxNnB4LCAxNnB4LCAxNnB4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmludmVyc2V7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG4gICAgICAgICAgICAuZGVncmVlLXRpdGxle1xuICAgICAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uc2VhcmNoLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMjBweCAxNXB4IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBzcGFue1xuICAgICAgICBAaW5jbHVkZSBibCgtMnB4LCAxNXB4KTtcbiAgICAgICAgQGluY2x1ZGUgcmVnKDE0KTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgJjpiZWZvcmV7XG4gICAgICAgICAgICBAaW5jbHVkZSB0bCg1MCUsIDApO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgICAgfVxuICAgICAgICAmLmVycm9ye1xuICAgICAgICAgICAgJjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYmFzdmcoZXJyb3IsIDE2cHgsIDE2cHgsIDE2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuZmV0Y2h7XG4gICAgICAgICAgICAmOmJlZm9yZXtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBiYXN2ZyhmZXRjaCwgMTZweCwgMTZweCwgMTZweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl17XG4gICAgICAgIEBpbmNsdWRlIHRsLXJhZGl1cygzMHB4KTtcbiAgICAgICAgQGluY2x1ZGUgYmwtcmFkaXVzKDMwcHgpO1xuICAgICAgICBAaW5jbHVkZSByZWcoMTQpO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJhY2tncm91bmQ6ICR0O1xuICAgICAgICBjb2xvcjogJHc7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIEBpbmNsdWRlIHJlZygxOCk7XG4gICAgICAgIEBpbmNsdWRlIHRyLXJhZGl1cygzMHB4KTtcbiAgICAgICAgQGluY2x1ZGUgYnItcmFkaXVzKDMwcHgpO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbmF2eTtcbiAgICAgICAgY29sb3I6ICR3O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cbi5jaXR5LWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLy9yZXNwb25zaXZlXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcbiAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl17XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGhlYWRlcntcbiAgICAgICAgYXtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmR7XG4gICAgICAgIC50ZW1we1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5odW1pZGl0eXtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYXgtbWlue1xuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4IDMwcHg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICAgICAubWF4e1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlMntcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgXG4gICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHIoNTAlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgIC5jYXJke1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG5cbiAgICAgICAgLnRpdGxlIGF7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XG4gICAgLmNhcmR7XG4gICAgICAgIC5tYXgtbWlue1xuICAgICAgICAgICAgJi5pbnZlcnNle1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgICAgICAmLmNvb3JkaW5hdGVze1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2l0eS1mbGV4e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlcjE7XG5cbiAgICAgICAgLnRlbXAsIC5odW1pZGl0eXtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuaHVtaWRpdHl7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICBhLCBidXR0b24sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb247XG4gICAgfVxuICAgIGJvZHl7XG4gICAgICAgIGFwcC1oZWFkZXJ7XG4gICAgICAgICAgICBAaW5jbHVkZSBib3hzaGFkb3coMCwgMCwgMTBweCwgMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgei1pbmRleDogMjAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhlYWRlcntcbiAgICAgICAgYXtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvY2FsLXRpbWV7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlZygxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIGEuY2FyZHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG5cbiAgICAgICAgLnRlbXAgZW0sIC50aXRsZXtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIEBpbmNsdWRlIGJveHNoYWRvdygwLCAwLCAxMHB4LCAwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0ZWFsLCAxMCUpO1xuXG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkbmF2eSwgMTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZW1wIGVte1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHRlYWwsIDEwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmR7XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIGE6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1heC1taW57XG4gICAgICAgICAgICAmLmludmVyc2V7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAubWlue1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmNvb3JkaW5hdGVze1xuICAgICAgICAgICAgICAgIC5taW57XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvcmVjYXN0e1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gICAgICAgIC5mb3JlY2FzdC10aXRsZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0O1xuICAgICAgICAgICAgY29sb3I6ICRuYXZ5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCl7XG4gICAgLmZsZXgtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgICAgIC5mbGV4LWJsb2Nre1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubm8tZGF0YXtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE3MHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\sunlite\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map