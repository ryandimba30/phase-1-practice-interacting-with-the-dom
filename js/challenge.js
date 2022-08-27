
function _toConsumableArray(i) {
    if (Array.isArray(i)) {
        for (let b = 0, c = Array(i.length); b < i.length; b++) c[b] = i[b];
        return c;
    }
    return Array.from(i);
}
let playing = !0,
    timer = function () {
        return setInterval( () => {
        let i = document.getElementById("counter"),
        b = parseInt(i.innerText);
        i.innerText = b + 1;
    }, 1e3);
    },
    interval = timer(),
    minus = document.getElementById("minus"),
    plus = document.getElementById("plus"),
    heart = document.getElementById("heart"),
    pause = document.getElementById("pause"),
    commentForm = document.getElementsByTagName("form")[0];
    minus.addEventListener("click", function () {
    let i = document.getElementById("counter")
    b = parseInt(i.innerText);
    i.innerText = b - 1;
}),
    plus.addEventListener("click", function () {
    let i = document.getElementById("counter"),
        b = parseInt(i.innerText);
        i.innerText = b + 1;
    }),
    heart.addEventListener("click", function () {
    let i = document.getElementById("counter"),
        b = parseInt(i.innerText),
        c = document.querySelector(".likes"),
        d = void 0;
    if (
        []
        .concat(_toConsumableArray(c.children))
        .map(function (i) {
            return parseInt(i.dataset.num);
        })
        .includes(b)
    ) {
        d = document.querySelector('[data-num="' + b + '"]');
        let e = parseInt(d.children[0].innerText);
        d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
    } else (d = document.createElement("li")).setAttribute("data-num", b), (d.innerHTML = b + " has been liked <span>1</span> time"), c.appendChild(d);
    }),
    pause.addEventListener("click", function () {
    playing
        ? ((playing = !1), clearInterval(interval), (this.innerText = "resume"))
        : ((playing = !0), (interval = timer()), (this.innerText = "pause")),
        []
        .concat(_toConsumableArray(document.getElementsByTagName("button")))
        .forEach(function (i) {
            "pause" !== i.id && (i.disabled = !playing);
        });
    }),
    commentForm.addEventListener("submit", function (i) {
    i.preventDefault();
    let b = this.children[0],
        c = b.value;
    b.value = "";
    let d = document.querySelector(".comments"),
        e = document.createElement("p");
    (e.innerText = c), d.appendChild(e);
    });