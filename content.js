// Steps:
// 1. Grab thumbnail element, save it and remove it
// 2. Grab <side> bar
// 3. Add the saved thumbnail element to the <side> bar
let thumbnailsDiv = document.getElementsByClassName("gSTPzb")[0];

let topDivClass = "GhN39b";
let bottomDivClass = "G1OBde";
let middleDivClass = "p2hjYe.rCuEk";

chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'changeToTop') {
    	// seems like there is only top/bottom bar element on this page.
		// We will also have to wait until the document is fully loaded before we can get
		// any elements...
		let topBar = document.getElementsByClassName(topDivClass)[0];
		// remove thumbnails from wherever it was originally
		parentNode = thumbnailsDiv.parentNode.removeChild(thumbnailsDiv);
		// Add the thumbnails to the top div 
		topBar.appendChild(thumbnailsDiv);

    } else if(request.action === 'changeToBottom') {
		let bottomBar = document.getElementsByClassName(bottomDivClass)[0];
		// remove thumbnails from wherever it was originally
		parentNode = thumbnailsDiv.parentNode.removeChild(thumbnailsDiv);
		// Add the thumbnails to the top div 
		bottomBar.appendChild(thumbnailsDiv);

    } else if (request.action === 'hideThumbnails') {
    	thumbnailsDiv.style.display = "none";

    } else if (request.action === 'showThumbnails') {
    	thumbnailsDiv.style.display = "block";
    	
    }
});

// Top div: div.GhN39b
// Picture div: div.p2hjYe.rCuEk
// Bottom div: div.G1OBde
// TODO: Create left and right divs?


