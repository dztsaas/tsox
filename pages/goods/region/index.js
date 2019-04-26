/*   time:2019-04-21 23:06:50*/
var e = getApp();
e.requirejs("core"), e.requirejs("jquery"), Page({
    data: {
        region: []
    },
    onLoad: function(e) {
        var r = this,
            n = e.region,
            t = e.onlysent;
        r.setData({
            region: n,
            onlysent: t
        })
    }
});