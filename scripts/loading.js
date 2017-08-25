$(document).ready(function(){
	var lO1, bO, lO2, lD, mD;

    function blizzardOpa() {
        $('.blizzard').css('opacity', '1');
        clearTimeout(bO);
    }

    function loadingOpa1() {
        $('.loading').css('opacity', '1');
        clearTimeout(lO1);
    }

    function loadingOpa2() {
        $('.loading').css('opacity', '0');
        clearTimeout(lO2);
    }

    function loadingDisplay() {
        window.open('main.html','_self');
        clearTimeout(lD);
    }
    lO1 = setTimeout(loadingOpa1, 0);
    bO = setTimeout(blizzardOpa, 1500);
    lO2 = setTimeout(loadingOpa2, 2700);
    lD = setTimeout(loadingDisplay, 4500);
});