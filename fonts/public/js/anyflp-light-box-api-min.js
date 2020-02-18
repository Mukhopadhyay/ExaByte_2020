! function() {
    var a = {
        loadFile: function(a, b) {
            var c, d = a.substr(a.length - 2).toLowerCase();
            "js" == d ? (c = document.createElement("script"), c.onload = function() {
                b && b()
            }, c.setAttribute("src", a)) : (c = document.createElement("link"), c.setAttribute("rel", "stylesheet"), c.setAttribute("type", "text/css"), c.setAttribute("href", a)), document.getElementsByTagName("head")[0].appendChild(c)
        },
        fire: function() {
            this.loadFile("https://anyflip.com/plugin/LightBox/css/fliphtml5-light-box-api.css");
            var a = $.noConflict();
            a(function() {
                function b(b) {
                    this.background = a("<div class='fh5-light-box-background'></div>"), this.box = a("<div class='fh5-light-box'></div>"), this.title = a("<div class='fh5-light-box-title'>" + b + "</div>"), this.cancelButton = a("<div class='fh5-light-box-cancel-button'>x</div>"), this.box.append(this.title).append(this.cancelButton), this.document = a(document);
                    var c = this;
                    a(window).on("resize", function() {
                        c.resizeH()
                    }), this.cancelButton.on("click", function() {
                        c.cancel()
                    })
                }

                function c(c, d, e, f) {
                    this.panel = a("<div></div>"), this.iframe = a("<iframe width='" + e + "' height='" + f + "' allowfullscreen frameborder='0' src='" + d + "'></iframe>");
                    var g = new b(c);
                    g.getBox().append(this.panel.append(this.iframe)), g.launch()
                }
                b.prototype = {
                    constructor: b,
                    getBox: function() {
                        return this.box
                    },
                    launch: function() {
                        var b = a("body"),
                            c = this;
                        this.background.appendTo(b).fadeIn(), this.box.appendTo(b), this.resize(0), this.box.css("top", this.document.scrollTop()).animate({
                            opacity: 1,
                            top: (window.innerHeight - this.box.height()) / 2 + this.document.scrollTop()
                        }, 200, function() {
                            c.box.height() > window.innerHeight && c.box.animate({
                                top: c.document.scrollTop() + 30
                            }, 200)
                        })
                    },
                    cancel: function() {
                        var a = this;
                        a.background.fadeOut(function() {
                            a.background.remove()
                        }), a.box.animate({
                            opacity: 0,
                            top: this.document.scrollTop()
                        }, 200, function() {
                            a.box.remove()
                        })
                    },
                    resizeH: function() {
                        this.box.css({
                            left: (window.innerWidth - this.box.width()) / 2
                        })
                    },
                    resize: function(a) {
                        "undefined" == typeof a && (a = 400), this.box.animate({
                            left: (window.innerWidth - this.box.width()) / 2,
                            top: (window.innerHeight - this.box.height()) / 2 + this.document.scrollTop()
                        }, a)
                    }
                }, a.each(a("[data-rel=fh5-light-box-demo]"), function() {
                    this.onclick = function(b) {
                        b.preventDefault();
                        var d = a(this);
                        return new c(d.attr("data-title"), d.attr("data-href"), d.attr("data-width"), d.attr("data-height")), !1
                    }
                })
            })
        }
    };
    a.loadFile("https://static.anyflip.com/web/js/jquery-1.10.2.min.js", function() {
        a.fire()
    })
}();