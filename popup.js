'use strict';

let topButton = document.getElementById('topButton');
let bottomButton = document.getElementById('bottomButton');

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


