'use strict';

let topButton = document.getElementById('topButton');
let bottomButton = document.getElementById('bottomButton');

let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');

let hideParticipantsButton = document.getElementById('hideParticipantsButton');
let showParticipantsButton = document.getElementById('showParticipantsButton');


topButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'changeToTop' });
    });
});

bottomButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'changeToBottom' });
    });
});

leftButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'changeToLeft' });
    });
});

hideParticipantsButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'hideThumbnails' });
    });
});

showParticipantsButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'showThumbnails' });
    });
});


