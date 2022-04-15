export {}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // const history = chrome.history.search(message);
  const response = {
    sender,
    message,
    history: chrome.history
  }
  sendResponse(response);
  return;
})