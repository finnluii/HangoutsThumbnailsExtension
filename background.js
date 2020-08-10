'use strict';

chrome.runtime.onInstalled.addListener(function() {

  chrome.storage.sync.set({color: '#008080'}, function() {
    console.log('The color is teal~.');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        // pageUrl: {urlContains: 'hangouts.google.com/call'},
        pageUrl: {urlContains: '.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
