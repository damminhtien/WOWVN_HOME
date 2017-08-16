$(document).ready(function(){
    $('#worldmap').mapster('resize', 1160, 0, 939);
});
var description = {
    NT : "<strong>Nothern</strong> is the northern, icy continent of the world of Azeroth, and the source of the evil Scourge. It is also the home of Icecrown Citadel, the seat of the malevolent Lich King. The continent is featured in the World of Warcraft expansion, World of Warcraft: Wrath of the Lich King.",
    KLD: "<strong>Kalimdor</strong> is one of the continents of Azeroth. It is located to the west of the Eastern Kingdoms and southwest of Northrend. The Great Sea lies in between the continents. Kalimdor is home to the night elves, orcs, tauren, trolls, and draenei.  ",
    PD: "<strong>Pandaria</strong> is a legendary place of bambus forests[citation needed] and the mysterious pandaren of the Pandaren Empire located in the southern oceans of Azeroth, somewhat mirroring Northrend in location.",
    HS: "A <strong>Hearthstone</strong> is a device used to teleport oneself to any home place (an inn, location set by the player) in the world. All characters receive a Hearthstone upon creation. Should the player destroy it, asking an innkeeper to “make this inn your home” will recreate one for free.",
    EK: "The <strong>Eastern Kingdoms</strong> (a few times called Azeroth[1][2][3][4][5][6]) are the eastern continents on the world of Azeroth.[7] The Eastern Kingdoms is made up from a group of smaller continents (Azeroth, Khaz Modan and Lordaeron) formed from the original continent of Kalimdor following the Great Sundering."
}

var defaultToolTip = "Bản đồ World of Warcraft gồm 5 vùng";

$('#worldmap').mapster({
    mapKey: 'state',
    fillOpacity: 0.9,
    strokeWidth: 2,
    strokeColor: 'f5fc3a',
    scaleMap: false,
    showToolTip: true,
    toolTipClose: ["tooltip-click", "area-click"],
    onMouseout: function(e){
        $("#des_area").html("");
    },
    onMouseover: function(e){
        $("#des_area").html(description[e.key]);
        var newTooltip = defaultToolTip;
        if(e.key == "NT") newToolTip = "Vùng đất ở giữa";
        if(e.key == "KLD") newToolTip = "Vùng đất phía tây";
        if(e.key == "PD") newToolTip = "Vùng đất phía nam";
        if(e.key == "HS") newToolTip = "Vùng đất phía tây";
        if(e.key == "EK") newToolTip = "Vùng đất phía đông";
        $('#worldmap').mapster('set_options', { 
            areas: [
            {
                key: "NT",
                toolTip: newToolTip
            },
            {
                key: "KLD",
                toolTip: newToolTip
            },
            {
                key: "HS",
                toolTip: newToolTip
            },
            {
                key: "EK",
                toolTip: newToolTip
            },
            {
                key: "PD",
                toolTip: newToolTip
            }]
        });
    },
    render_highlight: {
        stroke: true,
     	fillColor: 'eef221',
     	fillOpacity: 0.8,
     	altImage: 'images/5.jpg',
    },
    render_select: {
        fillColor: 'ff000c',
        stroke: false
    },
    fade: true,
    fadeDuration: 1200,
    fadeInterval: 30
});

 $('#make_small').bind('click',function() {
    $('#worldmap').mapster('resize', 600, 0, 939);
    });

$('#make_big').bind('click',function() {
    $('#worldmap').mapster('resize', 1360, 0, 939);
});

$('#make_normal').bind('click',function() {
    $('#worldmap').mapster('resize', 1160, 0, 939);
});

function resize(maxWidth,maxHeight) {
     var image =  $('#worldmap'),
        imgWidth = image.width(),
        imgHeight = image.height(),
        newWidth=0,
        newHeight=0;

    if (imgWidth/maxWidth>imgHeight/maxHeight) {
        newWidth = maxWidth;
    } else {
        newHeight = maxHeight;
    }
    image.mapster('resize',newWidth,newHeight,100);   
}

// Track window resizing events, but only actually call the map resize when the
// window isn't being resized any more

function onWindowResize() {
    
    var curWidth = $(window).width(),
        curHeight = $(window).height(),
        checking=false;
    if (checking) {
        return;
            }
    checking = true;
    window.setTimeout(function() {
        var newWidth = $(window).width(),
           newHeight = $(window).height();
        if (newWidth === curWidth &&
            newHeight === curHeight) {
            resize(newWidth,newHeight); 
        }
        checking=false;
    },100 );
}

$(window).bind('resize',onWindowResize);
