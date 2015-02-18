browserify-commit-sha
============

browserify transform for appending the latest git commit SHA

The output looks like this:

```js
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){




window.GIT_VERSION = "c6541cbdf842e204fd2a958a28e83ba7be42f3c9";
window.CREATED_AT = "Sun Feb 15 2015 17:18:10 GMT-0500 (PET)";



'use strict';

// this is the entry point file that you browserified
var x require('x')
var y = require('y')
// ...
```


Its a bit of a hack, but it works alright.
