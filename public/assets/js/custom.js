(function() {
    var g = function(c) {
        var d = document.getElementById(c.mainElement),
            b = d.getElementsByTagName("section");
        this.defaults = {
            container: d,
            sections: b,
            animateTime: c.animateTime || .7,
            animateFunction: c.animateFunction || "ease",
            maxPosition: b.length - 1,
            currentPosition: 0,
            displayDots: "undefined" != typeof c.displayDots ? c.displayDots : !0,
            dotsPosition: c.dotsPosition || "left"
        };
        this.init()
    };
    g.prototype.init = function() {
        this.buildPublicFunctions().buildSections().buildDots().addEvents();
        var c = location.hash.replace("#",
            "").split("/")[0];
        location.hash = 0;
        this.changeCurrentPosition(c);
        this.registerIeTags()
    };
    g.prototype.buildSections = function() {
        for (var c = this.defaults.sections, d = 0; d < c.length; d++) c[d].setAttribute("data-index", d);
        return this
    };
    g.prototype.buildDots = function() {
        this.ul = document.createElement("ul");
        this.ul.className = this.updateClass(1, "dots", this.ul.className);
        this.ul.className = this.updateClass(1, "right" == this.defaults.dotsPosition ? "dots-right" : "dots-left", this.ul.className);
        for (var c = this.defaults.sections,
                d = 0; d < c.length; d++) {
            var b = document.createElement("li"),
                a = document.createElement("a");
            a.setAttribute("href", "#" + d);
            b.appendChild(a);
            this.ul.appendChild(b)
        }
        this.ul.childNodes[0].firstChild.className = this.updateClass(1, "active", this.ul.childNodes[0].firstChild.className);
        this.defaults.displayDots && document.body.appendChild(this.ul);
        return this
    };
    g.prototype.addEvents = function() {
        document.addEventListener ? (document.addEventListener("mousewheel", this.mouseWheelAndKey, !1), document.addEventListener("wheel",
            this.mouseWheelAndKey, !1), document.addEventListener("keyup", this.mouseWheelAndKey, !1), document.addEventListener("touchstart", this.touchStart, !1), document.addEventListener("touchend", this.touchEnd, !1), window.addEventListener("hashchange", this.hashChange, !1), !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart" in window || (document.body.style = "overflow: scroll;", document.documentElement.style = "overflow: scroll;")) : (document.attachEvent("onmousewheel",
            this.mouseWheelAndKey, !1), document.attachEvent("onkeyup", this.mouseWheelAndKey, !1));
        return this
    };
    g.prototype.buildPublicFunctions = function() {
        var c = 0,
            d = 0,
            b = this;
        this.mouseWheelAndKey = function(a) {
            if (0 < a.deltaY || 40 == a.keyCode) b.defaults.currentPosition++, b.changeCurrentPosition(b.defaults.currentPosition);
            else if (0 > a.deltaY || 38 == a.keyCode) b.defaults.currentPosition--, b.changeCurrentPosition(b.defaults.currentPosition);
            b.removeEvents()
        };
        this.touchStart = function(a) {
            c = parseInt(a.changedTouches[0].clientY);
            d = 0
        };
        this.touchEnd = function(a) {
            d = parseInt(a.changedTouches[0].clientY);
            if (100 < d - c || 100 < c - d) d > c ? b.defaults.currentPosition-- : b.defaults.currentPosition++, b.changeCurrentPosition(b.defaults.currentPosition)
        };
        this.hashChange = function(a) {
            location && (a = location.hash.replace("#", "").split("/")[0], "" !== a && (0 > a ? b.changeCurrentPosition(0) : a > b.defaults.maxPosition ? b.changeCurrentPosition(b.defaults.maxPosition) : (b.defaults.currentPosition = a, b.animateScroll())))
        };
        this.removeEvents = function() {
            document.addEventListener ?
                (document.removeEventListener("mousewheel", this.mouseWheelAndKey, !1), document.removeEventListener("wheel", this.mouseWheelAndKey, !1), document.removeEventListener("keyup", this.mouseWheelAndKey, !1), document.removeEventListener("touchstart", this.touchStart, !1), document.removeEventListener("touchend", this.touchEnd, !1)) : (document.detachEvent("onmousewheel", this.mouseWheelAndKey, !1), document.detachEvent("onkeyup", this.mouseWheelAndKey, !1));
            setTimeout(function() {
                b.addEvents()
            }, 600)
        };
        this.animateScroll = function() {
            var a =
                this.defaults.animateTime,
                e = this.defaults.animateFunction,
                f = 100 * this.defaults.currentPosition;
            this.defaults.container.style.webkitTransform = "translateY(-" + f + "%)";
            this.defaults.container.style.mozTransform = "translateY(-" + f + "%)";
            this.defaults.container.style.msTransform = "translateY(-" + f + "%)";
            this.defaults.container.style.transform = "translateY(-" + f + "%)";
            this.defaults.container.style.webkitTransition = "all " + a + "s " + e;
            this.defaults.container.style.mozTransition = "all " + a + "s " + e;
            this.defaults.container.style.msTransition =
                "all " + a + "s " + e;
            this.defaults.container.style.transition = "all " + a + "s " + e;
            for (a = 0; a < this.ul.childNodes.length; a++) this.ul.childNodes[a].firstChild.className = this.updateClass(2, "active", this.ul.childNodes[a].firstChild.className), a == this.defaults.currentPosition && (this.ul.childNodes[a].firstChild.className = this.updateClass(1, "active", this.ul.childNodes[a].firstChild.className))
        };
        this.changeCurrentPosition = function(a) {
            "" !== a && (b.defaults.currentPosition = a, location.hash = b.defaults.currentPosition)
        };
        this.registerIeTags =
            function() {
                document.createElement("section")
            };
        this.updateClass = function(a, e, f) {
            if (1 == a) return f + (" " + e);
            if (2 == a) return f.replace(e, "")
        };
        return this
    };
    window.fullScroll = g
})();

var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(a) {
    return a.raw = a
};
$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) {
    a.raw = b;
    return a
};
var handleMousePos = function(a) {
    var b = document.querySelector("#mouse-cursor"),
        d = document.querySelectorAll(".cursor-hover"),
        e = a.pageX;
    a = a.pageY;
    var f = function() {
        b.style.transform = "scale(4)";
        b.style.background = "#FF1744"
    };
    d.forEach(function(c) {
        return c.addEventListener("mouseenter", f)
    });
    var g = function() {
        b.style.transform = "";
        b.style.background = ""
    };
    d.forEach(function(c) {
        return c.addEventListener("mouseleave", g)
    });
    return b.style.left = e - 10 + "px", b.style.top = a - 10 + "px"
};
document.addEventListener("mousemove", handleMousePos);


document.getElementsByTagName("body")[0].addEventListener("mousemove", function(b) {
    t.style.left = b.clientX + "px";
    t.style.top = b.clientY + "px";
    e.style.left = b.clientX + "px";
    e.style.top = b.clientY + "px";
    i.style.left = b.clientX + "px";
    i.style.top = b.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

function n(b) {
    e.classList.add("hover", "hover-2");
    i.classList.add("hover", "hover-2")
}

function s(b) {
    e.classList.remove("hover", "hover-2");
    i.classList.remove("hover", "hover-2")
}
s();
for (var r = document.querySelectorAll(".hover-target, .hover-target-2"), a = r.length - 1; 0 <= a; a--) o(r[a]);

function o(b) {
    b.addEventListener("mouseover", n);
    b.addEventListener("mouseout", s)
}
document.addEventListener("DOMContentLoaded", function() {
    var b = document.querySelector(".logo"),
        c = document.querySelector("body");
    b.addEventListener("mouseenter", function(d) {
        c.classList.add("logo-wrap")
    });
    b.addEventListener("mouseleave", function() {
        c.classList.remove("logo-wrap")
    })
});
document.addEventListener("DOMContentLoaded", function() {
    var b = document.querySelector(".img-1"),
        c = document.querySelector("body");
    b.addEventListener("mouseenter", function(d) {
        c.classList.add("img-1-wrap")
    });
    b.addEventListener("mouseleave", function() {
        c.classList.remove("img-1-wrap")
    })
});