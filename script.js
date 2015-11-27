function switchPage(name){
	if(!name) return;
	
	var parentEl = document.getElementById("view");
	if(!parentEl) return;
	
	if(!(parentEl.querySelector("#" + name))) return;
	
	var nodes = parentEl.childNodes;
	for(i=0; i<nodes.length; i++) {
		if(nodes[i].tagName == "DIV") {
			if(nodes[i].id != name)
				nodes[i].style.display = "none";
			else
				nodes[i].style.display = "inline-block";
		}
	}

}