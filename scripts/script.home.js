$(document).ready(function() {
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = $(".mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000);
    }
});

var defaultToolTip = "Bản đồ World of Warcraft gồm 5 vùng";

$('#worldmap').mapster({
    mapKey: 'state',
    fillOpacity: 0.9,
    strokeWidth: 2,
    strokeColor: 'cc00ff',
    scaleMap: false,
    showToolTip: true,
    toolTipClose: ["tooltip-click", "area-click", "area-mouseout"],
    onMouseover: function(e) {
        $('#worldmap').mapster('set_options', {
            areas: [{
                    key: "NT",
                    toolTip: "Northrend là lục địa phía bắc, băng giá của thế giới Azeroth, là lãnh địa của binh đoàn Scourge, ngự trị bởi Lich King. Lục địa này được đặc trưng trong World of Warcraft mở rộng, World of Warcraft: Wrath of the Lich King."
                },
                {
                    key: "KLD",
                    toolTip: "Thuở sơ khai, Kalimdor (còn được gọi là \"Ancient Kalimdor\") là tên của lục địa duy nhất của thế giới, sau này được chia thành bốn lục địa chính (được biết đến cho đến nay). Kalimdor được đặt thành tên của lục địa phía tây Great sea, ngôi nhà của loài Night Elf và một số chủng loài cổ xưa của thế giới. Kalimdor ẩn chứa nhiều câu chuyện kì bí về những nền văn minh cổ đại và những câu chuyện thần thoại xưa cũ."
                },
                {
                    key: "HS",
                    toolTip: "Vùng đất ở giữa"
                },
                {
                    key: "EK",
                    toolTip: "The Eastern Kingdoms là các lục địa phía đông trên thế giới Azeroth. The Eastern Kingdoms được tạo thành từ một nhóm các lục địa nhỏ hơn (Azeroth - lục địa của vương quốc Stormwind, Khaz Modan và Lordaeron) được hình thành từ lục địa ban đầu của Kalimdor sau sự kiện Great Sundering. The Eastern Kingdoms nằm về phía đông của Great sea và phía tây của Forbidding sea. The Eastern Kingdoms đã từng là chiến trường lớn của thế giới, nơi những chủng loài ma thuật, con người và cả loài Orc - những kẻ đến từ thế giới khác đua nhau giành giật các vương quốc bị chia cắt vì chiến tranh. Giờ đây lục địa này đang phục hồi dần trong sự nhân đạo và danh dự của hai phe Alliance và Horde."
                },
                {
                    key: "PD",
                    toolTip: "Pandaria là lục địa huyền thoại của những cánh rừng bambus và những bí ẩn của Đế quốc Pandaren hùng mạnh nằm ở các đại dương phía Nam của Azeroth. Được che khuất bởi sương mù của Shaohao kể từ khi thế giới bị chia cắt hơn mười ngàn năm trước, vùng đất cổ xưa của Pandaria mang nhiều bí mật và sức mạnh kì lạ. Lục địa này được đặc trưng trong World of Warcraft mở rộng, World of Warcraft: Mist of Pandaria."
                }
            ]
        });
    },
    render_highlight: {
        stroke: true,
        fillColor: 'cc00ff',
        fillOpacity: 0.8,
        altImage: 'images/5.jpg',
    },
    render_select: {
        stroke: false,
        fillOpacity: 0
    },
    fade: true,
    fadeDuration: 500,
    fadeInterval: 30
});

function resize(maxWidth, maxHeight) {
    var image = $('#worldmap'),
        imgWidth = image.width(),
        imgHeight = image.height(),
        newWidth = 0,
        newHeight = 0;
    if (imgWidth / maxWidth > imgHeight / maxHeight) {
        newWidth = maxWidth;
    } else {
        newHeight = maxHeight;
    }
    image.mapster('resize', newWidth, newHeight, 100);
}

// Track window resizing events, but only actually call the map resize when the
// window isn't being resized any more

function onWindowResize() {

    var curWidth = $(window).width(),
        curHeight = $(window).height(),
        checking = false;
    if (checking) {
        return;
    }
    checking = true;
    window.setTimeout(function() {
        var newWidth = $(window).width(),
            newHeight = $(window).height();
        if (newWidth === curWidth &&
            newHeight === curHeight) {
            resize(newWidth, newHeight);
        }
        checking = false;
    }, 100);
}

$(window).bind('resize', onWindowResize);