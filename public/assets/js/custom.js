

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

