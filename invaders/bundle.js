var app = function(t) {
    "use strict";

    function e(t) {
        return [Math.round(t[0]), Math.round(t[1])]
    }

    function i(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }

    function s(t, e, i = 1) {
        return [t[0] + e[0] * i, t[1] + e[1] * i]
    }

    function h(t) {
        let e = a(t) || 1;
        return [t[0] / e, t[1] / e]
    }

    function a(t, e) {
        return i(e ? [t[0] - e[0], t[1] - e[1]] : t)
    }

    function n(t, e) {
        return [e[0] - t[0], e[1] - t[1]]
    }

    function o(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function r(t, e) {
        return [t[0] * e, t[1] * e]
    }

    function l(t, e, s, a) {
        let r = n(e, s),
            l = [(c = h(r))[1], -c[0]];
        var c;
        let d = n(e, t),
            g = i(r),
            f = o(r, d) / g,
            u = o(l, d);
        return Math.abs(u) <= a && 0 <= f && f <= g
    }

    function c(t, e, i = 1) {
        let s = a(t, e),
            h = [];
        for (let a = 0; a <= s; a += i) h.push(d(t, e, a));
        return h
    }

    function d(t, e, i) {
        return [t[0] * (1 - i) + i * e[0], t[1] * (1 - i) + i * e[1]]
    }

    function g(t) {
        return [Math.cos(t), Math.sin(t)]
    }
    class f {
        constructor(t) {
            this.dots = [], this.length = 0, Object.assign(this, t)
        }
        updateLength() {
            this.length = this.dots.reduce((t, e, i) => 0 == i ? 0 : t + a(this.dots[i - 1], e), 0) || 0
        }
        translate(t) {
            for (let e in this.dots) this.dots[e] = s(this.dots[e], t)
        }
        enlarge(t) {
            let e = this.dots;
            for (e.push(t), this.updateLength(); this.length > this.maxLength || e.length > 30;) e.shift(), this.updateLength()
        }
        compact(t, e) {
            for (; t.dots.length >= 3 && a(t.head, t.dots[t.dots.length - 2]) <= e;) t.dots.splice(t.dots.length - 2, 1)
        }
        get head() {
            return this.dots[this.dots.length - 1]
        }
        draw(t, i) {
            let s = this.dots;
            t.save(), t.lineCap = "round";
            for (let h = 1; h < s.length; h++) {
                let a = s[h],
                    n = s[h - 1];
                t.beginPath(), t.moveTo(...e(n)), i && i(this, h), t.lineTo(...e(a)), t.stroke()
            }
            t.restore()
        }
        drawSmooth(t) {
            if (this.dots.length < 2) return;
            let e = this.dots;
            t.save(), t.beginPath(), t.moveTo(...e[0]), t.lineCap = "round";
            for (let i = 1; i < e.length - 1; i++) {
                let h = e[i],
                    a = e[i - 1],
                    n = r(s(a, h), .5);
                t.quadraticCurveTo(a[0], a[1], n[0], n[1])
            }
            t.quadraticCurveTo(e[e.length - 2][0], e[e.length - 2][1], e[e.length - 1][0], e[e.length - 1][1]), t.stroke(), t.restore()
        }
        width(t) {
            return 4
        }
        hitTest(t) {
            let e = this.dots;
            for (let i = 1; i < e.length; i++) {
                let s = e[i],
                    a = e[i - 1];
                if (l(t, a, s, this.width(4))) return h(n(a, s))
            }
            return null
        }
        loseHead() {
            this.dots.length >= 3 && (this.dots.pop(), this.updateLength())
        }
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var u, m = (function(t) {
        function e() {
            this.setSettings = function(t) {
                for (var e = 0; e < 24; e++) this[String.fromCharCode(97 + e)] = t[e] || 0;
                this.c < .01 && (this.c = .01);
                var i = this.b + this.c + this.e;
                if (i < .18) {
                    var s = .18 / i;
                    this.b *= s, this.c *= s, this.e *= s
                }
            }
        }
        var i = new function() {
                var t, i, s, h, a, n, o, r, l, c, d, g;
                this._params = new e, this.reset = function() {
                    var t = this._params;
                    h = 100 / (t.f * t.f + .001), a = 100 / (t.g * t.g + .001), n = 1 - t.h * t.h * t.h * .01, o = -t.i * t.i * t.i * 1e-6, t.a || (d = .5 - t.n / 2, g = 5e-5 * -t.o), r = 1 + t.l * t.l * (t.l > 0 ? -.9 : 10), l = 0, c = 1 == t.m ? 0 : (1 - t.m) * (1 - t.m) * 2e4 + 32
                }, this.totalReset = function() {
                    this.reset();
                    var e = this._params;
                    return t = e.b * e.b * 1e5, i = e.c * e.c * 1e5, s = e.e * e.e * 1e5 + 12, 3 * ((t + i + s) / 3 | 0)
                }, this.synthWave = function(e, f) {
                    var u = this._params,
                        m = 1 != u.s || u.v,
                        p = u.v * u.v * .1,
                        w = 1 + 3e-4 * u.w,
                        v = u.s * u.s * u.s * .1,
                        k = 1 + 1e-4 * u.t,
                        b = 1 != u.s,
                        S = u.x * u.x,
                        y = u.g,
                        M = u.q || u.r,
                        T = u.r * u.r * u.r * .2,
                        I = u.q * u.q * (u.q < 0 ? -1020 : 1020),
                        A = u.p ? 32 + ((1 - u.p) * (1 - u.p) * 2e4 | 0) : 0,
                        E = u.d,
                        x = u.j / 2,
                        L = u.k * u.k * .01,
                        C = u.a,
                        P = t,
                        R = 1 / t,
                        N = 1 / i,
                        U = 1 / s,
                        G = 5 / (1 + u.u * u.u * 20) * (.01 + v);
                    G > .8 && (G = .8), G = 1 - G;
                    for (var H, W, $, O, B, D, _ = !1, q = 0, F = 0, j = 0, X = 0, K = 0, Y = 0, V = 0, z = 0, J = 0, Q = 0, Z = new Array(1024), tt = new Array(32), et = Z.length; et--;) Z[et] = 0;
                    for (et = tt.length; et--;) tt[et] = 2 * Math.random() - 1;
                    for (et = 0; et < f; et++) {
                        if (_) return et;
                        if (A && ++J >= A && (J = 0, this.reset()), c && ++l >= c && (c = 0, h *= r), (h *= n += o) > a && (h = a, y > 0 && (_ = !0)), W = h, x > 0 && (Q += L, W *= 1 + Math.sin(Q) * x), (W |= 0) < 8 && (W = 8), C || ((d += g) < 0 ? d = 0 : d > .5 && (d = .5)), ++F > P) switch (F = 0, ++q) {
                            case 1:
                                P = i;
                                break;
                            case 2:
                                P = s
                        }
                        switch (q) {
                            case 0:
                                j = F * R;
                                break;
                            case 1:
                                j = 1 + 2 * (1 - F * N) * E;
                                break;
                            case 2:
                                j = 1 - F * U;
                                break;
                            case 3:
                                j = 0, _ = !0
                        }
                        M && (($ = 0 | (I += T)) < 0 ? $ = -$ : $ > 1023 && ($ = 1023)), m && w && ((p *= w) < 1e-5 ? p = 1e-5 : p > .1 && (p = .1)), D = 0;
                        for (var it = 8; it--;) {
                            if (++V >= W && (V %= W, 3 == C))
                                for (var st = tt.length; st--;) tt[st] = 2 * Math.random() - 1;
                            switch (C) {
                                case 0:
                                    B = V / W < d ? .5 : -.5;
                                    break;
                                case 1:
                                    B = 1 - V / W * 2;
                                    break;
                                case 2:
                                    B = .225 * (((B = 1.27323954 * (O = 6.28318531 * ((O = V / W) > .5 ? O - 1 : O)) + .405284735 * O * O * (O < 0 ? 1 : -1)) < 0 ? -1 : 1) * B * B - B) + B;
                                    break;
                                case 3:
                                    B = tt[Math.abs(32 * V / W | 0)]
                            }
                            m && (H = Y, (v *= k) < 0 ? v = 0 : v > .1 && (v = .1), b ? (K += (B - Y) * v, K *= G) : (Y = B, K = 0), X += (Y += K) - H, B = X *= 1 - p), M && (Z[z % 1024] = B, B += Z[(z - $ + 1024) % 1024], z++), D += B
                        }
                        D *= .125 * j * S, e[et] = D >= 1 ? 32767 : D <= -1 ? -32768 : 32767 * D | 0
                    }
                    return f
                }
            },
            s = function(t) {
                i._params.setSettings(t);
                var e = i.totalReset(),
                    s = new Uint8Array(4 * ((e + 1) / 2 | 0) + 44),
                    h = 2 * i.synthWave(new Uint16Array(s.buffer, 44), e),
                    a = new Uint32Array(s.buffer, 0, 44);
                a[0] = 1179011410, a[1] = h + 36, a[2] = 1163280727, a[3] = 544501094, a[4] = 16, a[5] = 65537, a[6] = 44100, a[7] = 88200, a[8] = 1048578, a[9] = 1635017060, a[10] = h, h += 44;
                for (var n = 0, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "data:audio/wav;base64,"; n < h; n += 3) {
                    var l = s[n] << 16 | s[n + 1] << 8 | s[n + 2];
                    r += o[l >> 18] + o[l >> 12 & 63] + o[l >> 6 & 63] + o[63 & l]
                }
                return r
            };
        t.exports = s
    }(u = {
        exports: {}
    }, u.exports), u.exports);

    function p(t, e = .01) {
        let i = t.slice();
        i[23] *= .2 * Math.random() + .8, i[5] *= Math.random() + .5,
            function(t) {
                try {
                    var e = m(t),
                        i = new Audio;
                    i.src = e, i.play()
                } catch (t) {
                    console.error(t)
                }
            }(i)
    }
    class w {
        constructor(t) {
            this.game = t, t.fx.push(this)
        }
        update(t) {
            return !1
        }
        draw() {}
    }
    class v {}
    class k extends w {
        constructor(t, e, i) {
            super(t), this.at = e, this.life = 0, this.particles = [], this.color = [255, 255, 255], this.arc = 2 * Math.PI, this.lifeTime = 1, this.pvel = 300, this.pnum = 30, i && Object.assign(this, i);
            let s = t.fxScale;
            for (let t = 0; t < this.pnum; t++) {
                let i = new v;
                this.particles.push(i), i.at = r(e, s);
                let h = t / this.pnum * Math.PI * 2 + .1 * Math.random(),
                    a = Math.random() * this.pvel;
                i.vel = r(g(h), a * s)
            }
            p([3, , .1238, .3385, .3229, .0203, , .0284, , , , , , , , , .4758, -.0269, 1, , , , , .5])
        }
        update(t) {
            for (let e of this.particles) e.at = s(e.at, e.vel, t);
            return this.life += t / this.lifeTime, this.life <= 1
        }
        draw() {
            let t = this.game.ctx;
            t.save(), t.lineWidth = 1, t.strokeStyle = `rgba(${this.color.join()}, 1)`, t.fillStyle = `rgba(${this.color.join()}, ${.5 - .5 * (this.life || 0)})`, t.beginPath(), t.arc(this.at[0], this.at[1], 20 * (1 + 2 * this.life), 0, 2 * Math.PI), t.stroke(), t.fill(), t.restore();
            let e = this.game.ctb,
                i = this.game.fxScale;
            e.save(), e.lineWidth = 2 * i, e.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${1 - this.life})`;
            for (let t of this.particles) e.fillRect(t.at[0], t.at[1], 4 * i, 4 * i);
            e.restore()
        }
    }
    class b extends w {
        constructor(t, e, i) {
            super(t), this.foe = e, this.radius = i, this.time = 0
        }
        update(t) {
            return this.time += t, this.time < 1
        }
        draw() {
            let t = this.game.ctx;
            t.save(), t.beginPath(), t.lineWidth = 2, t.strokeStyle = `rgba(256,256,256,${1 - this.time})`, t.arc(this.foe.at[0], this.foe.at[1], this.radius * (1 + this.time), 0, 2 * Math.PI), t.stroke(), t.restore()
        }
    }
    let S = .5,
        y = {
            4: 3,
            8: 4.5
        };
    class M {
        constructor(t, e) {
            this.wing = t, this.radius = 20, this.charge = 0, this.angle = 0, this.kind = 1, this.special = 0, this.shields = 0, Object.assign(this, e), this.colorString = `${M.colors[this.kind].join(",")}`, this.game = t.game, this.order = t.foes.length, this.game.foes.push(this), t.foes.push(this)
        }
        get chargeTime() {
            return this.game.beatLength * (y[this.kind] || .5)
        }
        draw() {
            let t = this.game.ctx;
            if (t.save(), t.strokeStyle = `rgba(${this.colorString})`, t.translate(this.at[0], this.at[1]), t.scale(this.radius, this.radius), t.rotate(this.angle), !this.dying) {
                let e = Math.max(this.charge / 2, 0);
                this.kind == M.BOMB && this.charge >= .9 && (e = 10 - 10 * this.charge), t.fillStyle = `rgba(${this.colorString},${e})`, t.lineWidth = .1, M.MIRAGE != this.kind && (t.beginPath(), t.arc(0, 0, 1, 0, 2 * Math.PI), M.STEALTH != this.kind && t.stroke(), t.fill());
                for (let e = 0; e < this.shields; e++) t.beginPath(), t.arc(0, 0, 1 + .3 * (e + 1), 0, 2 * Math.PI), t.stroke();
                t.save(), t.beginPath(), this.drawSignature(t), t.stroke(), t.restore()
            }
            if (t.restore(), t.save(), this.kind == M.COMM && this.charge > .9) {
                t.setLineDash([5, 15]);
                for (let e of this.game.foes) e.kind != M.COMM && (t.strokeStyle = `rgba(${this.colorString})`, t.lineWidth = 10 * (this.charge - .9), t.beginPath(), t.moveTo(...this.at), t.lineTo(...e.at), t.stroke())
            }
            t.restore()
        }
        drawSignature(t) {
            switch (this.kind) {
                case M.SHIELD:
                    t.beginPath(), t.arc(0, 0, .5, 0, 2 * Math.PI), t.stroke();
                case M.PAWN:
                    return t.moveTo(0, 1), void t.lineTo(0, .5);
                case M.RIGGED:
                    for (let e = 0; e < 3; e++) t.moveTo(0, 1), t.lineTo(0, .5), t.rotate(2 * Math.PI / 3);
                    return;
                case M.WALL:
                    return t.lineWidth = .2, void t.arc(0, 0, .85, .25 * Math.PI, .75 * Math.PI);
                case M.SPAWN:
                    if (this.special) return;
                    t.lineWidth = .05;
                    for (let e = 0; e < 3; e++) t.strokeStyle = "black", t.shadowColor = "black", t.beginPath(), t.arc(0, .5, .3, 0, 2 * Math.PI), t.stroke(), t.rotate(2 * Math.PI / 3);
                    return;
                case M.COMM:
                    t.lineWidth = .05;
                    for (let e = 0; e < 3; e++) t.beginPath(), t.arc(0, 0, .35 + .2 * e, Math.PI, 2 * Math.PI), t.stroke();
                    return;
                case M.FAN:
                    for (let e = -2; e <= 2; e++) {
                        let i = .3 * e;
                        t.moveTo(-Math.sin(i), Math.cos(i)), t.lineTo(.7 * -Math.sin(i), .7 * Math.cos(i))
                    }
                    return;
                case M.MIRAGE:
                    return this.fake && Math.random() < .005 && (t.strokeStyle = `rgba(${this.colorString},0.5)`), t.moveTo(0, 1), t.lineTo(0, .5), t.stroke(), t.beginPath(), t.arc(0, 0, 1, 0, 2 * Math.PI), void t.fill();
                case M.BOMB:
                    for (let e = 0; e <= 16; e++) t.moveTo(0, 1 + .3 * this.charge), t.lineTo(0, .7 + .3 * this.charge), t.rotate(Math.PI / 8);
                    return;
                case M.CHASE:
                    return t.moveTo(-.9, -.4), t.lineTo(0, .45), void t.lineTo(.9, -.4);
                case M.SNIPE:
                    return t.moveTo(0, -.8), t.lineTo(0, 1), t.moveTo(.2, -.8), t.lineTo(.2, 1), t.moveTo(-.2, -.8), void t.lineTo(-.2, 1)
            }
        }
        actuallyShoot() {
            if (!this.dying) {
                switch (this.kind) {
                    case M.SPAWN:
                        this.special ? new A(this.game, this.at, this.angle, this.colorString) : (this.vel[0] = this.vel[0] * (this.game.rni() % 2 ? 1 : -1), new M(this.wing, {
                            kind: 3,
                            at: this.at,
                            vel: [-this.vel[0], this.vel[1]],
                            special: !0
                        }));
                        break;
                    case M.COMM:
                        for (let t of this.game.foes) 4 != t.kind && t.shoot();
                        break;
                    case M.FAN:
                        for (let t = -2; t <= 2; t++) {
                            let e = .3 * t;
                            new A(this.game, this.at, e, this.colorString)
                        }
                        break;
                    case M.MIRAGE:
                        let t = new A(this.game, this.at, this.angle, this.colorString);
                        this.fake && (t.fake = !0);
                        break;
                    case M.BOMB:
                        for (let t = 0; t < 16; t++) new A(this.game, this.at, Math.PI / 8 * t, this.colorString, 500), this.explode();
                        break;
                    case M.SNIPE:
                        for (let t = -1; t <= 1; t++) new A(this.game, s(this.at, g(this.angle), 5 * t), this.angle, this.colorString, 500);
                        break;
                    case M.CHASE:
                        this.vel = r(g(this.angle + Math.PI / 2), 200);
                        break;
                    case M.SHIELD:
                        this.shields < 1 ? this.shields++ : new A(this.game, this.at, this.angle, this.colorString);
                        break;
                    default:
                        new A(this.game, this.at, this.angle, this.colorString)
                }
                this.charge = 0
            }
        }
        update(t) {
            if (this.game.ship && a(this.at, this.game.ship) < 120 && this.explode(), this.kind == M.CHASE) {
                let t = n(this.at, this.game.snake.head);
                this.angle = Math.atan2(t[1], t[0]) - Math.PI / 2
            }
            this.dying && (this.dying += t / S), this.charge > 0 && (this.charge += t / this.chargeTime, this.charge >= 1 && this.actuallyShoot());
            let e = s(this.at, this.vel, t);
            this.at = e, (this.at[1] < -20 && this.vel[1] < 0 || this.at[1] >= this.game.height) && this.remove()
        }
        get dead() {
            return this.dying >= 1
        }
        shoot() {
            this.charge > 0 || this.kind == M.WALL || this.at[0] < 0 || ([M.PAWN, M.MIRAGE, M.SNIPE, M.STEALTH, M.SNAKE, M.RIGGED].includes(this.kind) && this.game.tweens.add(this, "angle", .3 * (this.game.rnf() - .5), this.chargeTime - .1), this.charge = .01)
        }
        remove() {
            if (!this.dying && (this.dying = .01, this.kind == M.MIRAGE && !this.fake))
                for (let t of this.wing.foes) t.fake && t.remove()
        }
        explode() {
            if (!this.dying) {
                this.remove(), this.game.score += Math.floor(this.game.shield / this.game.maxShield * 100);
                for (let t of this.game.foes) this.game.lastUnlock >= X.U_CHAINR && this.game.rni() % 4 == 0 && t != this && a(this.at, t.at) < 50 && t.damage();
                new k(this.game, this.at, {
                    color: M.colors[this.kind]
                })
            }
        }
        hitTest(t) {
            return a(t, this.at) <= this.outerRadius ? t : null
        }
        get fake() {
            return this.kind == M.MIRAGE && !this.special
        }
        damage() {
            if (this.kind == M.RIGGED) {
                let t = Math.random() * Math.PI * 2;
                this.game.delayed(.01, () => {
                    new A(this.game, this.at, t, this.colorString)
                })
            }
            this.shields > 0 ? (new b(this.game, this, this.outerRadius), this.shields--) : this.explode()
        }
        get outerRadius() {
            return this.radius * (1 + .3 * this.shields)
        }
    }
    M.PAWN = 1, M.WALL = 2, M.SPAWN = 3, M.COMM = 4, M.FAN = 5, M.MIRAGE = 6, M.SHIELD = 7, M.BOMB = 8, M.CHASE = 9, M.SNIPE = 10, M.STEALTH = 11, M.SNAKE = 12, M.RIGGED = 13, M.colors = "fff fff aaa 0f0 0ff ff0 ffe 08f f00 f08 f0f 008 fff faa".split(" ").map(t => t.split("").map(t => 17 * parseInt(t, 16)));
    const T = 35,
        I = 6;
    class A {
        constructor(t, e, i, h, a = 180) {
            this.game = t, this.bounces = 0, this.color = "255,255,255", h && (this.color = h), t.shots.push(this), this.hp = t.lastUnlock >= X.U_PIERCE ? 2 : 1, a = Math.min(700, a * (30 + t.complication) / 40);
            let n = [-Math.sin(i), Math.cos(i)];
            this.tail = new f({
                dots: [s(e, n, 10)],
                vel: r(n, a),
                maxLength: T,
                maxDots: I
            })
        }
        update(t) {
            let e = this.tail,
                h = e.head;
            if (h[1] > this.game.height && !this.game.flight) {
                if (this.fake) return !1;
                new k(this.game, h, {
                    color: [255, 0, 0]
                }), this.game.shieldHit()
            }
            if (h[0] < 0 || h[1] < 0 || h[0] > this.game.width || h[1] > this.game.height) return !1;
            if (this.game.ship && a(h, this.game.ship) < 100) return !1;
            let o, l = s(h, e.vel, t);
            if (this.bounces > 0 && !this.fake) {
                let t = this.game.foeHit(l);
                if (t) {
                    if (t.kind == M.WALL) {
                        let e;
                        for (e of c(h, l))
                            if (t.hitTest(e)) break;
                        e = e || l;
                        let i = n(t.at, e),
                            s = Math.atan2(i[1], i[0]);
                        s > .25 * Math.PI && s < .75 * Math.PI || t.damage()
                    } else t.damage();
                    if (this.hp -= 1, this.hp <= 0) return !1
                }
            }
            let d, f = this.game.snake.tail;
            for (d of c(h, l, 3))
                if (o = f.hitTest(d)) break;
            return o ? (this.tail.head, p([3, , .0315, , .1484, .496, , -.5938, , , , , , , , , , , 1, , , .2325, , .5]), e.vel = r((u = e.vel, m = o, g(2 * Math.atan2(m[1], m[0]) + Math.atan2(u[1], -u[0]) + Math.PI)), i(e.vel)), e.enlarge(s(d, e.vel, 3 * t)), this.bounces++, !0) : (e.enlarge(l), !0);
            var u, m
        }
        draw() {
            let t = this.game.ctx;
            t.save();
            let i = e(this.tail.head);
            if (!this.fake) {
                t.fillStyle = `rgba(${this.color}, 0.3)`;
                for (let e = 0; e < (this.bounces ? 2 : 1); e++) t.beginPath(), t.arc(i[0], i[1], 5, 0, 2 * Math.PI), t.fill()
            }
            t.lineWidth = 4, t.strokeStyle = `rgb(${this.color})`, this.tail.draw(t, (e, i) => {
                let s = Math.min(i / this.tail.dots.length);
                t.strokeStyle = `rgb(${this.color}, ${s})`
            }), t.restore()
        }
    }
    class E {
        constructor(t) {
            this.game = t, this.hurt = 0, this.maxLength = 100, t.lastUnlock >= X.U_LENGTH && (this.maxLength += 50), this.tail = new f({
                maxLength: this.maxLength,
                maxDots: 30
            })
        }
        get length() {
            return this.tail.maxLength
        }
        update(t, e) {
            let i;
            t && this.tail.enlarge(t);
            for (let t of this.tail.dots)
                if (i = this.game.foeHit(t)) break;
            i && (i.damage(), this.tail.loseHead(), this.tail.maxLength = Math.max(10, this.tail.maxLength - 10), this.hurt = 1, this.game.delayed(.2, () => {
                this.hurt = 0
            })), this.tail.maxLength <= this.maxLength && (this.tail.maxLength += e * this.game.snakeRecoverRate * (this.game.lastUnlock >= X.U_SREGEN ? 2 : 1))
        }
        draw() {
            if (this.tail.dots.length < 2) return;
            let t = this.game.ctx;
            t.save(), this.hurt && Math.floor(20 * this.game.time) % 2 ? (t.strokeStyle = "red", t.shadowColor = "red") : (t.strokeStyle = "white", t.shadowColor = "white"), t.shadowBlur = 6, t.lineWidth = 10, this.tail.drawSmooth(this.game.ctx);
            let e = this.head;
            t.lineWidth = 0, t.fillStyle = `rgba(255,255,255, ${.2 * (1.2 + Math.sin(2 * this.game.time))})`, t.beginPath(), t.arc(e[0], e[1], 10, 0, 2 * Math.PI), t.fill(), t.restore()
        }
        get head() {
            return this.tail.head
        }
    }
    class x {
        constructor() {
            this.events = []
        }
        add(t, e) {
            for (let i = this.events.length - 1; i > 0; i--)
                if (this.events[i][1] <= t) return void this.events.splice(i + 1, 0, [e, t]);
            this.events.splice(0, 0, [e, t])
        }
        update(t) {
            for (; this.events.length > 0 && this.events[0][1] <= t;) {
                let e = this.events.shift(),
                    i = e[0](t);
                (i || 0 == i) && this.add(i + t, e[0])
            }
        }
    }
    class L {
        constructor(t, e, i, s, h, a) {
            this.obj = t, this.key = e, this.to = i, this.dur = s, this.start = h, this.fun = a, this.initial = t[e]
        }
        update(t) {
            let e = (t - this.start) / this.dur;
            return e >= 1 ? (this.obj[this.key] = this.to, this.onEnd && this.onEnd(), !1) : (this.fun && (e = this.fun(e)), this.obj[this.key] = this.initial + (this.to - this.initial) * e, !0)
        }
    }
    class C {
        constructor(t) {
            this.time = t, this.tweens = []
        }
        update(t) {
            this.time = t, this.tweens = this.tweens.filter(e => e.update(t))
        }
        add(t, e, i, s) {
            let h = new L(t, e, i, s, this.time);
            return this.tweens.push(h), h
        }
    }

    function P(t, e) {
        return t[e() % t.length]
    }

    function R(t, e) {
        let i = t.conf,
            s = e % i.cols,
            h = Math.floor(e / i.cols),
            a = Math.min(40, (t.game.width - 200) / i.cols),
            n = t.ind % 2 ? t.game.width - 100 - i.cols * a : 100,
            o = i.kind,
            r = h == i.rows - 1;
        i.complication == _.WALL && r && (o = M.WALL);
        let l = {
            at: [s * a + n, 20 - 40 * i.rows + 40 * h],
            vel: [t.ind % 2 ? -10 : 10, 30],
            shields: 0,
            kind: o
        };
        return i.complication == _.SHIELD && (l.shields = 1), l
    }

    function N(t, e) {
        let i = t.conf;
        return {
            at: [t.game.width / 2 - 20 * i.cols, 40 * Math.floor(e / i.rows) - 80],
            vel: [40 * t.game.rnf() - 20, 30],
            kind: i.kind
        }
    }

    function U(t, e) {
        let i = e.wing.conf,
            s = t % (i.rows + 1),
            h = s == i.rows,
            a = i.rows - s;
        (Math.floor(e.order / i.cols) == a || h) && e.shoot()
    }

    function G(t, e) {
        e.game.rni() % 4 && e.game.delayed(e.game.beatLength * e.game.rnf(), () => e.shoot())
    }

    function H(t, e) {
        t % 4 && e.game.delayed(2 * e.game.beatLength * e.order / e.wing.size, () => e.shoot())
    }

    function W(t, e) {}

    function $(t, e) {
        t % 2 == 0 && e.shoot()
    }

    function O(t) {
        (t.at[0] < 100 && t.vel[0] < 0 || t.at[0] >= t.wing.game.width - 100 && t.vel[0] > 0) && (t.vel[0] = -t.vel[0]), !t.game.flight && t.at[1] >= t.wing.game.height - 300 && t.vel[1] > 0 && (t.vel[1] = -t.vel[1])
    }

    function B(t) {
        t.vel = [0, -100]
    }

    function D(t) {
        (t.at[0] < 100 && t.vel[0] < 0 || t.at[0] >= t.wing.game.width - 100 && t.vel[0] > 0) && (t.vel = [0, 0]), (t.at[1] >= t.wing.game.height - 100 && t.vel[1] > 0 || t.at[1] <= 100 && t.vel[1] < 0) && (t.vel = [0, 0])
    }
    class _ {
        constructor(t, e, i) {
            if (this.game = t, this.ind = e, this.skirmisher = i, this.foes = [], this.beat = 0, i) this.conf = {
                cols: 1,
                rows: 1,
                kind: t.time < 20 && _.skirmishUnlocks[t.stage] ? _.skirmishUnlocks[t.stage] : P(_.skirmishUnlocks.slice(1, t.stage + 1), t.rni),
                init: N,
                foeBeat: $,
                foeThink: O
            }, this.conf.kind == M.CHASE && (this.conf.foeThink = D);
            else if (this.conf = {
                    cols: 4 + Math.floor(t.complication / 4),
                    rows: 3,
                    kind: M.PAWN,
                    init: R,
                    foeBeat: U,
                    foeThink: O
                }, t.time < 20 && _.phalanxUnlocks[t.stage] || t.complicatedPhalanx()) switch (this.conf.complication = t.time < 20 ? _.phalanxUnlocks[t.stage] : P(_.phalanxUnlocks.slice(1, t.stage + 1), t.rni), this.conf.complication) {
                case _.MIRAGE:
                    this.conf.kind = M.MIRAGE;
                    break;
                case _.RIGGED:
                    this.conf.kind = M.RIGGED;
                    break;
                case _.H2X:
                case _.W2X:
                    this.conf.rows *= 2;
                    break;
                case _.RANDOM:
                    this.conf.foeBeat = G;
                    break;
                case _.CONTINUOUS:
                    this.conf.foeBeat = H;
                    break;
                case _.PHALANX:
                    this.conf.cols *= this.conf.rows, this.conf.rows = 1
            }
            this.init(this.size, this.conf.init), this.conf.kind == M.MIRAGE && (P(this.foes, t.rni).special = 1)
        }
        get size() {
            return this.conf.cols * this.conf.rows
        }
        init(t, e) {
            this.game.wings.push(this);
            for (let i = 0; i < t; i++) new M(this, e(this, i))
        }
        onBeat() {
            this.foes.forEach(t => this.conf.foeBeat(this.beat, t)), this.beat++
        }
        update(t) {
            this.foes.forEach(t => this.conf.foeThink(t)), this.foes.forEach(e => e.update(t)), this.foes = this.foes.filter(t => !t.dead)
        }
        retreat() {
            this.conf.foeThink = B, this.conf.foeBeat = W
        }
    }
    _.W2X = 1, _.H2X = 2, _.PHALANX = 3, _.MIRAGE = 4, _.WALL = 5, _.SHIELD = 6, _.CONTINUOUS = 7, _.RIGGED = 8, _.RANDOM = 9, _.phalanxUnlocks = [0, 0, _.H2X, _.WALL, _.MIRAGE, _.SHIELD, _.W2X, _.RANDOM, _.RIGGED, _.CONTINUOUS], _.skirmishUnlocks = [0, M.SNIPE, M.FAN, M.WALL, M.STEALTH, M.SHIELD, M.SPAWN, M.CHASE, M.BOMB, M.COMM];
    let q, F = "Ok, just say me what DOES work.\nPlanetary shields are still functional, sir.| But that's pretty much it. \nCan that give us enough time to recover?\nShields will not hold against concentrated attack for long.| If we'd have guns working...\nWell, THEIR guns ARE working.\nYou say it like it's a good thing.\nI think I have an idea, Colonel...\n*Control Sir Snake with mouse movement to deflect bullets BACK at enemies.| Do not let bullets hit the Planetary Shield at the bottom of the screen.\n\nI can't believe it worked, sir.| Why do they keep shooting, even if they see they kill themselves?\nThose are drones with a pretty simple programming, Colonel.| And whoever commands them is probably not much smarter,| attacking Imperial outpost like this.\nThat gives us a chance.\n*Right click toggles Active Pause mode.| In that mode, time stops when you don't move.|It can be used to read these message in peace too.\n\nSo, will we have reinforcements anytime soon?\nI have sent distress signal immediately, but no response yet.| I suspect we are not only ones that have problems.\nToo bad. I manage so far, but I can't be everywhere at once.\n*To limit Sir Snake objective speed, time speeds up if you move mouse too fast.\n\nBy the way, sir, I can use the scrap from those drones to repair some of our facilities.\nSo, the more of them I break, the faster we'll be back online?\nBasically. And try not to put too much strain on shields.| I need energy for repairs too.\n*Score is given for each destroyed enemy.| You get more when shield level is high. Score unlocks upgrades.\n\nI'm starting to think it's not a random raid.| They are after THAT.\nBut only three snakes know THAT is here, sir.\nFour. And someone also could make a lucky guess.\n*You can destroy enemies by ramming them at the cost of temporarily losing a part of your tail.\n\nNext wave incoming, sir. Are you ready?\nI was born ready.\nOh, right.| By the way, it seems that Circarians use our shields emission to navigate in the smoke.\nCan we do something about that?\nNot at the time frame we have.| On the plus side, emission drops with shield's level,| making it harder for them to find us.\n*Enemy attacks intensity drops when Shield is low.\n\nThere is no end of them, sir.| It's miracle we are still holding.\nWhat else can we do?\nWell...| With some time and spare parts I can maybe hack up an escape ship.\nLooks like the best chance so far.| For us and... THAT.| Make sure it's shielded well enough to break through blocade.\n*Collect enough resources (i.e. score) for the escape ship.| Only max score per stage counts.\n\nI have caught some broadcasts, sir.| Circarians attack everywhere. And Empress is nowhere to be seen.\nThat confirms my worst suspicions. Try to find out more.\n*ESC takes you back to menu.\n\nSir...| Good news is, I have got a message that help is coming.\nAnd bad news?\nIt's Prince Snake's fleet.\nAwfully convenient, isn't it.| Speed up on that ship.\n\nWe did it, Colonel.\n[Happy Snake Noises]\n*Escape Ship is on the way from the doomed planet.\n*Bringing our heroes and the mysterious McGuffin to the Episode 3.\n*I have no bytes left for music, but imagine anything from Space Rangers 2 OST playing now.\n*If it's not obvious enough, you have won the game.\n*This level is just an interactive ending cinematic.\n*But you still get points for it!\n*If you wonder, no, there is no Episode 1.\n*Yet.\n*Thanks for playing! And please, leave feedback.\n";
    class j {
        constructor(t, e, i, s, h, a = [0, 0]) {
            this.game = t, this.text = e, this.color = i, this.lifeTime = s, this.at = h, this.vel = a, this.time = 0
        }
        update(t) {
            return this.time += t, this.at = s(this.at, this.vel, t), this.time < this.lifeTime
        }
        draw() {
            let t = this.game.ctx;
            t.save(), t.fillStyle = this.color, t.shadowColor = "black", t.shadowBlur = 3, t.font = '12pt "Courier"', t.textAlign = "center";
            let e = 0,
                i = 0;
            for (let s of this.text.split("|")) t.fillText(s.trim().substr(0, Math.floor(70 * this.time) - i), this.at[0], this.at[1] + e), i += s.length, e += 20;
            t.restore()
        }
    }
    class X {
        constructor(t, e, i, s, h) {
            this.canvas = t, this.background = e, this.stage = i, this.updateUI = s, this.lastUnlock = h, this.wings = [], this.fxScale = .5, this.realtime = !0, this.time = -.001, this.beatTime = 0, this.schedule = new x, this.tweens = new C(0), this.beatLength = 3, this.beat = 0, this.shieldRecharge = [.2, 1.5], this.snakeRecoverRate = .5, this.maxShield = 100, this.shieldAnim = 1, this.score = 0, this.over = !1, this.snakeMinLength = 20, this.heat = 0, this.complication = 0, this.artIn = 1e4, this.currentLine = -1, this.flight = 0, h >= X.U_SHIELD && (this.maxShield += 50), h >= X.U_ARTILL && (this.artIn = 40), h >= X.U_MORART && (this.artIn = 20), 10 == this.stage && (this.flight = .01), this.talk = function(t) {
                let e = F.split("\n\n")[t].split("\n"),
                    i = e[0].search("[s|S]ir") >= 0 ? 2 : 1,
                    s = [];
                for (let t of e) "*" == t.charAt(0) ? s.push([0, t.substr(1)]) : (s.push([i, t]), i = 3 - i);
                return s
            }(this.stage - 1), this.init()
        }
        sendPhalanx(t) {
            new _(this, t, !1)
        }
        sendSkirmisher(t) {
            let e = Math.ceil(this.rnf() * this.complication / 10);
            for (let i = 0; i < e; i++) new _(this, t, !0)
        }
        rnf() {
            return this.rni() % 1e9 / 1e9
        }
        seed(t) {
            var e;
            this.rni = (e = t, (e %= 2147483647) <= 0 && (e += 2147483646), () => e = 16807 * e % 2147483647)
        }
        nextLine() {
            this.currentLine++;
            let t = this.talk[this.currentLine];
            if (t) {
                let e;
                e = 1 == t[0] ? [Math.min(this.width - 300, Math.max(300, this.snake.head[0])), Math.min(this.height - 200, this.snake.head[1] + 100)] : [this.width / 2, this.height - 70], this.text = new j(this, t[1], ["#88ff88", "#cccccc", "#8888ff"][t[0]], (t[0] ? 2 : 1 == this.stage ? 1e3 : 10) + t[1].length / 12, e, [
                    [0, 0],
                    [0, 10],
                    [0, -10]
                ][t[0]])
            } else this.text = null
        }
        init() {
            this.seed(15), this.shield = this.maxShield, this.width = this.canvas.clientWidth, this.height = this.canvas.clientHeight, this.canvas.height = this.height, this.canvas.width = this.width, this.background.height = this.canvas.clientHeight * this.fxScale, this.background.width = this.canvas.clientWidth * this.fxScale, this.ctx = this.canvas.getContext("2d"), this.ctx.globalCompositeOperation = "ligher", this.ctb = this.background.getContext("2d"), this.ctx.strokeStyle = "white", this.snake = new E(this), this.shots = [], this.foes = [], this.fx = [], this.updateUI(this), this.delayed(2, () => this.nextLine())
        }
        update(t) {
            if (this.over) return;
            if (!this.mouseAt) return;
            this.complication = 1.5 * (this.time / 30 + this.stage) * (.3 + .7 * this.shield / this.maxShield), this.beatLength = 40 / (10 + this.complication);
            let e = a(this.mouseAt, this.snake.head),
                i = e >= 5;
            this.lastLoopTimeStamp || (this.lastLoopTimeStamp = t - .001);
            let h = Math.min(.02, (t - this.lastLoopTimeStamp) / 1e3);
            if (this.shieldAnim = Math.min(1, this.shieldAnim + h), this.shield = Math.min(this.maxShield, this.shield + h * (this.lastUnlock >= X.U_CHARGE ? .666 : 1) * (this.shieldRecharge[0] + (this.shieldRecharge[1] - this.shieldRecharge[0]) * (1 - this.shield / this.maxShield))), this.lastLoopTimeStamp = t, !this.realtime && !i) return;
            e > 20 && (h *= e / 20);
            let n = !1;
            this.time += h, this.beatTime += h, this.beatTime > this.beatLength && (n = !0, this.beatTime -= this.beatLength), this.seed(this.beat);
            let o = this.lastUnlock >= X.U_ENEMIS ? [5, 2] : [7, 3];
            this.time <= this.timeLimit ? (n && this.beat % o[0] == 0 && this.sendPhalanx(this.beat / 9), n && this.beat % o[1] == 2 && this.sendSkirmisher(Math.floor(this.beat / 5))) : this.wings.forEach(t => t.retreat()), this.snake.update(i ? this.mouseAt : null, h), this.tweens.update(this.time), this.schedule.update(this.time);
            for (let t of this.wings) t.update(h), n && t.onBeat();
            this.shots = this.shots.filter(t => t.update(h)), this.wings = this.wings.filter(t => t.foes.length > 0), this.foes = this.foes.filter(t => !t.dead), this.fx = this.fx.filter(t => t.update(h)), (this.shield < 0 || this.snake.length < this.snakeMinLength || this.time >= this.timeLimit && 0 == this.wings.length && 0 == this.shots.length) && !this.over && (this.over = !0, this.updateUI(this));
            let r = this.artIn - this.time % this.artIn;
            if (r <= 1 && r + h > 1)
                for (let t = 0; t < 20; t++) {
                    new A(this, [(this.width - 200) / 20 * t + 100, this.height - 1], Math.PI, null, 300).bounces = 1
                }
            if (this.text && (this.text.update(h) || this.nextLine()), this.flight > 0) {
                this.flight = Math.min(100, this.flight + 5 * h), this.ship = [this.width / 2 + Math.sin(1.2 * this.time), this.height * (1 - .5 * this.flight / 100) + 2 * Math.sin(2.3 * this.time)];
                let t = [0, this.flight * h];
                this.snake.tail.translate(t), this.foes.forEach(e => e.at = s(e.at, t)), this.shots.forEach(e => e.tail.translate(t))
            }
            this.draw(), n && this.beat++
        }
        toggleTime() {
            this.realtime = !this.realtime, console.log(this)
        }
        draw() {
            let t = this.ctx;
            if (this.canvas.style.cursor = this.over ? "default" : "none", t.clearRect(0, 0, this.width, this.height), this.flight) {
                this.ctb.fillStyle = `rgba(0,0,${48 * this.flight / 100})`, this.ctb.fillRect(0, 0, this.width, this.height), this.seed(20), this.ctb.fillStyle = `rgba(${this.rni() % 255},${this.rni() % 255},${this.rni() % 255},${this.flight / 100})`;
                for (let t = 0; t < 300; t++) {
                    let t = this.rni() % this.width,
                        e = (this.rnf() * this.time * 10 + this.rni()) % this.height;
                    this.ctb.fillRect(t, e, 1, 1)
                }
            } else this.ctb.clearRect(0, 0, this.width, this.height);
            t.save(), t.translate(0, 5 * this.flight);
            let e = t.createLinearGradient(0, this.height, 0, this.height - 50),
                i = `255, ${this.shield / this.maxShield * 255}, ${255 * (2 * this.shield / this.maxShield - 1)}`;
            e.addColorStop(0, `rgba(${i}, ${.5 * this.shieldAnim})`), e.addColorStop(1, `rgba(${i}, 0)`), t.fillStyle = e, t.fillRect(0, this.height - 50, this.width, 51), t.restore(), t.save(), t.fillStyle = "white", t.font = '12pt "Courier"', t.fillText("SHIELD " + this.shield.toFixed(0), 20, this.height - 20), t.fillText("TAIL " + (this.snake.length - this.snakeMinLength).toFixed(0), 150, this.height - 20), t.textAlign = "right", t.fillText("SCORE " + this.score, this.width - 20, this.height - 20), t.fillText("TIME " + (this.timeLimit - this.time).toFixed(0), this.width - 150, this.height - 20), t.fillText("STAGE " + this.stage, this.width - 240, this.height - 20), t.font = '24pt "Courier"', t.textAlign = "center";
            let s = this.artIn - this.time % this.artIn;
            if (s > 1 && s < 3) {
                t.fillStyle = `rgba(255, 0, 0, ${.5 * Math.sin(10 * s) + .5})`;
                for (let e = 0; e < 20; e++) t.fillText("!", (this.width - 200) / 20 * e + 100, this.height - 100)
            }
            if (this.flight) {
                t.save(), t.translate(...this.ship), t.scale(50, 50);
                var h = t.createRadialGradient(0, 0, 0, 0, 0, 2);
                h.addColorStop(.799, "rgba(255,255,255,0)"), h.addColorStop(.8, "white"), h.addColorStop(1, "rgba(255,255,255,0)"), t.fillStyle = h, t.fillRect(-2, -2, 4, 4), t.lineWidth = .05, t.beginPath(), t.moveTo(0, .9), t.quadraticCurveTo(1, .5, 0, -1.2), t.quadraticCurveTo(-1, .5, 0, .9), t.moveTo(-.7, 1), t.quadraticCurveTo(0, 0, .7, 1), t.quadraticCurveTo(0, .5, -.7, 1), t.stroke(), t.beginPath(), t.moveTo(0, 1), t.fillStyle = `rgba(255,255,255,${.6 + .1 * Math.sin(30 * this.time)})`;
                let e = this.flight / 100 * 3 + .05 * Math.sin(21 * this.time);
                t.quadraticCurveTo(.5, 1.2, 0, 1 + e), t.quadraticCurveTo(-.5, 1.2, 0, 1), t.fill(), t.scale(.3, .3), t.translate(0, -.1), t.beginPath(), t.moveTo(1, 0), t.quadraticCurveTo(1, 1, 0, 1), t.quadraticCurveTo(-1, 1, -1, 0), t.quadraticCurveTo(-.8, -1.5, 0, -1.5), t.quadraticCurveTo(.8, -1.5, 1, 0), t.stroke(), t.restore()
            }
            this.text && this.text.draw(), t.restore();
            for (let t of this.fx) t.draw();
            for (let t of this.foes) t.draw();
            for (let t of this.shots) t.draw();
            this.snake.draw()
        }
        foeHit(t) {
            let e = this.foes.filter(e => !e.dying && !e.fake && e.hitTest(t));
            if (e.length > 0) {
                return function(t, e) {
                    let i = Number.MAX_VALUE,
                        s = -1;
                    for (let h = 0; h < t.length; h++) {
                        let a = e(t[h]);
                        i > a && (i = a, s = h)
                    }
                    if (s >= 0) return {
                        ind: s,
                        item: t[s],
                        val: i
                    }
                }(e, e => a(t, e.at)).item
            }
        }
        delayed(t, e) {
            this.schedule.add(this.time + t, e)
        }
        shieldHit() {
            this.shield > 0 && (this.shield -= 1), this.shieldAnim = 0
        }
        complicatedPhalanx() {
            return this.complication >= this.rni() % 20
        }
        get timeLimit() {
            return (60 + 20 * this.stage) * (this.lastUnlock >= X.U_LNGSTG ? 1.5 : 1)
        }
    }
    X.stageNames = ["", "In Medias Res", "Rainy", "Wall", "Mirage", "Shield", "More", "Chaos", "Fireworks", "Curtain", "Taking Flight"], X.bonusNames = ["+50 shields", "+50% snake length", "+50% shield recharge", "piercing shots", "+100% snake regen", "artillery", "chain reaction", "+100% artillery", "! escape ship !", "longer stages", "more enemies"], X.U_SHIELD = 0, X.U_LENGTH = 1, X.U_CHARGE = 2, X.U_PIERCE = 3, X.U_SREGEN = 4, X.U_ARTILL = 5, X.U_CHAINR = 6, X.U_MORART = 7, X.U_ROCKET = 8, X.U_LNGSTG = 9, X.U_ENEMIS = 10;
    let K, Y, V, z = !0,
        J = JSON.parse(localStorage.snakeVsInvadersScore || "[0]");

    function Q() {
        return J.reduce((t, e) => t + e)
    }

    function Z() {
        let t = Q() < 6e3 ? -1 : Math.sqrt(Q() / 2e3 - 2) - 1;
        return console.log(t), t
    }

    function tt(t) {
        K.style.cursor = "default", (q = t) || K.getContext("2d").clearRect(0, 0, 1200, 1200);
        let e = function(t) {
            let e = "";
            if (!t) return e = `\n<h1>FLIGHT OF THE SNAKE</h1>\nEpisode 2: Snake vs Invaders<br/><br/><br/><br/>\n<div class="row">\n<div>${function () { let t = "<span>Stage</span><span>Score</span></br></br>"; for (let e = 1; e < X.stageNames.length; e++) { let i = !(1 != e && !J[e - 1]), s = 10 == e && Z() < X.U_ROCKET; t += `<button ${i && !s ? "" : "disabled"} onmousedown="window.playStage(${e})">${X.stageNames[e]}</button><span>${i && s ? "Ship not found" : J[e] || ""}</span><br/>` } return t += ` < br / > < span > Total Score: < /span><span>${Q()}</span > ` }()}</div>\n<div>${function () { let t = Q(), e = '<span class="wide">Unlocks</span><span>Score req.</span></br></br>'; for (let i = 0; i < X.bonusNames.length; i++) { let s = 2e3 * (2 + Math.pow(i + 1, 2)); e += `<div style="opacity:${s <= t ? 1 : .5}"><span class="wide">${X.bonusNames[i]}</span><span>${s}</span></div>` } return e }()}</div>\n</div>\n`;
            if (!t.over) return "";
            let i = null;
            t && (t.snake.length < t.snakeMinLength ? i = "Snake is dead" : t.shield < 0 && (i = "Planetary shields depleted"));
            1 == t.stage && i && (i += '<br/><br/>\n    <p style="color:gray">Sorry for not stating game\'s rules clear or timely enough.</br>Allow me to remind them to you:</p>\n    <p>Control Sir Snake with mouse movement to deflect bullets BACK at enemies.</br>\n    Do not let bullets hit the Planetary Shield at the bottom of the screen.</p>');
            if (i) e += "<h1>GAME OVER</h1><br/>" + i;
            else {
                e = `<h1>STAGE COMPLETE</h1><br/><br/><br/>Score:${t.score}</br>`;
                let i = J[t.stage] || 0;
                t.score < i ? e += `Which is not more than the previous best: ${i}` : (e += `Which is more than the previous best.<br/>Your overall score is increased by +${t.score - i}`, J[t.stage] = t.score, localStorage.setItem("snakeVsInvadersScore", JSON.stringify(J)))
            }
            e += "<br/><br/>", i && (e += '<button onmousedown="window.newGame()">Restart</button>');
            return e += '<button onmousedown="window.mainMenu()">Back to Menu</button>'
        }(q);
        V.innerHTML = e, V.parentElement.style.display = e.length > 0 ? "flex" : "none"
    }

    function et(t) {
        new X(K, Y, t, tt, Z())
    }
    return window.newGame = (() => {
        et(q ? q.stage : 1)
    }), window.playStage = (t => {
        et(t)
    }), window.mainMenu = (() => {
        tt(null)
    }), window.onload = function() {
        K = document.getElementById("main"), Y = document.getElementById("bg"), V = document.getElementById("ui"), K.addEventListener("mousemove", e => {
                t.mouseAt = [e.pageX - K.offsetLeft, e.pageY - K.offsetTop], q && (q.mouseAt = t.mouseAt)
            }, !1), K.addEventListener("contextmenu", function(t) {
                t.preventDefault()
            }, !1), K.addEventListener("mousedown", t => {
                2 == t.button && q && q.toggleTime()
            }), K.addEventListener("mouseleave", t => {
                z = !1
            }), K.addEventListener("mouseenter", t => {
                z = !0
            }), document.addEventListener("keydown", t => {
                "KeyS" == t.code && window.newGame(), "Escape" == t.code && tt(null), "Digit" == t.code.substr(0, 5) && et(Number(t.code.substr(5)))
            }),
            function t(e) {
                requestAnimationFrame(i => {
                    e(i), t(e)
                })
            }(t => {
                q && z && q.update(t)
            }), tt(q)
    }, t
}({});