/*   time:2019-04-21 23:06:51*/
Page({
    data: {
        url: ""
    },
    onLoad: function(e) {
        if ("sign" == e.module) o = e.domain + "?" + decodeURIComponent(e.params) + "&uid=" + e.mid;
        else var o = decodeURIComponent(e.url);
        this.setData({
            url: o
        })
    }
});