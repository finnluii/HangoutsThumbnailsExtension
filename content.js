// Steps:
// 1. Grab thumbnail element, save it and remove it
// 2. Grab <side> bar
// 3. Add the saved thumbnail element to the <side> bar
let thumbnailsDiv = document.getElementsByClassName("gSTPzb")[0];

let thumbnailChildren = document.getElementsByClassName("ZEZETe");

let topDivClass = "GhN39b";
let bottomDivClass = "G1OBde";
let middleDivClass = "p2hjYe rCuEk";

//const originalCSS = 

function verticalizeThumbnails(thumbnails) {
	// Get all child elements, and rearrange vertically
	// var childNodes = thumbnails.childNodes; 

	// console.log(childNodes);
	console.log(thumbnailChildren);
	thumbnailsDiv.style.overflow = "visible";
	for (var i = 0; i < thumbnailChildren.length; i++) {
		thumbnailChildren[i].style.display = "block";
		thumbnailChildren[i].style.margin = "auto";
	}
}

function horizontalizeThumbnails(thumbnails){
	// var childNodes = thumbnails.childNodes;
	thumbnailsDiv.style.overflow = "auto";
	for (var i = 0; i < thumbnailChildren.length; i++) {
		thumbnailChildren[i].style.display = "inline-block";
		//thumbnailChildren[i].style.textAlign = "center";
	}
}

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
		horizontalizeThumbnails(thumbnailsDiv);

    } else if(request.action === 'changeToBottom') {
		let bottomBar = document.getElementsByClassName(bottomDivClass)[0];
		// remove thumbnails from wherever it was originally
		parentNode = thumbnailsDiv.parentNode.removeChild(thumbnailsDiv);
		// Add the thumbnails to the bottom div 
		bottomBar.appendChild(thumbnailsDiv);
		horizontalizeThumbnails(thumbnailsDiv);

    } else if (request.action === 'changeToLeft') {
    	// Loop through children thumbnail nodes
    	// we have to stack them vertically???
    	let videoBar = document.getElementsByClassName(middleDivClass)[0];
    	parentNode = thumbnailsDiv.parentNode.removeChild(thumbnailsDiv);
    	/*
    	If just appending to the video bar, it ends up in the bottom right corner, with the bottom half of 
    	the video cut off.
    	Have to find a way to float in the middle of the video bar.
    	After that, for each thumbnail, add it to a new line so it is vertically stacked
    	instead of horizontal.
    	*/
    	let topBar = document.getElementsByClassName(topDivClass)[0];
    	topBar.appendChild(thumbnailsDiv);
    	verticalizeThumbnails(thumbnailsDiv);
    	


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


