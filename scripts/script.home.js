var defaultToolTip = "Bản đồ World of Warcraft gồm 5 vùng";

$('#worldmap').mapster({
    mapKey: 'state',
    fillOpacity: 0.9,
    strokeWidth: 2,
    strokeColor: 'cc00ff',
    scaleMap: false,
    showToolTip: true,
    toolTipClose: ["tooltip-click", "area-click"],
    onMouseout: function(e){
        $("#des_area").html("");
    },
    onMouseover: function(e){
        $('#worldmap').mapster('set_options', { 
            areas: [
            {
                key: "NT",
                toolTip: "Vùng đất phía Bắc"
            },
            {
                key: "KLD",
                toolTip: "Vùng đất phía Tây"
            },
            {
                key: "HS",
                toolTip: "Vùng đất ở giữa"
            },
            {
                key: "EK",
                toolTip: "Vùng đất phía Đông"
            },
            {
                key: "PD",
                toolTip: "Vùng đất phía Nam"
            }]
        });
    },
    render_highlight: {
        stroke: true,
     	fillColor: 'cc00ff',
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