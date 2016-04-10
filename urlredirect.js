$(document).ready(function () { 
    $('[data-MBTdemo]').click(function (e) { 
        e.preventDefault(); 
        var target = e.target || e.srcElement; 
        if ($(target).attr('target') == "_blank") { 
            window.open("http://fulfilmyrequest.blogspot.com/p/demo.html?url=" + $(target).attr('href'), '_blank'); 
        } else { 
            window.location = "http://fulfilmyrequest.blogspot.com/p/demo.html?url=" + $(target).attr('href'); 
        }
    });

    $('[data-MBTdownload]').click(function (e) { 
        e.preventDefault(); 
        var target = e.target || e.srcElement; 
        if ($(target).attr('target') == "_blank") { 
            window.open("http://fulfilmyrequest.blogspot.com/p/download_10.html?url=" + $(target).attr('href'), '_blank'); 
        } else { 
            window.location = "http://fulfilmyrequest.blogspot.com/p/download_10.html?url=" + $(target).attr('href'); 
        }
    });
});
