
function sobe(){
    topVal = 0;
    $('html,body').animate({
        scrollTop: topVal
    }, 500);
}

function desce(){
	if(window.innerWidth < 768){
	    $('html,body').animate({
	        scrollTop: 1000
	    }, 500);
	}
}

function desce_desktop(){
	if(window.innerWidth > 768){
	    $('html,body').animate({
	        scrollTop: 700
	    }, 500);
	}
}

