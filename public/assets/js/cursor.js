document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", t.style.top = n.clientY + "px", e.style.left = n.clientX + "px", e.style.top = n.clientY + "px", i.style.left = n.clientX + "px", i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

function n(t) {
    e.classList.add("hover", "hover-2"), i.classList.add("hover", "hover-2")
}

function s(t) {
    e.classList.remove("hover", "hover-2"), i.classList.remove("hover", "hover-2")
}
s();
for (var r = document.querySelectorAll(".hover-target, .hover-target-2"), a = r.length - 1; a >= 0; a--) o(r[a]);

function o(e) {
    e.addEventListener("mouseover", n), e.addEventListener("mouseout", s)
}
  window.addEventListener("load", function() {
    var e = document.querySelector(".img-1"),
        t = document.querySelector("body");
    e.addEventListener("mouseenter", function(_e) {
        t.classList.add("img-1-wrap")
    }), e.addEventListener("mouseleave", function() {
        t.classList.remove("img-1-wrap")
    })
});