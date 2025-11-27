// Background service worker for Smart Chess Bot Chrome Extension

// Listen for installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Smart Chess Bot extension installed');
  } else if (details.reason === 'update') {
    console.log('Smart Chess Bot extension updated');
  }
});

// Handle messages from content script or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getEngineUrl') {
    // Return the URL for engine files
    const url = chrome.runtime.getURL(request.file);
    sendResponse({ url: url });
    return true;
  }
  
  if (request.action === 'getBestMove') {
    // Forward best move request to node server
    fetch(request.url)
      .then(response => response.json())
      .then(data => sendResponse({ success: true, data: data }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep the message channel open for async response
  }
  
  if (request.action === 'openPopup') {
    // Open the extension popup programmatically (if needed)
    sendResponse({ success: true });
    return true;
  }

  return false;
});

// Handle tab updates to detect chess sites
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    const isChessSite = tab.url.includes('chess.com') || tab.url.includes('lichess.org');
    if (isChessSite) {
      console.log('Chess site detected:', tab.url);
    }
  }
});
