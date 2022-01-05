window.addEventListener("load", () => {
    let e, t, a, i = doc.qs("canvas"),
        l = i.getContext("2d");
    const n = {
        radius: 30,
        gravity: .525,
        elasticity: .6
    };

    function r() {
        e = 3 * doc.height / 5, t = doc.width, i.height = e, i.width = t, l.lineCap = "round", l.lineJoin = "round", l.fillStyle = "rgba(66, 133, 244)"
    }
    addEventListener("resize", r, !1), r();
    let s = {
        x: t / 2,
        y: e / 2,
        lx: 0,
        ly: 0,
        xDragOffset: 0,
        yDragOffset: 0,
        dragging: !1,
        mouseInside: !1,
        lastValues: [],
        gAcceleration: 0,
        xAcceleration: 5,
        yAcceleration: 0,
        path: [],
        weight: 50,
        t1: 0,
        t2: 0,
        raf: null
    };

    function c() {
        let e = 0,
            t = 0;
        for (let a of s.path)(t = t + .001 + .037 * t) > 1 && (t = 1), e++, l.beginPath(), l.save(), e === s.path.length ? l.arc(a.x, a.y, n.radius, 0, 2 * Math.PI, !1) : (l.globalAlpha = .0035 * e, l.scale(1 * t, 1 * t), l.arc(a.x / t, a.y / t, n.radius, 0, 2 * Math.PI, !1)), l.fill(), l.restore(), l.closePath()
    }
    l.beginPath(), l.arc(s.x, s.y, n.radius, 0, 2 * Math.PI, !1), l.fill(), l.closePath(), addEventListener("mousedown", e => {
        s.mouseInside && (s.dragging = !0, s.gAcceleration = 0, cancelAnimationFrame(s.raf))
    }, !1), addEventListener("mousemove", a => {
        document.body.style.cursor = s.mouseInside ? "pointer" : "default";
        let i = a.clientX,
            r = a.clientY;
        if (s.dragging) {
            s.x = a.clientX + s.xDragOffset, s.y = a.clientY + s.yDragOffset;
            let i = {
                x: s.x,
                y: s.y
            };
            5 <= s.lastValues.length && s.lastValues.shift(), s.lastValues.push(i), s.t1 = performance.now(), s.path.push({
                x: s.x,
                y: s.y
            }), s.path.length > 10 && s.path.shift(), l.clearRect(0, 0, t, e), c()
        } else {
            Math.sqrt(Math.pow(i - s.x, 2) + Math.pow(r - s.y, 2)) <= n.radius ? (s.mouseInside = !0, s.xDragOffset = s.x - i, s.yDragOffset = s.y - r) : s.mouseInside = !1
        }
    }, !1), (a = (() => {
        if (s.dragging) return;
        s.gAcceleration += n.gravity;
        let i = .999 * s.yAcceleration + s.gAcceleration,
            r = .999 * s.xAcceleration;
        s.x += r, s.y += i, s.x >= t - n.radius ? (s.x = t - n.radius, s.xAcceleration = -r / (n.elasticity / n.gravity) * .8) : s.x <= n.radius ? (s.x = n.radius, s.xAcceleration = -r / (n.elasticity / n.gravity) * .8) : s.y >= e - n.radius ? (s.y = e - n.radius, s.gAcceleration = 0, s.yAcceleration = -i / (n.elasticity / n.gravity), s.xAcceleration = r / 1.001) : s.y <= n.radius && (s.y = n.radius, s.gAcceleration = 0, s.yAcceleration = -i / (n.elasticity / n.gravity)), s.path.push({
            x: s.x,
            y: s.y
        }), s.path.length > 100 && s.path.shift(), l.clearRect(0, 0, t, e), c(), s.lx = s.x, s.ly = s.y, s.raf = requestAnimationFrame(a)
    }))(), addEventListener("mouseup", e => {
        s.mouseInside && (s.dragging = !1, s.t2 = performance.now() - s.t1, s.xAcceleration = (s.lastValues[s.lastValues.length - 1].x - s.lastValues[0].x) / s.t2, s.yAcceleration = (s.lastValues[s.lastValues.length - 1].y - s.lastValues[0].y) / s.t2, s.xAcceleration -= .35 * s.xAcceleration, s.yAcceleration -= .35 * s.yAcceleration, a())
    }, !1)
}, !1);
let log = console.log;
class doc {
    static get height() {
        return document.documentElement.clientHeight
    }
    static get width() {
        return document.documentElement.clientWidth
    }
    static qs(e) {
        return document.querySelectorAll(e)[0]
    }
    static qsa(e) {
        return document.querySelectorAll(e)
    }
}
Math.rnd = ((e, t) => void 0 === e || void 0 === t ? Math.round(Math.random()) : e + Math.random() * (t - e)), Math.toRad = (e => e * Math.PI / 180);