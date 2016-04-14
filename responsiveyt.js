(function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
})();
function labnolThumb(id) {
  return '<img class="youtube-thumb" src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
};
function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube-nocookie.com/embed/" + this.parentNode.dataset.id + "?enablejsapi=1&showinfo=0&iv_load_policy=3&html5=1&rel=0&autoplay=1&autohide=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
};

(function() {
    var v = document.getElementsByClassName("dmn-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = dmnThumb(v[n].dataset.id);
        p.onclick = dmnIframe;
        v[n].appendChild(p);
    }
})();
function dmnThumb(id) {
    return '<img class="dmn-thumb" src="http://www.dailymotion.com/thumbnail/560x315/video/' + id + '/"><div class="play-button"></div>';
};
function dmnIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.dailymotion.com/embed/video/" + this.parentNode.dataset.id + "?enablejsapi=1&showinfo=0&iv_load_policy=3&rel=0&autoplay=1&autohide=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "dmn-iframe");
    this.parentNode.replaceChild(iframe, this);
};
