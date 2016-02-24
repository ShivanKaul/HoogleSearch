var hoogleSearchURL = 'https://www.haskell.org/hoogle/?hoogle=';
/* 
	function navigate
	- navigates current tab to Hoogle with search terms
	- used by omnibox
 */
function navigate(inputString) {
    if (inputString) {
        var inputURI = encodeURIComponent(inputString);
        chrome.tabs.getSelected(undefined, function(tab) {
            chrome.tabs.update(tab.id, { url: hoogleSearchURL + inputURI }, undefined);
        });
    } else {
        // If empty, then go to Hoogle
        chrome.tabs.create({ "url": "https://www.haskell.org/hoogle", "active": true });
    }
}

// Reacting to users entering "hs" in the omnibox
chrome.omnibox.onInputEntered.addListener(navigate);
chrome.omnibox.setDefaultSuggestion({ "description": "Search Hoogle for '%s'" });
