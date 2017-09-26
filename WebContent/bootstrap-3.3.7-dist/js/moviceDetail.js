/**
 * Created by ac on 2017/7/4.
 */
webpackJsonp([8], {
    0: function (t, i, e) {
        "use strict";
        function s(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function o(t, i) {
            if (!(t instanceof i))throw new TypeError("Cannot call a class as a function")
        }

        function n(t) {
            var i = "";
            return t > 0 && t <= 2 ? i = "超烂啊" : t > 2 && t <= 4 ? i = "比较差" : t > 4 && t <= 6 ? i = "一般般" : t > 6 && t <= 8 ? i = "比较好" : t > 8 && t <= 9 ? i = "棒极了" : t > 9 && t <= 10 && (i = "完美"), i
        }


        function a(t, i, e) {
            return null == t ? t : (t = t.replace("/w.h/", "/"), t = t.split("@")[0], i && e && (t = t + "@" + i + "w_" + e + "h_1e_1c"), t)
        }

        function r() {
            T.data("score") ? (B.text("看过"), T.addClass("active")) : T.data("wish") ? (B.text("已想看"), T.addClass("active")) : (B.text("想看"), T.removeClass("active"))
        }

        function h() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? system.myComment : arguments[0], i = t.score, e = void 0 === i ? 0 : i, s = t.content, o = void 0 === s ? "" : s;
            e ? (C.addClass("active"), w.text(2 * e + "分，" + n(2 * e)), T.addClass("active").data("score", e).data("wish", !1), B.text("看过")) : (C.removeClass("active"), w.text("评分"), T.data("score", 0)), r(), o ? _.text("我的短评") : _.text("写短评")
        }

        function l() {
            var t = $(".comment-list-container");
            t.data("hot") || $.get("/ajax/proxy/mmdb/comments/movie/" + j + ".json", {token: system.user && system.user.token}).then(function (i) {
                i && !i.error && t.html(b.render({commentList: (i.cmts || []).slice(0, 10)}))
            })
        }

        function d(t) {
            I && $(this).on("click", function () {
                var i = S.length - 1;
                0 === i && !function e() {
                    0 === $(".lg-outer .lg-img-wrap").length ? setTimeout(e, 50) : $(".lg-outer .lg-img-wrap").addClass("thumb-one")
                }(), $(this).lightGallery($.extend({}, I, {index: t})).on("onAfterOpen.lg", g.disableScroll).on("onCloseAfter.lg", g.enableScroll)
            })
        }

        e(300), e(301);
        var p = e(31), u = e(302), c = e(29), m = s(c), g = e(33), f = e(302);
        e(39), e(41), e(192), e(42);
        var b = e(303), y = $(document), v = $(window), x = e(305), j = system.movieId || location.pathname.split("/").pop(), C = $(".action .score-btn"), w = C.find(".score-btn-msg"), T = $(".action .wish"), B = T.find(".wish-msg"), _ = $(".comment-entry"), k = function () {
            if (!system.user)return function () {
                Promise.reject(new Error("用户未登录"))
            };
            var t = {userId: system.user.id, token: system.user.token, nick: system.user.username};
            return function (i, e) {
                var s = null;
                return s = e ? $.ajax({
                        method: "PUT",
                        url: (0, f.utmParam)("/ajax/proxy/mmdb/comment/" + j + "/" + e + ".json"),
                        data: $.extend({business: 1, clientType: "web"}, t, i),
                        dataType: "json"
                    }) : $.post((0, f.utmParam)("/ajax/proxy/mmdb/comments/movie/" + j + ".json"), $.extend({
                        business: 1,
                        clientType: "web"
                    }, t, i)), s.then(function (t) {
                    return t.error || ($.extend(system.myComment, i), h()), t
                })
            }
        }();
        $(".movie-live").click((0, u.noRepeatRequest)(function (t) {
            var i = this, e = window.open("about:blank", "_blank");
            return $.get("/ajax/proxy/mmdb/movie/web/online/play/" + j + ".json").then(function (t) {
                i.isLoading = !1, t.error && e.close(), t.data && t.data.link ? e.location.href = t.data.link : e.close()
            }).fail(function () {
                e.close()
            })
        })), T.on("click", (0, p.checkLogin)((0, u.noRepeatRequest)(function (t) {
            var i = $(this);
            if (i.data("score"))return k({score: 0, content: ""}, system.myComment.id).then(function (t) {
                t.error || (l(), C.data("jBoxWidget").commentForm.scoreStarWidget.enable())
            });
            var e = i.data("wish") ? "delete" : "post";
            return $.ajax({url: "/ajax/movie/" + j + "/wish", method: e, dataType: "json"}).then(function (t) {
                t.hasLogin === !1 ? (0, p.login)() : t.error || (i.data("wish", "post" === e), r())
            })
        })));
        var O = $(".tab-container").tab().data("tab");
        $(".tab-content-container").on("click", ".more", function (t) {
            var i = $(this).attr("href").slice(1), e = $(".tab-" + i);
            return O.active(e), y.scrollTop(420), !1
        }), O.$elem.on("change", function () {
            v.trigger("loadImg")
        });
        var D = function () {
            function t(i) {
                o(this, t), this.$elem = i, this.commentData = system.myComment, this.scoreStarWidget = i.find(".score-star").scoreStar({disable: system.user.isProfessional && !!this.commentData.score}).data("scoreStar"), this.$contentContainer = i.find(".content-container"), this.$contentInput = i.find("[name=content]"), this.$scoreInput = i.find("[name=score]"), this.$scoreMsgContainer = i.find(".score-msg-container"), this.$scoreMsg = i.find(".score-message"), this.$scoreNum = i.find(".score .num"), this.$noScore = i.find(".no-score"), this.$wordCountInfo = i.find(".word-count-info"), this.$submitBtn = i.find("[type=submit]"), this.bindEvents(), this.reset()
            }

            return t.prototype.bindEvents = function () {
                var t = this;
                this.$elem.on("submit", function (i) {
                    if (i.preventDefault(), !t.$submitBtn.hasClass("disabled")) {
                        var e = {score: t.$scoreInput.val(), content: t.$contentInput.val()};
                        k(e, t.commentData.id).then(function (i) {
                            i.error || (t.$elem.trigger("submit-success", t.commentData), l(), system.user.isProfessional && t.scoreStarWidget.disable())
                        })
                    }
                }), this.$contentInput.on("keyup paste", function () {
                    t.updateWordCountInfo()
                }).on("focus", function () {
                    t.$contentContainer.addClass("focus")
                }).on("blur", function () {
                    t.$contentContainer.removeClass("focus")
                }), this.scoreStarWidget.$elem.on("change", function (i, e) {
                    t.setScore(e / 2)
                }).on("tmp-change", function (i, e) {
                    t.updateScoreMsg(e)
                })
            }, t.prototype.fetch = function () {
                var t = this;
                $.get("/ajax/movie/" + j + "/comment").then(function (i) {
                    !i.error && i.data.comment && (t.commentData = i.data.comment, t.reset())
                })
            }, t.prototype.setScore = function (t) {
                this.$scoreInput.val(t), this.updateScoreMsg(2 * t), this.updateSubmitBtn()
            }, t.prototype.setContent = function (t) {
                this.$contentInput.val(t), this.updateSubmitBtn(), this.updateWordCountInfo()
            }, t.prototype.updateWordCountInfo = function () {
                var t = this.$contentInput.val().length;
                return this.updateSubmitBtn(), t >= 1 && t < 6 ? void this.$wordCountInfo.removeClass("error").text("还需输入" + (6 - t) + "个字") : t >= 280 && t <= 300 ? void this.$wordCountInfo.removeClass("error").text("还可以输入" + (300 - t) + "个字") : t > 300 ? void this.$wordCountInfo.addClass("error").text("超出" + (t - 300) + "个字") : void this.$wordCountInfo.removeClass("error").text("")
            }, t.prototype.updateScoreMsg = function (t) {
                t = t || this.scoreStarWidget.score, t ? (this.$scoreMsg.text(n(t)), this.$scoreNum.text(t), this.$scoreMsgContainer.addClass("active")) : this.$scoreMsgContainer.removeClass("active")
            }, t.prototype.updateSubmitBtn = function () {
                var t = this.$contentInput.val().length, i = Number(this.$scoreInput.val());
                !i || t >= 1 && t < 6 || t > 300 || system.user.isProfessional && !t ? this.$submitBtn.addClass("disabled") : this.$submitBtn.removeClass("disabled")
            }, t.prototype.reset = function () {
                var t = this.commentData, i = t.content, e = void 0 === i ? "" : i, s = t.score, o = void 0 === s ? 0 : s;
                this.setContent(e), this.scoreStarWidget.set(2 * o, !0)
            }, t
        }();
        _.on("click", function () {
            C.trigger("click")
        }), C.on("click", (0, p.checkLogin)(function () {
            var t = $(this), i = t.data("jBoxWidget");
            i || (i = new x("Modal", {
                id: "comment-form-container",
                width: 550,
                height: 450,
                blockScroll: !1,
                content: $("#comment-form-container").html(),
                onOpen: function () {
                    (0, g.disableScroll)();
                    var t = $(".jBox-container .content-container textarea");
                    if (t.on("mousewheel", function (i) {
                            t.scrollTop(t.scrollTop() - i.originalEvent.wheelDelta)
                        }), t.placeholder({customClass: "ie8-placeholder"}), this.commentForm)return void this.commentForm.reset();
                    var i = this;
                    this.commentForm = new D(this.content.find("#comment-form")), this.commentForm.$elem.on("submit-success", function (t, e) {
                        i.close()
                    }), this.content.find(".close").on("click", function () {
                        i.close()
                    })
                },
                onClose: function () {
                    this.commentForm.reset(), (0, g.enableScroll)()
                }
            }), t.data("jBoxWidget", i)), i.open()
        })), $(".comment-list-container").on("click", ".approve-icon", (0, p.checkLogin)((0, u.noRepeatRequest)(function (t) {
            var i = $(this).closest(".approve"), e = i.data("id");
            return $.post((0, f.utmParam)("/ajax/proxy/mmdb/approve/comment/" + e + ".json"), {
                userId: system.user.id,
                token: system.user.token,
                type: i.hasClass("active") ? 1 : 0,
                business: 1,
                clientType: "web"
            }).then(function (t) {
                if (!t.error) {
                    i.toggleClass("active");
                    var e = i.find(".num"), s = Number(e.text());
                    i.hasClass("active") ? e.text(s + 1) : e.text(s - 1)
                }
            })
        })));
        var S = system.imgs, I = null, L = {};
        S && S.length && ((0, m["default"])(function (t) {
            L = S.map(function (i) {
                return {src: t(a(i)), thumb: t(a(i, 160, 160))}
            })
        }), I = {
            dynamic: !0,
            thumbnail: !0,
            thumbWidth: 80,
            thumbContHeight: 88,
            thumbMargin: 0,
            hideControlOnEnd: !0,
            download: !1,
            loop: !1,
            dynamicEl: L
        }), $(".album img").each(d), $(".tab-img ul img").each(d), e(306)
    }, 39: 199, 41: function (t, i) {/*! lightgallery - v1.2.21 - 2016-06-28
     * http://sachinchoolur.github.io/lightGallery/
     * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
        !function (t, i, e, s) {
            "use strict";
            function o(i, s) {
                if (this.el = i, this.$el = t(i), this.s = t.extend({}, n, s), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";
                return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in e.documentElement, this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = t(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(t(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
            }

            var n = {
                mode: "lg-slide",
                cssEasing: "ease",
                easing: "linear",
                speed: 600,
                height: "100%",
                width: "100%",
                addClass: "",
                startClass: "lg-start-zoom",
                backdropDuration: 150,
                hideBarsDelay: 6e3,
                useLeft: !1,
                closable: !0,
                loop: !0,
                escKey: !0,
                keyPress: !0,
                controls: !0,
                slideEndAnimatoin: !0,
                hideControlOnEnd: !1,
                mousewheel: !0,
                getCaptionFromTitleOrAlt: !0,
                appendSubHtmlTo: ".lg-sub-html",
                subHtmlSelectorRelative: !1,
                preload: 1,
                showAfterLoad: !0,
                selector: "",
                selectWithin: "",
                nextHtml: "",
                prevHtml: "",
                index: !1,
                iframeMaxWidth: "100%",
                download: !0,
                counter: !0,
                appendCounterTo: ".lg-toolbar",
                swipeThreshold: 50,
                enableSwipe: !0,
                enableDrag: !0,
                dynamic: !1,
                dynamicEl: [],
                galleryId: 1,
                container: "body"
            };
            o.prototype.init = function () {
                var e = this;
                e.s.preload > e.$items.length && (e.s.preload = e.$items.length);
                var s = i.location.hash;
                s.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(s.split("&slide=")[1], 10), t(e.s.container).addClass("lg-from-hash"), t(e.s.container).hasClass("lg-on") || setTimeout(function () {
                    e.build(e.index), t(e.s.container).addClass("lg-on")
                })), e.s.dynamic ? (e.$el.trigger("onBeforeOpen.lg"), e.index = e.s.index || 0, t(e.s.container).hasClass("lg-on") || setTimeout(function () {
                        e.build(e.index), t(e.s.container).addClass("lg-on")
                    })) : e.$items.on("click.lgcustom", function (i) {
                        try {
                            i.preventDefault(), i.preventDefault()
                        } catch (s) {
                            i.returnValue = !1
                        }
                        e.$el.trigger("onBeforeOpen.lg"), e.index = e.s.index || e.$items.index(this), t(e.s.container).hasClass("lg-on") || (e.build(e.index), t(e.s.container).addClass("lg-on"))
                    })
            }, o.prototype.build = function (i) {
                var e = this;
                e.structure(), t.each(t.fn.lightGallery.modules, function (i) {
                    e.modules[i] = new t.fn.lightGallery.modules[i](e.el)
                }), e.slide(i, !1, !1), e.s.keyPress && e.keyPress(), e.$items.length > 1 && (e.arrow(), setTimeout(function () {
                    e.enableDrag(), e.enableSwipe()
                }, 50), e.s.mousewheel && e.mousewheel()), e.counter(), e.closeGallery(), e.$el.trigger("onAfterOpen.lg"), e.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
                    e.$outer.removeClass("lg-hide-items"), clearTimeout(e.hideBartimeout), e.hideBartimeout = setTimeout(function () {
                        e.$outer.addClass("lg-hide-items")
                    }, e.s.hideBarsDelay)
                })
            }, o.prototype.structure = function () {
                var e, s = "", o = "", n = 0, a = "", r = this;
                for (t(this.s.container).append('<div class="lg-backdrop"></div>'), t(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), n = 0; n < this.$items.length; n++)s += '<div class="lg-item"></div>';
                if (this.s.controls && this.$items.length > 1 && (o = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (a = '<div class="lg-sub-html"></div>'), e = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + s + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + o + a + "</div></div>", t(this.s.container).append(e), this.$outer = t(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), r.setTop(), t(i).on("resize.lg orientationchange.lg", function () {
                        setTimeout(function () {
                            r.setTop()
                        }, 100)
                    }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                    var h = this.$outer.find(".lg-inner");
                    h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms")
                }
                t(".lg-backdrop").addClass("in"), setTimeout(function () {
                    r.$outer.addClass("lg-visible")
                }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = t(i).scrollTop()
            }, o.prototype.setTop = function () {
                if ("100%" !== this.s.height) {
                    var e = t(i).height(), s = (e - parseInt(this.s.height, 10)) / 2, o = this.$outer.find(".lg");
                    e >= parseInt(this.s.height, 10) ? o.css("top", s + "px") : o.css("top", "0px")
                }
            }, o.prototype.doCss = function () {
                var t = function () {
                    var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], i = e.documentElement, s = 0;
                    for (s = 0; s < t.length; s++)if (t[s] in i.style)return !0
                };
                return !!t()
            }, o.prototype.isVideo = function (t, i) {
                var e;
                if (e = this.s.dynamic ? this.s.dynamicEl[i].html : this.$items.eq(i).attr("data-html"), !t && e)return {html5: !0};
                var s = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i), o = t.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i), n = t.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i), a = t.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                return s ? {youtube: s} : o ? {vimeo: o} : n ? {dailymotion: n} : a ? {vk: a} : void 0
            }, o.prototype.counter = function () {
                this.s.counter && t(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
            }, o.prototype.addHtml = function (i) {
                var e, s, o = null;
                if (this.s.dynamic ? this.s.dynamicEl[i].subHtmlUrl ? e = this.s.dynamicEl[i].subHtmlUrl : o = this.s.dynamicEl[i].subHtml : (s = this.$items.eq(i), s.attr("data-sub-html-url") ? e = s.attr("data-sub-html-url") : (o = s.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !o && (o = s.attr("title") || s.find("img").first().attr("alt")))), !e)if ("undefined" != typeof o && null !== o) {
                    var n = o.substring(0, 1);
                    "." !== n && "#" !== n || (o = this.s.subHtmlSelectorRelative && !this.s.dynamic ? s.find(o).html() : t(o).html())
                } else o = "";
                ".lg-sub-html" === this.s.appendSubHtmlTo ? e ? this.$outer.find(this.s.appendSubHtmlTo).load(e) : this.$outer.find(this.s.appendSubHtmlTo).html(o) : e ? this.$slide.eq(i).load(e) : this.$slide.eq(i).append(o), "undefined" != typeof o && null !== o && ("" === o ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [i])
            }, o.prototype.preload = function (t) {
                var i = 1, e = 1;
                for (i = 1; i <= this.s.preload && !(i >= this.$items.length - t); i++)this.loadContent(t + i, !1, 0);
                for (e = 1; e <= this.s.preload && !(t - e < 0); e++)this.loadContent(t - e, !1, 0)
            }, o.prototype.loadContent = function (e, s, o) {
                var n, a, r, h, l, d, p = this, u = !1, c = function (e) {
                    for (var s = [], o = [], n = 0; n < e.length; n++) {
                        var r = e[n].split(" ");
                        "" === r[0] && r.splice(0, 1), o.push(r[0]), s.push(r[1])
                    }
                    for (var h = t(i).width(), l = 0; l < s.length; l++)if (parseInt(s[l], 10) > h) {
                        a = o[l];
                        break
                    }
                };
                if (p.s.dynamic) {
                    if (p.s.dynamicEl[e].poster && (u = !0, r = p.s.dynamicEl[e].poster), d = p.s.dynamicEl[e].html, a = p.s.dynamicEl[e].src, p.s.dynamicEl[e].responsive) {
                        var m = p.s.dynamicEl[e].responsive.split(",");
                        c(m)
                    }
                    h = p.s.dynamicEl[e].srcset, l = p.s.dynamicEl[e].sizes
                } else {
                    if (p.$items.eq(e).attr("data-poster") && (u = !0, r = p.$items.eq(e).attr("data-poster")), d = p.$items.eq(e).attr("data-html"), a = p.$items.eq(e).attr("href") || p.$items.eq(e).attr("data-src"), p.$items.eq(e).attr("data-responsive")) {
                        var g = p.$items.eq(e).attr("data-responsive").split(",");
                        c(g)
                    }
                    h = p.$items.eq(e).attr("data-srcset"), l = p.$items.eq(e).attr("data-sizes")
                }
                var f = !1;
                p.s.dynamic ? p.s.dynamicEl[e].iframe && (f = !0) : "true" === p.$items.eq(e).attr("data-iframe") && (f = !0);
                var b = p.isVideo(a, e);
                if (!p.$slide.eq(e).hasClass("lg-loaded")) {
                    if (f) p.$slide.eq(e).prepend('<div class="lg-video-cont" style="max-width:' + p.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + a + '"  allowfullscreen="true"></iframe></div></div>'); else if (u) {
                        var y = "";
                        y = b && b.youtube ? "lg-has-youtube" : b && b.vimeo ? "lg-has-vimeo" : "lg-has-html5", p.$slide.eq(e).prepend('<div class="lg-video-cont ' + y + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + r + '" /></div></div>')
                    } else b ? (p.$slide.eq(e).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), p.$el.trigger("hasVideo.lg", [e, a, d])) : p.$slide.eq(e).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + a + '" /></div>');
                    if (p.$el.trigger("onAferAppendSlide.lg", [e]), n = p.$slide.eq(e).find(".lg-object"), l && n.attr("sizes", l), h) {
                        n.attr("srcset", h);
                        try {
                            picturefill({elements: [n[0]]})
                        } catch (v) {
                            i.console && console.error("Make sure you have included Picturefill version 2")
                        }
                    }
                    ".lg-sub-html" !== p.s.appendSubHtmlTo && p.addHtml(e), p.$slide.eq(e).addClass("lg-loaded")
                }
                p.$slide.eq(e).find(".lg-object").on("load.lg error.lg", function () {
                    var i = 0;
                    o && !t(p.s.container).hasClass("lg-from-hash") && (i = o), setTimeout(function () {
                        p.$slide.eq(e).addClass("lg-complete"), p.$el.trigger("onSlideItemLoad.lg", [e, o || 0])
                    }, i)
                }), b && b.html5 && !u && p.$slide.eq(e).addClass("lg-complete"), s === !0 && (p.$slide.eq(e).hasClass("lg-complete") ? p.preload(e) : p.$slide.eq(e).find(".lg-object").on("load.lg error.lg", function () {
                        p.preload(e)
                    }))
            }, o.prototype.slide = function (i, e, s) {
                var o = this.$outer.find(".lg-current").index(), n = this;
                if (!n.lGalleryOn || o !== i) {
                    var a = this.$slide.length, r = n.lGalleryOn ? this.s.speed : 0, h = !1, l = !1;
                    if (!n.lgBusy) {
                        if (this.s.download) {
                            var d;
                            d = n.s.dynamic ? n.s.dynamicEl[i].downloadUrl !== !1 && (n.s.dynamicEl[i].downloadUrl || n.s.dynamicEl[i].src) : "false" !== n.$items.eq(i).attr("data-download-url") && (n.$items.eq(i).attr("data-download-url") || n.$items.eq(i).attr("href") || n.$items.eq(i).attr("data-src")), d ? (t("#lg-download").attr("href", d), n.$outer.removeClass("lg-hide-download")) : n.$outer.addClass("lg-hide-download")
                        }
                        if (this.$el.trigger("onBeforeSlide.lg", [o, i, e, s]), n.lgBusy = !0, clearTimeout(n.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
                                n.addHtml(i)
                            }, r), this.arrowDisable(i), e) {
                            var p = i - 1, u = i + 1;
                            0 === i && o === a - 1 ? (u = 0, p = a - 1) : i === a - 1 && 0 === o && (u = 0, p = a - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), n.$slide.eq(p).addClass("lg-prev-slide"), n.$slide.eq(u).addClass("lg-next-slide"), n.$slide.eq(i).addClass("lg-current")
                        } else n.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), i < o ? (l = !0, 0 !== i || o !== a - 1 || s || (l = !1, h = !0)) : i > o && (h = !0, i !== a - 1 || 0 !== o || s || (l = !0, h = !1)), l ? (this.$slide.eq(i).addClass("lg-prev-slide"), this.$slide.eq(o).addClass("lg-next-slide")) : h && (this.$slide.eq(i).addClass("lg-next-slide"), this.$slide.eq(o).addClass("lg-prev-slide")), setTimeout(function () {
                            n.$slide.removeClass("lg-current"), n.$slide.eq(i).addClass("lg-current"), n.$outer.removeClass("lg-no-trans")
                        }, 50);
                        n.lGalleryOn ? (setTimeout(function () {
                                n.loadContent(i, !0, 0)
                            }, this.s.speed + 50), setTimeout(function () {
                                n.lgBusy = !1, n.$el.trigger("onAfterSlide.lg", [o, i, e, s])
                            }, this.s.speed)) : (n.loadContent(i, !0, n.s.backdropDuration), n.lgBusy = !1, n.$el.trigger("onAfterSlide.lg", [o, i, e, s])), n.lGalleryOn = !0, this.s.counter && t("#lg-counter-current").text(i + 1)
                    }
                }
            }, o.prototype.goToNextSlide = function (t) {
                var i = this;
                i.lgBusy || (i.index + 1 < i.$slide.length ? (i.index++, i.$el.trigger("onBeforeNextSlide.lg", [i.index]), i.slide(i.index, t, !1)) : i.s.loop ? (i.index = 0, i.$el.trigger("onBeforeNextSlide.lg", [i.index]), i.slide(i.index, t, !1)) : i.s.slideEndAnimatoin && (i.$outer.addClass("lg-right-end"), setTimeout(function () {
                            i.$outer.removeClass("lg-right-end")
                        }, 400)))
            }, o.prototype.goToPrevSlide = function (t) {
                var i = this;
                i.lgBusy || (i.index > 0 ? (i.index--, i.$el.trigger("onBeforePrevSlide.lg", [i.index, t]), i.slide(i.index, t, !1)) : i.s.loop ? (i.index = i.$items.length - 1, i.$el.trigger("onBeforePrevSlide.lg", [i.index, t]), i.slide(i.index, t, !1)) : i.s.slideEndAnimatoin && (i.$outer.addClass("lg-left-end"), setTimeout(function () {
                            i.$outer.removeClass("lg-left-end")
                        }, 400)))
            }, o.prototype.keyPress = function () {
                var e = this;
                this.$items.length > 1 && t(i).on("keyup.lg", function (t) {
                    e.$items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()))
                }), t(i).on("keydown.lg", function (t) {
                    e.s.escKey === !0 && 27 === t.keyCode && (t.preventDefault(), e.$outer.hasClass("lg-thumb-open") ? e.$outer.removeClass("lg-thumb-open") : e.destroy())
                })
            }, o.prototype.arrow = function () {
                var t = this;
                this.$outer.find(".lg-prev").on("click.lg", function () {
                    t.goToPrevSlide()
                }), this.$outer.find(".lg-next").on("click.lg", function () {
                    t.goToNextSlide()
                })
            }, o.prototype.arrowDisable = function (t) {
                !this.s.loop && this.s.hideControlOnEnd && (t + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), t > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
            }, o.prototype.setTranslate = function (t, i, e) {
                this.s.useLeft ? t.css("left", i) : t.css({transform: "translate3d(" + i + "px, " + e + "px, 0px)"})
            }, o.prototype.touchMove = function (i, e) {
                var s = e - i;
                Math.abs(s) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), s, 0), this.setTranslate(t(".lg-prev-slide"), -this.$slide.eq(this.index).width() + s, 0), this.setTranslate(t(".lg-next-slide"), this.$slide.eq(this.index).width() + s, 0))
            }, o.prototype.touchEnd = function (t) {
                var i = this;
                "lg-slide" !== i.s.mode && i.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
                    i.$outer.removeClass("lg-dragging"), t < 0 && Math.abs(t) > i.s.swipeThreshold ? i.goToNextSlide(!0) : t > 0 && Math.abs(t) > i.s.swipeThreshold ? i.goToPrevSlide(!0) : Math.abs(t) < 5 && i.$el.trigger("onSlideClick.lg"), i.$slide.removeAttr("style")
                }), setTimeout(function () {
                    i.$outer.hasClass("lg-dragging") || "lg-slide" === i.s.mode || i.$outer.removeClass("lg-slide")
                }, i.s.speed + 100)
            }, o.prototype.enableSwipe = function () {
                var t = this, i = 0, e = 0, s = !1;
                t.s.enableSwipe && t.isTouch && t.doCss() && (t.$slide.on("touchstart.lg", function (e) {
                    t.$outer.hasClass("lg-zoomed") || t.lgBusy || (e.preventDefault(), t.manageSwipeClass(), i = e.originalEvent.targetTouches[0].pageX)
                }), t.$slide.on("touchmove.lg", function (o) {
                    t.$outer.hasClass("lg-zoomed") || (o.preventDefault(), e = o.originalEvent.targetTouches[0].pageX, t.touchMove(i, e), s = !0)
                }), t.$slide.on("touchend.lg", function () {
                    t.$outer.hasClass("lg-zoomed") || (s ? (s = !1, t.touchEnd(e - i)) : t.$el.trigger("onSlideClick.lg"))
                }))
            }, o.prototype.enableDrag = function () {
                var e = this, s = 0, o = 0, n = !1, a = !1;
                e.s.enableDrag && !e.isTouch && e.doCss() && (e.$slide.on("mousedown.lg", function (i) {
                    e.$outer.hasClass("lg-zoomed") || (t(i.target).hasClass("lg-object") || t(i.target).hasClass("lg-video-play")) && (i.preventDefault(), e.lgBusy || (e.manageSwipeClass(), s = i.pageX, n = !0, e.$outer.scrollLeft += 1, e.$outer.scrollLeft -= 1, e.$outer.removeClass("lg-grab").addClass("lg-grabbing"), e.$el.trigger("onDragstart.lg")))
                }), t(i).on("mousemove.lg", function (t) {
                    n && (a = !0, o = t.pageX, e.touchMove(s, o), e.$el.trigger("onDragmove.lg"))
                }), t(i).on("mouseup.lg", function (i) {
                    a ? (a = !1, e.touchEnd(o - s), e.$el.trigger("onDragend.lg")) : (t(i.target).hasClass("lg-object") || t(i.target).hasClass("lg-video-play")) && e.$el.trigger("onSlideClick.lg"), n && (n = !1, e.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
                }))
            }, o.prototype.manageSwipeClass = function () {
                var t = this.index + 1, i = this.index - 1, e = this.$slide.length;
                this.s.loop && (0 === this.index ? i = e - 1 : this.index === e - 1 && (t = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), i > -1 && this.$slide.eq(i).addClass("lg-prev-slide"), this.$slide.eq(t).addClass("lg-next-slide")
            }, o.prototype.mousewheel = function () {
                var t = this;
                t.$outer.on("mousewheel.lg", function (i) {
                    i.deltaY && (i.deltaY > 0 ? t.goToPrevSlide() : t.goToNextSlide(), i.preventDefault())
                })
            }, o.prototype.closeGallery = function () {
                var i = this, e = !1;
                this.$outer.find(".lg-close").on("click.lg", function () {
                    i.destroy()
                }), i.s.closable && (i.$outer.on("mousedown.lg", function (i) {
                    e = !!(t(i.target).is(".lg-outer") || t(i.target).is(".lg-item ") || t(i.target).is(".lg-img-wrap"))
                }), i.$outer.on("mouseup.lg", function (s) {
                    (t(s.target).is(".lg-outer") || t(s.target).is(".lg-item ") || t(s.target).is(".lg-img-wrap") && e) && (i.$outer.hasClass("lg-dragging") || i.destroy())
                }))
            }, o.prototype.destroy = function (e) {
                var s = this;
                e || s.$el.trigger("onBeforeClose.lg"), t(i).scrollTop(s.prevScrollTop), e && (s.s.dynamic || this.$items.off("click.lg click.lgcustom"), t.removeData(s.el, "lightGallery")), this.$el.off(".lg.tm"), t.each(t.fn.lightGallery.modules, function (t) {
                    s.modules[t] && s.modules[t].destroy()
                }), this.lGalleryOn = !1, clearTimeout(s.hideBartimeout), this.hideBartimeout = !1, t(i).off(".lg"), t(this.s.container).removeClass("lg-on lg-from-hash"), s.$outer && s.$outer.removeClass("lg-visible"), t(".lg-backdrop").removeClass("in"), setTimeout(function () {
                    s.$outer && s.$outer.remove(), t(".lg-backdrop").remove(), e || s.$el.trigger("onCloseAfter.lg")
                }, s.s.backdropDuration + 50)
            }, t.fn.lightGallery = function (e) {
                return this.each(function () {
                    if (t.data(this, "lightGallery"))try {
                        t(this).data("lightGallery").init()
                    } catch (s) {
                        i.console && console.error("lightGallery has not initiated properly")
                    } else t.data(this, "lightGallery", new o(this, e))
                })
            }, t.fn.lightGallery.modules = {}
        }(jQuery, window, document)
    }, 42: function (t, i) {
        "use strict";
        /*! lightgallery - v1.2.21 - 2016-06-28
         * http://sachinchoolur.github.io/lightGallery/
         * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
        !function (t, i, e, s) {
            var o = {
                thumbnail: !0,
                animateThumb: !0,
                currentPagerPosition: "middle",
                thumbWidth: 100,
                thumbContHeight: 100,
                thumbMargin: 5,
                exThumbImage: !1,
                showThumbByDefault: !0,
                toogleThumb: !0,
                pullCaptionUp: !0,
                enableThumbDrag: !0,
                enableThumbSwipe: !0,
                swipeThreshold: 50,
                loadYoutubeThumbnail: !0,
                youtubeThumbSize: 1,
                loadVimeoThumbnail: !0,
                vimeoThumbSize: "thumbnail_small",
                loadDailymotionThumbnail: !0
            }, n = function (i) {
                return this.core = t(i).data("lightGallery"), this.core.s = t.extend({}, o, this.core.s), this.$el = t(i), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbNum = this.core.s.thumbNum || 200, this.thumbNum_dynamic_limit = this.core.s.thumbNum_dynamic_limit || Math.floor(this.thumbNum / 4), this.domDynamic = !0, this.thumbNum > this.core.$items.length && (this.domDynamic = !1, this.thumbNum = this.core.$items.length), this.thumbTotalWidth = this.thumbNum * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.left = 0, this.dynamic_index_head = 0, this.dynamic_index_tail = this.thumbNum, this.thumbList = "", this.init(), this
            };
            n.prototype.init = function () {
                var t = this;
                this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function () {
                    t.core.$outer.addClass("lg-thumb-open")
                }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb ? (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss() && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss() && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
            }, n.prototype.build = function () {
                var e, s = this, o = "", n = '<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';
                switch (this.core.s.vimeoThumbSize) {
                    case"thumbnail_large":
                        o = "640";
                        break;
                    case"thumbnail_medium":
                        o = "200x150";
                        break;
                    case"thumbnail_small":
                        o = "100x75"
                }
                s.core.$outer.addClass("lg-has-thumb"), s.core.$outer.find(".lg").append(n), s.$thumbOuter = s.core.$outer.find(".lg-thumb-outer"), s.thumbOuterWidth = s.$thumbOuter.width(), s.core.s.animateThumb && s.core.$outer.find(".lg-thumb").css({
                    width: s.thumbTotalWidth + "px",
                    position: "relative"
                }), this.core.s.animateThumb && s.$thumbOuter.css("height", s.core.s.thumbContHeight + "px"), s.core.s.dynamic ? s.dynamicGetThumb("all") : s.core.$items.each(function (i) {
                        s.core.s.exThumbImage ? s.getThumb(t(this).attr("href") || t(this).attr("data-src"), t(this).attr(s.core.s.exThumbImage), i) : s.getThumb(t(this).attr("href") || t(this).attr("data-src"), t(this).find("img").attr("src"), i)
                    }), s.core.$outer.find(".lg-thumb").html(this.thumbList), e = s.core.$outer.find(".lg-thumb-item"), e.each(function () {
                    var i = t(this), e = i.attr("data-vimeo-id");
                    e && t.getJSON("//www.vimeo.com/api/v2/video/" + e + ".json?callback=?", {format: "json"}, function (t) {
                        i.find("img").attr("src", t[0][s.core.s.vimeoThumbSize])
                    })
                }), e.eq(s.thumbIndex).addClass("active"), s.core.$el.on("onBeforeSlide.lg.tm", function () {
                    var t = 0;
                    s.domDynamic && (s.thumbIndex = s.core.index - s.dynamic_index_head, t = s.dynamicGetThumb(s.thumbIndex)), e = s.core.$outer.find(".lg-thumb-item"), e.removeClass("active"), e.eq(s.thumbIndex).addClass("active"), s.animateThumb(s.thumbIndex, t)
                }), s.core.$outer.on("click.lg touchend.lg", ".lg-thumb-item", function () {
                    var i = t(this);
                    setTimeout(function () {
                        (s.thumbClickable && !s.core.lgBusy || !s.core.doCss()) && (s.thumbIndex = i.index(), s.core.index = s.dynamic_index_head + s.thumbIndex, s.core.slide(s.core.index, !1, !0))
                    }, 50)
                }), t(i).on("resize.lg.thumb orientationchange.lg.thumb", function () {
                    setTimeout(function () {
                        s.animateThumb(s.thumbIndex), s.thumbOuterWidth = s.$thumbOuter.width()
                    }, 200)
                })
            }, n.prototype.getThumb = function (t, i, e) {
                var s, o = this.core.isVideo(t, e) || {}, n = "";
                o.youtube || o.vimeo || o.dailymotion ? o.youtube ? s = this.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + o.youtube[1] + "/" + this.core.s.youtubeThumbSize + ".jpg" : i : o.vimeo ? this.core.s.loadVimeoThumbnail ? (s = "//i.vimeocdn.com/video/error_" + vimeoErrorThumbSize + ".jpg", n = o.vimeo[1]) : s = i : o.dailymotion && (s = this.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + o.dailymotion[1] : i) : s = i, this.thumbList += '<div data-vimeo-id="' + n + '" class="lg-thumb-item" style="width:' + this.core.s.thumbWidth + "px; margin-right: " + this.core.s.thumbMargin + 'px"><img src="' + s + '" /></div>', n = ""
            }, n.prototype.dynamicGetThumb = function (t) {
                if ("all" == t)for (var i = 0; i < this.thumbNum; i++)this.getThumb(this.core.s.dynamicEl[i].src, this.core.s.dynamicEl[i].thumb, i); else {
                    if (t < this.thumbNum_dynamic_limit) {
                        this.thumbList = "";
                        var e = this.dynamic_index_head - this.thumbNum_dynamic_limit;
                        e < 0 && (e = 0);
                        for (var i = e; i < this.dynamic_index_head; i++)this.getThumb(this.core.s.dynamicEl[i].src, this.core.s.dynamicEl[i].thumb, i);
                        var s = this.dynamic_index_head - e;
                        return s > 0 ? (this.dynamic_index_head = e, this.dynamic_index_tail -= s, this.core.$outer.find(".lg-thumb").children(".lg-thumb-item:gt(" + (this.thumbNum - s - 1) + ")").remove(), this.core.$outer.find(".lg-thumb").prepend(this.thumbList), this.thumbIndex = t + s, this.core.index = this.dynamic_index_head + this.thumbIndex) : s = 0, -s
                    }
                    if (this.thumbNum - t < this.thumbNum_dynamic_limit) {
                        this.thumbList = "";
                        var o = this.dynamic_index_tail + this.thumbNum_dynamic_limit;
                        o > this.core.$items.length && (o = this.core.$items.length);
                        for (var i = this.dynamic_index_tail; i < o; i++)this.getThumb(this.core.s.dynamicEl[i].src, this.core.s.dynamicEl[i].thumb, i);
                        var s = o - this.dynamic_index_tail;
                        return s > 0 ? (this.dynamic_index_head += s, this.dynamic_index_tail = o, this.core.$outer.find(".lg-thumb").children(".lg-thumb-item:lt(" + s + ")").remove(), this.core.$outer.find(".lg-thumb").append(this.thumbList), this.thumbIndex = t - s, this.core.index = this.dynamic_index_head + this.thumbIndex) : s = 0, s
                    }
                }
                return 0
            }, n.prototype.setTranslate = function (t, i) {
                "undefined" == typeof i && (i = 0);
                var e = this.core.$outer.find(".lg-thumb"), s = e.children(".lg-thumb-item");
                s.css({transform: "translate3d(" + i + "px, 0px, 0px)"}), e.css({transform: "translate3d(-" + (t + i) + "px, 0px, 0px)"}), 0 !== i && (this.core.lGalleryOn ? setTimeout(function () {
                        s.css({transform: "translate3d(0px, 0px, 0px)"}), e.css({
                            transform: "translate3d(-" + t + "px, 0px, 0px)",
                            "transition-duration": "0ms"
                        })
                    }, this.core.s.speed) : (s.css({transform: "translate3d(0px, 0px, 0px)"}), e.css({transform: "translate3d(-" + t + "px, 0px, 0px)"})))
            }, n.prototype.animateThumb = function (t, i) {
                "undefined" == typeof i && (i = 0);
                var e = this.core.$outer.find(".lg-thumb");
                if (this.core.s.animateThumb) {
                    var s;
                    switch (this.core.s.currentPagerPosition) {
                        case"left":
                            s = 0;
                            break;
                        case"middle":
                            s = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                            break;
                        case"right":
                            s = this.thumbOuterWidth - this.core.s.thumbWidth
                    }
                    var o = this.core.s.thumbWidth + this.core.s.thumbMargin, n = o * i;
                    this.left = o * t - 1 - s, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (e.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || e.animate({left: -this.left + "px"}, this.core.s.speed)) : this.core.doCss() || e.css("left", -this.left + "px"), this.setTranslate(this.left, n)
                }
            }, n.prototype.dynamicDomWhenMove = function (t) {
                var i = this.core.s.thumbWidth + this.core.s.thumbMargin, e = t + this.thumbOuterWidth / 2, s = Math.floor(e / i), o = this.dynamicGetThumb(s), n = i * o, a = t - n;
                return this.core.$outer.find(".lg-thumb").css({
                    transform: "translate3d(-" + a + "px, 0px, 0px)",
                    "transition-duration": "0ms"
                }), a
            }, n.prototype.enableThumbDrag = function () {
                var e = this, s = 0, o = 0, n = !1, a = !1, r = 0;
                e.$thumbOuter.addClass("lg-grab"), e.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function (t) {
                    e.thumbTotalWidth > e.thumbOuterWidth && (t.preventDefault(), s = t.pageX, n = !0, e.core.$outer.scrollLeft += 1, e.core.$outer.scrollLeft -= 1, e.thumbClickable = !1, e.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
                }), t(i).on("mousemove.lg.thumb", function (t) {
                    if (n) {
                        r = e.left, a = !0, o = t.pageX, e.$thumbOuter.addClass("lg-dragging");
                        var i = o - s;
                        r -= i, r > e.thumbTotalWidth - e.thumbOuterWidth && (r = e.thumbTotalWidth - e.thumbOuterWidth), r < 0 && (r = 0);
                        var h = e.core.$outer.find(".lg-thumb");
                        e.core.lGalleryOn ? (h.hasClass("on") || h.css("transition-duration", e.core.s.speed + "ms"), e.core.doCss() || h.animate({left: -e.left + "px"}, e.core.s.speed)) : e.core.doCss() || h.css("left", -e.left + "px"), e.setTranslate(r)
                    }
                }), t(i).on("mouseup.lg.thumb", function () {
                    a ? (a = !1, e.$thumbOuter.removeClass("lg-dragging"), Math.abs(o - s) < e.core.s.swipeThreshold && (e.thumbClickable = !0), e.domDynamic ? e.left = e.dynamicDomWhenMove(r) : e.left = r) : e.thumbClickable = !0, n && (n = !1, e.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
                })
            }, n.prototype.enableThumbSwipe = function () {
                var t = this, i = 0, e = 0, s = !1, o = 0;
                t.core.$outer.find(".lg-thumb").on("touchstart.lg", function (e) {
                    t.thumbTotalWidth > t.thumbOuterWidth && (e.preventDefault(), i = e.originalEvent.targetTouches[0].pageX, t.thumbClickable = !1)
                }), t.core.$outer.find(".lg-thumb").on("touchmove.lg", function (n) {
                    if (t.thumbTotalWidth > t.thumbOuterWidth) {
                        n.preventDefault(), e = n.originalEvent.targetTouches[0].pageX, s = !0, t.$thumbOuter.addClass("lg-dragging"), o = t.left, o -= e - i, o > t.thumbTotalWidth - t.thumbOuterWidth && (o = t.thumbTotalWidth - t.thumbOuterWidth), o < 0 && (o = 0);
                        var a = t.core.$outer.find(".lg-thumb");
                        t.core.lGalleryOn ? (a.hasClass("on") || a.css("transition-duration", t.core.s.speed + "ms"), t.core.doCss() || a.animate({left: -t.left + "px"}, t.core.s.speed)) : t.core.doCss() || a.css("left", -t.left + "px"), t.setTranslate(o)
                    }
                }), t.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
                    t.thumbTotalWidth > t.thumbOuterWidth && s ? (t.domDynamic ? t.left = t.dynamicDomWhenMove(o) : t.left = o, s = !1, t.$thumbOuter.removeClass("lg-dragging"), Math.abs(e - i) < t.core.s.swipeThreshold && (t.thumbClickable = !0)) : t.thumbClickable = !0
                })
            }, n.prototype.toogle = function () {
                var t = this;
                t.core.s.toogleThumb && (t.core.$outer.addClass("lg-can-toggle"), t.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), t.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
                    t.core.$outer.toggleClass("lg-thumb-open")
                }))
            }, n.prototype.thumbkeyPress = function () {
                var e = this;
                t(i).on("keydown.lg.thumb", function (t) {
                    38 === t.keyCode ? (t.preventDefault(), e.core.$outer.addClass("lg-thumb-open")) : 40 === t.keyCode && (t.preventDefault(), e.core.$outer.removeClass("lg-thumb-open"))
                })
            }, n.prototype.destroy = function () {
                this.core.s.thumbnail && this.core.$items.length > 1 && (t(i).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
            }, t.fn.lightGallery.modules.Thumbnail = n
        }(jQuery, window, document)
    }, 300: function (t, i) {
        "use strict";
        function e(t, i) {
            if (!(t instanceof i))throw new TypeError("Cannot call a class as a function")
        }

        var s = function () {
            function t(i, s) {
                e(this, t), this.$elem = i, this.opts = $.extend({
                    triggerEvent: "click",
                    titleClass: "tab-title",
                    contentClass: "tab-content"
                }, s), this.$titleList = this.$elem.find("." + this.opts.titleClass), this.$contentList = this.$elem.find("." + this.opts.contentClass), this.bindEvents(), this.isLoading = !1
            }

            return t.prototype.bindEvents = function () {
                var t = this, i = this.opts.triggerEvent;
                this.$titleList.on(i, function () {
                    t.active(this)
                })
            }, t.prototype.active = function (t) {
                var i = this.$titleList, e = this.$contentList, s = -1;
                if (isNaN(t) || (s = t), s === -1 && (s = i.index(t)), s === -1 && (s = e.index(t)), ~s) {
                    var o = i.eq(s), n = e.eq(s);
                    if (o.hasClass("tab-disabled"))return;
                    i.filter(".active").removeClass("active").trigger("hide"), e.filter(".active").removeClass("active").trigger("hide"), o.addClass("active").trigger("show"), n.addClass("active").trigger("show"), this.$elem.trigger("change", s)
                }
            }, t
        }();
        $.fn.tab = function (t) {
            return this.data("tab", new s(this, t)), this
        }
    }, 301: function (t, i) {
        "use strict";
        function e(t, i) {
            if (!(t instanceof i))throw new TypeError("Cannot call a class as a function")
        }

        var s = function () {
            function t(i, s) {
                e(this, t), this.$elem = i, s = s || {}, this.opts = $.extend({}, i.data(), s), this.$halfStarList = i.find(".half-star"), this.score = this.opts.score || 0, this.tmpScore = this.score, this.binded = !1, this.noBindEvent = "undefined" != typeof this.opts.disable && this.opts.disable, this.noBindEvent || this.bindEvents()
            }

            return t.prototype.bindEvents = function () {
                var t = this;
                t.binded || (t.$elem.on("mouseleave", function () {
                    t.set(t.score)
                }), t.$halfStarList.on("mouseenter", function () {
                    t.set(t.$halfStarList.index($(this)) + 1)
                }).on("click", function () {
                    t.set(t.tmpScore, !0)
                }), t.binded = !0)
            }, t.prototype.set = function (t, i) {
                i ? (this.score = t, this.$elem.trigger("change", t)) : (this.tmpScore = t, this.$elem.trigger("tmp-change", t)), t >= 1 ? (this.$halfStarList.filter(":lt(" + t + ")").addClass("active"), this.$halfStarList.filter(":gt(" + (t - 1) + ")").removeClass("active")) : this.$halfStarList.removeClass("active")
            }, t.prototype.disable = function () {
                var t = this;
                t.binded && (t.$elem.off("mouseleave"), t.$halfStarList.off("mouseenter").off("click"), t.binded = !1)
            }, t.prototype.enable = function () {
                this.bindEvents()
            }, t
        }();
        $.fn.scoreStar = function (t) {
            return this.each(function () {
                var i = $(this);
                i.data("scoreStar", new s(i, t))
            }), this
        }
    }, 302: function (t, i, e) {
        "use strict";
        function s(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        var o = e(30), n = s(o), a = /[\?&](utm_term|utm_medium|utm_source|utm_content|utm_campaign)=([^&]+)/g, r = void 0;
        t.exports = {
            noRepeatRequest: function (t) {
                var i = !1;
                return function () {
                    if (!i) {
                        i = !0;
                        var e = t.apply(this, arguments);
                        e && e.then ? e.then(function () {
                                i = !1
                            }).fail(function () {
                                i = !1
                            }) : (console.error("fail to no repeat request"), i = !1)
                    }
                }
            }, utmParam: function (t) {
                if (!r) {
                    if (r = {}, location.search.replace(a, function (t, i, e) {
                            r[i] = e
                        }), !(r.utm_term || r.utm_medium || r.utm_source || r.utm_content || r.utm_campaign)) {
                        var i = decodeURIComponent(n["default"].get("_lx_utm"));
                        i.replace(a, function (t, i, e) {
                            r[i] = e
                        })
                    }
                    r.uuid = n["default"].get("uuid"), r.ci = ci
                }
                var e = "";
                for (var s in r)if (r.hasOwnProperty(s) && null != r[s]) {
                    if (~t.indexOf("&" + s + "=") || ~t.indexOf("?" + s + "="))continue;
                    e += "&" + s + "=" + r[s]
                }
                return ~t.indexOf("?") || (e = e.replace("&", "?")), t + e
            }
        }
    }, 303: function (t, i, e) {
        var s, o = e(45);
        s = o.currentEnv ? o.currentEnv : o.currentEnv = new o.Environment([], {autoescape: !0});
        var n = (e(46)(s), o.webpackDependencies || (o.webpackDependencies = {}));
        n["../_ui/score-star.html"] = e(304);
        var a = e(151);
        !function () {
            (o.nunjucksPrecompiled = o.nunjucksPrecompiled || {})["client/pages/movie/detail-comment.html"] = function () {
                function t(t, i, e, s, o) {
                    var n = null, a = null, r = "";
                    try {
                        var h = null;
                        t.getTemplate("../_ui/score-star.html", !1, "client/pages/movie/detail-comment.html", !1, function (l, d) {
                            return l ? void o(l) : void d.getExported(function (l, d) {
                                    if (l)return void o(l);
                                    if (!d.hasOwnProperty("scoreStar"))return void o(new Error("cannot import 'scoreStar'"));
                                    var p = d.scoreStar;
                                    i.setVariable("scoreStar", p), r += "\n\n<ul>\n  ", e = e.push();
                                    var u = (n = 3, a = 35, s.callWrap(s.memberLookup(s.contextOrFrameLookup(i, e, "commentList"), "slice"), 'commentList["slice"]', i, [0, 10]));
                                    if (u)for (var c = u.length, m = 0; m < u.length; m++) {
                                        var g = u[m];
                                        e.set("comment", g), e.set("loop.index", m + 1), e.set("loop.index0", m), e.set("loop.revindex", c - m), e.set("loop.revindex0", c - m - 1), e.set("loop.first", 0 === m), e.set("loop.last", m === c - 1), e.set("loop.length", c), r += '\n    <li class="comment-container ', r += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(i, e, "loop"), "last") ? "last" : "", t.opts.autoescape), r += '" data-val="{commentid:', r += s.suppressValue(s.memberLookup(g, "id"), t.opts.autoescape), r += '}">\n      <div class="portrait-container">\n        <div class="portrait">\n          <img src="', r += s.suppressValue(t.getFilter("venus").call(i, t.getFilter("defaultUserAvatar").call(i, s.memberLookup(g, "avatarurl")), 100, 100), t.opts.autoescape), r += '" alt="">\n        </div>\n        <i class="level-', r += s.suppressValue(s.memberLookup(g, "userLevel"), t.opts.autoescape), r += '-icon"></i>\n      </div>\n      <div class="main">\n        <div class="main-header clearfix">\n          <div class="user">\n            <span class="name">', r += s.suppressValue(s.memberLookup(g, "nickName"), t.opts.autoescape), r += "</span>\n            ", r += "\n            ";
                                        var f;
                                        f = !1, e.set("showTag4", f, !0), e.topLevel && i.setVariable("showTag4", f), e.topLevel && i.addExport("showTag4", f), r += "\n            ";
                                        var b;
                                        b = !1, e.set("showTag5", b, !0), e.topLevel && i.setVariable("showTag5", b), e.topLevel && i.addExport("showTag5", b), r += "\n            ", e = e.push();
                                        var y = s.memberLookup(s.memberLookup(g, "tagList"), "fixed");
                                        if (y)for (var v = y.length, x = 0; x < y.length; x++) {
                                            var j = y[x];
                                            if (e.set("tag", j), e.set("loop.index", x + 1), e.set("loop.index0", x), e.set("loop.revindex", v - x), e.set("loop.revindex0", v - x - 1), e.set("loop.first", 0 === x), e.set("loop.last", x === v - 1), e.set("loop.length", v), r += "\n              ", 5 == s.memberLookup(j, "id")) {
                                                r += "\n                ";
                                                var C;
                                                C = !0, e.set("showTag5", C, !0), e.topLevel && i.setVariable("showTag5", C), e.topLevel && i.addExport("showTag5", C), r += "\n              "
                                            }
                                            if (r += "\n              ", 4 == s.memberLookup(j, "id")) {
                                                r += "\n                ";
                                                var $;
                                                $ = !0, e.set("showTag4", $, !0), e.topLevel && i.setVariable("showTag4", $), e.topLevel && i.addExport("showTag4", $), r += "\n              "
                                            }
                                            r += "\n            "
                                        }
                                        e = e.pop(), r += "\n            ", s.contextOrFrameLookup(i, e, "showTag5") && (r += '\n              <i class="icon cert-person-icon"></i>\n            '), r += "\n            ", s.contextOrFrameLookup(i, e, "showTag4") && (r += "\n              <span class='tag'>购</span>\n            "), r += '\n          </div>\n          <div class="time" title="', r += s.suppressValue(s.memberLookup(g, "startTime"), t.opts.autoescape), r += '">\n            <span title="', r += s.suppressValue(s.memberLookup(g, "startTime"), t.opts.autoescape), r += '">', r += s.suppressValue(t.getFilter("timeAgo").call(i, s.memberLookup(g, "startTime")), t.opts.autoescape), r += "</span>\n            ", r += s.suppressValue((n = 35, a = 22, s.callWrap(p, "scoreStar", i, [2 * s.memberLookup(g, "score")])), t.opts.autoescape), r += '\n          </div>\n          <div class="approve ', r += s.suppressValue(s.memberLookup(g, "approved") ? "active" : "", t.opts.autoescape), r += '" data-id="', r += s.suppressValue(s.memberLookup(g, "id"), t.opts.autoescape), r += '">\n            <i data-act="', r += s.suppressValue(s.memberLookup(g, "approved") ? "comment-unapprove-click" : "comment-approve-click", t.opts.autoescape), r += '" class="approve-icon"></i><span class="num">', r += s.suppressValue(s.memberLookup(g, "approve"), t.opts.autoescape), r += '</span>\n          </div>\n        </div>\n        <div class="comment-content">', r += s.suppressValue(s.memberLookup(g, "content"), t.opts.autoescape), r += "</div>\n      </div>\n    </li>\n  "
                                    }
                                    e = e.pop(), r += "\n</ul>\n", h ? h.rootRenderFunc(t, i, e, s, o) : o(null, r)
                                })
                        })
                    } catch (l) {
                        o(s.handleError(l, n, a))
                    }
                }

                return {root: t}
            }()
        }(), t.exports = a(o, s, o.nunjucksPrecompiled["client/pages/movie/detail-comment.html"], n)
    }, 304: function (t, i, e) {
        var s, o = e(45);
        s = o.currentEnv ? o.currentEnv : o.currentEnv = new o.Environment([], {autoescape: !0});
        var n = (e(46)(s), o.webpackDependencies || (o.webpackDependencies = {})), a = e(151);
        !function () {
            (o.nunjucksPrecompiled = o.nunjucksPrecompiled || {})["client/pages/_ui/score-star.html"] = function () {
                function t(t, i, e, s, o) {
                    var n = null, a = null, r = "";
                    try {
                        var h = null, l = s.makeMacro(["score"], [], function (o, r) {
                            e = e.push(!0), r = r || {}, r.hasOwnProperty("caller") && e.set("caller", r.caller), e.set("score", o);
                            var h = "";
                            h += '\n<ul class="score-star clearfix" data-score="', h += s.suppressValue(o, t.opts.autoescape), h += '">\n  ', e = e.push();
                            var l = (n = 2, a = 17, s.callWrap(s.contextOrFrameLookup(i, e, "range"), "range", i, [0, 5]));
                            if (l)for (var d = l.length, p = 0; p < l.length; p++) {
                                var u = l[p];
                                e.set("i", u), e.set("loop.index", p + 1), e.set("loop.index0", p), e.set("loop.revindex", d - p), e.set("loop.revindex0", d - p - 1), e.set("loop.first", 0 === p), e.set("loop.last", p === d - 1), e.set("loop.length", d), h += "\n    <li>\n      ", e = e.push();
                                var c = (n = 4, a = 21, s.callWrap(s.contextOrFrameLookup(i, e, "range"), "range", i, [0, 2]));
                                if (c)for (var m = c.length, g = 0; g < c.length; g++) {
                                    var f = c[g];
                                    e.set("j", f), e.set("loop.index", g + 1), e.set("loop.index0", g), e.set("loop.revindex", m - g), e.set("loop.revindex0", m - g - 1), e.set("loop.first", 0 === g), e.set("loop.last", g === m - 1), e.set("loop.length", m), h += '<i class="half-star ', h += s.suppressValue(0 == f ? "left" : "right", t.opts.autoescape), h += " ", h += s.suppressValue(2 * u + f < o ? "active" : "", t.opts.autoescape), h += '"></i>'
                                }
                                e = e.pop(), h += "\n    </li>\n  "
                            }
                            return e = e.pop(), h += "\n</ul>\n", e = e.pop(), new s.SafeString(h)
                        });
                        i.addExport("scoreStar"), i.setVariable("scoreStar", l), r += "\n", h ? h.rootRenderFunc(t, i, e, s, o) : o(null, r)
                    } catch (d) {
                        o(s.handleError(d, n, a))
                    }
                }

                return {root: t}
            }()
        }(), t.exports = a(o, s, o.nunjucksPrecompiled["client/pages/_ui/score-star.html"], n)
    }, 305: function (module, exports) {
        function jBox(type, options) {
            this.options = {
                id: null,
                width: "auto",
                height: "auto",
                minWidth: null,
                maxHeight: null,
                minWidth: null,
                maxHeight: null,
                attach: null,
                trigger: "click",
                preventDefault: !1,
                title: null,
                content: null,
                getTitle: null,
                getContent: null,
                ajax: {url: null, data: "", reload: !1, getData: "data-ajax", setContent: !0, spinner: !0},
                target: null,
                position: {x: "center", y: "center"},
                outside: null,
                offset: 0,
                attributes: {x: "left", y: "top"},
                adjustPosition: !1,
                adjustTracker: !1,
                adjustDistance: 5,
                fixed: !1,
                reposition: !1,
                repositionOnOpen: !0,
                repositionOnContent: !0,
                pointer: !1,
                pointTo: "target",
                fade: 180,
                animation: null,
                theme: "Default",
                addClass: "",
                overlay: !1,
                zIndex: 1e4,
                delayOpen: 0,
                delayClose: 0,
                closeOnEsc: !1,
                closeOnClick: !1,
                closeOnMouseleave: !1,
                closeButton: !1,
                constructOnInit: !1,
                blockScroll: !1,
                appendTo: jQuery("body"),
                draggable: null,
                dragOver: !0,
                onInit: function () {
                },
                onCreated: function () {
                },
                onOpen: function () {
                },
                onClose: function () {
                },
                onCloseComplete: function () {
                },
                confirmButton: "Submit",
                cancelButton: "Cancel",
                confirm: null,
                cancel: null,
                autoClose: 7e3,
                color: null,
                stack: !0,
                audio: !1,
                volume: 100,
                src: "href",
                gallery: "data-jbox-image",
                imageLabel: "title",
                imageFade: 600,
                imageSize: "contain"
            }, this.defaultOptions = {
                Tooltip: {
                    getContent: "title",
                    trigger: "mouseenter",
                    position: {x: "center", y: "top"},
                    outside: "y",
                    pointer: !0,
                    adjustPosition: !0,
                    reposition: !0
                },
                Mouse: {
                    target: "mouse",
                    position: {x: "right", y: "bottom"},
                    offset: 15,
                    trigger: "mouseenter",
                    adjustPosition: "flip"
                },
                Modal: {
                    target: jQuery(window),
                    fixed: !0,
                    blockScroll: !0,
                    closeOnEsc: !0,
                    closeOnClick: "overlay",
                    closeButton: !0,
                    overlay: !0,
                    animation: "zoomOut"
                },
                Confirm: {
                    target: jQuery(window),
                    fixed: !0,
                    attach: jQuery("[data-confirm]"),
                    getContent: "data-confirm",
                    content: "Do you really want to do this?",
                    minWidth: 320,
                    maxWidth: 460,
                    blockScroll: !0,
                    closeOnEsc: !0,
                    closeOnClick: "overlay",
                    closeButton: !0,
                    overlay: !0,
                    animation: "zoomOut",
                    preventDefault: !0,
                    _onAttach: function (t) {
                        if (!this.options.confirm) {
                            var i = t.attr("onclick") ? t.attr("onclick") : t.attr("href") ? t.attr("target") ? 'window.open("' + t.attr("href") + '", "' + t.attr("target") + '");' : 'window.location.href = "' + t.attr("href") + '";' : "";
                            t.prop("onclick", null).data("jBox-Confirm-submit", i)
                        }
                    },
                    _onCreated: function () {
                        this.footer = jQuery('<div class="jBox-Confirm-footer"/>'), jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>').html(this.options.cancelButton).click(function () {
                            this.options.cancel && this.options.cancel(), this.close()
                        }.bind(this)).appendTo(this.footer), this.submitButton = jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>').html(this.options.confirmButton).appendTo(this.footer), this.footer.appendTo(this.container)
                    },
                    _onOpen: function () {
                        this.submitButton.off("click.jBox-Confirm" + this.id).on("click.jBox-Confirm" + this.id, function () {
                            this.options.confirm ? this.options.confirm() : eval(this.source.data("jBox-Confirm-submit")), this.close()
                        }.bind(this))
                    }
                },
                Notice: {
                    target: jQuery(window),
                    fixed: !0,
                    position: {x: 20, y: 20},
                    attributes: {x: "right", y: "top"},
                    animation: "zoomIn",
                    closeOnClick: "box",
                    _onInit: function () {
                        this.open(), this.options.delayClose = this.options.autoClose, this.options.delayClose && this.close()
                    },
                    _onCreated: function () {
                        this.options.color && this.wrapper.addClass("jBox-Notice-color jBox-Notice-" + this.options.color), this.wrapper.data("jBox-Notice-position", this.options.attributes.x + "-" + this.options.attributes.y)
                    },
                    _onOpen: function () {
                        jQuery.each(jQuery(".jBox-Notice"), function (t, i) {
                            if (i = jQuery(i), i.attr("id") != this.id && i.data("jBox-Notice-position") == this.options.attributes.x + "-" + this.options.attributes.y)return this.options.stack ? void i.css("margin-" + this.options.attributes.y, parseInt(i.css("margin-" + this.options.attributes.y)) + this.wrapper.outerHeight() + 10) : void i.data("jBox").close({ignoreDelay: !0})
                        }.bind(this)), this.options.audio && this.audio({
                            url: this.options.audio,
                            valume: this.options.volume
                        })
                    },
                    _onCloseComplete: function () {
                        this.destroy()
                    }
                },
                Image: {
                    target: jQuery(window),
                    fixed: !0,
                    blockScroll: !0,
                    closeOnEsc: !0,
                    closeOnClick: "overlay",
                    closeButton: !0,
                    overlay: !0,
                    animation: "zoomOut",
                    width: 800,
                    height: 533,
                    attach: jQuery("[data-jbox-image]"),
                    preventDefault: !0,
                    _onInit: function () {
                        this.images = this.currentImage = {}, this.imageZIndex = 1, this.attachedElements && jQuery.each(this.attachedElements, function (t, i) {
                            if (i = jQuery(i), !i.data("jBox-image-gallery")) {
                                var e = i.attr(this.options.gallery) || "default";
                                !this.images[e] && (this.images[e] = []), this.images[e].push({
                                    src: i.attr(this.options.src),
                                    label: i.attr(this.options.imageLabel) || ""
                                }), "title" == this.options.imageLabel && i.removeAttr("title"), i.data("jBox-image-gallery", e), i.data("jBox-image-id", this.images[e].length - 1)
                            }
                        }.bind(this));
                        var t = function (t, i, e, s) {
                            if (!jQuery("#jBox-image-" + t + "-" + i).length) {
                                var o = jQuery("<div/>", {
                                    id: "jBox-image-" + t + "-" + i,
                                    "class": "jBox-image-container"
                                }).css({
                                    backgroundImage: "url(" + this.images[t][i].src + ")",
                                    backgroundSize: this.options.imageSize,
                                    opacity: s ? 1 : 0,
                                    zIndex: e ? 0 : this.imageZIndex++
                                }).appendTo(this.content);
                                jQuery("<div/>", {
                                    id: "jBox-image-label-" + t + "-" + i,
                                    "class": "jBox-image-label" + (s ? " active" : "")
                                }).html(this.images[t][i].label).appendTo(this.imageLabel);
                                !s && !e && o.animate({opacity: 1}, this.options.imageFade)
                            }
                        }.bind(this), i = function (t, i) {
                            jQuery(".jBox-image-label.active").removeClass("active"), jQuery("#jBox-image-label-" + t + "-" + i).addClass("active")
                        };
                        this.showImage = function (e) {
                            if ("open" != e) {
                                var s = this.currentImage.gallery, o = this.currentImage.id + (1 * ("prev" == e) ? -1 : 1);
                                o = o > this.images[s].length - 1 ? 0 : o < 0 ? this.images[s].length - 1 : o
                            } else {
                                var s = this.source.data("jBox-image-gallery"), o = this.source.data("jBox-image-id");
                                jQuery(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({display: this.images[s].length > 1 ? "block" : "none"})
                            }
                            if (this.currentImage = {
                                    gallery: s,
                                    id: o
                                }, jQuery("#jBox-image-" + s + "-" + o).length) jQuery("#jBox-image-" + s + "-" + o).css({
                                zIndex: this.imageZIndex++,
                                opacity: 0
                            }).animate({opacity: 1}, "open" == e ? 0 : this.options.imageFade), i(s, o); else {
                                this.wrapper.addClass("jBox-loading");
                                jQuery('<img src="' + this.images[s][o].src + '">').load(function () {
                                    t(s, o, !1), i(s, o), this.wrapper.removeClass("jBox-loading")
                                }.bind(this))
                            }
                            var n = o + 1;
                            n = n > this.images[s].length - 1 ? 0 : n < 0 ? this.images[s].length - 1 : n, !jQuery("#jBox-image-" + s + "-" + n).length && jQuery('<img src="' + this.images[s][n].src + '">').load(function () {
                                t(s, n, !0)
                            })
                        }
                    },
                    _onCreated: function () {
                        this.imageLabel = jQuery("<div/>", {id: "jBox-image-label"}).appendTo(this.wrapper), this.wrapper.append(jQuery("<div/>", {
                            "class": "jBox-image-pointer-prev",
                            click: function () {
                                this.showImage("prev")
                            }.bind(this)
                        })).append(jQuery("<div/>", {
                            "class": "jBox-image-pointer-next", click: function () {
                                this.showImage("next")
                            }.bind(this)
                        }))
                    },
                    _onOpen: function () {
                        jQuery("body").addClass("jBox-image-open"), jQuery(document).on("keyup.jBox-" + this.id, function (t) {
                            37 == t.keyCode && this.showImage("prev"), 39 == t.keyCode && this.showImage("next")
                        }.bind(this)), this.showImage("open")
                    },
                    _onClose: function () {
                        jQuery("body").removeClass("jBox-image-open"), jQuery(document).off("keyup.jBox-" + this.id)
                    },
                    _onCloseComplete: function () {
                        this.wrapper.find(".jBox-image-container").css("opacity", 0)
                    }
                }
            }, "string" == jQuery.type(type) && (this.type = type, type = this.defaultOptions[type]), this.options = jQuery.extend(!0, this.options, type, options), null === this.options.id && (this.options.id = "jBoxID" + jBox._getUniqueID()), this.id = this.options.id, ("center" == this.options.position.x && "x" == this.options.outside || "center" == this.options.position.y && "y" == this.options.outside) && (this.options.outside = !1), (!this.options.outside || "xy" == this.options.outside) && (this.options.pointer = !1), "object" != jQuery.type(this.options.offset) && (this.options.offset = {
                x: this.options.offset,
                y: this.options.offset
            }), this.options.offset.x || (this.options.offset.x = 0), this.options.offset.y || (this.options.offset.y = 0), "object" != jQuery.type(this.options.adjustDistance) ? this.options.adjustDistance = {
                    top: this.options.adjustDistance,
                    right: this.options.adjustDistance,
                    bottom: this.options.adjustDistance,
                    left: this.options.adjustDistance
                } : this.options.adjustDistance = jQuery.extend({
                    top: 5,
                    left: 5,
                    right: 5,
                    bottom: 5
                }, this.options.adjustDistance), this.align = this.options.outside && "xy" != this.options.outside ? this.options.position[this.options.outside] : "center" != this.options.position.y && "number" != jQuery.type(this.options.position.y) ? this.options.position.x : "center" != this.options.position.x && "number" != jQuery.type(this.options.position.x) ? this.options.position.y : this.options.attributes.x, this.options.outside && "xy" != this.options.outside && (this.outside = this.options.position[this.options.outside]);
            var userAgent = navigator.userAgent.toLowerCase();
            return this.IE8 = userAgent.indexOf("msie") != -1 && 8 == parseInt(userAgent.split("msie")[1]), this.prefix = userAgent.indexOf("webkit") != -1 ? "-webkit-" : "", this._getOpp = function (t) {
                return {left: "right", right: "left", top: "bottom", bottom: "top", x: "y", y: "x"}[t]
            }, this._getXY = function (t) {
                return {left: "x", right: "x", top: "y", bottom: "y", center: "x"}[t]
            }, this._getTL = function (t) {
                return {left: "left", right: "left", top: "top", bottom: "top", center: "left", x: "left", y: "top"}[t]
            }, this._supportsSVG = function () {
                return document.createElement("svg").getAttributeNS
            }, this._createSVG = function (t, i) {
                var e = document.createElementNS("http://www.w3.org/2000/svg", t);
                return jQuery.each(i, function (t, i) {
                    e.setAttribute(i[0], i[1] || "")
                }), e
            }, this._appendSVG = function (t, i) {
                return i.appendChild(t)
            }, this._create = function () {
                if (!this.wrapper) {
                    if (this.wrapper = jQuery("<div/>", {
                            id: this.id,
                            "class": "jBox-wrapper" + (this.type ? " jBox-" + this.type : "") + (this.options.theme ? " jBox-" + this.options.theme : "") + (this.options.addClass ? " " + this.options.addClass : "") + (this.IE8 ? " jBox-IE8" : "")
                        }).css({
                            position: this.options.fixed ? "fixed" : "absolute",
                            display: "none",
                            opacity: 0,
                            zIndex: this.options.zIndex
                        }).data("jBox", this), this.options.closeOnMouseleave && this.wrapper.mouseleave(function (t) {
                            !this.source || !(t.relatedTarget == this.source[0] || jQuery.inArray(this.source[0], jQuery(t.relatedTarget).parents("*")) !== -1) && this.close()
                        }.bind(this)), "box" == this.options.closeOnClick && this.wrapper.on("touchend click", function () {
                            this.close({ignoreDelay: !0})
                        }.bind(this)), this.container = jQuery("<div/>", {"class": "jBox-container"}).appendTo(this.wrapper), this.content = jQuery("<div/>", {"class": "jBox-content"}).css({
                            width: this.options.width,
                            height: this.options.height,
                            minWidth: this.options.minWidth,
                            minHeight: this.options.minHeight,
                            maxWidth: this.options.maxWidth,
                            maxHeight: this.options.maxHeight
                        }).appendTo(this.container), this.options.closeButton) {
                        if (this.closeButton = jQuery("<div/>", {"class": "jBox-closeButton jBox-noDrag"}).on("touchend click", function (t) {
                                this.isOpen && this.close({ignoreDelay: !0})
                            }.bind(this)), this._supportsSVG()) {
                            var t = this._createSVG("svg", [["viewBox", "0 0 24 24"]]);
                            this._appendSVG(this._createSVG("path", [["d", "M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"]]), t), this.closeButton.append(t)
                        } else this.wrapper.addClass("jBox-nosvg");
                        "box" != this.options.closeButton && (this.options.closeButton !== !0 || this.options.overlay || this.options.title) || (this.wrapper.addClass("jBox-closeButton-box"), this.closeButton.appendTo(this.container))
                    }
                    if (this.wrapper.appendTo(this.options.appendTo), this.options.pointer) {
                        if (this.pointer = {
                                position: "target" != this.options.pointTo ? this.options.pointTo : this._getOpp(this.outside),
                                xy: "target" != this.options.pointTo ? this._getXY(this.options.pointTo) : this._getXY(this.outside),
                                align: "center",
                                offset: 0
                            }, this.pointer.element = jQuery("<div/>", {"class": "jBox-pointer jBox-pointer-" + this.pointer.position}).appendTo(this.wrapper), this.pointer.dimensions = {
                                x: this.pointer.element.outerWidth(),
                                y: this.pointer.element.outerHeight()
                            }, "string" == jQuery.type(this.options.pointer)) {
                            var i = this.options.pointer.split(":");
                            i[0] && (this.pointer.align = i[0]), i[1] && (this.pointer.offset = parseInt(i[1]))
                        }
                        this.pointer.alignAttribute = "x" == this.pointer.xy ? "bottom" == this.pointer.align ? "bottom" : "top" : "right" == this.pointer.align ? "right" : "left", this.wrapper.css("padding-" + this.pointer.position, this.pointer.dimensions[this.pointer.xy]),
                            this.pointer.element.css(this.pointer.alignAttribute, "center" == this.pointer.align ? "50%" : 0).css("margin-" + this.pointer.alignAttribute, this.pointer.offset), this.pointer.margin = {}, this.pointer.margin["margin-" + this.pointer.alignAttribute] = this.pointer.offset, "center" == this.pointer.align && this.pointer.element.css(this.prefix + "transform", "translate(" + ("y" == this.pointer.xy ? this.pointer.dimensions.x * -.5 + "px" : 0) + ", " + ("x" == this.pointer.xy ? this.pointer.dimensions.y * -.5 + "px" : 0) + ")"), this.pointer.element.css("x" == this.pointer.xy ? "width" : "height", parseInt(this.pointer.dimensions[this.pointer.xy]) + parseInt(this.container.css("border-" + this.pointer.alignAttribute + "-width"))), this.wrapper.addClass("jBox-pointerPosition-" + this.pointer.position)
                    }
                    if (this.setContent(this.options.content, !0), this.setTitle(this.options.title, !0), this.options.draggable) {
                        var e = "title" == this.options.draggable ? this.titleContainer : this.options.draggable.length > 0 ? this.options.draggable : this.options.draggable.selector ? jQuery(this.options.draggable.selector) : this.wrapper;
                        e.addClass("jBox-draggable").on("mousedown", function (t) {
                            if (2 != t.button && !jQuery(t.target).hasClass("jBox-noDrag") && !jQuery(t.target).parents(".jBox-noDrag").length) {
                                this.options.dragOver && this.wrapper.css("zIndex") <= jBox.zIndexMax && (jBox.zIndexMax += 1, this.wrapper.css("zIndex", jBox.zIndexMax));
                                var i = this.wrapper.outerHeight(), e = this.wrapper.outerWidth(), s = this.wrapper.offset().top + i - t.pageY, o = this.wrapper.offset().left + e - t.pageX;
                                jQuery(document).on("mousemove.jBox-draggable-" + this.id, function (t) {
                                    this.wrapper.offset({top: t.pageY + s - i, left: t.pageX + o - e})
                                }.bind(this)), t.preventDefault()
                            }
                        }.bind(this)).on("mouseup", function () {
                            jQuery(document).off("mousemove.jBox-draggable-" + this.id)
                        }.bind(this)), jBox.zIndexMax = jBox.zIndexMax ? Math.max(jBox.zIndexMax, this.options.zIndex) : this.options.zIndex
                    }
                    this.options.onCreated.bind(this)(), this.options._onCreated && this.options._onCreated.bind(this)()
                }
            }, this.options.constructOnInit && this._create(), this.options.attach && this.attach(), this._positionMouse = function (t) {
                this.pos = {left: t.pageX, top: t.pageY};
                var i = function (t, i) {
                    return "center" == this.options.position[i] ? void(this.pos[t] -= Math.ceil(this.dimensions[i] / 2)) : (this.pos[t] += t == this.options.position[i] ? this.dimensions[i] * -1 - this.options.offset[i] : this.options.offset[i], this.pos[t])
                }.bind(this);
                this.wrapper.css({left: i("left", "x"), top: i("top", "y")}), this.targetDimensions = {
                    x: 0,
                    y: 0,
                    left: t.pageX,
                    top: t.pageY
                }, this._adjustPosition()
            }, this._attachEvents = function () {
                if (this.options.closeOnEsc && jQuery(document).on("keyup.jBox-" + this.id, function (t) {
                        27 == t.keyCode && this.close({ignoreDelay: !0})
                    }.bind(this)), this.options.closeOnClick !== !0 && "body" != this.options.closeOnClick || jQuery(document).on("touchend.jBox-" + this.id + " click.jBox-" + this.id, function (t) {
                        this.blockBodyClick || "body" == this.options.closeOnClick && (t.target == this.wrapper[0] || this.wrapper.has(t.target).length) || this.close({ignoreDelay: !0})
                    }.bind(this)), (this.options.adjustPosition && this.options.adjustTracker || this.options.reposition) && !this.fixed && this.outside) {
                    var t, i = 0, e = 150, s = function () {
                        var s = (new Date).getTime();
                        t || (s - i > e && (this.options.reposition && this.position(), this.options.adjustTracker && this._adjustPosition(), i = s), t = setTimeout(function () {
                            t = null, i = (new Date).getTime(), this.options.reposition && this.position(), this.options.adjustTracker && this._adjustPosition()
                        }.bind(this), e))
                    }.bind(this);
                    this.options.adjustTracker && "resize" != this.options.adjustTracker && jQuery(window).on("scroll.jBox-" + this.id, function (t) {
                        s()
                    }.bind(this)), (this.options.adjustTracker && "scroll" != this.options.adjustTracker || this.options.reposition) && jQuery(window).on("resize.jBox-" + this.id, function (t) {
                        s()
                    }.bind(this))
                }
                "mouse" == this.options.target && jQuery("body").on("mousemove.jBox-" + this.id, function (t) {
                    this._positionMouse(t)
                }.bind(this))
            }, this._detachEvents = function () {
                this.options.closeOnEsc && jQuery(document).off("keyup.jBox-" + this.id), (this.options.closeOnClick === !0 || "body" == this.options.closeOnClick) && jQuery(document).off("touchend.jBox-" + this.id + " click.jBox-" + this.id), (this.options.adjustPosition && this.options.adjustTracker || this.options.reposition) && (jQuery(window).off("scroll.jBox-" + this.id), jQuery(window).off("resize.jBox-" + this.id)), "mouse" == this.options.target && jQuery("body").off("mousemove.jBox-" + this.id)
            }, this._addOverlay = function () {
                this.overlay || (this.overlay = jQuery("#jBox-overlay").length ? jQuery("#jBox-overlay").css({zIndex: Math.min(jQuery("#jBox-overlay").css("z-index"), this.options.zIndex - 1)}) : jQuery("<div/>", {id: "jBox-overlay"}).css({
                        display: "none",
                        opacity: 0,
                        zIndex: this.options.zIndex - 1
                    }).appendTo(jQuery("body")), ("overlay" == this.options.closeButton || this.options.closeButton === !0) && (jQuery("#jBox-overlay .jBox-closeButton").length > 0 ? jQuery("#jBox-overlay .jBox-closeButton").on("touchend click", function () {
                        this.isOpen && this.close({ignoreDelay: !0})
                    }.bind(this)) : this.overlay.append(this.closeButton)), "overlay" == this.options.closeOnClick && this.overlay.on("touchend click", function () {
                    this.isOpen && this.close({ignoreDelay: !0})
                }.bind(this)));
                var t = this.overlay.data("jBox") || {};
                t["jBox-" + this.id] = !0, this.overlay.data("jBox", t), "block" != this.overlay.css("display") && (this.options.fade ? this.overlay.stop() && this.overlay.animate({opacity: 1}, {
                        queue: !1,
                        duration: this.options.fade,
                        start: function () {
                            this.overlay.css({display: "block"})
                        }.bind(this)
                    }) : this.overlay.css({display: "block", opacity: 1}))
            }, this._removeOverlay = function () {
                if (this.overlay) {
                    var t = this.overlay.data("jBox");
                    delete t["jBox-" + this.id], this.overlay.data("jBox", t), jQuery.isEmptyObject(t) && (this.options.fade ? this.overlay.stop() && this.overlay.animate({opacity: 0}, {
                            queue: !1,
                            duration: this.options.fade,
                            complete: function () {
                                this.overlay.css({display: "none"})
                            }.bind(this)
                        }) : this.overlay.css({display: "none", opacity: 0}))
                }
            }, this._generateCSS = function () {
                if (!this.IE8) {
                    "object" != jQuery.type(this.options.animation) && (this.options.animation = {
                        pulse: {
                            open: "pulse",
                            close: "zoomOut"
                        },
                        zoomIn: {open: "zoomIn", close: "zoomIn"},
                        zoomOut: {open: "zoomOut", close: "zoomOut"},
                        move: {open: "move", close: "move"},
                        slide: {open: "slide", close: "slide"},
                        flip: {open: "flip", close: "flip"},
                        tada: {open: "tada", close: "zoomOut"}
                    }[this.options.animation]), this.options.animation.open && (this.options.animation.open = this.options.animation.open.split(":")), this.options.animation.close && (this.options.animation.close = this.options.animation.close.split(":")), this.options.animation.openDirection = this.options.animation.open ? this.options.animation.open[1] : null, this.options.animation.closeDirection = this.options.animation.close ? this.options.animation.close[1] : null, this.options.animation.open && (this.options.animation.open = this.options.animation.open[0]), this.options.animation.close && (this.options.animation.close = this.options.animation.close[0]), this.options.animation.open && (this.options.animation.open += "Open"), this.options.animation.close && (this.options.animation.close += "Close");
                    var t = {
                        pulse: {
                            duration: 350,
                            css: [["0%", "scale(1)"], ["50%", "scale(1.1)"], ["100%", "scale(1)"]]
                        },
                        zoomInOpen: {
                            duration: this.options.fade || 180,
                            css: [["0%", "scale(0.9)"], ["100%", "scale(1)"]]
                        },
                        zoomInClose: {
                            duration: this.options.fade || 180,
                            css: [["0%", "scale(1)"], ["100%", "scale(0.9)"]]
                        },
                        zoomOutOpen: {
                            duration: this.options.fade || 180,
                            css: [["0%", "scale(1.1)"], ["100%", "scale(1)"]]
                        },
                        zoomOutClose: {
                            duration: this.options.fade || 180,
                            css: [["0%", "scale(1)"], ["100%", "scale(1.1)"]]
                        },
                        moveOpen: {
                            duration: this.options.fade || 180,
                            positions: {top: {"0%": -12}, right: {"0%": 12}, bottom: {"0%": 12}, left: {"0%": -12}},
                            css: [["0%", "translate%XY(%Vpx)"], ["100%", "translate%XY(0px)"]]
                        },
                        moveClose: {
                            duration: this.options.fade || 180,
                            timing: "ease-in",
                            positions: {
                                top: {"100%": -12},
                                right: {"100%": 12},
                                bottom: {"100%": 12},
                                left: {"100%": -12}
                            },
                            css: [["0%", "translate%XY(0px)"], ["100%", "translate%XY(%Vpx)"]]
                        },
                        slideOpen: {
                            duration: 400,
                            positions: {top: {"0%": -400}, right: {"0%": 400}, bottom: {"0%": 400}, left: {"0%": -400}},
                            css: [["0%", "translate%XY(%Vpx)"], ["100%", "translate%XY(0px)"]]
                        },
                        slideClose: {
                            duration: 400,
                            timing: "ease-in",
                            positions: {
                                top: {"100%": -400},
                                right: {"100%": 400},
                                bottom: {"100%": 400},
                                left: {"100%": -400}
                            },
                            css: [["0%", "translate%XY(0px)"], ["100%", "translate%XY(%Vpx)"]]
                        },
                        flipOpen: {
                            duration: 600,
                            css: [["0%", "perspective(400px) rotateX(90deg)"], ["40%", "perspective(400px) rotateX(-15deg)"], ["70%", "perspective(400px) rotateX(15deg)"], ["100%", "perspective(400px) rotateX(0deg)"]]
                        },
                        flipClose: {
                            duration: this.options.fade || 300,
                            css: [["0%", "perspective(400px) rotateX(0deg)"], ["100%", "perspective(400px) rotateX(90deg)"]]
                        },
                        tada: {
                            duration: 800,
                            css: [["0%", "scale(1)"], ["10%, 20%", "scale(0.9) rotate(-3deg)"], ["30%, 50%, 70%, 90%", "scale(1.1) rotate(3deg)"], ["40%, 60%, 80%", "scale(1.1) rotate(-3deg)"], ["100%", "scale(1) rotate(0)"]]
                        }
                    };
                    jQuery.each(["pulse", "tada"], function (i, e) {
                        t[e + "Open"] = t[e + "Close"] = t[e]
                    });
                    var i = function (i, e) {
                        return keyframe_css = "@" + this.prefix + "keyframes jBox-animation-" + this.options.animation[i] + "-" + i + (e ? "-" + e : "") + " {", jQuery.each(t[this.options.animation[i]].css, function (s, o) {
                            var n = e ? o[1].replace("%XY", this._getXY(e).toUpperCase()) : o[1];
                            t[this.options.animation[i]].positions && (n = n.replace("%V", t[this.options.animation[i]].positions[e][o[0]])), keyframe_css += o[0] + " {" + this.prefix + "transform:" + n + ";}"
                        }.bind(this)), keyframe_css += "}", keyframe_css += ".jBox-animation-" + this.options.animation[i] + "-" + i + (e ? "-" + e : "") + " {", keyframe_css += this.prefix + "animation-duration: " + t[this.options.animation[i]].duration + "ms;", keyframe_css += this.prefix + "animation-name: jBox-animation-" + this.options.animation[i] + "-" + i + (e ? "-" + e : "") + ";", keyframe_css += t[this.options.animation[i]].timing ? this.prefix + "animation-timing-function: " + t[this.options.animation[i]].timing + ";" : "", keyframe_css += "}", keyframe_css
                    }.bind(this), e = "";
                    jQuery.each(["open", "close"], function (s, o) {
                        return this.options.animation[o] && t[this.options.animation[o]] && ("close" != o || this.options.fade) ? void(t[this.options.animation[o]].positions ? jQuery.each(["top", "right", "bottom", "left"], function (t, s) {
                                    e += i(o, s)
                                }) : e += i(o)) : ""
                    }.bind(this)), jQuery("<style/>").append(e).appendTo(jQuery("head"))
                }
            }, this._blockBodyClick = function () {
                this.blockBodyClick = !0, setTimeout(function () {
                    this.blockBodyClick = !1
                }.bind(this), 10)
            }, this.options.animation && this._generateCSS(), this._animate = function (t) {
                if (!this.IE8) {
                    if (t || (t = this.isOpen ? "open" : "close"), !this.options.fade && "close" == t)return null;
                    var i = this.options.animation[t + "Direction"] || ("center" != this.align ? this.align : this.options.attributes.x);
                    this.flipped && this._getXY(i) == this._getXY(this.align) && (i = this._getOpp(i));
                    var e = "jBox-animation-" + this.options.animation[t] + "-" + t + " jBox-animation-" + this.options.animation[t] + "-" + t + "-" + i;
                    this.wrapper.addClass(e);
                    var s = 1e3 * parseFloat(this.wrapper.css(this.prefix + "animation-duration"));
                    "close" == t && (s = Math.min(s, this.options.fade)), setTimeout(function () {
                        this.wrapper.removeClass(e)
                    }.bind(this), s)
                }
            }, this._abortAnimation = function () {
                if (!this.IE8) {
                    var t = "jBox-animation", i = this.wrapper.attr("class").split(" ").filter(function (i) {
                        return 0 !== i.lastIndexOf(t, 0)
                    });
                    this.wrapper.attr("class", i.join(" "))
                }
            }, this._adjustPosition = function () {
                if (!this.options.adjustPosition)return null;
                this.positionAdjusted && (this.wrapper.css(this.pos), this.pointer && this.wrapper.css("padding", 0).css("padding-" + this._getOpp(this.outside), this.pointer.dimensions[this._getXY(this.outside)]).removeClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).addClass("jBox-pointerPosition-" + this.pointer.position), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + this._getOpp(this.outside)).css(this.pointer.margin), this.positionAdjusted = !1, this.flipped = !1);
                var t = jQuery(window), i = {
                    x: t.width(),
                    y: t.height(),
                    top: this.options.fixed && this.target.data("jBox-fixed") ? 0 : t.scrollTop(),
                    left: this.options.fixed && this.target.data("jBox-fixed") ? 0 : t.scrollLeft()
                };
                i.bottom = i.top + i.y, i.right = i.left + i.x;
                var e = i.top > this.pos.top - (this.options.adjustDistance.top || 0), s = i.right < this.pos.left + this.dimensions.x + (this.options.adjustDistance.right || 0), o = i.bottom < this.pos.top + this.dimensions.y + (this.options.adjustDistance.bottom || 0), n = i.left > this.pos.left - (this.options.adjustDistance.left || 0), a = n ? "left" : s ? "right" : null, r = e ? "top" : o ? "bottom" : null, h = a || r;
                if (h) {
                    "move" == this.options.adjustPosition || a != this.outside && r != this.outside || ("mouse" == this.target && (this.outside = "right"), ("top" == this.outside || "left" == this.outside ? i[this._getXY(this.outside)] - (this.targetDimensions[this._getTL(this.outside)] - i[this._getTL(this.outside)]) - this.targetDimensions[this._getXY(this.outside)] + this.options.offset[this._getXY(this.outside)] : this.targetDimensions[this._getTL(this.outside)] - i[this._getTL(this.outside)] - this.options.offset[this._getXY(this.outside)]) > this.dimensions[this._getXY(this.outside)] + parseInt(this.options.adjustDistance[this._getOpp(this.outside)]) && (this.wrapper.css(this._getTL(this.outside), this.pos[this._getTL(this.outside)] + (this.dimensions[this._getXY(this.outside)] + this.options.offset[this._getXY(this.outside)] * ("top" == this.outside || "left" == this.outside ? -2 : 2) + this.targetDimensions[this._getXY(this.outside)]) * ("top" == this.outside || "left" == this.outside ? 1 : -1)), this.pointer && this.wrapper.removeClass("jBox-pointerPosition-" + this.pointer.position).addClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).css("padding", 0).css("padding-" + this.outside, this.pointer.dimensions[this._getXY(this.outside)]), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + this.outside), this.positionAdjusted = !0, this.flipped = !0));
                    var l = "x" == this._getXY(this.outside) ? r : a;
                    if (this.pointer && "flip" != this.options.adjustPosition && this._getXY(l) == this._getOpp(this._getXY(this.outside))) {
                        if ("center" == this.pointer.align)var d = this.dimensions[this._getXY(l)] / 2 - this.pointer.dimensions[this._getOpp(this.pointer.xy)] / 2 - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) * (l != this._getTL(l) ? -1 : 1); else var d = l == this.pointer.alignAttribute ? parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) : this.dimensions[this._getXY(l)] - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - this.pointer.dimensions[this._getXY(l)];
                        spaceDiff = l == this._getTL(l) ? i[this._getTL(l)] - this.pos[this._getTL(l)] + this.options.adjustDistance[l] : (i[this._getOpp(this._getTL(l))] - this.pos[this._getTL(l)] - this.options.adjustDistance[l] - this.dimensions[this._getXY(l)]) * -1, l == this._getOpp(this._getTL(l)) && this.pos[this._getTL(l)] - spaceDiff < i[this._getTL(l)] + this.options.adjustDistance[this._getTL(l)] && (spaceDiff -= i[this._getTL(l)] + this.options.adjustDistance[this._getTL(l)] - (this.pos[this._getTL(l)] - spaceDiff)), spaceDiff = Math.min(spaceDiff, d), spaceDiff <= d && spaceDiff > 0 && (this.pointer.element.css("margin-" + this.pointer.alignAttribute, parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - spaceDiff * (l != this.pointer.alignAttribute ? -1 : 1)), this.wrapper.css(this._getTL(l), this.pos[this._getTL(l)] + spaceDiff * (l != this._getTL(l) ? -1 : 1)), this.positionAdjusted = !0)
                    }
                }
            }, this.options.onInit.bind(this)(), this.options._onInit && this.options._onInit.bind(this)(), this
        }

        jBox.prototype.attach = function (t, i) {
            return t || (t = jQuery(this.options.attach.selector || this.options.attach)), i || (i = this.options.trigger), t && t.length && jQuery.each(t, function (t, e) {
                e = jQuery(e), e.data("jBox-attached-" + this.id) || ("title" == this.options.getContent && void 0 != e.attr("title") && e.data("jBox-getContent", e.attr("title")).removeAttr("title"), this.attachedElements || (this.attachedElements = []), this.attachedElements.push(e[0]), e.on(i + ".jBox-attach-" + this.id, function (t) {
                    if (this.timer && clearTimeout(this.timer), "mouseenter" != i || !this.isOpen || this.source[0] != e[0]) {
                        if (this.isOpen && this.source && this.source[0] != e[0])var s = !0;
                        this.source = e, !this.options.target && (this.target = e), "click" == i && this.options.preventDefault && t.preventDefault(), this["click" != i || s ? "open" : "toggle"]()
                    }
                }.bind(this)), "mouseenter" == this.options.trigger && e.on("mouseleave", function (t) {
                    this.options.closeOnMouseleave && (t.relatedTarget == this.wrapper[0] || jQuery(t.relatedTarget).parents("#" + this.id).length) || this.close()
                }.bind(this)), e.data("jBox-attached-" + this.id, i), this.options._onAttach && this.options._onAttach.bind(this)(e))
            }.bind(this)), this
        }, jBox.prototype.detach = function (t) {
            return t || (t = this.attachedElements || []), t && t.length && jQuery.each(t, function (t, i) {
                i = jQuery(i), i.data("jBox-attached-" + this.id) && (i.off(i.data("jBox-attached-" + this.id) + ".jBox-attach-" + this.id), i.data("jBox-attached-" + this.id, null)), this.attachedElements = jQuery.grep(this.attachedElements, function (t) {
                    return t != i[0]
                })
            }.bind(this)), this
        }, jBox.prototype.setTitle = function (t, i) {
            var e = this.wrapper.height(), s = this.wrapper.width();
            return null == t || void 0 == t ? this : (!this.wrapper && this._create(), this.title || (this.titleContainer = jQuery("<div/>", {"class": "jBox-title"}), this.title = jQuery("<div/>").appendTo(this.titleContainer), this.wrapper.addClass("jBox-hasTitle"), ("title" == this.options.closeButton || this.options.closeButton === !0 && !this.options.overlay) && (this.wrapper.addClass("jBox-closeButton-title"), this.closeButton.appendTo(this.titleContainer)), this.titleContainer.insertBefore(this.content)), this.title.html(t), !i && this.options.repositionOnContent && (e != this.wrapper.height() || s != this.wrapper.width()) && this.position(), this)
        }, jBox.prototype.setContent = function (t, i) {
            if (null == t)return this;
            !this.wrapper && this._create();
            var e = this.wrapper.height(), s = this.wrapper.width(), o = jQuery("body").height(), n = jQuery("body").width();
            switch (this.content.children("[data-jbox-content-appended]").appendTo("body").css({display: "none"}), jQuery.type(t)) {
                case"string":
                    this.content.html(t);
                    break;
                case"object":
                    this.content.html(""), t.attr("data-jbox-content-appended", 1).appendTo(this.content).css({display: "block"})
            }
            var a = {x: n - jQuery("body").width(), y: o - jQuery("body").height()};
            return !i && this.options.repositionOnContent && (e != this.wrapper.height() || s != this.wrapper.width()) && this.position({adjustOffset: a}), this
        }, jBox.prototype.setDimensions = function (t, i, e) {
            !this.wrapper && this._create(), this.content.css(t, i), (void 0 == e || e) && this.position()
        }, jBox.prototype.setWidth = function (t, i) {
            this.setDimensions("width", t, i)
        }, jBox.prototype.setHeight = function (t, i) {
            this.setDimensions("height", t, i)
        }, jBox.prototype.position = function (t) {
            if (t || (t = {}), this.target = t.target || this.target || this.options.target || jQuery(window), this.dimensions = {
                    x: this.wrapper.outerWidth(),
                    y: this.wrapper.outerHeight()
                }, "mouse" != this.target) {
                if ("center" == this.options.position.x && "center" == this.options.position.y)return this.wrapper.css({
                    left: "50%",
                    top: "50%",
                    marginLeft: this.dimensions.x * -.5 + this.options.offset.x,
                    marginTop: this.dimensions.y * -.5 + this.options.offset.y
                }), this;
                var i = this.target.offset();
                !this.target.data("jBox-fixed") && this.target.data("jBox-fixed", this.target[0] != jQuery(window)[0] && ("fixed" == this.target.css("position") || this.target.parents().filter(function () {
                    return "fixed" == jQuery(this).css("position")
                }).length > 0) ? "fixed" : "static"), "fixed" == this.target.data("jBox-fixed") && this.options.fixed && (i.top = i.top - jQuery(window).scrollTop(), i.left = i.left - jQuery(window).scrollLeft()), this.targetDimensions = {
                    x: this.target.outerWidth(),
                    y: this.target.outerHeight(),
                    top: i ? i.top : 0,
                    left: i ? i.left : 0
                }, this.pos = {};
                var e = function (t) {
                    if (jQuery.inArray(this.options.position[t], ["top", "right", "bottom", "left", "center"]) == -1)return void(this.pos[this.options.attributes[t]] = this.options.position[t]);
                    var i = this.options.attributes[t] = "x" == t ? "left" : "top";
                    return this.pos[i] = this.targetDimensions[i], "center" == this.options.position[t] ? void(this.pos[i] += Math.ceil((this.targetDimensions[t] - this.dimensions[t]) / 2)) : (i != this.options.position[t] && (this.pos[i] += this.targetDimensions[t] - this.dimensions[t]), void((this.options.outside == t || "xy" == this.options.outside) && (this.pos[i] += this.dimensions[t] * (i != this.options.position[t] ? 1 : -1))))
                }.bind(this);
                if (e("x"), e("y"), this.options.pointer && "number" != jQuery.type(this.options.position.x) && "number" != jQuery.type(this.options.position.y)) {
                    var s = 0;
                    switch (this.pointer.align) {
                        case"center":
                            "center" != this.options.position[this._getOpp(this.options.outside)] && (s += this.dimensions[this._getOpp(this.options.outside)] / 2);
                            break;
                        default:
                            switch (this.options.position[this._getOpp(this.options.outside)]) {
                                case"center":
                                    s += (this.dimensions[this._getOpp(this.options.outside)] / 2 - this.pointer.dimensions[this._getOpp(this.options.outside)] / 2) * (this.pointer.align == this._getTL(this.pointer.align) ? 1 : -1);
                                    break;
                                default:
                                    s += this.pointer.align != this.options.position[this._getOpp(this.options.outside)] ? this.dimensions[this._getOpp(this.options.outside)] * (jQuery.inArray(this.pointer.align, ["top", "left"]) !== -1 ? 1 : -1) + this.pointer.dimensions[this._getOpp(this.options.outside)] / 2 * (jQuery.inArray(this.pointer.align, ["top", "left"]) !== -1 ? -1 : 1) : this.pointer.dimensions[this._getOpp(this.options.outside)] / 2 * (jQuery.inArray(this.pointer.align, ["top", "left"]) !== -1 ? 1 : -1)
                            }
                    }
                    s *= this.options.position[this._getOpp(this.options.outside)] == this.pointer.alignAttribute ? -1 : 1, s += this.pointer.offset * (this.pointer.align == this._getOpp(this._getTL(this.pointer.align)) ? 1 : -1), this.pos[this._getTL(this._getOpp(this.pointer.xy))] += s
                }
                return t.adjustOffset && t.adjustOffset.x && (this.pos[this.options.attributes.x] += parseInt(t.adjustOffset.x) * ("left" == this.options.attributes.x ? 1 : -1)), t.adjustOffset && t.adjustOffset.y && (this.pos[this.options.attributes.y] += parseInt(t.adjustOffset.y) * ("top" == this.options.attributes.y ? 1 : -1)), this.pos[this.options.attributes.x] += this.options.offset.x, this.pos[this.options.attributes.y] += this.options.offset.y, this.wrapper.css(this.pos), this._adjustPosition(), this
            }
        }, jBox.prototype.open = function (t) {
            if (t || (t = {}), this.isDestroyed)return !1;
            if (!this.wrapper && this._create(), this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled)return this;
            var i = function () {
                this.source && this.options.getTitle && (this.source.attr(this.options.getTitle) && this.setTitle(this.source.attr(this.options.getTitle)), !0), this.source && this.options.getContent && (this.source.data("jBox-getContent") ? this.setContent(this.source.data("jBox-getContent"), !0) : this.source.attr(this.options.getContent) ? this.setContent(this.source.attr(this.options.getContent), !0) : null), this.options.onOpen.bind(this)(), this.options._onOpen && this.options._onOpen.bind(this)(), (this.options.ajax && this.options.ajax.url && (!this.ajaxLoaded || this.options.ajax.reload) || t.ajax && t.ajax.url) && this.ajax(t.ajax || null), (!this.positionedOnOpen || this.options.repositionOnOpen) && this.position({target: t.target}) && (this.positionedOnOpen = !0), this.isClosing && this._abortAnimation(), this.isOpen || (this.isOpen = !0, this._attachEvents(), this.options.blockScroll && jQuery("body").addClass("jBox-blockScroll-" + this.id), this.options.overlay && this._addOverlay(), this.options.animation && !this.isClosing && this._animate("open"), this.options.fade ? this.wrapper.stop().animate({opacity: 1}, {
                        queue: !1,
                        duration: this.options.fade,
                        start: function () {
                            this.isOpening = !0, this.wrapper.css({display: "block"})
                        }.bind(this),
                        always: function () {
                            this.isOpening = !1
                        }.bind(this)
                    }) : this.wrapper.css({display: "block", opacity: 1}))
            }.bind(this);
            return !this.options.delayOpen || this.isOpen || this.isClosing || t.ignoreDelay ? i() : this.timer = setTimeout(i, this.options.delayOpen), this
        }, jBox.prototype.close = function (t) {
            if (t || (t = {}), this.isDestroyed)return !1;
            if (this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled)return this;
            var i = function () {
                this.options.onClose.bind(this)(), this.options._onClose && this.options._onClose.bind(this)(), this.isOpen && (this.isOpen = !1, this._detachEvents(), this.options.blockScroll && jQuery("body").removeClass("jBox-blockScroll-" + this.id), this.options.overlay && this._removeOverlay(), this.options.animation && !this.isOpening && this._animate("close"), this.options.fade ? this.wrapper.stop().animate({opacity: 0}, {
                        queue: !1,
                        duration: this.options.fade,
                        start: function () {
                            this.isClosing = !0
                        }.bind(this),
                        complete: function () {
                            this.wrapper.css({display: "none"}), this.options.onCloseComplete && this.options.onCloseComplete.bind(this)(), this.options._onCloseComplete && this.options._onCloseComplete.bind(this)()
                        }.bind(this),
                        always: function () {
                            this.isClosing = !1
                        }.bind(this)
                    }) : (this.wrapper.css({
                        display: "none",
                        opacity: 0
                    }), this.options._onCloseComplete && this.options._onCloseComplete.bind(this)()))
            }.bind(this);
            return t.ignoreDelay ? i() : this.timer = setTimeout(i, Math.max(this.options.delayClose, 10)), this
        }, jBox.prototype.toggle = function (t) {
            return this[this.isOpen ? "close" : "open"](t), this
        }, jBox.prototype.disable = function () {
            return this.isDisabled = !0, this
        }, jBox.prototype.enable = function () {
            return this.isDisabled = !1, this
        }, jBox.prototype.ajax = function (t) {
            t || (t = {}), this.options.ajax.getData && !t.data && this.source && void 0 != this.source.attr(this.options.ajax.getData) && (t.data = this.source.attr(this.options.ajax.getData) || "");
            var i = jQuery.extend(!0, {}, this.options.ajax);
            this.ajaxRequest && this.ajaxRequest.abort();
            var e = t.beforeSend || i.beforeSend || function () {
                }, s = t.complete || i.complete || function () {
                }, o = jQuery.extend(!0, i, t);
            return o.beforeSend = function () {
                o.spinner && (this.wrapper.addClass("jBox-loading"), this.spinner = jQuery(o.spinner !== !0 ? o.spinner : '<div class="jBox-spinner"></div>').appendTo(this.container)), e.bind(this)()
            }.bind(this), o.complete = function (t) {
                this.wrapper.removeClass("jBox-loading"), this.spinner && this.spinner.remove(), o.setContent && this.setContent(t.responseText), this.ajaxLoaded = !0, s.bind(this)(t)
            }.bind(this), this.ajaxRequest = jQuery.ajax(o), this
        }, jBox.prototype.audio = function (t) {
            if (t || (t = {}), jBox._audio || (jBox._audio = {}), !t.url || this.IE8)return this;
            if (!jBox._audio[t.url]) {
                var i = jQuery("<audio/>");
                jQuery("<source/>", {src: t.url + ".mp3"}).appendTo(i), jQuery("<source/>", {src: t.url + ".ogg"}).appendTo(i), jBox._audio[t.url] = i[0]
            }
            jBox._audio[t.url].volume = Math.min(void 0 != t.volume ? t.volume : (void 0 != this.options.volume ? this.options.volume : 100) / 100, 1), jBox._audio[t.url].pause();
            try {
                jBox._audio[t.url].currentTime = 0
            } catch (e) {
            }
            return jBox._audio[t.url].play(), this
        }, jBox.prototype.destroy = function () {
            return this.detach().close({ignoreDelay: !0}), this.wrapper && this.wrapper.remove(), this.isDestroyed = !0, this
        }, jBox._getUniqueID = function () {
            var t = 1;
            return function () {
                return t++
            }
        }(), jQuery.fn.jBox = function (t, i) {
            return t || (t = {}), i || (i = {}), new jBox(t, jQuery.extend(i, {attach: this}))
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var i = Array.prototype.slice.call(arguments, 1), e = this, s = function () {
            }, o = function () {
                return e.apply(this instanceof s && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
            };
            return s.prototype = this.prototype, o.prototype = new s, o
        }), module.exports = jBox
    }, 306: 199


});

