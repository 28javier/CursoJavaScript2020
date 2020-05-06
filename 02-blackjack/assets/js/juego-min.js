const miModulo = (() => { "use strict"; let e = []; const t = ["C", "D", "H", "S"],
        a = ["A", "J", "Q", "K"]; let r = []; const n = document.querySelector("#btnPedir"),
        o = document.querySelector("#btnDetener"),
        l = document.querySelector("#btnNuevo"),
        s = document.querySelectorAll(".divCartas"),
        d = document.querySelectorAll("small"),
        c = (t = 2) => { e = i(), r = []; for (let e = 0; e < t; e++) r.push(0);
            d.forEach(e => e.innerText = 0), s.forEach(e => e.innerHTML = ""), o.disabled = !1, n.disabled = !1 },
        i = () => { e = []; for (let a = 2; a <= 10; a++)
                for (let r of t) e.push(a + r); for (let r of t)
                for (let t of a) e.push(t + r); return e = _.shuffle(e) },
        u = () => { if (0 === e.length) throw "No hay cartas en la naraja"; return e.pop() },
        m = (e, t) => (r[t] = r[t] + (e => { const t = e.substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : 1 * t })(e), d[t].innerText = r[t], r[t]),
        h = (e, t) => { const a = document.createElement("img");
            a.src = `assets/cartas/${e}.png`, a.classList.add("carta"), s[t].append(a) },
        f = e => { let t = 0;
            do { const e = u();
                t = m(e, r.length - 1), h(e, r.length - 1) } while (t < e && e <= 21);
            (() => { const [e, t] = r;
                setTimeout(() => { t === e ? alert("Nadie Gana!!!") : e > 21 ? alert("Computadora Gana, mejor suerte en la proxima") : t > 21 ? alert("Jugador Gana, genial lo lograste") : alert("Computadora Gana, mejor suerte en la proxima") }, 4) })() }; return n.addEventListener("click", () => { const e = u(),
            t = m(e, 0);
        h(e, 0), t > 21 ? (console.warn("Lo siento mucho perdistes"), o.disabled = !0, n.disabled = !0, f(t)) : 21 === t && (console.warn("21, Genial Ganaste!!!"), o.disabled = !0, n.disabled = !0, f(t)) }), o.addEventListener("click", () => { o.disabled = !0, n.disabled = !0, f(r[0]) }), l.addEventListener("click", () => { c() }), { nuevoJuego: c } })();