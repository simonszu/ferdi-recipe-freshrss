"use strict";

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    // Initialize empty vars
    var unread = 0;
    var match = [];
    // Define RegExp to replace occasionally &nbsp
    var re = new RegExp(String.fromCharCode(160), "g");
    // Get value of <title> tag where in case of new feed elements the number of elements appear
    const titleValue = document.querySelector('title').text.replace(re, "");
    // Extract the number from the tag
    match = titleValue.match(/[\d\s]+/);
    // Some logic to handle the match groups
    unread = match != null && match.length > 0 ? match[0] : 0;
    // Set unread msgs badge
    Ferdi.setBadge(parseInt(unread, 10));
  };

  const loopFunc = () => {
    getMessages();
  };

  Ferdi.loop(loopFunc);
};