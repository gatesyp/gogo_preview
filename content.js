window.onclick = function() {
    links = document.getElementsByTagName("a");
    javascriptString = '<script>displayPopup() {  };</script>'
    for(var i = 0; i < links.length; i++) { 
        if ( links[i].href.includes("linkedin.com") ) {
            stevenbox = document.getElementById("STEVENBOX")
            links[i].setAttribute("id", 'STEVENLINK');
            links[i].setAttribute('onmouseover', 'document.getElementById("STEVENBOX").style.display = "block";');
            links[i].setAttribute('onmouseout', 'document.getElementById("STEVENBOX").style.display = "none";');
            if(stevenbox){
                stevenbox.innerHTML = '<iframe src="' + links[i].href + '" width = "1000px" height = "1000px"></iframe>'
            } else {
                htmlString = '<div id="STEVENBOX" style="z-index: 100;position: absolute;display: none;width: 100%;}"><iframe src="' + links[i].href + '" width = "1000px" height = "500px"></iframe></div>'
                links[i].insertAdjacentHTML('beforeend', htmlString)
            }
            links[i].insertAdjacentHTML('beforeend', javascriptString)
        }
    }
}
