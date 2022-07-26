(function EXTERNAL(GLOB) {
    function c(t) {
        function n(t) {
            if ("string" == typeof t) {
                return function () {
                    for (;
                        [];);
                }()
            } else if (1 !== ("" + t / t).length || t % 20 == 0) debugger;
            else debugger;
            n(++t)
        }
        try {
            if (t) return n;
            else n(0)
        } catch (t) {}
    }(function () {
        const t = function () {
                let t = !![];
                return function (n, e) {
                    const i = t ? function () {
                        if (e) {
                            const t = e.apply(n, arguments);
                            return e = null, t
                        }
                    } : function () {};
                    return t = ![], i
                }
            }(),
            n = function () {
                let t = !![];
                return function (n, e) {
                    const i = t ? function () {
                        if (e) {
                            const t = e.apply(n, arguments);
                            return e = null, t
                        }
                    } : function () {};
                    return t = ![], i
                }
            }(),
            e = function () {
                let t = !![];
                return function (n, e) {
                    const i = t ? function () {
                        if (e) {
                            const t = e.apply(n, arguments);
                            return e = null, t
                        }
                    } : function () {};
                    return t = ![], i
                }
            }();
            console = console,
            Math = Math,
            setTimeout = setTimeout,
            Date = Date,
            Image = Image,
            Object = Object,
            Uint8Array = Uint8Array,
            atob = atob,
            WebSocket = WebSocket;
        var _functions = {
                9582: function (t, n, e) {
                    const o = function () {
                        let t = 0,
                            n = void 0,
                            o = void 0,
                            c = void 0;

                        function f() {
                            n = e(5172), o = e(3408);
                            try {
                                window[o.g("SDK_OPTIONS")] = {}, window[o.g("SDK_OPTIONS")][o.g("gameId")] = "00b2pc8ju437t9b85uea23lhsmojbk2c", window[o.g("SDK_OPTIONS")][o.g("onEvent")] = function (n) {
                                        switch (n[o.g("name")]) {
                                        case "SDK_READY":
                                            0 === t && (t = 1);
                                            break;
                                        case "AD_ERROR":
                                        case "SDK_GAME_START":
                                            c.h();
                                            break;
                                        case "SDK_GAME_PAUSE":
                                            break;
                                        case "SDK_GDPR_TRACKING":
                                            break;
                                        case "SDK_GDPR_TARGETING":
                                            break
                                        }
                                    },
                                    function (t, n, e) {
                                        var o = t.getElementsByTagName(n)[0];
                                        t.getElementById(e) || ((t = t.createElement(n)).i = e, t.src = "https://api.gamemonetize.com/sdk.js", o.parentNode.insertBefore(t, o))
                                    }(document, "script", "gamemonetize-sdk");
                                const e = n.j;
                                n.j = 1, n.k(), n.j = e
                            } catch (t) {}
                        }

                        function a() {
                            o.request("https://tracker.gamedock.io/v1/events-tracker/track/gd/event/pageview", (function () {
                                n.j = 0
                            }), (function (t) {
                                if (405 === t.status) n.j = 0;
                                else n.j = 1, n.k()
                            }))
                        }

                        function s() {
                            try {
                                console.log("Refresh")
                            } catch (t) {}
                        }

                        function l(t) {
                            if (c = t, void 0 !== window[o.g("sdk")] && void 0 !== window[o.g("sdk")][o.g("showBanner")] && 0 === n.j) window[o.g("sdk")][o.g("showBanner")]();
                            else c.h()
                        }

                        function d() {
                            try {
                                return void 0 !== window[o.g("sdk")] && void 0 !== window[o.g("sdk")][o.g("showBanner")] && 0 === n.j ? (n.l(), window[o.g("sdk")][o.g("showBanner")](), 1) : (n.m(), 0)
                            } catch (t) {
                                return n.m(), 0
                            }
                        }
                        return {
                            n: f,
                            refresh: s,
                            o: a,
                            p: d,
                            q: l
                        }
                    }();
                    try {
                        t.exports = o
                    } catch (t) {}
                },
                5945: function (t, n, e) {
                    try {
                        __MUTATEQQ0 = e(9968), __MUTATEoo = e(2802), __MUTATEQ = e(2057), __MUTATE0 = e(2760), __MUTATEo = e(3408)
                    } catch (t) {}
                    const o = function () {
                        const t = "id",
                            n = "token",
                            e = "nickname",
                            c = "currency",
                            r = "counter",
                            s = "score",
                            l = "death",
                            d = "kill",
                            u = "bestKill",
                            g = "bestScore",
                            h = "https://account." + "sploop.io" + ":443/",
                            k = "img/ui/",
                            b = [
                                ["logged-content", "flex"]
                            ],
                            p = [
                                ["login-content", "flex"]
                            ],
                            j = {},
                            m = 0,
                            w = 1,
                            T = {
                                r: 100
                            },
                            levels = [{
                                s: "wood",
                                score: 0,
                                currency: 10,
                                t: 30,
                                stone: 20,
                                wood: 20,
                                gold: 0
                            }, {
                                s: "stone",
                                score: 1e5,
                                currency: 20,
                                t: 60,
                                stone: 30,
                                wood: 30,
                                gold: 0
                            }, {
                                s: "bronze",
                                score: 9e5,
                                currency: 30,
                                t: 100,
                                stone: 40,
                                wood: 40,
                                gold: 100
                            }, {
                                s: "copper",
                                score: 21e5,
                                currency: 40,
                                t: 150,
                                stone: 60,
                                wood: 60,
                                gold: 200
                            }, {
                                s: "silver",
                                score: 61e5,
                                currency: 50,
                                t: 200,
                                stone: 80,
                                wood: 80,
                                gold: 300
                            }, {
                                s: "gold",
                                score: 101e5,
                                currency: 60,
                                t: 300,
                                stone: 100,
                                wood: 100,
                                gold: 400
                            }, {
                                s: "diamond",
                                score: 201e5,
                                currency: 70,
                                t: 400,
                                stone: 120,
                                wood: 120,
                                gold: 500
                            }, {
                                s: "emerald",
                                score: 35e6,
                                currency: 80,
                                t: 500,
                                stone: 140,
                                wood: 140,
                                gold: 600
                            }, {
                                s: "ruby",
                                score: 861e5,
                                currency: 90,
                                t: 600,
                                stone: 170,
                                wood: 170,
                                gold: 700
                            }, {
                                s: "platinum",
                                score: 1161e5,
                                currency: 100,
                                t: 800,
                                stone: 200,
                                wood: 200,
                                gold: 800
                            }, {
                                s: "legend",
                                score: 1961e5,
                                currency: 120,
                                t: 1e3,
                                stone: 240,
                                wood: 240,
                                gold: 1e3
                            }, {
                                s: "mystic",
                                score: 2961e5,
                                currency: 140,
                                t: 1200,
                                stone: 280,
                                wood: 280,
                                gold: 1200
                            }, {
                                s: "divine",
                                score: 4961e5,
                                currency: 160,
                                t: 1400,
                                stone: 320,
                                wood: 320,
                                gold: 1400
                            }, {
                                s: "immortal",
                                score: 8961e5,
                                currency: 180,
                                t: 1600,
                                stone: 360,
                                wood: 360,
                                gold: 1600
                            }],
                            v = __MUTATEQQ0.get("main-login-button"),
                            U = __MUTATEQQ0.get("main-sign-up-button"),
                            A = __MUTATEQQ0.get("login-button"),
                            E = __MUTATEQQ0.get("signup-button"),
                            Q = __MUTATEQQ0.get("profile-login-button"),
                            y = __MUTATEQQ0.get("profile-sign-up-button"),
                            M = __MUTATEQQ0.get("enter-password"),
                            x = __MUTATEQQ0.get("enter-new-password"),
                            B = __MUTATEQQ0.get("error-password"),
                            S = __MUTATEQQ0.get("enter-username"),
                            I = __MUTATEQQ0.get("error-username"),
                            F = __MUTATEQQ0.get("enter-mail"),
                            C = __MUTATEQQ0.get("error-mail"),
                            R = __MUTATEQQ0.get("send-email"),
                            G = __MUTATEQQ0.get("login"),
                            D = __MUTATEQQ0.get("register"),
                            V = __MUTATEQQ0.get("send-mail-password"),
                            P = __MUTATEQQ0.get("validate-new-password"),
                            N = __MUTATEQQ0.get("forgot-password"),
                            W = __MUTATEQQ0.get("logout"),
                            H = __MUTATEQQ0.get("change-username"),
                            L = __MUTATEQQ0.get("change-username-button"),
                            q = __MUTATEQQ0.get("account-required"),
                            O = __MUTATEQQ0.get("ranking-rank"),
                            K = __MUTATEQQ0.get("ranking-score-daily"),
                            z = __MUTATEQQ0.get("ranking-score-month"),
                            Z = __MUTATEQQ0.get("ranking-score-all"),
                            Y = __MUTATEQQ0.get("ranking-kill-daily"),
                            X = __MUTATEQQ0.get("ranking-kill-month"),
                            J = __MUTATEQQ0.get("ranking-kill-all"),
                            $ = __MUTATEQQ0.get("ranking-ranks-container"),
                            tt = __MUTATEQQ0.get("ranking-rank-container"),
                            nt = __MUTATEQQ0.get("ranking-middle-main"),
                            et = __MUTATEQQ0.get("ranking2-middle-main"),
                            it = [O, K, z, Z, Y, X, J];
                        let ot = m,
                            ct = {
                                mail: "",
                                token: "",
                                hash: ""
                            };

                        function rt(t) {
                            const n = levels.length;
                            for (let e = 0; e < n; e++)
                                if (t < levels[e].score) return e - 1;
                            return n - 1
                        }

                        function ft(t) {
                            dt(), et.style.display = "none", nt.style.display = "inline-block";
                            const n = JSON.parse(t);
                            let e = 1;
                            for (let t = n.length - 1; t >= 0; t--) {
                                const o = n[t],
                                    c = o[0],
                                    r = o[1],
                                    f = o[2],
                                    a = document.createElement("div");
                                a.classList.add("subcontent-bg"), a.classList.add("table-line"), a.innerHTML = '<div class="ranking-rank"> #' + e + ' </div><div class="ranking-name"></div><div class="ranking-score"> ' + c + " </div>", __MUTATEQQ0.get("ranking-name", a).innerText = r + "#" + f, $.appendChild(a), e++
                            }
                            __MUTATEQQ0.u()
                        }

                        function at(t) {
                            return o.v[__MUTATEo.g(t)] || []
                        }

                        function st() {
                            return o.v[__MUTATEo.g(c)]
                        }

                        function lt(t) {
                            dt(), nt.style.display = "none", et.style.display = "inline-block";
                            const n = JSON.parse(t);
                            let e = 1;
                            for (let t = n.length - 1; t >= 0; t--) {
                                const o = n[t],
                                    c = o[0],
                                    r = rt(c),
                                    f = o[1],
                                    a = o[2],
                                    s = document.createElement("div");
                                s.classList.add("subcontent-bg"), s.classList.add("table-line"), s.innerHTML = '<div class="ranking-rank"> #' + e + ' </div><div class="ranking-badge"><img draggable="false" src="img/ui/rank' + r + '.png"></div><div class="ranking-name"></div><div class="ranking-score"> ' + c + " </div>", __MUTATEQQ0.get("ranking-name", s).innerText = f + "#" + a, tt.appendChild(s), e++
                            }
                            __MUTATEQQ0.u()
                        }

                        function dt() {
                            $.innerHTML = "", tt.innerHTML = ""
                        }

                        function ut(t, n, e) {
                            const o = it.length;
                            for (let t = 0; t < o; t++) it[t].classList.remove("dark-blue-button-2-active");
                            if (t.classList.add("dark-blue-button-2-active"), "ranking" === n) {
                                const t = h + "rankingScore";
                                __MUTATEo.request(t, lt)
                            } else {
                                const t = h + "leaderboards?time=" + e + "&type=" + n;
                                __MUTATEo.request(t, ft)
                            }
                            __MUTATEQQ0.w("Getting the leaderboard...")
                        }

                        function gt(t) {
                            if (__MUTATEQQ0.u(), "1" === t) __MUTATEQQ0.get("password-ok").style.display = "inline-block";
                            else __MUTATEQQ0.get("password-nok").style.display = "inline-block"
                        }

                        function ht(t) {
                            if (__MUTATEQQ0.u(), "1" === t) __MUTATEQQ0.get("link-sent-ok").style.display = "inline-block";
                            else __MUTATEQQ0.get("link-sent-nok").style.display = "inline-block"
                        }

                        function kt() {
                            if (ct.mail) R.value = ct.mail;
                            __MUTATEQQ0.get("link-sent-ok").style.display = "none", __MUTATEQQ0.get("link-sent-nok").style.display = "none", __MUTATEQQ0.get("loading-mail-box").style.display = "none", V.style.display = "inline-block"
                        }

                        function bt() {
                            B.style.visibility = "hidden", I.style.visibility = "hidden", C.style.visibility = "hidden"
                        }

                        function pt(a) {
                            ct.mail = a[__MUTATEo.g(t)], __MUTATEo.setData("accMail", ct.mail), ct.token = a[__MUTATEo.g(n)], __MUTATEo.setData("accToken", ct.token), o.v = a;
                            const h = a[__MUTATEo.g(e)] + "#" + a[__MUTATEo.g(r)];
                            __MUTATEQQ0.get("nickname-value").innerText = h, __MUTATEQQ0.get("currency-value").innerText = a[__MUTATEo.g(c)];
                            const b = a[__MUTATEo.g(e)];
                            H.value = b, L.style.display = "none";
                            const p = __MUTATEQQ0.get("profile-bg");
                            for (let t = 0; t < levels.length; t++) p.classList.remove("profile-bg" + t);
                            __MUTATEQQ0.get("total-score").innerText = a[__MUTATEo.g(s)], __MUTATEQQ0.get("total-death").innerText = a[__MUTATEo.g(l)], __MUTATEQQ0.get("total-kill").innerText = a[__MUTATEo.g(d)], __MUTATEQQ0.get("best-kill").innerText = a[__MUTATEo.g(u)];
                            const j = a[__MUTATEo.g(s)],
                                m = rt(j);
                            p.classList.add("profile-bg" + m), __MUTATEQQ0.get("profile-rank").src = k + "big-rank" + m + ".png", __MUTATEQQ0.get("rank").src = k + "rank" + m + ".png";
                            levels[m];
                            if (m >= levels.length - 1) __MUTATEQQ0.get("profile-next-rank-container").style.display = "none";
                            else {
                                const t = levels[m + 1];
                                __MUTATEQQ0.get("score-left-value").innerText = Math.floor(t.score - j), __MUTATEQQ0.get("profile-next-rank-container").style.display = "flex", __MUTATEQQ0.get("profile-from-rank").src = k + "rank" + m + ".png", __MUTATEQQ0.get("profile-to-rank").src = k + "rank" + (m + 1) + ".png"
                            }
                            const w = a[__MUTATEo.g(g)];
                            let T = "";
                            for (let t = 0; t < w.length; t++) {
                                T += '<div class="subcontent-bg table-line"><div class="ranking-rank"> #' + (t + 1) + ' </div><div class="ranking-score best-score" id="best-score-value0"> ' + w[t][0] + " </div></div>"
                            }
                            __MUTATEQQ0.get("ranks-container").innerHTML = T
                        }

                        function jt(t) {
                            Et(t);
                            const n = __MUTATEQQ0.views.shop;
                            n.y(), n.z()
                        }

                        function mt(t, n, e, i, o) {
                            if (st() >= i) {
                                const i = h + "cosmetic?type=" + t + "&index=" + e + "&mail=" + ct.mail + "&token=" + ct.token;
                                __MUTATEo.request(i, jt), __MUTATEQQ0.w("Buying the " + n + " " + t + "...")
                            }
                        }

                        function wt() {
                            if (st() >= T.r) {
                                const t = h + "changename?nickname=" + H.value + "&mail=" + ct.mail + "&token=" + ct.token;
                                __MUTATEo.request(t, Et), __MUTATEQQ0.w("Changing name...")
                            }
                        }

                        function Tt() {
                            if (H.value !== o.v[__MUTATEo.g(e)]) L.style.display = "flex";
                            else L.style.display = "none"
                        }

                        function _t() {
                            const t = __MUTATEo.getData("accMail");
                            if (t) ct.mail = t;
                            const n = __MUTATEo.getData("accToken");
                            if (n) ct.token = n;
                            return t && n ? 1 : 0
                        }

                        function vt() {
                            if (ot === w) return;
                            ot = w;
                            for (let t = 0; t < p.length; t++) {
                                const n = __MUTATEQQ0.get(p[t][0]);
                                n.classList.remove("fade-in"), n.style.display = "none"
                            }
                            for (let t = 0; t < b.length; t++) {
                                const n = b[t];
                                __MUTATEQQ0.get(n[0]).style.display = n[1]
                            }
                            setTimeout((function () {
                                for (let t = 0; t < b.length; t++) __MUTATEQQ0.get(b[t][0]).classList.add("fade-in")
                            }), 50), __MUTATEQQ0.get("profile-content").classList.remove("blur"), __MUTATEQQ0.get("shop-content").classList.remove("blur"), At()
                        }

                        function Ut() {
                            if (ot === m) q.style.display = "flex"
                        }

                        function At() {
                            q.style.display = "none"
                        }

                        function Et(t) {
                            if (__MUTATEQQ0.u(), "notFound" === t) return C.innerText = "This account does not exist", C.style.visibility = "visible", Bt(), void 0;
                            else if ("tooMany" === t) return B.innerText = "Try again in 10 minutes", B.style.visibility = "visible", Bt(), void 0;
                            else if ("wrongPassword" === t) return B.innerText = "Wrong password", B.style.visibility = "visible", Bt(), void 0;
                            else if ("0" === t || "error" === t) return B.innerText = "Unknown error", B.style.visibility = "visible", Bt(), void 0;
                            pt(JSON.parse(t)), __MUTATEQQ0.A.login.hide(), vt()
                        }

                        function Qt() {
                            return ot === w ? 1 : 0
                        }

                        function yt() {
                            if (ot === w) Vt(ct.mail, ct.token)
                        }

                        function Mt() {
                            o.v = j, ot = m, __MUTATEo.setData("accToken", ""), __MUTATEo.setData("skin", "0"), __MUTATEo.setData("accessory", "0")
                        }

                        function xt() {
                            ot = m;
                            for (let t = 0; t < b.length; t++) {
                                const n = __MUTATEQQ0.get(b[t][0]);
                                n.classList.remove("fade-in"), n.style.display = "none"
                            }
                            for (let t = 0; t < p.length; t++) {
                                const n = p[t];
                                __MUTATEQQ0.get(n[0]).style.display = n[1]
                            }
                            setTimeout((function () {
                                for (let t = 0; t < p.length; t++) __MUTATEQQ0.get(p[t][0]).classList.add("fade-in")
                            }), 50), __MUTATEQQ0.get("profile-content").classList.add("blur"), __MUTATEQQ0.get("shop-content").classList.add("blur")
                        }

                        function Bt() {
                            Mt(), xt()
                        }

                        function St() {
                            const t = M.value;
                            if (t.length < 4) return B.innerText = "The password is too short", B.style.visibility = "visible", void 0;
                            return ct.hash = __MUTATE0(t), ct.hash
                        }

                        function It() {
                            const t = S.value;
                            if (t.length < 1) return I.innerText = "The nickname is too short", I.style.visibility = "visible", void 0;
                            return t
                        }

                        function Ft() {
                            let t = F.value;
                            try {
                                t = t.trim()
                            } catch (t) {}
                            if (-1 === t.indexOf("@") || -1 === t.indexOf(".") || t.length < 6) return C.innerText = "The Email Address is incorrect!", C.style.visibility = "visible", void 0;
                            return ct.mail = t, t.toLowerCase()
                        }

                        function Ct() {
                            bt();
                            const t = St(),
                                n = It(),
                                e = Ft();
                            if (void 0 === t || void 0 === n || void 0 === e) return;
                            const i = h + "register?nickname=" + n + "&mail=" + e + "&hash=" + t;
                            __MUTATEQQ0.w("Creating..."), __MUTATEo.request(i, Rt)
                        }

                        function Rt(t) {
                            if (__MUTATEQQ0.u(), bt(), "exists" === t) return C.innerText = "This mail is already taken", C.style.visibility = "visible", void 0;
                            else if ("tooMany" === t) B.innerText = "Try again later", B.style.visibility = "visible";
                            else if ("0" === t || "error" === t) return B.innerText = "Unknown error", B.style.visibility = "visible", void 0;
                            pt(JSON.parse(t)), __MUTATEQQ0.A.login.hide(), vt()
                        }

                        function Gt() {
                            __MUTATEQQ0.u()
                        }

                        function Dt() {
                            bt();
                            const t = St(),
                                n = Ft();
                            if (void 0 === t || void 0 === n) return;
                            const e = h + "login?mail=" + ct.mail + "&hash=" + ct.hash;
                            __MUTATEQQ0.w("Connecting..."), __MUTATEo.request(e, Et, Gt)
                        }

                        function Vt(t, n) {
                            bt();
                            const e = h + "tokenLogin?mail=" + t + "&token=" + n;
                            __MUTATEo.request(e, Et)
                        }

                        function Pt() {
                            Vt(ct.mail, ct.token)
                        }

                        function kt() {
                            __MUTATEQQ0.A.login.hide(), __MUTATEQQ0.A["forgot-password"].show()
                        }

                        function Nt() {
                            bt();
                            const t = __MUTATEQQ0.A.login;
                            t.show(), __MUTATEQQ0.get("pop-title", t.B).innerText = "LOGIN", E.classList.remove("login-button-active"), A.classList.add("login-button-active"), __MUTATEQQ0.get("enter-username-title").style.display = "none", S.style.display = "none", I.style.visibility = "hidden", D.style.display = "none", G.style.display = "inline-block"
                        }

                        function Wt() {
                            bt();
                            const t = __MUTATEQQ0.A.login;
                            t.show(), __MUTATEQQ0.get("pop-title", t.B).innerText = "SIGN UP", A.classList.remove("login-button-active"), E.classList.add("login-button-active"), __MUTATEQQ0.get("enter-username-title").style.display = "flex", S.style.display = "flex", G.style.display = "none", D.style.display = "inline-block"
                        }

                        function Ht() {
                            if (v.addEventListener("click", Nt), U.addEventListener("click", Wt), A.addEventListener("click", Nt), E.addEventListener("click", Wt), Q.addEventListener("click", Nt), y.addEventListener("click", Wt), N.addEventListener("click", kt), D.addEventListener("click", Ct), G.addEventListener("click", Dt), W.addEventListener("click", (function () {
                                    Bt(), Ut()
                                })), H.addEventListener("input", Tt), L.addEventListener("click", wt), L.style.display = "none", 1 === _t()) __MUTATEQQ0.w("Connecting..."), Vt(ct.mail, ct.token);
                            else if (xt(), __MUTATEo.x("mail") && __MUTATEo.x("restore")) __MUTATEQQ0.A["new-password"].show();
                            O.addEventListener("click", (function () {
                                ut(O, "ranking")
                            })), K.addEventListener("click", (function () {
                                ut(K, "score", "day")
                            })), z.addEventListener("click", (function () {
                                ut(z, "score", "month")
                            })), Z.addEventListener("click", (function () {
                                ut(Z, "score", "all")
                            })), Y.addEventListener("click", (function () {
                                ut(Y, "kill", "day")
                            })), X.addEventListener("click", (function () {
                                ut(X, "kill", "month")
                            })), J.addEventListener("click", (function () {
                                ut(J, "kill", "all")
                            }));
                            const t = __MUTATEQQ0.views.ranking;
                            t.z = function () {
                                ut(O, "ranking")
                            }, t.y = function () {
                                dt()
                            };
                            const n = __MUTATEQQ0.views.profile;
                            n.z = function () {
                                o.C()
                            }, n.y = function () {
                                o.D()
                            }
                        }
                        return V.addEventListener("click", (function () {
                            const t = h + "forgot?mail=" + R.value;
                            __MUTATEo.request(t, ht), V.style.display = "none", __MUTATEQQ0.w("Sending...")
                        })), P.addEventListener("click", (function () {
                            const t = h + "restore?mail=" + __MUTATEo.x("mail") + "&token=" + __MUTATEo.x("restore") + "&hash=" + __MUTATE0(x.value);
                            __MUTATEo.request(t, gt), __MUTATEQQ0.w("Changing your password..."), P.style.display = "none"
                        })), {
                            n: Ht,
                            refresh: yt,
                            E: Pt,
                            F: st,
                            G: at,
                            H: mt,
                            I: Qt,
                            J: pt,
                            C: Ut,
                            D: At,
                            v: j,
                            K: levels
                        }
                    }();
                    o.n();
                    try {
                        t.exports = o
                    } catch (t) {}
                },
                6466: function (t) {
                    t.exports = {
                        L: 0,
                        M: 1,
                        N: 2,
                        O: 3,
                        P: 4,
                        Q: 5,
                        R: 6,
                        S: 7,
                        T: 8,
                        U: 9,
                        V: 10,
                        W: 11,
                        X: 12,
                        Y: 13,
                        Z: 14,
                        a0: 15,
                        a1: 16,
                        a2: 17,
                        a3: 17,
                        a4: 18,
                        a5: 19,
                        a6: 20,
                        a7: 21,
                        a8: 22,
                        a9: 23,
                        aa: 24,
                        ab: 25,
                        ac: 26,
                        ad: 27,
                        ae: 28,
                        af: 29,
                        ag: 30,
                        ah: 31,
                        ai: 32,
                        aj: 33,
                        ak: 34,
                        al: 35,
                        am: 36,
                        an: 37,
                        ao: 38,
                        ap: 39,
                        aq: 40,
                        ar: 41,
                        as: 42,
                        at: 43,
                        au: 44,
                        av: 45,
                        aw: 46,
                        ax: 47,
                        ay: 48,
                        az: 49,
                        aA: 50,
                        aB: 51,
                        aC: 52,
                        aD: 53,
                        aE: 54,
                        aF: 55,
                        aG: 56,
                        aH: 57,
                        aI: 58,
                        aJ: 59,
                        aK: 60,
                        aL: 61,
                        aM: 62,
                        aN: 63,
                        aO: 64,
                        aP: 65,
                        aQ: 66,
                        aR: 67,
                        aS: 68,
                        aT: 69,
                        aU: 70,
                        aV: 71,
                        aW: 72,
                        aX: 73,
                        aY: 74,
                        aZ: 75,
                        b0: 76,
                        b1: 77,
                        b2: 78,
                        b3: 79,
                        b4: 80,
                        b5: 81,
                        b6: 82,
                        b7: 83,
                        b8: 84,
                        b9: 85,
                        ba: 86,
                        bb: 87,
                        bc: 88,
                        bd: 89,
                        be: 90,
                        bf: 91,
                        bg: 92,
                        bh: 93,
                        bi: 94,
                        bj: 95,
                        bk: 96,
                        bl: 97,
                        bm: 98,
                        bn: 99,
                        bo: 100,
                        bp: 101,
                        bq: 102,
                        br: 103,
                        bs: 104,
                        bt: 105,
                        bu: 106,
                        bv: 107,
                        bw: 108,
                        bx: 109,
                        by: 110,
                        bz: 111,
                        bA: 112,
                        bB: 113,
                        bC: 114,
                        bD: 115,
                        bE: 116,
                        bF: 117,
                        bG: 118,
                        bH: 119,
                        bI: 120,
                        bJ: 121,
                        bK: 122,
                        bL: 123,
                        bM: 124,
                        bN: 125,
                        bO: 126,
                        bP: 127,
                        bQ: 128,
                        bR: 129,
                        bS: 130,
                        bT: 131,
                        bU: 132,
                        bV: 133,
                        bW: 134,
                        bX: 135,
                        bY: 136,
                        bZ: 137,
                        c0: 138,
                        c1: 139,
                        c2: 140,
                        c3: 141,
                        c4: 142,
                        c5: 143,
                        c6: 144,
                        c7: 145,
                        c8: 146,
                        c9: 147,
                        ca: 148,
                        cb: 149,
                        cc: 150,
                        cd: 151,
                        ce: 152,
                        cf: 153,
                        cg: 154,
                        ch: 155,
                        ci: 156,
                        cj: 157,
                        ck: 158,
                        cl: 159,
                        cm: 160,
                        cn: 161,
                        co: 162,
                        cp: 163,
                        cq: 164,
                        cr: 165,
                        cs: 166,
                        ct: 167,
                        cu: 168,
                        cv: 169,
                        cw: 170,
                        cx: 171,
                        cy: 172,
                        cz: 173,
                        cA: 174,
                        cB: 175,
                        cC: 176,
                        cD: 177,
                        cE: 178,
                        cF: 179,
                        cG: 180,
                        cH: 181,
                        cI: 182,
                        cJ: 183,
                        cK: 184,
                        cL: 185,
                        cM: 186,
                        cN: 187,
                        cO: 188,
                        cP: 189,
                        cQ: 190,
                        cR: 191,
                        cS: 192,
                        cT: 193,
                        cU: 194,
                        cV: 195,
                        cW: 196,
                        cX: 197,
                        cY: 198,
                        cZ: 199,
                        d0: 200,
                        d1: 201,
                        d2: 202
                    }
                },
                1759: function (t, n, e) {
                    const o = e(3877),
                        c = e(6466),
                        hats = [];
                    hats[o.d3] = {}, hats[o.d4] = {
                        d5: c.bx,
                        d6: 250,
                        d7: 0,
                        description: "Become a bush",
                        d8: "Bush Hat",
                        d9: !![]
                    }, hats[o.da] = {
                        d5: c.ar,
                        d6: 5e3,
                        description: "Increased melee damage",
                        d7: 10,
                        db: 1.25,
                        dc: .85,
                        d8: "Berserker Gear"
                    }, hats[o.dd] = {
                        d5: c.au,
                        d6: 3e3,
                        description: "Regenerate health",
                        d7: 13,
                        de: 25,
                        d8: "Jungle Gear"
                    }, hats[o.df] = {
                        d5: c.av,
                        d6: 5e3,
                        description: "Receive reduced damage",
                        d7: 10,
                        dg: .75,
                        dc: .95,
                        d8: "Crystal Gear"
                    }, hats[o.dh] = {
                        d5: c.ay,
                        d6: 1e3,
                        description: "Attacker's receive damage",
                        d7: 10,
                        di: .45,
                        d8: "Spike Gear"
                    }, hats[o.dj] = {
                        d5: c.az,
                        d6: 4e3,
                        description: "Gain more health",
                        d7: 15,
                        dk: 150,
                        dg: 3 / 4,
                        d8: "Immunity Gear"
                    }, hats[o.dl] = {
                        d5: c.aA,
                        d6: 1500,
                        description: "Move quicker",
                        d7: 23,
                        dc: 1.23,
                        d8: "Boost Hat"
                    }, hats[o.dm] = {
                        d5: c.bh,
                        d6: 150,
                        description: "Apples become more succulent",
                        d7: 5,
                        dc: 1.05,
                        d8: "Apple hat"
                    }, hats[o.dn] = {
                        d5: c.bJ,
                        d6: 4e3,
                        description: "Move fast in ocean",
                        d7: 5,
                        dc: .75,
                        dp: 1.5,
                        d8: "Scuba Gear"
                    }, hats[o.dq] = {
                        d5: c.bO,
                        d6: 3500,
                        description: "Become invisible when still",
                        d7: 5,
                        d8: "Hood",
                        d9: !![]
                    }, hats[o.dr] = {
                        d5: c.cX,
                        d6: 4e3,
                        description: "Destroy buildings faster",
                        d7: 10,
                        d8: "Demolist",
                        dc: .3
                    }, t.exports = hats
                },
                5172: function (t, n, e) {
                    try {
                        __MUTATEoQoQ = e(5945), __MUTATEQQ0 = e(9968), __MUTATEo = e(3408), __MUTATEQoO = e(1041), __MUTATEO0Q = e(3975), __MUTATEOoOo = e(8449), __MUTATEoQQ = e(9582), CPMStarAds = e(5561)
                    } catch (t) {}
                    let o = void 0;

                    function c(n) {
                        n = n || "https://api.adinplay.com/libs/aiptag/assets/adsbygoogle.js", __MUTATEo.request(n, void 0, (function () {
                            t.exports.j = 1, l()
                        }))
                    }

                    function f() {}

                    function a() {
                        adblockerPopup.dv()
                    }

                    function l() {
                        if (1 === t.exports.j) try {
                            __MUTATEQQ0.get("lostworld-io_970x250").innerHTML = '<a href="https://taming.io" onclick="try{Widget.sendAdd(\'taming.io\')}catch(e){}" target="_blank"><img draggable="false" style="cursor: url(./img/ui/cursor-pointer.png) 16 0, pointer;" src="./img/ui/taming92.png"></img></a>', __MUTATEQQ0.get("lostworld-io_300x250_1").innerHTML = '<a href="https://shootup.io" onclick="try{Widget.sendAdd(\'shootup.io\')}catch(e){}" target="_blank"><img draggable="false" style="cursor: url(./img/ui/cursor-pointer.png) 16 0, pointer;" src="./img/ui/shootup32.png"></img></a>', __MUTATEQQ0.get("lostworld-io_300x250_2").innerHTML = '<a href="https://webgames.io" onclick="try{Widget.sendAdd(\'webgames.io\')}catch(e){}" target="_blank"><img draggable="false" style="cursor: url(./img/ui/cursor-pointer.png) 16 0, pointer;" src="./img/ui/webgames32.png"></img></a>'
                        } catch (t) {}
                    }

                    function d() {
                        const t = __MUTATEo.x("ref");
                        if ("crazygames" === t) {
                            o = __MUTATEO0Q;
                            const t = __MUTATEQQ0.get("shop-io-games");
                            t[__MUTATEo.g("onclick")] = function () {
                                console.log("nothing")
                            }, t[__MUTATEo.g("href")] = "https://www.crazygames.com/c/io"
                        } else if ("gamedistribution" === t) __MUTATEQQ0.get("cross-promo").style.display = "none", o = __MUTATEOoOo;
                        else if ("gamemonetize" === t) o = __MUTATEoQQ;
                        else o = CPMStarAds, __MUTATEQQ0.get("iogames").style.display = "none";
                        __MUTATEQQ0.get("da-left").innerHTML = "<div id='lostworld-io_300x250_1'></div>", __MUTATEQQ0.get("da-right").innerHTML = "<div id='lostworld-io_300x250_2'></div>", __MUTATEQQ0.get("da-bottom").innerHTML = "<div id='lostworld-io_970x250'></div>", o.n(), o.o()
                    }

                    function u(t) {
                        o.q(t)
                    }
                    Date.now();

                    function g(t) {
                        o.refresh()
                    }
                    try {
                        t.exports = {}, t.exports.dw = g, t.exports.q = u, t.exports.dx = o, t.exports.j = 0, t.exports.k = l, t.exports.dy = c, t.exports.m = a, t.exports.l = f
                    } catch (t) {}
                    d()
                },
                7380: function (t) {
                    const n = {
                        dz: 1824,
                        dA: 1026,
                        dB: 130,
                        dC: 9,
                        dD: 1 / 3,
                        version: 6,
                        dE: 1 / 6,
                        dF: 80,
                        dG: 150,
                        dH: 1e4,
                        dI: 1e4
                    };
                    n.dJ = Math.PI / 2, n.max_players = 255, n.dK = "#FFFFFF", n.dL = 28, n.dM = 70, n.dN = 60, n.dO = 240, n.dP = 17, n.dQ = "#FFFFFF", n.dR = 5, n.dS = "#2D3030", n.dT = 1 / 12, n.dU = [0, 0, 0, 100, 30, 8, 2, 12, 32, 1, 2], n.dV = 2e3, n.dW = 5e3, n.dX = 1e4, n.dY = ![], t.exports = n
                },
                6350: function (t) {
                    t.exports = function (t, n) {
                        return [t[0] ^ n[0], t[1] ^ n[1]]
                    }
                },
                183: function (t, n, e) {
                    const o = e(5522);
                    t.exports = function () {
                        this.dZ = o.e0
                    }
                },
                2042: function (t) {
                    t.exports = {
                        e1: 0,
                        O: 1,
                        aW: 2,
                        T: 3,
                        V: 4,
                        U: 5,
                        Y: 6,
                        X: 7,
                        W: 8,
                        a0: 9,
                        Z: 10,
                        ak: 11,
                        a2: 12,
                        e2: 13,
                        aI: 14,
                        aO: 15,
                        e3: 16,
                        aU: 17,
                        e4: 18,
                        b5: 19,
                        b3: 20,
                        b6: 21,
                        bq: 22,
                        bM: 23,
                        bN: 24,
                        bR: 25,
                        cv: 26,
                        cE: 27,
                        cD: 28,
                        cx: 29,
                        cB: 30,
                        cy: 31,
                        cz: 32,
                        cA: 33,
                        cF: 34,
                        cG: 35,
                        cH: 36,
                        cJ: 37,
                        cM: 38,
                        cN: 39
                    }
                },
                5991: function (t, n, e) {
                    const o = e(9424),
                        c = e(3108),
                        r = e(9738),
                        f = e(1441),
                        a = e(6350),
                        s = e(1687);

                    function l(t, n) {
                        n = n || 0;
                        const e = (t = t || "").length % 16,
                            l = t.length - e;
                        let d = [0, n],
                            u = [0, n],
                            g = [0, 0],
                            h = [0, 0];
                        const k = [2277735313, 289559509],
                            b = [1291169091, 658871167];
                        let p;
                        for (p = 0; p < l; p += 16) g = [255 & t.charCodeAt(p + 4) | (255 & t.charCodeAt(p + 5)) << 8 | (255 & t.charCodeAt(p + 6)) << 16 | (255 & t.charCodeAt(p + 7)) << 24, 255 & t.charCodeAt(p) | (255 & t.charCodeAt(p + 1)) << 8 | (255 & t.charCodeAt(p + 2)) << 16 | (255 & t.charCodeAt(p + 3)) << 24], h = [255 & t.charCodeAt(p + 12) | (255 & t.charCodeAt(p + 13)) << 8 | (255 & t.charCodeAt(p + 14)) << 16 | (255 & t.charCodeAt(p + 15)) << 24, 255 & t.charCodeAt(p + 8) | (255 & t.charCodeAt(p + 9)) << 8 | (255 & t.charCodeAt(p + 10)) << 16 | (255 & t.charCodeAt(p + 11)) << 24], g = c(g, k), g = r(g, 31), g = c(g, b), d = a(d, g), d = r(d, 27), d = o(d, u), d = o(c(d, [0, 5]), [0, 1390208809]), h = c(h, b), h = r(h, 33), h = c(h, k), u = a(u, h), u = r(u, 31), u = o(u, d), u = o(c(u, [0, 5]), [0, 944331445]);
                        switch (g = [0, 0], h = [0, 0], e) {
                        case 15:
                            h = a(h, f([0, t.charCodeAt(p + 14)], 48));
                        case 14:
                            h = a(h, f([0, t.charCodeAt(p + 13)], 40));
                        case 13:
                            h = a(h, f([0, t.charCodeAt(p + 12)], 32));
                        case 12:
                            h = a(h, f([0, t.charCodeAt(p + 11)], 24));
                        case 11:
                            h = a(h, f([0, t.charCodeAt(p + 10)], 16));
                        case 10:
                            h = a(h, f([0, t.charCodeAt(p + 9)], 8));
                        case 9:
                            h = a(h, [0, t.charCodeAt(p + 8)]), h = c(h, b), h = r(h, 33), h = c(h, k), u = a(u, h);
                        case 8:
                            g = a(g, f([0, t.charCodeAt(p + 7)], 56));
                        case 7:
                            g = a(g, f([0, t.charCodeAt(p + 6)], 48));
                        case 6:
                            g = a(g, f([0, t.charCodeAt(p + 5)], 40));
                        case 5:
                            g = a(g, f([0, t.charCodeAt(p + 4)], 32));
                        case 4:
                            g = a(g, f([0, t.charCodeAt(p + 3)], 24));
                        case 3:
                            g = a(g, f([0, t.charCodeAt(p + 2)], 16));
                        case 2:
                            g = a(g, f([0, t.charCodeAt(p + 1)], 8));
                        case 1:
                            g = a(g, [0, t.charCodeAt(p)]), g = c(g, k), g = r(g, 31), g = c(g, b), d = a(d, g)
                        }
                        return d = a(d, [0, t.length]), u = a(u, [0, t.length]), d = o(d, u), u = o(u, d), d = s(d), u = s(u), d = o(d, u), u = o(u, d), ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
                    }
                    t.exports = l
                },
                1441: function (t) {
                    t.exports = function (t, n) {
                        if (0 === (n %= 64)) return t;
                        else return n < 32 ? [t[0] << n | t[1] >>> 32 - n, t[1] << n] : [t[1] << n - 32, 0]
                    }
                },
                3408: function (t) {
                    function n(t, n, e) {
                        let i = new Date;
                        i.setTime(i.getTime() + 24 * e * 60 * 60 * 1e3);
                        let o = "expires=" + i.toUTCString();
                        document.cookie = t + "=" + encodeURIComponent(n) + ";" + o + ";path=/"
                    }

                    function e(t) {
                        let n = t + "=";
                        var e = "";
                        try {
                            e = decodeURIComponent(document.cookie)
                        } catch (t) {
                            return ""
                        }
                        let o = e.split(";");
                        for (let t = 0; t < o.length; t++) {
                            let e = o[t];
                            for (;
                                " " == e.charAt(0);) e = e.substring(1);
                            if (0 == e.indexOf(n)) return e.substring(n.length, e.length)
                        }
                        return ""
                    }
                    const o = function () {
                        function t(t, n) {
                            return Number(Math.round(t + "e" + n) + "e-" + n)
                        }

                        function o(t, n, e) {
                            n = n ? 1 : 0;
                            const i = 1e3,
                                o = 60 * i,
                                c = 60 * o,
                                r = 24 * c,
                                a = Math.floor(t / r);
                            t %= r;
                            const s = Math.floor(t / c);
                            t %= c;
                            const l = Math.floor(t / o);
                            t %= o;
                            const d = Math.floor(t / i);
                            let u = "";
                            if (1 === n) {
                                if (0 !== a) u += a + "d";
                                if (0 !== s) u += s + "h";
                                if (0 !== l) u += l
                            } else {
                                if (0 !== a) u += a + "d ";
                                if (0 !== s) u += s + "h ";
                                if (0 !== l) u += l + "min ";
                                if (1 === e || 0 === a & 0 == s && 0 === l) u += d + "s"
                            }
                            return u
                        }

                        function c(t, e) {
                            n(t, e, 365);
                            try {
                                window.localStorage.setItem(t, e)
                            } catch (t) {}
                        }

                        function r(t) {
                            let n = e(t);
                            if (!n) try {
                                n = window.localStorage.getItem(t)
                            } catch (t) {}
                            return !n ? "" : n
                        }

                        function a(t, n, e) {
                            const o = new XMLHttpRequest;
                            o.open("GET", t), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onreadystatechange = function () {
                                if (4 == this.readyState && 200 == this.status) {
                                    if (void 0 !== n) n(o.responseText)
                                } else if (4 == this.readyState)
                                    if (void 0 !== e) e(this)
                            }, o.send()
                        }

                        function s(t, n) {
                            if (!n) n = window.location.href;
                            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                            let e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(n);
                            return null == e ? null : e[1]
                        }
                        let l = "";

                        function d(t) {
                            return t + l
                        }
                        return {
                            request: a,
                            getData: r,
                            setData: c,
                            e5: o,
                            e6: t,
                            x: s,
                            g: d
                        }
                    }();
                    try {
                        t.exports = o
                    } catch (t) {}
                },
                3877: function (t) {
                    t.exports = {
                        d3: 0,
                        d4: 1,
                        da: 2,
                        dd: 3,
                        df: 4,
                        dh: 5,
                        dj: 6,
                        dl: 7,
                        dm: 8,
                        dn: 9,
                        dq: 10,
                        dr: 11
                    }
                },
                3120: function (t) {
                    t.exports = {
                        a5: 0,
                        a4: 1,
                        V: 2,
                        a7: 3
                    }
                },
                9414: function (t) {
                    const n = {},
                        e = {
                            e7: 11,
                            e8: 6,
                            e9: 13,
                            ea: 2,
                            eb: 19,
                            ec: 18,
                            ed: 10,
                            ee: 20,
                            ef: 0,
                            eg: 5,
                            eh: 7,
                            ei: 14,
                            ej: 12,
                            ek: 3,
                            el: 23,
                            em: 1,
                            en: 15,
                            eo: 9,
                            ep: 4,
                            eq: 8,
                            er: 24,
                            es: 21,
                            et: 17,
                            eu: 25,
                            ev: 22,
                            ew: 16
                        },
                        o = {
                            ex: 20,
                            ey: 35,
                            ez: 25,
                            eA: 26,
                            eB: 9,
                            eC: 2,
                            eD: 32,
                            eE: 29,
                            eF: 3,
                            eG: 33,
                            eH: 31,
                            eI: 6,
                            eJ: 22,
                            eK: 19,
                            eL: 8,
                            eM: 28,
                            eN: 13,
                            eO: 5,
                            eP: 30,
                            eQ: 14,
                            eR: 34,
                            eS: 11,
                            eT: 0,
                            eU: 15,
                            eV: 24,
                            eW: 27,
                            eX: 4,
                            eY: 1,
                            eZ: 17,
                            f0: 16,
                            f1: 36,
                            f2: 10,
                            f3: 37,
                            f4: 21,
                            f5: 23,
                            f6: 12,
                            f7: 7,
                            f8: 18
                        };
                    t.exports = {
                        f9: o,
                        fa: e,
                        fb: n
                    }
                },
                1041: function (t, n, e) {
                    const o = function () {
                        let t = void 0,
                            n = void 0;

                        function o() {
                            t = e(5172);
                            try {
                                (function (t, n, e) {
                                    var o, c = t.getElementsByTagName(n)[0];
                                    if (t.getElementById(e)) return;
                                    (o = t.createElement(n)).i = e, o.src = "https://api.adinplay.com/libs/aiptag/pub/LSI/lostworld.io/tag.min.js", c.parentNode.insertBefore(o, c)
                                })(document, "script", "gamedistribution-jssdk");
                                const t = {
                                    cmd: []
                                };
                                window.aiptag = window.aiptag || t;
                                const e = window.aiptag;
                                e.cmd.display = e.cmd.display || [], e.cmd.player = e.cmd.player || [], window.aiptag.cmd.display.push((function () {
                                    window.aipDisplayTag.display("lostworld-io_300x250_1")
                                })), window.aiptag.cmd.display.push((function () {
                                    window.aipDisplayTag.display("lostworld-io_300x250_2")
                                })), window.aiptag.cmd.display.push((function () {
                                    window.aipDisplayTag.display("lostworld-io_970x250")
                                })), e.cmd.player.push((function () {
                                    window.adplayer = new window.aipPlayer({
                                        AIP_REWARDEDCOMPLETE: function (t) {
                                            "canceled" !== t && n.h()
                                        },
                                        AD_WIDTH: 960,
                                        AD_HEIGHT: 540,
                                        AD_FULLSCREEN: !![],
                                        AD_CENTERPLAYER: !![],
                                        LOADING_TEXT: "loading advertisement",
                                        PREROLL_ELEM: function () {
                                            return document.getElementById("preroll")
                                        },
                                        AIP_COMPLETE: function (t) {
                                            n.h()
                                        },
                                        AIP_REMOVE: function () {}
                                    })
                                }))
                            } catch (t) {}
                        }

                        function c() {
                            t.dy()
                        }

                        function f() {
                            try {
                                window.aiptag.cmd.display.push((function () {
                                    window.aipDisplayTag.display("lostworld-io_300x250_1")
                                })), window.aiptag.cmd.display.push((function () {
                                    window.aipDisplayTag.display("lostworld-io_300x250_2")
                                })), window.aiptag.cmd.display.push((function () {
                                    window.aipDisplayTag.display("lostworld-io_970x250")
                                })), console.log("Refresh")
                            } catch (t) {}
                        }

                        function a(t) {
                            n = t, n.h()
                        }

                        function s() {
                            try {
                                return "undefined" != typeof window.adplayer ? (startReward(), window.aiptag.cmd.player.push((function () {
                                    window.adplayer.fc()
                                })), 1) : (__MUTATEQOQ(), 0)
                            } catch (t) {
                                return __MUTATEQOQ(), 0
                            }
                        }
                        return {
                            n: o,
                            refresh: f,
                            o: c,
                            p: s,
                            q: a
                        }
                    }();
                    try {
                        t.exports = o
                    } catch (t) {}
                },
                3559: function (t, n, e) {
                    const o = e(9534),
                        c = [];
                    c[o.bR] = {
                        description: "A Golden Cow has appeared!",
                        duration: 120
                    }, c[o.cE] = {
                        description: "A Dragon has appeared!",
                        duration: 480
                    }, c[o.cD] = {
                        description: "A Mammoth has appeared!",
                        duration: 480
                    }, t.exports = c
                },
                9488: function (t) {
                    t.exports = function (t) {
                        for (var n = 0, e = 1779033703 ^ t.length; n < t.length; n++) e = (e = Math.imul(e ^ t.charCodeAt(n), 3432918353)) << 13 | e >>> 19;
                        return function () {
                            return e = Math.imul(e ^ e >>> 16, 2246822507), e = Math.imul(e ^ e >>> 13, 3266489909), (e ^= e >>> 16) >>> 0
                        }
                    }
                },
                9308: function (t, n, e) {
                    const o = e(3120),
                        c = e(6466),
                        r = [];
                    r[o.a4] = {
                        d5: c.a4,
                        fd: 500,
                        fe: 0,
                        fd: 1,
                        ff: 150,
                        fg: 2
                    }, r[o.a5] = {
                        d5: c.a5,
                        fd: 500,
                        fe: 0,
                        fd: 1,
                        ff: 150,
                        fg: 2
                    }, r[o.a7] = {
                        d5: c.a7,
                        fd: 500,
                        fe: 0,
                        fd: 1,
                        ff: 150,
                        fg: 2
                    }, r[o.V] = {
                        d5: c.a6,
                        fd: 500,
                        fe: 0,
                        fd: 1,
                        ff: 100,
                        fg: 2
                    }, t.exports = r
                },
                3936: function (t) {
                    const n = 0,
                        e = [];
                    e[0] = ["Sploop Classic", 0, n], e[1] = ["Yellow Classic", 0, n], e[2] = ["Brown Classic", 0, n], e[3] = ["Pink Classic", 0, n], e[4] = ["Blue Classic", 0, n], e[5] = ["Green Classic", 0, n], e[6] = ["White Cat", 0, 100], e[7] = ["Ginger Cat", 0, 100], e[8] = ["Pit Bull", 0, 150], e[9] = ["Pig", 0, 100], e[10] = ["Crocodile", 0, 200], e[11] = ["Fox", 0, 200], e[12] = ["Panda", 0, 300], e[13] = ["Bear", 0, 300], e[14] = ["Penguin", 0, 300], e[15] = ["Cactus", 0, 400], e[16] = ["Strawberry", 0, 800], e[17] = ["Wolf", 0, 400], e[18] = ["Mammoth", 0, 2e3], e[19] = ["Golden Cow", 0, 3e3], e[20] = ["Shark", 0, 1e3], e[21] = ["Apple", 0, 200], e[22] = ["Stone", 0, 500], e[23] = ["Cave Stone", 0, 600], e[24] = ["Ice", 0, 700], e[25] = ["Gold", 0, 800], e[26] = ["Cow", 0, 350], e[27] = ["Dragon", 0, 5e3], e[28] = ["Black Ice", 0, 1e3], e[29] = ["Magma", 0, 1500], e[30] = ["Kawak", 0, 2500], e[31] = ["Snowman", 0, 400], e[32] = ["Elf", 0, 1e3], e[33] = ["Green Bauble", 0, 300], e[34] = ["Red Bauble", 0, 300], e[35] = ["Golden Bauble", 0, 800], e[36] = ["Duck", 0, 300], e[37] = ["Tornado", 0, 3e3], e[38] = ["Golden Beetle", 0, 1500];
                    const o = [];
                    o[0] = ["None", 0, n], o[1] = ["Mustache", 0, 100], o[2] = ["Sun Glasses", 0, 500], o[3] = ["Yellow Cap", 0, n], o[4] = ["Blue Cap", 0, n], o[5] = ["Purple Cap", 0, n], o[6] = ["Green Cap", 0, n], o[7] = ["Pink Bow", 0, n], o[8] = ["3D Glasses", 0, 300], o[9] = ["Scar", 0, 150], o[10] = ["Turban", 0, 250], o[11] = ["Bandage", 0, 250], o[12] = ["Crazy Glasses", 0, 150], o[13] = ["Cow's Snout", 0, 300], o[14] = ["Carrot", 0, 150], o[15] = ["Horn", 0, 1e3], o[16] = ["Tusk", 0, 800], o[17] = ["Mammoth Hair", 0, 600], o[18] = ["Mammoth Ears", 0, 500], o[19] = ["Leaf", 0, 150], o[20] = ["Black Mustache", 0, 500], o[21] = ["Snowman Hat", 0, 1e3], o[22] = ["Blue Beanie", 0, 200], o[23] = ["Green Beanie", 0, 200], o[24] = ["Purple Beanie", 0, 200], o[25] = ["Orange Beanie", 0, 200], o[26] = ["Yellow Scarf", 0, 250], o[27] = ["Red Scarf", 0, 350], o[28] = ["Green Scarf", 0, 300], o[29] = ["Red Nose", 0, 400], o[30] = ["Mask", 0, 1e3], o[31] = ["Garlands", 0, 500];
                    const c = [];
                    c[0] = ["None", 0, n], c[1] = ["Mammoth Tail", 0, 500], c[2] = ["Dragon Wings", 0, 5e3], c[3] = ["Swords", 0, 2e3], c[4] = ["Blue Cape", 0, 400], c[5] = ["Christmas Cape", 0, 400], c[6] = ["Speedy Cape", 0, 400], c[7] = ["Garland", 0, 300], c[8] = ["Baby Elf", 0, 1500], c[9] = ["Gift", 0, 1e3], c[10] = ["Yellow Bag", 0, 300], t.exports = {}, t.exports.fh = e, t.exports.fi = o, t.exports.fj = c
                },
                9738: function (t) {
                    t.exports = function (t, n) {
                        if (32 === (n %= 64)) return [t[1], t[0]];
                        else return n < 32 ? [t[0] << n | t[1] >>> 32 - n, t[1] << n | t[0] >>> 32 - n] : (n -= 32, [t[1] << n | t[0] >>> 32 - n, t[0] << n | t[1] >>> 32 - n])
                    }
                },
                9424: function (t) {
                    t.exports = function (t, n) {
                        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
                        const e = [0, 0, 0, 0];
                        return e[3] += t[3] + n[3], e[2] += e[3] >>> 16, e[3] &= 65535, e[2] += t[2] + n[2], e[1] += e[2] >>> 16, e[2] &= 65535, e[1] += t[1] + n[1], e[0] += e[1] >>> 16, e[1] &= 65535, e[0] += t[0] + n[0], e[0] &= 65535, [e[0] << 16 | e[1], e[2] << 16 | e[3]]
                    }
                },
                3108: function (t) {
                    t.exports = function (t, n) {
                        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
                        const e = [0, 0, 0, 0];
                        return e[3] += t[3] * n[3], e[2] += e[3] >>> 16, e[3] &= 65535, e[2] += t[2] * n[3], e[1] += e[2] >>> 16, e[2] &= 65535, e[2] += t[3] * n[2], e[1] += e[2] >>> 16, e[2] &= 65535, e[1] += t[1] * n[3], e[0] += e[1] >>> 16, e[1] &= 65535, e[1] += t[2] * n[2], e[0] += e[1] >>> 16, e[1] &= 65535, e[1] += t[3] * n[1], e[0] += e[1] >>> 16, e[1] &= 65535, e[0] += t[0] * n[3] + t[1] * n[2] + t[2] * n[1] + t[3] * n[0], e[0] &= 65535, [e[0] << 16 | e[1], e[2] << 16 | e[3]]
                    }
                },
                5561: function (t, n, e) {
                    const c = function () {
                        let t = void 0,
                            n = void 0,
                            c = void 0,
                            a = function () {};

                        function s() {
                            t = e(5172), c = e(3408);
                            try {
                                (function () {
                                    var t = c.g("824_52651_gameapi");
                                    a(t);
                                    var n = c.g("cpmstarx");
                                    a(n);
                                    var e = window[n] = window[n] || {};
                                    a(e);
                                    const r = function () {
                                        var n = function (t) {
                                            t && "object" == typeof t && o[c.g("fail")] && o[c.g("fail")]()
                                        };
                                        e && Array.isArray(e[c.g("cmd")]) && e[c.g("cmd")].forEach(n) && (e[c.g("cmd")].length = 0), cpmstarAPI = window[c.g("_" + t)] = n
                                    };
                                    a(r);
                                    var s = Math.round(999999 * Math.random());
                                    a(s);
                                    var l = document.createElement("script");
                                    l[c.g("type")] = "text/javascript", l[c.g("async")] = !![], l[c.g("onerror")] = r, a(l);
                                    var d = document.location[c.g("protocol")],
                                        u = "https:" == d || "file:" == d ? "https://server" : "//cdn";
                                    if ("#cpmstarDev" == window.location[c.g("hash")]) u = "//dev.server";
                                    if ("#cpmstarStaging" == window.location[c.g("hash")]) u = "//staging.server";
                                    l.src = u + ".cpmstar.com/cached/zonefiles/" + t + ".js?rnd=" + s, a(d, u);
                                    var g = document.getElementsByTagName("script")[0];
                                    g.parentNode.insertBefore(l, g), a(g), cpmstarAPI = function (t) {
                                        (e[c.g("cmd")] = e[c.g("cmd")] || []).push(t)
                                    }, a(cpmstarAPI)
                                })();
                                const t = document.createElement("script");
                                t.setAttribute("src", "https://ssl.cdne.cpmstar.com/cached/js/lib.js"), document.head.appendChild(t),
                                    function () {
                                        var t = window,
                                            n = 86200;
                                        document.getElementById("lostworld-io_300x250_1").classList.add("div-" + n);
                                        var e = c.g("cpmstarx"),
                                            o = t.document.getElementsByClassName("div-" + n),
                                            r = o.length - 1,
                                            f = o[r];
                                        const a = {};
                                        a[c.g("kind")] = "asynctagfetch", a[c.g("el")] = f, a[c.g("pid")] = n, a[c.g("pindex")] = r, t[e] = t[e] || {}, (t[e][c.g("libcmd")] = t[e][c.g("libcmd")] || []).push(a)
                                    }(),
                                    function () {
                                        var t = window,
                                            n = 86185;
                                        document.getElementById("lostworld-io_300x250_2").classList.add("div-" + n);
                                        var e = c.g("cpmstarx"),
                                            o = t.document.getElementsByClassName("div-" + n),
                                            r = o.length - 1,
                                            f = o[r];
                                        const a = {};
                                        a[c.g("kind")] = "asynctagfetch", a[c.g("el")] = f, a[c.g("pid")] = n, a[c.g("pindex")] = r, t[e] = t[e] || {}, (t[e][c.g("libcmd")] = t[e][c.g("libcmd")] || []).push(a)
                                    }(),
                                    function () {
                                        var t = window,
                                            n = 86183;
                                        document.getElementById("lostworld-io_970x250").classList.add("div-" + n);
                                        var e = c.g("cpmstarx"),
                                            o = t.document.getElementsByClassName("div-" + n),
                                            r = o.length - 1,
                                            f = o[r];
                                        const a = {};
                                        a[c.g("kind")] = "asynctagfetch", a[c.g("el")] = f, a[c.g("pid")] = n, a[c.g("pindex")] = r, t[e] = t[e] || {}, (t[e][c.g("libcmd")] = t[e][c.g("libcmd")] || []).push(a)
                                    }()
                            } catch (t) {
                                console.log(t)
                            }
                        }

                        function l() {
                            t.dy()
                        }

                        function d() {
                            try {
                                const t = {};
                                t[c.g("kind")] = "adcmd", t[c.g("command")] = "refresh", t[c.g("module")] = "POOL 86183", cpmstarAPI(t);
                                const n = {};
                                n[c.g("kind")] = "adcmd", n[c.g("command")] = "refresh", n[c.g("module")] = "POOL 86185", cpmstarAPI(n);
                                const e = {};
                                e[c.g("kind")] = "adcmd", e[c.g("command")] = "refresh", e[c.g("module")] = "POOL 86200", cpmstarAPI(e), console.log("Refresh")
                            } catch (t) {}
                        }

                        function u(t) {
                            n = t, n.h()
                        }

                        function g() {
                            try {
                                if (![]);
                                else return __MUTATEQOQ(), 0
                            } catch (t) {
                                return __MUTATEQOQ(), 0
                            }
                        }
                        return {
                            n: s,
                            refresh: d,
                            o: l,
                            p: g,
                            q: u
                        }
                    }();
                    try {
                        t.exports = c
                    } catch (t) {}
                },
                6541: function (t) {
                    t.exports = {
                        ab: 0,
                        aa: 1,
                        ac: 2,
                        fk: 3,
                        ad: 4,
                        fl: 5,
                        Z: 6,
                        X: 7,
                        a0: 8,
                        Y: 9,
                        as: 10,
                        aw: 11,
                        aB: 12,
                        aE: 13,
                        e2: 14,
                        aM: 15,
                        aO: 16,
                        aR: 17,
                        aU: 18,
                        e3: 19,
                        aW: 20,
                        e4: 21,
                        b3: 22,
                        b5: 23,
                        b8: 24,
                        b6: 25,
                        bb: 26,
                        bf: 27,
                        bn: 28,
                        bq: 29,
                        bE: 30,
                        bP: 31,
                        bS: 32,
                        bU: 33,
                        bW: 34,
                        c6: 35,
                        bY: 36,
                        c0: 37,
                        c2: 38,
                        c4: 39,
                        ca: 40,
                        cb: 41,
                        cd: 42,
                        ce: 43,
                        cf: 44,
                        ch: 45,
                        cj: 46,
                        cl: 47,
                        cn: 48,
                        cv: 49,
                        cI: 50,
                        cJ: 51,
                        fm: 52,
                        fn: 53,
                        fo: 54,
                        fp: 55,
                        cY: 56,
                        cZ: 57
                    }
                },
                9176: function (t) {
                    t.exports = {
                        d3: 0,
                        fq: 1,
                        fr: 2,
                        fs: 3
                    }
                },
                9534: function (t) {
                    t.exports = {
                        bR: 0,
                        cE: 1,
                        cD: 2
                    }
                },
                9428: function (t, n, e) {
                    const o = e(2042),
                        c = e(6541),
                        r = e(6466),
                        f = e(7385),
                        a = e(3141),
                        items = [];
                    items[c.ab] = {
                        i: c.ab,
                        ft: c.cj,
                        fu: a.V,
                        fv: r.af,
                        d5: r.ab,
                        d8: "Tool Hammer",
                        description: "Gather materials",
                        range: 80,
                        fw: 0,
                        fx: 25,
                        reload: 300,
                        fy: 30,
                        fz: 200,
                        fA: 0,
                        fB: 0,
                        fC: -3.5,
                        d7: 1
                    }, items[c.cj] = {
                        i: c.cj,
                        ft: c.cl,
                        fu: a.fD,
                        fv: r.ck,
                        d5: r.cj,
                        d8: "Gold Tool Hammer",
                        description: "Gather materials",
                        range: 80,
                        fw: 0,
                        fx: 32,
                        reload: 300,
                        fy: 30,
                        fz: 200,
                        fA: 0,
                        fB: 0,
                        fC: -3.5,
                        d7: 1
                    }, items[c.cl] = {
                        i: c.cl,
                        ft: c.cn,
                        fu: a.fE,
                        fv: r.cm,
                        d5: r.cl,
                        d8: "Diamond Tool Hammer",
                        description: "Gather materials",
                        range: 80,
                        fw: 0,
                        fx: 38,
                        reload: 300,
                        fy: 30,
                        fz: 200,
                        fA: 0,
                        fB: 0,
                        fC: -3.5,
                        d7: 1
                    }, items[c.cn] = {
                        i: c.cn,
                        fv: r.co,
                        d5: r.cn,
                        d8: "Ruby Tool Hammer",
                        description: "Gather materials",
                        range: 80,
                        fw: 0,
                        fx: 41,
                        reload: 300,
                        fy: 30,
                        fz: 200,
                        fA: 0,
                        fB: 0,
                        fC: -3.5,
                        d7: 1
                    }, items[c.aa] = {
                        i: c.aa,
                        fF: f.d3,
                        fG: f.fH,
                        fv: r.ae,
                        d5: r.aa,
                        d8: "Stone Sword",
                        description: "Sharp and pointy",
                        range: 135,
                        fz: 250,
                        fw: 0,
                        fx: 35,
                        reload: 300,
                        fI: .85,
                        fA: 0,
                        fB: 0,
                        fC: -8,
                        d7: -4
                    }, items[c.fp] = {
                        i: c.fp,
                        fF: f.d3,
                        fG: f.fJ,
                        fv: r.cS,
                        d5: r.cW,
                        d8: "Ruby Dagger",
                        description: "A stubbier sword",
                        range: 80,
                        fz: 100,
                        fw: 0,
                        fx: 29,
                        reload: 150,
                        fA: 0,
                        fB: 0,
                        fC: 10,
                        d7: 20
                    }, items[c.fo] = {
                        ft: c.fp,
                        fu: a.fE,
                        i: c.fo,
                        fF: f.d3,
                        fG: f.fJ,
                        fv: r.cR,
                        d5: r.cV,
                        d8: "Diamond Dagger",
                        description: "A stubbier sword",
                        range: 80,
                        fz: 100,
                        fw: 0,
                        damage: 26,
                        reload: 150,
                        fA: 0,
                        fB: 0,
                        fC: 10,
                        d7: 20
                    }, items[c.fn] = {
                        ft: c.fo,
                        fu: a.fD,
                        i: c.fn,
                        fF: f.d3,
                        fG: f.fJ,
                        fv: r.cQ,
                        d5: r.cU,
                        d8: "Gold Dagger",
                        description: "A stubbier sword",
                        range: 80,
                        fz: 100,
                        fw: 0,
                        damage: 24,
                        reload: 150,
                        fA: 0,
                        fB: 0,
                        fC: 10,
                        d7: 20
                    }, items[c.fm] = {
                        ft: c.fn,
                        fu: a.V,
                        i: c.fm,
                        fF: f.d3,
                        fG: f.fJ,
                        fv: r.cP,
                        d5: r.cT,
                        d8: "Stone Dagger",
                        description: "A stubbier sword",
                        range: 80,
                        fz: 100,
                        fw: 0,
                        damage: 22,
                        reload: 150,
                        fA: 0,
                        fB: 0,
                        fC: 10,
                        d7: 20
                    }, items[c.aR] = {
                        i: c.aR,
                        ft: c.c0,
                        fu: a.V,
                        fF: f.fH,
                        fG: f.fH,
                        fv: r.aS,
                        d5: r.aR,
                        d8: "Katana",
                        description: "Excellent melee weapon",
                        range: 140,
                        fz: 150,
                        fw: 0,
                        damage: 40,
                        reload: 300,
                        fI: .85,
                        fA: 0,
                        fB: 0,
                        fC: 1,
                        d7: 3
                    }, items[c.c0] = {
                        i: c.c0,
                        ft: c.bY,
                        fu: a.fD,
                        fF: f.fH,
                        fG: f.fH,
                        fv: r.c1,
                        d5: r.c0,
                        d8: "Gold Katana",
                        description: "Excellent melee weapon",
                        range: 140,
                        damage: 150,
                        fw: 0,
                        fx: 43,
                        reload: 300,
                        fI: .85,
                        fA: 0,
                        fB: 0,
                        fC: 1,
                        d7: 3
                    }, items[c.bY] = {
                        i: c.bY,
                        ft: c.ca,
                        fu: a.fE,
                        fF: f.fH,
                        fG: f.fH,
                        fv: r.bZ,
                        d5: r.bY,
                        d8: "Diamond Katana",
                        description: "Excellent melee weapon",
                        range: 140,
                        fz: 150,
                        fw: 0,
                        damage: 46.5,
                        reload: 300,
                        fI: .85,
                        fA: 0,
                        fB: 0,
                        fC: 1,
                        d7: 3
                    }, items[c.ca] = {
                        i: c.ca,
                        fF: f.fH,
                        fG: f.fH,
                        fv: r.c9,
                        d5: r.ca,
                        d8: "Chillrend",
                        description: "A powerful force flows through this blade.",
                        range: 140,
                        fz: 150,
                        fw: 0,
                        fx: 48.5,
                        reload: 300,
                        fI: .9,
                        fA: 0,
                        fB: 0,
                        fC: 1,
                        d7: 3
                    }, items[c.cZ] = {
                        i: c.cZ,
                        fF: f.fH,
                        fG: f.fH,
                        fv: r.cZ,
                        d5: r.cZ,
                        d8: "Daedric Scythe",
                        description: "Whispers fill the air",
                        range: 160,
                        fz: 150,
                        fw: 0,
                        fx: 52,
                        reload: 450,
                        fI: .85,
                        fA: 0,
                        fB: 0,
                        fC: -5,
                        d7: 20
                    }, items[c.aE] = {
                        i: c.aE,
                        ft: c.cb,
                        fu: a.V,
                        fF: f.d3,
                        fG: f.aE,
                        fv: r.aF,
                        d5: r.aE,
                        d8: "Stick",
                        description: "Gathers resources quickly",
                        range: 100,
                        fw: 0,
                        fx: 1,
                        reload: 400,
                        fA: 0,
                        fz: 60,
                        fB: 0,
                        fC: 4,
                        d7: 0,
                        fK: 7,
                        fL: 7,
                        fM: 7,
                        fN: 4
                    }, items[c.cb] = {
                        i: c.cb,
                        ft: c.cd,
                        fu: a.fD,
                        fF: f.d3,
                        fG: f.aE,
                        fv: r.cc,
                        d5: r.cb,
                        d8: "Gold Stick",
                        description: "Gathers resources quickly",
                        range: 100,
                        fw: 0,
                        fx: 1,
                        reload: 400,
                        fA: 0,
                        fz: 60,
                        fB: 0,
                        fC: 4,
                        d7: 0,
                        fK: 8,
                        fL: 8,
                        fM: 8,
                        fN: 5
                    }, items[c.cd] = {
                        i: c.cd,
                        ft: c.ce,
                        fu: a.fE,
                        fF: f.d3,
                        fG: f.aE,
                        fv: r.ct,
                        d5: r.cd,
                        d8: "Diamond Stick",
                        description: "Gathers resources quickly",
                        range: 100,
                        fw: 0,
                        fx: 1,
                        reload: 400,
                        fA: 0,
                        fz: 60,
                        fB: 0,
                        fC: 4,
                        d7: 0,
                        fK: 9,
                        fL: 9,
                        fM: 9,
                        fN: 6
                    }, items[c.ce] = {
                        i: c.ce,
                        fF: f.d3,
                        fG: f.aE,
                        fv: r.cu,
                        d5: r.ce,
                        d8: "Ruby Stick",
                        description: "Gathers resources quickly",
                        range: 100,
                        fw: 0,
                        fx: 1,
                        reload: 400,
                        fA: 0,
                        fz: 60,
                        fB: 0,
                        fC: 4,
                        d7: 0,
                        fK: 10,
                        fL: 10,
                        fM: 10,
                        fN: 7
                    }, items[c.ac] = {
                        i: c.ac,
                        ft: c.c4,
                        fu: a.V,
                        fF: f.d3,
                        fG: f.fO,
                        fv: r.ah,
                        d5: r.ac,
                        d8: "Stone Spear",
                        description: "Long melee range",
                        range: 160,
                        fw: 0,
                        fx: 49,
                        fI: .81,
                        fz: 450,
                        reload: 700,
                        fA: 0,
                        fB: 0,
                        fC: 0,
                        d7: 2
                    }, items[c.c2] = {
                        i: c.c2,
                        fF: f.d3,
                        fG: f.fO,
                        fv: r.c3,
                        d5: r.c2,
                        d8: "Diamond Spear",
                        description: "Long melee range",
                        range: 160,
                        fw: 0,
                        fx: 53,
                        fI: .81,
                        fz: 450,
                        reload: 700,
                        fA: 0,
                        fB: 0,
                        fC: 0,
                        d7: 2
                    }, items[c.c4] = {
                        i: c.c4,
                        ft: c.c2,
                        fu: a.fD,
                        fF: f.d3,
                        fG: f.fO,
                        fv: r.c5,
                        d5: r.c4,
                        d8: "Gold Spear",
                        description: "Long melee range",
                        range: 160,
                        fw: 0,
                        fx: 51,
                        fI: .81,
                        fz: 450,
                        reload: 700,
                        fA: 0,
                        fB: 0,
                        fC: 0,
                        d7: 2
                    }, items[c.bn] = {
                        i: c.bn,
                        ft: c.ch,
                        fu: a.V,
                        fF: f.fO,
                        fG: f.fO,
                        fv: r.bo,
                        d5: r.bn,
                        d8: "Naginata",
                        description: "Long melee range",
                        range: 165,
                        fw: 0,
                        fx: 52,
                        fI: .81,
                        fz: 470,
                        reload: 700,
                        fA: 0,
                        fB: 0,
                        fC: 0,
                        d7: -4
                    }, items[c.ch] = {
                        i: c.ch,
                        ft: c.cf,
                        fu: a.fD,
                        fF: f.fO,
                        fG: f.fO,
                        fv: r.ci,
                        d5: r.ch,
                        d8: "Gold Naginata",
                        description: "Long melee range",
                        range: 165,
                        fw: 0,
                        fx: 54,
                        fI: .81,
                        fz: 470,
                        reload: 700,
                        fA: 0,
                        fB: 0,
                        fC: 0,
                        d7: -4
                    }, items[c.cf] = {
                        i: c.cf,
                        fF: f.fO,
                        fG: f.fO,
                        fv: r.cg,
                        d5: r.cf,
                        d8: "Diamond Naginata",
                        description: "Long melee range",
                        range: 165,
                        fw: 0,
                        fx: 56,
                        fI: .81,
                        fz: 470,
                        reload: 700,
                        fA: 0,
                        fB: 0,
                        fC: 0,
                        d7: -4
                    }, items[c.bP] = {
                        i: c.bP,
                        fF: f.d3,
                        fG: f.bP,
                        fv: r.bQ,
                        d5: r.bP,
                        d8: "Bat",
                        description: "Hit enemies for a home run",
                        range: 115,
                        fw: 0,
                        fx: 28,
                        fI: .92,
                        fz: 870,
                        reload: 700,
                        fA: 0,
                        fB: 0,
                        fC: 10,
                        d7: 2
                    }, items[c.cY] = {
                        i: c.cY,
                        ft: c.cZ,
                        fu: a.fD,
                        fF: f.d3,
                        fG: f.d3,
                        fv: r.cY,
                        d5: r.cY,
                        d8: "Secret Item",
                        description: "Dont leak how to get it :)",
                        range: 115,
                        fw: 0,
                        fx: 28,
                        fI: .92,
                        fz: 1570,
                        reload: 2e3,
                        fA: 0,
                        fB: 0,
                        fC: 40,
                        d7: 40
                    }, items[c.aM] = {
                        i: c.aM,
                        fF: f.d3,
                        fG: f.d3,
                        fv: r.aN,
                        d5: r.aM,
                        d8: "Hammer",
                        description: "Breaks structures faster",
                        range: 80,
                        fw: 1,
                        fx: 12,
                        fy: 76,
                        fI: .89,
                        fz: 200,
                        reload: 400,
                        fA: 0,
                        fB: 0,
                        fC: 5,
                        d7: 2
                    }, items[c.fk] = {
                        i: c.fk,
                        ft: c.bU,
                        fu: a.V,
                        fF: f.d3,
                        fG: f.fP,
                        fv: r.ai,
                        d5: r.al,
                        d8: "Stone Axe",
                        description: "Gathers materials faster",
                        range: 90,
                        fw: 0,
                        fx: 30,
                        fz: 250,
                        reload: 400,
                        fA: 0,
                        fB: 0,
                        fC: -2,
                        d7: 2,
                        fK: 2,
                        fL: 2,
                        fM: 2,
                        fN: 2
                    }, items[c.bU] = {
                        i: c.bU,
                        ft: c.bS,
                        fu: a.fD,
                        fF: f.d3,
                        fG: f.fP,
                        fv: r.bV,
                        d5: r.bU,
                        d8: "Gold Axe",
                        description: "Gathers materials faster",
                        range: 90,
                        fw: 0,
                        fx: 33,
                        fz: 250,
                        reload: 400,
                        fA: 0,
                        fB: 0,
                        fC: -2,
                        d7: 2,
                        fK: 2,
                        fL: 2,
                        fM: 2,
                        fN: 2
                    }, items[c.bS] = {
                        i: c.bS,
                        fF: f.d3,
                        fG: f.fP,
                        fv: r.bT,
                        d5: r.bS,
                        d8: "Diamond Axe",
                        description: "Gathers materials faster",
                        range: 90,
                        fw: 0,
                        fx: 35.5,
                        fz: 250,
                        reload: 400,
                        fA: 0,
                        fB: 0,
                        fC: -2,
                        d7: 2,
                        fK: 2,
                        fL: 2,
                        fM: 2,
                        fN: 2
                    }, items[c.bE] = {
                        i: c.bE,
                        ft: c.c6,
                        fu: a.V,
                        fF: f.fP,
                        fG: f.fP,
                        fv: r.bF,
                        d5: r.bE,
                        d8: "Great Axe",
                        description: "More powerful axe.",
                        range: 94,
                        fw: 0,
                        fx: 37,
                        fz: 250,
                        reload: 400,
                        fA: 0,
                        fB: 0,
                        fC: 4,
                        d7: 2,
                        fK: 4,
                        fL: 4,
                        fM: 4,
                        fN: 2
                    }, items[c.c6] = {
                        i: c.c6,
                        ft: c.bW,
                        fu: a.fD,
                        fF: f.fP,
                        fG: f.fP,
                        fv: r.c7,
                        d5: r.c6,
                        d8: "Gold Great Axe",
                        description: "More powerful axe.",
                        range: 94,
                        fw: 0,
                        fx: 40,
                        fz: 250,
                        reload: 400,
                        fA: 0,
                        fB: 0,
                        fC: 4,
                        d7: 2,
                        fK: 4,
                        fL: 4,
                        fM: 4,
                        fN: 2
                    }, items[c.bW] = {
                        i: c.bW,
                        fF: f.fP,
                        fG: f.fP,
                        fv: r.bX,
                        d5: r.bW,
                        d8: "Diamond Great Axe",
                        description: "More powerful axe.",
                        range: 94,
                        fw: 0,
                        fx: 47,
                        fz: 250,
                        reload: 400,
                        fA: 0,
                        fB: 0,
                        fC: 4,
                        d7: 2,
                        fK: 4,
                        fL: 4,
                        fM: 4,
                        fN: 2
                    }, items[c.ad] = {
                        i: c.ad,
                        d6: [0, 0, 10, 0],
                        fF: f.bb,
                        fQ: f.fH,
                        fG: f.ad,
                        fv: r.ag,
                        d5: r.ad,
                        d8: "Stone Musket",
                        description: "Deal Long Range Damage",
                        range: 1e3,
                        fw: 1,
                        fx: 49,
                        reload: 1500,
                        fR: r.a2,
                        fS: 1500,
                        fA: 1,
                        fB: 1,
                        fI: .63,
                        fC: 0,
                        d7: 0
                    }, items[c.bb] = {
                        i: c.bb,
                        d6: [0, 4, 0, 0],
                        fF: f.d3,
                        fG: f.bb,
                        fv: r.ba,
                        d5: r.bb,
                        d8: "Bow",
                        description: "Deal Long Range Damage",
                        range: 800,
                        fw: 1,
                        fx: 25,
                        reload: 600,
                        fR: r.bc,
                        fS: 1200,
                        fA: 1,
                        fB: 1,
                        fI: .75,
                        fC: 0,
                        d7: 35
                    }, items[c.cI] = {
                        i: c.cI,
                        d6: [80, 80, 80, 80],
                        fF: f.d3,
                        fG: f.aw,
                        fv: r.cI,
                        d5: r.cI,
                        d8: "Pearl",
                        description: "Teleport on impact",
                        range: 700,
                        fw: 1,
                        fx: 10,
                        reload: 1e4,
                        fR: r.cI,
                        fS: 1e3,
                        fA: 1,
                        fB: 1,
                        fI: .4,
                        fC: 0,
                        d7: 35
                    }, items[c.bf] = {
                        i: c.bf,
                        d6: [0, 10, 0, 0],
                        fF: f.bb,
                        fG: f.bb | f.aE | f.fP,
                        fv: r.be,
                        d5: r.bf,
                        d8: "XBow",
                        description: "Rapid fire bow",
                        range: 800,
                        fw: 1,
                        fx: 27,
                        reload: 235,
                        fR: r.bc,
                        fS: 1200,
                        fA: 1,
                        fB: 1,
                        fI: .35,
                        fC: 0,
                        d7: 30
                    }, items[c.fl] = {
                        i: c.fl,
                        d6: [0, 10, 0, 0],
                        fv: r.aj,
                        d5: r.br,
                        d8: "Wood Wall",
                        description: "A sturdy wall",
                        fw: 3,
                        fA: 2,
                        fT: 5,
                        fC: 0,
                        d7: 15,
                        fU: o.W,
                        fB: 2
                    }, items[c.cJ] = {
                        i: c.cJ,
                        d6: [0, 50, 50, 0],
                        fF: f.fP | f.aE | f.bP,
                        fG: f.d3,
                        fv: r.cJ,
                        d5: r.cJ,
                        d8: "Teleporter",
                        description: "Teleports to location on map",
                        fw: 9,
                        fA: 2,
                        fT: 5,
                        fC: 0,
                        d7: 15,
                        fU: o.cJ,
                        fB: 2
                    }, items[c.bq] = {
                        i: c.bq,
                        d6: [0, 0, 35, 10],
                        fF: f.d3,
                        fG: f.d3,
                        fv: r.bp,
                        d5: r.bt,
                        d8: "Castle Wall",
                        description: "A very sturdy wall",
                        fw: 3,
                        fA: 2,
                        fT: 8,
                        fC: 0,
                        d7: 13,
                        fU: o.bq,
                        fB: 2
                    }, items[c.e4] = {
                        i: c.e4,
                        d6: [0, 200, 150, 10],
                        fF: f.d3,
                        fG: f.d3,
                        fv: r.b1,
                        d5: r.aY,
                        d8: "Turret",
                        description: "Defence for your base",
                        fw: 10,
                        fA: 2,
                        fT: 6,
                        fC: 0,
                        d7: 25,
                        fU: o.e4,
                        fB: 2
                    }, items[c.aO] = {
                        i: c.aO,
                        fF: f.d3,
                        fG: f.d3,
                        d6: [0, 200, 200, 200],
                        fv: r.aP,
                        d5: r.bD,
                        d8: "Cosy Bed",
                        description: "Respawn at the bed",
                        fw: 9,
                        fA: 2,
                        fT: 8,
                        fC: 0,
                        d7: 25,
                        fU: o.aO,
                        fB: 2
                    }, items[c.e2] = {
                        i: c.e2,
                        d6: [0, 50, 10, 0],
                        fv: r.aH,
                        d5: r.aL,
                        d8: "Windmill",
                        description: "Generates score over time",
                        fw: 5,
                        fA: 2,
                        fT: -5,
                        fC: 0,
                        d7: 38,
                        fU: o.e2,
                        fB: 2
                    }, items[c.e3] = {
                        i: c.e3,
                        d6: [0, 100, 50, 0],
                        fF: f.d3,
                        fG: f.d3,
                        fv: r.aH,
                        d5: r.aL,
                        d8: "Powermill",
                        description: "Generates more score over time",
                        fw: 5,
                        fA: 2,
                        fT: 5,
                        fC: 0,
                        d7: 38,
                        fU: o.e3,
                        fB: 2
                    }, items[c.X] = {
                        i: c.X,
                        d6: [0, 20, 5, 0],
                        fv: r.an,
                        d5: r.bs,
                        d8: "Spike",
                        description: "Sharp defence",
                        fw: 4,
                        fA: 2,
                        fT: 2,
                        fC: 0,
                        d7: 15,
                        fU: o.X,
                        fB: 2
                    }, items[c.aW] = {
                        i: c.aW,
                        fF: f.d3,
                        fG: f.d3,
                        d6: [0, 30, 10, 0],
                        fv: r.aX,
                        d5: r.bA,
                        d8: "Hard Spike",
                        description: "Sharper defence",
                        fw: 4,
                        fA: 2,
                        fT: 2,
                        fC: 0,
                        d7: 15,
                        fU: o.aW,
                        fB: 2
                    }, items[c.b3] = {
                        i: c.b3,
                        fF: f.d3,
                        fG: f.d3,
                        d6: [0, 200, 0, 0],
                        fv: r.b2,
                        d5: r.by,
                        d8: "Cherry wood farm",
                        description: "Used for decoration and wood",
                        fw: 6,
                        fA: 2,
                        fT: 3,
                        fC: 0,
                        d7: 47,
                        fU: o.b3,
                        fB: 2
                    }, items[c.b5] = {
                        i: c.b5,
                        fF: f.d3,
                        fG: f.d3,
                        d6: [0, 200, 0, 0],
                        fv: r.b4,
                        d5: r.bz,
                        d8: "Wood farm",
                        description: "Used for decoration and wood",
                        fw: 6,
                        fA: 2,
                        fT: 3,
                        fC: 0,
                        d7: 47,
                        fU: o.b5,
                        fB: 2
                    }, items[c.b6] = {
                        i: c.b6,
                        fF: f.d3,
                        fG: f.d3,
                        d6: [0, 0, 200, 0],
                        fv: r.b7,
                        d5: r.bw,
                        d8: "Stone farm",
                        description: "Used for decoration and stone",
                        fw: 6,
                        fA: 2,
                        fT: 3,
                        fC: 0,
                        d7: 20,
                        fU: o.b6,
                        fB: 2
                    }, items[c.b8] = {
                        i: c.b8,
                        fF: f.d3,
                        fG: f.d3,
                        d6: [200, 0, 0, 0],
                        fv: r.b9,
                        d5: r.bx,
                        d8: "Berry farm",
                        description: "Used for decoration and berries",
                        fw: 6,
                        fA: 2,
                        fT: 3,
                        fC: 0,
                        d7: 17,
                        fU: o.U,
                        fB: 2
                    }, items[c.aU] = {
                        i: c.aU,
                        d6: [0, 30, 30, 0],
                        fF: f.fP | f.aE,
                        fG: f.d3,
                        fv: r.aT,
                        d5: r.bB,
                        d8: "Castle Spike",
                        description: "Great for bases",
                        fw: 4,
                        fA: 2,
                        fT: -8,
                        fC: 0,
                        d7: 14,
                        fU: o.aU,
                        fB: 2
                    }, items[c.Z] = {
                        i: c.Z,
                        d6: [0, 5, 20, 0],
                        fF: f.d3,
                        fG: f.Z,
                        fv: r.am,
                        d5: r.bu,
                        d8: "Boost",
                        description: "Provides a thrust",
                        fw: 7,
                        fA: 2,
                        fT: -5,
                        fC: 0,
                        d7: 3,
                        fU: o.Z,
                        fB: 2
                    }, items[c.Y] = {
                        i: c.Y,
                        d6: [0, 30, 30, 0],
                        fF: f.d3,
                        fG: f.Y,
                        fv: r.ap,
                        d5: r.bv,
                        d8: "Trap",
                        description: "Snared enemies are stuck",
                        fw: 7,
                        fA: 2,
                        fT: 2,
                        fC: 0,
                        d7: 26,
                        fU: o.Y,
                        fB: 2
                    }, items[c.a0] = {
                        i: c.a0,
                        d6: [0, 20, 0, 0],
                        fF: f.d3,
                        fG: f.a0,
                        fv: r.ao,
                        d5: r.bC,
                        d8: "Platform",
                        description: "Shoot over structures",
                        fw: 8,
                        fA: 2,
                        fT: -2,
                        fC: 0,
                        d7: 8,
                        fU: o.a0,
                        fB: 2
                    }, items[c.cv] = {
                        i: c.cv,
                        d6: [0, 20, 0, 0],
                        fF: f.d3,
                        fG: f.a0,
                        fv: r.cw,
                        d5: r.cv,
                        d8: "Roof",
                        description: "Take cover from projectiles",
                        fw: 8,
                        fA: 2,
                        fT: 0,
                        fC: 0,
                        d7: 15,
                        fU: o.cv,
                        fB: 2
                    }, items[c.as] = {
                        i: c.as,
                        d6: [10, 0, 0, 0],
                        fv: r.at,
                        d5: r.as,
                        d8: "Apple",
                        description: "Heals you",
                        fw: 2,
                        fA: 3,
                        fV: 20,
                        fC: 0,
                        d7: 22,
                        fB: 2
                    }, items[c.aB] = {
                        i: c.aB,
                        d6: [15, 0, 0, 0],
                        fF: f.d3,
                        fG: f.fW,
                        fv: r.aC,
                        d5: r.aB,
                        d8: "Cookie",
                        description: "Heals you",
                        fw: 2,
                        fA: 3,
                        fV: 35,
                        fC: 0,
                        d7: 22,
                        fB: 2
                    }, items[c.aw] = {
                        i: c.aw,
                        fF: f.d3,
                        fG: f.aw,
                        fv: r.ax,
                        d5: r.aw,
                        d8: "Shield",
                        description: "Reduces damage",
                        fw: 1,
                        fA: 0,
                        fI: .7,
                        shield: .75,
                        range: 55,
                        fz: 350,
                        fx: 15,
                        fy: 40,
                        reload: 500,
                        fC: -15,
                        d7: 10,
                        fB: 3
                    }, t.exports = items
                },
                2802: function (t) {
                    const n = function () {
                        const t = {};

                        function n() {
                            this.fX = 1, this.fY = this.width / 2, this.fZ = this.height / 2, this.onload = null, this.onerror = null
                        }

                        function e() {
                            this.fX = 0
                        }

                        function o(n, e) {
                            const i = t[n];
                            if (void 0 !== i) return i;
                            return t[n] = {
                                src: n,
                                img: void 0 === e ? {
                                    fX: 0
                                } : e
                            }, t[n]
                        }

                        function c(t, o) {
                            if (void 0 !== o && 2 === o.fX) return o;
                            return (o = new Image).fX = 2, o.onload = n, o.onerror = e, o.src = t, o
                        }
                        return {
                            g0: o,
                            g1: c,
                            g2: t
                        }
                    }();
                    try {
                        t.exports = n
                    } catch (t) {}
                },
                2760: function (t) {
                    function n(t) {
                        for (var n, e = "0123456789ABCDEF", o = "", c = 0; c < t.length; c++) n = t.charCodeAt(c), o += e.charAt(n >>> 4 & 15) + e.charAt(15 & n);
                        return o
                    }

                    function e(t) {
                        for (var n = Array(t.length >> 2), e = 0; e < n.length; e++) n[e] = 0;
                        for (e = 0; e < 8 * t.length; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                        return n
                    }

                    function o(t) {
                        for (var n = "", e = 0; e < 32 * t.length; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
                        return n
                    }

                    function c(t, n) {
                        t[n >> 5] |= 128 << n % 32, t[14 + (n + 64 >>> 9 << 4)] = n;
                        for (var e = 1732584193, o = -271733879, c = -1732584194, r = 271733878, u = 0; u < t.length; u += 16) {
                            var g = e,
                                h = o,
                                k = c,
                                b = r;
                            o = l(o = l(o = l(o = l(o = s(o = s(o = s(o = s(o = a(o = a(o = a(o = a(o = f(o = f(o = f(o = f(o, c = f(c, r = f(r, e = f(e, o, c, r, t[u + 0], 7, -680876936), o, c, t[u + 1], 12, -389564586), e, o, t[u + 2], 17, 606105819), r, e, t[u + 3], 22, -1044525330), c = f(c, r = f(r, e = f(e, o, c, r, t[u + 4], 7, -176418897), o, c, t[u + 5], 12, 1200080426), e, o, t[u + 6], 17, -1473231341), r, e, t[u + 7], 22, -45705983), c = f(c, r = f(r, e = f(e, o, c, r, t[u + 8], 7, 1770035416), o, c, t[u + 9], 12, -1958414417), e, o, t[u + 10], 17, -42063), r, e, t[u + 11], 22, -1990404162), c = f(c, r = f(r, e = f(e, o, c, r, t[u + 12], 7, 1804603682), o, c, t[u + 13], 12, -40341101), e, o, t[u + 14], 17, -1502002290), r, e, t[u + 15], 22, 1236535329), c = a(c, r = a(r, e = a(e, o, c, r, t[u + 1], 5, -165796510), o, c, t[u + 6], 9, -1069501632), e, o, t[u + 11], 14, 643717713), r, e, t[u + 0], 20, -373897302), c = a(c, r = a(r, e = a(e, o, c, r, t[u + 5], 5, -701558691), o, c, t[u + 10], 9, 38016083), e, o, t[u + 15], 14, -660478335), r, e, t[u + 4], 20, -405537848), c = a(c, r = a(r, e = a(e, o, c, r, t[u + 9], 5, 568446438), o, c, t[u + 14], 9, -1019803690), e, o, t[u + 3], 14, -187363961), r, e, t[u + 8], 20, 1163531501), c = a(c, r = a(r, e = a(e, o, c, r, t[u + 13], 5, -1444681467), o, c, t[u + 2], 9, -51403784), e, o, t[u + 7], 14, 1735328473), r, e, t[u + 12], 20, -1926607734), c = s(c, r = s(r, e = s(e, o, c, r, t[u + 5], 4, -378558), o, c, t[u + 8], 11, -2022574463), e, o, t[u + 11], 16, 1839030562), r, e, t[u + 14], 23, -35309556), c = s(c, r = s(r, e = s(e, o, c, r, t[u + 1], 4, -1530992060), o, c, t[u + 4], 11, 1272893353), e, o, t[u + 7], 16, -155497632), r, e, t[u + 10], 23, -1094730640), c = s(c, r = s(r, e = s(e, o, c, r, t[u + 13], 4, 681279174), o, c, t[u + 0], 11, -358537222), e, o, t[u + 3], 16, -722521979), r, e, t[u + 6], 23, 76029189), c = s(c, r = s(r, e = s(e, o, c, r, t[u + 9], 4, -640364487), o, c, t[u + 12], 11, -421815835), e, o, t[u + 15], 16, 530742520), r, e, t[u + 2], 23, -995338651), c = l(c, r = l(r, e = l(e, o, c, r, t[u + 0], 6, -198630844), o, c, t[u + 7], 10, 1126891415), e, o, t[u + 14], 15, -1416354905), r, e, t[u + 5], 21, -57434055), c = l(c, r = l(r, e = l(e, o, c, r, t[u + 12], 6, 1700485571), o, c, t[u + 3], 10, -1894986606), e, o, t[u + 10], 15, -1051523), r, e, t[u + 1], 21, -2054922799), c = l(c, r = l(r, e = l(e, o, c, r, t[u + 8], 6, 1873313359), o, c, t[u + 15], 10, -30611744), e, o, t[u + 6], 15, -1560198380), r, e, t[u + 13], 21, 1309151649), c = l(c, r = l(r, e = l(e, o, c, r, t[u + 4], 6, -145523070), o, c, t[u + 11], 10, -1120210379), e, o, t[u + 2], 15, 718787259), r, e, t[u + 9], 21, -343485551), e = d(e, g), o = d(o, h), c = d(c, k), r = d(r, b)
                        }
                        return Array(e, o, c, r)
                    }

                    function r(t, n, e, i, o, c) {
                        return d(u(d(d(n, t), d(i, c)), o), e)
                    }

                    function f(t, n, e, i, o, c, f) {
                        return r(n & e | ~n & i, t, n, o, c, f)
                    }

                    function a(t, n, e, i, o, c, f) {
                        return r(n & i | e & ~i, t, n, o, c, f)
                    }

                    function s(t, n, e, i, o, c, f) {
                        return r(n ^ e ^ i, t, n, o, c, f)
                    }

                    function l(t, n, e, i, o, c, f) {
                        return r(e ^ (n | ~i), t, n, o, c, f)
                    }

                    function d(t, n) {
                        var e = (65535 & t) + (65535 & n);
                        return (t >> 16) + (n >> 16) + (e >> 16) << 16 | 65535 & e
                    }

                    function u(t, n) {
                        return t << n | t >>> 32 - n
                    }
                    __MUTATE0 = function (t) {
                        return n(o(c(e(t), 8 * t.length))).toLowerCase()
                    };
                    try {
                        t.exports = __MUTATE0
                    } catch (t) {}
                },
                4073: function (t) {
                    t.exports = {
                        g3: 1,
                        g4: 2,
                        g5: 4,
                        g6: 8,
                        g7: 16,
                        g8: 32
                    }
                },
                3152: function (t, n, e) {
                    const o = e(4073),
                        c = e(3845),
                        r = e(9176),
                        f = e(2042),
                        a = [];
                    a[f.e1] = {
                        g9: 35,
                        ga: 100,
                        gb: r.fq
                    }, a[f.a0] = {
                        g9: 60,
                        ga: 300,
                        gb: r.fq
                    }, a[f.cv] = {
                        g9: 50,
                        ga: 300,
                        gb: r.fq
                    }, a[f.Z] = {
                        g9: 40,
                        ga: 300,
                        gb: r.fq
                    }, a[f.U] = {
                        g9: 50,
                        gb: r.fq,
                        gc: 1
                    }, a[f.cM] = {
                        g9: 50,
                        gb: r.fq,
                        gc: 5,
                        gd: 20
                    }, a[f.cN] = {
                        g9: 220,
                        gb: r.d3,
                        gc: 5,
                        gd: 1
                    }, a[f.V] = {
                        g9: 76,
                        gb: r.fq,
                        ge: 5
                    }, a[f.O] = {
                        g9: 75,
                        gb: r.fq,
                        gf: 1
                    }, a[f.cy] = {
                        g9: 92,
                        gb: r.fq,
                        gf: 1
                    }, a[f.cF] = {
                        g9: 92,
                        gb: r.fq,
                        gf: 0
                    }, a[f.cG] = {
                        g9: 20,
                        gb: r.fq,
                        gf: 0
                    }, a[f.cz] = {
                        g9: 92,
                        gb: r.fq,
                        gf: 1
                    }, a[f.cA] = {
                        g9: 58,
                        gb: r.fq,
                        gf: 1
                    }, a[f.T] = {
                        g9: 90,
                        gb: r.fq,
                        gg: 1
                    }, a[f.b5] = {
                        g9: 80,
                        gb: r.fq,
                        gg: 1
                    }, a[f.b3] = {
                        g9: 80,
                        gb: r.fq,
                        gg: 1
                    }, a[f.b6] = {
                        g9: 60,
                        gb: r.fq,
                        gf: 1
                    }, a[f.X] = {
                        gd: 20,
                        g9: 45,
                        ga: 375,
                        fx: 20,
                        gb: r.fq
                    }, a[f.aW] = {
                        gd: 35,
                        g9: 45,
                        ga: 500,
                        gb: r.fq
                    }, a[f.aU] = {
                        gd: 5,
                        g9: 42,
                        ga: 1200,
                        fx: 24,
                        gb: r.fq
                    }, a[f.W] = {
                        g9: 45,
                        ga: 380,
                        gb: r.fq
                    }, a[f.cB] = {
                        g9: 45,
                        ga: 380,
                        gb: r.fq,
                        ge: 50,
                        currency: 20
                    }, a[f.bq] = {
                        g9: 59,
                        ga: 1750,
                        gb: r.fq
                    }, a[f.e4] = {
                        g9: 45,
                        ga: 800,
                        gb: r.fq
                    }, a[f.aO] = {
                        g9: 50,
                        ga: 380,
                        gb: r.fq
                    }, a[f.Y] = {
                        g9: 40,
                        ga: 500,
                        gb: r.fq
                    }, a[f.aI] = {
                        g9: 90,
                        ga: 380,
                        gb: r.fq,
                        gh: 1.6,
                        gi: o.g3 | o.g6,
                        gj: c.gk
                    }, a[f.cH] = {
                        g9: 20,
                        ga: 380,
                        gb: r.fq,
                        gh: 1.6,
                        gi: o.g3 | o.g6,
                        gj: c.gk
                    }, a[f.bR] = {
                        g9: 90,
                        ga: 1e3,
                        gb: r.fq,
                        gh: 1.6,
                        gi: o.g3 | o.g7,
                        gd: 19
                    }, a[f.bM] = {
                        g9: 90,
                        ga: 380,
                        gb: r.fq,
                        gh: 1.2,
                        gi: o.g3 | o.g8 | o.g7,
                        gd: 14,
                        gj: c.gl
                    }, a[f.bN] = {
                        g9: 50,
                        ga: 380,
                        gb: r.fq,
                        gh: 1.6,
                        gi: o.g3 | o.g7,
                        gd: 14,
                        gj: c.gk
                    }, a[f.cx] = {
                        g9: 100,
                        ga: 380,
                        gb: r.fq,
                        gh: .4,
                        gi: o.g3,
                        gd: 15,
                        gj: c.gk
                    }, a[f.cD] = {
                        g9: 90,
                        ga: 5e3,
                        gb: r.fq,
                        gh: 1.6,
                        gi: o.g3 | o.g7,
                        gd: 30,
                        gj: c.gm
                    }, a[f.cE] = {
                        g9: 100,
                        ga: 5e3,
                        gb: r.fq,
                        gh: 1.15,
                        gi: o.g3 | o.g7,
                        gd: 30,
                        gj: c.gk
                    }, a[f.ak] = {
                        g9: 40,
                        ga: 4,
                        gb: r.fq
                    }, a[f.e2] = {
                        g9: 45,
                        ga: 400,
                        gb: r.fq
                    }, a[f.e3] = {
                        g9: 54,
                        ga: 400,
                        gb: r.fq
                    }, a[f.cJ] = {
                        g9: 35,
                        ga: 150,
                        gb: r.fq
                    }, t.exports = a
                },
                3845: function (t) {
                    t.exports = {
                        gk: 0,
                        gm: 1,
                        gn: 2,
                        gl: 3,
                        go: 4
                    }
                },
                9968: function (t, n, e) {
                    try {
                        __MUTATEoo = e(2802), __MUTATEQ = e(2057), __MUTATEo = e(3408), __MUTATE0OO = e(3936)
                    } catch (t) {}
                    const o = function () {
                        const t = 186,
                            n = 196,
                            e = t / 2,
                            o = n / 2,
                            c = 18,
                            r = 1.4,
                            s = 3,
                            l = {
                                fh: 0,
                                fi: 1,
                                fj: 2
                            },
                            d = 1,
                            u = 2,
                            g = 1,
                            h = 2,
                            k = [];
                        k[l.fh] = __MUTATE0OO.fh;
                        const b = k[l.fh];
                        k[l.fi] = __MUTATE0OO.fi;
                        const p = k[l.fi];
                        k[l.fj] = __MUTATE0OO.fj;
                        const j = k[l.fj];
                        for (let t = 0; t < b.length; t++) {
                            if (!b[t]) throw "error";
                            b[t][1] = t
                        }
                        for (let t = 0; t < p.length; t++) {
                            if (!p[t]) throw "error";
                            p[t][1] = t
                        }
                        for (let t = 0; t < j.length; t++) {
                            if (!j[t]) throw "error";
                            j[t][1] = t
                        }
                        const m = [];
                        m[l.fh] = "skin", m[l.fi] = "accessory", m[l.fj] = "back";
                        const w = "img/",
                            T = function () {},
                            _ = "-content",
                            v = "nav-",
                            U = "pop-",
                            A = "pop-close-button",
                            E = ["profile", "shop", "game", "skins", "ranking"],
                            Q = ["login", "settings", "changelog", "forgot-password", "faq", "policy", "no-da", "reward-da", "progress-loss", "new-password"];

                        function y(t, n) {
                            if ((n = n || document).getElementById) {
                                const e = n.getElementById(t);
                                if (e) return e
                            }
                            if (n.getElementsByClassName) {
                                const e = n.getElementsByClassName(t);
                                if (e && e[0]) return e[0]
                            }
                            if (n.getElementsByTagName) {
                                const e = n.getElementsByTagName(t);
                                if (e && e[0]) return e[0]
                            }
                            return
                        }
                        const M = [],
                            x = [],
                            B = y("homepage"),
                            S = y("middle-wrap"),
                            I = y("top-wrap-left"),
                            F = y("top-wrap-right"),
                            C = y("bottom-wrap"),
                            R = y("cross-promo"),
                            G = y("pop-ui"),
                            D = y("changelog"),
                            V = y("how-to"),
                            P = y("settings"),
                            N = y("policy"),
                            W = y("new-changelog"),
                            H = y("spectator"),
                            L = y("spectator-close"),
                            q = [y("middle-wrap")],
                            O = y("waiting"),
                            K = y("waiting-text"),
                            z = y("small-waiting"),
                            Z = y("small-waiting-text"),
                            Y = y("landscape"),
                            X = y("skins-middle-main"),
                            J = y("skin-description"),
                            $ = y("skins-category"),
                            tt = y("accessory-category"),
                            nt = y("back-category"),
                            et = y("shop-skins-middle-main"),
                            it = y("shop-skin-description"),
                            ot = y("shop-skins-category"),
                            ct = y("shop-accessory-category"),
                            rt = y("shop-back-category"),
                            ft = y("shop-price"),
                            at = y("shop-can-buy"),
                            st = y("shop-buy"),
                            lt = y("shop-currency-logo"),
                            dt = y("change-server"),
                            ut = y("do-not-change-server"),
                            gt = y("nickname");
                        let ht = "",
                            kt = "",
                            bt = 0,
                            pt = 0,
                            jt = void 0,
                            mt = void 0,
                            wt = 0,
                            Tt = 0,
                            _t = 0,
                            vt = -1,
                            Ut = void 0;

                        function At() {
                            O.classList.add("fade-in")
                        }

                        function Et(t) {
                            wt++, O.classList.remove("fade-in"), O.style.display = "flex", K.innerText = t, setTimeout(At, 0)
                        }

                        function Qt() {
                            if (wt = Math.max(0, wt - 1), wt <= 0) O.style.display = "none"
                        }

                        function yt() {
                            z.classList.add("fade-in")
                        }

                        function Mt(t) {
                            Tt++, z.classList.remove("fade-in"), z.style.display = "flex", Z.innerText = t, setTimeout(yt, 0)
                        }

                        function xt() {
                            if (Tt = Math.max(0, Tt - 1), Tt <= 0) z.style.display = "none"
                        }

                        function Bt(t) {
                            const n = this;
                            x[t] = this, this.d8 = U + t, this.B = y(this.d8), this.style = this.B.style, this.B.addEventListener("click", (function (t) {
                                t.stopPropagation()
                            })), this.hide = function () {
                                G.style.display = "none", n.style.display = "none", mt = void 0
                            }, this.transition = function () {
                                G.classList.add("fade-in"), n.B.classList.add("popup-fade-in")
                            }, this.show = function () {
                                if (void 0 !== mt) return;
                                mt = n, G.classList.remove("fade-in"), n.B.classList.remove("popup-fade-in"), G.style.display = "flex", n.style.display = "flex", setTimeout(n.transition, 50)
                            }, y(A, this.B).addEventListener("click", this.hide)
                        }

                        function St(t) {
                            this.z = T, this.y = T;
                            const n = this;
                            M[t] = this, this.d8 = t + _, this.gp = v + t, this.B = y(this.d8), this.style = this.B.style, this.gq = y(this.gp), this.gr = y("nav-button-text", this.gq), this.hide = function () {
                                n.style.display = "none", n.gr.classList.remove("nav-button-active"), n.gr.classList.add("nav-button-text"), n.y()
                            }, this.transition = function () {
                                n.B.classList.add("fade-in")
                            }, this.show = function () {
                                if (jt === n) return;
                                else if (jt) jt.hide();
                                jt = n, n.B.classList.remove("fade-in"), n.style.display = "flex", n.gr.classList.remove("nav-button-text"), n.gr.classList.add("nav-button-active"), setTimeout(n.transition, 50), n.z()
                            }, this.gq.addEventListener("click", this.show), this.hide()
                        }

                        function It() {
                            let t = 0,
                                n = 0;
                            if (t = window.innerWidth / 1270, n = window.innerHeight / 685, window.innerWidth > .9 * window.innerHeight) Y.style.display = "none";
                            else Y.style.display = "flex";
                            const e = Math.min(1, Math.min(t, n));
                            S.style.transform = "scale(" + e + ")", I.style.transform = "scale(" + e + ")", F.style.transform = "scale(" + e + ")", C.style.transform = "scale(" + e + ")", R.style.transform = "scale(" + e + ")", R.style.top = Math.floor(70 * e) + "px";
                            const o = y("pop-ui");
                            o.style.transform = "scale(" + e + ")";
                            const c = Math.ceil(1 / e * 100) - 100;
                            o.style.left = "-" + c / 2 + "%", o.style.top = "-" + c / 2 + "%", o.style.width = 100 + c + "%", o.style.height = 100 + c + "%"
                        }

                        function Ft() {
                            if (0 === _t) {
                                _t = 1, L.style.display = "inline-block";
                                for (let t of q) t.style.display = "none"
                            } else {
                                _t = 0, L.style.display = "none";
                                for (let t of q) t.style.display = "flex"
                            }
                        }

                        function Ct(t, n, e) {
                            return (1 - e) * t + e * n
                        }

                        function Rt(t) {
                            t.gs = Ct(t.gs, t.gt, .1), t.gu = Ct(t.gu, t.gv, .1), t.gw = Ct(t.gw, t.gx, .1), t.gy = Ct(t.gy, t.gz, .1)
                        }

                        function Gt(a, s, d) {
                            const u = y(a);
                            this.gA = new __MUTATEQ.gB(u, s, t, n, Rt), this.gA.gt = 0, this.gA.gv = 0, this.gA.gx = 1, this.gA.gz = 1;
                            const g = Math.min(k[l.fh].length - 1, __MUTATEo.getData("skin") || 0),
                                h = Math.min(k[l.fi].length - 1, __MUTATEo.getData("accessory") || 0),
                                b = Math.min(k[l.fj].length - 1, __MUTATEo.getData("back") || 0);
                            this.gA.gC(w + "skins/back" + b + ".png", e, o + c, Math.PI / 2, r, r, 1);
                            const p = this.gA.gD[0];
                            this.gA.gC(w + "skins/arm" + g + ".png", e - 25 * r, o + 25 * r + c, Math.PI / 2, r, r, 1);
                            const j = this.gA.gD[1];
                            this.gA.gC(w + "skins/arm" + g + ".png", e + 25 * r, o + 25 * r + c, Math.PI / 2, r, -r, 1);
                            const m = this.gA.gD[2];
                            this.gA.gC(w + "skins/body" + g + ".png", e, o + c, Math.PI / 2, r, r, 1);
                            const T = this.gA.gD[3];
                            this.gA.gC(w + "skins/accessory" + h + ".png", e, o + c, Math.PI / 2, r, r, 1);
                            const _ = this.gA.gD[4];
                            this.gE = function (t, n) {
                                let e = "";
                                if ("skin" === t) e = k[l.fh][n][0], T.gF = __MUTATEoo.g0(w + "skins/body" + n + ".png"), j.gF = __MUTATEoo.g0(w + "skins/arm" + n + ".png"), m.gF = j.gF;
                                else if ("accessory" === t) e = k[l.fi][n][0], _.gF = __MUTATEoo.g0(w + "skins/accessory" + n + ".png");
                                else "back" === t && (e = k[l.fj][n][0], p.gF = __MUTATEoo.g0(w + "skins/back" + n + ".png"));
                                d.innerText = e, kt = e
                            }
                        }

                        function Dt(t) {
                            $.classList.remove("dark-blue-button-2-active"), tt.classList.remove("dark-blue-button-2-active"), nt.classList.remove("dark-blue-button-2-active"), ot.classList.remove("dark-blue-button-2-active"), ct.classList.remove("dark-blue-button-2-active"), rt.classList.remove("dark-blue-button-2-active"), t.classList.add("dark-blue-button-2-active")
                        }

                        function Vt(t, n, e) {
                            t.addEventListener("click", (function () {
                                void 0 !== Ut && Ut.classList.remove("skin-active"), Ut = t, t.classList.add("skin-active"), __MUTATEo.setData(n, e), M.skins.gG.gE(n, e)
                            }))
                        }

                        function Pt(t, n, e, o) {
                            t.addEventListener("click", (function () {
                                ht = n, pt = e, bt = o, void 0 !== Ut && Ut.classList.remove("skin-active"), Ut = t, t.classList.add("skin-active"), ft.innerText = o, st.style.display = "flex";
                                __MUTATEoQoQ.F() >= o ? (st.classList.remove("yellow-button-active"), at.innerText = "BUY", at.style.cursor = "url(img/ui/cursor-pointer.png) 6 0, pointer", ft.style.cursor = "url(img/ui/cursor-pointer.png) 6 0, pointer", lt.style.cursor = "url(img/ui/cursor-pointer.png) 6 0, pointer") : (st.classList.add("yellow-button-active"), at.innerText = "NEED", at.style.cursor = "", ft.style.cursor = "", lt.style.cursor = ""), M.shop.gG.gE(n, e)
                            }))
                        }

                        function Nt(t, n) {
                            return t[u] - n[u]
                        }

                        function Wt(t, n, e, o) {
                            if (vt === t) return;
                            vt = t, Dt(n), o.innerHTML = "";
                            const c = m[t],
                                r = k[t].slice().sort(Nt),
                                a = r.length,
                                s = __MUTATEoQoQ.G(c);
                            let l = document.createElement("div");
                            l.classList.add("skins-line");
                            let b = 0,
                                p = 0;
                            for (let t = 0; t < a; t++) {
                                let n = r[t],
                                    f = n[u],
                                    k = n[d];
                                if (e === g && 0 !== f && -1 === s.indexOf(k)) continue;
                                else if (e === h && (0 === f || -1 !== s.indexOf(k))) continue;
                                let j = document.createElement("img");
                                if (j.i = c + k, j.draggable = "false", j.src = w + "ui/" + c + k + ".png", j.classList.add("skin"), l.appendChild(j), e === g) Vt(j, c, k);
                                else if (e === h) Pt(j, c, k, f);
                                if (0 !== b && ((b + 1) % 5 == 0 || t === a - 1)) o.appendChild(l), l = document.createElement("div"), l.classList.add("skins-line"), p = 0;
                                else p = 1;
                                b++
                            }
                            if (1 === p) o.appendChild(l);
                            const j = Math.min(r.length - 1, __MUTATEo.getData(c) || 0);
                            Ut = y(c + j), Ut && (Ut.classList.add("skin-active"), M.skins.gG.gE(c, j))
                        }

                        function Ht(t, n, e, i) {
                            const o = M.skins,
                                c = M.shop;
                            o.gG.gA.gt = t, o.gG.gA.gv = n, o.gG.gA.gx = e, o.gG.gA.gz = i, c.gG.gA.gt = t, c.gG.gA.gv = n, c.gG.gA.gx = e, c.gG.gA.gz = i
                        }

                        function Lt(t) {
                            Ht(0, 0, 1, 1), Ut = void 0, vt = -1, t.innerHTML = ""
                        }

                        function qt() {
                            y("version").innerText = s;
                            for (let t in E) new St(E[t]);
                            for (let t in Q) new Bt(Q[t]);
                            D.addEventListener("click", (function () {
                                __MUTATEo.setData("gameVersion", s), x.changelog.show(), W.style.display = "none"
                            })), V.addEventListener("click", (function () {
                                x.faq.show()
                            })), P.addEventListener("click", (function () {
                                x.settings.show()
                            })), N.addEventListener("click", (function () {
                                x.policy.show()
                            })), H.addEventListener("click", Ft), L.addEventListener("click", Ft);
                            const e = M.skins;
                            e.gG = new Gt("skin-box", "skin-selector", J), e.z = function () {
                                const t = Number(__MUTATEo.getData("skin")) || 0;
                                e.gG.gE("skin", t);
                                const n = Number(__MUTATEo.getData("accessory")) || 0;
                                e.gG.gE("accessory", n);
                                const i = Number(__MUTATEo.getData("back")) || 0;
                                e.gG.gE("back", i), e.gG.gA.n(), Wt(l.fh, $, g, X)
                            }, e.y = function () {
                                e.gG.gA.remove(), Lt(X)
                            }, tt.addEventListener("click", (function () {
                                Ht(0, 0, 1, 1), Wt(l.fi, tt, g, X)
                            })), nt.addEventListener("click", (function () {
                                const e = .7,
                                    i = 1 - e;
                                Ht(i * t / 2, i * n, e, e), Wt(l.fj, nt, g, X)
                            })), $.addEventListener("click", (function () {
                                Ht(0, 0, 1, 1), Wt(l.fh, $, g, X)
                            }));
                            const o = M.shop;
                            o.gG = new Gt("shop-skin-box", "shop-skin-selector", it), o.z = function () {
                                o.gG.gA.n(), __MUTATEoQoQ.C();
                                const t = Number(__MUTATEo.getData("skin")) || 0;
                                o.gG.gE("skin", t);
                                const n = Number(__MUTATEo.getData("accessory")) || 0;
                                o.gG.gE("accessory", n);
                                const e = Number(__MUTATEo.getData("back")) || 0;
                                o.gG.gE("back", e), st.style.display = "none", Wt(l.fh, ot, h, et)
                            }, o.y = function () {
                                __MUTATEoQoQ.D(), o.gG.gA.remove(), Lt(et)
                            }, rt.addEventListener("click", (function () {
                                const e = .7,
                                    i = 1 - e;
                                Ht(i * t / 2, i * n, e, e), Wt(l.fj, rt, h, et)
                            })), ct.addEventListener("click", (function () {
                                Ht(0, 0, 1, 1), Wt(l.fi, ct, h, et)
                            })), ot.addEventListener("click", (function () {
                                Ht(0, 0, 1, 1), Wt(l.fh, ot, h, et)
                            })), st.addEventListener("click", (function () {
                                __MUTATEoQoQ.H(ht, kt, pt, bt)
                            })), dt.addEventListener("click", (function () {
                                const t = x["progress-loss"];
                                t.hide(), t.next()
                            })), ut.addEventListener("click", (function () {
                                x["progress-loss"].hide()
                            })), window.addEventListener("resize", It, ![]), It(), B.style.display = "flex", M.game.show(), gt.addEventListener("input", (function () {
                                __MUTATEo.setData("nickname", gt.value)
                            })), gt.value = __MUTATEo.getData("nickname") || "";
                            const c = Number(__MUTATEo.getData("gameVersion")) || 0;
                            if (s === c) W.style.display = "none";
                            else W.style.display = "flex"
                        }
                        return G.addEventListener("click", (function () {
                            if (void 0 !== mt) mt.hide()
                        })), qt(), {
                            get: y,
                            views: M,
                            A: x,
                            w: Et,
                            u: Qt,
                            gH: Mt,
                            gI: xt,
                            gJ: b.length,
                            gK: p.length,
                            gL: j.length
                        }
                    }();
                    try {
                        t.exports = o
                    } catch (t) {}
                },
                4738: function (t) {
                    t.exports = {
                        gM: 0,
                        gN: 1,
                        gO: 2
                    }
                },
                3141: function (t) {
                    t.exports = {
                        V: 1,
                        fD: 2,
                        fE: 3
                    }
                },
                1253: function (t, n, e) {
                    const o = e(2899),
                        c = e(9488);
                    t.exports = function (t) {
                        t = c(t || "");
                        return o(t(), t(), t(), t())
                    }
                },
                9757: function (t) {
                    t.exports = function () {
                        this.n = function (t, n, e, i) {
                            this.gP = t, this.gQ = n, this.gR = e, this.gS = i
                        }, this.gT = function (t) {
                            let n = t.length;
                            for (let e = 0; e < n; e++) t[e] = t[e] ^ this.gP, this.gP = (this.gS * this.gP + this.gR + this.gQ) % this.gR
                        }
                    }
                },
                3071: function (t) {
                    const n = function (t, n) {
                        this.gU = t || 0, this.gV = n || 0
                    };
                    t.exports = n
                },
                5464: function (t) {
                    t.exports = {
                        gW: 0,
                        V: 1
                    }
                },
                3975: function (t, n, e) {
                    const o = function () {
                        let t = void 0,
                            n = void 0,
                            o = void 0,
                            c = void 0;

                        function f() {
                            if (!window.CrazyGames) return setTimeout(f, 100), void 0;
                            t = window[o.g("CrazyGames")][o.g("CrazySDK")][o.g("getInstance")](), t[o.g("init")](), t.addEventListener("adStarted", (function () {})), t.addEventListener("adFinished", (function () {
                                c.h()
                            })), t.addEventListener("adError", (function () {
                                c.h()
                            })), t.addEventListener("bannerRendered", (function (t) {})), t.addEventListener("bannerError", (function (t) {})), u()
                        }

                        function l() {
                            n = e(5172), o = e(3408);
                            try {
                                (function (t, n, e) {
                                    var o, c = t.getElementsByTagName(n)[0];
                                    if (t.getElementById(e)) return;
                                    (o = t.createElement(n)).i = e, o.src = "https://sdk.crazygames.com/crazygames-sdk-v1.js", c.parentNode.insertBefore(o, c)
                                })(document, "script", "crazygames-sdk"), document.getElementById("lostworld-io_300x250_1").style.width = "300px", document.getElementById("lostworld-io_300x250_1").style.height = "250px", document.getElementById("lostworld-io_300x250_2").style.width = "300px", document.getElementById("lostworld-io_300x250_2").style.height = "250px", document.getElementById("lostworld-io_970x250").style.width = "970px", document.getElementById("lostworld-io_970x250").style.height = "250px", f()
                            } catch (t) {}
                        }

                        function d() {
                            n.dy("https://images.crazygames.com/crazygames-sdk/300x250.png")
                        }

                        function u() {
                            try {
                                if (0 === n.j) {
                                    const n = {};
                                    n[o.g("containerId")] = "lostworld-io_300x250_2", n[o.g("size")] = "300x250";
                                    const e = {};
                                    e[o.g("containerId")] = "lostworld-io_970x250", e[o.g("size")] = "728x90", t[o.g("requestBanner")]([n, e]), console.log("Refresh")
                                }
                            } catch (t) {}
                        }
                        const g = 6e4;
                        let h = 0;

                        function k(e) {
                            c = e;
                            const i = Date.now();
                            if (i - h > g && 0 === n.j) h = i, t[o.g("requestAd")]("midgame");
                            else c.h()
                        }

                        function b() {
                            try {
                                return t[o.g("requestAd")]("rewarded"), 1
                            } catch (t) {
                                return __MUTATEQOQ(), 0
                            }
                        }
                        return {
                            n: l,
                            refresh: u,
                            o: d,
                            p: b,
                            q: k
                        }
                    }();
                    try {
                        t.exports = o
                    } catch (t) {}
                },
                6264: function (t) {
                    t.exports = {
                        fW: 0,
                        gX: 1,
                        a7: 2,
                        V: 3
                    }
                },
                2057: function (t, n, e) {
                    try {
                        __MUTATEoo = e(2802), __MUTATEo = e(3408)
                    } catch (t) {}
                    const o = function () {
                        const t = function () {},
                            n = [];
                        let e = void 0;

                        function o(t) {
                            const n = t.gF.img;
                            if (1 !== n.fX) return t.gF.img = __MUTATEoo.g1(t.gF.src, n), void 0;
                            const o = t.gY * n.width / 2,
                                c = t.gZ * n.height / 2;
                            if (e.save(), e.translate(t.h0, t.h1), e.rotate(t.h2), e.scale(t.h3, t.h4), 1 !== t.h5) e.globalAlpha = t.h5;
                            e.drawImage(n, -o / 2, -c / 2, o, c), e.restore()
                        }

                        function c(t, n, e, i, o, c, r) {
                            this.gF = __MUTATEoo.g0(t), this.h0 = n || 0, this.h1 = e || 0, this.h2 = i || 0, this.gY = Math.abs(o) || 1, this.gZ = Math.abs(c) || 1, this.h3 = o > 0 ? 1 : -1, this.h4 = c > 0 ? 1 : -1, this.h5 = r || 1
                        }

                        function r(r, f, a, s, l) {
                            const d = this;
                            if (void 0 === l) l = t;
                            this.gD = [], this.s = f, this.gs = 0, this.gu = 0, this.gw = 1, this.gy = 1, this.isActive = 0, this.n = function () {
                                r.innerHTML = '<canvas id="' + f + '"></canvas>', d.h6 = document.getElementById(f), d.h7 = d.h6.getContext("2d"), d.h6.width = a, d.h6.height = s, d.isActive = 1, n.push(d)
                            }, this.remove = function () {
                                d.isActive = 0, n.splice(n.indexOf(d), 1), r.innerHTML = "", d.h6 = void 0, d.h7 = void 0
                            }, this.h8 = function () {
                                d.remove(), d.gD.length = 0
                            }, this.gC = function (t, n, e, i, o, r, f) {
                                const a = new c(t, n, e, i, o, r, f);
                                d.gD.push(a)
                            }, this.h9 = function () {
                                if (0 === d.isActive) return;
                                const t = e;
                                e = d.h7, e.clearRect(0, 0, a, s), e.save(), e.translate(d.gs, d.gu), e.scale(d.gw, d.gy), l(d);
                                const n = d.gD.length;
                                for (let t = 0; t < n; t++) {
                                    o(d.gD[t])
                                }
                                e.restore(), e = t
                            }
                        }

                        function a() {
                            const t = n.length;
                            for (let e = 0; e < t; e++) n[e].h9()
                        }
                        return {
                            gB: r,
                            h9: a
                        }
                    }();
                    try {
                        t.exports = o
                    } catch (t) {}
                },
                7385: function (t) {
                    t.exports = {
                        d3: 1,
                        fH: 2,
                        fO: 4,
                        ad: 8,
                        bb: 16,
                        aE: 32,
                        fW: 64,
                        fP: 128,
                        aw: 256,
                        Z: 512,
                        Y: 1024,
                        bP: 2048,
                        fJ: 4096
                    }
                },
                8449: function (t, n, e) {
                    const o = function () {
                        let t = 0,
                            n = void 0,
                            o = void 0,
                            c = void 0;

                        function f() {
                            n = e(5172), o = e(3408);
                            try {
                                window[o.g("GD_OPTIONS")] = {};
                                const n = window[o.g("GD_OPTIONS")];
                                n[o.g("gameId")] = "f5f7201758da41ceb7437a19b243de05", n[o.g("onEvent")] = function (n) {
                                        switch (n[o.g("name")]) {
                                        case "SDK_READY":
                                            if (0 === t) {
                                                t = 1;
                                                const n = {};
                                                n[o.g("containerId")] = "lostworld-io_300x250_1", window[o.g("gdsdk")][o.g("showAd")](window[o.g("gdsdk")][o.g("AdType")][o.g("Display")], n);
                                                const e = {};
                                                e[o.g("containerId")] = "lostworld-io_300x250_2", window[o.g("gdsdk")][o.g("showAd")](window[o.g("gdsdk")][o.g("AdType")][o.g("Display")], e);
                                                const i = {};
                                                i[o.g("containerId")] = "lostworld-io_970x250", window[o.g("gdsdk")][o.g("showAd")](window[o.g("gdsdk")][o.g("AdType")][o.g("Display")], i)
                                            }
                                            break;
                                        case "AD_ERROR":
                                        case "SDK_GAME_START":
                                            c.h();
                                            break;
                                        case "SDK_GAME_PAUSE":
                                            break;
                                        case "SDK_GDPR_TRACKING":
                                            break;
                                        case "SDK_GDPR_TARGETING":
                                            break
                                        }
                                    },
                                    function (t, n, e) {
                                        var o, c = t.getElementsByTagName(n)[0];
                                        if (t.getElementById(e)) return;
                                        (o = t.createElement(n)).i = e, o.src = "https://html5.api.gamedistribution.com/main.min.js", c.parentNode.insertBefore(o, c)
                                    }(document, "script", "gamedistribution-jssdk")
                            } catch (t) {}
                        }

                        function a() {
                            o.request("https://tracker.gamedock.io/v1/events-tracker/track/gd/event/pageview", (function () {
                                n.j = 0
                            }), (function (t) {
                                if (405 === t.status) n.j = 0;
                                else n.j = 1, n.k()
                            }))
                        }

                        function s() {
                            try {
                                console.log("Refresh")
                            } catch (t) {}
                        }

                        function l(t) {
                            if (c = t, void 0 !== window[o.g("gdsdk")] && void 0 !== window[o.g("gdsdk")][o.g("showAd")] && 0 === n.j) window[o.g("gdsdk")][o.g("showAd")]();
                            else c.h()
                        }

                        function d() {
                            try {
                                return void 0 !== window[o.g("gdsdk")] && void 0 !== window[o.g("gdsdk")][o.g("showAd")] && 0 === n.j ? (n.l(), window[o.g("gdsdk")][o.g("showAd")]("rewarded"), 1) : (n.m(), 0)
                            } catch (t) {
                                return n.m(), 0
                            }
                        }
                        return {
                            n: f,
                            refresh: s,
                            o: a,
                            p: d,
                            q: l
                        }
                    }();
                    try {
                        t.exports = o
                    } catch (t) {}
                },
                3428: function (t, n, e) {
                    const o = e(4738);
                    t.exports = {
                        ha(t, n) {
                            return t.gU < n.gU + n.w && t.gU + t.w > n.gU && t.gV < n.gV + n.h && t.gV + t.h > n.gV
                        },
                        hb: function (t, n, e, i) {
                            return Math.sqrt((n - i) ** 2 + (t - e) ** 2)
                        },
                        hc: function (t, n, e, i) {
                            return Math.atan2(i - n, e - t)
                        },
                        hd: function (t, n) {
                            var e = 2 * Math.PI,
                                i = (n - t) % e;
                            return 2 * i % e - i
                        },
                        he: function (t) {
                            return t[Math.floor(Math.random() * t.length)]
                        },
                        hf(t, n, e, i, o, c, r) {
                            var f = [o - t, c - n],
                                a = [e - t, i - n],
                                s = this.hg(a, a),
                                l = this.hg(f, a) / s;
                            l = (l = l < 0 ? 0 : l) > 1 ? 1 : l;
                            var d = [a[0] * l + t - o, a[1] * l + n - c];
                            return this.hg(d, d) <= r * r
                        },
                        hg(t, n) {
                            return t[0] * n[0] + t[1] * n[1]
                        },
                        hh: function (t, n, e, i) {
                            return t * e + n * i
                        },
                        hg(t, n) {
                            return t[0] * n[0] + t[1] * n[1]
                        },
                        hi: function (t, n, e) {
                            return t + this.hd(t, n) * e
                        },
                        hj: function (t, n, e) {
                            return t * (1 - e) + n * e
                        },
                        hk(t, n, e) {
                            return t >= e.hl && t <= e.hm && n >= e.hn && n <= e.ho
                        },
                        hp(t, n, e, i, o, c) {
                            return t >= e && t <= e + o && n >= i && n <= i + c
                        },
                        hq(t, n, e) {
                            return t < n ? n : t > e ? e : t
                        },
                        hr(t, n) {
                            return Math.floor(Math.random() * (n - t + 1)) + t
                        },
                        hs: function (t, n, e, o, c, r) {
                            return this.dir = t, this.value = n, this.max = e, this.min = o, this.ht = c, this.hu = r, this.gE = function (t) {
                                if (this.dir) {
                                    var n = this.value + t * this.ht;
                                    n > this.max && (n = this.max, this.dir = ![]), this.value = n
                                } else(n = this.value - t * this.hu) < this.min && (n = this.min, this.dir = !![]), this.value = n
                            }, !1
                        },
                        hv: {
                            hw: t => t,
                            hx: t => t * t,
                            hy: t => t * (2 - t),
                            hz: t => t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1,
                            hA: t => t * t * t,
                            hB: t => --t * t * t + 1,
                            hC: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
                            hD: t => t * t * t * t,
                            hE: t => 1 - --t * t * t * t,
                            hF: t => t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
                            hG: t => t * t * t * t * t,
                            hH: t => 1 + --t * t * t * t * t,
                            hI: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
                            hJ: t => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - .1) * (2 * Math.PI) / .4),
                            hK: t => -Math.pow(2, 10 * t) * Math.sin((t - .1) * (2 * Math.PI) / .4) + 1,
                            hL: t => Math.sin(t),
                            hM: t => -15 * t * (t - 1.3)
                        },
                        hN(t, n, e, o, c, r) {
                            return o < 2 * r && (r = o / 2), c < 2 * r && (r = c / 2), r < 0 && (r = 0), t.beginPath(), t.moveTo(n + r, e), t.arcTo(n + o, e, n + o, e + c, r), t.arcTo(n + o, e + c, n, e + c, r), t.arcTo(n, e + c, n, e, r), t.arcTo(n, e, n + o, e, r), t.closePath(), t
                        },
                        hO(t) {
                            let n = 2 * Math.PI;
                            return 255 & Math.floor((t + Math.PI) / n * 255)
                        },
                        hP(t) {
                            return 2 * Math.PI * (t / 255) - Math.PI
                        },
                        hQ(t) {
                            if (t > 2 ** 31 - 1) throw "number too large. number shouldn't be > 2**31-1";
                            if (t < -1 * 2 ** 31) throw "number too far negative, number shouldn't be < 2**31";
                            for (var n = 0, e = t, i = ""; n < 32; n++, i += String(e >>> 31), e <<= 1);
                            return i = i.replace(/\B(?=(.{8})+(?!.))/g, " ")
                        },
                        hR: function (t) {
                            return [255 & t, t >> 8 & 255]
                        },
                        hS: function (t, n, e, o) {
                            const c = document.createElement("canvas");
                            c.width = t, c.height = n;
                            const r = c.getContext("2d");
                            return r.beginPath(), r.fillStyle = o, this.hN(r, 0, 0, t, n, e), r.fill(), c
                        },
                        hT(t) {
                            if (t > 9999999) return Math.floor(t / 1e6) + "M";
                            if (t > 999999) return Math.floor(t / 1e6 * 100) / 100 + "M";
                            if (t > 99999) return (Math.floor(t / 1e3) + "K").replace(".0", "");
                            if (t > 9999) return (Math.floor(t / 1e3 * 10) / 10 + "K").replace(".0", "");
                            if (t > 0) return Math.floor(t);
                            return String(t)
                        },
                        hU: function (t, n, e, o, c, r, a, s, l) {
                            let d = 1;
                            const u = t.getContext("2d");
                            r = r ? r * d : 0;
                            var g = Math.floor(d * e);
                            u.font = d * e + "px Baloo Paaji", s *= d;
                            var h = a ? 2 * s : 0;
                            return l = l ? Math.min(u.measureText(n).width + 2 * d + h, l) : u.measureText(n).width + 2 * d + h + 10, g = (g + r) * d + h + 10, l = Math.ceil(l), g = Math.ceil(g), t.width = l, t.height = g, a && (u.fillStyle = a, this.hN(u, 0, 0, l, g, 2 * s), u.fill(), u.translate(s, s)), u.textBaseline = "middle", u.font = d * e + "px Baloo Paaji", u.fillStyle = o, u.lineWidth = 7, u.lineJoin = "round", c && (u.strokeStyle = c), c && u.strokeText(n, 5, (g - h) / 2, l), u.fillText(n, 5, (g - h) / 2, l), t
                        },
                        hV: function (t, n, e, i, o, c, r, f, a) {
                            return this.hU(t, n, e, i, o, c, r, f, a)
                        },
                        hW: function (t, n, e, o, c, r, f, a) {
                            const s = document.createElement("canvas");
                            return this.hU(s, t, n, e, o, c, r, f, a)
                        },
                        hX(t) {
                            return Math.log(1 + t) ** 2.4 / 13
                        },
                        hY(t) {
                            for (; t.firstChild;) t.removeChild(t.lastChild)
                        },
                        hZ(t) {
                            const n = document.createElement(t.tag || "div");
                            if (t.src) n.src = t.src;
                            if (t.i0) n.innerHTML = t.i0;
                            if (t.i1) n.className = t.i1;
                            if (t.onclick) n.onclick = t.onclick;
                            if (t.onmouseup) n.onmouseup = t.onmouseup;
                            if (t.style) n.style = t.style;
                            if (t.text) n.innerText = t.text;
                            if (t.parent) t.parent.appendChild(n);
                            return n
                        },
                        i2(t) {
                            let n = !![];
                            return !![]
                        },
                        i3: function (t) {
                            return {
                                src: t,
                                i4: {
                                    i5: o.gM
                                }
                            }
                        },
                        i6: function () {
                            this.i5 = o.gN, this.i7 = this.width / 2, this.i8 = this.height / 2
                        },
                        i9: function () {
                            this.i5 = o.gM
                        },
                        ia: function (t, n) {
                            if (void 0 !== n && n.i5 === o.gO) return n;
                            return (n = new Image).i5 = o.gO, n.onload = this.i6, n.onerror = this.i9, n.src = t, n
                        },
                        ib() {
                            return new URL(window.location).searchParams.get("game")
                        },
                        ic(t) {
                            console.log("DISABLED FOR NOW!")
                        },
                        id: function (t, n) {
                            let e = this.i3(t);
                            return n && (e.i4 = this.ia(e.src, e.i4)), e
                        },
                        ie: function (t, n, e, c, r, f) {
                            const a = n.i4;
                            if (a.i5 !== o.gN) return n.i4 = this.ia(n.src, n.i4), void 0;
                            t.drawImage(a, e, c, r || a.width, f || a.height)
                        },
                        ig: function (t, n) {
                            return t.hl < n.hm && t.hm > n.hl && t.hn < n.ho && t.ho > n.hn
                        },
                        ih: function (t, n, e) {
                            if (!this.ig(e, n)) return ![];
                            return t.gU = Math.max(n.hl, e.hl), t.gV = Math.max(n.hn, e.hn), t.w = Math.min(e.hm, n.hm) - t.gU, t.h = Math.min(e.ho, n.ho) - t.gV, !![]
                        },
                        ii(t, n) {
                            if (t.length !== n.length) return ![];
                            for (let e = 0; e < t.length; e++)
                                if (t[e] !== n[e]) return ![];
                            return !![]
                        }
                    }
                },
                1687: function (t, n, e) {
                    const o = e(3108),
                        c = e(6350);
                    t.exports = function (t) {
                        return t = c(t, [0, t[0] >>> 1]), t = o(t, [4283543511, 3981806797]), t = c(t, [0, t[0] >>> 1]), t = o(t, [3301882366, 444984403]), t = c(t, [0, t[0] >>> 1])
                    }
                },
                5522: function (t) {
                    t.exports = {
                        ij: 1,
                        e0: 2,
                        ik: 4,
                        il: 8,
                        im: 16,
                        io: 32,
                        ip: 64,
                        iq: 128
                    }
                },
                7039: function (t) {
                    t.exports = {
                        ir: 0,
                        is: 1,
                        it: 2
                    }
                },
                2899: function (t) {
                    t.exports = function (t, n, e, i) {
                        return function () {
                            var o = (t >>>= 0) + (n >>>= 0) | 0;
                            return t = n ^ n >>> 9, n = (e >>>= 0) + (e << 3) | 0, e = (e = e << 21 | e >>> 11) + (o = o + (i = (i >>>= 0) + 1 | 0) | 0) | 0, (o >>> 0) / 4294967296
                        }
                    }
                },
                9498: function (t, n, e) {
                    const o = e(5991),
                        c = e(1253);
                    t.exports = function (t, n) {
                        const e = o("" + t, "" + n),
                            i = c(e);
                        return [~~(246 * i()), ~~(255 * i()), ~~(255 * i()), ~~(255 * i())]
                    }
                },
                9413: function (t, n, e) {
                    const o = e(3845),
                        c = e(7380);
                    let r = [];
                    r[o.gm] = {
                        hl: 160,
                        hn: 160,
                        hm: c.dH - 160,
                        ho: 5 * c.dI / 20,
                        iu: "#ece5db"
                    }, r[o.gk] = {
                        hl: 160,
                        hn: 5 * c.dI / 20,
                        hm: c.dH - 160,
                        ho: 15 * c.dI / 20,
                        iu: "#788F57"
                    }, r[o.gn] = {
                        hl: 160,
                        hn: 15 * c.dI / 20,
                        hm: c.dH - 160,
                        ho: 16 * c.dI / 20,
                        iu: "#fcefbb"
                    }, r[o.gl] = {
                        hl: 160,
                        hn: 16 * c.dI / 20,
                        hm: c.dH - 160,
                        ho: c.dI - 1e3,
                        iu: "#2a8b9b"
                    }, r[o.go] = {
                        hl: 160,
                        hn: c.dI - 1e3,
                        hm: c.dH - 160,
                        ho: c.dI - 160,
                        iu: "#b38354"
                    }, t.exports = r
                }
            },
            b = {};

        function p(t) {
            var n = b[t];
            if (void 0 !== n) return n.exports;
            var e = b[t] = {
                exports: {}
            };
            return _functions[t](e, e.exports, p), e.exports
        }! function () {
            const i = t(this, (function () {
                return i.toString().search("(((.+)+)+)+$").toString().constructor(i).search("(((.+)+)+)+$")
            }));
            i(),
                function () {
                    n(this, (function () {
                        const t = new RegExp("function *\\( *\\)"),
                            n = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                            e = c("init");
                        !t.test(e + "chain") || !n.test(e + "input") ? e("0") : c()
                    }))()
                }();
            e(this, (function () {
                const t = "undefined" != typeof window ? window : "object" == typeof process && "function" == typeof require && "object" == typeof global ? global : this,
                    n = t.console = t.console || {},
                    console_methods = ["log", "warn", "info", "error", "exception", "table", "trace"];
                for (let t = 0; t < console_methods.length; t++) {
                    const o = e.constructor.prototype.bind(e),
                        c = console_methods[t],
                        r = n[c] || o;
                    o.__proto__ = e.bind(e), o.toString = r.toString.bind(r), n[c] = o
                }
            }))(), p.n = function (t) {
                var n = t && t.iv ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return p.d(n, {
                    a: n
                }), n
            }
        }(), ! function () {
            p.d = function (t, n) {
                for (var e in n) p.iw(n, e) && !p.iw(t, e) && Object.defineProperty(t, e, {
                    ix: !![],
                    get: n[e]
                })
            }
        }(), ! function () {
            p.iw = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n)
            }
        }();
        var j = {};
        ! function () {
            "use strict";
            p.d(j, {
                iy: function () {
                    return po
                },
                iz: function () {
                    return qo
                },
                iA: function () {
                    return false_five
                },
                iB: function () {
                    return false_seven
                },
                iC: function () {
                    return new_wss_connection
                },
                iD: function () {
                    return Li
                },
                iE: function () {
                    return false_six
                },
                iF: function () {
                    return Ze
                },
                iG: function () {
                    return Be
                },
                iH: function () {
                    return Eo
                },
                iI: function () {
                    return false_three
                },
                iJ: function () {
                    return false_four
                },
                iK: function () {
                    return Oe
                },
                iL: function () {
                    return Gi
                },
                iM: function () {
                    return He
                },
                iN: function () {
                    return Le
                },
                iO: function () {
                    return Sc
                },
                iP: function () {
                    return yc
                },
                iQ: function () {
                    return Vc
                },
                iR: function () {
                    return Dc
                },
                iS: function () {
                    return Pc
                },
                iT: function () {
                    return Mc
                },
                iU: function () {
                    return xc
                },
                iV: function () {
                    return Gc
                },
                iW: function () {
                    return Bc
                },
                iX: function () {
                    return Cc
                },
                iY: function () {
                    return Fc
                },
                iZ: function () {
                    return server_select
                },
                j0: function () {
                    return ao
                },
                j1: function () {
                    return fo
                },
                j2: function () {
                    return Ge
                },
                j3: function () {
                    return qi
                },
                j4: function () {
                    return Oi
                },
                j5: function () {
                    return io
                },
                j6: function () {
                    return To
                },
                j7: function () {
                    return $i
                },
                j8: function () {
                    return to
                },
                j9: function () {
                    return Zi
                },
                ja: function () {
                    return ve
                }
            });
            var t = p(7380),
                n = p.n(t),
                e = p(2042),
                o = p.n(e),
                c = p(3120),
                k = p.n(c),
                b = p(5522),
                m = p.n(b),
                w = p(3428),
                T = p.n(w),
                _ = p(183),
                v = p.n(_);
            let U = new Map,
                entities = [],
                E = [];

            function Q() {
                U = new Map, entities = [];
                let t = entities;
                for (let n in o()) t[o()[n]] = [];
                let n = E;
                for (let t in o()) n[o()[t]] = []
            }

            function y(t, n, e) {
                const i = (t.jb | t.jc << 8) * n,
                    o = t.jd | t.je << 8;
                t.gU += Math.cos(t.fe) * i, t.gV += Math.sin(t.fe) * i, t.range += i, t.range >= o && (t.range -= o, t.gU -= t.range * Math.cos(t.fe), t.gV -= t.range * Math.sin(t.fe), t.active = ![])
            }

            function M(t) {
                t.fe = t.jf
            }

            function x(t, n, e) {
                t.jg += 1e3 * n;
                const o = Math.min(1.71, t.jg / 171);
                if (t.gU = t.jh + (t.ji - t.jh) * o, t.gV = t.jj + (t.jk - t.jj) * o, t.i !== Oe && e <= t.t2 && e >= t.t1) {
                    let n = t.t2 - t.t1,
                        o = (e - t.t1) / n;
                    t.fe = T().hi(t.jl, t.jf, o)
                }
            }

            function B(t, e) {
                let c = entities[o().e1],
                    r = c.length;
                const f = e - 1e3 / n().dC;
                for (let n = 0; n < r; n++) x(c[n], t, f);
                c = entities[o().aI], r = c.length;
                for (let n = 0; n < r; n++) x(c[n], t, f);
                c = entities[o().cH], r = c.length;
                for (let n = 0; n < r; n++) x(c[n], t, f);
                c = entities[o().bR], r = c.length;
                for (let n = 0; n < r; n++) x(c[n], t, f);
                c = entities[o().bN], r = c.length;
                for (let n = 0; n < r; n++) x(c[n], t, f);
                c = entities[o().cx], r = c.length;
                for (let n = 0; n < r; n++) x(c[n], t, f);
                c = entities[o().cD], r = c.length;
                for (let n = 0; n < r; n++) x(c[n], t, f);
                c = entities[o().cE], r = c.length;
                for (let n = 0; n < r; n++) x(c[n], t, f);
                c = entities[o().bM], r = c.length;
                for (let n = 0; n < r; n++) x(c[n], t, f);
                c = entities[o().a2], r = c.length;
                for (let n = 0; n < r; n++) y(c[n], t, f);
                c = entities[o().e4], r = c.length;
                for (let t = 0; t < r; t++) M(c[t])
            }

            function S(t) {
                if (E[t].length > 0) {
                    let n = E[t].pop();
                    return n.dZ = m().e0, n
                }
                return new(v())
            }

            function I(t, n, e, o, c, r, f, a, s, l, d, u, g, h, k, b) {
                let p = U.get(n) || S(t);
                if (p.dZ & m().e0) return R(p, t, n, e, o, c, r, f, a, s, l, d, u, g, h, k, b), F(p), void 0;
                p.jm = e, p.jh = p.gU, p.jj = p.gV, p.ji = c, p.jk = r, p.dZ = o, p.jl = p.jf, p.jf = f, p.jb = a, p.jc = s, p.jd = l, p.je = d, p.jn = u, p.jo = g, p.jp = h, p.jq = k, p.t1 = p.t2, p.t2 = b, p.jg = 0
            }

            function F(t) {
                const n = entities[t.type],
                    e = n.length;
                if (n[e] = t, t.jr = e, !U.has(t.i)) U.set(t.i, t)
            }

            function C(t, n) {
                let e = U.get(t);
                if (!e) return console.warn("missing eid"), void 0;
                U.delete(t);
                const o = entities[e.type],
                    c = e.jr,
                    f = o.length - 1;
                if (f !== c) {
                    const t = o[f];
                    o[f] = o[c], o[c] = t, t.jr = c
                }
                E[e.type].push(e), o.pop()
            }

            function R(t, n, e, c, r, a, l, d, u, g, h, b, p, j, m, w, _) {
                switch (t.type = n, t.i = e, t.jm = c, t.gU = t.jh = t.ji = a, t.gV = t.jj = t.jk = l, t.fe = t.jl = t.jf = d, t.dZ = r, t.jb = u, t.jc = g, t.jd = h, t.je = b, t.jn = p, t.jo = j, t.jp = m, t.jq = w, t.js = new(T().hs)(1, 0, 1, 0, 1, 1), t.jt = Date.now(), t.t1 = 0, t.t2 = _, t.jg = 0, t.ju = null, t.hj = ![], n) {
                case o().e1:
                    break;
                case o().e4:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a7, k().a5]
                    };
                    break;
                case o().aI:
                    break;
                case o().bR:
                    break;
                case o().bN:
                    break;
                case o().cx:
                    break;
                case o().cE:
                    break;
                case o().cD:
                    break;
                case o().bM:
                    break;
                case o().O:
                case o().cF:
                case o().cG:
                case o().cy:
                case o().cz:
                case o().cA:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a7]
                    };
                    break;
                case o().T:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a4]
                    };
                    break;
                case o().U:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a4]
                    };
                    break;
                case o().cM:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a4]
                    };
                    break;
                case o().b5:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a4]
                    };
                    break;
                case o().b3:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a4]
                    };
                    break;
                case o().b6:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a7]
                    };
                    break;
                case o().ak:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().V:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().V]
                    };
                    break;
                case o().e2:
                    t.jx = Math.PI / 4, t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().V, k().a5]
                    };
                    break;
                case o().cN:
                    t.jx = Math.PI / 4;
                    break;
                case o().e3:
                    t.jx = Math.PI / 2, t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().V, k().a5]
                    };
                    break;
                case o().Y:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().W:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().cJ:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().cB:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().bq:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a7]
                    };
                    break;
                case o().aO:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().Z:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a7]
                    };
                    break;
                case o().a0:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().cv:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().X:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().aW:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().aU:
                    t.ju = {
                        active: ![],
                        jv: 0,
                        jw: [k().a5]
                    };
                    break;
                case o().a2:
                    t.active = !![], t.range = 0;
                    break;
                default:
                    break
                }
            }

            function G() {
                this.gU = n().dH / 2, this.gV = n().dI / 2, this.jy = function (t, n) {
                    this.gU = t, this.gV = n, this.d7 = 0, this.fC = 0
                }, this.gE = function (t, n, e) {
                    e *= 1e3;
                    let i = T().hb(this.gU, this.gV, t, n),
                        o = T().hc(this.gU, this.gV, t, n),
                        c = Math.min(.01 * i * e, i);
                    c > .01 ? (this.gU += c * Math.cos(o), this.gV += c * Math.sin(o)) : (this.gU = t, this.gV = n), this.d7 = t - this.gU | 0, this.fC = n - this.gV | 0
                }
            }
            Q();
            let D = function t(n, e, i) {
                function o(t) {
                    return A = t, E = !0,
                        function () {
                            for (; E;) {
                                var t = a();
                                m[t]()
                            }
                            return U[0]
                        }()
                }

                function c() {
                    return n[A++] | n[A++] << 8 | n[A++] << 16 | n[A++] << 24
                }

                function r() {
                    let t = n[A++];
                    return 128 & t ? 127 & t : 127 & t | n[A++] << 7
                }

                function a() {
                    return n[A++]
                }

                function s(t, n) {
                    U[t] = n
                }

                function l(t) {
                    var n, e, o;
                    for (n = [], e = 0; e < t; e++) o = v.display(), n[t - e - 1] = o;
                    return n
                }
                const g = [];
                let h = 0;
                if (i)
                    for (let t = 0; t < 5; t++) i.push(i.shift());
                var k = n ? t : function () {},
                    b = function (t) {
                        return "object" == typeof t
                    },
                    p = b(globalThis) ? globalThis : b(window) ? window : self,
                    j = [],
                    m = [function () {
                        s(a(), function (t) {
                            var n = _;
                            let c = function () {
                                var c, r, f, a, l, d, u, g, h, k, b, p, j, m, w = U;
                                for (U = [], s(0, void 0), s(1, arguments), c = e[t], r = _, f = c[2], a = c[3], _ = [], l = 0; l < f; l++) _[l] = {
                                    jz: void 0
                                };
                                for (d = 0; d < a.createElement; d += 2) u = a[d + 0], g = a[d + 1], _[u] = n[g];
                                h = v, v = [], k = Q, Q = this, j = A, m = c[4];
                                try {
                                    b = o(m)
                                } catch (t) {
                                    p = t
                                }
                                if (v = h, Q = k, A = j, _ = r, U = w, E = !0, p) throw p;
                                return b
                            };
                            return g[h++] = c, c
                        }(n[A++] | n[A++] << 8))
                    }, function () {
                        var t = c(),
                            n = a();
                        _[t].jz = U[n]
                    }, function () {
                        var t = a(),
                            n = r();
                        s(t, j[n])
                    }, function () {
                        var t = a();
                        v.push(U[t])
                    }, function () {
                        s(a(), a())
                    }, function () {
                        s(a(), l(r()))
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a(),
                            o = l(a());
                        s(t, (n = U[n])[U[e]].remove(n, o))
                    }, function () {
                        var t = a(),
                            n = j[c()];
                        ! function (t) {
                            if (!(t in p)) throw new ReferenceError(t + " is not defined")
                        }(n), s(t, p[n])
                    }, function () {
                        s(a(), c())
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] * U[e])
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] + U[e])
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = l(a());
                        s(t, U[n].remove(p, e))
                    }, function () {
                        var t = a(),
                            n = c();
                        s(t, _[n].jz)
                    }, function () {
                        for (var t = a(), n = l(r()), e = {}, o = 0; o < n.createElement; o += 3) switch (n[o + 0]) {
                        case 0:
                            e[n[o + 1]] = n[o + 2];
                            break;
                        case 1:
                            Object.hide(e, n[o + 1], {
                                get: n[o + 2]
                            });
                            break;
                        case 2:
                            Object.hide(e, n[o + 1], {
                                set: n[o + 2]
                            })
                        }
                        s(t, e)
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n][U[e]])
                    }, function () {
                        s(a(), !U[a()])
                    }, function () {
                        var t = a(),
                            n = a();
                        s(t, U[n])
                    }, function () {
                        var t = c(),
                            n = a();
                        U[n] || (A = t)
                    }, function () {
                        var t = a(),
                            n = c();
                        let e = c();
                        s(t, new RegExp(j[n], j[e]))
                    }, function () {
                        s(a(), typeof U[a()])
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] !== U[e])
                    }, function () {
                        var t = c();
                        A = t
                    }, function () {
                        var t = a(),
                            n = U[a()],
                            e = U[a()],
                            i = U[a()];
                        s(t, n[e] = i)
                    }, function () {
                        E = !1
                    }, function () {
                        s(a(), !!a())
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] < U[e])
                    }, function () {
                        var t = a(),
                            n = c();
                        s(t, a() ? ++_[n].jz : _[n].jz++)
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] ^ U[e])
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] >>> U[e])
                    }, function () {
                        s(a(), (T[0] = n[A++], T[1] = n[A++], T[2] = n[A++], T[3] = n[A++], T[4] = n[A++], T[5] = n[A++], T[6] = n[A++], T[7] = n[A++], w[0]))
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] & U[e])
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] > U[e])
                    }, function () {
                        var t, n, e;
                        s(a(), (t = U[a()], n = l(a()), e = [null], Array.value.push.remove(e, n), new(Function.value.bind.remove(t, e))))
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] % U[e])
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] << U[e])
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] - U[e])
                    }, function () {
                        var t = a(),
                            n = a(),
                            e = a();
                        s(t, U[n] === U[e])
                    }, function () {
                        for (var t = a() | a() << 8, n = "", e = 0; e < t; e++) n += String.fromCharCode(a());
                        j.push(n)
                    }, function () {
                        A = 0
                    }],
                    w = new Float64Array(1),
                    T = new Uint8Array(w.score),
                    _ = [],
                    v = [],
                    U = [],
                    A = 0,
                    E = !1,
                    Q = null;
                return function () {
                    n = function (t, n) {
                        var e, o, c, r, a, s, l, d, g, h, b, p, j, m;
                        for (o = 0, c = (e = k) ? "" + e : "", r = 0; r < c.createElement; r++) o = Math.log(31, o) + c.src(r) | 0;
                        for (o = 1922100408, h = 3 * (g = (d = t.exports(/[^A-Za-z0-9+/]/g, "")).createElement) + 1 >> 2, b = new Uint8Array(h), p = 0, j = 0, m = 0; m < g; m++)
                            if (s = 3 & m, p |= ((l = d.src(m)) > 64 && l < 91 ? l - 65 : l > 96 && l < 123 ? l - 71 : l > 47 && l < 58 ? l + 4 : 43 === l ? 62 : 47 === l ? 63 : 0) << 6 * (3 - s), 3 === s || g - m == 1) {
                                for (a = 0; a < 3 && j < h; a++, j++) o = (o + 1) % 255, b[j] = p >>> (16 >>> a & 24) & 255 ^ o;
                                p = 0
                            } return b
                    }(n), _ = [];
                    for (var t = 0; t < e[0][2]; t++) _[t] = {
                        jz: void 0
                    };
                    v = [], U = [], A = e[0][4], E = !1, Q = null, o(e[0][4])
                }(), g
            }("qaiqrKyur7CxsLO2t7a2ubm6u769vLzAwMDDxMXExcpJycnMz8rP09PW0b3W1NPat9nZ2N+43OLl4Izn5+Llxero7+6d7e3085Pw9vH0mfv7/vmZ/vwEA24ABgEEKgsLDglkDgwLEn4RERAXehQaHRh/Hx8aHUUiICcmVyUlLSu7KS+sKCsyMjMxN7cwNTw6Ozo/PT4/QkZAQERFRkdLTEpIT0VNF0tRUlRQUVZXWFtf3lpbWlpgaWc7f2Vmbmxvb2FpbmpsdXp3cXZ3c/d7fHp+en19eoSE5oCBgYPui4yOjv+Oi4uV5ZGWkZASlZoYnJ+Zn5+doiOkpqCnp6asqaqrqaqrq7CxsrCxubOzuLm6uLm5u7/DxMDGQsbDx83OysjJwMtM09TV1tPV1tfa21Ld2Njc3OLlYuDg5eLv6Oru7+iB7ev09Z3w8PHylPv9/v+d/voEBW4AAAECVAsNDg94DgoLFH4RFxARZBQcHR56HxkaG0ciJicgQCUjLS2mKS6sKCo0MzMxNrcwMz07Ozo5PT4/RENGw0dBRkNBSUlPSEkZTFRVVjZXUVJTOlpeX1gOXVtkZQ1gYGFiBGttbm8HbmprdBRxd3BxAnR8fH7yfn//eYWFgIKGhwSBjIyIio2Ljo+QlZCXHZeUHZKcnpmdmp6foKSlpq+lpqekq62rrK2gq7WzvbGwpbK1qZW4u7y5ub3MwcLDyMDAx8jJxMjOyMHK097R1sTR1cfb3cuV3t3e3Ofl7uPk5eri7enq6+Lv6ur/9PD89vDm9Prp+Pjtf/wAAQAEBwkGBwgLD4YCCQ0KEhScHRcRExQbCxkUHB0eHyAhIiEhtSAjKywrOy4pPisyIJcxNDUyMDo1Ojs8PzuuTkJARldARUVL215JSU5eS1JQWlNUVVJbXFlaW1xWXFtgYGtjZGVka2phamtsYmptYHN2YqZ3dnd6bKF5fH1ye4mBgoOUh4KGgomKi46PjA+RmpKTlJeSlYiYlpucnZyToqCio6SpoquoqaqoqKaqrbGwv7O0tbKwvLW6u7y/vCzAwsjD0sDCxcvFz8HMzc7A09TDvtDV1tTa2k7Y39rdyuDh4uHhc+Dl6+zr5Onv/5vz8fL29vBi9P31//r8/f4MAw4DBAUFBQMLDwoPDwkNBRESExYQgREbGx8ZCdcdHyAjIbcnJiEkPSkqKy4ouCkyMjcyNjCuOTs7Pzc5MT4/QFVAQEFUjERISUhJTtlNTVxTU1NUVVpSVFlaW19YVVpiYGFmY2BzZ2hpaGn7a21qcnNnuXd1dnV77Xl4e35rf4CBgIESg4OEioiLhYyNjoqXlIuTlJWSlZiamJmeB52drKOso6SlpaWsq6qorq+sNLOzvrG2tba3tLq0u7y9vbzLwsDCx8bCxMjKycnPUc3M3NLf09TV1dTc2trY39/dQuPi7uDm5ebn5Ovn6+zt7e378/Hy9/f79XT6+Pz+4/4AAQAAmwMCBQsICQ8HCQsOERoSExQRA3ocGRoWGJ0fECAhIicoISknKCktLigtLi8yMrc1NjA1Nzw6OjE5Pz0/Q0pCVUZBQ0RPS0ZLTE1MTPBRV19UQ1JVW1xeX1xcTl9gYWZnYGVndmhpam9oaW5uYnFyc3Bxcnd5anp7fHl6e4CAloOEhYKDjImLnoyNjouUlZKSgpWWl5ydnpudip6foKWmp6Wkvqeoqa6nqKKur7C2t7e0tba1uzy8ubm+vrvDw8jGxsbGxMXJ3MnIyM3N0lHR0dTX2Nfb297Zmd7c2+KT4eHg55Tk6u3ohO/v6u2C8vD29nD09Hn///n//PwDgwQBAQYHBhEJCgsODwyPExMSERsVFRUcG2kYHhkcayMjJiFFJiQjKkopKSgvRSwyNDC2Nja3MT07OTo+Prw5QkRBQkVfRkdIS0hJzE5MT1JBUlBWUVQ+W1teWTJeXFtiAmFhYGcKZGptaB5vb2ptFHJwd3YQdXV8ewl4fnh894KCA4WBh4WGiooIjY6IjY6RipKTlJeUlRiamJuejJ6coqWg1qenoqXbqqivrsitrbSzwLC2sbTEu7u+ud++vLvCs8HBwMevxMrNyLvPz8rNpNLQ1tZf1NRZ39/Z39zc3GLn4Obn5Of76Onq6eDv4e/w8fXw8PX29/r8f/34/vsABQcHDgYCAggMGAsaCQwMFR0WHBQVFhAdHRobHB8dmiYjJyAkISUhIiwoKCwuPS8mMzY2Nzk0ODg5Ojw/OT4/QENHxkJBRUJITU9DRk5KSlBURlNCUVRUXVte219ZXlt1YWFnYGEgZGxtbh5vaWprHnJ2d3AWdXN8fQ54eHl6FoOFhofrhoKDjOeJj4mJBo2VEJSQkJCXlZ0bnJ+fmJ+evaGio6Cnoierraqvuq2tq7S1wrCwsbLFu72+v9O+urvEtcHHwMGpxMzNzr/PycrLqdLW19Cl1dPc3b/Y2NjaVuLkY+Xn4ePm6uxo7eju6+7x7/Lz9PH083j6/vv46v4DBQYHcAYCAwxmCQ8ICV0MFBUWZxcREhNqGh4fGHQdGyQlTCAgISJAKy0vL6QvK642MjY2NTcztT49OT49PCE/QEFGT0BKRkdITk9PTE1OTVPUVFFRVlZTW1NQXl5eXlx4YXRhYGBlcHBrampsbW5vcnZwUnR1dnV723R+fn58fCOPgIaHhIeHiImIjI6sjo+Qk5ExmpCUlJqaOZuehJ6JpKShoaOhgqeoqaipDqOtq7KzsBa6sbW1ursfvb+5vL/HwuPDxMXExWrHzsjOz8xs3NLT09TVwNLc29nX2d3e3+Dx4ubz8uLi6Ofp6uns7u/w8fHx93X39vj5+vj+/lgBAwIDBAYKBAoJCgsOCJYBEhIXEhcVFhcaHRgbHRkeHyAjLiEgJSYnJCwqKywtNywyNCPpPDU2ND86Pjs8PTw6xUdAQEFFSkJLSUpLRU5MSlNSVVBQVVZXWlz9XV5eW15jY25hZmVmZ2pswm1vb2tufHRzc3R1fHV9ent6fH1+fZqDhoOEhYaS+IGKi4CPj4+QkYKTloKBk5qZlJidn5+foKGioKCmpqapqaqrr6WtQA4cbL+2tLa3uKK/uL68vL/AwcfLwZIIAYnFyMrMzc7U09TQ0tfV1tfb3dnb3dne3+Di7uDg5ebn5Ovq6+zt7Opo//bx8ezz9PzoK/L8/fsMBAYDBAUFAgQMCgsMDQwLuRcRFhAUFxIYGRoYEB4cHyAhLichJSYnMywpLy8oJiqBSAWtNzAxMjw5Ojs+OZQ5Q0RGQUVHRkdISkZIT01OT1xVV1NUVU1SW11ZXlRYyztVPmFmY2BiZ2hpaG/Ga21qdHNzcHR1dnRien57fH1+arCIgoOIhoSHiImGj46Njo+UlIKPlpGTjJ2amJiZlZv0akonoKGio6OoqaqprgeorLWzsL+2tra3uLW/uLy9vrvEzN7FwcHdw8rPyc/EyfthYhPR19PR0tfY2djddtvc2+bj+eXn5+fl6Onq7eDr7e/w8f7x9/X29/z66uf4//0bAgQHBwYOBGPD4Y4PDgkMFBESExYRvBEeGh4ZEBkcHyAhLiAmJSYnLCsnNykuLDQyNTcwNj00ApaL+Dg+Ojw7QEFCQUHvQENKTEhQSUtKTlNRUlNRSFNXWFlaW1ytH1dknp18ZGlgZGhpanVuaWhmdnRwf3Z3dnd4fX97YHl8eoqEhIeUhYOQn42Pi4KJj4qRkZKTlJGakpiZmpufmJmagaGio6ahDaGurK6qvK2ouKe9tLe0tba0vr68qry9vr3EbcTGwsHHxcxRxM3JycrL0M7X1dDU1tfY2d/X2d3e3+Dw2ujk5ePyz+Lq6/vp6u/+9/P39fX29/j/9v/8/f4AAgYEACQGBwgLDKAKDwoJEQESEQMCDhUZCHUQHB0cCkEqIiMzISAnJi0rLS0tLi8wNT41NDU2Nzs/PT0dPT4/QkXpRUdDQkZYSUlcW0lNT15VU1BVVVZXWF1WWFxdXl9jYmVgRWVmZ2ptwW1qbmpuYHF0ZGN5cHp4eXprfHtpaISHgo2AhICGiImKi4iJiI6elZOVlZSWl5idnp2ek5qepqCgo6SloqOuqqSvrauvrLCxsrews7O2ubm6u7q5uLbBw8LDxMPCwTbIycvMzcjD1sLS09TEgNvY2dzc2tne3+Dj5mbi5uDj6O3uFOXr7evz9/X18PX29/r9Xf3/+/oBAAMDBAUFEl4FCgsADg4PEBEREBMWGhcYGRgfsRsYHCQgIyckJSYhJC8uKywtLCuoPzE1MDQzNzg5OTw/Ez4/QE1GRkRFRkRMaU5ITUxIT1BRVldQVVdQWFlaX1BZWV9gYW5gYWVmZ3Fvbmh9gmJvcHd+dXJ1dnd0en17fH1ye4eBgoOHgYqDjImKi46KJ4mYlZWSgpKQlJCDnZycnZ6ftQeuo6SpoaGoqaqppDWgrLe5s7u0tba0vLq6uru9vr/DzcHExMXGy8DBysvM1MnM2MCq3tTV0dvf39rb3NHW2ODh4u/n4+bn6OXs7Ozt7uH08vT/8vT29/ji+f/66/gHCQEPAgQGBwgFCQkMDQ4FGBcRHxcWFhcYOBwTHxwfHyAhJDkiIiYnKCk/ICEtLiM2NzIzNCU2MS8uPj08Mz0+RkBCQ0RFRUNOSUtKTE1OSVRXUlJWVVZXXlVcWVxdXlNjYWJjZGdu/2ZuaWN1ZWhoYVV8c3R9en96eXp7f3Vyd4CBgoOGgi+BjoGNio2Ojo+Ql56VlZWWl5yen7mUm5mTp6Cio6SGoK+vpa2orK2upbi3tbK1tba3sLWyury9vrPHwMLDxNvAz8/Iy8vMzcjV1tPS09TVw3XV2drX2tPe3+Dwj+3k5eDr7ujq6+zq6evw8fLx/HDw9P/x+vP07dkAAQsEBw0FAA8ODgsMDQwHtxcRFBwUHB8eGhsaHB0eFzVMLCMkKS4oKCkqKS+CJCk4Mj4wNTU2NzIxPDgsPTYoV0VKQ0pGR09JSUpLTE5KR1FfUVJcVFdXWFlZX1RfUFxhaWNhZGVmZGxhaWVvbGZuc3Fyc3d5fnl4eXpqs3N+f4iWl0yKhYaLgImKi4yMmo+QkZqfnJSWl5iYj5ucnZaTqKOio6SksKeoqaKnpK6ur7CwpbO0tb6gvLG6tb+8tr7AwcLDx8nOx8jJysjEysbu0NHS0dd+0NHQ2tvL3NvJyOTn4u3n5ODm6Onq6+/h6O/w8fLw8vLw1vj5+vn/VvgIBwECFAUOEB8NAgsCDg8HERESExQWGh8YGRobHxUZFwEhIiMmJo0hLiEpKjwtKDgnNTQzOjY3MTk5Ojs8PjI5QEFCQ0dDQUFpSUpLTk7lSVhXUVJEVV5AT11SW1JeX1dhYWJjZGZqb3Rpamtobm9ldnlxcmh1dnd+dXxnfH1+e4Oho4uChoKEiK2Mg4+cu5+QkZSfkrWWl5ianJyakZ6foK2hvqSlpqmgr6mLr6Wuo7ivsrO0u7C0sLWypLy9vrnDx8rCxcTGx8jKxsjNzc7PweHC09TWztTZyPHL3N3dyv3x4uPx1fbn6Pzf++zt4ufw8fLz9vNu+f/x/Pr+/f4ABgYEBAQFBwgJDQcLDg4PEB0UERQVFg4QHhwKzg0eHygtKiMkJSYrLioqKywhKS8wMTI/MDY2Nzg3Mzw4MTorQEFCWENMQlFMQUxMQElZT1BRXlRAVVZXUV9eXFBaSF9gYWhnYmJqYH1pamtma2pofHZkc3R1V3N+fntvfH1+e5qFgYOEhYaS2ZmKi5uBioWQkZKCcYWWl5yOj36MnZ6bpKKjt6SlpqOsrb+qua2ur7S1tki1o7a3uL2+v7+8qb/AwcbUwMHGyc/IzsrMzc7P19XW0trS19PZ2Nrb3NrS2+Hh4uPm4n7p7u3t6u7t7u/29fTz9fb29/j/9v3//f4ADQUBBAUGHgwPDRrNHA4PFB0WExQVFhsfGhobHBEYHiAhIi8sJiYnKCcjLSQhJjcwMTIoMjw+ITA9PT0wNSU/QEFORVxFRkdBTkJNQEtUT1BRWFtTU1pRQVlaW1ZaVllsZ3hjZGVHb29va3NsbW5nanlxc3R1dmI4aHp7a3l2f46Hg4uFhYaHiI+Gg4yNjo+TmZWbtZWWl5qfMZ2blZiesKGltLOhoaemr6usra2ur7C3vrS0tba3u769vJ29vr/Cx2nFzMLAxtjJwtzbycbP3tfT29XV1tfY39bT3N3e3+Pp5evF5ebn6u9B7evl6O7g8fXk4/Hx9/b/+/z9/f4AAQQHAwQIAQkOCwoMDQ4JHBYSExQVFRAUHhobHB0dGCcmLiMkJSohCCkqKyIlKSk8NxMzNDU4MDA/Nj0ePT4/TklFRUZD9kFPQUxJTU9OT1BWXlRRVVZXVF9YW1xdXVlrZ2ViaGJnZ2hpfmNqan+kYnFye2x9d2a+a3p7dGjGbYCBl0iWhYaLj4uKi4yPiBeelZWVhJWSgI+dnpuSm5+boaGio6SjqqOoqaqrrqsLi7e1tLK1tba3v6m6vKuqm7/A5MHDqaS24szJoKSlo+vF0KK3p4C8u7K3rK7+2N2TvpSJx+Xkl4eJjIaHzu/tiYqE1PTzu5eckpuN3/X8mZtmaGxmVHdpd217fnIpDg54dXM3FRRxZH5ufGg+FR1wflZIRUJQSlQCLildQkJJQVgVOTJfW1ZXQ1FWVB40PVZQMzUsIikgY1FIYWInIy4vIzg+ISd9KX4kKDU1NCx0d3pkYRYGFxFDb2gNBQgZAAsBBFR7cwEbEhIeEBQeGFh2f+fk9s7h6NLorY+K1O3px+vjtJ6T+Pr19vTK7vTu/Pn6haaixMHR79PNxI+srN7L2/nF196Rs7bb3dfdz9SYur+ita2i4cDGsamlv67pzs68ubb31dSjt7utvOj+2N2ttofTx+fkr7Wopszj65+ZnIaelpuVjdDz94uWlo2Z2PgAUnZxbWthIgEJenljeWF7aWF3NhMVZHJodXt4eTgWH2ZUTEBQTElJDSEqX0N+Wl1ZX1UWCjV3dXt9f317dXd1Cw0PDQsVFxUbHR8dGxUXFTEzMTcxMzE/MTMxNzEzMS8RExEXERMRHxETWlpeXlpaRkZKSlFwdhEUFhUJWXt+HOjg8MLwoIyH6+Hr+c/i6urR5beXlPz74vS8lpv67/Hy48nD0efKwsKNv6rMydnrw9Xc193AxvTO+9XbyM/z39Kl5MbDpbGppe3Dyp6lo7r3kaOgsq3w19fi/N7bv7yys8Y=", [
                [0, -1, 32, [], 4866],
                [1, 0, 34, [2, 0, 3, 1, 4, 2, 5, 3, 6, 4, 7, 5, 8, 6, 9, 7, 10, 8, 11, 9, 12, 10, 13, 11, 14, 12, 15, 13, 16, 14, 17, 15, 18, 16, 19, 17, 20, 18, 21, 19, 22, 20, 23, 21, 24, 22, 25, 23, 26, 24, 27, 25, 28, 26, 29, 27, 30, 28, 31, 29, 32, 30, 33, 31], 1975],
                [2, 0, 37, [5, 0, 6, 1, 7, 2, 8, 3, 9, 4, 10, 5, 11, 6, 12, 7, 13, 8, 14, 9, 15, 10, 16, 11, 17, 12, 18, 13, 19, 14, 20, 15, 21, 16, 22, 17, 23, 18, 24, 19, 25, 20, 26, 21, 27, 22, 28, 23, 29, 24, 30, 25, 31, 26, 32, 27, 33, 28, 34, 29, 35, 30, 36, 31], 2101],
                [3, 0, 38, [6, 0, 7, 1, 8, 2, 9, 3, 10, 4, 11, 5, 12, 6, 13, 7, 14, 8, 15, 9, 16, 10, 17, 11, 18, 12, 19, 13, 20, 14, 21, 15, 22, 16, 23, 17, 24, 18, 25, 19, 26, 20, 27, 21, 28, 22, 29, 23, 30, 24, 31, 25, 32, 26, 33, 27, 34, 28, 35, 29, 36, 30, 37, 31], 2277],
                [4, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 2773],
                [5, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 2813],
                [6, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 2873],
                [7, 0, 32, [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31], 2913],
                [8, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 2928],
                [9, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 2968],
                [10, 0, 32, [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31], 3008],
                [11, 0, 40, [9, 0, 10, 1, 11, 2, 12, 3, 13, 4, 14, 5, 15, 6, 16, 7, 17, 8, 18, 9, 19, 10, 20, 11, 21, 13, 22, 14, 23, 15, 24, 16, 25, 17, 26, 18, 27, 19, 28, 20, 29, 21, 30, 22, 31, 23, 32, 24, 33, 25, 34, 26, 35, 27, 36, 28, 37, 29, 38, 30, 39, 31], 3019],
                [12, 0, 36, [4, 0, 5, 1, 6, 2, 7, 3, 8, 4, 9, 5, 10, 6, 11, 7, 12, 8, 13, 9, 14, 10, 15, 11, 16, 12, 17, 13, 18, 14, 19, 15, 20, 16, 21, 17, 22, 18, 23, 19, 24, 20, 25, 21, 26, 22, 27, 23, 28, 24, 29, 25, 30, 26, 31, 27, 32, 28, 33, 29, 34, 30, 35, 31], 3459],
                [13, 0, 36, [4, 0, 5, 1, 6, 2, 7, 3, 8, 4, 9, 5, 10, 6, 11, 7, 12, 8, 13, 9, 14, 10, 15, 11, 16, 12, 17, 13, 18, 14, 19, 15, 20, 16, 21, 17, 22, 18, 23, 19, 24, 20, 25, 21, 26, 22, 27, 23, 28, 24, 29, 25, 30, 26, 31, 27, 32, 28, 33, 29, 34, 30, 35, 31], 3721],
                [14, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 3840],
                [15, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 3880],
                [16, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 3920],
                [17, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 3960],
                [18, 0, 36, [4, 0, 5, 1, 6, 2, 7, 3, 8, 4, 9, 5, 10, 6, 11, 7, 12, 8, 13, 9, 14, 10, 15, 11, 16, 12, 17, 13, 18, 14, 19, 15, 20, 16, 21, 17, 22, 18, 23, 19, 24, 20, 25, 21, 26, 22, 27, 23, 28, 24, 29, 25, 30, 26, 31, 27, 32, 28, 33, 29, 34, 30, 35, 31], 4e3],
                [19, 0, 32, [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31], 4307],
                [20, 0, 36, [4, 0, 5, 1, 6, 2, 7, 3, 8, 4, 9, 5, 10, 6, 11, 7, 12, 8, 13, 9, 14, 10, 15, 11, 16, 12, 17, 13, 18, 14, 19, 15, 20, 16, 21, 17, 22, 18, 23, 19, 24, 20, 25, 21, 26, 22, 27, 23, 28, 24, 29, 25, 30, 26, 31, 27, 32, 28, 33, 29, 34, 30, 35, 31], 4362],
                [21, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 4546],
                [22, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 4586],
                [23, 0, 33, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31], 4626],
                [24, 0, 35, [3, 0, 4, 1, 5, 2, 6, 3, 7, 4, 8, 5, 9, 6, 10, 7, 11, 8, 12, 9, 13, 10, 14, 11, 15, 12, 16, 13, 17, 14, 18, 15, 19, 16, 20, 17, 21, 18, 22, 19, 23, 20, 24, 21, 25, 22, 26, 23, 27, 24, 28, 25, 29, 26, 30, 27, 31, 28, 32, 29, 33, 30, 34, 31], 4666],
                [25, 1, 35, [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 26, 28, 27, 29, 28, 30, 29, 31, 30, 32, 31, 33, 32, 34, 33], 4829]
            ], ["constructor", "apply", "prototype", "iterator", "defineProperty", "length", "charCodeAt", "imul", "replace", "abs", "buffer", "pop", "toString", "search"]);

            function V(t) {
                return D[11](t, 13, 9, 252)
            }
            const P = D[13],
                N = D[18],
                W = D[19],
                H = D[20],
                L = D[24];

            function q() {
                this.players = [], this.add_player = function (t, n, e) {
                    this.players[t] = {
                        i: t,
                        d8: n,
                        score: e,
                        jA: ![],
                        jB: null,
                        jC: null,
                        jD: null
                    }
                }, this.remove_player = function (t) {
                    this.players[t].d8 = "", this.players[t].score = 0, this.players[t].jA = ![]
                }, this.new_player = function (t, n, e, o) {
                    this.players[t].d8 = n, this.players[t].score = e, this.players[t].jA = o, this.players[t].jB = null, this.players[t].jC = null, this.players[t].jD = null
                }, this.jE = function (t, e) {
                    this.players[t].score = e, this.players[t].jD && T().hV(this.players[t].jD, T().hT(e), n().dP, n().dQ)
                }
            }
            let O = {};
            O.jF = {}, O.jG = function (t, n, e) {
                return t + "-" + n + "x" + e
            }, O.jH = function (t, n, e) {
                n = Math.ceil(n), e = Math.ceil(e);
                let o = document.createElement("canvas");
                return o.width = n, o.height = e, O.jF[this.jG(t, n, e)] = o, o
            }, O.jI = function (t, n, e) {
                return this.jF[this.jG(t, n, e)]
            }, O.jJ = function (t, n, e) {
                delete O.jF[this.jG(t, n, e)]
            }, O.jK = {}, O.jL = function (t, n = 256, e = 256, o = null) {
                n = Math.ceil(n), e = Math.ceil(e);
                let c = o ? t + ":" + o : t,
                    a = this.jI(c, n, e);
                if (!a) {
                    a = this.jH(c, n, e);
                    let f = O.jK[t];
                    if (f) f.fX ? this.jM(f, a, o) : f.addEventListener("load", () => this.jM(f, a, o));
                    else {
                        let c = new Image;
                        c.fX = ![], c.src = t, c.addEventListener("load", () => {
                            this.jM(c, a, o), c.fX = !![]
                        }), c.addEventListener("error", () => {
                            console.error("Error loading image:", t), delete O.jK[t], this.jJ(t, n, e)
                        }), this.jK[t] = c
                    }
                }
                return a
            }, O.jM = function (t, n, e) {
                let o = n.getContext("2d");
                o.clearRect(0, 0, n.width, n.height), o.drawImage(t, 0, 0, n.width, n.height), e && (o.save(), o.globalCompositeOperation = "source-atop", o.fillStyle = e, o.fillRect(0, 0, n.width, n.height), o.restore())
            };
            let K = 1923912;
            O.jN = function (t) {
                return "/img/icon/" + t + ".png?v=" + K
            }, O.jO = function (t) {
                return "/img/ui/" + t + ".png?v=" + K
            }, O.jP = function (t) {
                return "/img/hats/" + t + ".png?v=" + K
            }, O.jQ = function (t, n = ![]) {
                return "/img/entity/" + t + ".png?v=" + K
            }, O.jR = function (t) {
                return "/img/items/" + t + ".png?v=" + K
            }, O.jS = function (t) {
                return "/img/skins/" + t + ".png?v=" + K
            }, O.jT = function (t) {
                return "/img/decorations/" + t + ".png?v=" + K
            }, O.jU = function (t) {
                return T().id(t)
            };
            var z = O,
                Z = p(6466),
                Y = p.n(Z),
                X = p(9968),
                J = p.n(X);
            const $ = [];

            function tt(t, n, e, i, o, c, r, f, a, s, l, d) {
                this.jV = t, this.jW = n, this.jX = e, this.jY = i, this.jZ = o, this.k0 = c > 0 ? c : 0, this.k1 = r, this.k2 = f, this.k3 = a > 0 ? a : 0, this.k4 = s, this.k5 = l, this.k6 = d > 0 ? d : 0
            }
            $[Y().cq] = [];
            for (let t = 0; t < 14; t++) $[Y().cq][t] = z.jU(z.jS("game-rank" + t));
            $[Y().L] = [], $[Y().M] = [], $[Y().cp] = [], $[Y().cO] = [];
            for (let t = 0; t < J().gJ; t++) $[Y().L][t] = z.jU(z.jS("body" + t)), $[Y().M][t] = z.jU(z.jS("arm" + t));
            for (let t = 0; t < J().gK; t++) $[Y().cp][t] = z.jU(z.jS("accessory" + t));
            for (let t = 0; t < J().gL; t++) $[Y().cO][t] = z.jU(z.jS("back" + t));
            $[Y().N] = z.jL(z.jQ("skull"), 45, 45), $[Y().O] = z.jU(z.jQ("rock")), $[Y().cy] = z.jU(z.jQ("cave_stone0")), $[Y().cz] = z.jU(z.jQ("cave_stone1")), $[Y().cA] = z.jU(z.jQ("cave_stone2")), $[Y().cF] = z.jU(z.jQ("ice0")), $[Y().cG] = z.jU(z.jQ("ice1")), $[Y().P] = z.jU(z.jQ("resource_background")), $[Y().Q] = null, $[Y().R] = null, $[Y().S] = null, $[Y().T] = z.jU(z.jQ("tree")), $[Y().bG] = z.jU(z.jQ("palm_tree")), $[Y().aQ] = z.jU(z.jQ("cherry_tree")), $[Y().U] = z.jU(z.jQ("bush")), $[Y().V] = z.jU(z.jQ("gold")), $[Y().ak] = z.jU(z.jQ("lootbox")), $[Y().a1] = null, $[Y().a2] = z.jU(z.jQ("bullet")), $[Y().W] = z.jU(z.jQ("wall")), $[Y().Y] = z.jU(z.jQ("trap")), $[Y().Z] = z.jU(z.jQ("boost")), $[Y().X] = z.jU(z.jQ("spike")), $[Y().a0] = z.jU(z.jQ("platform")), $[Y().a5] = z.jU(z.jQ("wood")), $[Y().a4] = z.jU(z.jQ("leaf")), $[Y().a7] = z.jU(z.jQ("stone")), $[Y().a6] = z.jU(z.jQ("particle_gold")), $[Y().a9] = z.jL(z.jQ("health-gauge-background"), 210, 40), $[Y().a8] = z.jL(z.jQ("health-gauge-front"), 210, 40), $[Y().aa] = z.jU(z.jQ("stone_sword")), $[Y().cb] = z.jU(z.jR("g_stick")), $[Y().cd] = z.jU(z.jR("d_stick")), $[Y().ce] = z.jU(z.jR("r_stick")), $[Y().cf] = z.jU(z.jR("d_cutspear")), $[Y().ch] = z.jU(z.jR("g_cutspear")), $[Y().cj] = z.jU(z.jR("g_toolhammer")), $[Y().cl] = z.jU(z.jR("d_toolhammer")), $[Y().cn] = z.jU(z.jR("r_toolhammer")), $[Y().cc] = z.jU(z.jQ("inv_g_stick")), $[Y().ct] = z.jU(z.jQ("inv_d_stick")), $[Y().cu] = z.jU(z.jQ("inv_r_stick")), $[Y().cg] = z.jU(z.jQ("inv_d_cutspear")), $[Y().ci] = z.jU(z.jQ("inv_g_cutspear")), $[Y().ck] = z.jU(z.jQ("inv_g_toolhammer")), $[Y().cm] = z.jU(z.jQ("inv_d_toolhammer")), $[Y().co] = z.jU(z.jQ("inv_r_toolhammer")), $[Y().bS] = z.jU(z.jR("d_axe")), $[Y().bT] = z.jU(z.jQ("inv_d_axe")), $[Y().bU] = z.jU(z.jR("g_axe")), $[Y().bV] = z.jU(z.jQ("inv_g_axe")), $[Y().bW] = z.jU(z.jR("d_great_axe")), $[Y().bX] = z.jU(z.jQ("inv_d_great_axe")), $[Y().c6] = z.jU(z.jR("g_great_axe")), $[Y().c7] = z.jU(z.jQ("inv_g_great_axe")), $[Y().d1] = z.jU(z.jO("indicator_enemy")), $[Y().d0] = z.jU(z.jO("indicator_enemy")), $[Y().bY] = z.jU(z.jR("d_katana")), $[Y().bZ] = z.jU(z.jQ("inv_d_katana")), $[Y().c0] = z.jU(z.jR("g_katana")), $[Y().c1] = z.jU(z.jQ("inv_g_katana")), $[Y().ca] = z.jU(z.jR("c_katana")), $[Y().c9] = z.jU(z.jQ("inv_c_katana")), $[Y().c4] = z.jU(z.jR("g_spear")), $[Y().c5] = z.jU(z.jQ("inv_g_spear")), $[Y().c2] = z.jU(z.jR("d_spear")), $[Y().cZ] = z.jU(z.jR("scythe")), $[Y().c3] = z.jU(z.jQ("inv_d_spear")), $[Y().bP] = z.jU(z.jR("bat")), $[Y().cY] = z.jU(z.jR("meme")), $[Y().ab] = z.jU(z.jQ("stone_toolhammer")), $[Y().ac] = z.jU(z.jQ("stone_spear")), $[Y().ad] = z.jU(z.jQ("s_musket")), $[Y().al] = z.jU(z.jQ("stone_axe")), $[Y().cK] = z.jU(z.jQ("stone_axe")), $[Y().bE] = z.jU(z.jQ("great_axe")), $[Y().aB] = z.jU(z.jQ("cookie")), $[Y().cB] = z.jU(z.jQ("chest")), $[Y().aJ] = z.jU(z.jQ("map")), $[Y().aw] = z.jU(z.jQ("shield")), $[Y().aI] = z.jU(z.jQ("cow")), $[Y().cx] = z.jU(z.jQ("fireball")), $[Y().bR] = z.jU(z.jQ("gcow")), $[Y().bM] = z.jU(z.jQ("shark")), $[Y().bN] = z.jU(z.jQ("wolf")), $[Y().cJ] = z.jU(z.jQ("teleporter")), $[Y().cH] = z.jU(z.jQ("duck")), $[Y().cI] = z.jU(z.jR("pearl"));
            let nt = [];
            $[Y().cD] = nt, nt[1] = [
                [z.jU(z.jQ("mammoth_tail")), new tt(-40, 0, 0, 0, 0, 0, 0, 0, 0, -Math.PI / 7, Math.PI / 7, 2e3)],
                [z.jU(z.jQ("mammoth_body")), new tt(0, 0, 0, 0, 0, 0, 0, 0, 0, Math.PI / 20, -Math.PI / 20, 1600)],
                [z.jU(z.jQ("mammoth_head")), new tt(100, 0, 0, 0, 0, 0, 0, 0, 0, -Math.PI / 10, Math.PI / 10, 1e3)]
            ], nt[0] = [
                [z.jU(z.jQ("mammoth_tail")), new tt(-40, 0, 0, 0, 0, 0, 0, 0, 0, -Math.PI / 7, Math.PI / 7, 2e3)],
                [z.jU(z.jQ("mammoth_body")), new tt(0, 0, 0, 0, 0, 0, 0, 0, 0, Math.PI / 20, -Math.PI / 20, 1600)],
                [z.jU(z.jQ("mammoth_head_angry")), new tt(100, 0, 0, 0, 0, 0, 0, 0, 0, -Math.PI / 10, Math.PI / 10, 1e3)]
            ], $[Y().cE] = [
                [z.jU(z.jQ("dragon_2_body")), new tt(-50, 0, 0, 2, -2, 1200, 0, 0, 0, Math.PI / 40, -Math.PI / 40, 1800)],
                [z.jU(z.jQ("dragon_2_left_wing")), new tt(10, -40, Math.PI / 5, 0, 0, 0, 0, 0, 0, -Math.PI / 5, 0, 1600)],
                [z.jU(z.jQ("dragon_2_right_wing")), new tt(10, 40, -Math.PI / 5, 0, 0, 0, 0, 0, 0, Math.PI / 5, 0, 1600)],
                [z.jU(z.jQ("dragon_2_head")), new tt(50, 0, 0, -3, 3, 1e3, 0, 0, 0, -Math.PI / 40, Math.PI / 40, 1400)]
            ], $[Y().b0] = z.jU(z.jQ("turret_base")), $[Y().aZ] = z.jU(z.jQ("turret_top")), $[Y().aY] = z.jU(z.jQ("turret_assembled")), $[Y().aW] = z.jU(z.jQ("hard_spike")), $[Y().bb] = z.jU(z.jQ("bow")), $[Y().bc] = z.jU(z.jQ("arrow")), $[Y().b5] = z.jU(z.jQ("wood_farm")), $[Y().b3] = z.jU(z.jQ("wood_farm_cherry")), $[Y().b6] = z.jU(z.jQ("stone_farm")), $[Y().b8] = z.jU(z.jQ("bush")), $[Y().cC] = z.jU(z.jO("currency")), $[Y().ar] = z.jU(z.jQ("hat_1")), $[Y().au] = z.jU(z.jQ("hat_2")), $[Y().av] = z.jU(z.jQ("hat_3")), $[Y().ay] = z.jU(z.jQ("hat_4")), $[Y().az] = z.jU(z.jQ("hat_5")), $[Y().aA] = z.jU(z.jQ("hat_6")), $[Y().cM] = z.jU(z.jQ("cactus")), $[Y().cN] = z.jU(z.jQ("tornado")), $[Y().bh] = z.jU(z.jQ("hat_7")), $[Y().bJ] = z.jU(z.jQ("hat_8")), $[Y().bO] = z.jU(z.jQ("hat_9")), $[Y().cL] = z.jU(z.jQ("hat_10")), $[Y().cX] = z.jU(z.jQ("hat_11")), $[Y().as] = z.jU(z.jQ("apple")), $[Y().aE] = z.jU(z.jQ("stick")), $[Y().aU] = z.jU(z.jQ("big_spike")), $[Y().bd] = z.jU(z.jQ("map_cross")), $[Y().aR] = z.jU(z.jQ("katana")), $[Y().bf] = z.jU(z.jQ("Xbow")), $[Y().bm] = z.jU(z.jQ("map_dot")), $[Y().d2] = z.jU(z.jQ("our_dot")), $[Y().aO] = z.jU(z.jQ("bed")), $[Y().bq] = z.jU(z.jQ("castle_wall")), $[Y().bn] = z.jU(z.jQ("cut_spear")), $[Y().bg] = z.jU(z.jQ("team_crown")), $[Y().c8] = null, $[Y().aV] = z.jU(z.jQ("skid_hat")), $[Y().aM] = z.jU(z.jQ("hammer")), $[Y().aD] = null, $[Y().aq] = z.jU(z.jQ("toggle-button-out1")), $[Y().bk] = z.jU(z.jQ("clan_button_out")), $[Y().bi] = z.jU(z.jQ("hat_button_out")), $[Y().bj] = z.jU(z.jQ("close_button_out")), $[Y().bl] = z.jU(z.jQ("chat_button_out")), $[Y().bo] = z.jU(z.jQ("inv_cut_spear")), $[Y().af] = z.jU(z.jQ("inv_stone_toolhammer")), $[Y().ae] = z.jU(z.jQ("inv_stone_sword")), $[Y().cP] = z.jU(z.jR("s_dagger")), $[Y().cT] = z.jU(z.jR("s_dagger")), $[Y().cQ] = z.jU(z.jR("g_dagger")), $[Y().cU] = z.jU(z.jR("g_dagger")), $[Y().cR] = z.jU(z.jR("d_dagger")), $[Y().cV] = z.jU(z.jR("d_dagger")), $[Y().cS] = z.jU(z.jR("r_dagger")), $[Y().cW] = z.jU(z.jR("r_dagger")), $[Y().ah] = z.jU(z.jQ("inv_stone_spear")), $[Y().ai] = z.jU(z.jQ("inv_stone_axe")), $[Y().bF] = z.jU(z.jQ("inv_great_axe")), $[Y().aC] = z.jU(z.jQ("inv_cookie")), $[Y().ag] = z.jU(z.jQ("inv_musket")), $[Y().aj] = z.jU(z.jQ("inv_wood_wall")), $[Y().bp] = z.jU(z.jQ("inv_castle_wall")), $[Y().an] = z.jU(z.jQ("inv_spike")), $[Y().am] = z.jU(z.jQ("inv_boost")), $[Y().ao] = z.jU(z.jQ("inv_platform")), $[Y().ap] = z.jU(z.jQ("inv_trap")), $[Y().at] = z.jU(z.jQ("inv_apple")), $[Y().ax] = z.jU(z.jQ("inv_stone_shield")), $[Y().bQ] = z.jU(z.jQ("inv_bat")), $[Y().aH] = z.jU(z.jQ("inv_windmill")), $[Y().aG] = z.jU(z.jQ("windmill_top")), $[Y().aK] = z.jU(z.jQ("windmill_base")), $[Y().aL] = z.jU(z.jQ("windmill_assembled")), $[Y().aF] = z.jU(z.jQ("inv_stick")), $[Y().aN] = z.jU(z.jQ("inv_hammer")), $[Y().aP] = z.jU(z.jQ("inv_bed")), $[Y().aS] = z.jU(z.jQ("inv_katana")), $[Y().aT] = z.jU(z.jQ("inv_big_spike")), $[Y().aX] = z.jU(z.jQ("inv_hard_spike")), $[Y().b1] = z.jU(z.jQ("inv_turret")), $[Y().b4] = z.jU(z.jQ("inv_wood_farm")), $[Y().b2] = z.jU(z.jQ("inv_wood_farm_cherry")), $[Y().b7] = z.jU(z.jQ("inv_stone_farm")), $[Y().b9] = z.jU(z.jQ("inv_bush")), $[Y().ba] = z.jU(z.jQ("inv_bow")), $[Y().be] = z.jU(z.jQ("inv_xbow")), $[Y().br] = z.jU(z.jR("wall")), $[Y().bs] = z.jU(z.jR("spike")), $[Y().bt] = z.jU(z.jR("castle_wall")), $[Y().bu] = z.jU(z.jR("boost")), $[Y().bv] = z.jU(z.jR("trap")), $[Y().bw] = z.jU(z.jR("stone_farm")), $[Y().bx] = z.jU(z.jR("berry_farm")), $[Y().by] = z.jU(z.jR("wood_farm_cherry")), $[Y().bz] = z.jU(z.jR("wood_farm")), $[Y().bA] = z.jU(z.jR("hard_spike")), $[Y().bB] = z.jU(z.jR("castle_spike")), $[Y().bC] = z.jU(z.jR("platform")), $[Y().bD] = z.jU(z.jR("bed")), $[Y().cv] = z.jU(z.jQ("roof")), $[Y().cw] = z.jU(z.jQ("roof")), $[Y().cr] = z.jU(z.jQ("clan_accept")), $[Y().cs] = z.jU(z.jQ("clan_decline"));
            var et = $,
                it = p(9428),
                ot = p.n(it),
                ct = p(1759),
                rt = p.n(ct),
                ft = p(3152),
                at = p.n(ft),
                st = p(3845),
                lt = p.n(st);

            function dt(t, n) {
                let e, c = Date.now(),
                    r = 0;
                e = entities[o().bM], r = e.length;
                for (let i = 0; i < r; i++) kt(e[i], Y().bM, t, n);
                e = entities[o().a0], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().a0, t, n);
                e = entities[o().Z], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().Z, t, n);
                e = entities[o().cJ], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().cJ, t, n);
                e = entities[o().aO], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().aO, t, n);
                e = entities[o().Y], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().Y, t, n);
                e = entities[o().ak], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().ak, t, n);
                e = entities[o().b6], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().b6, t, n);
                e = entities[o().O], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().O, t, n);
                e = entities[o().cF], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().cF, t, n);
                e = entities[o().cG], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().cG, t, n);
                e = entities[o().cy], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().cy, t, n);
                e = entities[o().cz], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().cz, t, n);
                e = entities[o().cA], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().cA, t, n);
                e = entities[o().V], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().V, t, n);
                e = entities[o().a2], r = e.length;
                for (let i = 0; i < r; i++) !(e[i].dZ & m().ip) && bt(e[i], e[i].jn, Y().a1, t, n);
                e = entities[o().cH], r = e.length;
                for (let i = 0; i < r; i++) kt(e[i], Y().cH, t, n);
                e = entities[o().e1], r = e.length;
                for (let i = 0; i < r; i++) !(e[i].dZ & m().ip) && jt(e[i], t, n);
                e = entities[o().bN], r = e.length;
                for (let i = 0; i < r; i++) kt(e[i], Y().bN, t, n);
                e = entities[o().cx], r = e.length;
                for (let i = 0; i < r; i++) kt(e[i], Y().cx, t, n);
                e = entities[o().aI], r = e.length;
                for (let i = 0; i < r; i++) kt(e[i], Y().aI, t, n);
                e = entities[o().bR], r = e.length;
                for (let i = 0; i < r; i++) kt(e[i], Y().bR, t, n);
                e = entities[o().cD], r = e.length;
                for (let n = 0; n < r; n++) {
                    const i = e[n];
                    ht(i, Y().cD, t, c - i.jt, i.dZ & m().iq ? 0 : 1)
                }
                e = entities[o().X], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().X, t, n);
                e = entities[o().aW], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().aW, t, n);
                e = entities[o().cB], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().cB, t, n);
                e = entities[o().W], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().W, t, n);
                e = entities[o().bq], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().bq, t, n);
                e = entities[o().e4], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().b0, t, n);
                e = entities[o().e4], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().aZ, t, n);
                e = entities[o().aU], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().aU, t, n);
                e = entities[o().e2], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().aK, t, n);
                e = entities[o().e3], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().aK, t, n);
                e = entities[o().U], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().U, t, n);
                e = entities[o().cM], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().cM, t, n);
                e = entities[o().cE], r = e.length;
                for (let n = 0; n < r; n++) {
                    const i = e[n];
                    ht(i, Y().cE, t, c - i.jt)
                }
                e = entities[o().b5], r = e.length;
                for (let i, o = 0; o < r; o++) i = e[o], pt(i, Y().b5, t, n);
                e = entities[o().b3], r = e.length;
                for (let i, o = 0; o < r; o++) i = e[o], pt(i, Y().b3, t, n);
                e = entities[o().T], r = e.length;
                for (let i, o = 0; o < r; o++) i = e[o], pt(i, i.jb === lt().gk ? Y().T : i.jb === lt().gm ? Y().aQ : i.jb === lt().gn ? Y().bG : Y().cK, t, n);
                e = entities[o().e1], r = e.length;
                for (let i = 0; i < r; i++) e[i].dZ & m().ip && jt(e[i], t, n);
                e = entities[o().cv], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().cv, t, n);
                e = entities[o().cN], r = e.length;
                for (let i = 0; i < r; i++) kt(e[i], Y().cN, t, n);
                e = entities[o().e2], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().aG, t, n);
                e = entities[o().e3], r = e.length;
                for (let i = 0; i < r; i++) pt(e[i], Y().aG, t, n);
                e = entities[o().a2], r = e.length;
                for (let i = 0; i < r; i++) e[i].dZ & m().ip && bt(e[i], e[i].jn, Y().a1, t, n)
            }

            function ut(t, n, e) {
                const o = et[Y().a8],
                    c = et[Y().a9],
                    r = at()[t.type].g9 + 50,
                    f = .5;
                n.fillStyle = e ? "#a4cc4f" : "#cc5151", n.drawImage(c, t.gU - f * c.width / 2, t.gV - f * c.height + r, f * c.width, f * c.height);
                let a = f * o.width,
                    s = t.je / 255 * (a - 10);
                n.fillRect(t.gU - a / 2 + 5, t.gV - f * o.height + r + 5, s, f * o.height - 10), n.drawImage(o, t.gU - f * o.width / 2, t.gV - f * o.height + r, f * o.width, f * o.height)
            }

            function gt(t, n, e, o) {
                let c = 0;
                if (0 !== n.k0) {
                    let t = o % n.k0 / n.k0;
                    if (Math.floor(o / n.k0) % 2 == 0) t = 1 - t;
                    c = n.jY + t * (n.jZ - n.jY)
                }
                let r = 0;
                if (0 !== n.k3) {
                    let t = o % n.k3 / n.k3;
                    if (Math.floor(o / n.k3) % 2 == 0) t = 1 - t;
                    r = n.k1 + t * (n.k2 - n.k1)
                }(0 !== n.jV || 0 !== n.jW || 0 !== c || 0 !== r) && (c += n.jV, r += n.jW, e.translate(c, r));
                let a = 0;
                if (0 !== n.k6) {
                    let t = o % n.k6 / n.k6;
                    if (Math.floor(o / n.k6) % 2 == 0) t = 1 - t;
                    a = n.k4 + t * (n.k5 - n.k4)
                }
                if ((n.jX || 0 !== a) && (a += n.jX, e.rotate(a)), T().ie(e, t, -t.i4.i7 / 2, -t.i4.i8 / 2, t.i4.i7, t.i4.i8), 0 !== a) e.rotate(-a);
                if (0 !== c || 0 !== r) e.translate(-c, -r)
            }

            function ht(t, n, e, o, c = -1) {
                let r; - 1 !== c ? r = et[n][c] : r = et[n], e.save(), e.translate(t.gU, t.gV), e.rotate(t.fe);
                const f = r.length;
                for (let t = 0; t < f; t++) {
                    const n = r[t];
                    gt(n[0], n[1], e, o)
                }
                e.restore()
            }

            function kt(t, n, e, o) {
                const c = et[n];
                e.save(), t.jx && (t.fe += t.jx * o), e.translate(t.gU, t.gV), e.rotate(t.fe), T().ie(e, c, -c.i4.i7 / 2, -c.i4.i8 / 2, c.i4.i7, c.i4.i8), e.restore()
            }

            function bt(t, n, e, o, c) {
                if (!t.active) return;
                const r = et[n];
                et[e], Math.min(400, t.range);
                o.save(), o.translate(t.gU, t.gV), o.rotate(t.fe), T().ie(o, r, -r.i4.i7 / 2, -r.i4.i8 / 2, r.i4.i7, r.i4.i8), o.restore()
            }

            function pt(t, n, e, o) {
                let c = 0,
                    r = 0,
                    a = 0;
                if (t.js.value) t.js.gE(o), a = t.js.value;
                else t.ju.active && !t.js.value && (t.js.gE(o), t.ju.active = ![], a = t.js.value);
                a && (c = 10 * Math.cos(t.ju.jv) * a, r = 10 * Math.sin(t.ju.jv) * a), t.jx && (t.fe += t.jx * o);
                const s = n !== Y().aK ? t.fe : 0;
                e.save(), e.translate(t.gU + c, t.gV + r), e.rotate(s);
                const l = et[n];
                T().ie(e, l, -l.i4.i7 / 2, -l.i4.i8 / 2, l.i4.i7, l.i4.i8), e.restore()
            }

            function jt(t, n, e) {
                const o = ot()[t.jb];
                n.save(), n.translate(t.gU, t.gV), t.js.value && t.js.gE(e);
                const c = t.jc ? rt()[t.jc] : null,
                    r = c ? c.d7 : 0,
                    f = t.dZ & m().iq ? et[Y().aV] : c ? et[c.d5] : null,
                    a = 70,
                    s = et[o.d5],
                    l = t.jn || 0,
                    d = et[Y().L][l],
                    u = et[Y().M][l],
                    g = t.jo || 0,
                    h = et[Y().cp][g],
                    k = t.jq || 0,
                    b = et[Y().cO][k],
                    p = t.js.value,
                    j = t.fe - p;
                if (!(t.dZ & m().ij)) switch (o.fB) {
                case 0:
                    if (n.rotate(j), 0 !== k) T().ie(n, b, -b.i4.i7 / 2, -b.i4.i8 / 2, b.i4.i7, b.i4.i8);
                    if (T().ie(n, s, a / 2 - 6 - s.i4.i7 / 2 + o.d7, -a / 2 - 13 + o.fC, s.i4.i7, s.i4.i8), T().ie(n, u, a / 3 - u.i4.i7 / 2, a / 3 - u.i4.i8 / 2, u.i4.i7, u.i4.i8), n.save(), n.translate(a / 3, -a / 3), n.scale(1, -1), n.translate(-u.i4.i7 / 2, -u.i4.i8 / 2), T().ie(n, u, 0, 0, u.i4.i7, u.i4.i8), n.restore(), T().ie(n, d, -d.i4.i7 / 2, -d.i4.i8 / 2, d.i4.i7, d.i4.i8), 0 !== g) T().ie(n, h, -h.i4.i7 / 2, -h.i4.i8 / 2, h.i4.i7, h.i4.i8);
                    f && T().ie(n, f, -f.i4.i7 / 2 - r, -f.i4.i8 / 2, f.i4.i7, f.i4.i8);
                    break;
                case 1:
                    if (n.rotate(t.fe), 0 !== k) T().ie(n, b, -b.i4.i7 / 2, -b.i4.i8 / 2, b.i4.i7, b.i4.i8);
                    if (T().ie(n, u, a / (2.3 + .1 * p) - u.i4.i7 / 2, a / 4 - u.i4.i8 / 2, u.i4.i7, u.i4.i8), T().ie(n, s, a / (.9 + .05 * p) - s.i4.i7 / 2 - o.d7, -s.i4.i8 / 2 + o.fC, s.i4.i7, s.i4.i8), n.save(), n.translate(a / (1.3 - .15 * p), -a / 4), n.scale(1, -1), n.translate(-u.i4.i7 / 2, -u.i4.i8 / 2), T().ie(n, u, 0, 0, u.i4.i7, u.i4.i8), n.restore(), T().ie(n, d, -d.i4.i7 / 2, -d.i4.i8 / 2, d.i4.i7, d.i4.i8), 0 !== g) T().ie(n, h, -h.i4.i7 / 2, -h.i4.i8 / 2, h.i4.i7, h.i4.i8);
                    f && T().ie(n, f, -f.i4.i7 / 2 - r, -f.i4.i8 / 2, f.i4.i7, f.i4.i8);
                    break;
                case 2:
                    if (n.rotate(j), 0 !== k) T().ie(n, b, -b.i4.i7 / 2, -b.i4.i8 / 2, b.i4.i7, b.i4.i8);
                    if (T().ie(n, u, a / 3 - u.i4.i7 / 2, a / 3 - u.i4.i8 / 2, u.i4.i7, u.i4.i8), n.save(), n.translate(a / 3, -a / 3), n.scale(1, -1), n.translate(-u.i4.i7 / 2, -u.i4.i8 / 2), T().ie(n, u, 0, 0, u.i4.i7, u.i4.i8), n.restore(), T().ie(n, s, a / 2 - o.d7, -s.i4.i8 / 2 + o.fC, s.i4.i7, s.i4.i8), T().ie(n, d, -d.i4.i7 / 2, -d.i4.i8 / 2, d.i4.i7, d.i4.i8), 0 !== g) T().ie(n, h, -h.i4.i7 / 2, -h.i4.i8 / 2, h.i4.i7, h.i4.i8);
                    f && T().ie(n, f, -f.i4.i7 / 2 - r, -f.i4.i8 / 2, f.i4.i7, f.i4.i8);
                    break;
                case 3:
                    if (n.rotate(t.fe), 0 !== k) T().ie(n, b, -b.i4.i7 / 2, -b.i4.i8 / 2, b.i4.i7, b.i4.i8);
                    let e = 7 * p;
                    if (T().ie(n, s, a / 2 - 6 - s.i4.i7 / 2 + o.d7 + e, -a / 2 - 13 + o.fC, s.i4.i7, s.i4.i8), T().ie(n, u, a / 3 - u.i4.i7 / 2 + e, a / 3 - u.i4.i8 / 2, u.i4.i7, u.i4.i8), n.save(), n.translate(a / 3, -a / 3), n.scale(1, -1), n.translate(-u.i4.i7 / 2, -u.i4.i8 / 2), T().ie(n, u, 0, 0, u.i4.i7, u.i4.i8), n.restore(), T().ie(n, d, -d.i4.i7 / 2, -d.i4.i8 / 2, d.i4.i7, d.i4.i8), 0 !== g) T().ie(n, h, -h.i4.i7 / 2, -h.i4.i8 / 2, h.i4.i7, h.i4.i8);
                    f && T().ie(n, f, -f.i4.i7 / 2 - r, -f.i4.i8 / 2, f.i4.i7, f.i4.i8);
                    break
                }
                n.restore()
            }

            function mt() {
                localStorage.setItem(str_keybinds, JSON.stringify(At))
            }

            function wt() {
                const t = localStorage.getItem(str_keybinds);
                if (!t) return Object.assign({}, keybinds);
                try {
                    let n = Object.assign(Object.assign({}, keybinds), JSON.parse(t));
                    if ("Space" === n[numbs.five]) n[numbs.five] = keybinds[numbs.five];
                    return n
                } catch {
                    return Object.assign({}, keybinds)
                }
            }
            document.getElementById("reset-keybinds").addEventListener("click", (function (t) {
                Et(), xt()
            }));
            let Tt = 0;
            const numbs = {
                    zero: Tt++,
                    one: Tt++,
                    two: Tt++,
                    three: Tt++,
                    four: Tt++,
                    five: Tt++,
                    six: Tt++,
                    seven: Tt++,
                    eight: Tt++,
                    nine: Tt++,
                    ten: Tt++,
                    eleven: Tt++,
                    twelve: Tt++,
                    thirteen: Tt++,
                    fourteen: Tt++,
                    fifteen: Tt++,
                    sixteen: Tt++,
                    seventeen: Tt++,
                    eighteen: Tt++
                },
                keybinds = Object.freeze({
                    [numbs.zero]: "KeyW",
                    [numbs.one]: "KeyS",
                    [numbs.two]: "KeyD",
                    [numbs.three]: "KeyA",
                    [numbs.four]: "KeyF",
                    [numbs.five]: "KeyQ",
                    [numbs.six]: "Space",
                    [numbs.seven]: "KeyR",
                    [numbs.eight]: "KeyR",
                    [numbs.nine]: "KeyX",
                    [numbs.ten]: "KeyE",
                    [numbs.eleven]: "ArrowUp",
                    [numbs.twelve]: "ArrowRight",
                    [numbs.thirteen]: "ArrowDown",
                    [numbs.fourteen]: "ArrowLeft",
                    [numbs.fifteen]: "Escape",
                    [numbs.sixteen]: "Enter",
                    [numbs.seventeen]: "KeyL",
                    [numbs.eighteen]: "KeyN"
                }),
                str_keybinds = "keybinds",
                At = wt();

            function Et() {
                Object.assign(At, keybinds), mt()
            }
            xt();
            const Qt = Array.from(document.getElementsByClassName("keybind-setting"));

            function yt(t) {
                return atob(btoa(t))
            }
            let Mt = null;

            function xt() {
                document.getElementById("for-spike").innerText = At[numbs.seven], document.getElementById("for-trap").innerText = At[numbs.four], document.getElementById("for-food").innerText = At[numbs.five], document.getElementById("for-shop").innerText = At[numbs.eighteen]
            }
            Qt.forEach(t => t.addEventListener("click", (function () {
                Mt = t[yt("id")], document.getElementById(Mt).innerText = "PRESS"
            }))), window.addEventListener("keydown", (function (t) {
                if (!Mt) return;
                t.preventDefault();
                const n = t.code;
                switch (Mt) {
                case "for-spike":
                    At[numbs.seven] = n;
                    break;
                case "for-trap":
                    At[numbs.four] = n;
                    break;
                case "for-food":
                    if ("Space" === n) return;
                    At[numbs.five] = n;
                    break;
                case "for-shop":
                    At[numbs.eighteen] = n;
                    break;
                default:
                    throw new Error("Unknown key type")
                }
                mt(), xt(), Mt = null
            }));
            let is_false_ = ![],
                St = {
                    i: -1,
                    kn: 0,
                    ko: 0,
                    kp: 0,
                    kq: 0
                },
                It = {
                    i: -1,
                    kn: 0,
                    ko: 0,
                    kp: 0,
                    kq: 0
                },
                Ft = 90,
                Ct = 0,
                Rt = 0,
                Gt = {},
                Dt = 0,
                Vt = ![],
                Pt = 0,
                Nt = 0,
                Wt = 0,
                Ht = ![];

            function Lt(t) {
                const keyCode = t.code;
                if ((false_five || false_six || false_seven) && keyCode === At[numbs.fifteen] && !Gt[keyCode] && (false_five && qi(![]), false_seven && Oi(![]), false_six && To(![])), false_five || false_seven) return;
                if (!false_five && !Gt[keyCode] && keyCode === At[numbs.sixteen]) return false_seven && Oi(![]), false_six && To(![]), qi(!![]), t.preventDefault(), void 0;
                if (keyCode === At[numbs.eighteen] && (false_seven && Oi(![]), qi(![]), To(!false_six)), !false_five && (t.code === At[numbs.nine] && !Gt[keyCode] && fo(!false_four), keyCode === At[numbs.ten] && !Gt[keyCode] && (ao(!false_three), yc(false_three))), keyCode === At[numbs.fifteen] && Eo() && io(!![]), keyCode === At[numbs.five] && !Gt[keyCode] && Fc(2), keyCode === At[numbs.four] && !Gt[keyCode] && Fc(7), (keyCode === At[numbs.seven] && !Gt[keyCode] || keyCode === At[numbs.eight] && !Gt[keyCode]) && Fc(4), "Space" !== keyCode && !isNaN(Number(t.key)) && !Gt[keyCode]) {
                    if (Number(t.key) - 1 >= 0) Cc(Be.kr[Number(t.key) - 1])
                }
                keyCode === At[numbs.six] && !Gt[keyCode] && xc(Li()), (keyCode === At[numbs.zero] || keyCode === At[numbs.eleven]) && (Ct |= 1), (keyCode === At[numbs.two] || keyCode === At[numbs.twelve]) && (Ct |= 8), keyCode === At[numbs.seventeen] && Ze && Sc(Ze), (keyCode === At[numbs.three] || keyCode === At[numbs.fourteen]) && (Ct |= 4), (keyCode === At[numbs.one] || keyCode === At[numbs.thirteen]) && (Ct |= 2), Gt[keyCode] = !![]
            }

            function qt(t) {
                const n = t.code;
                n === At[numbs.six] && Bc(), (n === At[numbs.two] || n === At[numbs.twelve]) && (Ct &= -9), (n === At[numbs.zero] || n === At[numbs.eleven]) && (Ct &= -2), (n === At[numbs.three] || n === At[numbs.fourteen]) && (Ct &= -5), (n === At[numbs.one] || n === At[numbs.thirteen]) && (Ct &= -3), n === At[numbs.seventeen] && (Vt = ![]), Gt[n] = ![]
            }

            function Ot(t) {
                is_false_ = !![], t.preventDefault(), t.stopPropagation();
                for (let n of t.changedTouches) {
                    if (Zi(n.pageX, n.pageY), $i(He, Le)) break;
                    if (n.pageX < document.body.scrollWidth / 2 && -1 === St.i) St.i = n.identifier, St.kn = St.kp = n.pageX, St.ko = St.kq = n.pageY;
                    else n.pageX > document.body.scrollWidth / 2 && -1 === It.i && (It.i = n.identifier, It.kn = It.kp = n.pageX, It.ko = It.kq = n.pageY)
                }
            }

            function Kt(t) {
                is_false_ = !![], t.preventDefault(), t.stopPropagation();
                for (let n of t.changedTouches)
                    if (n.identifier === St.i) St.kp = n.pageX, St.kq = n.pageY;
                    else n.identifier === It.i && (It.kp = n.pageX, It.kq = n.pageY)
            }

            function zt(t) {
                is_false_ = !![], t.preventDefault(), t.stopPropagation();
                for (let n of t.changedTouches) {
                    if (Zi(n.pageX, n.pageY), to(He, Le)) break;
                    if (n.identifier === St.i) St.i = -1;
                    else n.identifier === It.i && (It.i = -1)
                }
            }

            function Zt() {
                Rt = null, Pc()
            }

            function Yt(t) {
                Vc(t), Rt = t, Wt = 0
            }

            function Xt(t) {
                Ht = ![], Mc(t)
            }

            function Jt(t) {
                Ht = !![], Dc(t)
            }

            function $t(t) {
                Gc(t), Pt = t, Nt = 0
            }

            function tn(t) {
                Gc(t), Pt = t, Nt = 0
            }

            function nn(t) {
                is_false_ = t
            }

            function en(t) {
                Nt += t, Wt += t
            }

            function on(t) {
                Dt = t
            }

            function cn(t) {
                Ct = t
            }
            var rn = {
                    ks: function (t, n, e) {
                        return {
                            gU: 0,
                            gV: 0,
                            width: n,
                            height: e,
                            dZ: 0,
                            d5: t,
                            kt: function (t) {
                                const n = this.d5;
                                T().ie(t, n, this.gU, this.gV, this.width, this.height)
                            },
                            ku: function (t, n, e) {
                                return T().hp(t, n, this.gU, this.gV, this.width, this.height) ? (this.dZ = 1, !![]) : (this.dZ = 0, ![])
                            }
                        }
                    },
                    kv: function () {
                        return {
                            kw: -1,
                            kx: 0,
                            ky: T().hW(" ", 23, ""),
                            kz: T().hW(" ", 23, ""),
                            kA: T().hW(" ", 23, ""),
                            kB: T().hW(" ", 23, ""),
                            kC: T().hW(" ", 23, ""),
                            kD: T().hW(" ", 23, ""),
                            kE: T().hW(" ", 23, ""),
                            kt: function (t, n, e, o, c, r) {
                                const a = ot()[n];
                                if (n !== this.kw) this.kw = n, T().hV(this.ky, a.d8, 23, "#eec39d"), T().hV(this.kz, e + "/" + o, 23, "#fff"), a.d6 && (T().hV(this.kA, "" + a.d6[0], 23, "#ad4e56"), T().hV(this.kB, "" + a.d6[1], 23, "#9c7e66"), T().hV(this.kC, "" + a.d6[2], 23, "#fff"), T().hV(this.kD, "" + a.d6[3], 23, "#e3b32c")), T().hV(this.kE, a.description, 23, "#fff"), this.kx = e;
                                else this.kx !== e && (T().hV(this.kz, e + "/" + o, 23, "#fff"), this.kx = e);
                                const s = Math.max(this.ky.width + a.fA === 2 ? this.kz.width : 0, a.d6 ? this.kA.width + this.kB.width + this.kC.width + this.kD.width : 0, this.kE.width) + 40;
                                t.beginPath(), t.fillStyle = "#4f403c", T().hN(t, c, r, s, a.d6 ? 150 : 110, 10), t.fill(), r += 20, c += 20, t.drawImage(this.ky, c, r), 2 === a.fA && t.drawImage(this.kz, c + this.ky.width, r), a.d6 && (t.drawImage(this.kA, c, r + 40), t.drawImage(this.kB, c + this.kA.width, r + 40), t.drawImage(this.kC, c + this.kA.width + this.kB.width, r + 40), t.drawImage(this.kD, c + this.kA.width + this.kB.width + this.kC.width, r + 40)), t.drawImage(this.kE, c + 0, r + (a.d6 ? 80 : 40))
                            }
                        }
                    },
                    kF: function () {
                        return {
                            kG: T().hW("ITEM", 23, "#fff"),
                            hV: function (t) {
                                T().hV(this.kG, t, 23, "#fff")
                            },
                            kt: function (t, n, e) {
                                t.drawImage(this.kG, n - this.kG.width / 2, e)
                            }
                        }
                    },
                    kH: function (t, n) {
                        return {
                            width: t,
                            height: n,
                            gU: 0,
                            gV: 0,
                            kI: 0,
                            background: T().hS(t, n, 10, "#5D3A37"),
                            kt: function (t) {
                                const n = 5;
                                t.drawImage(this.background, this.gU, this.gV), t.beginPath(), t.fillStyle = "#F2C39F", this.kI && T().hN(t, this.gU + n, this.gV + n, (this.width - 2 * n) * this.kI, this.height - 2 * n, 5), t.fill()
                            }
                        }
                    },
                    kJ: function () {
                        return {
                            gU: 0,
                            gV: 0,
                            width: 100,
                            height: 50,
                            kK: [],
                            jB: null,
                            kt: function (t) {
                                for (let n = 0; n < this.kK.length; n++) this.kK[n].kt(t)
                            }
                        }
                    }
                },
                fn = p(6264),
                an = p.n(fn),
                sn = {
                    kL: [],
                    kK: [],
                    kr: [],
                    ft: [],
                    kx: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    kM: [],
                    kN: rn.kH(400, 20),
                    kO: 0,
                    currency: 0,
                    kP: 0,
                    kQ: -1,
                    kR: T().hW("0", 24, "#FFFFFF"),
                    kS: T().hW("0", 24, "#FFFFFF"),
                    kT: T().hW("0", 24, "#FFFFFF"),
                    kU: T().hW("0", 24, "#FFFFFF"),
                    kV: T().hW("0", 24, "#FFFFFF"),
                    kW: T().hW("0", 24, "#FFFFFF"),
                    kX: null,
                    kY: rn.kv(),
                    kZ: function (t) {
                        return Math.floor(10 * t) / 10
                    },
                    l0: function (t) {
                        if (t < 1e3) return t;
                        else if (t < 1e4) return this.kZ(t / 1e3, 2) + "k";
                        else if (t < 1e6) return Math.floor(t / 1e3) + "k";
                        else if (t < 1e7) return this.kZ(t / 1e6, 2) + "m";
                        else if (t < 1e9) return Math.floor(t / 1e6) + "m";
                        else return Math.floor(t / 1e9) + "b"
                    },
                    l1: function (t, n, e, i) {
                        if (this.kM[an().fW] !== t) T().hV(this.kR, this.l0(t), 24, "#FFFFFF");
                        if (this.kM[an().gX] !== n) T().hV(this.kS, this.l0(n), 24, "#FFFFFF");
                        if (this.kM[an().a7] !== e) T().hV(this.kT, this.l0(e), 24, "#FFFFFF");
                        if (this.kM[an().V] !== i) T().hV(this.kU, String(i), 24, "#FFFFFF");
                        this.kM[an().fW] = t, this.kM[an().gX] = n, this.kM[an().a7] = e, this.kM[an().V] = i
                    },
                    l2: function (t) {
                        const n = Math.floor(T().hX(this.kP));
                        this.kP = t;
                        const e = Math.floor(T().hX(this.kP));
                        if (this.kN.kI = Math.floor(100 * (T().hX(this.kP) - e)) / 100, n !== e) this.kX = T().hV(this.kX, "AGE " + e, 24, "#fff")
                    },
                    l3: function (t) {
                        this.kO !== t && (this.kV = T().hV(this.kV, t, 24, "#FFFFFF")), this.kO = t
                    },
                    l4: function () {
                        this.currency = 0, this.kW = T().hV(this.kW, this.currency, 24, "#FFFFFF")
                    },
                    l5: function (t) {
                        this.currency += t, this.kW = T().hV(this.kW, this.currency, 24, "#FFFFFF")
                    },
                    gE: function () {
                        this.kK.length = 0;
                        for (let t = 0; t < this.kr.length; t++) this.kK.push(rn.ks(et[ot()[this.kr[t]].fv], 100, 100))
                    },
                    l6: function () {
                        this.kL.length = 0;
                        for (let t = 0; t < this.ft.length; t++) this.kL.push(rn.ks(et[ot()[this.ft[t]].fv], 100, 100))
                    }
                };
            var ln = {
                    l7: z.jL(z.jQ("leaderboard"), 250, 330),
                    l8: null,
                    l9: rn.ks(et[Y().bj], 38.5, 42.5),
                    la: !![],
                    gU: 0,
                    gV: 0,
                    width: 250,
                    height: 330,
                    lb: [],
                    lc: [],
                    kt: function (t, e) {
                        t.drawImage(this.l7, this.gU, this.gV);
                        for (let o = 0, c = this.lb; o < c.length; o++) {
                            const player = e.players[c[o]];
                            t.drawImage(this.lc[o] || (this.lc[o] = T().hW(o + 1 + ".", n().dP, n().dQ, n().dS)), this.gU + 8, this.gV + 57 + 27 * o), t.drawImage(player.jC || (player.jC = T().hW(player.d8, n().dP, n().dQ, n().dS)), this.gU + 40, this.gV + 57 + 27 * o), t.drawImage(player.jD || (player.jD = T().hW(T().hT(player.score), n().dP, n().dQ, n().dS)), this.gU + 40 + 145, this.gV + 57 + 27 * o)
                        }
                    },
                    gE: function (t, n) {
                        this.lb.length = 0;
                        let e = [];
                        for (let t = 0; t < n.length; t++) e.push(n[t][0]);
                        this.lb = e
                    }
                },
                dn = {
                    l7: T().hW("", 50, "#fff"),
                    active: ![],
                    fd: 0,
                    fS: .7,
                    ld: function (t, n = 1) {
                        if (this.fd <= 0) this.fd = n;
                        T().hV(this.l7, t, 50, "#fff")
                    },
                    gE: function (t) {
                        if (this.fd -= t * this.fS, this.fd < 0) this.fd = 0
                    }
                };
            p(9308);
            const un = function () {
                    this.n = function (t, n, e, o, c, r) {
                        this.gU = t, this.gV = n, this.li = r, this.fS = e, this.fd = 400, this.lj = Math.random() > .5 ? 1 : -1, this.l7 = this.l7 ? T().hV(this.l7, c, 45, this.li) : T().hW(c, 35, this.li), this.scale = 1, this.lk = this.scale, this.ll = 2.5, this.lm = .02, this.fS = .18
                    }, this.gE = function (t) {
                        this.fd && (this.fd -= t, this.gV -= this.fS * t, this.scale += this.lm * t, this.scale >= this.ll ? (this.scale = this.ll, this.lm *= -1) : this.scale <= this.lk && (this.scale = this.lk, this.lm = 0), this.fd <= 0 && (this.fd = 0))
                    }, this.h9 = function (t) {
                        const n = this.l7,
                            e = this.scale;
                        t.globalAlpha = e, t.drawImage(n, this.gU - e * n.width / 2, this.gV - e * (n.height / 2), n.width * e, e * n.height), t.globalAlpha = 1
                    }
                },
                gn = function () {
                    this.n = function (t, n) {
                        this.parent = n, this.fd = 3e3, this.l7 ? T().hV(this.l7, t, 25, "#fff", null, null, "rgba(0,0,0,.25)", 5) : this.l7 = T().hW(t, 25, "#fff", null, null, "rgba(0,0,0,.25)", 5)
                    }, this.h9 = function (t, n) {
                        if (this.fd && (this.fd -= n), this.fd < 0) return this.fd = 0, this.parent = null, void 0;
                        const e = this.l7,
                            o = this.parent;
                        t.drawImage(e, o.gU - e.width / 2, o.gV - e.height / 2 - 120)
                    }
                };

            function hn() {
                this.ln = [], this.lo = [], this.lp = [], this.lq = function (t, n) {
                    const e = et[Y().aJ],
                        o = Gi - e.i4.i8 - 10;
                    let c = 0,
                        r = 0;
                    for (var a = 0; a < this.lp.length; ++a) {
                        const t = this.lp[a];
                        t.fd && c < 5 && (c++, r = Math.max(t.text.length, r))
                    }
                    c && (t.fillStyle = "rgba(0, 0, 0, .1)", t.fillRect(10, o - 50 * (c + 1) + 20, 11 * r, 50 * c + 5)), t.font = "20px Baloo Paaji", t.fillStyle = "white";
                    let s = 0;
                    for (a = 0; a < this.lp.length;) {
                        const e = this.lp[a];
                        if (e.fd) {
                            if (e.fd -= 1e3 * n, e.fd < 0) e.fd = 0;
                            if (s < c) t.fillText(e.text, 10, o - 50 * (c - s));
                            s++, a++
                        } else this.lp.shift()
                    }
                }, this.gE = function (t, n) {
                    for (var e = 0; e < this.ln.length; ++e) this.ln[e].fd && (this.ln[e].gE(n), this.ln[e].h9(t));
                    for (let e, o = 0; o < this.lo.length; o++) e = this.lo[o], e.fd && e.h9(t, n)
                }, this.lr = function (t, n, e, o, c, r, f) {
                    for (var a, s = 0; s < this.ln.length; ++s)
                        if (!this.ln[s].fd) {
                            a = this.ln[s];
                            break
                        } a || (a = new un, this.ln.push(a)), a.n(t, n, e, o, c, r, f)
                }, this.ls = function (t, n) {
                    let e = {
                        fd: 5e3,
                        text: n
                    };
                    this.lp.push(e)
                }, this.lt = function (t, n) {
                    for (var e, o = 0; o < this.lo.length; ++o)
                        if (!this.lo[o].fd || this.lo[o].parent && this.lo[o].parent.i === n.i) {
                            e = this.lo[o];
                            break
                        } e || (e = new gn, this.lo.push(e)), e.n(t, n)
                }
            }
            var kn = p(9414),
                bn = p.n(kn),
                pn = p(5464),
                jn = p.n(pn),
                mn = p(3071),
                wn = p.n(mn);

            function Tn() {
                this.n = function () {
                    this.lu = [], this.lv = null, this.lw = null
                }, this.lx = function (t) {
                    this.lw = t
                }, this.ly = function () {
                    this.lw = null
                }, this.lz = function () {
                    this.lu.length = 0
                }, this.lA = function (t, n) {
                    !this.lv ? this.lv = new(wn())(t, n) : (this.lv.gU = t, this.lv.gV = n)
                }, this.lB = function (t, n) {
                    this.lu.push([t, n])
                }, this.lC = function (t) {
                    const e = et[Y().aJ],
                        o = et[Y().bm],
                        c = et[Y().d2],
                        r = Gi - e.i4.i8;
                    t.translate(5, r - 5), T().ie(t, e, 0, 0, e.i4.i7, e.i4.i8);
                    for (let n = 0; n < this.lu.length; n++) T().ie(t, o, e.i4.i7 * this.lu[n][0] - o.i4.i7 / 2, e.i4.i8 * this.lu[n][1] - o.i4.i8 / 2, o.i4.i7, o.i4.i8);
                    if (this.lw) {
                        let n = et[Y().bg],
                            i = this.lw;
                        T().ie(t, n, e.i4.i7 * i.gU - n.i4.i7 / 2, e.i4.i8 * i.gV - n.i4.i8 / 2, n.i4.i7, n.i4.i8)
                    }
                    if (Oe) {
                        let i = U.get(Oe);
                        i && T().ie(t, c, e.i4.i7 * i.gU / n().dH - c.i4.i7 / 2, e.i4.i8 * i.gV / n().dI - c.i4.i8 / 2, c.i4.i7, c.i4.i8)
                    }
                    if (this.lv) {
                        let i = et[Y().bd],
                            o = this.lv;
                        T().ie(t, i, e.i4.i7 * o.gU / n().dH - i.i4.i7 / 2, e.i4.i8 * o.gV / n().dI - i.i4.i8 / 2, i.i4.i7, i.i4.i8)
                    }
                    if (Ge.h9) {
                        const o = e.i4.i7,
                            c = e.i4.i8,
                            r = o / n().dH,
                            f = c / n().dI;
                        t.globalAlpha = .3, t.fillStyle = "red", t.fillRect(0, 0, o, Ge.lD * f), t.fillRect(0, 0, Ge.lE * r, c);
                        const a = c - Ge.lF * f,
                            s = o - Ge.lG * r;
                        t.fillRect(0, Ge.lF * f, o, a), t.fillRect(Ge.lG * r, 0, s, c), t.globalAlpha = .7, t.strokeStyle = "#fff";
                        const l = Ge.lH - Ge.lI,
                            d = Ge.lJ - Ge.lK;
                        t.strokeRect(Ge.lI * r, Ge.lK * f, l * r, d * f), t.globalAlpha = 1
                    }
                    t.translate(-5, 5 - r)
                }, this.n()
            }
            const _n = {};
            _n[o().aI] = null, _n[o().bM] = null, _n[o().bN] = null, _n[o().bR] = null, _n[o().cE] = null, _n[o().cH] = null, _n[o().cD] = null;
            var vn = _n;

            function Un() {
                this.n = function () {
                    this.lL = [], this.lM = []
                }, this.lN = [rn.ks(et[Y().cr], 107, 107), rn.ks(et[Y().cs], 107, 107)], this.lL = [], this.lO = function () {
                    this.lL.length = 0
                }, this.lP = function (t) {
                    this.lL.push(t)
                }, this.lM = [], this.lQ = function (t, n) {
                    this.lM[t] = {
                        d8: n,
                        active: ![],
                        jB: null,
                        jm: 0
                    }
                }, this.lR = function (t) {
                    this.lM[t].jB = null, this.lM[t].d8 = "", this.lM[t].active = ![], this.lM[t].jm = 0
                }, this.lS = function (t, n, e) {
                    this.lM[t].jm = n, this.lM[t].d8 = e, this.lM[t].active = !![], this.lM[t].jB = null
                }
            }
            p(9757);
            const An = 0,
                En = 1,
                Qn = 2,
                yn = 3,
                Mn = {
                    [String("SFRA")]: ["EU#1 Frankfurt", En],
                    [String("SFRA2")]: ["EU#2 Frankfurt", En],
                    [String("SFRA2BIS")]: ["EU#2 Frankfurt", En],
                    [String("SCA")]: ["USA#1 California", En],
                    [String("SCA2")]: ["USA#2 California", En],
                    [String("SGP")]: ["AS#1 Singapore", En],
                    [String("SGP2")]: ["AS#2 Singapore", En],
                    [String("SGP3")]: ["AS#3 Singapore", En],
                    [String("SGP3BIS")]: ["AS#3 Singapore", En],
                    [String("FRA1FFA")]: ["EU#1 Frankfurt", An],
                    [String("CA1FFA")]: ["USA#1 California", An],
                    [String("SGP1FFA")]: ["AS#1 Singapore", An],
                    [String("CA1EVENT")]: ["USA#1 California", Qn],
                    [String("BRSGP")]: ["BR Singapore1", yn],
                    [String("BRSG2")]: ["BR Singapore2", An],
                    [String("BRSCA")]: ["BR California 1", yn],
                    [String("BRSCA2")]: ["BR California 2", An],
                    [String("BRFRA")]: ["BR Frankfurt 1", An],
                    [String("BRFRA2")]: ["BR Frankfurt 2", An]
                };

            function xn(t, n) {
                this.region = t, this.index = n, this.ping = 9999, this.url = "https://" + t + ".sploop.io/ping";
                let e = this,
                    o = +new Date;
                var c = new XMLHttpRequest;
                c.open("GET", this.url, !![]), c.onreadystatechange = function () {
                    4 === this.readyState && !this.ping && (e.ping = +new Date - o)
                };
                try {
                    c.send(null)
                } catch (t) {}
            }

            function Bn(t) {
                const n = this,
                    e = J().get("ffa-mode"),
                    o = J().get("sandbox-mode"),
                    c = J().get("battleroyale-mode"),
                    s = J().get("server-select");
                let l = e;

                function d(t) {
                    s.innerHTML = "";
                    const e = n.lT;
                    for (let n = 0; n < e.length; n++) {
                        const i = e[n],
                            o = i.r,
                            c = Mn[o];
                        if (c[1] !== t) continue;
                        const r = i.d,
                            f = r[0],
                            a = r[1];
                        po(c[0], f, a, o)
                    }
                }

                function u() {
                    if (l === e) return 0;
                    return l = e, o.classList.remove("dark-blue-button-3-active"), c.classList.remove("dark-blue-button-3-active"), e.classList.add("dark-blue-button-3-active"), d(An), 1
                }

                function g() {
                    if (l === c) return 0;
                    return l = c, o.classList.remove("dark-blue-button-3-active"), e.classList.remove("dark-blue-button-3-active"), c.classList.add("dark-blue-button-3-active"), d(yn), 1
                }

                function h() {
                    if (l === o) return 0;
                    return l = o, e.classList.remove("dark-blue-button-3-active"), c.classList.remove("dark-blue-button-3-active"), o.classList.add("dark-blue-button-3-active"), d(En), 1
                }

                function k() {
                    const t = Math.floor(Math.random() * server_select.options.length);
                    server_select.selectedIndex = t;
                    const e = server_select.options[t].getAttribute("region");
                    n.lU(e)
                }

                function b() {
                    u(), k(), qo(0)
                }

                function p() {
                    g(), k(), qo(0)
                }

                function j() {
                    h(), k(), qo(0)
                }

                function m(t) {
                    const e = [0, 0],
                        o = n.lT;
                    for (let n = 0; n < o.length; n++) {
                        const i = o[n].r,
                            c = Mn[i][1];
                        if (i === t.region) {
                            if (c === En) h();
                            else if (c === An) u();
                            return server_select.selectedIndex = e[c], void 0
                        }
                        e[c] += 1
                    }
                }
                e.addEventListener("click", (function () {
                    if (l === e) return;
                    if (1 === ve) {
                        const t = J().A["progress-loss"];
                        t.next = b, t.show()
                    } else b()
                })), c.addEventListener("click", (function () {
                    if (l === c) return;
                    if (1 === ve) {
                        const t = J().A["progress-loss"];
                        t.next = p, t.show()
                    } else p()
                })), o.addEventListener("click", (function () {
                    if (l === o) return;
                    if (1 === ve) {
                        const t = J().A["progress-loss"];
                        t.next = b, t.show()
                    } else j()
                })), this.lT = [], this.lV = null, this.lW = function () {
                    J().gH("Loading Sploop.io");
                    let t = this;
                    var n = new XMLHttpRequest;
                    n.overrideMimeType("application/json");
                    let e = "https://sploop.io/servers";
                    n.open("GET", e, !![]), n.onload = function () {
                        t.lT = JSON.parse(n.responseText) || [], t.lX()
                    }, n.onabort = n.onerror = function () {
                        J().gI(), alert("Unable to reach matchmaker")
                    }, n.send(null)
                }, this.lY = function (t) {
                    J().gI(), this.lZ(), t.sort((t, n) => t.ping - n.ping);
                    let n = t[0];
                    if (n) {
                        const t = Mn[n.region];
                        new_wss_connection(!![], n.region + ".sploop.io", "80", T().ib() || (T().ic("0"), 0), t ? t[0] : "???"), m(n)
                    } else alert("Matchmaking: UNABLE TO FIND GAME")
                }, this.lX = function () {
                    let t = [];
                    for (let n = 0, e = this.lT; n < e.length; n++) {
                        if (Mn[e[n].r][1] === Qn) continue;
                        t.push(new xn(e[n].r, n))
                    }
                    setTimeout(() => {
                        this.lY(t)
                    }, 1500)
                }, this.lU = function (t) {
                    const e = n.lT;
                    for (let n = 0; n < e.length; n++) {
                        const i = e[n];
                        if (i.r === t) return new_wss_connection(!![], "DEV" === i.r ? "localhost" : i.r + ".sploop.io", "80", T().ib() || (T().ic("0"), 0)), void 0
                    }
                }, this.m0 = function (t) {
                    let n = this.lT[t];
                    if (!n) return console.warn("Invalid server");
                    new_wss_connection(!![], "DEV" === n.r ? "localhost" : n.r + ".sploop.io", "80", T().ib() || (T().ic("0"), 0))
                }, this.lZ = function () {
                    if (0 === this.lT.length) return alert("Matchmaking: game is updating, please wait.");
                    for (let t, n, e = 0; e < this.lT.length; e++) {
                        if (n = this.lT[e], t = n.d, !t) continue;
                        n.r, t[0], t[1];
                        d(An)
                    }
                }
            }
            var Sn = p(9413),
                In = p.n(Sn),
                Fn = p(7039),
                Cn = p.n(Fn),
                Rn = p(9534),
                Gn = p.n(Rn),
                Dn = p(3559),
                Vn = p.n(Dn),
                Pn = p(3408),
                Nn = p.n(Pn),
                Wn = p(2057),
                Hn = p.n(Wn),
                Ln = p(5945),
                qn = p.n(Ln),
                On = p(5172),
                Kn = p.n(On),
                zn = p(4738),
                Zn = p.n(zn);
            atob("Y29udGVudFdpbmRvdw=="), atob("aWZyYW1l"), [].pop.constructor("return this")(), atob("ZG9jdW1lbnQ="), atob("Y3JlYXRlRWxlbWVudA=="), atob("Ym9keQ=="), atob("YXBwZW5kQ2hpbGQ="), atob("ZGlzcGxheQ=="), atob("c3R5bGU="), atob("bm9uZQ=="), atob("V2ViU29ja2V0");
            var Yn = p(9498),
                Xn = p.n(Yn);

            function Jn() {}
            const $n = [o().e2, o().e3];
            let _WebSocket = WebSocket,
                wss = null,
                ee = {};

            function sendData(t) {
                if (!wss || 1 !== wss.readyState) return;
                if ("string" != typeof t) N(t);
                wss.send(t)
            }
            ee[String("init")] = function () {}, ee[String("encode")] = function () {
                for (;
                    [];);
            }, ee.decode = null, window.m1 = ee;
            Date.now();
            let oe = function () {
                var t = Object.prototype.toString,
                    n = Function.prototype.toString,
                    e = /^\[object .+?Constructor\]$/,
                    o = RegExp("^" + String(t).replace(/[.*+?^${}()|[\]\/\\]/g, "\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

                function c(i) {
                    var c = typeof i;
                    return "function" == c ? o.test(n.call(i)) : i && "object" == c && e.test(t.call(i)) || ![]
                }
                let r = c + "" + Math.random();
                return c[atob("dG9TdHJpbmc=")] = () => r, c
            }();

            function ce() {
                for (; !oe(_WebSocket););
            }
            const re = ce + "";
            ce[atob("dG9TdHJpbmc=")] = () => re + Math.floor(10 * Math.random()), setTimeout(ce, 7e3 + 1e4 * Math.random()), setTimeout(() => ce(), 7e3 + 1e4 * Math.random()), setTimeout((function () {
                ce()
            }), 7e3 + 1e4 * Math.random()), ce();
            let fe = null;

            function ae(t) {
                return t.map(t => String.fromCharCode(t)).join("")
            }
            "function" == typeof EXTERNAL && (fe = L(EXTERNAL, GLOB));
            const _TextDecoder = new TextDecoder,
                le = ae([119, 115, 115]),
                de = ae([119, 115]),
                ue = ae([58, 47, 47]),
                ge = ae([47, 119, 115]),
                he = Number(ae([52, 52, 51])),
                ke = ae([58]);

            function be(t) {
                let n = 0;
                for (let e = 0; e < t.length; e++) n += t[e];
                return n / t.length
            }

            function pe(t) {
                const n = t.length,
                    e = be(t);
                return Math.sqrt(t.map(t => Math.pow(t - e, 2)).reduce((t, n) => t + n) / n)
            }
            const textEncoder = new TextEncoder;
            let game_canvas = document.getElementById("game-canvas"),
                ctx = game_canvas.getContext("2d"),
                _false = ![],
                _e = fe,
                ve = 0,
                Ue = null,
                Ae = 1,
                Ee = {
                    gU: 0,
                    gV: 0,
                    w: 0,
                    h: 0
                },
                Qe = new hn,
                ye = new G,
                Me = new q,
                xe = new Un,
                Be = sn,
                Se = dn,
                Ie = ln,
                Fe = new Tn,
                Ce = new Bn,
                false_ = ![];
            const Ge = {
                lE: 0,
                lD: 0,
                lG: 0,
                lF: 0,
                h9: ![],
                m2: 0,
                m3: 0,
                m4: 0,
                m5: 0,
                lI: 0,
                lK: 0,
                lH: 0,
                lJ: 0,
                m6: ![],
                transition: 0,
                m7: 0,
                m8(t, n, e, i) {
                    this.lE = t, this.lD = n, this.lG = e, this.lF = i
                },
                m9(t, n, e, i) {
                    this.lI = t, this.ma = n, this.lH = e, this.lJ = i
                },
                mb(t = 0, n = 10) {
                    this.m7 = t, this.transition = n, this.m6 = !![]
                }
            };
            Ge.mb(0, 40);
            let De = {
                    hl: 0,
                    hn: 0,
                    hm: 0,
                    ho: 0
                },
                Ve = 1,
                false_one = ![],
                Ne = 0,
                We = 0,
                He = 0,
                Le = 0,
                qe = 0,
                Oe = 0,
                Ke = 0,
                ze = 0,
                Ze = 0,
                Ye = [],
                Xe = Date.now(),
                false_two = ![],
                false_three = ![],
                false_four = ![],
                new_date = +new Date,
                false_five = ![],
                false_six = ![],
                false_seven = ![],
                ci = rn.ks(et[Y().bi], 38.5, 42.5),
                ri = rn.ks(et[Y().bk], 38.5, 42.5),
                fi = rn.ks(et[Y().bl], 38.5, 42.5),
                false_eight = ![],
                true_one = !![],
                true_two = !![],
                false_nine = ![],
                false_ten = ![],
                _zero = 0,
                false_eleven = ![],
                ki = {
                    hm: 0,
                    ho: 0,
                    hl: 0,
                    hn: 0
                },
                bi = -1,
                pi = {},
                server_select = null,
                clan_title = null,
                clan_menu_close = null,
                leave_clan = null,
                create_cl = null,
                leave_clan_button = null,
                game_over = null,
                hat_menu_content = null,
                clan_menu_content = null,
                create_clan_button = null,
                clan_menu_clan_name_input = null,
                chat_wrapper = null,
                clan_menu = null,
                chat = null,
                hat_menu = null,
                play = null,
                name = null,
                Ci = null,
                Ri = 0,
                Gi = 0,
                Di = 0,
                Vi = 0,
                Pi = Nn().x("IP"),
                Ni = Nn().x("PORT"),
                Wi = "off" === Nn().x("SSL");

            function Hi() {
                Ae = Math.max(Vi / n().dA, Di / n().dz)
            }

            function Li() {
                return false_four ? Pt : T().hc(window.innerWidth / 2, window.innerHeight / 2, Ne, We)
            }

            function qi(t) {
                if (t && (false_five || false_six)) return;
                if (chat_wrapper.style.display = t ? "block" : "none", false_five = t, chat.blur(), t) chat.focus()
            }

            function Oi(t) {
                if (false_seven = t, t && (false_five && qi(![]), false_six && To(![])), t && !qe) uc();
                clan_menu.style.display = t ? "block" : "none"
            }

            function Ki() {
                server_select = document.getElementById("server-select"), clan_title = document.getElementById("clan-title"), clan_menu_close = document.getElementById("clan-menu-close-button"), leave_clan = document.getElementById("leave_clan"), create_cl = document.getElementById("create_clan"), leave_clan_button = document.getElementById("leave-clan-button"), game_over = document.getElementById("game_over_popup"), hat_menu_content = document.getElementById("hat_menu_content"), clan_menu_content = document.getElementById("clan_menu_content"), create_clan_button = document.getElementById("create-clan-button"), clan_menu_clan_name_input = document.getElementById("clan-menu-clan-name-input"), chat_wrapper = document.getElementById("chat-wrapper"), clan_menu = document.getElementById("clan-menu"), chat = document.getElementById("chat"), hat_menu = document.getElementById("hat-menu"), play = document.getElementById("play"), name = document.getElementById("nickname"), window.onbeforeunload = function () {
                    return "Are you sure you want to leave the tab?"
                }
            }

            function zi() {
                game_canvas.oncontextmenu = () => ![], game_canvas.onmousedown = t => Yi(t), game_canvas.onmouseup = t => Ji(t), window.addEventListener("mousemove", t => Xi(t), ![]), window.onkeydown = t => oo(t), window.onkeyup = t => co(t), window.addEventListener("resize", t => so(t), ![]), game_canvas.addEventListener("touchstart", t => Ot(t), ![]), game_canvas.addEventListener("touchmove", t => Kt(t), ![]), game_canvas.addEventListener("touchend", t => zt(t), ![]), game_canvas.addEventListener("touchcancel", t => zt(t), ![]), game_canvas.addEventListener("touchleave", t => zt(t), ![]), play.addEventListener("click", t => Oo(t)), clan_menu_close.addEventListener("mousedown", t => {
                    Oi(!false_seven)
                }), leave_clan_button.addEventListener("mousedown", t => {
                    Kc()
                }), server_select.addEventListener("change", t => {
                    let selected_server = server_select.selectedIndex;
                    const region = server_select.options[selected_server].getAttribute("region");
                    Ce.lU(region)
                }), document.getElementById("hat-menu-close-button").addEventListener("mousedown", t => {
                    To(![])
                }), document.getElementById("native-render-toggle").addEventListener("change", t => {
                    false_ten = t.currentTarget.checked, so()
                }), document.getElementById("native-helper-toggle").addEventListener("change", t => {
                    true_two = t.currentTarget.checked, so()
                }), document.getElementById("display-ping-toggle").addEventListener("change", t => {
                    false_eight = t.currentTarget.checked
                }), document.getElementById("grid-toggle").addEventListener("change", t => {
                    true_one = t.currentTarget.checked
                }), document.getElementById("particle-toggle").addEventListener("change", t => {
                    false_nine = t.currentTarget.checked
                }), create_clan_button.addEventListener("click", t => {
                    createClan(clan_menu_clan_name_input.value)
                }), chat.addEventListener("blur", () => {
                    chat.value = "", qi(![])
                }), chat.addEventListener("keypress", t => {
                    if (!false_five) return;
                    if ("Enter" === t.key) {
                        t.preventDefault();
                        let trimmed_chat = chat.value.trim();
                        if (qi(![]), 0 === trimmed_chat.length) return;
                        switch (trimmed_chat.split(" ")[0]) {
                        case "texture_reload":
                            et.forEach(t => {
                                t && t.i4 && (t.i4 = {
                                    i5: Zn().gM
                                })
                            });
                            break;
                        case "id":
                            Me.players.forEach(t => console.log("name: " + t.d8, t.i));
                            break
                        }
                        Qc(trimmed_chat)
                    }
                })
            }

            function Zi(t, n) {
                He = t * Ve / Ae, Le = n * Ve / Ae
            }

            function Yi(t) {
                if (!t.isTrusted) return;
                if (!t.target) return;
                if (!t.type) return;
                const n = Date.now(),
                    e = (n - Xe) / 1e3;
                if (Xe = n, Ye.push(e), Ye.length >= 32) {
                    const t = 1 / be(Ye),
                        n = pe(Ye);
                    let e = ![];
                    if (t > 30) e = !![];
                    else if (t > 10 && n < .001) e = !![];
                    else if (t > 20 && n < 1e-4) e = !![];
                    if (e) false_two = !![];
                    else false_two = ![];
                    Ye.length = 0
                }
                if (false_two && e > false_two) return;
                nn(![]), Ne = t.clientX, We = t.clientY, Zi(Ne, We), !$i(He, Le) && xc(Li())
            }

            function Xi(t) {
                if (!t.isTrusted) return;
                nn(![]), Ne = t.clientX, We = t.clientY, Zi(Ne, We), no(He, Le)
            }

            function Ji(t) {
                if (!t.isTrusted) return;
                Ne = t.clientX, We = t.clientY, Zi(Ne, We), to(He, Le), Bc(He, Le)
            }

            function $i(t, n) {
                let e = ![];
                for (let o = 0, c = Be.kK; o < c.length; o++)
                    if (c[o].ku(t, n)) {
                        if (Cc(Be.kr[o]), is_false_) {
                            3 === ot()[Be.kr[o]].fA && Mc(Pt)
                        }
                        e = !![]
                    } for (let o = 0, c = Be.kL; o < c.length; o++) c[o].ku(t, n) && (Rc(Be.ft[o]), e = !![]);
                if (qe && xe.lO.length > 0)
                    for (let o = 0, c = xe.lN; o < c.length; o++) c[o].ku(t, n) && (e = !![]);
                return fi.ku(t, n) && (e = !![]), ci.ku(t, n) && (e = !![]), ri.ku(t, n) && (e = !![]), Ie.l9.ku(t, n) && (e = !![]), e
            }

            function to(t, n) {
                for (let e = 0, o = Be.kK; e < o.length; e++) o[e].ku(t, n);
                for (let e = 0, o = Be.kL; e < o.length; e++) o[e].ku(t, n);
                for (let e = 0, o = xe.lN; e < o.length; e++) o[e].ku(t, n) && xe.lL[0] && (qc(0 === e), xe.lL.shift());
                fi.ku(t, n) && qi(!false_five), ci.ku(t, n) && To(!false_six), ri.ku(t, n) && Oi(!false_seven), Ie.l9.ku(t, n) && (Ie.la = !Ie.la)
            }

            function no(t, n) {
                for (let e = 0, o = Be.kK; e < o.length; e++) o[e].ku(t, n);
                for (let e = 0, o = Be.kL; e < o.length; e++) o[e].ku(t, n);
                for (let e = 0, o = xe.lN; e < o.length; e++) o[e].ku(t, n);
                Ie.l9.ku(t, n)
            }

            function eo() {
                homepage.classList.add("fade-in")
            }

            function io(t) {
                const n = J().get("homepage");
                if (t) {
                    const t = eo;
                    setTimeout((function () {
                        n.classList.remove("fade-in"), n.style.display = "flex", setTimeout(t, 50)
                    }), 10)
                } else n.style.display = "none"
            }

            function oo(t) {
                if (!_false) return;
                if (!(t instanceof window.KeyboardEvent)) return;
                if (!t.isTrusted) return;
                if (!t.target) return;
                Lt(t)
            }

            function co(t) {
                if (!_false) return;
                if (!(t instanceof window.KeyboardEvent)) return;
                if (!t.isTrusted) return;
                if (!t.target) return;
                qt(t)
            }

            function new_wss_connection(t, n, e, o, c) {
                if (pi.mc = t, pi.md = n, pi.port = e, pi._ = o, pi.d8 = c, bi = 1, Pi && Ni && (t = Wi || ![], n = Pi, e = Ni), c = c || "a server", J().gH("Connecting to " + c + "..."), wss) wss.close();
                false_one = ![], _false = ![], Ke = 0, Oe = 0, false_ = ![], Ge.h9 = ![], wss = new _WebSocket("" + (t ? le : de) + ue + n + ke + (t ? he : e) + ge), ko(), Q(), Fe.n(), xe.n(), oc(), wss.binaryType = "arraybuffer", wss.onclose = t => {
                    J().gI(), Do(t), bi = 0
                }, wss.me = t => {
                    J().gI(), bi = 0
                }, wss.onopen = t => {
                    J().gI(), Go(t), bi = 2
                }, wss.onmessage = t => {
                    Ro(t)
                }
            }

            function fo(t) {
                false_four = t
            }

            function ao(t) {
                false_three = t
            }

            function so() {
                if (Ve = false_ten ? window.devicePixelRatio : 1, game_canvas.width = window.innerWidth * Ve, game_canvas.height = window.innerHeight * Ve, game_canvas.style.width = window.innerWidth + "px", game_canvas.style.height = window.innerHeight + "px", Di = game_canvas.width, Vi = game_canvas.height, Hi(), window.innerHeight / 1080 < window.innerWidth / 1920);
                Ri = game_canvas.width / Ae, Gi = game_canvas.height / Ae, ctx.setTransform(Ae, 0, 0, Ae, 0, 0), _o()
            }

            function lo(t = !![]) {
                var xml = new XMLHttpRequest;
                xml.open("GET", "https://token.sploop.io/" + _e + "?v=" + 1e5 * Math.random(), !![]), xml.send(null), xml.onreadystatechange = function () {
                    if (4 === xml.readyState && 200 === xml.status) {
                        const e = V(xml.responseText);
                        Ue = e, t && ("localhost" === location.hostname || "127.0.0.1" === location.hostname ? new_wss_connection(![], "localhost", 3001) : Ce.lW())
                    }
                }
            }

            function uo() {
                so(), go(), lo()
            }

            function go() {
                if (_zero++ % 128 == 0) Jn();
                ctx.clearRect(0, 0, Ri, Gi);
                const t = +new Date,
                    n = (t - new_date) / 1e3;
                new_date = t;
                const e = U.get(ze);
                e && ye.gE(e.gU, e.gV, n), false_one && (B(n, t), !!Oe && vo(n)), ctx.save(), Io(ctx, n), ctx.restore(), _false ? (ctx.save(), Qo(ctx, n), ctx.restore()) : Hn().h9(), window.requestAnimationFrame(go)
            }

            function ho() {
                for (let t = 1; t < rt().length; t++) jo(t, 0)
            }

            function ko() {
                for (let t, n = 1; n < rt().length; n++) t = rt()[n], 2 === t.mf && (t.mf = 1, document.getElementsByClassName("hat_action_button")[n - 1].innerHTML = "EQUIP")
            }

            function bo(t, n, e, o) {
                const c = T().hZ({
                    i1: "menu-item subcontent-bg",
                    parent: clan_menu_content
                });
                T().hZ({
                    parent: c,
                    i1: "header",
                    tag: "p",
                    i0: n ? Me.players[t].d8 : xe.lM[t].d8
                });
                if (n && e && t !== Ke || !n) {
                    const e = T().hZ({
                        parent: c,
                        i1: "menu-pricing"
                    });
                    T().hZ({
                        parent: e,
                        i1: "green-button text-shadowed-3 action clan_action_button",
                        i0: n ? "KICK" : "JOIN",
                        tag: "button",
                        onmouseup: n ? t => {
                            if (!t.isTrusted) return;
                            Lc(o)
                        } : n => {
                            if (!n.isTrusted) return;
                            Oc(t)
                        }
                    })
                }
            }

            function po(t, n, e, i) {
                const o = t + " - " + e;
                T().hZ({
                    parent: server_select,
                    tag: "option",
                    text: o
                }).setAttribute("region", i)
            }

            function jo(t, n) {
                const e = rt()[t].d6 || "",
                    o = rt()[t].d8 || "",
                    c = rt()[t].description || "",
                    r = 1 === n ? "EQUIP" : 2 === n ? "UNEQUIP" : "BUY",
                    f = T().hZ({
                        i1: "menu-item",
                        parent: hat_menu_content
                    });
                T().hZ({
                    tag: "img",
                    src: et[rt()[t].d5].src,
                    parent: f
                });
                const a = T().hZ({
                        parent: f,
                        i1: "column-flex column-flex-extra"
                    }),
                    s = (T().hZ({
                        parent: a,
                        i1: "header",
                        tag: "p",
                        i0: o
                    }), T().hZ({
                        parent: a,
                        i1: "description",
                        tag: "p",
                        i0: c
                    }), T().hZ({
                        parent: f,
                        i1: "menu-pricing"
                    }));
                T().hZ({
                    parent: s,
                    i1: "pricing hat_price_tag",
                    i0: e,
                    tag: "p"
                }), T().hZ({
                    parent: s,
                    i1: "green-button text-shadowed-3 action hat_action_button",
                    i0: r,
                    tag: "button",
                    onmouseup: n => {
                        if (!n.isTrusted) return;
                        if (!n.target) return;
                        if (!false_six) return;
                        zc(t)
                    }
                })
            }

            function mo(t) {
                hat_menu.style.display = t ? "flex" : "none", t && (false_seven && Oi(![]), false_five && qi(![])), false_six = t
            }
            Ki(), zi(), ho(), uo();
            let wo = ![];

            function To(t) {
                if (!t) return mo(t);
                if (wo) return ![];
                wo = !![], setTimeout(() => {
                    mo(t), wo = ![]
                }, 100 * Math.random() + 50)
            }

            function _o() {
                for (let t = 0, n = sn.kK; t < n.length; t++) {
                    let e = n[t];
                    e.gU = Ri / 2 - 107 * n.length / 2 + 107 * t, e.gV = Gi - e.height - 5
                }
                for (let t = 0, n = sn.kL; t < n.length; t++) {
                    let e = n[t];
                    e.gU = Ri / 2 - 107 * n.length / 2 + 107 * t, e.gV = 5
                }
                const t = Be.kN;
                t.gU = Ri / 2 - t.width / 2, t.gV = Gi - 100 - 10 - t.height;
                const n = Ie.l9;
                n.gU = Ri - n.width - 11, n.gV = 5, ri.gV = 5, ri.gU = n.gU - n.width - 11, ci.gV = 5, ci.gU = ri.gU - ri.width - 11, fi.gV = 5, fi.gU = ci.gU - ci.width - 11;
                const e = Ie;
                e.gV = 0, e.gU = Ri - e.width - 5;
                for (let t = 0, n = xe.lN; t < n.length; t++) {
                    let o = n[t];
                    o.gU = Ri - 107 * n.length + 107 * t, o.gV = e.height + 110
                }
            }

            function vo(t) {
                if (en(t), is_false_) {
                    let t = St,
                        e = It;
                    if (-1 !== e.i) {
                        if (T().hb(e.kn, e.ko, e.kp, e.kq) > 5) {
                            let t = T().hc(e.kn, e.ko, e.kp, e.kq);
                            if (U.get(Oe)) U.get(Oe).fe = t;
                            t !== Pt && Nt >= n().dE && $t(t), !Ht && Jt(t)
                        }
                    } else Ht && Xt(Pt);
                    if (T().hb(t.kn, t.ko, t.kp, t.kq) > 5)
                        if (-1 !== t.i) {
                            let e = T().hc(t.kn, t.ko, t.kp, t.kq);
                            e !== Rt && Wt >= n().dE && Yt(e)
                        } else null !== Rt && Zt()
                } else {
                    const t = Li();
                    U.get(Oe) && (U.get(Oe).fe = t), t !== Pt && Nt >= n().dE && tn(t)
                }
                const e = false_five || false_seven ? 0 : Ct;
                e !== Dt && (Nc(e), on(e))
            }

            function Uo(t) {
                const n = et[Y().P];
                T().ie(t, n, Ri - n.i4.i7, Gi - n.i4.i8 - 5, n.i4.i7, n.i4.i8);
                const e = Be.kR;
                t.drawImage(e, Ri - e.width - 5, Gi - n.i4.i8 + 15);
                const o = Be.kT;
                t.drawImage(o, Ri - o.width - 5, Gi - n.i4.i8 + 69);
                const c = Be.kS;
                t.drawImage(c, Ri - c.width - 5, Gi - n.i4.i8 + 122);
                const r = Be.kU;
                t.drawImage(r, Ri - r.width - 5, Gi - n.i4.i8 + 186)
            }

            function Ao(t, e, o) {
                for (let t, n = 0, o = xe.lN; n < o.length; n++) t = o[n], t.kt(e);
                let player = Me.players[t],
                    c = xe.lN[0];
                e.drawImage(player.jB = T().hW(player.d8, n().dL, n().dK, "#404040"), c.gU, c.gV - player.jB.height)
            }

            function Eo() {
                return ze !== Oe
            }

            function Qo(t, e) {
                const o = Eo(),
                    c = Be.kN;
                if (!o) c.kt(t);
                if (!o) {
                    if (!Be.kX) Be.kX = T().hW("AGE 0", 24, "#fff");
                    const e = Be.kX;
                    t.drawImage(e, .5 * Ri - .5 * e.width, c.gV - e.height);
                    for (let e, o = 0, c = Be.kK; o < c.length; o++)
                        if (e = c[o], e.kt(t), 1 === e.dZ && !is_false_) {
                            let i = Be.kr[o],
                                c = ot()[i].fw;
                            Be.kY.kt(t, i, Be.kx[c], n().dU[c], e.gU, e.gV - 150)
                        } for (let e, o = 0, c = Be.kL; o < c.length; o++) {
                        if (0 === o) {
                            if (!et[Y().aD]) et[Y().aD] = T().hW("Choose item", 40, "#fff");
                            const n = et[Y().aD];
                            t.drawImage(n, .5 * Ri - .5 * n.width, 110)
                        }
                        if (e = c[o], e.kt(t), 1 === e.dZ && !is_false_) {
                            let c = Be.ft[o],
                                r = ot()[c].fw;
                            Be.kY.kt(t, c, Be.kx[r], n().dU[r], e.gU, e.gV + e.height)
                        }
                    }
                }
                if (Ie.la) {
                    Ie.kt(t, Me);
                    const n = et[Y().N];
                    t.drawImage(n, Ri - n.width - 5, 350);
                    const e = Be.kV,
                        o = Be.kW;
                    if (t.drawImage(e, Ri - n.width - 10 - e.width, 350 + n.height / 2 - e.height / 2), Be.currency > 0) {
                        t.translate(0, 50);
                        let e = et[Y().cC];
                        T().ie(t, e, Ri - 50 - 5, 350), t.drawImage(o, Ri - n.width - 10 - o.width, 350 + n.height / 2 - o.height / 2), t.translate(0, -50)
                    }
                }
                if (Fe.lC(t), ci.kt(t), fi.kt(t), ri.kt(t), Ie.l9.kt(t), Uo(t), Qe.lq(t, e), Se.fd) {
                    Se.gE(e);
                    const n = .7 + Math.min(1, T().hv.hI(Se.fd)) / 2,
                        o = Se.l7,
                        c = o.width * n || 1,
                        r = o.height * n || 1;
                    t.save(), t.globalAlpha = Se.fd, t.drawImage(Se.l7, .5 * Ri - c / 2, 50 - r / 2, c, r), t.restore()
                } - 1 !== St.i && yo(t, St.kn, St.ko, St.kp, St.kq), -1 !== It.i && yo(t, It.kn, It.ko, It.kp, It.kq), xe.lL[0] && Ao(xe.lL[0], t, e), false_eight && Ci && t.drawImage(Ci, 0, 0)
            }

            function yo(t, n, e, o, c) {
                t.save();
                let r = Ve / Ae,
                    a = o - n,
                    s = c - e,
                    l = Ft;
                t.beginPath(), t.arc(n * r, e * r, l, 0, 2 * Math.PI, ![]), t.closePath(), t.fillStyle = "rgba(79, 64, 60, 0.6)", t.fill();
                let d = a,
                    u = s,
                    g = Math.sqrt(d ** 2 + u ** 2),
                    h = g > l ? g / l : 1;
                d /= h, u /= h, t.beginPath(), t.arc(n * r + d, e * r + u, .5 * l, 0, 2 * Math.PI, ![]), t.closePath(), t.fillStyle = "#fff", t.fill(), t.restore()
            }

            function Mo(t, e) {
                let c = et[Y().bg];
                for (let e = 0, r = entities[o().e1], f = r.length; e < f; e++) {
                    const player = r[e],
                        o = Me.players[player.jm],
                        f = rt()[player.jc];
                    if (player.dZ & m().ij) continue;
                    if (!f.d9 || player.jm === Ke) {
                        let e = player.jd ? xe.lM[player.jd] : null,
                            r = e && 0 !== e.length ? e.jB = T().hW("[" + e.d8 + "]", n().dL, "#96C949", "#404040") : null,
                            f = e && e.jm === player.jm;
                        const a = o.jB || (o.jB = T().hW(o.d8, n().dL, n().dK, "#404040"));
                        let s = a.width + (r ? r.width + (f ? c.i4.i7 : 0) : 0);
                        r && t.drawImage(r, player.gU - s / 2, player.gV - n().dM - r.height / 2), t.drawImage(a, player.gU - s / 2 + (r ? r.width : 0), player.gV - n().dM - a.height / 2);
                        let l = 0;
                        if (player.jp > 0) {
                            const e = et[Y().cq][player.jp - 1];
                            l += e.i4.i7, T().ie(t, e, player.gU - s / 2 + (r ? r.width : 0) + a.width, player.gV - n().dM - e.i4.i8 / 2 - 6, e.i4.i7, e.i4.i8)
                        }
                        f && T().ie(t, c, player.gU - s / 2 + (r ? r.width : 0) + l + a.width + 4, player.gV - n().dM - c.i4.i8 - 6), ut(player, t, qe && qe === player.jd || Ke && Ke === player.jm)
                    }
                }
                if (true_two)
                    for (let n = 0; n < $n.length; n++) {
                        const e = entities[$n[n]];
                        for (let n = 0; n < e.length; n++) {
                            const i = e[n];
                            if (Ke && Ke === i.jm) {
                                const n = et[Y().d1];
                                T().ie(t, n, i.gU - n.i4.i7 / 2, i.gV - n.i4.i8 / 2, n.i4.i7, n.i4.i8)
                            }
                        }
                    }
                for (let e, c = 0, r = entities[o().aI], f = r.length; c < f; c++) {
                    e = r[c], !vn[o().aI] && (vn[o().aI] = T().hW("Cow", n().dL, n().dK, "#404040"));
                    const f = vn[o().aI];
                    t.drawImage(f, e.gU - f.width / 2, e.gV - n().dM - f.height / 2), ut(e, t, ![])
                }
                for (let e, c = 0, r = entities[o().cH], f = r.length; c < f; c++) {
                    e = r[c], !vn[o().cH] && (vn[o().cH] = T().hW("Duck", n().dL, n().dK, "#404040"));
                    const f = vn[o().cH];
                    t.drawImage(f, e.gU - f.width / 2, e.gV - n().dM - f.height / 2), ut(e, t, ![])
                }
                let r = null,
                    f = 0,
                    a = U.get(Oe);
                for (let e, c = 0, s = entities[o().bR], l = s.length; c < l; c++) {
                    if (e = s[c], a) {
                        let t = T().hb(a.gU, a.gV, e.gU, e.gV);
                        t < n().dO && (!r || t < f) && (r = e, f = t)
                    }!vn[o().bR] && (vn[o().bR] = T().hW("Golden Cow", n().dL, n().dK, "#404040"));
                    const l = vn[o().bR];
                    t.drawImage(l, e.gU - l.width / 2, e.gV - n().dM - l.height / 2), ut(e, t, ![])
                }
                for (let e, c = 0, r = entities[o().bM], f = r.length; c < f; c++) {
                    e = r[c], !vn[o().bM] && (vn[o().bM] = T().hW("Shark", n().dL, n().dK, "#404040"));
                    const f = vn[o().bM];
                    t.drawImage(f, e.gU - f.width / 2, e.gV - n().dM - f.height / 2), ut(e, t, ![])
                }
                for (let e, c = 0, r = entities[o().bN], f = r.length; c < f; c++) {
                    e = r[c], !vn[o().bN] && (vn[o().bN] = T().hW("Wolf", n().dL, n().dK, "#404040"));
                    const f = vn[o().bN];
                    t.drawImage(f, e.gU - f.width / 2, e.gV - n().dM - f.height / 2), ut(e, t, ![])
                }
                if (r) {
                    Ze = r.i, !et[Y().c8] && (et[Y().c8] = T().hW("[Interact]", 24, "#fff", "#404040"));
                    const n = et[Y().c8];
                    t.drawImage(n, r.gU - n.width / 2, r.gV - 40 - n.height / 2)
                } else if (Ze) Ze = 0;
                for (let e, c = 0, r = entities[o().cD], f = r.length; c < f; c++) {
                    e = r[c], !vn[o().cD] && (vn[o().cD] = T().hW("Mammoth", n().dL, n().dK, "#404040"));
                    const f = vn[o().cD];
                    t.drawImage(f, e.gU - f.width / 2, e.gV - n().dM - f.height / 2), ut(e, t, ![])
                }
                for (let e, c = 0, r = entities[o().cE], f = r.length; c < f; c++) {
                    e = r[c], !vn[o().cE] && (vn[o().cE] = T().hW("Dragon", n().dL, n().dK, "#404040"));
                    const f = vn[o().cE];
                    t.drawImage(f, e.gU - f.width / 2, e.gV - n().dM - f.height / 2), ut(e, t, ![])
                }
            }

            function xo(t, e, o, c) {
                const r = n().dF;
                e = Math.floor(e / r) * r, o = Math.floor(o / r) * r;
                let a = (Di + r) / c,
                    s = (Vi + r) / c;
                t.lineWidth = 4, t.strokeStyle = "rgba(0,0,0,.06)", t.beginPath();
                for (let n = 0, c = 0; n <= a; n += r)
                    for (t.moveTo(e + n, o), t.lineTo(e + n, o + s), c = 0; c <= s; c += r) t.moveTo(e, o + c), t.lineTo(e + a, o + c);
                t.stroke()
            }

            function Bo(t, n) {
                ki.hl = ye.gU - .5 * Ri, ki.hn = ye.gV - .5 * Gi, ki.hm = ye.gU + .5 * Ri, ki.ho = ye.gV + .5 * Gi;
                let e = Ee;
                for (let n, o = 0, c = In().length; o < c; o++) n = In()[o], T().ih(e, n, ki) && (t.fillStyle = n.iu, t.fillRect(e.gU, e.gV, e.w, e.h))
            }

            function So(t, e) {
                Ge.m6 && (Ge.m7 += e, Ge.m7 <= Ge.transition ? (Ge.lE = T().hj(Ge.m2, Ge.lI, Ge.m7 / Ge.transition), Ge.lD = T().hj(Ge.m3, Ge.lK, Ge.m7 / Ge.transition), Ge.lG = T().hj(Ge.m4, Ge.lH, Ge.m7 / Ge.transition), Ge.lF = T().hj(Ge.m5, Ge.lJ, Ge.m7 / Ge.transition)) : (Ge.m6 = ![], Ge.lE = Ge.lI, Ge.lD = Ge.lK, Ge.lG = Ge.lH, Ge.lF = Ge.lJ)), t.globalAlpha = .3, t.fillStyle = "red";
                let o = De,
                    c = Ee;
                o.hl = 0, o.hn = 0, o.hm = n().dH, o.ho = Ge.lD, T().ih(c, o, ki) && t.fillRect(c.gU, c.gV, c.w, c.h), o.hl = 0, o.hn = 0, o.hm = Ge.lE, o.ho = n().dI, T().ih(c, o, ki) && t.fillRect(c.gU, c.gV, c.w, c.h), o.hl = Ge.lG, o.hn = 0, o.hm = n().dH, o.ho = n().dI, T().ih(c, o, ki) && t.fillRect(c.gU, c.gV, c.w, c.h), o.hl = 0, o.hn = Ge.lF, o.hm = n().dH, o.ho = n().dI, T().ih(c, o, ki) && t.fillRect(c.gU, c.gV, c.w, c.h), t.globalAlpha = 1
            }

            function Io(t, n) {
                if (t.translate(.5 * Ri - ye.gU, .5 * Gi - ye.gV), Bo(t, n), true_one && xo(t, ye.gU - .5 * Ri, ye.gV - .5 * Gi, Ae), dt(t, n), Ge.h9) So(t, n);
                Mo(t, n), Qe.gE(t, 1e3 * n)
            }
            let Fo = new Uint8Array(4096),
                Co = 0;
            new Uint8Array(1e3);

            function Ro(t) {
                const n = t.data;
                if ("string" == typeof n) {
                    const t = JSON.parse(n);
                    switch (t[0]) {
                    case bn().f9.eG:
                        No(t);
                        break;
                    case bn().f9.f7:
                        Wo(t);
                        break;
                    case bn().f9.f6:
                        wss.send(window[Nn().g("solve")](t[1]));
                        break;
                    case bn().f9.ey:
                        Ac(t);
                        break;
                    case bn().f9.eQ:
                        wc(t);
                        break;
                    case bn().f9.eD:
                        jc(t);
                        break;
                    case bn().f9.eJ:
                        Jo(t);
                        break;
                    case bn().f9.eK:
                        Ko(t);
                        break;
                    case bn().f9.eI:
                        hc(t);
                        break;
                    case bn().f9.eF:
                        nc(t);
                        break;
                    case bn().f9.eM:
                        zo(t[1]);
                        break;
                    case bn().f9.f5:
                        $o(t);
                        break;
                    default:
                        break
                    }
                } else {
                    let t = new Uint8Array(n);
                    switch (Co = t.byteLength, H(Fo, t), Fo[0]) {
                    case bn().f9.ex:
                        vc();
                        break;
                    case bn().f9.eC:
                        Tc();
                        break;
                    case bn().f9.eR:
                        mc();
                        break;
                    case bn().f9.ez:
                        Uc();
                        break;
                    case bn().f9.eN:
                        Ho();
                        break;
                    case bn().f9.eB:
                        _c();
                        break;
                    case bn().f9.eH:
                        pc();
                        break;
                    case bn().f9.eU:
                        bc();
                        break;
                    case bn().f9.eL:
                        tc();
                        break;
                    case bn().f9.eP:
                        kc();
                        break;
                    case bn().f9.eA:
                        Ec();
                        break;
                    case bn().f9.eE:
                        ic();
                        break;
                    case bn().f9.eO:
                        gc();
                        break;
                    case bn().f9.eV:
                        cc();
                        break;
                    case bn().f9.f8:
                        Po();
                        break;
                    case bn().f9.f1:
                        ec();
                        break;
                    case bn().f9.eX:
                        sc();
                        break;
                    case bn().f9.eW:
                        oc();
                        break;
                    case bn().f9.eY:
                        lc();
                        break;
                    case bn().f9.eZ:
                        dc();
                        break;
                    case bn().f9.f0:
                        ac();
                        break;
                    case bn().f9.f2:
                        fc();
                        break;
                    case bn().f9.eT:
                        rc();
                        break;
                    case bn().f9.f4:
                        Xo();
                        break;
                    case bn().f9.f3:
                        Yo();
                        break;
                    default:
                        break
                    }
                }
            }

            function Go() {
                W()
            }

            function Do(t) {
                switch (t.code) {
                case bn().fb.mg:
                    alert("disconnected: Banned");
                    break;
                case bn().fb.mh:
                    alert("disconnected: Kicked");
                    break;
                case bn().fb.mi:
                    alert("disconnected: not iNITIALISED");
                    break;
                case bn().fb.mj:
                    alert("disconnected: player already exists");
                    break;
                case bn().fb.mk:
                    alert("disconnected: is hacker");
                    break;
                case bn().fb.ml:
                    alert("disconnected: token invalid, try reloading?");
                    break;
                case bn().fb.mm:
                    alert("disconnected: unknown");
                    break;
                case bn().fb.mn:
                    Vo();
                    break;
                case bn().fb.mo:
                    alert("Client Encryption unable to be established, try reloading?");
                    break;
                case 1006:
                    alert("Unhandled error message, please report");
                    break
                }
                false_one = ![], _false = ![]
            }

            function Vo() {
                lo(![])
            }

            function Po() {
                let t = Fo[1] | Fo[2] << 8;
                const n = _TextDecoder.decode(new Uint8Array(Fo.buffer, 3, Co - 3));
                Qe.ls(t, (Me.players[t] ? Me.players[t].d8 : "XX") + ": " + n)
            }

            function No(t) {
                Ke = t[1];
                const n = t[2];
                for (let t = 0; t < n + 1; t++) Me.add_player(t, "", 0);
                for (let t = 0; t < 20; t++) xe.lQ(t, "", 0);
                for (let player, n = 0, e = t[3]; n < e.length; n++) player = e[n], Me.new_player(player[0], false_eleven ? "Sploop" + player[0] : player[1], player[2], !![]);
                for (let n, e = 0, o = t[4]; e < o.length; e++) n = o[e], xe.lS(n[0], n[1], n[2]);
                uc();
                const e = t[5];
                if (e) {
                    switch (e[0]) {
                    case "BR": {
                        const [t, n, o, c, r, f, a, s, l, d, u, g, h, k, b, p] = e;
                        Ge.h9 = !![], Ge.m6 = n, Ge.m7 = o, Ge.transition = c, Ge.lE = r, Ge.lD = f, Ge.lG = a, Ge.lF = s, Ge.m2 = l, Ge.m3 = d, Ge.m4 = u, Ge.m5 = g, Ge.lI = h, Ge.lK = k, Ge.lH = b, Ge.lJ = p;
                        break
                    }
                    }
                }
                false_one = !![]
            }

            function Wo(t) {
                switch (t[1]) {
                case "BR": {
                    const [n, e, o, c, r, f, a, s, l, d, u, g, h, k, b, p, j] = t;
                    Ge.m6 = o, Ge.m7 = c, Ge.transition = r, Ge.lE = f, Ge.lD = a, Ge.lG = s, Ge.lF = l, Ge.m2 = d, Ge.m3 = u, Ge.m4 = g, Ge.m5 = h, Ge.lI = k, Ge.lK = b, Ge.lH = p, Ge.lJ = j;
                    break
                }
                }
            }

            function Ho() {
                const t = Fo[1] | Fo[2] << 8,
                    n = U.get(t);
                n && (n.jd = Fo[3], n.je = Fo[4])
            }

            function Lo() {
                if (!false_) return;
                if (0 === bi) new_wss_connection(pi.mc, pi.md, pi.port, pi._, pi.d8);
                else {
                    if (!false_one) return;
                    Wc(name.value), ve = 1
                }
            }

            function qo(t) {
                ve = t
            }

            function Oo() {
                Lo()
            }

            function Ko(t) {
                Kn().dw(), Be.l4(), Fe.lA(ye.gU, ye.gV), ko(), Oe = ze = 0, _false = ![], cn(0), Be.ft.length = 0, io(!![]), qn().refresh()
            }

            function zo(t) {
                Se.ld(t, 3)
            }

            function Zo(t, n, e) {
                switch (t) {
                case Gn().bR:
                case Gn().cE:
                    Se.ld(Vn()[t].description, 3);
                    break;
                default:
                    Se.ld("An event is underway!");
                    break
                }
                Fe.lx(new(wn())(n / 255, e / 255))
            }

            function Yo() {
                Zo(Fo[1], Fo[2], Fo[3])
            }

            function Xo() {
                Se.ld("Event has ended."), Fe.ly()
            }

            function Jo(t) {
                Be.l3(t[1][jn().gW])
            }

            function $o(t) {
                Be.l5(t[1])
            }

            function tc() {
                const t = Math.max(0, Fo[1] | Fo[2] << 8 | Fo[3] << 16 | Fo[4] << 24),
                    n = Fo[5] | Fo[6] << 8 | Fo[7] << 16 | Fo[8] << 24,
                    e = Fo[9] | Fo[10] << 8 | Fo[11] << 16 | Fo[12] << 24,
                    o = Fo[13] | Fo[14] << 8 | Fo[15] << 16 | Fo[16] << 24,
                    c = Fo[17] | Fo[18] << 8 | Fo[19] << 16 | Fo[20] << 24;
                Be.l2(t), Be.l1(n, e, o, c)
            }

            function nc(t) {
                for (let n = 0; n < t[1].length; n++) Me.jE(t[1][n][0], t[1][n][1]);
                Ie.gE(Me, t[1])
            }

            function ec() {
                for (let t = 1; t < Co; t++) Be.kx[t - 1] = Fo[t]
            }

            function ic() {
                for (let t = 1; t < Co; t += 5) {
                    const n = Fo[t],
                        e = Fo[t + 1] | Fo[t + 2] << 8,
                        o = Fo[t + 3];
                    let c = Fo[t + 4];
                    const r = U.get(e);
                    if (r) switch (n) {
                    case Cn().it:
                        if (r.ju && !r.js.value) {
                            let t = T().hP(o);
                            r.ju.active = !![], r.ju.jv = t, r.js.hu = r.js.ht = 10
                        }
                        break;
                    case Cn().ir:
                        let t = !c ? Math.PI : Math.PI / 2,
                            n = ot()[o];
                        r.js.max = t, r.js.min = 0;
                        const e = n.reload / 1e3;
                        r.js.ht = r.js.max / (.25 * e), r.js.hu = r.js.max / (.75 * e), r.js.gE(.01);
                        break
                    }
                }
            }

            function oc() {
                Fe.lz(), create_cl.style.display = "block", leave_clan.style.display = "none", qe = null, xe.lL.length = 0, clan_title.innerHTML = "Clans", uc()
            }

            function cc() {
                create_cl.style.display = "none", leave_clan.style.display = "block";
                let t = Fo[1],
                    n = Fo[2];
                qe = t, clan_title.innerHTML = xe.lM[qe].d8, T().hY(clan_menu_content);
                for (let t = 3; t < Co; t++) bo(Fo[t], !![], n, t - 3)
            }

            function rc() {
                Ic(Fo[1])
            }

            function fc() {
                Fe.lz();
                for (let t = 1; t < Co; t += 3) {
                    let n = Fo[t + 0],
                        e = Fo[t + 1] / 255,
                        i = Fo[t + 2] / 255;
                    n && n !== Ke && Fe.lB(e, i)
                }
            }

            function ac() {
                let t = Fo[1];
                T().hY(clan_menu_content);
                for (let n = 2; n < Co; n++) bo(Fo[n], !![], t, n - 2)
            }

            function sc() {
                let t = Fo[1],
                    n = Fo[2],
                    e = _TextDecoder.decode(new Uint8Array(Fo.buffer, 3, Co - 3));
                if (xe.lS(t, n, e), !t && false_seven) uc()
            }

            function lc() {
                let t = Fo[1];
                if (xe.lR(t), !t && false_seven) uc()
            }

            function dc() {
                for (let t = 1; t < Co; t++) xe.lP(Fo[t])
            }

            function uc() {
                T().hY(clan_menu_content);
                for (let t, n = 0, e = xe.lM; n < e.length; n++) t = e[n], t.active && bo(n, ![], ![])
            }

            function gc() {
                for (let t = 1; t < Co; t += 2) {
                    const n = Fo[t],
                        e = Fo[t + 1],
                        o = 1 === e ? "EQUIP" : 2 === e ? "UNEQUIP" : "BUY";
                    rt()[n].mf = e, document.getElementsByClassName("hat_price_tag")[n - 1].style.display = 1 === e || 2 === e ? "none" : "block", document.getElementsByClassName("hat_action_button")[n - 1].innerHTML = o
                }
            }

            function hc(t) {
                const n = U.get(t[2]);
                n && Qe.lr(n.gU, n.gV, .18, 800, t[1], 0 === t[3] ? "#fff" : "#8ecc51")
            }

            function kc() {
                const t = Fo[1] | Fo[2] << 8,
                    n = _TextDecoder.decode(new Uint8Array(Fo.buffer, 3, Co - 3)),
                    e = U.get(t);
                (e || !false_eleven || !(e.jm === Ke || qe && qe === e.jd)) && Qe.lt(n, e)
            }

            function bc() {
                let t = Fo[1] | Fo[2] << 8;
                Ci = T().hW(t + "ms", n().dL, n().dK, "#404040")
            }

            function pc() {
                const t = Fo[1];
                Me.remove_player(t), Ie.gE(Me)
            }

            function jc(t) {
                Me.new_player(t[1], false_eleven ? "Sploop" + t[1] : t[2], 0, !![])
            }

            function mc() {
                Be.ft.length = 0, Be.l6(), _o()
            }

            function wc(t) {
                const n = t[1];
                for (let t = 0; t < n.length; t++) Be.ft.push(n[t]);
                Be.l6(), _o()
            }

            function Tc() {
                if (Co > 1) {
                    Be.kr.length = 0;
                    for (let t = 1; t < Co; t++) Be.kr.push(Fo[t]);
                    Be.gE(), _o()
                }
            }

            function _c() {
                _false = !![], io(![]), Oe = Fo[1] | Fo[2] << 8, ze = Fo[3] | Fo[4] << 8
            }

            function vc() {
                const t = +new Date;
                for (let n = 1; n < Co; n += 18) {
                    const e = Fo[n + 8],
                        i = Fo[n + 2] | Fo[n + 3] << 8,
                        o = Fo[n + 10];
                    e & m().e0 ? C(i, !![]) : I(Fo[n], i, Fo[n + 1], Fo[n + 8], Fo[n + 4] | Fo[n + 5] << 8, Fo[n + 6] | Fo[n + 7] << 8, T().hP(Fo[n + 9]), o, Fo[n + 11], Fo[n + 12], Fo[n + 13], Fo[n + 14], Fo[n + 15], Fo[n + 16], Fo[n + 17], t)
                }
            }

            function Uc() {
                Ke = Fo[1];
                const t = Xn()(Ke, window[(0, Pn.g)("getMemTo")]());
                P(t[0], t[1], t[2], t[3]);
                const n = Ue;
                sendData(new Uint8Array([bn().fa.e7, Fo[1], ...t, ...n])), false_ = !![]
            }

            function Ac(t) {
                io(![]), _false = !![], Oe = ze = t[1], Me.new_player(Ke, t[2], t[3], !![]), Be.l2(t[3]), Be.kr = t[4];
                let n = t[5];
                if (Be.l1(n[0], n[1], n[2], n[3]), Jo([bn().f9.eJ, t[6]]), t[7]) Zo(t[7][1], t[7][2], t[7][3]);
                Be.gE(), Be.l6(), _o()
            }

            function Ec() {
                console.error("[GAME] Error id: " + (() => {
                    for (let t in bn().fb)
                        if (bn().fb[t] === Fo[1]) return t
                })())
            }

            function 
            Qc(t) {
                sendData(new Uint8Array([bn().fa.eh, ...textEncoder.encode(t)]))
            }

            function yc(t) {
                sendData(new Uint8Array([bn().fa.el, +t]))
            }

            function Mc(t) {
                t = 65535 * (t + Math.PI) / (2 * Math.PI), sendData(new Uint8Array([bn().fa.eq, 255 & t, t >> 8 & 255]))
            }

            function xc(t) {
                t = 65535 * (t + Math.PI) / (2 * Math.PI), sendData(new Uint8Array([bn().fa.eb, 255 & t, t >> 8 & 255]))
            }

            function Bc() {
                sendData(new Uint8Array([bn().fa.ec]))
            }

            function Sc(t) {
                sendData(new Uint8Array([bn().fa.ee, 255 & t, t >> 8]))
            }

            function Ic(t) {
                sendData(new Uint8Array([bn().fa.ek, t]))
            }

            function Fc(t) {
                sendData(new Uint8Array([bn().fa.ef, t]))
            }

            function Cc(t) {
                sendData(new Uint8Array([bn().fa.ea, t]))
            }

            function Rc(t) {
                sendData(new Uint8Array([bn().fa.ei, t]))
            }

            function Gc(t) {
                t = 65535 * (t + Math.PI) / (2 * Math.PI), sendData(new Uint8Array([bn().fa.e9, 255 & t, t >> 8 & 255]))
            }

            function Dc(t) {
                t = 65535 * (t + Math.PI) / (2 * Math.PI), sendData(new Uint8Array([bn().fa.eo, 255 & t, t >> 8 & 255]))
            }

            function Vc(t) {
                t = 65535 * (t + Math.PI) / (2 * Math.PI), sendData(new Uint8Array([bn().fa.em, 255 & t, t >> 8 & 255]))
            }

            function Pc() {
                sendData(new Uint8Array([bn().fa.en]))
            }

            function Nc(t) {
                sendData(new Uint8Array([bn().fa.e8, t]))
            }

            function Wc(t) {
                const n = Nn().getData("skin"),
                    e = Nn().getData("accessory"),
                    i = Nn().getData("back"),
                    o = [bn().fa.ed, t, n, "FFFFFEEEEGGBBBAAA", e, void 0, void 0, i],
                    c = Nn().getData("accToken", ""),
                    r = Nn().getData("accMail", "");
                c && r ? (o[5] = r, o[6] = c) : (o[5] = 0, o[6] = 0), sendData(JSON.stringify(o))
            }

            function createClan(t) {
                sendData(new Uint8Array([bn().fa.ev, ...textEncoder.encode(t)]))
            }

            function Lc(t) {
                sendData(new Uint8Array([bn().fa.eu, t]))
            }

            function qc(t) {
                sendData(new Uint8Array([bn().fa.et, t]))
            }

            function Oc(t) {
                sendData(new Uint8Array([bn().fa.es, t]))
            }

            function Kc() {
                sendData(new Uint8Array([bn().fa.er]))
            }

            function zc(t) {
                sendData(new Uint8Array([bn().fa.eg, t]))
            }
        }()
    })();
})(6206277774457716);