System.register(
  "chunks:///_virtual/BoostController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SocketManager.ts"],
  function (o) {
    var i, t, n, e, a, r, s, l, c, f, u, h, b;
    return {
      setters: [
        function (o) {
          (i = o.applyDecoratedDescriptor),
            (t = o.inheritsLoose),
            (n = o.initializerDefineProperty),
            (e = o.assertThisInitialized);
        },
        function (o) {
          (a = o.cclegacy),
            (r = o._decorator),
            (s = o.Label),
            (l = o.Vec3),
            (c = o.Node),
            (f = o.Color),
            (u = o.tween),
            (h = o.Component);
        },
        function (o) {
          b = o.SocketManager;
        },
      ],
      execute: function () {
        var p, g, d, L, v, w, y, m, C;
        a._RF.push({}, "56fbbewdwxJOIoAGHAh8WY0", "BoostController", void 0);
        var k = r.ccclass,
          B = r.property;
        o(
          "BoostController",
          ((p = k("BoostController")),
          (g = B(b)),
          (d = B(s)),
          p(
            ((w = i(
              (v = (function (o) {
                function i() {
                  for (
                    var i, t = arguments.length, a = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (i = o.call.apply(o, [this].concat(a)) || this),
                    n(i, "socketManager", w, e(i)),
                    n(i, "notificationLabel", y, e(i)),
                    n(i, "animationDuration", m, e(i)),
                    n(i, "moveUpDistance", C, e(i)),
                    (i.initialPosition = new l()),
                    i
                  );
                }
                t(i, o);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    this.node.on(
                      c.EventType.TOUCH_END,
                      this.onBoostClicked,
                      this
                    ),
                      this.notificationLabel
                        ? ((this.notificationLabel.node.active = !1),
                          (this.initialPosition =
                            this.notificationLabel.node.position.clone()))
                        : console.error(
                            "notificationLabel не назначен в BoostController."
                          );
                  }),
                  (a.onBoostClicked = function (o) {
                    if (this.socketManager) {
                      var i = this.socketManager.getCurrentEnergy();
                      if (this.socketManager.getCurrentBoosts() <= 0)
                        return (
                          this.showNotification("Бустеры кончились!"),
                          void console.log("No boosts left.")
                        );
                      if (i >= 300)
                        return (
                          this.showNotification("Слишком много энергии!"),
                          void console.log(
                            "Energy is 300 or more, boost not activated."
                          )
                        );
                      this.socketManager.activateBoost(),
                        this.showNotification("Энергия восстановлена!");
                    } else
                      console.warn(
                        "SocketManager is not assigned in BoostController."
                      );
                  }),
                  (a.showNotification = function (o) {
                    var i = this;
                    this.notificationLabel
                      ? ((this.notificationLabel.string = o),
                        (this.notificationLabel.node.active = !0),
                        (this.notificationLabel.color = new f(
                          255,
                          255,
                          255,
                          255
                        )),
                        this.notificationLabel.node.setPosition(
                          this.initialPosition.clone()
                        ),
                        u(this.notificationLabel)
                          .to(this.animationDuration, {
                            color: new f(255, 255, 255, 0),
                          })
                          .start(),
                        u(this.notificationLabel.node)
                          .by(this.animationDuration, {
                            position: new l(0, this.moveUpDistance, 0),
                          })
                          .call(function () {
                            (i.notificationLabel.node.active = !1),
                              (i.notificationLabel.color = new f(
                                255,
                                255,
                                255,
                                255
                              )),
                              i.notificationLabel.node.setPosition(
                                i.initialPosition.clone()
                              );
                          })
                          .start())
                      : console.warn(
                          "notificationLabel is not assigned in BoostController."
                        );
                  }),
                  i
                );
              })(h)).prototype,
              "socketManager",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (y = i(v.prototype, "notificationLabel", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = i(v.prototype, "animationDuration", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1.5;
              },
            })),
            (C = i(v.prototype, "moveUpDistance", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 50;
              },
            })),
            (L = v))
          ) || L)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BoosterModal.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BoosterScrollView.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    var t, n, i, o, r, a, s, l, u, c, p, h, b, m, d, g, f, v, S;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (r = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          (s = e.cclegacy),
            (l = e._decorator),
            (u = e.Label),
            (c = e.Node),
            (p = e.Sprite),
            (h = e.SpriteFrame),
            (b = e.Animation),
            (m = e.BlockInputEvents),
            (d = e.UITransform),
            (g = e.Button),
            (f = e.Component);
        },
        function (e) {
          v = e.BoosterScrollView;
        },
        function (e) {
          S = e.SocketManager;
        },
      ],
      execute: function () {
        var y,
          x,
          L,
          C,
          _,
          I,
          w,
          k,
          B,
          M,
          N,
          z,
          E,
          A,
          F,
          T,
          U,
          V,
          D,
          P,
          H,
          R,
          j,
          K,
          O,
          q,
          G,
          J,
          Q,
          Y,
          W;
        s._RF.push({}, "1eb8b6/gslMqpbC1Qen7aCJ", "BoosterModal", void 0);
        var X = l.ccclass,
          Z = l.property;
        e(
          "BoosterModal",
          ((y = X("BoosterModal")),
          (x = Z(u)),
          (L = Z(c)),
          (C = Z(p)),
          (_ = Z(u)),
          (I = Z(u)),
          (w = Z(u)),
          (k = Z(c)),
          (B = Z(u)),
          (M = Z(c)),
          (N = Z(p)),
          (z = Z(h)),
          (E = Z(h)),
          (A = Z([h])),
          (F = Z(v)),
          y(
            ((V = t(
              (U = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    i(t, "boosterCostLabel", V, o(t)),
                    i(t, "xMarkNode", D, o(t)),
                    i(t, "imageSprite", P, o(t)),
                    i(t, "titleLabel", H, o(t)),
                    i(t, "levelLabel", R, o(t)),
                    i(t, "incomeLabel", j, o(t)),
                    i(t, "boosterCostNode", K, o(t)),
                    i(t, "nextLevelIncomeLabel", O, o(t)),
                    i(t, "buttonNode", q, o(t)),
                    i(t, "buttonSprite", G, o(t)),
                    i(t, "payBusterSprite", J, o(t)),
                    i(t, "noEnoughSprite", Q, o(t)),
                    i(t, "boosterSprites", Y, o(t)),
                    i(t, "BoosterScrollView", W, o(t)),
                    (t.currentItem = null),
                    (t.animation = null),
                    (t.isAnimating = !1),
                    t
                  );
                }
                n(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    (this.animation = this.getComponent(b)),
                      this.animation ||
                        console.warn(
                          "Компонент Animation не найден на узле BoosterModal. Пожалуйста, добавьте его в редакторе."
                        );
                    this.getComponent(m) || this.addComponent(m);
                    this.xMarkNode &&
                      ((
                        this.xMarkNode.getComponent(d) ||
                        this.xMarkNode.addComponent(d)
                      ).setContentSize(100, 100),
                      (
                        this.xMarkNode.getComponent(g) ||
                        this.xMarkNode.addComponent(g)
                      ).node.on(g.EventType.CLICK, this.hide, this));
                    this.buttonNode &&
                      (
                        this.buttonNode.getComponent(g) ||
                        this.buttonNode.addComponent(g)
                      ).node.on(g.EventType.CLICK, this.onBuyUpgrade, this);
                    this.animation &&
                      (this.animation.on(
                        b.EventType.PLAY,
                        this.onAnimationPlay,
                        this
                      ),
                      this.animation.on(
                        b.EventType.FINISHED,
                        this.onAnimationFinished,
                        this
                      )),
                      S.instance
                        ? S.instance.on(
                            "coinsUpdatedExternally",
                            this.updateCoinsLabel,
                            this
                          )
                        : console.error(
                            "SocketManager.instance не доступен в BoosterModal."
                          ),
                      (this.node.active = !1);
                  }),
                  (s.onDestroy = function () {
                    S.instance &&
                      S.instance.off(
                        "coinsUpdatedExternally",
                        this.updateCoinsLabel,
                        this
                      );
                  }),
                  (s.onAnimationPlay = function () {
                    this.isAnimating = !0;
                  }),
                  (s.onAnimationFinished = function () {
                    (this.isAnimating = !1),
                      this.node.activeInHierarchy || (this.node.active = !1);
                  }),
                  (s.show = function (e) {
                    if (!this.isAnimating)
                      if (((this.currentItem = e), S.instance)) {
                        var t = S.instance.getCurrentCoins(),
                          n = this.boosterSprites.find(function (t) {
                            return t.name === e.upgrade_id.toString();
                          });
                        n &&
                          (this.imageSprite
                            ? (this.imageSprite.spriteFrame = n)
                            : console.error(
                                "imageSprite не назначен в BoosterModal."
                              )),
                          this.titleLabel && (this.titleLabel.string = e.name);
                        var i =
                          null !== e.next_level
                            ? e.next_level
                            : e.current_level;
                        this.levelLabel &&
                          (this.levelLabel.string = "Уровень " + i),
                          this.incomeLabel &&
                            (null !== e.next_level_cost
                              ? (this.incomeLabel.string =
                                  "Увеличить доход \nэтого бустера в час до:")
                              : (this.incomeLabel.string = "")),
                          null !== e.next_level_cost
                            ? ((this.boosterCostNode.active = !0),
                              this.nextLevelIncomeLabel &&
                                (10 === e.current_level
                                  ? (this.nextLevelIncomeLabel.string =
                                      "Максимальный уровень")
                                  : (this.nextLevelIncomeLabel.string = (
                                      e.next_level * e.income_increase_per_level
                                    ).toString())))
                            : (this.boosterCostNode.active = !1),
                          null !== e.next_level_cost
                            ? ((this.buttonNode.active = !0),
                              this.buttonSprite
                                ? t >= e.next_level_cost
                                  ? ((this.buttonSprite.spriteFrame =
                                      this.payBusterSprite),
                                    (this.boosterCostLabel.string =
                                      e.next_level_cost.toString()))
                                  : ((this.buttonSprite.spriteFrame =
                                      this.noEnoughSprite),
                                    (this.boosterCostLabel.string =
                                      "У вас максимальный уровень!"))
                                : console.error(
                                    "buttonSprite не назначен в BoosterModal."
                                  ))
                            : (this.buttonNode.active = !1),
                          (this.node.active = !0),
                          this.animation &&
                            this.animation.clips.length > 0 &&
                            this.animation.play("SlideIn");
                      } else
                        console.error("SocketManager.instance не доступен.");
                  }),
                  (s.hide = function () {
                    var e = this;
                    this.isAnimating ||
                      (this.animation && this.animation.clips.length > 0
                        ? (this.animation.play("SlideOut"),
                          this.animation.once(
                            b.EventType.FINISHED,
                            function () {
                              e.node.active = !1;
                            },
                            this
                          ))
                        : (this.node.active = !1));
                  }),
                  (s.onBuyUpgrade = (function () {
                    var e = r(
                      a().mark(function e() {
                        var t, n, i, o, r, s;
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.currentItem) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  if (S.instance) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "SocketManager.instance не доступен."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 5:
                                  if (
                                    !(
                                      (t = S.instance.getCurrentCoins()) >=
                                      this.currentItem.next_level_cost
                                    )
                                  ) {
                                    e.next = 37;
                                    break;
                                  }
                                  return (
                                    (n = S.instance.getUserId()),
                                    (i = this.currentItem.upgrade_id),
                                    (e.prev = 9),
                                    (e.next = 12),
                                    fetch(
                                      "https://misapat.ru/api/upgrades/purchase?userId=" +
                                        n +
                                        "&upgradeId=" +
                                        i,
                                      { method: "POST" }
                                    )
                                  );
                                case 12:
                                  return (o = e.sent), (e.next = 15), o.json();
                                case 15:
                                  if (((r = e.sent), !o.ok)) {
                                    e.next = 29;
                                    break;
                                  }
                                  if (
                                    (console.log(
                                      "Улучшение успешно куплено:",
                                      r
                                    ),
                                    (s = t - this.currentItem.next_level_cost),
                                    S.instance.updateCoins(s),
                                    this.hide(),
                                    !this.BoosterScrollView)
                                  ) {
                                    e.next = 26;
                                    break;
                                  }
                                  return (
                                    (e.next = 24),
                                    this.BoosterScrollView.fetchUpgradeItems()
                                  );
                                case 24:
                                  e.next = 27;
                                  break;
                                case 26:
                                  console.warn(
                                    "BoosterScrollView не назначен в BoosterModal."
                                  );
                                case 27:
                                  e.next = 30;
                                  break;
                                case 29:
                                  console.error(
                                    "Ошибка при покупке улучшения:",
                                    r
                                  );
                                case 30:
                                  e.next = 35;
                                  break;
                                case 32:
                                  (e.prev = 32),
                                    (e.t0 = e.catch(9)),
                                    console.error(
                                      "Ошибка сети при покупке улучшения:",
                                      e.t0
                                    );
                                case 35:
                                  e.next = 38;
                                  break;
                                case 37:
                                  console.log(
                                    "Недостаточно монет для покупки улучшения"
                                  );
                                case 38:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[9, 32]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.updateCoinsLabel = function (e) {
                    this.currentItem &&
                      null !== this.currentItem.next_level_cost &&
                      (e >= this.currentItem.next_level_cost
                        ? (this.buttonSprite.spriteFrame = this.payBusterSprite)
                        : (this.buttonSprite.spriteFrame =
                            this.noEnoughSprite));
                  }),
                  t
                );
              })(f)).prototype,
              "boosterCostLabel",
              [x],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (D = t(U.prototype, "xMarkNode", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = t(U.prototype, "imageSprite", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = t(U.prototype, "titleLabel", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = t(U.prototype, "levelLabel", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = t(U.prototype, "incomeLabel", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = t(U.prototype, "boosterCostNode", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = t(U.prototype, "nextLevelIncomeLabel", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = t(U.prototype, "buttonNode", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = t(U.prototype, "buttonSprite", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = t(U.prototype, "payBusterSprite", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = t(U.prototype, "noEnoughSprite", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = t(U.prototype, "boosterSprites", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (W = t(U.prototype, "BoosterScrollView", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = U))
          ) || T)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BoosterScrollView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SocketManager.ts",
    "./BoosterModal.ts",
  ],
  function (e) {
    var r, t, n, o, a, i, s, c, l, u, p, d, f, g, b, h, B, m, _, v, w;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (a = e.asyncToGenerator),
            (i = e.regeneratorRuntime),
            (s = e.createForOfIteratorHelperLoose);
        },
        function (e) {
          (c = e.cclegacy),
            (l = e._decorator),
            (u = e.Prefab),
            (p = e.Node),
            (d = e.SpriteFrame),
            (f = e.Component),
            (g = e.Layout),
            (b = e.instantiate),
            (h = e.Sprite),
            (B = e.Label),
            (m = e.Button),
            (_ = e.resources);
        },
        function (e) {
          v = e.SocketManager;
        },
        function (e) {
          w = e.BoosterModal;
        },
      ],
      execute: function () {
        var y, C, x, I, k, S, P, L, D, M, N, T, U;
        c._RF.push({}, "9bf4cPDFfRCioh+5OwoOEFs", "BoosterScrollView", void 0);
        var z = l.ccclass,
          F = l.property;
        e(
          "BoosterScrollView",
          ((y = z("BoosterScrollView")),
          (C = F(u)),
          (x = F(u)),
          (I = F(p)),
          (k = F([d])),
          (S = F(w)),
          y(
            ((D = r(
              (L = (function (e) {
                function r() {
                  for (
                    var r, t = arguments.length, a = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    a[i] = arguments[i];
                  return (
                    (r = e.call.apply(e, [this].concat(a)) || this),
                    n(r, "boosterBannerPrefab", D, o(r)),
                    n(r, "boosterBannerMaxLevelPrefab", M, o(r)),
                    n(r, "scrollContent", N, o(r)),
                    n(r, "boosterSprites", T, o(r)),
                    (r.boosterSpritesDict = {}),
                    (r.userId = null),
                    n(r, "boosterModal", U, o(r)),
                    r
                  );
                }
                t(r, e);
                var c = r.prototype;
                return (
                  (c.onLoad = function () {
                    this.initializeBoosterSpritesDict(),
                      this.initializeUserId();
                  }),
                  (c.start = function () {
                    var e = this;
                    this.scheduleOnce(function () {
                      e.fetchUpgradeItems();
                    }, 0.1),
                      this.logAvailableBoosters();
                  }),
                  (c.initializeBoosterSpritesDict = function () {
                    var e = this;
                    this.boosterSprites.forEach(function (r) {
                      var t = parseInt(r.name);
                      isNaN(t)
                        ? console.warn(
                            "Имя спрайта '" +
                              r.name +
                              "' не является валидным upgrade_id"
                          )
                        : (e.boosterSpritesDict[t] = r);
                    });
                  }),
                  (c.initializeUserId = function () {
                    v.instance && v.instance.getUserId()
                      ? (this.userId = v.instance.getUserId())
                      : ((this.userId = 422840434),
                        console.warn(
                          "SocketManager недоступен или не инициализирован. Используется моковый userId: " +
                            this.userId
                        ));
                  }),
                  (c.fetchUpgradeItems = (function () {
                    var e = a(
                      i().mark(function e() {
                        var r, t;
                        return i().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((e.prev = 0), this.userId)) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (
                                    console.error("userId не инициализирован."),
                                    e.abrupt("return")
                                  );
                                case 4:
                                  return (
                                    (e.next = 6),
                                    fetch(
                                      "https://misapat.ru/api/upgrades?userId=" +
                                        this.userId
                                    )
                                  );
                                case 6:
                                  if ((r = e.sent).ok) {
                                    e.next = 9;
                                    break;
                                  }
                                  throw new Error(
                                    "HTTP error! статус: " + r.status
                                  );
                                case 9:
                                  return (e.next = 11), r.json();
                                case 11:
                                  (t = e.sent),
                                    this.populateScrollView(t),
                                    (e.next = 18);
                                  break;
                                case 15:
                                  (e.prev = 15),
                                    (e.t0 = e.catch(0)),
                                    console.error(
                                      "Не удалось получить улучшения:",
                                      e.t0
                                    );
                                case 18:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 15]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (c.populateScrollView = (function () {
                    var e = a(
                      i().mark(function e(r) {
                        var t, n, o, a, c, l, u;
                        return i().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.scrollContent.removeAllChildren(),
                                    (n = s(r));
                                case 2:
                                  if ((o = n()).done) {
                                    e.next = 12;
                                    break;
                                  }
                                  return (
                                    (a = o.value),
                                    (c = null === a.next_level),
                                    (l = c
                                      ? this.boosterBannerMaxLevelPrefab
                                      : this.boosterBannerPrefab),
                                    (u = b(l)),
                                    (e.next = 9),
                                    this.setupBoosterBanner(u, a, c)
                                  );
                                case 9:
                                  this.scrollContent.addChild(u);
                                case 10:
                                  e.next = 2;
                                  break;
                                case 12:
                                  null ==
                                    (t = this.scrollContent.getComponent(g)) ||
                                    t.updateLayout();
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (r) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (c.setupBoosterBanner = (function () {
                    var e = a(
                      i().mark(function e(r, t, n) {
                        var o,
                          a,
                          s,
                          c,
                          l,
                          u,
                          d,
                          f,
                          g,
                          b,
                          _,
                          v,
                          w,
                          y,
                          C,
                          x,
                          I,
                          k,
                          S,
                          P,
                          L = this;
                        return i().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (o = r.getChildByName("Image"))
                                    ? ((a = o.getComponent(h)),
                                      (s =
                                        this.boosterSpritesDict[t.upgrade_id]),
                                      a && s
                                        ? (a.spriteFrame = s)
                                        : (console.warn(
                                            "Не удалось установить спрайт бустера из словаря для upgrade_id: " +
                                              t.upgrade_id
                                          ),
                                          console.warn(
                                            "Доступные ключи в boosterSpritesDict: " +
                                              Object.keys(
                                                this.boosterSpritesDict
                                              ).join(", ")
                                          ),
                                          (c = this.boosterSpritesDict[0]) &&
                                            (a.spriteFrame = c)))
                                    : console.warn(
                                        "Не найден узел Image в BoosterBanner Prefab для upgrade_id: " +
                                          t.upgrade_id
                                      ),
                                    (l = r.getChildByName("Title"))
                                      ? (u = l.getComponent(B))
                                        ? (u.string = t.name)
                                        : console.warn(
                                            "Компонент Label не найден на узле Title в BoosterBanner Prefab для upgrade_id: " +
                                              t.upgrade_id
                                          )
                                      : console.warn(
                                          "Не найден узел Title в BoosterBanner Prefab для upgrade_id: " +
                                            t.upgrade_id
                                        ),
                                    (d = r.getChildByName("Level"))
                                      ? (f = d.getComponent(B))
                                        ? ((g = t.current_level),
                                          (f.string = "Уровень " + g))
                                        : console.warn(
                                            "Компонент Label не найден на узле Level в BoosterBanner Prefab для upgrade_id: " +
                                              t.upgrade_id
                                          )
                                      : console.warn(
                                          "Не найден узел Level в BoosterBanner Prefab для upgrade_id: " +
                                            t.upgrade_id
                                        ),
                                    n
                                      ? (S = r.getChildByName("Income")) &&
                                        (P = S.getComponent(B)) &&
                                        (P.string =
                                          t.current_level *
                                            t.income_increase_per_level +
                                          " (max)")
                                      : ((b = r.getChildByName("coin"))
                                          ? (_ = b.getChildByName("Price"))
                                            ? (v = _.getComponent(B))
                                              ? ((w =
                                                  t.next_level_cost.toString()),
                                                (v.string = w))
                                              : console.warn(
                                                  "Компонент Label не найден на узле Price в BoosterBanner Prefab для upgrade_id: " +
                                                    t.upgrade_id
                                                )
                                            : console.warn(
                                                "Не найден узел Price в узле coin в BoosterBanner Prefab для upgrade_id: " +
                                                  t.upgrade_id
                                              )
                                          : console.warn(
                                              "Не найден узел coin в BoosterBanner Prefab для upgrade_id: " +
                                                t.upgrade_id
                                            ),
                                        (y = r.getChildByName("Income"))
                                          ? (C = y.getComponent(B))
                                            ? ((x = (
                                                t.next_level *
                                                t.income_increase_per_level
                                              ).toLocaleString("ru-RU")),
                                              (C.string = x))
                                            : console.warn(
                                                "Компонент Label не найден на узле Income в BoosterBanner Prefab для upgrade_id: " +
                                                  t.upgrade_id
                                              )
                                          : console.warn(
                                              "Не найден узел Income в BoosterBanner Prefab для upgrade_id: " +
                                                t.upgrade_id
                                            ),
                                        (I = r.getChildByName("payButton"))
                                          ? (k = I.getComponent(m))
                                            ? (k.node.off(m.EventType.CLICK),
                                              k.node.on(
                                                m.EventType.CLICK,
                                                function () {
                                                  L.onBuyUpgrade(t);
                                                },
                                                this
                                              ))
                                            : console.warn(
                                                "Компонент Button не найден на узле payButton в BoosterBanner Prefab для upgrade_id: " +
                                                  t.upgrade_id
                                              )
                                          : console.warn(
                                              "Не найден узел payButton в BoosterBanner Prefab для upgrade_id: " +
                                                t.upgrade_id
                                            )),
                                    r.on(
                                      p.EventType.TOUCH_END,
                                      function () {
                                        L.onBannerClicked(t);
                                      },
                                      this
                                    );
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (r, t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (c.onBuyUpgrade = (function () {
                    var e = a(
                      i().mark(function e(r) {
                        var t, n, o, a, s;
                        return i().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (null !== r.next_level_cost) {
                                    e.next = 3;
                                    break;
                                  }
                                  return (
                                    console.log(
                                      "Бустер достиг максимального уровня, покупка невозможна."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 3:
                                  if (v.instance) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "SocketManager.instance не доступен."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 6:
                                  if (
                                    !(
                                      (t = v.instance.getCurrentCoins()) >=
                                      r.next_level_cost
                                    )
                                  ) {
                                    e.next = 32;
                                    break;
                                  }
                                  return (
                                    (e.prev = 8),
                                    (n = v.instance.getUserId()),
                                    (e.next = 12),
                                    fetch(
                                      "https://misapat.ru/api/upgrades/purchase?userId=" +
                                        n +
                                        "&upgradeId=" +
                                        r.upgrade_id,
                                      { method: "POST" }
                                    )
                                  );
                                case 12:
                                  return (o = e.sent), (e.next = 15), o.json();
                                case 15:
                                  if (((a = e.sent), !o.ok)) {
                                    e.next = 24;
                                    break;
                                  }
                                  return (
                                    console.log(
                                      "Улучшение успешно куплено:",
                                      a
                                    ),
                                    (s = t - r.next_level_cost),
                                    v.instance.updateCoins(s),
                                    (e.next = 22),
                                    this.fetchUpgradeItems()
                                  );
                                case 22:
                                  e.next = 25;
                                  break;
                                case 24:
                                  console.error(
                                    "Ошибка при покупке улучшения:",
                                    a
                                  );
                                case 25:
                                  e.next = 30;
                                  break;
                                case 27:
                                  (e.prev = 27),
                                    (e.t0 = e.catch(8)),
                                    console.error(
                                      "Ошибка сети при покупке улучшения:",
                                      e.t0
                                    );
                                case 30:
                                  e.next = 33;
                                  break;
                                case 32:
                                  console.log(
                                    "Недостаточно монет для покупки улучшения"
                                  );
                                case 33:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[8, 27]]
                        );
                      })
                    );
                    return function (r) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (c.onBannerClicked = function (e) {
                    this.boosterModal
                      ? this.boosterModal.show(e)
                      : console.warn(
                          "Модальное окно не назначено в BoosterScrollView."
                        );
                  }),
                  (c.logAvailableBoosters = (function () {
                    var e = a(
                      i().mark(function e() {
                        return i().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                _.loadDir(
                                  "images/backgrounds/boosters",
                                  d,
                                  function (e, r) {
                                    e &&
                                      console.error(
                                        "Ошибка загрузки директории бустеров:",
                                        e
                                      );
                                  }
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  r
                );
              })(f)).prototype,
              "boosterBannerPrefab",
              [C],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (M = r(L.prototype, "boosterBannerMaxLevelPrefab", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = r(L.prototype, "scrollContent", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = r(L.prototype, "boosterSprites", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (U = r(L.prototype, "boosterModal", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = L))
          ) || P)
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DailyCardsModal.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (o) {
    var e, l, t, n, r, a, i, c, d, s, u;
    return {
      setters: [
        function (o) {
          (e = o.applyDecoratedDescriptor),
            (l = o.inheritsLoose),
            (t = o.initializerDefineProperty),
            (n = o.assertThisInitialized);
        },
        function (o) {
          (r = o.cclegacy),
            (a = o._decorator),
            (i = o.Button),
            (c = o.ScrollView),
            (d = o.Prefab),
            (s = o.instantiate),
            (u = o.Component);
        },
      ],
      execute: function () {
        var f, p, h, y, C, v, b, M, m, w, g;
        r._RF.push({}, "7c18dlYu5RF5LQCQdfUNYsp", "DailyCardsModal", void 0);
        var B = a.ccclass,
          D = a.property;
        o(
          "DailyCardsModal",
          ((f = B("DailyCardsModal")),
          (p = D(i)),
          (h = D(c)),
          (y = D(d)),
          (C = D(d)),
          f(
            ((M = e(
              (b = (function (o) {
                function e() {
                  for (
                    var e, l = arguments.length, r = new Array(l), a = 0;
                    a < l;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = o.call.apply(o, [this].concat(r)) || this),
                    t(e, "closeButton", M, n(e)),
                    t(e, "modalScrollView", m, n(e)),
                    t(e, "unlockedModalCardPrefab", w, n(e)),
                    t(e, "lockedModalCardPrefab", g, n(e)),
                    e
                  );
                }
                l(e, o);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    (this.node.active = !1),
                      this.closeButton
                        ? (this.closeButton.node.on(
                            i.EventType.CLICK,
                            this.hideModal,
                            this
                          ),
                          console.log(
                            "Назначен обработчик клика на closeButton."
                          ))
                        : console.warn(
                            "closeButton не назначен в DailyCardsModal."
                          );
                  }),
                  (r.showModal = function (o) {
                    var e = this;
                    if (
                      ((this.node.active = !0),
                      console.log("Модальное окно показано."),
                      this.modalScrollView && this.modalScrollView.content)
                    ) {
                      var l = this.modalScrollView.content;
                      l.removeAllChildren(),
                        o.forEach(function (o) {
                          var t = null;
                          if (
                            (t = o.opened
                              ? e.unlockedModalCardPrefab
                              : e.lockedModalCardPrefab)
                          ) {
                            var n = s(t);
                            (n.parent = l), (n.active = !0);
                            var r =
                              n.getComponent("UnlockedModalEverydayCardItem") ||
                              n.getComponent("LockedModalEverydayCardItem");
                            r
                              ? (r.setCardData(o),
                                console.log(
                                  "Карточка дня " +
                                    o.day +
                                    " добавлена в модальное окно."
                                ))
                              : console.warn(
                                  "Компонент карточки не найден на инстанцированном префабе."
                                );
                          } else console.error("Префаб для инстанцирования не назначен.");
                        }),
                        this.modalScrollView.scrollToTop(0, !1);
                    } else
                      console.error(
                        "modalScrollView или его content не назначены в DailyCardsModal."
                      );
                  }),
                  (r.hideModal = function () {
                    (this.node.active = !1),
                      console.log("Модальное окно скрыто.");
                  }),
                  (r.onDestroy = function () {
                    this.closeButton &&
                      (this.closeButton.node.off(
                        i.EventType.CLICK,
                        this.hideModal,
                        this
                      ),
                      console.log("Удален обработчик клика с closeButton."));
                  }),
                  e
                );
              })(u)).prototype,
              "closeButton",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (m = e(b.prototype, "modalScrollView", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = e(b.prototype, "unlockedModalCardPrefab", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = e(b.prototype, "lockedModalCardPrefab", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = b))
          ) || v)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DailyCardsPage.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SocketManager.ts",
    "./DayCard.ts",
    "./DailyCardsModal.ts",
  ],
  function (e) {
    var r, a, t, n, i, o, l, s, d, c, u, y, f, p, C, h;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (a = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (n = e.assertThisInitialized),
            (i = e.asyncToGenerator),
            (o = e.regeneratorRuntime);
        },
        function (e) {
          (l = e.cclegacy),
            (s = e._decorator),
            (d = e.ScrollView),
            (c = e.Prefab),
            (u = e.instantiate),
            (y = e.Node),
            (f = e.Component);
        },
        function (e) {
          p = e.SocketManager;
        },
        function (e) {
          C = e.DayCard;
        },
        function (e) {
          h = e.DailyCardsModal;
        },
      ],
      execute: function () {
        var b, g, v, w, k, m, D, P, S, x, M, E, I, U, z, A, L;
        l._RF.push({}, "a3499p6cPRCUJJIwp3y1e/G", "DailyCardsPage", void 0);
        var T = s.ccclass,
          V = s.property;
        e(
          "DailyCardsPage",
          ((b = T("DailyCardsPage")),
          (g = V(d)),
          (v = V(c)),
          (w = V(c)),
          (k = V(c)),
          (m = V(String)),
          (D = V(String)),
          (P = V(h)),
          b(
            ((M = r(
              (x = (function (e) {
                function r() {
                  for (
                    var r, a = arguments.length, i = new Array(a), o = 0;
                    o < a;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (r = e.call.apply(e, [this].concat(i)) || this),
                    t(r, "dailyCardsScrollView", M, n(r)),
                    t(r, "openedEverydayCardPrefab", E, n(r)),
                    t(r, "unlockedEverydayCardPrefab", I, n(r)),
                    t(r, "lockedEverydayCardPrefab", U, n(r)),
                    t(r, "dailyCardsApiUrl", z, n(r)),
                    t(r, "dayNumberPrefix", A, n(r)),
                    t(r, "dailyCardsModal", L, n(r)),
                    (r.dailyCardsList = []),
                    r
                  );
                }
                a(r, e);
                var l = r.prototype;
                return (
                  (l.start = function () {
                    p.instance
                      ? p.instance.getUserId()
                        ? this.fetchDailyCards()
                        : console.error("userId не установлен в SocketManager.")
                      : console.error("SocketManager не инициализирован.");
                  }),
                  (l.fetchDailyCards = (function () {
                    var e = i(
                      o().mark(function e() {
                        var r, a, t;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((r = p.instance.getUserId())) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "userId не установлен в SocketManager."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 4:
                                  return (
                                    (e.prev = 4),
                                    (e.next = 7),
                                    fetch(
                                      this.dailyCardsApiUrl + "?userId=" + r
                                    )
                                  );
                                case 7:
                                  if ((a = e.sent).ok) {
                                    e.next = 13;
                                    break;
                                  }
                                  if (404 !== a.status) {
                                    e.next = 12;
                                    break;
                                  }
                                  return (
                                    console.warn(
                                      "Карточки дня пока недоступны."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 12:
                                  throw new Error(
                                    "Network response was not ok"
                                  );
                                case 13:
                                  return (e.next = 15), a.json();
                                case 15:
                                  (t = e.sent),
                                    console.log("Fetched daily cards data:", t),
                                    t &&
                                      t.cards &&
                                      ((this.dailyCardsList = t.cards),
                                      this.populateDailyCardsList(t.cards)),
                                    this.dailyCardsScrollView &&
                                      this.dailyCardsScrollView.scrollToLeft(
                                        0,
                                        !1
                                      ),
                                    (e.next = 24);
                                  break;
                                case 21:
                                  (e.prev = 21),
                                    (e.t0 = e.catch(4)),
                                    console.error(
                                      "Ошибка при загрузке карточек дня:",
                                      e.t0
                                    );
                                case 24:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[4, 21]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (l.isCardAvailable = function (e, r) {
                    if (!r) return 1 === e.day;
                    if (e.day === r.day + 1) {
                      if (r.timestamp) {
                        var a = new Date(r.timestamp).getTime();
                        return (new Date().getTime() - a) / 36e5 >= 24;
                      }
                      return !1;
                    }
                    return !1;
                  }),
                  (l.populateDailyCardsList = function (e) {
                    var r = this;
                    if (this.dailyCardsScrollView) {
                      var a = this.dailyCardsScrollView.content;
                      if (a) {
                        console.log(
                          "Populating daily cards list with",
                          e.length,
                          "cards."
                        ),
                          a.removeAllChildren();
                        var t = e.sort(function (e, r) {
                            return e.day - r.day;
                          }),
                          n = t.filter(function (e) {
                            return e.opened;
                          }),
                          i = n.length > 0 ? n[n.length - 1] : null;
                        t.forEach(function (e) {
                          console.log("Adding daily card " + e.day + ":", e);
                          var t = null;
                          if (
                            (t = e.opened
                              ? r.openedEverydayCardPrefab
                              : r.isCardAvailable(e, i)
                              ? r.unlockedEverydayCardPrefab
                              : r.lockedEverydayCardPrefab)
                          ) {
                            var n = u(t);
                            (n.parent = a), (n.active = !0);
                            var o = n.getComponent(C);
                            o
                              ? (o.setDayNumber(e.day, r.dayNumberPrefix),
                                o.setCardData(e),
                                console.log(
                                  "Установлен день " +
                                    e.day +
                                    " для карточки через DayCard компонент."
                                ))
                              : console.warn(
                                  "Компонент DayCard не найден на инстанцированном префабе."
                                ),
                              n.on(y.EventType.TOUCH_END, function () {
                                r.onDayCardClick(e);
                              }),
                              n.on("unlockCard", function (e) {
                                r.handleUnlockCard(e);
                              });
                          } else
                            console.error(
                              "Префаб для инстанцирования не назначен."
                            );
                        });
                      } else
                        console.error(
                          "dailyCardsScrollView.content не назначен."
                        );
                    } else console.error("dailyCardsScrollView не назначен.");
                  }),
                  (l.onDayCardClick = function (e) {
                    console.log("Карточка дня нажата:", e);
                    var r =
                      this.dailyCardsList
                        .filter(function (e) {
                          return e.opened;
                        })
                        .sort(function (e, r) {
                          return r.day - e.day;
                        })[0] || null;
                    this.isCardAvailable(e, r) || e.opened
                      ? this.dailyCardsModal
                        ? this.dailyCardsModal.showModal(this.dailyCardsList)
                        : console.error(
                            "DailyCardsModal не назначен в DailyCardsPage."
                          )
                      : console.warn("Карточка не доступна для открытия.");
                  }),
                  (l.handleUnlockCard = (function () {
                    var e = i(
                      o().mark(function e(r) {
                        var a, t, n;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((e.prev = 0), (a = p.instance.getUserId()))
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "userId не установлен в SocketManager."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 5:
                                  return (
                                    (e.next = 7),
                                    fetch(
                                      "https://misapat.ru/api/daily-cards/unlock",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          userId: a,
                                          day: r.day,
                                        }),
                                      }
                                    )
                                  );
                                case 7:
                                  return (t = e.sent), (e.next = 10), t.json();
                                case 10:
                                  (n = e.sent),
                                    t.ok
                                      ? (console.log(
                                          "Карточка дня " +
                                            r.day +
                                            " успешно разблокирована:",
                                          n
                                        ),
                                        this.fetchDailyCards())
                                      : console.error(
                                          "Ошибка при разблокировке карточки дня " +
                                            r.day +
                                            ":",
                                          n
                                        ),
                                    (e.next = 17);
                                  break;
                                case 14:
                                  (e.prev = 14),
                                    (e.t0 = e.catch(0)),
                                    console.error(
                                      "Ошибка сети при разблокировке карточки дня " +
                                        r.day +
                                        ":",
                                      e.t0
                                    );
                                case 17:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 14]]
                        );
                      })
                    );
                    return function (r) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  r
                );
              })(f)).prototype,
              "dailyCardsScrollView",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (E = r(x.prototype, "openedEverydayCardPrefab", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = r(x.prototype, "unlockedEverydayCardPrefab", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = r(x.prototype, "lockedEverydayCardPrefab", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = r(x.prototype, "dailyCardsApiUrl", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "https://misapat.ru/api/daily-cards";
              },
            })),
            (A = r(x.prototype, "dayNumberPrefix", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (L = r(x.prototype, "dailyCardsModal", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = x))
          ) || S)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DayCard.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    var e, a, r, n, i, o, l, c, u, s;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (a = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy),
            (o = t._decorator),
            (l = t.Label),
            (c = t.Sprite),
            (u = t.Button),
            (s = t.Component);
        },
      ],
      execute: function () {
        var d, h, p, b, y, f, g, k, m, L, w;
        i._RF.push({}, "527acgmahlEspt4o+8udeNL", "DayCard", void 0);
        var C = o.ccclass,
          D = o.property;
        t(
          "DayCard",
          ((d = C("DayCard")),
          (h = D(l)),
          (p = D(l)),
          (b = D(c)),
          (y = D(u)),
          d(
            ((k = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, a = arguments.length, i = new Array(a), o = 0;
                    o < a;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(i)) || this),
                    r(e, "dayLabel", k, n(e)),
                    r(e, "rewardLabel", m, n(e)),
                    r(e, "cardImage", L, n(e)),
                    r(e, "unlockButton", w, n(e)),
                    (e.cardData = null),
                    e
                  );
                }
                a(e, t);
                var i = e.prototype;
                return (
                  (i.setDayNumber = function (t, e) {
                    void 0 === e && (e = ""),
                      this.dayLabel
                        ? (this.dayLabel.string = "" + e + t)
                        : console.warn(
                            "dayLabel не назначен на компоненте DayCard."
                          );
                  }),
                  (i.setCardData = function (t) {
                    (this.cardData = t),
                      t.opened && t.card
                        ? (this.rewardLabel &&
                            (this.rewardLabel.string =
                              "Награда: " + t.card.reward_amount),
                          this.cardImage &&
                            t.card.image_url &&
                            (this.cardImage.spriteFrame =
                              this.cardImage.spriteFrame),
                          this.unlockButton &&
                            (this.unlockButton.node.active = !1))
                        : !t.opened && this.isCardAvailable(t)
                        ? (this.rewardLabel &&
                            (this.rewardLabel.string =
                              "Награда: " +
                              (t.card ? t.card.reward_amount : "?")),
                          this.unlockButton &&
                            ((this.unlockButton.node.active = !0),
                            this.unlockButton.node.on(
                              u.EventType.CLICK,
                              this.onUnlockClick,
                              this
                            )))
                        : (this.rewardLabel && (this.rewardLabel.string = ""),
                          this.unlockButton &&
                            (this.unlockButton.node.active = !1));
                  }),
                  (i.onUnlockClick = function () {
                    this.cardData &&
                      this.node.emit("unlockCard", this.cardData);
                  }),
                  (i.isCardAvailable = function (t) {
                    var e = new Date().getDate();
                    return t.day <= e && !t.opened;
                  }),
                  (i.onDestroy = function () {
                    this.unlockButton &&
                      this.unlockButton.node.off(
                        u.EventType.CLICK,
                        this.onUnlockClick,
                        this
                      );
                  }),
                  e
                );
              })(s)).prototype,
              "dayLabel",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (m = e(g.prototype, "rewardLabel", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(g.prototype, "cardImage", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = e(g.prototype, "unlockButton", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = g))
          ) || f)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FloatingText.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    var o, e, r, n, i, a, c, l, s, u, p;
    return {
      setters: [
        function (t) {
          (o = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy),
            (a = t._decorator),
            (c = t.Label),
            (l = t.Color),
            (s = t.tween),
            (u = t.Vec3),
            (p = t.Component);
        },
      ],
      execute: function () {
        var d, f, h, g;
        i._RF.push({}, "bd2afV6GjdEioGJ6Sb+apw4", "FloatingText", void 0);
        var b = a.ccclass,
          y = a.property;
        t(
          "FloatingText",
          b("FloatingText")(
            ((h = o(
              (f = (function (t) {
                function o() {
                  for (
                    var o, e = arguments.length, i = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    i[a] = arguments[a];
                  return (
                    (o = t.call.apply(t, [this].concat(i)) || this),
                    r(o, "duration", h, n(o)),
                    r(o, "moveUpDistance", g, n(o)),
                    o
                  );
                }
                return (
                  e(o, t),
                  (o.prototype.start = function () {
                    var t = this,
                      o =
                        this.getComponent(c) || this.getComponentInChildren(c);
                    o &&
                      ((o.color = new l(o.color.r, o.color.g, o.color.b, 255)),
                      s(o)
                        .to(this.duration, {
                          color: new l(o.color.r, o.color.g, o.color.b, 0),
                        })
                        .start(),
                      s(this.node)
                        .by(this.duration, {
                          position: new u(0, this.moveUpDistance, 0),
                        })
                        .call(function () {
                          t.node.destroy();
                        })
                        .start());
                  }),
                  o
                );
              })(p)).prototype,
              "duration",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 1.5;
                },
              }
            )),
            (g = o(f.prototype, "moveUpDistance", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 300;
              },
            })),
            (d = f))
          ) || d
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FriendsPage.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SocketManager.ts"],
  function (e) {
    var n, t, r, i, a, s, o, l, c, u, d, f, h, p;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (i = e.assertThisInitialized),
            (a = e.asyncToGenerator),
            (s = e.regeneratorRuntime);
        },
        function (e) {
          (o = e.cclegacy),
            (l = e._decorator),
            (c = e.ScrollView),
            (u = e.Prefab),
            (d = e.Label),
            (f = e.instantiate),
            (h = e.Component);
        },
        function (e) {
          p = e.SocketManager;
        },
      ],
      execute: function () {
        var b, g, m, F, v, L, w, y, I, k;
        o._RF.push({}, "829ce7RYglPV6kmQF/Wbmbm", "FriendsPage", void 0);
        var P = l.ccclass,
          z = l.property;
        e(
          "FriendsPage",
          ((b = P("FriendsPage")),
          (g = z(c)),
          (m = z(u)),
          (F = z(d)),
          b(
            ((w = n(
              (L = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, a = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (n = e.call.apply(e, [this].concat(a)) || this),
                    r(n, "scrollView", w, i(n)),
                    r(n, "friendItemPrefab", y, i(n)),
                    r(n, "totalFriendsLabel", I, i(n)),
                    r(n, "apiBaseUrl", k, i(n)),
                    (n.hasFetchedFriends = !1),
                    n
                  );
                }
                t(n, e);
                var o = n.prototype;
                return (
                  (o.start = function () {
                    if (!p.instance)
                      return (
                        console.error("SocketManager не инициализирован."),
                        void (this.totalFriendsLabel.string =
                          "Ошибка инициализации.")
                      );
                    p.instance.on(
                      "userInitialized",
                      this.onUserInitialized,
                      this
                    ),
                      p.instance.getUserId() &&
                        (this.fetchFriends(), (this.hasFetchedFriends = !0));
                  }),
                  (o.onDestroy = function () {
                    p.instance &&
                      p.instance.off(
                        "userInitialized",
                        this.onUserInitialized,
                        this
                      );
                  }),
                  (o.onUserInitialized = function () {
                    this.hasFetchedFriends ||
                      (this.fetchFriends(), (this.hasFetchedFriends = !0));
                  }),
                  (o.fetchFriends = (function () {
                    var e = a(
                      s().mark(function e() {
                        var n, t, r;
                        return s().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((n = p.instance.getUserId())) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "userId не установлен в SocketManager."
                                    ),
                                    (this.totalFriendsLabel.string =
                                      "Неизвестный пользователь."),
                                    e.abrupt("return")
                                  );
                                case 5:
                                  return (
                                    (e.prev = 5),
                                    (e.next = 8),
                                    fetch(this.apiBaseUrl + "/" + n)
                                  );
                                case 8:
                                  if ((t = e.sent).ok) {
                                    e.next = 14;
                                    break;
                                  }
                                  if (404 !== t.status) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    (this.totalFriendsLabel.string =
                                      "У тебя пока нет друзей"),
                                    e.abrupt("return")
                                  );
                                case 13:
                                  throw new Error(
                                    "Network response was not ok"
                                  );
                                case 14:
                                  return (e.next = 16), t.json();
                                case 16:
                                  (r = e.sent),
                                    console.log("Fetched friends:", r),
                                    (this.totalFriendsLabel.string =
                                      "У тебя " + r.length + " друзей"),
                                    this.populateFriendsList(r),
                                    (e.next = 26);
                                  break;
                                case 22:
                                  (e.prev = 22),
                                    (e.t0 = e.catch(5)),
                                    console.error(
                                      "Ошибка при загрузке списка друзей:",
                                      e.t0
                                    ),
                                    (this.totalFriendsLabel.string =
                                      "Не удалось загрузить список друзей.");
                                case 26:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[5, 22]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.populateFriendsList = function (e) {
                    var n = this,
                      t = this.scrollView.content;
                    console.log(
                      "Populating friends list with",
                      e.length,
                      "friends."
                    ),
                      t.removeAllChildren(),
                      e.forEach(function (e, r) {
                        console.log("Adding friend " + (r + 1) + ":", e);
                        var i = f(n.friendItemPrefab);
                        i.parent = t;
                        var a = i.getComponentsInChildren(d);
                        console.log(
                          "Found " +
                            a.length +
                            " Label components in FriendItem."
                        );
                        var s = null,
                          o = null,
                          l = null;
                        a.forEach(function (e) {
                          var n = e.node.name;
                          "UsernameLabel" === n
                            ? (s = e)
                            : "NumberLabel" === n
                            ? (o = e)
                            : "CoinsLabel" === n && (l = e);
                        }),
                          s && o && l
                            ? ((s.string = e.username),
                              (o.string = r + 1 + "."),
                              (l.string = n.formatCoins(e.coins)),
                              console.log(
                                "Set Username: " +
                                  e.username +
                                  ", Number: " +
                                  (r + 1) +
                                  ", Coins: " +
                                  e.coins
                              ))
                            : (console.warn(
                                "Не удалось найти один из Label компонентов в FriendItem"
                              ),
                              console.log(
                                "Найденные Label узлы:",
                                a.map(function (e) {
                                  return e.node.name;
                                })
                              ));
                      });
                  }),
                  (o.formatCoins = function (e) {
                    return e >= 1e6
                      ? Math.round(e / 1e6) + "M"
                      : Math.round(e).toLocaleString("ru-RU");
                  }),
                  n
                );
              })(h)).prototype,
              "scrollView",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (y = n(L.prototype, "friendItemPrefab", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = n(L.prototype, "totalFriendsLabel", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = n(L.prototype, "apiBaseUrl", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "https://misapat.ru/api/referrals";
              },
            })),
            (v = L))
          ) || v)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IncomeManager.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SocketManager.ts"],
  function (e) {
    var t, n, r, a, o, c, i, s, u, l, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (a = e.assertThisInitialized),
            (o = e.asyncToGenerator),
            (c = e.regeneratorRuntime);
        },
        function (e) {
          (i = e.cclegacy),
            (s = e._decorator),
            (u = e.Label),
            (l = e.Component);
        },
        function (e) {
          p = e.SocketManager;
        },
      ],
      execute: function () {
        var m, f, h, I, b;
        i._RF.push({}, "a3599luME5HILUcjWVa3vL6", "IncomeManager", void 0);
        var d = s.ccclass,
          g = s.property;
        e(
          "IncomeManager",
          ((m = d("IncomeManager")),
          (f = g(u)),
          m(
            ((b = t(
              (I = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), c = 0;
                    c < n;
                    c++
                  )
                    o[c] = arguments[c];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "incomeLabel", b, a(t)),
                    (t.apiUrl = "https://misapat.ru/api/upgrades"),
                    t
                  );
                }
                n(t, e);
                var i = t.prototype;
                return (
                  (i.start = function () {
                    if (this.incomeLabel)
                      return p.instance
                        ? void this.fetchIncomeData()
                        : (console.error("SocketManager не инициализирован."),
                          void this.updateIncomeLabel("+ 0 доход в час"));
                    console.error("incomeLabel не назначен в IncomeManager.");
                  }),
                  (i.fetchIncomeData = (function () {
                    var e = o(
                      c().mark(function e() {
                        var t, n, r, a, o;
                        return c().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((t = p.instance.getUserId())) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "userId не установлен в SocketManager."
                                    ),
                                    this.updateIncomeLabel("+ 0 доход в час"),
                                    e.abrupt("return")
                                  );
                                case 5:
                                  return (
                                    (e.prev = 5),
                                    (e.next = 8),
                                    fetch(this.apiUrl + "?userId=" + t)
                                  );
                                case 8:
                                  if ((n = e.sent).ok) {
                                    e.next = 11;
                                    break;
                                  }
                                  throw new Error(
                                    "HTTP error! status: " + n.status
                                  );
                                case 11:
                                  return (e.next = 13), n.json();
                                case 13:
                                  (r = e.sent),
                                    (a = this.calculateTotalIncome(r)),
                                    (o = this.formatIncome(a)),
                                    this.updateIncomeLabel(o),
                                    console.log("Общий доход: " + o),
                                    (e.next = 24);
                                  break;
                                case 20:
                                  (e.prev = 20),
                                    (e.t0 = e.catch(5)),
                                    console.error(
                                      "Ошибка при получении данных с API:",
                                      e.t0
                                    ),
                                    this.updateIncomeLabel("+ 0 доход в час");
                                case 24:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[5, 20]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.calculateTotalIncome = function (e) {
                    return e.reduce(function (e, t) {
                      return e + (t.cumulative_income || 0);
                    }, 0);
                  }),
                  (i.formatIncome = function (e) {
                    return e >= 1e3
                      ? "+ " + (e / 1e3).toFixed(0) + "K доход в час"
                      : "+ " + e + " доход в час";
                  }),
                  (i.updateIncomeLabel = function (e) {
                    this.incomeLabel.string = e;
                  }),
                  t
                );
              })(l)).prototype,
              "incomeLabel",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (h = I))
          ) || h)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/index.mjs_cjs=&original=2.js",
  ["./index2.js", "./cjs-loader.mjs"],
  function (e, t) {
    var r, n;
    return {
      setters: [
        function (t) {
          r = t.__cjsMetaURL;
          var n = {};
          (n.__cjsMetaURL = t.__cjsMetaURL), (n.default = t.default), e(n);
        },
        function (e) {
          n = e.default;
        },
      ],
      execute: function () {
        r || n.throwInvalidWrapper("./index.js", t.meta.url), n.require(r);
      },
    };
  }
);

System.register(
  "chunks:///_virtual/index.mjs_cjs=&original=3.js",
  ["./index3.js", "./cjs-loader.mjs"],
  function (e, t) {
    var r, n;
    return {
      setters: [
        function (t) {
          r = t.__cjsMetaURL;
          var n = {};
          (n.__cjsMetaURL = t.__cjsMetaURL), (n.default = t.default), e(n);
        },
        function (e) {
          n = e.default;
        },
      ],
      execute: function () {
        r || n.throwInvalidWrapper("./index.js", t.meta.url), n.require(r);
      },
    };
  }
);

System.register(
  "chunks:///_virtual/index2.js",
  ["./cjs-loader.mjs"],
  function (e, a) {
    var t;
    return {
      setters: [
        function (e) {
          t = e.default;
        },
      ],
      execute: function () {
        e("default", void 0);
        var i = e("__cjsMetaURL", a.meta.url);
        t.define(
          i,
          function (a, t, i, o, s) {
            var r, n;
            System.register(
              "chunks:///_virtual/builtin-pipeline-settings.ts",
              [
                "./rollupPluginModLoBabelHelpers.js",
                "cc",
                "./builtin-pipeline-types.ts",
              ],
              function (e) {
                var a, t, i, o, s, r, n, l, d, c, h, p, g, u, f, m, _;
                return {
                  setters: [
                    function (e) {
                      (a = e.applyDecoratedDescriptor),
                        (t = e.inheritsLoose),
                        (i = e.createClass),
                        (o = e.initializerDefineProperty),
                        (s = e.assertThisInitialized);
                    },
                    function (e) {
                      (r = e.cclegacy),
                        (n = e._decorator),
                        (l = e.Camera),
                        (d = e.CCBoolean),
                        (c = e.CCInteger),
                        (h = e.CCFloat),
                        (p = e.Material),
                        (g = e.Texture2D),
                        (u = e.rendering),
                        (f = e.Component);
                    },
                    function (e) {
                      (m = e.fillRequiredPipelineSettings),
                        (_ = e.makePipelineSettings);
                    },
                  ],
                  execute: function () {
                    var b,
                      S,
                      P,
                      R,
                      M,
                      y,
                      w,
                      T,
                      C,
                      E,
                      v,
                      x,
                      D,
                      A,
                      F,
                      O,
                      L,
                      k,
                      B,
                      G,
                      N,
                      z,
                      Q,
                      I,
                      H,
                      U,
                      V,
                      W,
                      j,
                      X,
                      q,
                      Y,
                      K,
                      Z;
                    r._RF.push(
                      {},
                      "de1c2EHcMhAIYRZY5nyTQHG",
                      "builtin-pipeline-settings",
                      void 0
                    );
                    var J = n.ccclass,
                      $ = n.disallowMultiple,
                      ee = n.executeInEditMode,
                      ae = n.menu,
                      te = n.property,
                      ie = n.requireComponent,
                      oe = n.type;
                    e(
                      "BuiltinPipelineSettings",
                      ((b = J("BuiltinPipelineSettings")),
                      (S = ae("Rendering/BuiltinPipelineSettings")),
                      (P = ie(l)),
                      (R = te(d)),
                      (M = te({
                        displayName: "Editor Preview (Experimental)",
                        type: d,
                      })),
                      (y = te({
                        group: {
                          id: "MSAA",
                          name: "Multisample Anti-Aliasing",
                        },
                        type: d,
                      })),
                      (w = te({
                        group: {
                          id: "MSAA",
                          name: "Multisample Anti-Aliasing",
                          style: "section",
                        },
                        type: c,
                        range: [2, 4, 2],
                      })),
                      (T = te({
                        group: {
                          id: "ShadingScale",
                          name: "ShadingScale",
                          style: "section",
                        },
                        type: d,
                      })),
                      (C = te({
                        tooltip: "i18n:postprocess.shadingScale",
                        group: { id: "ShadingScale", name: "ShadingScale" },
                        type: h,
                        range: [0.01, 4, 0.01],
                        slide: !0,
                      })),
                      (E = te({
                        group: {
                          id: "DepthOfField",
                          name: "DepthOfField (PostProcessing)",
                          style: "section",
                        },
                        type: d,
                        visible: !1,
                      })),
                      (v = te({
                        group: {
                          id: "DepthOfField",
                          name: "DepthOfField (PostProcessing)",
                          style: "section",
                        },
                        type: p,
                        visible: !1,
                      })),
                      (x = te({
                        group: {
                          id: "DepthOfField",
                          name: "DepthOfField (PostProcessing)",
                          style: "section",
                        },
                        type: h,
                        min: 0,
                        visible: !1,
                      })),
                      (D = te({
                        group: {
                          id: "DepthOfField",
                          name: "DepthOfField (PostProcessing)",
                          style: "section",
                        },
                        type: h,
                        min: 0,
                        visible: !1,
                      })),
                      (A = oe(h)),
                      (F = te({
                        group: {
                          id: "DepthOfField",
                          name: "DepthOfField (PostProcessing)",
                          style: "section",
                        },
                        type: h,
                        range: [1, 10, 0.01],
                        slide: !0,
                        visible: !1,
                      })),
                      (O = te({
                        group: {
                          id: "Bloom",
                          name: "Bloom (PostProcessing)",
                          style: "section",
                        },
                        type: d,
                      })),
                      (L = te({
                        group: {
                          id: "Bloom",
                          name: "Bloom (PostProcessing)",
                          style: "section",
                        },
                        type: p,
                      })),
                      (k = te({
                        tooltip: "i18n:bloom.enableAlphaMask",
                        group: {
                          id: "Bloom",
                          name: "Bloom (PostProcessing)",
                          style: "section",
                        },
                        type: d,
                      })),
                      (B = te({
                        tooltip: "i18n:bloom.iterations",
                        group: {
                          id: "Bloom",
                          name: "Bloom (PostProcessing)",
                          style: "section",
                        },
                        type: c,
                        range: [1, 6, 1],
                        slide: !0,
                      })),
                      (G = te({
                        tooltip: "i18n:bloom.threshold",
                        group: {
                          id: "Bloom",
                          name: "Bloom (PostProcessing)",
                          style: "section",
                        },
                        type: h,
                        min: 0,
                      })),
                      (N = te({
                        group: {
                          id: "Color Grading",
                          name: "ColorGrading (LDR) (PostProcessing)",
                          style: "section",
                        },
                        type: d,
                      })),
                      (z = te({
                        group: {
                          id: "Color Grading",
                          name: "ColorGrading (LDR) (PostProcessing)",
                          style: "section",
                        },
                        type: p,
                      })),
                      (Q = te({
                        tooltip: "i18n:color_grading.contribute",
                        group: {
                          id: "Color Grading",
                          name: "ColorGrading (LDR) (PostProcessing)",
                          style: "section",
                        },
                        type: h,
                        range: [0, 1, 0.01],
                        slide: !0,
                      })),
                      (I = te({
                        tooltip: "i18n:color_grading.originalMap",
                        group: {
                          id: "Color Grading",
                          name: "ColorGrading (LDR) (PostProcessing)",
                          style: "section",
                        },
                        type: g,
                      })),
                      (H = te({
                        group: {
                          id: "FXAA",
                          name: "Fast Approximate Anti-Aliasing (PostProcessing)",
                          style: "section",
                        },
                        type: d,
                      })),
                      (U = te({
                        group: {
                          id: "FXAA",
                          name: "Fast Approximate Anti-Aliasing (PostProcessing)",
                          style: "section",
                        },
                        type: p,
                      })),
                      (V = te({
                        group: {
                          id: "FSR",
                          name: "FidelityFX Super Resolution",
                          style: "section",
                        },
                        type: d,
                      })),
                      (W = te({
                        group: {
                          id: "FSR",
                          name: "FidelityFX Super Resolution",
                          style: "section",
                        },
                        type: p,
                      })),
                      (j = te({
                        group: {
                          id: "FSR",
                          name: "FidelityFX Super Resolution",
                          style: "section",
                        },
                        type: h,
                        range: [0, 1, 0.01],
                        slide: !0,
                      })),
                      (X = te({
                        group: {
                          id: "ToneMapping",
                          name: "ToneMapping",
                          style: "section",
                        },
                        type: p,
                      })),
                      b(
                        (q =
                          S(
                            (q =
                              P(
                                (q =
                                  $(
                                    (q =
                                      ee(
                                        ((K = a(
                                          (Y = (function (e) {
                                            function a() {
                                              for (
                                                var a,
                                                  t = arguments.length,
                                                  i = new Array(t),
                                                  r = 0;
                                                r < t;
                                                r++
                                              )
                                                i[r] = arguments[r];
                                              return (
                                                (a =
                                                  e.call.apply(
                                                    e,
                                                    [this].concat(i)
                                                  ) || this),
                                                o(a, "_settings", K, s(a)),
                                                o(a, "_editorPreview", Z, s(a)),
                                                a
                                              );
                                            }
                                            t(a, e);
                                            var r = a.prototype;
                                            return (
                                              (r.onEnable = function () {
                                                m(this._settings),
                                                  (this.getComponent(
                                                    l
                                                  ).camera.pipelineSettings =
                                                    this._settings);
                                              }),
                                              (r.onDisable = function () {
                                                this.getComponent(
                                                  l
                                                ).camera.pipelineSettings =
                                                  null;
                                              }),
                                              (r._tryEnableEditorPreview =
                                                function () {
                                                  void 0 !== u &&
                                                    (this._editorPreview
                                                      ? u.setEditorPipelineSettings(
                                                          this._settings
                                                        )
                                                      : this._disableEditorPreview());
                                                }),
                                              (r._disableEditorPreview =
                                                function () {
                                                  void 0 !== u &&
                                                    u.getEditorPipelineSettings() ===
                                                      this._settings &&
                                                    u.setEditorPipelineSettings(
                                                      null
                                                    );
                                                }),
                                              i(a, [
                                                {
                                                  key: "editorPreview",
                                                  get: function () {
                                                    return this._editorPreview;
                                                  },
                                                  set: function (e) {
                                                    this._editorPreview = e;
                                                  },
                                                },
                                                {
                                                  key: "MsaaEnable",
                                                  get: function () {
                                                    return this._settings.msaa
                                                      .enabled;
                                                  },
                                                  set: function (e) {
                                                    this._settings.msaa.enabled =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "msaaSampleCount",
                                                  get: function () {
                                                    return this._settings.msaa
                                                      .sampleCount;
                                                  },
                                                  set: function (e) {
                                                    (e = Math.pow(
                                                      2,
                                                      Math.ceil(
                                                        Math.log2(
                                                          Math.max(e, 2)
                                                        )
                                                      )
                                                    )),
                                                      (e = Math.min(e, 4)),
                                                      (this._settings.msaa.sampleCount =
                                                        e);
                                                  },
                                                },
                                                {
                                                  key: "shadingScaleEnable",
                                                  get: function () {
                                                    return this._settings
                                                      .enableShadingScale;
                                                  },
                                                  set: function (e) {
                                                    this._settings.enableShadingScale =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "shadingScale",
                                                  get: function () {
                                                    return this._settings
                                                      .shadingScale;
                                                  },
                                                  set: function (e) {
                                                    this._settings.shadingScale =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "dofEnable",
                                                  get: function () {
                                                    return this._settings
                                                      .depthOfField.enabled;
                                                  },
                                                  set: function (e) {
                                                    this._settings.depthOfField.enabled =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "dofMaterial",
                                                  get: function () {
                                                    return this._settings
                                                      .depthOfField.material;
                                                  },
                                                  set: function (e) {
                                                    this._settings.depthOfField
                                                      .material !== e &&
                                                      (this._settings.depthOfField.material =
                                                        e);
                                                  },
                                                },
                                                {
                                                  key: "dofFocusDistance",
                                                  get: function () {
                                                    return this._settings
                                                      .depthOfField
                                                      .focusDistance;
                                                  },
                                                  set: function (e) {
                                                    this._settings.depthOfField.focusDistance =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "dofFocusRange",
                                                  get: function () {
                                                    return this._settings
                                                      .depthOfField.focusRange;
                                                  },
                                                  set: function (e) {
                                                    this._settings.depthOfField.focusRange =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "dofBokehRadius",
                                                  get: function () {
                                                    return this._settings
                                                      .depthOfField.bokehRadius;
                                                  },
                                                  set: function (e) {
                                                    this._settings.depthOfField.bokehRadius =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "bloomEnable",
                                                  get: function () {
                                                    return this._settings.bloom
                                                      .enabled;
                                                  },
                                                  set: function (e) {
                                                    this._settings.bloom.enabled =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "bloomMaterial",
                                                  get: function () {
                                                    return this._settings.bloom
                                                      .material;
                                                  },
                                                  set: function (e) {
                                                    this._settings.bloom
                                                      .material !== e &&
                                                      (this._settings.bloom.material =
                                                        e);
                                                  },
                                                },
                                                {
                                                  key: "bloomEnableAlphaMask",
                                                  get: function () {
                                                    return this._settings.bloom
                                                      .enableAlphaMask;
                                                  },
                                                  set: function (e) {
                                                    this._settings.bloom.enableAlphaMask =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "bloomIterations",
                                                  get: function () {
                                                    return this._settings.bloom
                                                      .iterations;
                                                  },
                                                  set: function (e) {
                                                    this._settings.bloom.iterations =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "bloomThreshold",
                                                  get: function () {
                                                    return this._settings.bloom
                                                      .threshold;
                                                  },
                                                  set: function (e) {
                                                    this._settings.bloom.threshold =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "bloomIntensity",
                                                  get: function () {
                                                    return this._settings.bloom
                                                      .intensity;
                                                  },
                                                  set: function (e) {
                                                    this._settings.bloom.intensity =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "colorGradingEnable",
                                                  get: function () {
                                                    return this._settings
                                                      .colorGrading.enabled;
                                                  },
                                                  set: function (e) {
                                                    this._settings.colorGrading.enabled =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "colorGradingMaterial",
                                                  get: function () {
                                                    return this._settings
                                                      .colorGrading.material;
                                                  },
                                                  set: function (e) {
                                                    this._settings.colorGrading
                                                      .material !== e &&
                                                      (this._settings.colorGrading.material =
                                                        e);
                                                  },
                                                },
                                                {
                                                  key: "colorGradingContribute",
                                                  get: function () {
                                                    return this._settings
                                                      .colorGrading.contribute;
                                                  },
                                                  set: function (e) {
                                                    this._settings.colorGrading.contribute =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "colorGradingMap",
                                                  get: function () {
                                                    return this._settings
                                                      .colorGrading
                                                      .colorGradingMap;
                                                  },
                                                  set: function (e) {
                                                    this._settings.colorGrading.colorGradingMap =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "fxaaEnable",
                                                  get: function () {
                                                    return this._settings.fxaa
                                                      .enabled;
                                                  },
                                                  set: function (e) {
                                                    this._settings.fxaa.enabled =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "fxaaMaterial",
                                                  get: function () {
                                                    return this._settings.fxaa
                                                      .material;
                                                  },
                                                  set: function (e) {
                                                    this._settings.fxaa
                                                      .material !== e &&
                                                      (this._settings.fxaa.material =
                                                        e);
                                                  },
                                                },
                                                {
                                                  key: "fsrEnable",
                                                  get: function () {
                                                    return this._settings.fsr
                                                      .enabled;
                                                  },
                                                  set: function (e) {
                                                    this._settings.fsr.enabled =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "fsrMaterial",
                                                  get: function () {
                                                    return this._settings.fsr
                                                      .material;
                                                  },
                                                  set: function (e) {
                                                    this._settings.fsr
                                                      .material !== e &&
                                                      (this._settings.fsr.material =
                                                        e);
                                                  },
                                                },
                                                {
                                                  key: "fsrSharpness",
                                                  get: function () {
                                                    return this._settings.fsr
                                                      .sharpness;
                                                  },
                                                  set: function (e) {
                                                    this._settings.fsr.sharpness =
                                                      e;
                                                  },
                                                },
                                                {
                                                  key: "toneMappingMaterial",
                                                  get: function () {
                                                    return this._settings
                                                      .toneMapping.material;
                                                  },
                                                  set: function (e) {
                                                    this._settings.toneMapping
                                                      .material !== e &&
                                                      (this._settings.toneMapping.material =
                                                        e);
                                                  },
                                                },
                                              ]),
                                              a
                                            );
                                          })(f)).prototype,
                                          "_settings",
                                          [te],
                                          {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                              return _();
                                            },
                                          }
                                        )),
                                        (Z = a(
                                          Y.prototype,
                                          "_editorPreview",
                                          [R],
                                          {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                              return !1;
                                            },
                                          }
                                        )),
                                        a(
                                          Y.prototype,
                                          "editorPreview",
                                          [M],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "editorPreview"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "MsaaEnable",
                                          [y],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "MsaaEnable"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "msaaSampleCount",
                                          [w],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "msaaSampleCount"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "shadingScaleEnable",
                                          [T],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "shadingScaleEnable"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "shadingScale",
                                          [C],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "shadingScale"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "dofEnable",
                                          [E],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "dofEnable"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "dofMaterial",
                                          [v],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "dofMaterial"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "dofFocusDistance",
                                          [x],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "dofFocusDistance"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "dofFocusRange",
                                          [D],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "dofFocusRange"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "dofBokehRadius",
                                          [A, F],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "dofBokehRadius"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "bloomEnable",
                                          [O],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "bloomEnable"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "bloomMaterial",
                                          [L],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "bloomMaterial"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "bloomEnableAlphaMask",
                                          [k],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "bloomEnableAlphaMask"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "bloomIterations",
                                          [B],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "bloomIterations"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "bloomThreshold",
                                          [G],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "bloomThreshold"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "colorGradingEnable",
                                          [N],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "colorGradingEnable"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "colorGradingMaterial",
                                          [z],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "colorGradingMaterial"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "colorGradingContribute",
                                          [Q],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "colorGradingContribute"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "colorGradingMap",
                                          [I],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "colorGradingMap"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "fxaaEnable",
                                          [H],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "fxaaEnable"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "fxaaMaterial",
                                          [U],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "fxaaMaterial"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "fsrEnable",
                                          [V],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "fsrEnable"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "fsrMaterial",
                                          [W],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "fsrMaterial"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "fsrSharpness",
                                          [j],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "fsrSharpness"
                                          ),
                                          Y.prototype
                                        ),
                                        a(
                                          Y.prototype,
                                          "toneMappingMaterial",
                                          [X],
                                          Object.getOwnPropertyDescriptor(
                                            Y.prototype,
                                            "toneMappingMaterial"
                                          ),
                                          Y.prototype
                                        ),
                                        (q = Y))
                                      ) || q)
                                  ) || q)
                              ) || q)
                          ) || q)
                      ) || q)
                    ),
                      r._RF.pop();
                  },
                };
              }
            ),
              System.register(
                "chunks:///_virtual/builtin-pipeline-types.ts",
                ["cc"],
                function (e) {
                  var a, t;
                  return {
                    setters: [
                      function (e) {
                        (a = e.cclegacy), (t = e.gfx);
                      },
                    ],
                    execute: function () {
                      e({
                        fillRequiredBloom: n,
                        fillRequiredColorGrading: l,
                        fillRequiredDepthOfField: r,
                        fillRequiredFSR: d,
                        fillRequiredFXAA: c,
                        fillRequiredHBAO: function (e) {
                          void 0 === e.enabled && (e.enabled = !1),
                            void 0 === e.radiusScale && (e.radiusScale = 1),
                            void 0 === e.angleBiasDegree &&
                              (e.angleBiasDegree = 10),
                            void 0 === e.blurSharpness && (e.blurSharpness = 3),
                            void 0 === e.aoSaturation && (e.aoSaturation = 1),
                            void 0 === e.needBlur && (e.needBlur = !1);
                        },
                        fillRequiredMSAA: s,
                        fillRequiredPipelineSettings: function (e) {
                          e.msaa ? s(e.msaa) : (e.msaa = o()),
                            void 0 === e.enableShadingScale &&
                              (e.enableShadingScale = !1),
                            void 0 === e.shadingScale && (e.shadingScale = 0.5),
                            e.depthOfField
                              ? r(e.depthOfField)
                              : (e.depthOfField = {
                                  enabled: !1,
                                  material: null,
                                  focusDistance: 0,
                                  focusRange: 0,
                                  bokehRadius: 1,
                                }),
                            e.bloom
                              ? n(e.bloom)
                              : (e.bloom = {
                                  enabled: !1,
                                  material: null,
                                  enableAlphaMask: !1,
                                  iterations: 3,
                                  threshold: 0.8,
                                  intensity: 2.3,
                                }),
                            e.toneMapping
                              ? h(e.toneMapping)
                              : (e.toneMapping = { material: null }),
                            e.colorGrading
                              ? l(e.colorGrading)
                              : (e.colorGrading = {
                                  enabled: !1,
                                  material: null,
                                  contribute: 1,
                                  colorGradingMap: null,
                                }),
                            e.fsr
                              ? d(e.fsr)
                              : (e.fsr = {
                                  enabled: !1,
                                  material: null,
                                  sharpness: 0.8,
                                }),
                            e.fxaa
                              ? c(e.fxaa)
                              : (e.fxaa = { enabled: !1, material: null });
                        },
                        fillRequiredToneMapping: h,
                        makeBloom: function () {
                          return {
                            enabled: !1,
                            material: null,
                            enableAlphaMask: !1,
                            iterations: 3,
                            threshold: 0.8,
                            intensity: 2.3,
                          };
                        },
                        makeColorGrading: function () {
                          return {
                            enabled: !1,
                            material: null,
                            contribute: 1,
                            colorGradingMap: null,
                          };
                        },
                        makeDepthOfField: function () {
                          return {
                            enabled: !1,
                            material: null,
                            focusDistance: 0,
                            focusRange: 0,
                            bokehRadius: 1,
                          };
                        },
                        makeFSR: function () {
                          return {
                            enabled: !1,
                            material: null,
                            sharpness: 0.8,
                          };
                        },
                        makeFXAA: function () {
                          return { enabled: !1, material: null };
                        },
                        makeHBAO: function () {
                          return {
                            enabled: !1,
                            radiusScale: 1,
                            angleBiasDegree: 10,
                            blurSharpness: 3,
                            aoSaturation: 1,
                            needBlur: !1,
                          };
                        },
                        makeMSAA: o,
                        makePipelineSettings: function () {
                          return {
                            msaa: o(),
                            enableShadingScale: !1,
                            shadingScale: 0.5,
                            depthOfField: {
                              enabled: !1,
                              material: null,
                              focusDistance: 0,
                              focusRange: 0,
                              bokehRadius: 1,
                            },
                            bloom: {
                              enabled: !1,
                              material: null,
                              enableAlphaMask: !1,
                              iterations: 3,
                              threshold: 0.8,
                              intensity: 2.3,
                            },
                            toneMapping: { material: null },
                            colorGrading: {
                              enabled: !1,
                              material: null,
                              contribute: 1,
                              colorGradingMap: null,
                            },
                            fsr: {
                              enabled: !1,
                              material: null,
                              sharpness: 0.8,
                            },
                            fxaa: { enabled: !1, material: null },
                          };
                        },
                        makeToneMapping: function () {
                          return { material: null };
                        },
                      }),
                        a._RF.push(
                          {},
                          "cbf30kCUX9A3K+QpVC6wnzx",
                          "builtin-pipeline-types",
                          void 0
                        );
                      var i = t.SampleCount;
                      function o() {
                        return { enabled: !1, sampleCount: i.X4 };
                      }
                      function s(e) {
                        void 0 === e.enabled && (e.enabled = !1),
                          void 0 === e.sampleCount && (e.sampleCount = i.X4);
                      }
                      function r(e) {
                        void 0 === e.enabled && (e.enabled = !1),
                          void 0 === e.material && (e.material = null),
                          void 0 === e.focusDistance && (e.focusDistance = 0),
                          void 0 === e.focusRange && (e.focusRange = 0),
                          void 0 === e.bokehRadius && (e.bokehRadius = 1);
                      }
                      function n(e) {
                        void 0 === e.enabled && (e.enabled = !1),
                          void 0 === e.material && (e.material = null),
                          void 0 === e.enableAlphaMask &&
                            (e.enableAlphaMask = !1),
                          void 0 === e.iterations && (e.iterations = 3),
                          void 0 === e.threshold && (e.threshold = 0.8),
                          void 0 === e.intensity && (e.intensity = 2.3);
                      }
                      function l(e) {
                        void 0 === e.enabled && (e.enabled = !1),
                          void 0 === e.material && (e.material = null),
                          void 0 === e.contribute && (e.contribute = 1),
                          void 0 === e.colorGradingMap &&
                            (e.colorGradingMap = null);
                      }
                      function d(e) {
                        void 0 === e.enabled && (e.enabled = !1),
                          void 0 === e.material && (e.material = null),
                          void 0 === e.sharpness && (e.sharpness = 0.8);
                      }
                      function c(e) {
                        void 0 === e.enabled && (e.enabled = !1),
                          void 0 === e.material && (e.material = null);
                      }
                      function h(e) {
                        void 0 === e.material && (e.material = null);
                      }
                      a._RF.pop();
                    },
                  };
                }
              ),
              System.register(
                "chunks:///_virtual/builtin-pipeline.ts",
                [
                  "./rollupPluginModLoBabelHelpers.js",
                  "cc",
                  "./env",
                  "./builtin-pipeline-types.ts",
                ],
                function () {
                  var e, a, t, i, o, s, r, n, l, d, c, h, p, g, u, f, m, _;
                  return {
                    setters: [
                      function (a) {
                        e = a.createForOfIteratorHelperLoose;
                      },
                      function (e) {
                        (a = e.cclegacy),
                          (t = e.geometry),
                          (i = e.gfx),
                          (o = e.renderer),
                          (s = e.rendering),
                          (r = e.Vec3),
                          (n = e.Vec4),
                          (l = e.Vec2),
                          (d = e.Material),
                          (c = e.PipelineEventType),
                          (h = e.assert),
                          (p = e.clamp),
                          (g = e.sys),
                          (u = e.pipeline),
                          (f = e.Layers);
                      },
                      function (e) {
                        m = e.DEBUG;
                      },
                      function (e) {
                        _ = e.makePipelineSettings;
                      },
                    ],
                    execute: function () {
                      a._RF.push(
                        {},
                        "ff9b0GZzgRM/obMbHGfCNbk",
                        "builtin-pipeline",
                        void 0
                      );
                      var b = t.AABB,
                        S = t.Sphere,
                        P = t.intersect,
                        R = i.ClearFlagBit,
                        M = i.Color,
                        y = i.Format,
                        w = i.FormatFeatureBit,
                        T = i.LoadOp,
                        C = i.StoreOp,
                        E = i.TextureType,
                        v = i.Viewport,
                        x = o.scene,
                        D = x.CameraUsage,
                        A = x.CSMLevel,
                        F = x.LightType;
                      function O(e) {
                        return !!(e.clearFlag & (R.COLOR | (R.STENCIL << 1)));
                      }
                      function L(e, a, t, i, o, s) {
                        e.shadowFixedArea || e.csmLevel === A.LEVEL_1
                          ? ((o.left = 0),
                            (o.top = 0),
                            (o.width = Math.trunc(a)),
                            (o.height = Math.trunc(t)))
                          : ((o.left = Math.trunc((i % 2) * 0.5 * a)),
                            (o.top =
                              s > 0
                                ? Math.trunc(0.5 * (1 - Math.floor(i / 2)) * t)
                                : Math.trunc(0.5 * Math.floor(i / 2) * t)),
                            (o.width = Math.trunc(0.5 * a)),
                            (o.height = Math.trunc(0.5 * t))),
                          (o.left = Math.max(0, o.left)),
                          (o.top = Math.max(0, o.top)),
                          (o.width = Math.max(1, o.width)),
                          (o.height = Math.max(1, o.height));
                      }
                      var k = function () {
                        (this.isWeb = !1),
                          (this.isWebGL1 = !1),
                          (this.isWebGPU = !1),
                          (this.isMobile = !1),
                          (this.isHDR = !1),
                          (this.useFloatOutput = !1),
                          (this.toneMappingType = 0),
                          (this.shadowEnabled = !1),
                          (this.shadowMapFormat = y.R32F),
                          (this.shadowMapSize = new l(1, 1)),
                          (this.usePlanarShadow = !1),
                          (this.screenSpaceSignY = 1),
                          (this.supportDepthSample = !1),
                          (this.mobileMaxSpotLightShadowMaps = 1),
                          (this.platform = new n(0, 0, 0, 0));
                      };
                      function B(e, a) {
                        var t = w.SAMPLED_TEXTURE | w.LINEAR_FILTER,
                          s = e.device;
                        (a.isWeb = !g.isNative),
                          (a.isWebGL1 = s.gfxAPI === i.API.WEBGL),
                          (a.isWebGPU = s.gfxAPI === i.API.WEBGPU),
                          (a.isMobile = g.isMobile),
                          (a.isHDR = e.pipelineSceneData.isHDR),
                          (a.useFloatOutput = e.getMacroBool(
                            "CC_USE_FLOAT_OUTPUT"
                          )),
                          (a.toneMappingType =
                            e.pipelineSceneData.postSettings.toneMappingType);
                        var r = e.pipelineSceneData.shadows;
                        (a.shadowEnabled = r.enabled),
                          (a.shadowMapFormat = u.supportsR32FloatTexture(
                            e.device
                          )
                            ? y.R32F
                            : y.RGBA8),
                          a.shadowMapSize.set(r.size),
                          (a.usePlanarShadow =
                            r.enabled && r.type === o.scene.ShadowType.Planar),
                          (a.screenSpaceSignY =
                            e.device.capabilities.screenSpaceSignY),
                          (a.supportDepthSample =
                            (e.device.getFormatFeatures(y.DEPTH_STENCIL) &
                              t) ===
                            t);
                        var n = s.capabilities.screenSpaceSignY;
                        (a.platform.x = a.isMobile ? 1 : 0),
                          (a.platform.w =
                            ((0.5 * n + 0.5) << 1) |
                            (0.5 * s.capabilities.clipSpaceSignY + 0.5));
                      }
                      var G = _(),
                        N = function () {
                          (this.colorName = ""),
                            (this.depthStencilName = ""),
                            (this.enableMainLightShadowMap = !1),
                            (this.enableMainLightPlanarShadowMap = !1),
                            (this.enablePostProcess = !1),
                            (this.enableProfiler = !1),
                            (this.enableShadingScale = !1),
                            (this.enableMSAA = !1),
                            (this.enableDOF = !1),
                            (this.enableBloom = !1),
                            (this.enableColorGrading = !1),
                            (this.enableFXAA = !1),
                            (this.enableFSR = !1),
                            (this.enableHDR = !1),
                            (this.enablePlanarReflectionProbe = !1),
                            (this.useFullPipeline = !1),
                            (this.singleForwardRadiancePass = !1),
                            (this.radianceFormat = i.Format.RGBA8),
                            (this.shadingScale = 0.5),
                            (this.settings = G);
                        };
                      function z(e, a, t) {
                        (t.enableDOF =
                          e.supportDepthSample &&
                          a.depthOfField.enabled &&
                          !!a.depthOfField.material),
                          (t.enableBloom =
                            a.bloom.enabled && !!a.bloom.material),
                          (t.enableColorGrading =
                            a.colorGrading.enabled &&
                            !!a.colorGrading.material &&
                            !!a.colorGrading.colorGradingMap),
                          (t.enableFXAA = a.fxaa.enabled && !!a.fxaa.material),
                          (t.enablePostProcess =
                            t.enableDOF ||
                            t.enableBloom ||
                            t.enableColorGrading ||
                            t.enableFXAA);
                      }
                      function Q(e, a, t) {
                        var o = e.window,
                          r = e.cameraUsage === D.GAME && !!o.swapchain,
                          n =
                            e.cameraUsage === D.SCENE_VIEW ||
                            e.cameraUsage === D.PREVIEW;
                        if (
                          ((t.colorName = o.colorName),
                          (t.depthStencilName = o.depthStencilName),
                          (t.useFullPipeline =
                            0 != (e.visibility & f.Enum.DEFAULT)),
                          (t.enableMainLightShadowMap =
                            a.shadowEnabled &&
                            !a.usePlanarShadow &&
                            !!e.scene &&
                            !!e.scene.mainLight &&
                            e.scene.mainLight.shadowEnabled),
                          (t.enableMainLightPlanarShadowMap =
                            a.shadowEnabled &&
                            a.usePlanarShadow &&
                            !!e.scene &&
                            !!e.scene.mainLight &&
                            e.scene.mainLight.shadowEnabled),
                          (t.enablePlanarReflectionProbe =
                            r || e.cameraUsage === D.SCENE_VIEW),
                          (t.enableProfiler = m),
                          (t.settings = e.pipelineSettings
                            ? e.pipelineSettings
                            : G),
                          z(a, t.settings, t),
                          n)
                        ) {
                          var l = s.getEditorPipelineSettings();
                          l && ((t.settings = l), z(a, t.settings, t));
                        }
                        (t.enableMSAA =
                          t.settings.msaa.enabled && !a.isWeb && !a.isWebGL1),
                          (t.shadingScale = t.settings.shadingScale),
                          (t.enableShadingScale =
                            t.settings.enableShadingScale &&
                            1 !== t.shadingScale),
                          (t.enableFSR =
                            t.settings.fsr.enabled &&
                            !!t.settings.fsr.material &&
                            t.enableShadingScale &&
                            t.shadingScale < 1),
                          (t.singleForwardRadiancePass =
                            a.isMobile || t.enableMSAA),
                          (t.enableHDR = t.useFullPipeline && a.useFloatOutput),
                          (t.radianceFormat = t.enableHDR
                            ? i.Format.RGBA16F
                            : i.Format.RGBA8);
                      }
                      if (s) {
                        var I = s.QueueHint,
                          H = s.SceneFlags,
                          U = s.ResourceFlags,
                          V = s.ResourceResidency,
                          W = (function () {
                            function a() {
                              (this.lights = []),
                                (this.shadowEnabledSpotLights = []),
                                (this._sphere = S.create(0, 0, 0, 1)),
                                (this._boundingBox = new b()),
                                (this._rangedDirLightBoundingBox = new b(
                                  0,
                                  0,
                                  0,
                                  0.5,
                                  0.5,
                                  0.5
                                ));
                            }
                            var t = a.prototype;
                            return (
                              (t.cullLights = function (a, t, i) {
                                (this.lights.length = 0),
                                  (this.shadowEnabledSpotLights.length = 0);
                                for (
                                  var o, s = e(a.spotLights);
                                  !(o = s()).done;

                                ) {
                                  var n = o.value;
                                  n.baked ||
                                    (S.set(
                                      this._sphere,
                                      n.position.x,
                                      n.position.y,
                                      n.position.z,
                                      n.range
                                    ),
                                    P.sphereFrustum(this._sphere, t) &&
                                      (n.shadowEnabled
                                        ? this.shadowEnabledSpotLights.push(n)
                                        : this.lights.push(n)));
                                }
                                for (
                                  var l, d = e(a.sphereLights);
                                  !(l = d()).done;

                                ) {
                                  var c = l.value;
                                  c.baked ||
                                    (S.set(
                                      this._sphere,
                                      c.position.x,
                                      c.position.y,
                                      c.position.z,
                                      c.range
                                    ),
                                    P.sphereFrustum(this._sphere, t) &&
                                      this.lights.push(c));
                                }
                                for (
                                  var h, p = e(a.pointLights);
                                  !(h = p()).done;

                                ) {
                                  var g = h.value;
                                  g.baked ||
                                    (S.set(
                                      this._sphere,
                                      g.position.x,
                                      g.position.y,
                                      g.position.z,
                                      g.range
                                    ),
                                    P.sphereFrustum(this._sphere, t) &&
                                      this.lights.push(g));
                                }
                                for (
                                  var u, f = e(a.rangedDirLights);
                                  !(u = f()).done;

                                ) {
                                  var m = u.value;
                                  b.transform(
                                    this._boundingBox,
                                    this._rangedDirLightBoundingBox,
                                    m.node.getWorldMatrix()
                                  ),
                                    P.aabbFrustum(this._boundingBox, t) &&
                                      this.lights.push(m);
                                }
                                i &&
                                  this.shadowEnabledSpotLights.sort(function (
                                    e,
                                    a
                                  ) {
                                    return (
                                      r.squaredDistance(i, e.position) -
                                      r.squaredDistance(i, a.position)
                                    );
                                  });
                              }),
                              (t._addLightQueues = function (a, t) {
                                for (
                                  var i, o = e(this.lights);
                                  !(i = o()).done;

                                ) {
                                  var s = i.value,
                                    r = t.addQueue(I.BLEND, "forward-add");
                                  switch (s.type) {
                                    case F.SPHERE:
                                      r.name = "sphere-light";
                                      break;
                                    case F.SPOT:
                                      r.name = "spot-light";
                                      break;
                                    case F.POINT:
                                      r.name = "point-light";
                                      break;
                                    case F.RANGED_DIRECTIONAL:
                                      r.name = "ranged-directional-light";
                                      break;
                                    default:
                                      r.name = "unknown-light";
                                  }
                                  r.addScene(a, H.BLEND, s);
                                }
                              }),
                              (t.addSpotlightShadowPasses = function (a, t, i) {
                                for (
                                  var o,
                                    s = 0,
                                    r = e(this.shadowEnabledSpotLights);
                                  !(o = r()).done;

                                ) {
                                  var n = o.value,
                                    l = a.pipelineSceneData.shadows.size,
                                    d = a.addRenderPass(l.x, l.y, "default");
                                  if (
                                    ((d.name = "SpotLightShadowPass" + s),
                                    d.addRenderTarget(
                                      "SpotShadowMap" + s,
                                      T.CLEAR,
                                      C.STORE,
                                      new M(1, 1, 1, 1)
                                    ),
                                    d.addDepthStencil(
                                      "SpotShadowDepth" + s,
                                      T.CLEAR,
                                      C.DISCARD
                                    ),
                                    d
                                      .addQueue(I.NONE, "shadow-caster")
                                      .addScene(
                                        t,
                                        H.OPAQUE | H.MASK | H.SHADOW_CASTER
                                      )
                                      .useLightFrustum(n),
                                    ++s >= i)
                                  )
                                    break;
                                }
                              }),
                              (t.addLightQueues = function (a, t, i) {
                                this._addLightQueues(t, a);
                                for (
                                  var o,
                                    s = 0,
                                    r = e(this.shadowEnabledSpotLights);
                                  !(o = r()).done;

                                ) {
                                  var n = o.value;
                                  if (
                                    (a.addTexture(
                                      "SpotShadowMap" + s,
                                      "cc_spotShadowMap"
                                    ),
                                    a
                                      .addQueue(I.BLEND, "forward-add")
                                      .addScene(t, H.BLEND, n),
                                    ++s >= i)
                                  )
                                    break;
                                }
                              }),
                              (t.addLightPasses = function (
                                a,
                                t,
                                i,
                                o,
                                s,
                                r,
                                n,
                                l,
                                d,
                                c
                              ) {
                                this._addLightQueues(n, c);
                                for (
                                  var h,
                                    p = 0,
                                    g = d.pipelineSceneData.shadows.size,
                                    u = e(this.shadowEnabledSpotLights);
                                  !(h = u()).done;

                                ) {
                                  var f = h.value,
                                    m = d.addRenderPass(g.x, g.y, "default");
                                  (m.name = "SpotlightShadowPass"),
                                    m.addRenderTarget(
                                      "ShadowMap" + o,
                                      T.CLEAR,
                                      C.STORE,
                                      new M(1, 1, 1, 1)
                                    ),
                                    m.addDepthStencil(
                                      "ShadowDepth" + o,
                                      T.CLEAR,
                                      C.DISCARD
                                    ),
                                    m
                                      .addQueue(I.NONE, "shadow-caster")
                                      .addScene(
                                        n,
                                        H.OPAQUE | H.MASK | H.SHADOW_CASTER
                                      )
                                      .useLightFrustum(f);
                                  var _ =
                                    ++p === this.shadowEnabledSpotLights.length
                                      ? i
                                      : C.STORE;
                                  ((c = d.addRenderPass(s, r, "default")).name =
                                    "SpotlightWithShadowMap"),
                                    c.setViewport(l),
                                    c.addRenderTarget(a, T.LOAD),
                                    c.addDepthStencil(t, T.LOAD, _),
                                    c.addTexture(
                                      "ShadowMap" + o,
                                      "cc_spotShadowMap"
                                    ),
                                    c
                                      .addQueue(I.BLEND, "forward-add")
                                      .addScene(n, H.BLEND, f);
                                }
                                return c;
                              }),
                              (t.isMultipleLightPassesNeeded = function () {
                                return this.shadowEnabledSpotLights.length > 0;
                              }),
                              a
                            );
                          })(),
                          j = (function () {
                            function t() {
                              (this._pipelineEvent =
                                a.director.root.pipelineEvent),
                                (this._clearColor = new M(0, 0, 0, 1)),
                                (this._clearColorTransparentBlack = new M(
                                  0,
                                  0,
                                  0,
                                  0
                                )),
                                (this._reflectionProbeClearColor = new r(
                                  0,
                                  0,
                                  0
                                )),
                                (this._viewport = new v()),
                                (this._configs = new k()),
                                (this._cameraConfigs = new N()),
                                (this._cocParams = new n(0, 0, 0, 0)),
                                (this._cocTexSize = new n(0, 0, 0, 0)),
                                (this._bloomParams = new n(0, 0, 0, 0)),
                                (this._bloomTexSize = new n(0, 0, 0, 0)),
                                (this._bloomWidths = []),
                                (this._bloomHeights = []),
                                (this._bloomTexNames = []),
                                (this._colorGradingTexSize = new l(0, 0)),
                                (this._fxaaParams = new n(0, 0, 0, 0)),
                                (this._fsrParams = new n(0, 0, 0, 0)),
                                (this._fsrTexSize = new n(0, 0, 0, 0)),
                                (this._copyAndTonemapMaterial = new d()),
                                (this._initialized = !1),
                                (this.forwardLighting = new W());
                            }
                            var g = t.prototype;
                            return (
                              (g.windowResize = function (e, a, t, i, o) {
                                B(e, this._configs),
                                  Q(t, this._configs, this._cameraConfigs);
                                var s = this._cameraConfigs.settings,
                                  r = a.renderWindowId,
                                  n = this._cameraConfigs.enableShadingScale
                                    ? Math.max(
                                        Math.floor(
                                          i * this._cameraConfigs.shadingScale
                                        ),
                                        1
                                      )
                                    : i,
                                  l = this._cameraConfigs.enableShadingScale
                                    ? Math.max(
                                        Math.floor(
                                          o * this._cameraConfigs.shadingScale
                                        ),
                                        1
                                      )
                                    : o;
                                if (
                                  (e.addRenderWindow(
                                    this._cameraConfigs.colorName,
                                    y.RGBA8,
                                    i,
                                    o,
                                    a,
                                    this._cameraConfigs.depthStencilName
                                  ),
                                  this._cameraConfigs.enableShadingScale
                                    ? (e.addDepthStencil(
                                        "ScaledSceneDepth" + r,
                                        y.DEPTH_STENCIL,
                                        n,
                                        l
                                      ),
                                      e.addRenderTarget(
                                        "ScaledRadiance" + r,
                                        this._cameraConfigs.radianceFormat,
                                        n,
                                        l
                                      ),
                                      e.addRenderTarget(
                                        "ScaledLdrColor" + r,
                                        y.RGBA8,
                                        n,
                                        l
                                      ))
                                    : (e.addDepthStencil(
                                        "SceneDepth" + r,
                                        y.DEPTH_STENCIL,
                                        n,
                                        l
                                      ),
                                      e.addRenderTarget(
                                        "Radiance" + r,
                                        this._cameraConfigs.radianceFormat,
                                        n,
                                        l
                                      ),
                                      e.addRenderTarget(
                                        "LdrColor" + r,
                                        y.RGBA8,
                                        n,
                                        l
                                      )),
                                  this._cameraConfigs.enableFSR &&
                                    e.addRenderTarget(
                                      "FsrColor" + r,
                                      y.RGBA8,
                                      i,
                                      o
                                    ),
                                  this._cameraConfigs.enableMSAA &&
                                    (this._cameraConfigs.enableHDR
                                      ? e.addTexture(
                                          "MsaaRadiance" + r,
                                          E.TEX2D,
                                          this._cameraConfigs.radianceFormat,
                                          n,
                                          l,
                                          1,
                                          1,
                                          1,
                                          s.msaa.sampleCount,
                                          U.COLOR_ATTACHMENT,
                                          V.MEMORYLESS
                                        )
                                      : e.addTexture(
                                          "MsaaRadiance" + r,
                                          E.TEX2D,
                                          y.RGBA8,
                                          n,
                                          l,
                                          1,
                                          1,
                                          1,
                                          s.msaa.sampleCount,
                                          U.COLOR_ATTACHMENT,
                                          V.MEMORYLESS
                                        ),
                                    e.addTexture(
                                      "MsaaDepthStencil" + r,
                                      E.TEX2D,
                                      y.DEPTH_STENCIL,
                                      n,
                                      l,
                                      1,
                                      1,
                                      1,
                                      s.msaa.sampleCount,
                                      U.DEPTH_STENCIL_ATTACHMENT,
                                      V.MEMORYLESS
                                    )),
                                  e.addRenderTarget(
                                    "ShadowMap" + r,
                                    this._configs.shadowMapFormat,
                                    this._configs.shadowMapSize.x,
                                    this._configs.shadowMapSize.y
                                  ),
                                  e.addDepthStencil(
                                    "ShadowDepth" + r,
                                    y.DEPTH_STENCIL,
                                    this._configs.shadowMapSize.x,
                                    this._configs.shadowMapSize.y
                                  ),
                                  this._cameraConfigs.singleForwardRadiancePass)
                                )
                                  for (
                                    var d =
                                        this._configs
                                          .mobileMaxSpotLightShadowMaps,
                                      c = 0;
                                    c !== d;
                                    ++c
                                  )
                                    e.addRenderTarget(
                                      "SpotShadowMap" + c,
                                      this._configs.shadowMapFormat,
                                      this._configs.shadowMapSize.x,
                                      this._configs.shadowMapSize.y
                                    ),
                                      e.addDepthStencil(
                                        "SpotShadowDepth" + c,
                                        y.DEPTH_STENCIL,
                                        this._configs.shadowMapSize.x,
                                        this._configs.shadowMapSize.y
                                      );
                                if (this._cameraConfigs.enableDOF) {
                                  var h = Math.max(Math.floor(n / 2), 1),
                                    p = Math.max(Math.floor(l / 2), 1);
                                  e.addRenderTarget(
                                    "DofRadiance" + r,
                                    this._cameraConfigs.radianceFormat,
                                    n,
                                    l
                                  ),
                                    e.addRenderTarget(
                                      "DofPrefilter" + r,
                                      this._cameraConfigs.radianceFormat,
                                      h,
                                      p
                                    ),
                                    e.addRenderTarget(
                                      "DofBokeh" + r,
                                      this._cameraConfigs.radianceFormat,
                                      h,
                                      p
                                    ),
                                    e.addRenderTarget(
                                      "DofFilter" + r,
                                      this._cameraConfigs.radianceFormat,
                                      h,
                                      p
                                    );
                                }
                                if (this._cameraConfigs.enableBloom)
                                  for (
                                    var g = n, u = l, f = 0;
                                    f !== s.bloom.iterations + 1;
                                    ++f
                                  )
                                    (g = Math.max(Math.floor(g / 2), 1)),
                                      (u = Math.max(Math.floor(u / 2), 1)),
                                      e.addRenderTarget(
                                        "BloomTex" + r + "_" + f,
                                        this._cameraConfigs.radianceFormat,
                                        g,
                                        u
                                      );
                                this._cameraConfigs.enableColorGrading &&
                                  s.colorGrading.material &&
                                  s.colorGrading.colorGradingMap &&
                                  s.colorGrading.material.setProperty(
                                    "colorGradingMap",
                                    s.colorGrading.colorGradingMap
                                  ),
                                  this._cameraConfigs.enableFXAA &&
                                    this._cameraConfigs.enableShadingScale &&
                                    e.addRenderTarget(
                                      "AaColor" + r,
                                      y.RGBA8,
                                      n,
                                      l
                                    );
                              }),
                              (g.setup = function (a, t) {
                                if (!this._initMaterials(t))
                                  for (var i, o = e(a); !(i = o()).done; ) {
                                    var s = i.value;
                                    s.scene &&
                                      s.window &&
                                      (Q(s, this._configs, this._cameraConfigs),
                                      this._pipelineEvent.emit(
                                        c.RENDER_CAMERA_BEGIN,
                                        s
                                      ),
                                      this._cameraConfigs.useFullPipeline
                                        ? this._buildForwardPipeline(
                                            t,
                                            s,
                                            s.scene
                                          )
                                        : this._buildSimplePipeline(t, s),
                                      this._pipelineEvent.emit(
                                        c.RENDER_CAMERA_END,
                                        s
                                      ));
                                  }
                              }),
                              (g._buildSimplePipeline = function (e, a) {
                                var t = Math.max(Math.floor(a.window.width), 1),
                                  i = Math.max(Math.floor(a.window.height), 1),
                                  o = this._cameraConfigs.colorName,
                                  s = this._cameraConfigs.depthStencilName,
                                  r = a.viewport;
                                (this._viewport.left = Math.round(r.x * t)),
                                  (this._viewport.top = Math.round(r.y * i)),
                                  (this._viewport.width = Math.max(
                                    Math.round(r.width * t),
                                    1
                                  )),
                                  (this._viewport.height = Math.max(
                                    Math.round(r.height * i),
                                    1
                                  ));
                                var n = a.clearColor;
                                (this._clearColor.x = n.x),
                                  (this._clearColor.y = n.y),
                                  (this._clearColor.z = n.z),
                                  (this._clearColor.w = n.w);
                                var l = e.addRenderPass(t, i, "default");
                                O(a)
                                  ? l.addRenderTarget(
                                      o,
                                      T.CLEAR,
                                      C.STORE,
                                      this._clearColor
                                    )
                                  : l.addRenderTarget(o, T.LOAD, C.STORE),
                                  a.clearFlag & R.DEPTH_STENCIL
                                    ? l.addDepthStencil(
                                        s,
                                        T.CLEAR,
                                        C.DISCARD,
                                        a.clearDepth,
                                        a.clearStencil,
                                        a.clearFlag & R.DEPTH_STENCIL
                                      )
                                    : l.addDepthStencil(s, T.LOAD, C.DISCARD),
                                  l.setViewport(this._viewport),
                                  l.addQueue(I.OPAQUE).addScene(a, H.OPAQUE);
                                var d = H.BLEND | H.UI;
                                this._cameraConfigs.enableProfiler &&
                                  ((d |= H.PROFILER), (l.showStatistics = !0)),
                                  l.addQueue(I.BLEND).addScene(a, d);
                              }),
                              (g._buildForwardPipeline = function (e, a, t) {
                                var i,
                                  o = this._cameraConfigs.settings,
                                  s = Math.max(Math.floor(a.window.width), 1),
                                  r = Math.max(Math.floor(a.window.height), 1),
                                  n = this._cameraConfigs.enableShadingScale
                                    ? Math.max(
                                        Math.floor(
                                          s * this._cameraConfigs.shadingScale
                                        ),
                                        1
                                      )
                                    : s,
                                  l = this._cameraConfigs.enableShadingScale
                                    ? Math.max(
                                        Math.floor(
                                          r * this._cameraConfigs.shadingScale
                                        ),
                                        1
                                      )
                                    : r,
                                  d = a.window.renderWindowId,
                                  c = this._cameraConfigs.colorName,
                                  p = this._cameraConfigs.enableShadingScale
                                    ? "ScaledSceneDepth" + d
                                    : "SceneDepth" + d,
                                  g = this._cameraConfigs.enableShadingScale
                                    ? "ScaledRadiance" + d
                                    : "Radiance" + d,
                                  u = this._cameraConfigs.enableShadingScale
                                    ? "ScaledLdrColor" + d
                                    : "LdrColor" + d,
                                  f = t.mainLight;
                                if (
                                  (this.forwardLighting.cullLights(
                                    t,
                                    a.frustum
                                  ),
                                  this._cameraConfigs
                                    .enableMainLightShadowMap &&
                                    (h(!!f),
                                    this._addCascadedShadowMapPass(e, d, f, a)),
                                  this._cameraConfigs
                                    .singleForwardRadiancePass &&
                                    this.forwardLighting.addSpotlightShadowPasses(
                                      e,
                                      a,
                                      this._configs.mobileMaxSpotLightShadowMaps
                                    ),
                                  this._tryAddReflectionProbePasses(
                                    e,
                                    d,
                                    f,
                                    a.scene
                                  ),
                                  this._cameraConfigs.enablePostProcess)
                                ) {
                                  if (this._cameraConfigs.enableDOF) {
                                    h(!!o.depthOfField.material);
                                    var m = "DofRadiance" + d;
                                    this._addForwardRadiancePasses(
                                      e,
                                      d,
                                      a,
                                      n,
                                      l,
                                      f,
                                      m,
                                      p,
                                      !0,
                                      C.STORE
                                    ),
                                      this._addDepthOfFieldPasses(
                                        e,
                                        o,
                                        o.depthOfField.material,
                                        d,
                                        a,
                                        n,
                                        l,
                                        m,
                                        p,
                                        g,
                                        u
                                      );
                                  } else
                                    this._addForwardRadiancePasses(
                                      e,
                                      d,
                                      a,
                                      n,
                                      l,
                                      f,
                                      g,
                                      p
                                    );
                                  if (
                                    (this._cameraConfigs.enableBloom &&
                                      (h(!!o.bloom.material),
                                      this._addKawaseDualFilterBloomPasses(
                                        e,
                                        o,
                                        o.bloom.material,
                                        d,
                                        n,
                                        l,
                                        g
                                      )),
                                    this._cameraConfigs.enableFXAA)
                                  ) {
                                    h(!!o.fxaa.material);
                                    var _ =
                                        this._cameraConfigs.enableHDR ||
                                        this._cameraConfigs.enableColorGrading,
                                      b = _ ? u : g;
                                    if (
                                      (_ &&
                                        this._addCopyAndTonemapPass(
                                          e,
                                          o,
                                          n,
                                          l,
                                          g,
                                          b
                                        ),
                                      this._cameraConfigs.enableShadingScale)
                                    ) {
                                      var S = "AaColor" + d;
                                      this._addFxaaPass(
                                        e,
                                        o.fxaa.material,
                                        n,
                                        l,
                                        b,
                                        S
                                      ),
                                        (i =
                                          this._cameraConfigs.enableFSR &&
                                          o.fsr.material
                                            ? this._addFsrPass(
                                                e,
                                                o,
                                                o.fsr.material,
                                                d,
                                                n,
                                                l,
                                                S,
                                                s,
                                                r,
                                                c
                                              )
                                            : this._addCopyPass(e, s, r, S, c));
                                    } else
                                      i = this._addFxaaPass(
                                        e,
                                        o.fxaa.material,
                                        s,
                                        r,
                                        b,
                                        c
                                      );
                                  } else
                                    i =
                                      this._addTonemapResizeOrSuperResolutionPasses(
                                        e,
                                        o,
                                        d,
                                        n,
                                        l,
                                        g,
                                        u,
                                        s,
                                        r,
                                        c
                                      );
                                } else
                                  this._cameraConfigs.enableHDR ||
                                  this._cameraConfigs.enableShadingScale
                                    ? (this._addForwardRadiancePasses(
                                        e,
                                        d,
                                        a,
                                        n,
                                        l,
                                        f,
                                        g,
                                        p
                                      ),
                                      (i =
                                        this._addTonemapResizeOrSuperResolutionPasses(
                                          e,
                                          o,
                                          d,
                                          n,
                                          l,
                                          g,
                                          u,
                                          s,
                                          r,
                                          c
                                        )))
                                    : (i = this._addForwardRadiancePasses(
                                        e,
                                        d,
                                        a,
                                        s,
                                        r,
                                        f,
                                        c,
                                        this._cameraConfigs.depthStencilName
                                      ));
                                this._addUIQueue(a, i);
                              }),
                              (g._addTonemapResizeOrSuperResolutionPasses =
                                function (e, a, t, i, o, s, r, n, l, d) {
                                  var c;
                                  return (
                                    this._cameraConfigs.enableFSR &&
                                    a.fsr.material
                                      ? (this._addCopyAndTonemapPass(
                                          e,
                                          a,
                                          i,
                                          o,
                                          s,
                                          r
                                        ),
                                        (c = this._addFsrPass(
                                          e,
                                          a,
                                          a.fsr.material,
                                          t,
                                          i,
                                          o,
                                          r,
                                          n,
                                          l,
                                          d
                                        )))
                                      : (c = this._addCopyAndTonemapPass(
                                          e,
                                          a,
                                          n,
                                          l,
                                          s,
                                          d
                                        )),
                                    c
                                  );
                                }),
                              (g._addCascadedShadowMapPass = function (
                                e,
                                a,
                                t,
                                i
                              ) {
                                var o = e.pipelineSceneData.shadows.size.x,
                                  s = e.pipelineSceneData.shadows.size.y;
                                (this._viewport.left = 0),
                                  (this._viewport.top = 0),
                                  (this._viewport.width = o),
                                  (this._viewport.height = s);
                                var r = e.addRenderPass(o, s, "default");
                                (r.name = "CascadedShadowMap"),
                                  r.addRenderTarget(
                                    "ShadowMap" + a,
                                    T.CLEAR,
                                    C.STORE,
                                    new M(1, 1, 1, 1)
                                  ),
                                  r.addDepthStencil(
                                    "ShadowDepth" + a,
                                    T.CLEAR,
                                    C.DISCARD
                                  );
                                for (
                                  var n = e.pipelineSceneData.csmSupported
                                      ? t.csmLevel
                                      : 1,
                                    l = 0;
                                  l !== n;
                                  ++l
                                ) {
                                  L(
                                    t,
                                    o,
                                    s,
                                    l,
                                    this._viewport,
                                    this._configs.screenSpaceSignY
                                  );
                                  var d = r.addQueue(I.NONE, "shadow-caster");
                                  this._configs.isWebGPU ||
                                    d.setViewport(this._viewport),
                                    d
                                      .addScene(
                                        i,
                                        H.OPAQUE | H.MASK | H.SHADOW_CASTER
                                      )
                                      .useLightFrustum(t, l);
                                }
                              }),
                              (g._addCopyPass = function (e, a, t, i, o) {
                                var s = e.addRenderPass(
                                  a,
                                  t,
                                  "cc-tone-mapping"
                                );
                                return (
                                  s.addRenderTarget(
                                    o,
                                    T.CLEAR,
                                    C.STORE,
                                    this._clearColorTransparentBlack
                                  ),
                                  s.addTexture(i, "inputTexture"),
                                  s.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  s
                                    .addQueue(I.OPAQUE)
                                    .addFullscreenQuad(
                                      this._copyAndTonemapMaterial,
                                      1
                                    ),
                                  s
                                );
                              }),
                              (g._addCopyAndTonemapPass = function (
                                e,
                                a,
                                t,
                                i,
                                o,
                                s
                              ) {
                                var r;
                                if (
                                  this._cameraConfigs.enableColorGrading &&
                                  a.colorGrading.material &&
                                  a.colorGrading.colorGradingMap
                                ) {
                                  var n = a.colorGrading.colorGradingMap;
                                  (this._colorGradingTexSize.x = n.width),
                                    (this._colorGradingTexSize.y = n.height);
                                  var l = n.width === n.height;
                                  (r = l
                                    ? e.addRenderPass(
                                        t,
                                        i,
                                        "cc-color-grading-8x8"
                                      )
                                    : e.addRenderPass(
                                        t,
                                        i,
                                        "cc-color-grading-nx1"
                                      )).addRenderTarget(
                                    s,
                                    T.CLEAR,
                                    C.STORE,
                                    this._clearColorTransparentBlack
                                  ),
                                    r.addTexture(o, "sceneColorMap"),
                                    r.setVec4(
                                      "g_platform",
                                      this._configs.platform
                                    ),
                                    r.setVec2(
                                      "lutTextureSize",
                                      this._colorGradingTexSize
                                    ),
                                    r.setFloat(
                                      "contribute",
                                      a.colorGrading.contribute
                                    ),
                                    r
                                      .addQueue(I.OPAQUE)
                                      .addFullscreenQuad(
                                        a.colorGrading.material,
                                        l ? 1 : 0
                                      );
                                } else
                                  (r = e.addRenderPass(
                                    t,
                                    i,
                                    "cc-tone-mapping"
                                  )).addRenderTarget(
                                    s,
                                    T.CLEAR,
                                    C.STORE,
                                    this._clearColorTransparentBlack
                                  ),
                                    r.addTexture(o, "inputTexture"),
                                    r.setVec4(
                                      "g_platform",
                                      this._configs.platform
                                    ),
                                    a.toneMapping.material
                                      ? r
                                          .addQueue(I.OPAQUE)
                                          .addFullscreenQuad(
                                            a.toneMapping.material,
                                            0
                                          )
                                      : r
                                          .addQueue(I.OPAQUE)
                                          .addFullscreenQuad(
                                            this._copyAndTonemapMaterial,
                                            0
                                          );
                                return r;
                              }),
                              (g._buildForwardMainLightPass = function (
                                e,
                                a,
                                t,
                                i,
                                o,
                                s,
                                r,
                                n
                              ) {
                                void 0 === n && (n = null),
                                  e.setViewport(this._viewport);
                                var l = this._cameraConfigs.enableMSAA
                                  ? C.DISCARD
                                  : C.STORE;
                                O(t)
                                  ? e.addRenderTarget(
                                      i,
                                      T.CLEAR,
                                      l,
                                      this._clearColor
                                    )
                                  : e.addRenderTarget(i, T.LOAD, l),
                                  t.clearFlag & R.DEPTH_STENCIL
                                    ? e.addDepthStencil(
                                        o,
                                        T.CLEAR,
                                        s,
                                        t.clearDepth,
                                        t.clearStencil,
                                        t.clearFlag & R.DEPTH_STENCIL
                                      )
                                    : e.addDepthStencil(o, T.LOAD, s),
                                  this._cameraConfigs
                                    .enableMainLightShadowMap &&
                                    e.addTexture(
                                      "ShadowMap" + a,
                                      "cc_shadowMap"
                                    ),
                                  e
                                    .addQueue(I.NONE)
                                    .addScene(
                                      t,
                                      H.OPAQUE | H.MASK,
                                      r || void 0,
                                      n || void 0
                                    );
                              }),
                              (g._addDepthOfFieldPasses = function (
                                e,
                                a,
                                t,
                                i,
                                o,
                                s,
                                r,
                                n,
                                l,
                                d,
                                c
                              ) {
                                (this._cocParams.x =
                                  a.depthOfField.focusDistance),
                                  (this._cocParams.y =
                                    a.depthOfField.focusRange),
                                  (this._cocParams.z =
                                    a.depthOfField.bokehRadius),
                                  (this._cocParams.w = 0),
                                  (this._cocTexSize.x = 1 / s),
                                  (this._cocTexSize.y = 1 / r),
                                  (this._cocTexSize.z = s),
                                  (this._cocTexSize.w = r);
                                var h = Math.max(Math.floor(s / 2), 1),
                                  p = Math.max(Math.floor(r / 2), 1),
                                  g = c,
                                  u = "DofPrefilter" + i,
                                  f = "DofBokeh" + i,
                                  m = "DofFilter" + i,
                                  _ = e.addRenderPass(s, r, "cc-dof-coc");
                                _.addRenderTarget(
                                  g,
                                  T.CLEAR,
                                  C.STORE,
                                  this._clearColorTransparentBlack
                                ),
                                  _.addTexture(l, "DepthTex"),
                                  _.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  _.setMat4("proj", o.matProj),
                                  _.setVec4("cocParams", this._cocParams),
                                  _.addQueue(I.OPAQUE).addCameraQuad(o, t, 0);
                                var b = e.addRenderPass(
                                  h,
                                  p,
                                  "cc-dof-prefilter"
                                );
                                b.addRenderTarget(
                                  u,
                                  T.CLEAR,
                                  C.STORE,
                                  this._clearColorTransparentBlack
                                ),
                                  b.addTexture(n, "colorTex"),
                                  b.addTexture(g, "cocTex"),
                                  b.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  b.setVec4(
                                    "mainTexTexelSize",
                                    this._cocTexSize
                                  ),
                                  b.addQueue(I.OPAQUE).addFullscreenQuad(t, 1);
                                var S = e.addRenderPass(h, p, "cc-dof-bokeh");
                                S.addRenderTarget(
                                  f,
                                  T.CLEAR,
                                  C.STORE,
                                  this._clearColorTransparentBlack
                                ),
                                  S.addTexture(u, "prefilterTex"),
                                  S.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  S.setVec4(
                                    "mainTexTexelSize",
                                    this._cocTexSize
                                  ),
                                  S.setVec4("cocParams", this._cocParams),
                                  S.addQueue(I.OPAQUE).addFullscreenQuad(t, 2);
                                var P = e.addRenderPass(h, p, "cc-dof-filter");
                                P.addRenderTarget(
                                  m,
                                  T.CLEAR,
                                  C.STORE,
                                  this._clearColorTransparentBlack
                                ),
                                  P.addTexture(f, "bokehTex"),
                                  P.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  P.setVec4(
                                    "mainTexTexelSize",
                                    this._cocTexSize
                                  ),
                                  P.addQueue(I.OPAQUE).addFullscreenQuad(t, 3);
                                var R = e.addRenderPass(s, r, "cc-dof-combine");
                                R.addRenderTarget(
                                  d,
                                  T.CLEAR,
                                  C.STORE,
                                  this._clearColorTransparentBlack
                                ),
                                  R.addTexture(n, "colorTex"),
                                  R.addTexture(g, "cocTex"),
                                  R.addTexture(m, "filterTex"),
                                  R.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  R.setVec4("cocParams", this._cocParams),
                                  R.addQueue(I.OPAQUE).addFullscreenQuad(t, 4);
                              }),
                              (g._addKawaseDualFilterBloomPasses = function (
                                e,
                                a,
                                t,
                                i,
                                o,
                                s,
                                r
                              ) {
                                var n = a.bloom.iterations,
                                  l = n + 1;
                                (this._bloomWidths.length = l),
                                  (this._bloomHeights.length = l),
                                  (this._bloomWidths[0] = Math.max(
                                    Math.floor(o / 2),
                                    1
                                  )),
                                  (this._bloomHeights[0] = Math.max(
                                    Math.floor(s / 2),
                                    1
                                  ));
                                for (var d = 1; d !== l; ++d)
                                  (this._bloomWidths[d] = Math.max(
                                    Math.floor(this._bloomWidths[d - 1] / 2),
                                    1
                                  )),
                                    (this._bloomHeights[d] = Math.max(
                                      Math.floor(this._bloomHeights[d - 1] / 2),
                                      1
                                    ));
                                this._bloomTexNames.length = l;
                                for (var c = 0; c !== l; ++c)
                                  this._bloomTexNames[c] =
                                    "BloomTex" + i + "_" + c;
                                (this._bloomParams.x = this._configs
                                  .useFloatOutput
                                  ? 1
                                  : 0),
                                  (this._bloomParams.x = 0),
                                  (this._bloomParams.z = a.bloom.threshold),
                                  (this._bloomParams.w = a.bloom.enableAlphaMask
                                    ? 1
                                    : 0);
                                var h = e.addRenderPass(
                                  this._bloomWidths[0],
                                  this._bloomHeights[0],
                                  "cc-bloom-prefilter"
                                );
                                h.addRenderTarget(
                                  this._bloomTexNames[0],
                                  T.CLEAR,
                                  C.STORE,
                                  this._clearColorTransparentBlack
                                ),
                                  h.addTexture(r, "inputTexture"),
                                  h.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  h.setVec4("bloomParams", this._bloomParams),
                                  h.addQueue(I.OPAQUE).addFullscreenQuad(t, 0);
                                for (var p = 1; p !== l; ++p) {
                                  var g = e.addRenderPass(
                                    this._bloomWidths[p],
                                    this._bloomHeights[p],
                                    "cc-bloom-downsample"
                                  );
                                  g.addRenderTarget(
                                    this._bloomTexNames[p],
                                    T.CLEAR,
                                    C.STORE,
                                    this._clearColorTransparentBlack
                                  ),
                                    g.addTexture(
                                      this._bloomTexNames[p - 1],
                                      "bloomTexture"
                                    ),
                                    (this._bloomTexSize.x =
                                      this._bloomWidths[p - 1]),
                                    (this._bloomTexSize.y =
                                      this._bloomHeights[p - 1]),
                                    g.setVec4(
                                      "g_platform",
                                      this._configs.platform
                                    ),
                                    g.setVec4(
                                      "bloomTexSize",
                                      this._bloomTexSize
                                    ),
                                    g
                                      .addQueue(I.OPAQUE)
                                      .addFullscreenQuad(t, 1);
                                }
                                for (var u = n; u-- > 0; ) {
                                  var f = e.addRenderPass(
                                    this._bloomWidths[u],
                                    this._bloomHeights[u],
                                    "cc-bloom-upsample"
                                  );
                                  f.addRenderTarget(
                                    this._bloomTexNames[u],
                                    T.CLEAR,
                                    C.STORE,
                                    this._clearColorTransparentBlack
                                  ),
                                    f.addTexture(
                                      this._bloomTexNames[u + 1],
                                      "bloomTexture"
                                    ),
                                    (this._bloomTexSize.x =
                                      this._bloomWidths[u + 1]),
                                    (this._bloomTexSize.y =
                                      this._bloomHeights[u + 1]),
                                    f.setVec4(
                                      "g_platform",
                                      this._configs.platform
                                    ),
                                    f.setVec4(
                                      "bloomTexSize",
                                      this._bloomTexSize
                                    ),
                                    f
                                      .addQueue(I.OPAQUE)
                                      .addFullscreenQuad(t, 2);
                                }
                                var m = e.addRenderPass(
                                  o,
                                  s,
                                  "cc-bloom-combine"
                                );
                                m.addRenderTarget(r, T.LOAD, C.STORE),
                                  m.addTexture(
                                    this._bloomTexNames[0],
                                    "bloomTexture"
                                  ),
                                  m.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  m.setVec4("bloomParams", this._bloomParams),
                                  m.addQueue(I.BLEND).addFullscreenQuad(t, 3);
                              }),
                              (g._addFsrPass = function (
                                e,
                                a,
                                t,
                                i,
                                o,
                                s,
                                r,
                                n,
                                l,
                                d
                              ) {
                                (this._fsrTexSize.x = o),
                                  (this._fsrTexSize.y = s),
                                  (this._fsrTexSize.z = n),
                                  (this._fsrTexSize.w = l),
                                  (this._fsrParams.x = p(
                                    1 - a.fsr.sharpness,
                                    0.02,
                                    0.98
                                  ));
                                var c = "FsrColor" + i,
                                  h = e.addRenderPass(n, l, "cc-fsr-easu");
                                h.addRenderTarget(
                                  c,
                                  T.CLEAR,
                                  C.STORE,
                                  this._clearColorTransparentBlack
                                ),
                                  h.addTexture(r, "outputResultMap"),
                                  h.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  h.setVec4("fsrTexSize", this._fsrTexSize),
                                  h.addQueue(I.OPAQUE).addFullscreenQuad(t, 0);
                                var g = e.addRenderPass(n, l, "cc-fsr-rcas");
                                return (
                                  g.addRenderTarget(
                                    d,
                                    T.CLEAR,
                                    C.STORE,
                                    this._clearColorTransparentBlack
                                  ),
                                  g.addTexture(c, "outputResultMap"),
                                  g.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  g.setVec4("fsrTexSize", this._fsrTexSize),
                                  g.setVec4("fsrParams", this._fsrParams),
                                  g.addQueue(I.OPAQUE).addFullscreenQuad(t, 1),
                                  g
                                );
                              }),
                              (g._addFxaaPass = function (e, a, t, i, o, s) {
                                (this._fxaaParams.x = t),
                                  (this._fxaaParams.y = i),
                                  (this._fxaaParams.z = 1 / t),
                                  (this._fxaaParams.w = 1 / i);
                                var r = e.addRenderPass(t, i, "cc-fxaa");
                                return (
                                  r.addRenderTarget(
                                    s,
                                    T.CLEAR,
                                    C.STORE,
                                    this._clearColorTransparentBlack
                                  ),
                                  r.addTexture(o, "sceneColorMap"),
                                  r.setVec4(
                                    "g_platform",
                                    this._configs.platform
                                  ),
                                  r.setVec4("texSize", this._fxaaParams),
                                  r.addQueue(I.OPAQUE).addFullscreenQuad(a, 0),
                                  r
                                );
                              }),
                              (g._addUIQueue = function (e, a) {
                                var t = H.UI;
                                this._cameraConfigs.enableProfiler &&
                                  ((t |= H.PROFILER), (a.showStatistics = !0)),
                                  a
                                    .addQueue(I.BLEND, "default", "default")
                                    .addScene(e, t);
                              }),
                              (g._addForwardRadiancePasses = function (
                                e,
                                a,
                                t,
                                i,
                                o,
                                s,
                                r,
                                n,
                                l,
                                d
                              ) {
                                void 0 === l && (l = !1),
                                  void 0 === d && (d = C.DISCARD);
                                var c = t.clearColor;
                                (this._clearColor.x = c.x),
                                  (this._clearColor.y = c.y),
                                  (this._clearColor.z = c.z),
                                  (this._clearColor.w = c.w);
                                var p = t.viewport;
                                (this._viewport.left = Math.round(p.x * i)),
                                  (this._viewport.top = Math.round(p.y * o)),
                                  (this._viewport.width = Math.max(
                                    Math.round(p.width * i),
                                    1
                                  )),
                                  (this._viewport.height = Math.max(
                                    Math.round(p.height * o),
                                    1
                                  ));
                                var g = !l && this._cameraConfigs.enableMSAA;
                                h(
                                  !g ||
                                    this._cameraConfigs
                                      .singleForwardRadiancePass
                                );
                                var u = this._cameraConfigs
                                  .singleForwardRadiancePass
                                  ? this._addForwardSingleRadiancePass(
                                      e,
                                      a,
                                      t,
                                      g,
                                      i,
                                      o,
                                      s,
                                      r,
                                      n,
                                      d
                                    )
                                  : this._addForwardMultipleRadiancePasses(
                                      e,
                                      a,
                                      t,
                                      i,
                                      o,
                                      s,
                                      r,
                                      n,
                                      d
                                    );
                                this._cameraConfigs
                                  .enableMainLightPlanarShadowMap &&
                                  this.addPlanarShadowQueue(t, s, u);
                                var f =
                                  H.BLEND |
                                  (t.geometryRenderer ? H.GEOMETRY : H.NONE);
                                return (
                                  u
                                    .addQueue(I.BLEND)
                                    .addScene(t, f, s || void 0),
                                  u
                                );
                              }),
                              (g._addForwardSingleRadiancePass = function (
                                e,
                                a,
                                t,
                                i,
                                o,
                                s,
                                r,
                                n,
                                l,
                                d
                              ) {
                                var c;
                                if (
                                  (h(
                                    this._cameraConfigs
                                      .singleForwardRadiancePass
                                  ),
                                  i)
                                ) {
                                  var p = "MsaaRadiance" + a,
                                    g = "MsaaDepthStencil" + a,
                                    u =
                                      this._cameraConfigs.settings.msaa
                                        .sampleCount,
                                    f = e.addMultisampleRenderPass(
                                      o,
                                      s,
                                      u,
                                      0,
                                      "default"
                                    );
                                  (f.name = "MsaaForwardPass"),
                                    this._buildForwardMainLightPass(
                                      f,
                                      a,
                                      t,
                                      p,
                                      g,
                                      C.DISCARD,
                                      r
                                    ),
                                    f.resolveRenderTarget(p, n),
                                    (c = f);
                                } else
                                  ((c = e.addRenderPass(o, s, "default")).name =
                                    "ForwardPass"),
                                    this._buildForwardMainLightPass(
                                      c,
                                      a,
                                      t,
                                      n,
                                      l,
                                      d,
                                      r
                                    );
                                return (
                                  h(void 0 !== c),
                                  this.forwardLighting.addLightQueues(
                                    c,
                                    t,
                                    this._configs.mobileMaxSpotLightShadowMaps
                                  ),
                                  c
                                );
                              }),
                              (g.addPlanarShadowQueue = function (e, a, t) {
                                t.addQueue(I.BLEND, "planar-shadow").addScene(
                                  e,
                                  H.SHADOW_CASTER | H.PLANAR_SHADOW | H.BLEND,
                                  a || void 0
                                );
                              }),
                              (g._addForwardMultipleRadiancePasses = function (
                                e,
                                a,
                                t,
                                i,
                                o,
                                s,
                                r,
                                n,
                                l
                              ) {
                                h(
                                  !this._cameraConfigs.singleForwardRadiancePass
                                );
                                var d = e.addRenderPass(i, o, "default");
                                d.name = "ForwardPass";
                                var c =
                                  this.forwardLighting.isMultipleLightPassesNeeded()
                                    ? C.STORE
                                    : l;
                                return (
                                  this._buildForwardMainLightPass(
                                    d,
                                    a,
                                    t,
                                    r,
                                    n,
                                    c,
                                    s
                                  ),
                                  this.forwardLighting.addLightPasses(
                                    r,
                                    n,
                                    l,
                                    a,
                                    i,
                                    o,
                                    t,
                                    this._viewport,
                                    e,
                                    d
                                  )
                                );
                              }),
                              (g._buildReflectionProbePass = function (
                                e,
                                a,
                                t,
                                i,
                                o,
                                r,
                                n
                              ) {
                                void 0 === n && (n = null);
                                var l = this._cameraConfigs.enableMSAA
                                  ? C.DISCARD
                                  : C.STORE;
                                if (O(t)) {
                                  (this._reflectionProbeClearColor.x =
                                    t.clearColor.x),
                                    (this._reflectionProbeClearColor.y =
                                      t.clearColor.y),
                                    (this._reflectionProbeClearColor.z =
                                      t.clearColor.z);
                                  var d = s.packRGBE(
                                    this._reflectionProbeClearColor
                                  );
                                  (this._clearColor.x = d.x),
                                    (this._clearColor.y = d.y),
                                    (this._clearColor.z = d.z),
                                    (this._clearColor.w = d.w),
                                    e.addRenderTarget(
                                      i,
                                      T.CLEAR,
                                      l,
                                      this._clearColor
                                    );
                                } else e.addRenderTarget(i, T.LOAD, l);
                                t.clearFlag & R.DEPTH_STENCIL
                                  ? e.addDepthStencil(
                                      o,
                                      T.CLEAR,
                                      C.DISCARD,
                                      t.clearDepth,
                                      t.clearStencil,
                                      t.clearFlag & R.DEPTH_STENCIL
                                    )
                                  : e.addDepthStencil(o, T.LOAD, C.DISCARD),
                                  this._cameraConfigs
                                    .enableMainLightShadowMap &&
                                    e.addTexture(
                                      "ShadowMap" + a,
                                      "cc_shadowMap"
                                    ),
                                  e
                                    .addQueue(I.NONE, "reflect-map")
                                    .addScene(
                                      t,
                                      H.OPAQUE | H.MASK | H.REFLECTION_PROBE,
                                      r || void 0,
                                      n || void 0
                                    );
                              }),
                              (g._tryAddReflectionProbePasses = function (
                                t,
                                s,
                                r,
                                n
                              ) {
                                var l = a.internal.reflectionProbeManager;
                                if (l)
                                  for (
                                    var d, c = l.getProbes(), h = 0, p = e(c);
                                    !(d = p()).done;

                                  ) {
                                    var g = d.value;
                                    if (g.needRender) {
                                      var u = g.renderArea(),
                                        f = Math.max(Math.floor(u.x), 1),
                                        m = Math.max(Math.floor(u.y), 1);
                                      if (
                                        g.probeType === o.scene.ProbeType.PLANAR
                                      ) {
                                        if (
                                          !this._cameraConfigs
                                            .enablePlanarReflectionProbe
                                        )
                                          continue;
                                        var _ = g.realtimePlanarTexture.window,
                                          b = "PlanarProbeRT" + h,
                                          S = "PlanarProbeDS" + h;
                                        t.addRenderWindow(
                                          b,
                                          this._cameraConfigs.radianceFormat,
                                          f,
                                          m,
                                          _
                                        ),
                                          t.addDepthStencil(
                                            S,
                                            i.Format.DEPTH_STENCIL,
                                            f,
                                            m,
                                            V.MEMORYLESS
                                          );
                                        var P = t.addRenderPass(
                                          f,
                                          m,
                                          "default"
                                        );
                                        (P.name = "PlanarReflectionProbe" + h),
                                          this._buildReflectionProbePass(
                                            P,
                                            s,
                                            g.camera,
                                            b,
                                            S,
                                            r,
                                            n
                                          );
                                      }
                                      if (4 == ++h) break;
                                    }
                                  }
                              }),
                              (g._initMaterials = function (e) {
                                return this._initialized
                                  ? 0
                                  : (B(e, this._configs),
                                    (this._copyAndTonemapMaterial._uuid =
                                      "builtin-pipeline-tone-mapping-material"),
                                    this._copyAndTonemapMaterial.initialize({
                                      effectName:
                                        "pipeline/post-process/tone-mapping",
                                    }),
                                    this._copyAndTonemapMaterial.effectAsset &&
                                      (this._initialized = !0),
                                    this._initialized ? 0 : 1);
                              }),
                              t
                            );
                          })();
                        s.setCustomPipeline("Builtin", new j());
                      }
                      a._RF.pop();
                    },
                  };
                }
              ),
              System.register(
                "chunks:///_virtual/internal",
                [
                  "./builtin-pipeline-settings.ts",
                  "./builtin-pipeline-types.ts",
                  "./builtin-pipeline.ts",
                ],
                function () {
                  return {
                    setters: [null, null, null],
                    execute: function () {},
                  };
                }
              ),
              (r = "virtual:///prerequisite-imports/internal"),
              (n = "chunks:///_virtual/internal"),
              System.register(r, [n], function (e, a) {
                return {
                  setters: [
                    function (a) {
                      var t = {};
                      for (var i in a)
                        "default" !== i && "__esModule" !== i && (t[i] = a[i]);
                      e(t);
                    },
                  ],
                  execute: function () {},
                };
              }),
              e("default", i.exports);
          },
          {}
        );
      },
    };
  }
);

System.register(
  "chunks:///_virtual/index3.js",
  ["./cjs-loader.mjs"],
  function (e, t) {
    var n;
    return {
      setters: [
        function (e) {
          n = e.default;
        },
      ],
      execute: function () {
        e("default", void 0);
        var r = e("__cjsMetaURL", t.meta.url);
        n.define(
          r,
          function (t, n, r, i, o) {
            var a, s;
            System.register(
              "chunks:///_virtual/FloatingText.ts",
              ["./rollupPluginModLoBabelHelpers.js", "cc"],
              function (e) {
                var t, n, r, i, o, a, s, l, c, u, p;
                return {
                  setters: [
                    function (e) {
                      (t = e.applyDecoratedDescriptor),
                        (n = e.inheritsLoose),
                        (r = e.initializerDefineProperty),
                        (i = e.assertThisInitialized);
                    },
                    function (e) {
                      (o = e.cclegacy),
                        (a = e._decorator),
                        (s = e.Label),
                        (l = e.Color),
                        (c = e.tween),
                        (u = e.Vec3),
                        (p = e.Component);
                    },
                  ],
                  execute: function () {
                    var f, h, g, b;
                    o._RF.push(
                      {},
                      "bd2afV6GjdEioGJ6Sb+apw4",
                      "FloatingText",
                      void 0
                    );
                    var d = a.ccclass,
                      m = a.property;
                    e(
                      "FloatingText",
                      d("FloatingText")(
                        ((g = t(
                          (h = (function (e) {
                            function t() {
                              for (
                                var t,
                                  n = arguments.length,
                                  o = new Array(n),
                                  a = 0;
                                a < n;
                                a++
                              )
                                o[a] = arguments[a];
                              return (
                                (t = e.call.apply(e, [this].concat(o)) || this),
                                r(t, "duration", g, i(t)),
                                r(t, "moveUpDistance", b, i(t)),
                                t
                              );
                            }
                            return (
                              n(t, e),
                              (t.prototype.start = function () {
                                var e = this,
                                  t =
                                    this.getComponent(s) ||
                                    this.getComponentInChildren(s);
                                t &&
                                  ((t.color = new l(
                                    t.color.r,
                                    t.color.g,
                                    t.color.b,
                                    255
                                  )),
                                  c(t)
                                    .to(this.duration, {
                                      color: new l(
                                        t.color.r,
                                        t.color.g,
                                        t.color.b,
                                        0
                                      ),
                                    })
                                    .start(),
                                  c(this.node)
                                    .by(this.duration, {
                                      position: new u(
                                        0,
                                        this.moveUpDistance,
                                        0
                                      ),
                                    })
                                    .call(function () {
                                      e.node.destroy();
                                    })
                                    .start());
                              }),
                              t
                            );
                          })(p)).prototype,
                          "duration",
                          [m],
                          {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return 1.5;
                            },
                          }
                        )),
                        (b = t(h.prototype, "moveUpDistance", [m], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return 300;
                          },
                        })),
                        (f = h))
                      ) || f
                    ),
                      o._RF.pop();
                  },
                };
              }
            ),
              System.register(
                "chunks:///_virtual/FriendsPage.ts",
                ["./rollupPluginModLoBabelHelpers.js", "cc"],
                function (e) {
                  var t, n, r, i, o, a, s, l, c, u, p, f, h;
                  return {
                    setters: [
                      function (e) {
                        (t = e.applyDecoratedDescriptor),
                          (n = e.inheritsLoose),
                          (r = e.initializerDefineProperty),
                          (i = e.assertThisInitialized),
                          (o = e.asyncToGenerator),
                          (a = e.regeneratorRuntime);
                      },
                      function (e) {
                        (s = e.cclegacy),
                          (l = e._decorator),
                          (c = e.ScrollView),
                          (u = e.Prefab),
                          (p = e.Label),
                          (f = e.instantiate),
                          (h = e.Component);
                      },
                    ],
                    execute: function () {
                      var g, b, d, m, y, L, v, k, w, P;
                      s._RF.push(
                        {},
                        "829ce7RYglPV6kmQF/Wbmbm",
                        "FriendsPage",
                        void 0
                      );
                      var T = l.ccclass,
                        x = l.property;
                      e(
                        "FriendsPage",
                        ((g = T("FriendsPage")),
                        (b = x(c)),
                        (d = x(u)),
                        (m = x(p)),
                        g(
                          ((v = t(
                            (L = (function (e) {
                              function t() {
                                for (
                                  var t,
                                    n = arguments.length,
                                    o = new Array(n),
                                    a = 0;
                                  a < n;
                                  a++
                                )
                                  o[a] = arguments[a];
                                return (
                                  (t =
                                    e.call.apply(e, [this].concat(o)) || this),
                                  r(t, "scrollView", v, i(t)),
                                  r(t, "friendItemPrefab", k, i(t)),
                                  r(t, "totalFriendsLabel", w, i(t)),
                                  r(t, "apiBaseUrl", P, i(t)),
                                  (t.userId = 777270195),
                                  t
                                );
                              }
                              n(t, e);
                              var s = t.prototype;
                              return (
                                (s.start = function () {
                                  this.fetchFriends();
                                }),
                                (s.fetchFriends = (function () {
                                  var e = o(
                                    a().mark(function e() {
                                      var t, n;
                                      return a().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.prev = 0),
                                                  (e.next = 3),
                                                  fetch(
                                                    this.apiBaseUrl +
                                                      "/" +
                                                      this.userId
                                                  )
                                                );
                                              case 3:
                                                if ((t = e.sent).ok) {
                                                  e.next = 9;
                                                  break;
                                                }
                                                if (404 !== t.status) {
                                                  e.next = 8;
                                                  break;
                                                }
                                                return (
                                                  (this.totalFriendsLabel.string =
                                                    "У тебя пока нет друзей"),
                                                  e.abrupt("return")
                                                );
                                              case 8:
                                                throw new Error(
                                                  "Network response was not ok"
                                                );
                                              case 9:
                                                return (e.next = 11), t.json();
                                              case 11:
                                                (n = e.sent),
                                                  console.log(
                                                    "Fetched friends:",
                                                    n
                                                  ),
                                                  (this.totalFriendsLabel.string =
                                                    "У тебя " +
                                                    n.length +
                                                    " друзей"),
                                                  this.populateFriendsList(n),
                                                  (e.next = 21);
                                                break;
                                              case 17:
                                                (e.prev = 17),
                                                  (e.t0 = e.catch(0)),
                                                  console.error(
                                                    "Ошибка при загрузке списка друзей:",
                                                    e.t0
                                                  ),
                                                  (this.totalFriendsLabel.string =
                                                    "Не удалось загрузить список друзей.");
                                              case 21:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        this,
                                        [[0, 17]]
                                      );
                                    })
                                  );
                                  return function () {
                                    return e.apply(this, arguments);
                                  };
                                })()),
                                (s.populateFriendsList = function (e) {
                                  var t = this,
                                    n = this.scrollView.content;
                                  console.log(
                                    "Populating friends list with",
                                    e.length,
                                    "friends."
                                  ),
                                    n.removeAllChildren(),
                                    e.forEach(function (e, r) {
                                      console.log(
                                        "Adding friend " + (r + 1) + ":",
                                        e
                                      );
                                      var i = f(t.friendItemPrefab);
                                      i.parent = n;
                                      var o = i.getComponentsInChildren(p);
                                      console.log(
                                        "Found " +
                                          o.length +
                                          " Label components in FriendItem."
                                      );
                                      var a = null,
                                        s = null,
                                        l = null;
                                      o.forEach(function (e) {
                                        var t = e.node.name;
                                        "UsernameLabel" === t
                                          ? (a = e)
                                          : "NumberLabel" === t
                                          ? (s = e)
                                          : "CoinsLabel" === t && (l = e);
                                      }),
                                        a && s && l
                                          ? ((a.string = e.username),
                                            (s.string = r + 1 + "."),
                                            (l.string = t.formatCoins(e.coins)),
                                            console.log(
                                              "Set Username: " +
                                                e.username +
                                                ", Number: " +
                                                (r + 1) +
                                                ", Coins: " +
                                                e.coins
                                            ))
                                          : (console.warn(
                                              "Не удалось найти один из Label компонентов в FriendItem"
                                            ),
                                            console.log(
                                              "Найденные Label узлы:",
                                              o.map(function (e) {
                                                return e.node.name;
                                              })
                                            ));
                                    });
                                }),
                                (s.formatCoins = function (e) {
                                  return e >= 1e6
                                    ? Math.round(e / 1e6) + "M"
                                    : Math.round(e).toLocaleString();
                                }),
                                t
                              );
                            })(h)).prototype,
                            "scrollView",
                            [b],
                            {
                              configurable: !0,
                              enumerable: !0,
                              writable: !0,
                              initializer: function () {
                                return null;
                              },
                            }
                          )),
                          (k = t(L.prototype, "friendItemPrefab", [d], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (w = t(L.prototype, "totalFriendsLabel", [m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (P = t(L.prototype, "apiBaseUrl", [x], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return "https://dev.simatap.ru/api/referrals";
                            },
                          })),
                          (y = L))
                        ) || y)
                      ),
                        s._RF.pop();
                    },
                  };
                }
              ),
              System.register(
                "chunks:///_virtual/IncomeManager.ts",
                ["./rollupPluginModLoBabelHelpers.js", "cc"],
                function (e) {
                  var t, n, r, i, o, a, s, l, c, u;
                  return {
                    setters: [
                      function (e) {
                        (t = e.applyDecoratedDescriptor),
                          (n = e.inheritsLoose),
                          (r = e.initializerDefineProperty),
                          (i = e.assertThisInitialized),
                          (o = e.asyncToGenerator),
                          (a = e.regeneratorRuntime);
                      },
                      function (e) {
                        (s = e.cclegacy),
                          (l = e._decorator),
                          (c = e.Label),
                          (u = e.Component);
                      },
                    ],
                    execute: function () {
                      var p, f, h, g, b;
                      s._RF.push(
                        {},
                        "a3599luME5HILUcjWVa3vL6",
                        "IncomeManager",
                        void 0
                      );
                      var d = l.ccclass,
                        m = l.property;
                      e(
                        "IncomeManager",
                        ((p = d("IncomeManager")),
                        (f = m(c)),
                        p(
                          ((b = t(
                            (g = (function (e) {
                              function t() {
                                for (
                                  var t,
                                    n = arguments.length,
                                    o = new Array(n),
                                    a = 0;
                                  a < n;
                                  a++
                                )
                                  o[a] = arguments[a];
                                return (
                                  (t =
                                    e.call.apply(e, [this].concat(o)) || this),
                                  r(t, "incomeLabel", b, i(t)),
                                  (t.apiUrl =
                                    "https://dev.simatap.ru/api/upgrades?userId=777270195"),
                                  t
                                );
                              }
                              n(t, e);
                              var s = t.prototype;
                              return (
                                (s.start = function () {
                                  this.incomeLabel
                                    ? this.fetchIncomeData()
                                    : console.error(
                                        "incomeLabel не назначен в IncomeManager."
                                      );
                                }),
                                (s.fetchIncomeData = (function () {
                                  var e = o(
                                    a().mark(function e() {
                                      var t, n, r, i;
                                      return a().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.prev = 0),
                                                  (e.next = 3),
                                                  fetch(this.apiUrl)
                                                );
                                              case 3:
                                                if ((t = e.sent).ok) {
                                                  e.next = 6;
                                                  break;
                                                }
                                                throw new Error(
                                                  "HTTP error! status: " +
                                                    t.status
                                                );
                                              case 6:
                                                return (e.next = 8), t.json();
                                              case 8:
                                                (n = e.sent),
                                                  (r =
                                                    this.calculateTotalIncome(
                                                      n
                                                    )),
                                                  (i = this.formatIncome(r)),
                                                  this.updateIncomeLabel(i),
                                                  console.log(
                                                    "Общий доход: " + i
                                                  ),
                                                  (e.next = 19);
                                                break;
                                              case 15:
                                                (e.prev = 15),
                                                  (e.t0 = e.catch(0)),
                                                  console.error(
                                                    "Ошибка при получении данных с API:",
                                                    e.t0
                                                  ),
                                                  this.updateIncomeLabel(
                                                    "+ 0 доход в час"
                                                  );
                                              case 19:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        this,
                                        [[0, 15]]
                                      );
                                    })
                                  );
                                  return function () {
                                    return e.apply(this, arguments);
                                  };
                                })()),
                                (s.calculateTotalIncome = function (e) {
                                  return e.reduce(function (e, t) {
                                    return e + (t.cumulative_income || 0);
                                  }, 0);
                                }),
                                (s.formatIncome = function (e) {
                                  return e >= 1e3
                                    ? "+ " +
                                        (e / 1e3).toFixed(0) +
                                        "K доход в час"
                                    : "+ " + e + " доход в час";
                                }),
                                (s.updateIncomeLabel = function (e) {
                                  this.incomeLabel.string = e;
                                }),
                                t
                              );
                            })(u)).prototype,
                            "incomeLabel",
                            [f],
                            {
                              configurable: !0,
                              enumerable: !0,
                              writable: !0,
                              initializer: function () {
                                return null;
                              },
                            }
                          )),
                          (h = g))
                        ) || h)
                      ),
                        s._RF.pop();
                    },
                  };
                }
              ),
              System.register(
                "chunks:///_virtual/LeadersPage.ts",
                ["./rollupPluginModLoBabelHelpers.js", "cc"],
                function (e) {
                  var t, n, r, i, o, a, s, l, c, u, p, f, h;
                  return {
                    setters: [
                      function (e) {
                        (t = e.applyDecoratedDescriptor),
                          (n = e.inheritsLoose),
                          (r = e.initializerDefineProperty),
                          (i = e.assertThisInitialized),
                          (o = e.asyncToGenerator),
                          (a = e.regeneratorRuntime);
                      },
                      function (e) {
                        (s = e.cclegacy),
                          (l = e._decorator),
                          (c = e.ScrollView),
                          (u = e.Prefab),
                          (p = e.Label),
                          (f = e.instantiate),
                          (h = e.Component);
                      },
                    ],
                    execute: function () {
                      var g, b, d, m, y, L, v, k, w, P, T, x, C, I;
                      s._RF.push(
                        {},
                        "509aaKVAOZOU4SArmn1DqkK",
                        "LeadersPage",
                        void 0
                      );
                      var z = l.ccclass,
                        F = l.property;
                      e(
                        "LeaderBoardPage",
                        ((g = z("LeaderBoardPage")),
                        (b = F(c)),
                        (d = F(u)),
                        (m = F(p)),
                        (y = F(p)),
                        (L = F(p)),
                        g(
                          ((w = t(
                            (k = (function (e) {
                              function t() {
                                for (
                                  var t,
                                    n = arguments.length,
                                    o = new Array(n),
                                    a = 0;
                                  a < n;
                                  a++
                                )
                                  o[a] = arguments[a];
                                return (
                                  (t =
                                    e.call.apply(e, [this].concat(o)) || this),
                                  r(t, "scrollView", w, i(t)),
                                  r(t, "leaderItemPrefab", P, i(t)),
                                  r(t, "currentRankLabel", T, i(t)),
                                  r(t, "currentUsernameLabel", x, i(t)),
                                  r(t, "currentCoinsLabel", C, i(t)),
                                  r(t, "apiBaseUrl", I, i(t)),
                                  (t.userId = 777270195),
                                  t
                                );
                              }
                              n(t, e);
                              var s = t.prototype;
                              return (
                                (s.start = function () {
                                  this.fetchLeaders();
                                }),
                                (s.fetchLeaders = (function () {
                                  var e = o(
                                    a().mark(function e() {
                                      var t, n;
                                      return a().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.prev = 0),
                                                  (e.next = 3),
                                                  fetch(
                                                    this.apiBaseUrl +
                                                      "?userId=" +
                                                      this.userId
                                                  )
                                                );
                                              case 3:
                                                if ((t = e.sent).ok) {
                                                  e.next = 9;
                                                  break;
                                                }
                                                if (404 !== t.status) {
                                                  e.next = 8;
                                                  break;
                                                }
                                                return (
                                                  console.warn(
                                                    "Топ-лидеров пока нет."
                                                  ),
                                                  e.abrupt("return")
                                                );
                                              case 8:
                                                throw new Error(
                                                  "Network response was not ok"
                                                );
                                              case 9:
                                                return (e.next = 11), t.json();
                                              case 11:
                                                (n = e.sent),
                                                  console.log(
                                                    "Fetched leaderboard data:",
                                                    n
                                                  ),
                                                  this.populateLeadersList(
                                                    n.top50
                                                  ),
                                                  n.currentUser &&
                                                    this.displayCurrentUser(
                                                      n.currentUser
                                                    ),
                                                  this.scrollView &&
                                                    this.scrollView.scrollToTop(
                                                      0,
                                                      !1
                                                    ),
                                                  (e.next = 21);
                                                break;
                                              case 18:
                                                (e.prev = 18),
                                                  (e.t0 = e.catch(0)),
                                                  console.error(
                                                    "Ошибка при загрузке списка лидеров:",
                                                    e.t0
                                                  );
                                              case 21:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        this,
                                        [[0, 18]]
                                      );
                                    })
                                  );
                                  return function () {
                                    return e.apply(this, arguments);
                                  };
                                })()),
                                (s.populateLeadersList = function (e) {
                                  var t = this,
                                    n = this.scrollView.content;
                                  console.log(
                                    "Populating leaderboard list with",
                                    e.length,
                                    "leaders."
                                  ),
                                    n.removeAllChildren(),
                                    e.forEach(function (e, r) {
                                      console.log(
                                        "Adding leader " + e.rank + ":",
                                        e
                                      );
                                      var i = f(t.leaderItemPrefab);
                                      i.parent = n;
                                      var o = i.getComponentsInChildren(p);
                                      console.log(
                                        "Found " +
                                          o.length +
                                          " Label components in LeaderItem."
                                      );
                                      var a = null,
                                        s = null,
                                        l = null;
                                      o.forEach(function (e) {
                                        var t = e.node.name;
                                        "NumberLabel" === t
                                          ? (a = e)
                                          : "UsernameLabel" === t
                                          ? (s = e)
                                          : "CoinsLabel" === t && (l = e);
                                      }),
                                        a && s && l
                                          ? ((a.string = "#" + e.rank),
                                            (s.string = e.username),
                                            (l.string = t.formatCoins(e.coins)),
                                            console.log(
                                              "Set Number: " +
                                                e.rank +
                                                ", Username: " +
                                                e.username +
                                                ", Coins: " +
                                                e.coins
                                            ))
                                          : (console.warn(
                                              "Не удалось найти один из Label компонентов в LeaderItem"
                                            ),
                                            console.log(
                                              "Найденные Label узлы:",
                                              o.map(function (e) {
                                                return e.node.name;
                                              })
                                            ));
                                    });
                                }),
                                (s.displayCurrentUser = function (e) {
                                  this.currentRankLabel
                                    ? (this.currentRankLabel.string =
                                        "#" + e.rank)
                                    : console.warn(
                                        "currentRankLabel не назначен в LeaderBoardPage."
                                      ),
                                    this.currentUsernameLabel
                                      ? (this.currentUsernameLabel.string =
                                          "" + e.username)
                                      : console.warn(
                                          "currentUsernameLabel не назначен в LeaderBoardPage."
                                        ),
                                    this.currentCoinsLabel
                                      ? (this.currentCoinsLabel.string =
                                          "" + this.formatCoins(e.coins))
                                      : console.warn(
                                          "currentCoinsLabel не назначен в LeaderBoardPage."
                                        );
                                }),
                                (s.formatCoins = function (e) {
                                  return e >= 1e6
                                    ? Math.round(e / 1e6) + "M"
                                    : Math.round(e).toLocaleString("ru-RU");
                                }),
                                t
                              );
                            })(h)).prototype,
                            "scrollView",
                            [b],
                            {
                              configurable: !0,
                              enumerable: !0,
                              writable: !0,
                              initializer: function () {
                                return null;
                              },
                            }
                          )),
                          (P = t(k.prototype, "leaderItemPrefab", [d], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (T = t(k.prototype, "currentRankLabel", [m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (x = t(k.prototype, "currentUsernameLabel", [y], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (C = t(k.prototype, "currentCoinsLabel", [L], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (I = t(k.prototype, "apiBaseUrl", [F], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return "https://dev.simatap.ru/api/users/leaders";
                            },
                          })),
                          (v = k))
                        ) || v)
                      ),
                        s._RF.pop();
                    },
                  };
                }
              ),
              System.register(
                "chunks:///_virtual/main",
                [
                  "./SpineController.ts.ts",
                  "./FloatingText.ts",
                  "./FriendsPage.ts",
                  "./IncomeManager.ts",
                  "./LeadersPage.ts",
                  "./ReferralLinkManager.ts",
                  "./SocketManager.ts",
                  "./TabBarController.ts",
                ],
                function () {
                  return {
                    setters: [null, null, null, null, null, null, null, null],
                    execute: function () {},
                  };
                }
              ),
              System.register(
                "chunks:///_virtual/ReferralLinkManager.ts",
                ["./rollupPluginModLoBabelHelpers.js", "cc"],
                function (e) {
                  var t, n, r, i, o, a, s, l, c, u, p, f, h, g;
                  return {
                    setters: [
                      function (e) {
                        (t = e.applyDecoratedDescriptor),
                          (n = e.inheritsLoose),
                          (r = e.initializerDefineProperty),
                          (i = e.assertThisInitialized),
                          (o = e.asyncToGenerator),
                          (a = e.regeneratorRuntime);
                      },
                      function (e) {
                        (s = e.cclegacy),
                          (l = e._decorator),
                          (c = e.Node),
                          (u = e.Label),
                          (p = e.Vec3),
                          (f = e.Component),
                          (h = e.Color),
                          (g = e.tween);
                      },
                    ],
                    execute: function () {
                      var b, d, m, y, L, v, k, w, P, T, x, C, I;
                      s._RF.push(
                        {},
                        "18bc3yUuD1GYI5rJViGJcp5",
                        "ReferralLinkManager",
                        void 0
                      );
                      var z = l.ccclass,
                        F = l.property;
                      e(
                        "ReferralLinkManager",
                        ((b = z("ReferralLinkManager")),
                        (d = F(c)),
                        (m = F(c)),
                        (y = F(u)),
                        (L = F(u)),
                        b(
                          ((w = t(
                            (k = (function (e) {
                              function t() {
                                for (
                                  var t,
                                    n = arguments.length,
                                    o = new Array(n),
                                    a = 0;
                                  a < n;
                                  a++
                                )
                                  o[a] = arguments[a];
                                return (
                                  (t =
                                    e.call.apply(e, [this].concat(o)) || this),
                                  r(t, "generateLinkNode", w, i(t)),
                                  r(t, "copyLinkNode", P, i(t)),
                                  r(t, "referralLinkLabel", T, i(t)),
                                  r(t, "copyNotificationLabel", x, i(t)),
                                  (t.referralLink = ""),
                                  (t.userId = 777270195),
                                  r(t, "animationDuration", C, i(t)),
                                  r(t, "moveUpDistance", I, i(t)),
                                  (t.initialPosition = new p()),
                                  t
                                );
                              }
                              n(t, e);
                              var s = t.prototype;
                              return (
                                (s.start = function () {
                                  this.generateLinkNode ||
                                    console.error(
                                      "generateLinkNode не назначен в ReferralLinkManager."
                                    ),
                                    this.copyLinkNode ||
                                      console.error(
                                        "copyLinkNode не назначен в ReferralLinkManager."
                                      ),
                                    this.referralLinkLabel ||
                                      console.error(
                                        "referralLinkLabel не назначен в ReferralLinkManager."
                                      ),
                                    this.copyNotificationLabel ||
                                      console.error(
                                        "copyNotificationLabel не назначен в ReferralLinkManager."
                                      ),
                                    this.generateLinkNode &&
                                      this.generateLinkNode.on(
                                        c.EventType.TOUCH_END,
                                        this.onGenerateLinkClicked,
                                        this
                                      ),
                                    this.copyLinkNode &&
                                      (this.copyLinkNode.on(
                                        c.EventType.TOUCH_END,
                                        this.onCopyLinkClicked,
                                        this
                                      ),
                                      (this.copyLinkNode.active = !1)),
                                    this.copyNotificationLabel &&
                                      ((this.copyNotificationLabel.node.active =
                                        !1),
                                      (this.initialPosition =
                                        this.copyNotificationLabel.node.position.clone()));
                                }),
                                (s.onGenerateLinkClicked = function () {
                                  (this.referralLink = this.getReferralLink(
                                    this.userId
                                  )),
                                    (this.referralLinkLabel.string =
                                      this.referralLink),
                                    console.log(
                                      "Реферальная ссылка создана: " +
                                        this.referralLink
                                    ),
                                    this.copyLinkNode &&
                                      (this.copyLinkNode.active = !0);
                                }),
                                (s.getReferralLink = function (e) {
                                  return (
                                    "https://t.me/misapatStage_bot?startapp=refId" +
                                    e
                                  );
                                }),
                                (s.onCopyLinkClicked = (function () {
                                  var e = o(
                                    a().mark(function e() {
                                      var t = this;
                                      return a().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                if (
                                                  (this.copyNotificationLabel &&
                                                    ((this.copyNotificationLabel.node.active =
                                                      !0),
                                                    (this.copyNotificationLabel.color =
                                                      new h(
                                                        255,
                                                        255,
                                                        255,
                                                        255
                                                      )),
                                                    this.copyNotificationLabel.node.setPosition(
                                                      this.initialPosition.clone()
                                                    ),
                                                    g(
                                                      this.copyNotificationLabel
                                                    )
                                                      .to(
                                                        this.animationDuration,
                                                        {
                                                          color: new h(
                                                            255,
                                                            255,
                                                            255,
                                                            0
                                                          ),
                                                        }
                                                      )
                                                      .start(),
                                                    g(
                                                      this.copyNotificationLabel
                                                        .node
                                                    )
                                                      .by(
                                                        this.animationDuration,
                                                        {
                                                          position: new p(
                                                            0,
                                                            this.moveUpDistance,
                                                            0
                                                          ),
                                                        }
                                                      )
                                                      .call(function () {
                                                        (t.copyNotificationLabel.node.active =
                                                          !1),
                                                          (t.copyNotificationLabel.color =
                                                            new h(
                                                              255,
                                                              255,
                                                              255,
                                                              255
                                                            )),
                                                          t.copyNotificationLabel.node.setPosition(
                                                            t.initialPosition.clone()
                                                          );
                                                      })
                                                      .start()),
                                                  this.referralLink)
                                                ) {
                                                  e.next = 4;
                                                  break;
                                                }
                                                return (
                                                  console.warn(
                                                    "Реферальная ссылка не создана."
                                                  ),
                                                  e.abrupt("return")
                                                );
                                              case 4:
                                                return (
                                                  (e.prev = 4),
                                                  (e.next = 7),
                                                  navigator.clipboard.writeText(
                                                    this.referralLink
                                                  )
                                                );
                                              case 7:
                                                console.log(
                                                  "Реферальная ссылка скопирована в буфер обмена."
                                                ),
                                                  (e.next = 13);
                                                break;
                                              case 10:
                                                (e.prev = 10),
                                                  (e.t0 = e.catch(4)),
                                                  console.error(
                                                    "Не удалось скопировать ссылку: ",
                                                    e.t0
                                                  );
                                              case 13:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        this,
                                        [[4, 10]]
                                      );
                                    })
                                  );
                                  return function () {
                                    return e.apply(this, arguments);
                                  };
                                })()),
                                t
                              );
                            })(f)).prototype,
                            "generateLinkNode",
                            [d],
                            {
                              configurable: !0,
                              enumerable: !0,
                              writable: !0,
                              initializer: function () {
                                return null;
                              },
                            }
                          )),
                          (P = t(k.prototype, "copyLinkNode", [m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (T = t(k.prototype, "referralLinkLabel", [y], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (x = t(k.prototype, "copyNotificationLabel", [L], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (C = t(k.prototype, "animationDuration", [F], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return 1.5;
                            },
                          })),
                          (I = t(k.prototype, "moveUpDistance", [F], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return 300;
                            },
                          })),
                          (v = k))
                        ) || v)
                      ),
                        s._RF.pop();
                    },
                  };
                }
              ),
              System.register(
                "chunks:///_virtual/SocketManager.ts",
                ["./rollupPluginModLoBabelHelpers.js", "cc"],
                function (e) {
                  var t, n, r, i, o, a, s, l, c, u;
                  return {
                    setters: [
                      function (e) {
                        (t = e.applyDecoratedDescriptor),
                          (n = e.inheritsLoose),
                          (r = e.initializerDefineProperty),
                          (i = e.assertThisInitialized);
                      },
                      function (e) {
                        (o = e.cclegacy),
                          (a = e._decorator),
                          (s = e.Label),
                          (l = e.ProgressBar),
                          (c = e.Color),
                          (u = e.Component);
                      },
                    ],
                    execute: function () {
                      var p, f, h, g, b, d, m, y, L, v, k;
                      o._RF.push(
                        {},
                        "a0c39VZ6j5NRrT6cxMHqDGB",
                        "SocketManager",
                        void 0
                      );
                      var w = a.ccclass,
                        P = a.property;
                      e(
                        "SocketManager",
                        ((p = w("SocketManager")),
                        (f = P(s)),
                        (h = P(l)),
                        (g = P(s)),
                        (b = P(s)),
                        p(
                          ((y = t(
                            (m = (function (e) {
                              function t() {
                                for (
                                  var t,
                                    n = arguments.length,
                                    o = new Array(n),
                                    a = 0;
                                  a < n;
                                  a++
                                )
                                  o[a] = arguments[a];
                                return (
                                  (t =
                                    e.call.apply(e, [this].concat(o)) || this),
                                  r(t, "coinsLabel", y, i(t)),
                                  r(t, "energyProgressBar", L, i(t)),
                                  r(t, "energyValueLabel", v, i(t)),
                                  r(t, "messagesLabel", k, i(t)),
                                  (t.socket = null),
                                  (t.userId = 777270195),
                                  (t.maxEnergy = 2e3),
                                  (t.currentEnergy = 0),
                                  t
                                );
                              }
                              n(t, e);
                              var o = t.prototype;
                              return (
                                (o.start = function () {
                                  this.coinsLabel &&
                                    this.energyProgressBar &&
                                    this.energyValueLabel &&
                                    this.messagesLabel &&
                                    (this.autoConnect(), this.showUserInfo(!1));
                                }),
                                (o.onDestroy = function () {
                                  this.socket && this.socket.disconnect();
                                }),
                                (o.autoConnect = function () {
                                  var e = this;
                                  try {
                                    (this.socket = io(
                                      "https://dev.simatap.ru",
                                      {
                                        transports: ["websocket"],
                                        secure: !0,
                                        rejectUnauthorized: !1,
                                      }
                                    )),
                                      this.socket.on("connect", function () {
                                        e.socket.emit("register", {
                                          userId: e.userId,
                                        }),
                                          e.showUserInfo(!0);
                                      }),
                                      this.socket.on("disconnect", function () {
                                        e.showMessage(
                                          "Отключено от сервера.",
                                          "danger"
                                        ),
                                          e.showUserInfo(!1);
                                      }),
                                      this.socket.on(
                                        "energyUpdated",
                                        function (t) {
                                          e.updateEnergy(t.energy_left);
                                        }
                                      ),
                                      this.socket.on(
                                        "coinsUpdated",
                                        function (t) {
                                          var n = Math.round(t.coins);
                                          e.coinsLabel.string =
                                            n.toLocaleString();
                                        }
                                      ),
                                      this.socket.on("tapError", function (t) {
                                        e.showMessage(t.message, "warning");
                                      }),
                                      this.socket.on(
                                        "registrationError",
                                        function (t) {
                                          e.showMessage(t.message, "danger"),
                                            e.showUserInfo(!1);
                                        }
                                      ),
                                      this.socket.on(
                                        "connect_error",
                                        function (t) {
                                          e.showMessage(
                                            "Ошибка подключения к серверу.",
                                            "danger"
                                          );
                                        }
                                      );
                                  } catch (e) {
                                    this.showMessage(
                                      "Ошибка подключения к серверу.",
                                      "danger"
                                    );
                                  }
                                }),
                                (o.onTap = function () {
                                  this.userId
                                    ? this.socket && this.socket.connected
                                      ? (this.socket.emit("tap", {
                                          userId: this.userId,
                                        }),
                                        this.showMessage(
                                          "Тап отправлен!",
                                          "info"
                                        ))
                                      : this.showMessage(
                                          "Соединение с сервером отсутствует.",
                                          "danger"
                                        )
                                    : this.showMessage(
                                        "Пользователь не подключен.",
                                        "danger"
                                      );
                                }),
                                (o.showMessage = function (e, t) {
                                  if (
                                    (void 0 === t && (t = "info"),
                                    this.messagesLabel)
                                  )
                                    switch (
                                      ((this.messagesLabel.string = e), t)
                                    ) {
                                      case "success":
                                        this.messagesLabel.node.color = new c(
                                          0,
                                          255,
                                          0
                                        );
                                        break;
                                      case "danger":
                                        this.messagesLabel.node.color = new c(
                                          255,
                                          0,
                                          0
                                        );
                                        break;
                                      case "warning":
                                        this.messagesLabel.node.color = new c(
                                          255,
                                          165,
                                          0
                                        );
                                        break;
                                      default:
                                        this.messagesLabel.node.color = new c(
                                          255,
                                          255,
                                          255
                                        );
                                    }
                                }),
                                (o.showUserInfo = function (e) {
                                  this.coinsLabel &&
                                    this.energyProgressBar &&
                                    this.energyValueLabel &&
                                    ((this.coinsLabel.node.active = e),
                                    (this.energyProgressBar.node.active = e),
                                    (this.energyValueLabel.node.active = e));
                                }),
                                (o.updateEnergy = function (e) {
                                  (e = Math.max(
                                    0,
                                    Math.min(this.maxEnergy, e)
                                  )),
                                    (this.currentEnergy = e);
                                  var t = e / this.maxEnergy;
                                  (this.energyProgressBar.progress = t),
                                    (this.energyValueLabel.string =
                                      e + "/" + this.maxEnergy);
                                }),
                                (o.getCurrentEnergy = function () {
                                  return this.currentEnergy;
                                }),
                                t
                              );
                            })(u)).prototype,
                            "coinsLabel",
                            [f],
                            {
                              configurable: !0,
                              enumerable: !0,
                              writable: !0,
                              initializer: function () {
                                return null;
                              },
                            }
                          )),
                          (L = t(m.prototype, "energyProgressBar", [h], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (v = t(m.prototype, "energyValueLabel", [g], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (k = t(m.prototype, "messagesLabel", [b], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (d = m))
                        ) || d)
                      ),
                        o._RF.pop();
                    },
                  };
                }
              ),
              System.register(
                "chunks:///_virtual/SpineController.ts.ts",
                [
                  "./rollupPluginModLoBabelHelpers.js",
                  "cc",
                  "./SocketManager.ts",
                ],
                function (e) {
                  var t, n, r, i, o, a, s, l, c, u, p, f, h, g;
                  return {
                    setters: [
                      function (e) {
                        (t = e.applyDecoratedDescriptor),
                          (n = e.inheritsLoose),
                          (r = e.initializerDefineProperty),
                          (i = e.assertThisInitialized);
                      },
                      function (e) {
                        (o = e.cclegacy),
                          (a = e._decorator),
                          (s = e.sp),
                          (l = e.Prefab),
                          (c = e.UITransform),
                          (u = e.Node),
                          (p = e.Vec3),
                          (f = e.instantiate),
                          (h = e.Component);
                      },
                      function (e) {
                        g = e.SocketManager;
                      },
                    ],
                    execute: function () {
                      var b, d, m, y, L, v, k, w, P;
                      o._RF.push(
                        {},
                        "7af28zZEkNKYY1uSBPGocx/",
                        "SpineController.ts",
                        void 0
                      );
                      var T = a.ccclass,
                        x = a.property;
                      e(
                        "SpineController",
                        ((b = T("SpineController")),
                        (d = x(s.Skeleton)),
                        (m = x(g)),
                        (y = x(l)),
                        b(
                          ((k = t(
                            (v = (function (e) {
                              function t() {
                                for (
                                  var t,
                                    n = arguments.length,
                                    o = new Array(n),
                                    a = 0;
                                  a < n;
                                  a++
                                )
                                  o[a] = arguments[a];
                                return (
                                  (t =
                                    e.call.apply(e, [this].concat(o)) || this),
                                  r(t, "spine", k, i(t)),
                                  r(t, "socketManager", w, i(t)),
                                  r(t, "floatingTextPrefab", P, i(t)),
                                  t
                                );
                              }
                              n(t, e);
                              var o = t.prototype;
                              return (
                                (o.onLoad = function () {
                                  var e = this.getComponent(c);
                                  e || (e = this.addComponent(c)),
                                    e.setContentSize(4e3, 3e3),
                                    e.setAnchorPoint(0.553265, 0.004952),
                                    this.node.on(
                                      u.EventType.TOUCH_END,
                                      this.onSpineClicked,
                                      this
                                    ),
                                    this.spine
                                      ? (this.spine.setAnimation(
                                          0,
                                          "Основная",
                                          !0
                                        ),
                                        this.spine.setCompleteListener(
                                          this.onAnimationComplete.bind(this)
                                        ))
                                      : console.warn(
                                          "Spine компонент не установлен в SpineController."
                                        );
                                }),
                                (o.onSpineClicked = function (e) {
                                  console.log("Spine animation clicked"),
                                    this.spine &&
                                      (this.spine.setAnimation(
                                        1,
                                        "Нажатие",
                                        !1
                                      ),
                                      this.spine.addAnimation(
                                        1,
                                        "Основная",
                                        !0,
                                        0
                                      )),
                                    this.socketManager
                                      ? (console.log(
                                          "Calling socketManager.onTap()"
                                        ),
                                        this.socketManager.onTap())
                                      : console.warn(
                                          "SocketManager не установлен в SpineController."
                                        );
                                  var t = e.getUILocation();
                                  console.log("Tap Position (UILocation):", t),
                                    this.spawnFloatingText(t);
                                }),
                                (o.onAnimationComplete = function (e) {
                                  e &&
                                    1 === e.trackIndex &&
                                    this.spine.setAnimation(1, "Основная", !0);
                                }),
                                (o.spawnFloatingText = function (e) {
                                  if (this.floatingTextPrefab) {
                                    var t =
                                      this.node.scene.getChildByName("Canvas");
                                    if (t) {
                                      var n = t.getComponent(c);
                                      if (n) {
                                        var r = n.contentSize;
                                        console.log("Canvas Size:", r);
                                        var i = e.x - r.width / 2,
                                          o = e.y - r.height / 2,
                                          a = new p(i, o, 100);
                                        console.log(
                                          "Converted Local Position:",
                                          a
                                        );
                                        var s = f(this.floatingTextPrefab);
                                        s.setParent(t),
                                          s.setPosition(a),
                                          console.log(
                                            "FloatingText Position Set To:",
                                            s.getPosition()
                                          );
                                      } else
                                        console.warn(
                                          "UITransform не найден на Canvas."
                                        );
                                    } else console.warn("Canvas не найден.");
                                  } else
                                    console.warn(
                                      "floatingTextPrefab не установлен в SpineController."
                                    );
                                }),
                                t
                              );
                            })(h)).prototype,
                            "spine",
                            [d],
                            {
                              configurable: !0,
                              enumerable: !0,
                              writable: !0,
                              initializer: function () {
                                return null;
                              },
                            }
                          )),
                          (w = t(v.prototype, "socketManager", [m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (P = t(v.prototype, "floatingTextPrefab", [y], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (L = v))
                        ) || L)
                      ),
                        o._RF.pop();
                    },
                  };
                }
              ),
              System.register(
                "chunks:///_virtual/TabBarController.ts",
                ["./rollupPluginModLoBabelHelpers.js", "cc"],
                function (e) {
                  var t, n, r, i, o, a, s, l, c, u, p, f, h;
                  return {
                    setters: [
                      function (e) {
                        (t = e.applyDecoratedDescriptor),
                          (n = e.inheritsLoose),
                          (r = e.initializerDefineProperty),
                          (i = e.assertThisInitialized);
                      },
                      function (e) {
                        (o = e.cclegacy),
                          (a = e._decorator),
                          (s = e.Node),
                          (l = e.Label),
                          (c = e.UIOpacity),
                          (u = e.tween),
                          (p = e.Vec3),
                          (f = e.Color),
                          (h = e.Component);
                      },
                    ],
                    execute: function () {
                      var g,
                        b,
                        d,
                        m,
                        y,
                        L,
                        v,
                        k,
                        w,
                        P,
                        T,
                        x,
                        C,
                        I,
                        z,
                        F,
                        S,
                        M,
                        U,
                        N,
                        _,
                        D,
                        R,
                        E,
                        B,
                        H,
                        A,
                        V,
                        j,
                        G,
                        O,
                        Y,
                        W,
                        K,
                        Z,
                        q,
                        J,
                        Q,
                        X,
                        $,
                        ee,
                        te,
                        ne;
                      o._RF.push(
                        {},
                        "40497KNIRZM96W3FB/cr0rR",
                        "TabBarController",
                        void 0
                      );
                      var re = a.ccclass,
                        ie = a.property;
                      e(
                        "TabBarController",
                        ((g = re("TabBarController")),
                        (b = ie(s)),
                        (d = ie(s)),
                        (m = ie(s)),
                        (y = ie(s)),
                        (L = ie(s)),
                        (v = ie(s)),
                        (k = ie(s)),
                        (w = ie(s)),
                        (P = ie(s)),
                        (T = ie(s)),
                        (x = ie(l)),
                        (C = ie(l)),
                        (I = ie(l)),
                        (z = ie(l)),
                        (F = ie(l)),
                        (S = ie(s)),
                        (M = ie(s)),
                        (U = ie(s)),
                        (N = ie(s)),
                        (_ = ie(s)),
                        g(
                          ((E = t(
                            (R = (function (e) {
                              function t() {
                                for (
                                  var t,
                                    n = arguments.length,
                                    o = new Array(n),
                                    a = 0;
                                  a < n;
                                  a++
                                )
                                  o[a] = arguments[a];
                                return (
                                  (t =
                                    e.call.apply(e, [this].concat(o)) || this),
                                  r(t, "mainPage", E, i(t)),
                                  r(t, "friendsPage", B, i(t)),
                                  r(t, "storePage", H, i(t)),
                                  r(t, "leadersPage", A, i(t)),
                                  r(t, "tasksPage", V, i(t)),
                                  r(t, "iconHome", j, i(t)),
                                  r(t, "iconFriends", G, i(t)),
                                  r(t, "iconStore", O, i(t)),
                                  r(t, "iconLeaders", Y, i(t)),
                                  r(t, "iconTasks", W, i(t)),
                                  r(t, "textHome", K, i(t)),
                                  r(t, "textFriends", Z, i(t)),
                                  r(t, "textStore", q, i(t)),
                                  r(t, "textLeaders", J, i(t)),
                                  r(t, "textTasks", Q, i(t)),
                                  r(t, "buttonHome", X, i(t)),
                                  r(t, "buttonFriends", $, i(t)),
                                  r(t, "buttonLeaders", ee, i(t)),
                                  r(t, "buttonTasks", te, i(t)),
                                  r(t, "activeButton", ne, i(t)),
                                  (t.currentTab = "home"),
                                  t
                                );
                              }
                              n(t, e);
                              var o = t.prototype;
                              return (
                                (o.onLoad = function () {
                                  var e = this;
                                  this.checkProperties(),
                                    this.showPage(this.currentTab, !1),
                                    this.iconHome.on(
                                      s.EventType.TOUCH_END,
                                      function () {
                                        e.showPage("home", !0);
                                      }
                                    ),
                                    this.iconFriends.on(
                                      s.EventType.TOUCH_END,
                                      function () {
                                        e.showPage("friends", !0);
                                      }
                                    ),
                                    this.iconStore.on(
                                      s.EventType.TOUCH_END,
                                      function () {
                                        e.showPage("store", !0);
                                      }
                                    ),
                                    this.iconLeaders.on(
                                      s.EventType.TOUCH_END,
                                      function () {
                                        e.showPage("leaders", !0);
                                      }
                                    ),
                                    this.iconTasks.on(
                                      s.EventType.TOUCH_END,
                                      function () {
                                        e.showPage("tasks", !0);
                                      }
                                    );
                                }),
                                (o.checkProperties = function () {
                                  [
                                    { name: "mainPage", value: this.mainPage },
                                    {
                                      name: "friendsPage",
                                      value: this.friendsPage,
                                    },
                                    {
                                      name: "storePage",
                                      value: this.storePage,
                                    },
                                    {
                                      name: "leadersPage",
                                      value: this.leadersPage,
                                    },
                                    {
                                      name: "tasksPage",
                                      value: this.tasksPage,
                                    },
                                    { name: "iconHome", value: this.iconHome },
                                    {
                                      name: "iconFriends",
                                      value: this.iconFriends,
                                    },
                                    {
                                      name: "iconStore",
                                      value: this.iconStore,
                                    },
                                    {
                                      name: "iconLeaders",
                                      value: this.iconLeaders,
                                    },
                                    {
                                      name: "iconTasks",
                                      value: this.iconTasks,
                                    },
                                    { name: "textHome", value: this.textHome },
                                    {
                                      name: "textFriends",
                                      value: this.textFriends,
                                    },
                                    {
                                      name: "textStore",
                                      value: this.textStore,
                                    },
                                    {
                                      name: "textLeaders",
                                      value: this.textLeaders,
                                    },
                                    {
                                      name: "textTasks",
                                      value: this.textTasks,
                                    },
                                    {
                                      name: "buttonHome",
                                      value: this.buttonHome,
                                    },
                                    {
                                      name: "buttonFriends",
                                      value: this.buttonFriends,
                                    },
                                    {
                                      name: "buttonLeaders",
                                      value: this.buttonLeaders,
                                    },
                                    {
                                      name: "buttonTasks",
                                      value: this.buttonTasks,
                                    },
                                    {
                                      name: "activeButton",
                                      value: this.activeButton,
                                    },
                                  ].forEach(function (e) {
                                    e.value ||
                                      console.warn(
                                        'Property "' +
                                          e.name +
                                          '" is not assigned in the inspector.'
                                      );
                                  });
                                }),
                                (o.showPage = function (e, t) {
                                  void 0 === t && (t = !0),
                                    e !== this.currentTab &&
                                      (this.hidePage(this.currentTab, t),
                                      this.showNewPage(e, t),
                                      this.updateTabUI(e),
                                      (this.currentTab = e));
                                }),
                                (o.hidePage = function (e, t) {
                                  var n = this.getPageNode(e);
                                  if (n) {
                                    var r = n.getComponent(c);
                                    r ||
                                      (console.warn(
                                        'UIOpacity component not found on "' +
                                          e +
                                          '" page. Adding one.'
                                      ),
                                      (r = n.addComponent(c))),
                                      t
                                        ? (u(n)
                                            .to(0.3, {
                                              scale: new p(0.95, 0.95, 1),
                                            })
                                            .start(),
                                          u(r)
                                            .to(0.3, { opacity: 0 })
                                            .call(function () {
                                              (n.active = !1),
                                                n.setScale(1, 1, 1),
                                                (r.opacity = 255),
                                                console.log(
                                                  'Page "' + e + '" скрыта.'
                                                );
                                            })
                                            .start())
                                        : ((n.active = !1),
                                          (r.opacity = 255),
                                          console.log(
                                            'Page "' +
                                              e +
                                              '" скрыта без анимации.'
                                          ));
                                  } else
                                    console.error(
                                      'Page node for "' + e + '" not found.'
                                    );
                                }),
                                (o.showNewPage = function (e, t) {
                                  var n = this.getPageNode(e);
                                  if (n) {
                                    n.active = !0;
                                    var r = n.getComponent(c);
                                    r ||
                                      (console.warn(
                                        'UIOpacity component not found on "' +
                                          e +
                                          '" page. Adding one.'
                                      ),
                                      (r = n.addComponent(c))),
                                      t
                                        ? ((r.opacity = 0),
                                          n.setScale(0.95, 0.95, 1),
                                          u(r)
                                            .to(0.3, { opacity: 255 })
                                            .start(),
                                          u(n)
                                            .to(0.3, {
                                              scale: new p(1.05, 1.05, 1),
                                            })
                                            .to(0.3, { scale: new p(1, 1, 1) })
                                            .call(function () {
                                              console.log(
                                                'Page "' + e + '" показана.'
                                              );
                                            })
                                            .start())
                                        : ((r.opacity = 255),
                                          n.setScale(1, 1, 1),
                                          console.log(
                                            'Page "' +
                                              e +
                                              '" показана без анимации.'
                                          ));
                                  } else
                                    console.error(
                                      'Page node for "' + e + '" not found.'
                                    );
                                }),
                                (o.getPageNode = function (e) {
                                  switch (e) {
                                    case "home":
                                      return this.mainPage;
                                    case "friends":
                                      return this.friendsPage;
                                    case "store":
                                      return this.storePage;
                                    case "leaders":
                                      return this.leadersPage;
                                    case "tasks":
                                      return this.tasksPage;
                                    default:
                                      return (
                                        console.warn("Unknown page: " + e), null
                                      );
                                  }
                                }),
                                (o.updateTabUI = function (e) {
                                  switch (
                                    ((this.textHome.color = f.GRAY),
                                    (this.textFriends.color = f.GRAY),
                                    (this.textStore.color = f.GRAY),
                                    (this.textLeaders.color = f.GRAY),
                                    (this.textTasks.color = f.GRAY),
                                    (this.activeButton.active = !1),
                                    (this.buttonHome.active = !1),
                                    (this.buttonFriends.active = !1),
                                    (this.buttonLeaders.active = !1),
                                    (this.buttonTasks.active = !1),
                                    e)
                                  ) {
                                    case "home":
                                      (this.textHome.color = f.WHITE),
                                        (this.buttonHome.active = !0);
                                      break;
                                    case "friends":
                                      (this.textFriends.color = f.WHITE),
                                        (this.buttonFriends.active = !0);
                                      break;
                                    case "store":
                                      (this.textStore.color = f.WHITE),
                                        (this.activeButton.active = !0);
                                      break;
                                    case "leaders":
                                      (this.textLeaders.color = f.WHITE),
                                        (this.buttonLeaders.active = !0);
                                      break;
                                    case "tasks":
                                      (this.textTasks.color = f.WHITE),
                                        (this.buttonTasks.active = !0);
                                  }
                                }),
                                t
                              );
                            })(h)).prototype,
                            "mainPage",
                            [b],
                            {
                              configurable: !0,
                              enumerable: !0,
                              writable: !0,
                              initializer: function () {
                                return null;
                              },
                            }
                          )),
                          (B = t(R.prototype, "friendsPage", [d], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (H = t(R.prototype, "storePage", [m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (A = t(R.prototype, "leadersPage", [y], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (V = t(R.prototype, "tasksPage", [L], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (j = t(R.prototype, "iconHome", [v], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (G = t(R.prototype, "iconFriends", [k], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (O = t(R.prototype, "iconStore", [w], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (Y = t(R.prototype, "iconLeaders", [P], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (W = t(R.prototype, "iconTasks", [T], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (K = t(R.prototype, "textHome", [x], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (Z = t(R.prototype, "textFriends", [C], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (q = t(R.prototype, "textStore", [I], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (J = t(R.prototype, "textLeaders", [z], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (Q = t(R.prototype, "textTasks", [F], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (X = t(R.prototype, "buttonHome", [S], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          ($ = t(R.prototype, "buttonFriends", [M], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (ee = t(R.prototype, "buttonLeaders", [U], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (te = t(R.prototype, "buttonTasks", [N], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (ne = t(R.prototype, "activeButton", [_], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return null;
                            },
                          })),
                          (D = R))
                        ) || D)
                      ),
                        o._RF.pop();
                    },
                  };
                }
              ),
              (a = "virtual:///prerequisite-imports/main"),
              (s = "chunks:///_virtual/main"),
              System.register(a, [s], function (e, t) {
                return {
                  setters: [
                    function (t) {
                      var n = {};
                      for (var r in t)
                        "default" !== r && "__esModule" !== r && (n[r] = t[r]);
                      e(n);
                    },
                  ],
                  execute: function () {},
                };
              }),
              e("default", r.exports);
          },
          {}
        );
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LeadersPage.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SocketManager.ts"],
  function (e) {
    var r, n, t, a, i, o, s, l, u, c, p, f, b, h;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (a = e.assertThisInitialized),
            (i = e.asyncToGenerator),
            (o = e.regeneratorRuntime);
        },
        function (e) {
          (s = e.cclegacy),
            (l = e._decorator),
            (u = e.ScrollView),
            (c = e.Prefab),
            (p = e.Label),
            (f = e.instantiate),
            (b = e.Component);
        },
        function (e) {
          h = e.SocketManager;
        },
      ],
      execute: function () {
        var m, g, d, L, w, k, U, y, v, C, P, I, _, B;
        s._RF.push({}, "509aaKVAOZOU4SArmn1DqkK", "LeadersPage", void 0);
        var M = l.ccclass,
          R = l.property;
        e(
          "LeaderBoardPage",
          ((m = M("LeaderBoardPage")),
          (g = R(u)),
          (d = R(c)),
          (L = R(p)),
          (w = R(p)),
          (k = R(p)),
          m(
            ((v = r(
              (y = (function (e) {
                function r() {
                  for (
                    var r, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (r = e.call.apply(e, [this].concat(i)) || this),
                    t(r, "scrollView", v, a(r)),
                    t(r, "leaderItemPrefab", C, a(r)),
                    t(r, "currentRankLabel", P, a(r)),
                    t(r, "currentUsernameLabel", I, a(r)),
                    t(r, "currentCoinsLabel", _, a(r)),
                    t(r, "apiBaseUrl", B, a(r)),
                    r
                  );
                }
                n(r, e);
                var s = r.prototype;
                return (
                  (s.start = function () {
                    h.instance
                      ? h.instance.getUserId()
                        ? this.fetchLeaders()
                        : console.error("userId не установлен в SocketManager.")
                      : console.error("SocketManager не инициализирован.");
                  }),
                  (s.fetchLeaders = (function () {
                    var e = i(
                      o().mark(function e() {
                        var r, n, t;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((r = h.instance.getUserId())) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "userId не установлен в SocketManager."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 4:
                                  return (
                                    (e.prev = 4),
                                    (e.next = 7),
                                    fetch(this.apiBaseUrl + "?userId=" + r)
                                  );
                                case 7:
                                  if ((n = e.sent).ok) {
                                    e.next = 13;
                                    break;
                                  }
                                  if (404 !== n.status) {
                                    e.next = 12;
                                    break;
                                  }
                                  return (
                                    console.warn("Топ-лидеров пока нет."),
                                    e.abrupt("return")
                                  );
                                case 12:
                                  throw new Error(
                                    "Network response was not ok"
                                  );
                                case 13:
                                  return (e.next = 15), n.json();
                                case 15:
                                  (t = e.sent),
                                    this.populateLeadersList(t.top50),
                                    t.currentUser &&
                                      this.displayCurrentUser(t.currentUser),
                                    this.scrollView &&
                                      this.scrollView.scrollToTop(0, !1),
                                    (e.next = 24);
                                  break;
                                case 21:
                                  (e.prev = 21),
                                    (e.t0 = e.catch(4)),
                                    console.error(
                                      "Ошибка при загрузке списка лидеров:",
                                      e.t0
                                    );
                                case 24:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[4, 21]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.populateLeadersList = function (e) {
                    var r = this,
                      n = this.scrollView.content;
                    n.removeAllChildren(),
                      e.forEach(function (e, t) {
                        var a = f(r.leaderItemPrefab);
                        a.parent = n;
                        var i = a.getComponentsInChildren(p),
                          o = null,
                          s = null,
                          l = null;
                        i.forEach(function (e) {
                          var r = e.node.name;
                          "NumberLabel" === r
                            ? (o = e)
                            : "UsernameLabel" === r
                            ? (s = e)
                            : "CoinsLabel" === r && (l = e);
                        }),
                          o && s && l
                            ? ((o.string = "#" + e.rank),
                              e.username && e.username.length > 0
                                ? (s.string = e.username)
                                : e.full_name && e.full_name.length > 0
                                ? (s.string = e.full_name)
                                : (s.string = "Анонимный игрок"),
                              (l.string = r.formatCoins(e.coins)))
                            : console.warn(
                                "Не удалось найти один из Label компонентов в LeaderItem"
                              );
                      });
                  }),
                  (s.displayCurrentUser = function (e) {
                    this.currentRankLabel
                      ? (this.currentRankLabel.string = "#" + e.rank)
                      : console.warn(
                          "currentRankLabel не назначен в LeaderBoardPage."
                        ),
                      this.currentUsernameLabel
                        ? e.username && e.username.length > 0
                          ? (this.currentUsernameLabel.string = e.username)
                          : e.full_name && e.full_name.length > 0
                          ? (this.currentUsernameLabel.string = e.full_name)
                          : (this.currentUsernameLabel.string =
                              "Анонимный игрок")
                        : console.warn(
                            "currentUsernameLabel не назначен в LeaderBoardPage."
                          ),
                      this.currentCoinsLabel
                        ? (this.currentCoinsLabel.string =
                            "" + this.formatCoins(e.coins))
                        : console.warn(
                            "currentCoinsLabel не назначен в LeaderBoardPage."
                          );
                  }),
                  (s.formatCoins = function (e) {
                    return e >= 1e6
                      ? Math.round(e / 1e6) + "M"
                      : Math.round(e).toLocaleString("ru-RU");
                  }),
                  r
                );
              })(b)).prototype,
              "scrollView",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (C = r(y.prototype, "leaderItemPrefab", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = r(y.prototype, "currentRankLabel", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = r(y.prototype, "currentUsernameLabel", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = r(y.prototype, "currentCoinsLabel", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = r(y.prototype, "apiBaseUrl", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "https://misapat.ru/api/users/leaders";
              },
            })),
            (U = y))
          ) || U)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoadingScreen.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var n, o, c, t, r;
    return {
      setters: [
        function (e) {
          n = e.inheritsLoose;
        },
        function (e) {
          (o = e.cclegacy),
            (c = e._decorator),
            (t = e.director),
            (r = e.Component);
        },
      ],
      execute: function () {
        var i;
        o._RF.push({}, "97f03u690dF5KopqdXd/SHJ", "LoadingScreen", void 0);
        var a = c.ccclass;
        c.property,
          e(
            "LoadingScreen",
            a("LoadingScreen")(
              (i = (function (e) {
                function o() {
                  return e.apply(this, arguments) || this;
                }
                n(o, e);
                var c = o.prototype;
                return (
                  (c.start = function () {
                    this.loadGameScene();
                  }),
                  (c.loadGameScene = function () {
                    t.preloadScene("MainScene", null, function () {
                      t.loadScene("MainScene");
                    });
                  }),
                  o
                );
              })(r))
            ) || i
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LockedModalEverydayCardItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var r, a, t, n, o, i, l, c;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (a = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (i = e._decorator),
            (l = e.Label),
            (c = e.Component);
        },
      ],
      execute: function () {
        var u, d, s, y, p;
        o._RF.push(
          {},
          "7e2a9899BlAeazduSbsIEds",
          "LockedModalEverydayCardItem",
          void 0
        );
        var b = i.ccclass,
          f = i.property;
        e(
          "LockedModalEverydayCardItem",
          ((u = b("LockedModalEverydayCardItem")),
          (d = f(l)),
          u(
            ((p = r(
              (y = (function (e) {
                function r() {
                  for (
                    var r, a = arguments.length, o = new Array(a), i = 0;
                    i < a;
                    i++
                  )
                    o[i] = arguments[i];
                  return (
                    (r = e.call.apply(e, [this].concat(o)) || this),
                    t(r, "numberOfDayLabel", p, n(r)),
                    r
                  );
                }
                return (
                  a(r, e),
                  (r.prototype.setDayNumber = function (e) {
                    this.numberOfDayLabel
                      ? (this.numberOfDayLabel.string = "День " + e)
                      : console.warn(
                          "numberOfDayLabel не назначен в LockedModalEverydayCardItem."
                        );
                  }),
                  r
                );
              })(c)).prototype,
              "numberOfDayLabel",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (s = y))
          ) || s)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/main",
  [
    "./SpineController.ts.ts",
    "./index.mjs_cjs=&original=2.js",
    "./index.mjs_cjs=&original=3.js",
    "./BoostController.ts",
    "./BoosterModal.ts",
    "./BoosterScrollView.ts",
    "./DailyCardsPage.ts",
    "./DayCard.ts",
    "./FloatingText.ts",
    "./FriendsPage.ts",
    "./IncomeManager.ts",
    "./LeadersPage.ts",
    "./LoadingScreen.ts",
    "./MarketModal.ts",
    "./MarketScrollView.ts",
    "./MarketTabController.ts",
    "./DailyCardsModal.ts",
    "./ProfileModal.ts",
    "./PassiveIncomeModal.ts",
    "./LockedModalEverydayCardItem.ts",
    "./UnlockModalEverydayCardItem.ts",
    "./QuestItem.ts",
    "./QuestsPage.ts",
    "./ReferralLinkManager.ts",
    "./SocketManager.ts",
    "./TabBarController.ts",
    "./Telegram.ts",
  ],
  function () {
    return {
      setters: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/MarketModal.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./MarketScrollView.ts"],
  function (t) {
    var e, i, n, r, o, a, s, l, u, c, p, h, m, b, d, f, g, k;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized),
            (o = t.asyncToGenerator),
            (a = t.regeneratorRuntime);
        },
        function (t) {
          (s = t.cclegacy),
            (l = t._decorator),
            (u = t.Label),
            (c = t.Node),
            (p = t.Sprite),
            (h = t.SpriteFrame),
            (m = t.Animation),
            (b = t.BlockInputEvents),
            (d = t.UITransform),
            (f = t.Button),
            (g = t.Component);
        },
        function (t) {
          k = t.MarketScrollView;
        },
      ],
      execute: function () {
        var S,
          y,
          I,
          M,
          L,
          w,
          v,
          C,
          x,
          z,
          N,
          A,
          D,
          F,
          E,
          T,
          P,
          V,
          B,
          R,
          U,
          _,
          j,
          H,
          O,
          K,
          G;
        s._RF.push({}, "0d5873T5+ZLn5A0pp0p3Xs8", "MarketModal", void 0);
        var X = l.ccclass,
          Y = l.property;
        t(
          "MarketModal",
          ((S = X("MarketModal")),
          (y = Y(u)),
          (I = Y(c)),
          (M = Y(p)),
          (L = Y(u)),
          (w = Y(u)),
          (v = Y(u)),
          (C = Y(c)),
          (x = Y(p)),
          (z = Y(h)),
          (N = Y(h)),
          (A = Y([h])),
          (D = Y(k)),
          S(
            ((T = e(
              (E = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "coinLabel", T, r(e)),
                    n(e, "xMarkNode", P, r(e)),
                    n(e, "imageSprite", V, r(e)),
                    n(e, "marketCountLabel", B, r(e)),
                    n(e, "titleLabel", R, r(e)),
                    n(e, "descrLabel", U, r(e)),
                    n(e, "buttonNode", _, r(e)),
                    n(e, "buttonSprite", j, r(e)),
                    n(e, "payButtonSprite", H, r(e)),
                    n(e, "noEnoughSprite", O, r(e)),
                    n(e, "marketItemSprites", K, r(e)),
                    n(e, "marketScrollView", G, r(e)),
                    (e.marketItemSpritesDict = {}),
                    (e.currentItem = null),
                    (e.userCoins = 1e6),
                    (e.animation = null),
                    (e.isAnimating = !1),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    this.initializeMarketItemSpritesDict(),
                      (this.animation = this.getComponent(m)),
                      this.animation ||
                        console.warn(
                          "Компонент Animation не найден на узле MarketModal. Пожалуйста, добавьте его в редакторе."
                        );
                    this.getComponent(b) || this.addComponent(b);
                    if (this.xMarkNode) {
                      var t = this.xMarkNode.getComponent(d);
                      t
                        ? t.setContentSize(100, 100)
                        : console.warn(
                            "Компонент UITransform не найден на узле xMarkNode."
                          ),
                        (
                          this.xMarkNode.getComponent(f) ||
                          this.xMarkNode.addComponent(f)
                        ).node.on(f.EventType.CLICK, this.hide, this);
                    }
                    this.buttonNode &&
                      (
                        this.buttonNode.getComponent(f) ||
                        this.buttonNode.addComponent(f)
                      ).node.on(f.EventType.CLICK, this.onPurchase, this);
                    this.animation &&
                      (this.animation.on(
                        m.EventType.PLAY,
                        this.onAnimationPlay,
                        this
                      ),
                      this.animation.on(
                        m.EventType.FINISHED,
                        this.onAnimationFinished,
                        this
                      )),
                      (this.node.active = !1);
                  }),
                  (s.initializeMarketItemSpritesDict = function () {
                    var t = this;
                    this.marketItemSprites.forEach(function (e) {
                      console.log("Имя спрайта для модалки:", e.name),
                        (t.marketItemSpritesDict[e.name] = e);
                    }),
                      console.log(
                        "Словарь спрайтов модалки инициализирован:",
                        Object.keys(this.marketItemSpritesDict)
                      );
                  }),
                  (s.onAnimationPlay = function () {
                    this.isAnimating = !0;
                  }),
                  (s.onAnimationFinished = function () {
                    (this.isAnimating = !1),
                      this.node.activeInHierarchy || (this.node.active = !1);
                  }),
                  (s.show = function (t) {
                    if (!this.isAnimating) {
                      (this.currentItem = t),
                        (this.coinLabel.string =
                          this.userCoins.toLocaleString("ru-RU"));
                      var e = this.marketItemSpritesDict[t.id.toString()];
                      if (e)
                        this.imageSprite
                          ? ((this.imageSprite.spriteFrame = e),
                            console.log("Установлен спрайт товара ID: " + t.id))
                          : console.error(
                              "imageSprite не назначен в MarketModal."
                            );
                      else {
                        console.warn("SpriteFrame не найден для ID: " + t.id);
                        var i = this.marketItemSpritesDict.default;
                        i &&
                          ((this.imageSprite.spriteFrame = i),
                          console.log(
                            "Установлен спрайт по умолчанию для товара ID: " +
                              t.id
                          ));
                      }
                      this.titleLabel && (this.titleLabel.string = t.title),
                        this.descrLabel &&
                          (this.descrLabel.string = t.description || ""),
                        this.marketCountLabel &&
                          (this.marketCountLabel.string =
                            "Осталось " + t.count + " шт."),
                        this.coinLabel &&
                          (this.coinLabel.string =
                            t.price.toLocaleString("ru-RU")),
                        this.buttonNode &&
                          (this.userCoins >= t.price && t.count > 0
                            ? this.buttonSprite
                              ? (this.buttonSprite.spriteFrame =
                                  this.payButtonSprite)
                              : console.error(
                                  "buttonSprite не назначен в MarketModal."
                                )
                            : this.buttonSprite
                            ? (this.buttonSprite.spriteFrame =
                                this.noEnoughSprite)
                            : console.error(
                                "buttonSprite не назначен в MarketModal."
                              )),
                        (this.node.active = !0),
                        this.animation &&
                          this.animation.clips.length > 0 &&
                          this.animation.play("SlideIn");
                    }
                  }),
                  (s.hide = function () {
                    this.isAnimating ||
                      (this.animation && this.animation.clips.length > 0
                        ? this.animation.play("SlideOut")
                        : (this.node.active = !1));
                  }),
                  (s.onPurchase = (function () {
                    var t = o(
                      a().mark(function t() {
                        var e, i, n, r;
                        return a().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (this.currentItem) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 2:
                                  if (
                                    !(
                                      this.userCoins >=
                                        this.currentItem.price &&
                                      this.currentItem.count > 0
                                    )
                                  ) {
                                    t.next = 34;
                                    break;
                                  }
                                  return (
                                    759417013,
                                    (e = this.currentItem.id),
                                    (i =
                                      "https://misapat.ru/api/market-items/purchase?userId=759417013&itemId=" +
                                      e),
                                    (t.prev = 6),
                                    (t.next = 9),
                                    fetch(i, { method: "POST" })
                                  );
                                case 9:
                                  return (n = t.sent), (t.next = 12), n.json();
                                case 12:
                                  if (((r = t.sent), !n.ok)) {
                                    t.next = 26;
                                    break;
                                  }
                                  if (
                                    (console.log("Товар успешно куплен:", r),
                                    (this.userCoins -= this.currentItem.price),
                                    (this.coinLabel.string =
                                      this.userCoins.toLocaleString("ru-RU")),
                                    this.hide(),
                                    !this.marketScrollView)
                                  ) {
                                    t.next = 23;
                                    break;
                                  }
                                  return (
                                    (t.next = 21),
                                    this.marketScrollView.fetchMarketItems()
                                  );
                                case 21:
                                  t.next = 24;
                                  break;
                                case 23:
                                  console.warn(
                                    "marketScrollView не назначен в MarketModal."
                                  );
                                case 24:
                                  t.next = 27;
                                  break;
                                case 26:
                                  console.error(
                                    "Ошибка при покупке товара:",
                                    r
                                  );
                                case 27:
                                  t.next = 32;
                                  break;
                                case 29:
                                  (t.prev = 29),
                                    (t.t0 = t.catch(6)),
                                    console.error(
                                      "Ошибка сети при покупке товара:",
                                      t.t0
                                    );
                                case 32:
                                  t.next = 35;
                                  break;
                                case 34:
                                  console.log(
                                    "Недостаточно монет или товара нет в наличии для покупки"
                                  );
                                case 35:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[6, 29]]
                        );
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })()),
                  e
                );
              })(g)).prototype,
              "coinLabel",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (P = e(E.prototype, "xMarkNode", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(E.prototype, "imageSprite", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(E.prototype, "marketCountLabel", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(E.prototype, "titleLabel", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(E.prototype, "descrLabel", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = e(E.prototype, "buttonNode", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = e(E.prototype, "buttonSprite", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(E.prototype, "payButtonSprite", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(E.prototype, "noEnoughSprite", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = e(E.prototype, "marketItemSprites", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (G = e(E.prototype, "marketScrollView", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = E))
          ) || F)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MarketScrollView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./MarketModal.ts"],
  function (e) {
    var r, t, n, a, i, o, c, s, l, u, p, d, f, h, b, m, w, C, g;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (a = e.assertThisInitialized),
            (i = e.asyncToGenerator),
            (o = e.regeneratorRuntime),
            (c = e.createForOfIteratorHelperLoose);
        },
        function (e) {
          (s = e.cclegacy),
            (l = e._decorator),
            (u = e.Prefab),
            (p = e.Node),
            (d = e.SpriteFrame),
            (f = e.Component),
            (h = e.Layout),
            (b = e.instantiate),
            (m = e.Sprite),
            (w = e.Label),
            (C = e.resources);
        },
        function (e) {
          g = e.MarketModal;
        },
      ],
      execute: function () {
        var k, D, y, v, P, S, I, B, x, M, L, z, T, N, F, R, A;
        s._RF.push({}, "cc0125FA1xF2qe5sm5mSkIX", "MarketScrollView", void 0);
        var H = l.ccclass,
          V = l.property;
        e(
          "MarketScrollView",
          ((k = H("MarketScrollView")),
          (D = V(u)),
          (y = V(u)),
          (v = V(u)),
          (P = V(p)),
          (S = V([d])),
          (I = V([d])),
          (B = V(g)),
          k(
            ((L = r(
              (M = (function (e) {
                function r() {
                  for (
                    var r, t = arguments.length, i = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (r = e.call.apply(e, [this].concat(i)) || this),
                    n(r, "bannerPrefab", L, a(r)),
                    n(r, "cardPrefab", z, a(r)),
                    n(r, "cardRowPrefab", T, a(r)),
                    n(r, "scrollContent", N, a(r)),
                    n(r, "cardSprites", F, a(r)),
                    n(r, "bannerSprites", R, a(r)),
                    n(r, "marketModal", A, a(r)),
                    (r.cardSpritesDict = {}),
                    (r.bannerSpritesDict = {}),
                    r
                  );
                }
                t(r, e);
                var s = r.prototype;
                return (
                  (s.onLoad = function () {
                    this.initializeCardSpritesDict(),
                      this.initializeBannerSpritesDict(),
                      this.fetchMarketItems(),
                      this.logAvailableCards(),
                      this.logAvailableBanners();
                  }),
                  (s.initializeCardSpritesDict = function () {
                    var e = this;
                    this.cardSprites.forEach(function (r) {
                      e.cardSpritesDict[r.name] = r;
                    });
                  }),
                  (s.initializeBannerSpritesDict = function () {
                    var e = this;
                    this.bannerSprites.forEach(function (r) {
                      e.bannerSpritesDict[r.name] = r;
                    });
                  }),
                  (s.fetchMarketItems = (function () {
                    var e = i(
                      o().mark(function e() {
                        var r, t;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    fetch("https://misapat.ru/api/market-items")
                                  );
                                case 3:
                                  if ((r = e.sent).ok) {
                                    e.next = 6;
                                    break;
                                  }
                                  throw new Error(
                                    "HTTP error! статус: " + r.status
                                  );
                                case 6:
                                  return (e.next = 8), r.json();
                                case 8:
                                  (t = e.sent),
                                    this.populateScrollView(t),
                                    (e.next = 15);
                                  break;
                                case 12:
                                  (e.prev = 12),
                                    (e.t0 = e.catch(0)),
                                    console.error(
                                      "Не удалось получить элементы рынка:",
                                      e.t0
                                    );
                                case 15:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 12]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.populateScrollView = (function () {
                    var e = i(
                      o().mark(function e(r) {
                        var t, n, a, i, s, l, u, p;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.scrollContent.removeAllChildren(),
                                    (n = null),
                                    (a = 0),
                                    (i = c(r));
                                case 4:
                                  if ((s = i()).done) {
                                    e.next = 30;
                                    break;
                                  }
                                  if ("banner" !== (l = s.value).type) {
                                    e.next = 15;
                                    break;
                                  }
                                  return (
                                    n &&
                                      a > 0 &&
                                      (this.scrollContent.addChild(n),
                                      (n = null),
                                      (a = 0)),
                                    (u = b(this.bannerPrefab)),
                                    (e.next = 11),
                                    this.setupBanner(u, l)
                                  );
                                case 11:
                                  this.scrollContent.addChild(u),
                                    this.addItemClickHandler(u, l),
                                    (e.next = 28);
                                  break;
                                case 15:
                                  if ("cardWithImage" !== l.type) {
                                    e.next = 28;
                                    break;
                                  }
                                  if (n) {
                                    e.next = 21;
                                    break;
                                  }
                                  if (this.cardRowPrefab) {
                                    e.next = 20;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "Префаб CardRow не назначен."
                                    ),
                                    e.abrupt("continue", 28)
                                  );
                                case 20:
                                  n = b(this.cardRowPrefab);
                                case 21:
                                  return (
                                    (p = b(this.cardPrefab)),
                                    (e.next = 24),
                                    this.setupCard(p, l)
                                  );
                                case 24:
                                  n.addChild(p),
                                    a++,
                                    this.addItemClickHandler(p, l),
                                    a >= 2 &&
                                      (this.scrollContent.addChild(n),
                                      (n = null),
                                      (a = 0));
                                case 28:
                                  e.next = 4;
                                  break;
                                case 30:
                                  n && a > 0 && this.scrollContent.addChild(n),
                                    null ==
                                      (t =
                                        this.scrollContent.getComponent(h)) ||
                                      t.updateLayout();
                                case 32:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (r) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.setupBanner = (function () {
                    var e = i(
                      o().mark(function e(r, t) {
                        var n, a, i, c, s, l, u, p, d;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (a = r.getChildByName("Image"))
                                    ? ((i = a.getComponent(m)),
                                      (c = this.bannerSpritesDict["" + t.id]),
                                      i && c
                                        ? (i.spriteFrame = c)
                                        : (console.warn(
                                            "Не удалось установить спрайт баннера из словаря для ID: " +
                                              t.id
                                          ),
                                          console.warn(
                                            "Доступные ключи в bannerSpritesDict: " +
                                              Object.keys(
                                                this.bannerSpritesDict
                                              ).join(", ")
                                          ),
                                          (s =
                                            this.bannerSpritesDict.default) &&
                                            (i.spriteFrame = s)))
                                    : console.warn(
                                        "Не найден узел Image в Banner Prefab для ID: " +
                                          t.id
                                      ),
                                    (l = r.getChildByName("Title"))
                                      ? (u = l.getComponent(w))
                                        ? (u.string = t.title)
                                        : console.warn(
                                            "Компонент Label не найден на узле Title в Banner Prefab для ID: " +
                                              t.id
                                          )
                                      : console.warn(
                                          "Не найден узел Title в Banner Prefab для ID: " +
                                            t.id
                                        ),
                                    (p =
                                      null == (n = r.getChildByName("coin"))
                                        ? void 0
                                        : n.getChildByName("Price"))
                                      ? (d = p.getComponent(w))
                                        ? (d.string = this.formatPriceBanner(
                                            t.price
                                          ))
                                        : console.warn(
                                            "Компонент Label не найден на узле Price в Banner Prefab для ID: " +
                                              t.id
                                          )
                                      : console.warn(
                                          "Не найден узел Price в Banner Prefab для ID: " +
                                            t.id
                                        );
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (r, t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.setupCard = (function () {
                    var e = i(
                      o().mark(function e(r, t) {
                        var n, a, i, c, s, l, u, p, d, f, h;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (a = r.getChildByName("Image"))
                                    ? ((i = a.getComponent(m)),
                                      (c = this.cardSpritesDict["" + t.id]),
                                      i && c
                                        ? (i.spriteFrame = c)
                                        : (console.warn(
                                            "Не удалось установить спрайт карточки из словаря для ID: " +
                                              t.id
                                          ),
                                          console.warn(
                                            "Доступные ключи в cardSpritesDict: " +
                                              Object.keys(
                                                this.cardSpritesDict
                                              ).join(", ")
                                          ),
                                          (s = this.cardSpritesDict.default) &&
                                            (i.spriteFrame = s)))
                                    : console.warn(
                                        "Не найден узел Image в Card Prefab для ID: " +
                                          t.id
                                      ),
                                    (l = r.getChildByName("Title"))
                                      ? (u = l.getComponent(w))
                                        ? (u.string = t.title)
                                        : console.warn(
                                            "Компонент Label не найден на узле Title в Card Prefab для ID: " +
                                              t.id
                                          )
                                      : console.warn(
                                          "Не найден узел Title в Card Prefab для ID: " +
                                            t.id
                                        ),
                                    (p = r.getChildByName("Descr")) &&
                                    t.description
                                      ? (d = p.getComponent(w))
                                        ? (d.string = t.description)
                                        : console.warn(
                                            "Компонент Label не найден на узле Descr в Card Prefab для ID: " +
                                              t.id
                                          )
                                      : t.description
                                      ? console.warn(
                                          "Не найден узел Descr в Card Prefab для ID: " +
                                            t.id
                                        )
                                      : console.warn(
                                          "Описание не предоставлено для карточки ID: " +
                                            t.id
                                        ),
                                    (f =
                                      null == (n = r.getChildByName("coin"))
                                        ? void 0
                                        : n.getChildByName("Price"))
                                      ? (h = f.getComponent(w))
                                        ? (h.string = this.formatPriceCard(
                                            t.price
                                          ))
                                        : console.warn(
                                            "Компонент Label не найден на узле Price в Card Prefab для ID: " +
                                              t.id
                                          )
                                      : console.warn(
                                          "Не найден узел Price в Card Prefab для ID: " +
                                            t.id
                                        );
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (r, t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.addItemClickHandler = function (e, r) {
                    var t = this;
                    e.on(
                      p.EventType.TOUCH_END,
                      function () {
                        t.openModal(r);
                      },
                      this
                    );
                  }),
                  (s.openModal = function (e) {
                    this.marketModal
                      ? this.marketModal.show(e)
                      : console.warn(
                          "marketModal не назначен в MarketScrollView."
                        );
                  }),
                  (s.formatPriceBanner = function (e) {
                    return e.toLocaleString("ru-RU");
                  }),
                  (s.formatPriceCard = function (e) {
                    return e >= 1e6 ? e / 1e6 + "M" : e.toLocaleString("ru-RU");
                  }),
                  (s.logAvailableCards = (function () {
                    var e = i(
                      o().mark(function e() {
                        return o().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                C.loadDir(
                                  "images/backgrounds/market/cards",
                                  d,
                                  function (e, r) {
                                    e &&
                                      console.error(
                                        "Ошибка загрузки директории карточек:",
                                        e
                                      );
                                  }
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.logAvailableBanners = (function () {
                    var e = i(
                      o().mark(function e() {
                        return o().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                C.loadDir(
                                  "images/backgrounds/market/banners",
                                  d,
                                  function (e, r) {
                                    e &&
                                      console.error(
                                        "Ошибка загрузки директории баннеров:",
                                        e
                                      );
                                  }
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  r
                );
              })(f)).prototype,
              "bannerPrefab",
              [D],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (z = r(M.prototype, "cardPrefab", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = r(M.prototype, "cardRowPrefab", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = r(M.prototype, "scrollContent", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = r(M.prototype, "cardSprites", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (R = r(M.prototype, "bannerSprites", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (A = r(M.prototype, "marketModal", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = M))
          ) || x)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MarketTabController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    var e, r, a, i, n, o, l, u, b, s;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (r = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy),
            (o = t._decorator),
            (l = t.Node),
            (u = t.Label),
            (b = t.Color),
            (s = t.Component);
        },
      ],
      execute: function () {
        var c, T, h, p, y, v, f, g, C, k, B, m, d, z, M;
        n._RF.push(
          {},
          "4925f4FqhFPiZXmQ22WFh5o",
          "MarketTabController",
          void 0
        );
        var w = o.ccclass,
          L = o.property;
        t(
          "MarketTabController",
          ((c = w("MarketTabController")),
          (T = L(l)),
          (h = L(l)),
          (p = L(l)),
          (y = L(l)),
          (v = L(l)),
          (f = L(l)),
          c(
            ((k = e(
              (C = (function (t) {
                function e() {
                  for (
                    var e, r = arguments.length, n = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(n)) || this),
                    a(e, "marketTabBar", k, i(e)),
                    a(e, "zagolovok", B, i(e)),
                    a(e, "tovariTab", m, i(e)),
                    a(e, "busteryTab", d, i(e)),
                    a(e, "tovariContent", z, i(e)),
                    a(e, "busteryContent", M, i(e)),
                    e
                  );
                }
                r(e, t);
                var n = e.prototype;
                return (
                  (n.start = function () {
                    this.busteryTab.on(
                      l.EventType.TOUCH_END,
                      this.onBusteryTabClicked,
                      this
                    ),
                      this.tovariTab.on(
                        l.EventType.TOUCH_END,
                        this.onTovariTabClicked,
                        this
                      );
                  }),
                  (n.onBusteryTabClicked = function (t) {
                    this.toggleMarketTabBarButton(this.busteryTab, !0),
                      this.toggleMarketTabBarButton(this.tovariTab, !1),
                      this.setLabelOpacity(this.busteryTab, 255),
                      this.setLabelOpacity(this.tovariTab, 140),
                      (this.busteryContent.active = !0),
                      (this.tovariContent.active = !1);
                  }),
                  (n.onTovariTabClicked = function (t) {
                    this.toggleMarketTabBarButton(this.busteryTab, !1),
                      this.toggleMarketTabBarButton(this.tovariTab, !0),
                      this.setLabelOpacity(this.busteryTab, 140),
                      this.setLabelOpacity(this.tovariTab, 255),
                      (this.busteryContent.active = !1),
                      (this.tovariContent.active = !0);
                  }),
                  (n.toggleMarketTabBarButton = function (t, e) {
                    var r = t.getChildByName("marketTabBarButton");
                    r && (r.active = e);
                  }),
                  (n.setLabelOpacity = function (t, e) {
                    var r = t.getComponent(u);
                    r && (r.color = new b(255, 255, 255, e));
                  }),
                  e
                );
              })(s)).prototype,
              "marketTabBar",
              [T],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (B = e(C.prototype, "zagolovok", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = e(C.prototype, "tovariTab", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = e(C.prototype, "busteryTab", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(C.prototype, "tovariContent", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(C.prototype, "busteryContent", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = C))
          ) || g)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PassiveIncomeModal.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SocketManager.ts"],
  function (e) {
    var n, t, o, r, s, a, i, c, l, u, d, p;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (r = e.assertThisInitialized),
            (s = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          (i = e.cclegacy),
            (c = e._decorator),
            (l = e.Label),
            (u = e.Node),
            (d = e.Component);
        },
        function (e) {
          p = e.SocketManager;
        },
      ],
      execute: function () {
        var h, m, f, v, b, g, N, I, y;
        i._RF.push({}, "dacc2yNsjdBz4TFNY64wdg5", "PassiveIncomeModal", void 0);
        var w = c.ccclass,
          k = c.property;
        e(
          "PassiveIncomeModal",
          ((h = w("PassiveIncomeModal")),
          (m = k(l)),
          (f = k(u)),
          (v = k(u)),
          h(
            ((N = n(
              (g = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, s = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (n = e.call.apply(e, [this].concat(s)) || this),
                    o(n, "incomeLabel", N, r(n)),
                    o(n, "modalNode", I, r(n)),
                    o(n, "closeNode", y, r(n)),
                    (n.userId = null),
                    n
                  );
                }
                t(n, e);
                var i = n.prototype;
                return (
                  (i.start = function () {
                    (this.userId = p.instance.getUserId()),
                      this.modalNode && (this.modalNode.active = !1),
                      this.closeNode
                        ? this.closeNode.on(
                            u.EventType.TOUCH_END,
                            this.onCloseClicked,
                            this
                          )
                        : console.warn(
                            "closeNode не назначен в PassiveIncomeModal."
                          );
                  }),
                  (i.show = (function () {
                    var e = s(
                      a().mark(function e() {
                        var n, t;
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!this.incomeLabel || !this.modalNode) {
                                    e.next = 7;
                                    break;
                                  }
                                  return (
                                    (e.next = 3), this.fetchPassiveIncome()
                                  );
                                case 3:
                                  (n = e.sent) > 0
                                    ? ((t = Math.round(n)),
                                      console.log(
                                        "PassiveIncomeModal.show получил income: " +
                                          n +
                                          ", округлено до: " +
                                          t
                                      ),
                                      (this.incomeLabel.string = "+ " + t),
                                      (this.modalNode.active = !0))
                                    : console.log(
                                        "Пассивный доход равен нулю, модальное окно не будет показано."
                                      ),
                                    (e.next = 8);
                                  break;
                                case 7:
                                  console.error(
                                    "incomeLabel или modalNode не назначены в PassiveIncomeModal."
                                  );
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.fetchPassiveIncome = (function () {
                    var e = s(
                      a().mark(function e() {
                        var n, t, o, r;
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    fetch(
                                      "https://misapat.ru/api/passiveIncome?userId=" +
                                        this.userId
                                    )
                                  );
                                case 3:
                                  if ((n = e.sent).ok) {
                                    e.next = 9;
                                    break;
                                  }
                                  return (e.next = 7), n.text();
                                case 7:
                                  throw (
                                    ((t = e.sent),
                                    new Error(
                                      "HTTP error! status: " +
                                        n.status +
                                        ", response: " +
                                        t
                                    ))
                                  );
                                case 9:
                                  return (e.next = 11), n.json();
                                case 11:
                                  if (
                                    ((o = e.sent),
                                    console.log(
                                      "Passive income API response:",
                                      o
                                    ),
                                    !("passive_income_earned" in o))
                                  ) {
                                    e.next = 19;
                                    break;
                                  }
                                  return (
                                    (r = Math.round(o.passive_income_earned)),
                                    console.log(
                                      "Пассивный доход получен: " + r
                                    ),
                                    e.abrupt("return", r)
                                  );
                                case 19:
                                  if (!("message" in o)) {
                                    e.next = 24;
                                    break;
                                  }
                                  return (
                                    console.log(
                                      "Сообщение от сервера: " + o.message
                                    ),
                                    e.abrupt("return", 0)
                                  );
                                case 24:
                                  return (
                                    console.warn(
                                      "Неизвестный формат ответа от сервера:",
                                      o
                                    ),
                                    e.abrupt("return", 0)
                                  );
                                case 26:
                                  e.next = 32;
                                  break;
                                case 28:
                                  return (
                                    (e.prev = 28),
                                    (e.t0 = e.catch(0)),
                                    console.error(
                                      "Ошибка при получении пассивного дохода:",
                                      e.t0
                                    ),
                                    e.abrupt("return", 0)
                                  );
                                case 32:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 28]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.hide = function () {
                    this.modalNode && (this.modalNode.active = !1);
                  }),
                  (i.onCloseClicked = function (e) {
                    this.hide();
                  }),
                  n
                );
              })(d)).prototype,
              "incomeLabel",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (I = n(g.prototype, "modalNode", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = n(g.prototype, "closeNode", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = g))
          ) || b)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ProfileModal.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SocketManager.ts"],
  function (e) {
    var o, t, i, a, l, n, r, s, c, u;
    return {
      setters: [
        function (e) {
          (o = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (n = e._decorator),
            (r = e.Node),
            (s = e.Label),
            (c = e.Component);
        },
        function (e) {
          u = e.SocketManager;
        },
      ],
      execute: function () {
        var f, d, p, h, g, b, M, v, D, P, L, m, y, I, w;
        l._RF.push({}, "bc556ZFRnpMnYIvGUp1KHAx", "ProfileModal", void 0);
        var z = n.ccclass,
          T = n.property;
        e(
          "ProfileModal",
          ((f = z("ProfileModal")),
          (d = T(r)),
          (p = T(r)),
          (h = T(r)),
          (g = T(s)),
          (b = T(s)),
          (M = T(s)),
          f(
            ((P = o(
              (D = (function (e) {
                function o() {
                  for (
                    var o, t = arguments.length, l = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    l[n] = arguments[n];
                  return (
                    (o = e.call.apply(e, [this].concat(l)) || this),
                    i(o, "avatarIcon", P, a(o)),
                    i(o, "profileModal", L, a(o)),
                    i(o, "closeButton", m, a(o)),
                    i(o, "idLabel", y, a(o)),
                    i(o, "usernameLabel", I, a(o)),
                    i(o, "registrationDateLabel", w, a(o)),
                    o
                  );
                }
                t(o, e);
                var l = o.prototype;
                return (
                  (l.onLoad = function () {
                    this.profileModal
                      ? ((this.profileModal.active = !1),
                        console.log("ProfileModal скрыт по умолчанию."))
                      : console.error(
                          "profileModal не назначен в ProfileModal."
                        ),
                      this.avatarIcon
                        ? (this.avatarIcon.on(
                            r.EventType.TOUCH_END,
                            this.showModal,
                            this
                          ),
                          console.log(
                            "Обработчик TOUCH_END назначен для avatarIcon."
                          ))
                        : console.warn(
                            "avatarIcon не назначен в ProfileModal."
                          ),
                      this.closeButton
                        ? (this.closeButton.on(
                            r.EventType.TOUCH_END,
                            this.hideModal,
                            this
                          ),
                          console.log(
                            "Обработчик TOUCH_END назначен для closeButton."
                          ))
                        : console.warn(
                            "closeButton не назначен в ProfileModal."
                          ),
                      u.instance.on(
                        "userInitialized",
                        this.updateProfile,
                        this
                      ),
                      console.log(
                        "Подписка на событие 'userInitialized' выполнена."
                      ),
                      u.instance.isInitialized() &&
                        (console.log(
                          "SocketManager уже инициализирован. Обновляем профиль сразу."
                        ),
                        this.updateProfile());
                  }),
                  (l.updateProfile = function () {
                    if (u.instance) {
                      var e = u.instance.getUserId(),
                        o = u.instance.getUsername(),
                        t = u.instance.getRegistrationDate();
                      if (
                        (console.log(
                          "updateProfile вызван. userId: " +
                            e +
                            ", username: " +
                            o +
                            ", registrationDate: " +
                            t
                        ),
                        this.idLabel
                          ? ((this.idLabel.string = "" + e),
                            console.log("idLabel обновлён: ID: " + e))
                          : console.warn("idLabel не назначен в ProfileModal."),
                        this.usernameLabel
                          ? ((this.usernameLabel.string = "" + o),
                            console.log(
                              "usernameLabel обновлён: Username: " + o
                            ))
                          : console.warn(
                              "usernameLabel не назначен в ProfileModal."
                            ),
                        this.registrationDateLabel)
                      ) {
                        var i = this.formatDate(t);
                        (this.registrationDateLabel.string =
                          "Дата регистрации в приложении: " + i),
                          console.log("registrationDateLabel обновлён: " + i);
                      } else
                        console.warn(
                          "registrationDateLabel не назначен в ProfileModal."
                        );
                    } else console.error("SocketManager не инициализирован.");
                  }),
                  (l.formatDate = function (e) {
                    if (!e) return "";
                    var o = new Date(e);
                    return (
                      String(o.getDate()).padStart(2, "0") +
                      "." +
                      String(o.getMonth() + 1).padStart(2, "0") +
                      "." +
                      o.getFullYear()
                    );
                  }),
                  (l.showModal = function () {
                    this.updateProfile(),
                      this.profileModal
                        ? ((this.profileModal.active = !0),
                          console.log("Profile modal показан."))
                        : console.error(
                            "profileModal не назначен в ProfileModal."
                          );
                  }),
                  (l.hideModal = function () {
                    this.profileModal
                      ? ((this.profileModal.active = !1),
                        console.log("Profile modal скрыт."))
                      : console.error(
                          "profileModal не назначен в ProfileModal."
                        );
                  }),
                  (l.onDestroy = function () {
                    this.avatarIcon &&
                      (this.avatarIcon.off(
                        r.EventType.TOUCH_END,
                        this.showModal,
                        this
                      ),
                      console.log(
                        "Обработчик TOUCH_END удалён для avatarIcon."
                      )),
                      this.closeButton &&
                        (this.closeButton.off(
                          r.EventType.TOUCH_END,
                          this.hideModal,
                          this
                        ),
                        console.log(
                          "Обработчик TOUCH_END удалён для closeButton."
                        )),
                      u.instance.off(
                        "userInitialized",
                        this.updateProfile,
                        this
                      ),
                      console.log(
                        "Отписка от события 'userInitialized' выполнена."
                      );
                  }),
                  o
                );
              })(c)).prototype,
              "avatarIcon",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (L = o(D.prototype, "profileModal", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = o(D.prototype, "closeButton", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = o(D.prototype, "idLabel", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = o(D.prototype, "usernameLabel", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = o(D.prototype, "registrationDateLabel", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = D))
          ) || v)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/QuestItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, r, n, i, a, l, u, o;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (l = e._decorator),
            (u = e.Label),
            (o = e.Component);
        },
      ],
      execute: function () {
        var c, s, p, b, f, y, L, m, Q;
        a._RF.push({}, "b27f9WqQnRO7biScKOuQLE5", "QuestItem", void 0);
        var d = l.ccclass,
          g = l.property;
        e(
          "QuestItem",
          ((c = d("QuestItem")),
          (s = g(u)),
          (p = g(u)),
          (b = g(u)),
          c(
            ((L = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, a = new Array(r), l = 0;
                    l < r;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    n(t, "QuestLabel", L, i(t)),
                    n(t, "RewardLabel", m, i(t)),
                    n(t, "StatusLabel", Q, i(t)),
                    t
                  );
                }
                return r(t, e), t;
              })(o)).prototype,
              "QuestLabel",
              [s],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (m = t(y.prototype, "RewardLabel", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = t(y.prototype, "StatusLabel", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = y))
          ) || f)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/QuestsPage.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SocketManager.ts"],
  function (e) {
    var t, r, n, o, s, a, i, c, u, l, p, f, h, b, d, g;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (s = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          (i = e.cclegacy),
            (c = e._decorator),
            (u = e.ScrollView),
            (l = e.Prefab),
            (p = e.instantiate),
            (f = e.find),
            (h = e.Label),
            (b = e.Node),
            (d = e.Component);
        },
        function (e) {
          g = e.SocketManager;
        },
      ],
      execute: function () {
        var m, w, k, v, y, I, x, Q, S;
        i._RF.push({}, "c7417NES8lIs6Zfbmx72vVI", "QuestsPage", void 0);
        var P = c.ccclass,
          L = c.property;
        e(
          "QuestsPage",
          ((m = P("QuestsPage")),
          (w = L(u)),
          (k = L(l)),
          (v = L(String)),
          m(
            ((x = t(
              (I = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, s = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "scrollView", x, o(t)),
                    n(t, "questItemPrefab", Q, o(t)),
                    n(t, "apiBaseUrl", S, o(t)),
                    t
                  );
                }
                r(t, e);
                var i = t.prototype;
                return (
                  (i.start = function () {
                    g.instance
                      ? g.instance.getUserId()
                        ? this.fetchQuests()
                        : console.error("userId не установлен в SocketManager.")
                      : console.error("SocketManager не инициализирован.");
                  }),
                  (i.fetchQuests = (function () {
                    var e = s(
                      a().mark(function e() {
                        var t, r, n;
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((t = g.instance.getUserId())) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "userId не установлен в SocketManager."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 4:
                                  return (
                                    (e.prev = 4),
                                    (e.next = 7),
                                    fetch(this.apiBaseUrl + "?userId=" + t)
                                  );
                                case 7:
                                  if ((r = e.sent).ok) {
                                    e.next = 13;
                                    break;
                                  }
                                  if (404 !== r.status) {
                                    e.next = 12;
                                    break;
                                  }
                                  return (
                                    console.warn("Задания пока недоступны."),
                                    e.abrupt("return")
                                  );
                                case 12:
                                  throw new Error(
                                    "Network response was not ok"
                                  );
                                case 13:
                                  return (e.next = 15), r.json();
                                case 15:
                                  (n = e.sent),
                                    this.populateQuestsList(n.tasks),
                                    this.scrollView &&
                                      this.scrollView.scrollToTop(0, !1),
                                    (e.next = 23);
                                  break;
                                case 20:
                                  (e.prev = 20),
                                    (e.t0 = e.catch(4)),
                                    console.error(
                                      "Ошибка при загрузке списка заданий:",
                                      e.t0
                                    );
                                case 23:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[4, 20]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.populateQuestsList = function (e) {
                    var t = this;
                    if (this.scrollView) {
                      var r = this.scrollView.content;
                      r
                        ? (r.removeAllChildren(),
                          e.forEach(function (e) {
                            var n,
                              o,
                              s,
                              a = p(t.questItemPrefab);
                            a.parent = r;
                            var i =
                                null == (n = f("QuestLabel", a))
                                  ? void 0
                                  : n.getComponent(h),
                              c =
                                null == (o = f("RewardLabel", a))
                                  ? void 0
                                  : o.getComponent(h),
                              u =
                                null == (s = f("StatusLabel", a))
                                  ? void 0
                                  : s.getComponent(h);
                            i
                              ? (i.string = e.title)
                              : console.warn(
                                  "QuestLabel node not found on questItemPrefab."
                                ),
                              c
                                ? (c.string = t.formatNumber(e.reward))
                                : console.warn(
                                    "RewardLabel node not found on questItemPrefab."
                                  ),
                              u &&
                                (u.string =
                                  "completed" === e.status
                                    ? "Выполнено"
                                    : "Активно"),
                              a.on(b.EventType.TOUCH_END, function () {
                                t.onQuestClick(e);
                              });
                          }))
                        : console.error("scrollView.content не назначен.");
                    } else console.error("scrollView не назначен.");
                  }),
                  (i.onQuestClick = function (e) {
                    "completed" !== e.status && this.completeQuest(e.taskId);
                  }),
                  (i.completeQuest = (function () {
                    var e = s(
                      a().mark(function e(t) {
                        var r, n;
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((r = g.instance.getUserId())) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (
                                    console.error(
                                      "userId не установлен в SocketManager."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 4:
                                  return (
                                    (e.prev = 4),
                                    (e.next = 7),
                                    fetch(
                                      "https://misapat.ru/api/tasks/complete",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          userId: r,
                                          taskId: t,
                                        }),
                                      }
                                    )
                                  );
                                case 7:
                                  if ((n = e.sent).ok) {
                                    e.next = 10;
                                    break;
                                  }
                                  throw new Error(
                                    "Не удалось выполнить задание."
                                  );
                                case 10:
                                  return (e.next = 12), n.json();
                                case 12:
                                  e.sent, this.fetchQuests(), (e.next = 19);
                                  break;
                                case 16:
                                  (e.prev = 16),
                                    (e.t0 = e.catch(4)),
                                    console.error(
                                      "Ошибка при выполнении задания:",
                                      e.t0
                                    );
                                case 19:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[4, 16]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.formatNumber = function (e) {
                    return e.toLocaleString("ru-RU");
                  }),
                  t
                );
              })(d)).prototype,
              "scrollView",
              [w],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (Q = t(I.prototype, "questItemPrefab", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = t(I.prototype, "apiBaseUrl", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "https://misapat.ru/api/tasks";
              },
            })),
            (y = I))
          ) || y)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ReferralLinkManager.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SocketManager.ts"],
  function (e) {
    var i, n, o, t, r, a, l, c, s, p, f, u, L, d, h;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (t = e.assertThisInitialized),
            (r = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          (l = e.cclegacy),
            (c = e._decorator),
            (s = e.Node),
            (p = e.Label),
            (f = e.Vec3),
            (u = e.Component),
            (L = e.Color),
            (d = e.tween);
        },
        function (e) {
          h = e.SocketManager;
        },
      ],
      execute: function () {
        var b, k, y, g, v, N, m, w, C, R, D, T, F;
        l._RF.push(
          {},
          "18bc3yUuD1GYI5rJViGJcp5",
          "ReferralLinkManager",
          void 0
        );
        var I = c.ccclass,
          M = c.property;
        e(
          "ReferralLinkManager",
          ((b = I("ReferralLinkManager")),
          (k = M(s)),
          (y = M(s)),
          (g = M(p)),
          (v = M(p)),
          b(
            ((w = i(
              (m = (function (e) {
                function i() {
                  for (
                    var i, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (i = e.call.apply(e, [this].concat(r)) || this),
                    o(i, "copyLinkNode", w, t(i)),
                    o(i, "inviteFriendNode", C, t(i)),
                    o(i, "referralLinkLabel", R, t(i)),
                    o(i, "copyNotificationLabel", D, t(i)),
                    (i.referralLink = ""),
                    o(i, "animationDuration", T, t(i)),
                    o(i, "moveUpDistance", F, t(i)),
                    (i.initialPosition = new f()),
                    i
                  );
                }
                n(i, e);
                var l = i.prototype;
                return (
                  (l.start = function () {
                    this.copyLinkNode ||
                      console.error(
                        "copyLinkNode не назначен в ReferralLinkManager."
                      ),
                      this.inviteFriendNode ||
                        console.error(
                          "inviteFriendNode не назначен в ReferralLinkManager."
                        ),
                      this.referralLinkLabel ||
                        console.error(
                          "referralLinkLabel не назначен в ReferralLinkManager."
                        ),
                      this.copyNotificationLabel ||
                        console.error(
                          "copyNotificationLabel не назначен в ReferralLinkManager."
                        ),
                      this.generateReferralLink(),
                      this.copyLinkNode &&
                        (this.copyLinkNode.on(
                          s.EventType.TOUCH_END,
                          this.onCopyLinkClicked,
                          this
                        ),
                        (this.copyLinkNode.active = !0)),
                      this.inviteFriendNode &&
                        this.inviteFriendNode.on(
                          s.EventType.TOUCH_END,
                          this.onInviteFriendClicked,
                          this
                        ),
                      this.copyNotificationLabel &&
                        ((this.copyNotificationLabel.node.active = !1),
                        (this.initialPosition =
                          this.copyNotificationLabel.node.position.clone()));
                  }),
                  (l.generateReferralLink = function () {
                    var e,
                      i =
                        (null == (e = h.instance) ? void 0 : e.getUserId()) ||
                        230230230;
                    console.log("User ID:", i),
                      i
                        ? ((this.referralLink =
                            "https://t.me/misapatthreezeroBot?startapp=refId" +
                            i),
                          this.referralLinkLabel &&
                            (this.referralLinkLabel.string = this.referralLink),
                          console.log(
                            "Реферальная ссылка создана: " + this.referralLink
                          ))
                        : console.error("userId не установлен.");
                  }),
                  (l.onCopyLinkClicked = (function () {
                    var e = r(
                      a().mark(function e() {
                        var i = this;
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (console.log("onCopyLinkClicked called"),
                                    this.copyNotificationLabel &&
                                      ((this.copyNotificationLabel.node.active =
                                        !0),
                                      (this.copyNotificationLabel.color = new L(
                                        255,
                                        255,
                                        255,
                                        255
                                      )),
                                      this.copyNotificationLabel.node.setPosition(
                                        this.initialPosition.clone()
                                      ),
                                      d(this.copyNotificationLabel)
                                        .to(this.animationDuration, {
                                          color: new L(255, 255, 255, 0),
                                        })
                                        .start(),
                                      d(this.copyNotificationLabel.node)
                                        .by(this.animationDuration, {
                                          position: new f(
                                            0,
                                            this.moveUpDistance,
                                            0
                                          ),
                                        })
                                        .call(function () {
                                          (i.copyNotificationLabel.node.active =
                                            !1),
                                            (i.copyNotificationLabel.color =
                                              new L(255, 255, 255, 255)),
                                            i.copyNotificationLabel.node.setPosition(
                                              i.initialPosition.clone()
                                            );
                                        })
                                        .start()),
                                    this.referralLink)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    console.warn(
                                      "Реферальная ссылка не создана."
                                    ),
                                    e.abrupt("return")
                                  );
                                case 5:
                                  return (
                                    (e.prev = 5),
                                    (e.next = 8),
                                    navigator.clipboard.writeText(
                                      this.referralLink
                                    )
                                  );
                                case 8:
                                  console.log(
                                    "Реферальная ссылка скопирована в буфер обмена."
                                  ),
                                    (e.next = 14);
                                  break;
                                case 11:
                                  (e.prev = 11),
                                    (e.t0 = e.catch(5)),
                                    console.error(
                                      "Не удалось скопировать ссылку: ",
                                      e.t0
                                    );
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[5, 11]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (l.onInviteFriendClicked = function () {
                    var e;
                    if (
                      (console.log("onInviteFriendClicked called"),
                      this.referralLink)
                    ) {
                      var i =
                          "https://t.me/share/url?url=" +
                          encodeURIComponent(this.referralLink) +
                          "&text=" +
                          encodeURIComponent("Тапай и зарабатывай!"),
                        n = null == (e = window.Telegram) ? void 0 : e.WebApp;
                      n && n.openTelegramLink
                        ? (console.log(
                            "Используем tg.openTelegramLink для открытия ссылки"
                          ),
                          n.openTelegramLink(i))
                        : (console.warn(
                            "Не удалось открыть Telegram для совместного использования."
                          ),
                          window.open(i, "_blank"));
                    } else console.warn("Реферальная ссылка не создана.");
                  }),
                  i
                );
              })(u)).prototype,
              "copyLinkNode",
              [k],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (C = i(m.prototype, "inviteFriendNode", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(m.prototype, "referralLinkLabel", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = i(m.prototype, "copyNotificationLabel", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(m.prototype, "animationDuration", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1.5;
              },
            })),
            (F = i(m.prototype, "moveUpDistance", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 300;
              },
            })),
            (N = m))
          ) || N)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SocketManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./IncomeManager.ts",
    "./PassiveIncomeModal.ts",
  ],
  function (e) {
    var t, n, s, r, o, a, i, c, u, l, h, p, g, d, f, m;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (s = e.initializerDefineProperty),
            (r = e.assertThisInitialized),
            (o = e.createClass),
            (a = e.asyncToGenerator),
            (i = e.regeneratorRuntime);
        },
        function (e) {
          (c = e.cclegacy),
            (u = e._decorator),
            (l = e.Label),
            (h = e.ProgressBar),
            (p = e.EventTarget),
            (g = e.Color),
            (d = e.Component);
        },
        function (e) {
          f = e.IncomeManager;
        },
        function (e) {
          m = e.PassiveIncomeModal;
        },
      ],
      execute: function () {
        var b, v, w, k, _, I, y, x, U, M, P, L, D, T, S, C, E, B, H, z;
        c._RF.push({}, "a0c39VZ6j5NRrT6cxMHqDGB", "SocketManager", void 0);
        var A = u.ccclass,
          j = u.property;
        e(
          "SocketManager",
          ((b = A("SocketManager")),
          (v = j(l)),
          (w = j(h)),
          (k = j(l)),
          (_ = j(l)),
          (I = j(l)),
          (y = j(f)),
          (x = j(m)),
          (U = j(l)),
          b(
            (((z = (function (e) {
              function t() {
                for (
                  var t, n = arguments.length, o = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  o[a] = arguments[a];
                return (
                  (t = e.call.apply(e, [this].concat(o)) || this),
                  s(t, "coinsLabel", L, r(t)),
                  s(t, "energyProgressBar", D, r(t)),
                  s(t, "energyValueLabel", T, r(t)),
                  s(t, "messagesLabel", S, r(t)),
                  s(t, "boostsLabel", C, r(t)),
                  s(t, "incomeManager", E, r(t)),
                  s(t, "passiveIncomeModal", B, r(t)),
                  s(t, "passiveIncomePerHourLabel", H, r(t)),
                  (t.socket = null),
                  (t.userId = null),
                  (t.username = ""),
                  (t.userData = null),
                  (t.maxEnergy = 2e3),
                  (t.currentEnergy = 0),
                  (t.currentBoosts = 0),
                  (t.maxBoosts = 6),
                  (t.currentCoins = 0),
                  (t.initialized = !1),
                  (t.eventTarget = new p()),
                  (t.registrationDate = ""),
                  t
                );
              }
              n(t, e);
              var c = t.prototype;
              return (
                (c.on = function (e, t, n) {
                  this.eventTarget.on(e, t, n);
                }),
                (c.off = function (e, t, n) {
                  this.eventTarget.off(e, t, n);
                }),
                (c.onLoad = function () {
                  if (t._instance && t._instance !== this)
                    return (
                      console.warn(
                        "SocketManager уже существует. Удаление дубликата."
                      ),
                      void this.node.destroy()
                    );
                  (t._instance = this),
                    console.log("SocketManager инициализирован.");
                }),
                (c.start = function () {
                  if (
                    this.coinsLabel &&
                    this.energyProgressBar &&
                    this.energyValueLabel &&
                    this.messagesLabel &&
                    this.boostsLabel
                  ) {
                    if (!this.incomeManager) {
                      var e =
                        this.node.scene.getChildByName("IncomeManagerNode");
                      e
                        ? (this.incomeManager = e.getComponent(f))
                        : console.warn("IncomeManager не найден в сцене.");
                    }
                    this.initializeUser(), this.showUserInfo(!1);
                  } else
                    console.error(
                      "Не все необходимые компоненты назначены в SocketManager."
                    );
                }),
                (c.onDestroy = function () {
                  this.socket &&
                    (this.socket.disconnect(),
                    console.log("SocketManager отключен от сокета.")),
                    t._instance === this &&
                      ((t._instance = null),
                      console.log("SocketManager уничтожен."));
                }),
                (c.loadTelegramSDK = function () {
                  return new Promise(function (e, t) {
                    if (window.Telegram) e();
                    else {
                      var n = document.createElement("script");
                      (n.src = "https://telegram.org/js/telegram-web-app.js"),
                        (n.onload = function () {
                          e();
                        }),
                        (n.onerror = function () {
                          t(
                            new Error(
                              "Не удалось загрузить Telegram Web Apps SDK."
                            )
                          );
                        }),
                        document.head.appendChild(n);
                    }
                  });
                }),
                (c.initializeUser = (function () {
                  var e = a(
                    i().mark(function e() {
                      var t, n, s, r;
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  console.log(
                                    "Начата инициализация пользователя."
                                  ),
                                  (e.next = 4),
                                  this.loadTelegramSDK()
                                );
                              case 4:
                                if (
                                  !(n =
                                    null == (t = window.Telegram)
                                      ? void 0
                                      : t.WebApp)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  console.log("Telegram WebApp API доступен"),
                                  console.log(
                                    "tg.initDataUnsafe:",
                                    n.initDataUnsafe
                                  ),
                                  (e.next = 10),
                                  new Promise(function (e) {
                                    n.ready(), e();
                                  })
                                );
                              case 10:
                                console.log(
                                  "tg.initDataUnsafe после готовности:",
                                  n.initDataUnsafe
                                ),
                                  null == n.expand || n.expand(),
                                  null == n.disableVerticalSwipes ||
                                    n.disableVerticalSwipes(),
                                  (n.isVerticalSwipesEnabled = !1),
                                  null == n.setBackgroundColor ||
                                    n.setBackgroundColor("#272727"),
                                  null != n &&
                                    n.web_app_setup_swipe_behavior &&
                                    n.web_app_setup_swipe_behavior({
                                      allow_vertical_swipe: !1,
                                    }),
                                  null != (s = n.initDataUnsafe) &&
                                  null != (s = s.user) &&
                                  s.id
                                    ? ((r = {
                                        id: n.initDataUnsafe.user.id,
                                        username:
                                          n.initDataUnsafe.user.username,
                                        first_name:
                                          n.initDataUnsafe.user.first_name,
                                        last_name:
                                          n.initDataUnsafe.user.last_name || "",
                                        language_code:
                                          n.initDataUnsafe.user.language_code ||
                                          "",
                                        is_premium:
                                          n.initDataUnsafe.user.is_premium ||
                                          !1,
                                        photo_url:
                                          n.initDataUnsafe.user.photo_url || "",
                                        full_name:
                                          n.initDataUnsafe.user.first_name +
                                          " " +
                                          (n.initDataUnsafe.user.last_name ||
                                            ""),
                                      }),
                                      console.log(
                                        "Данные пользователя Telegram:",
                                        r
                                      ),
                                      (this.userId = r.id),
                                      (this.username = r.username),
                                      (this.userData = r),
                                      this.startApp(n))
                                    : (console.warn(
                                        "Данные пользователя не найдены в tg.initDataUnsafe."
                                      ),
                                      this.useMockData()),
                                  (e.next = 21);
                                break;
                              case 19:
                                console.warn(
                                  "Telegram WebApp недоступен. Используем моковые данные."
                                ),
                                  this.useMockData();
                              case 21:
                                return (
                                  (e.next = 23),
                                  this.createOrUpdateUser(this.userData)
                                );
                              case 23:
                                return (e.next = 25), this.fetchInitialData();
                              case 25:
                                this.autoConnect(),
                                  this.showUserInfo(!0),
                                  (this.initialized = !0),
                                  console.log(
                                    "SocketManager инициализирован полностью."
                                  ),
                                  console.log(
                                    "Эмитируем событие 'userInitialized'."
                                  ),
                                  this.eventTarget.emit("userInitialized"),
                                  (e.next = 36);
                                break;
                              case 33:
                                (e.prev = 33),
                                  (e.t0 = e.catch(0)),
                                  console.error(
                                    "Ошибка при инициализации пользователя:",
                                    e.t0
                                  );
                              case 36:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 33]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()),
                (c.startApp = (function () {
                  var e = a(
                    i().mark(function e(t) {
                      var n, s, r, o, a, c, u, l, h;
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0),
                                  console.log("Вызван метод startApp"),
                                  console.log(
                                    "tg.initDataUnsafe:",
                                    t.initDataUnsafe
                                  ),
                                  console.log(
                                    "tg.initDataUnsafe.start_param:",
                                    t.initDataUnsafe.start_param
                                  ),
                                  (s =
                                    null == (n = t.initDataUnsafe)
                                      ? void 0
                                      : n.start_param) ||
                                    ((s =
                                      this.getUrlParameter(
                                        "tgWebAppStartParam"
                                      )),
                                    console.log("start_param из URL:", s)),
                                  !s)
                                ) {
                                  e.next = 39;
                                  break;
                                }
                                if (
                                  (console.log("Получен start_param:", s),
                                  (o = s.replace("refId", "")),
                                  (a =
                                    null == (r = this.userId)
                                      ? void 0
                                      : r.toString()),
                                  console.log("referrerId:", o),
                                  console.log("referralId:", a),
                                  !a || !o || a === o)
                                ) {
                                  e.next = 36;
                                  break;
                                }
                                return (
                                  (e.prev = 13),
                                  (e.next = 16),
                                  fetch("https://misapat.ru/api/referrals", {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                      referrer_id: o,
                                      referral_id: a,
                                    }),
                                  })
                                );
                              case 16:
                                if (!(c = e.sent).ok) {
                                  e.next = 24;
                                  break;
                                }
                                return (e.next = 20), c.json();
                              case 20:
                                (u = e.sent),
                                  console.log(
                                    "Реферал успешно зарегистрирован:",
                                    u
                                  ),
                                  (e.next = 29);
                                break;
                              case 24:
                                return (e.next = 26), c.json();
                              case 26:
                                (l = e.sent),
                                  "Такая запись о реферале уже существует" ===
                                  (h = null == l ? void 0 : l.message)
                                    ? console.log("Реферал уже существует.")
                                    : console.error(
                                        "Ошибка при регистрации реферала:",
                                        h
                                      );
                              case 29:
                                e.next = 34;
                                break;
                              case 31:
                                (e.prev = 31),
                                  (e.t0 = e.catch(13)),
                                  console.error(
                                    "Ошибка при регистрации реферала:",
                                    e.t0
                                  );
                              case 34:
                                e.next = 37;
                                break;
                              case 36:
                                console.log(
                                  "Условия для регистрации реферала не выполнены."
                                );
                              case 37:
                                e.next = 40;
                                break;
                              case 39:
                                console.log(
                                  "start_param отсутствует в initDataUnsafe и в URL."
                                );
                              case 40:
                                e.next = 45;
                                break;
                              case 42:
                                (e.prev = 42),
                                  (e.t1 = e.catch(0)),
                                  console.error(
                                    "Ошибка в методе startApp:",
                                    e.t1
                                  );
                              case 45:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [0, 42],
                          [13, 31],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (c.getUrlParameter = function (e) {
                  e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                  var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(
                    window.location.search
                  );
                  return null === t
                    ? null
                    : decodeURIComponent(t[1].replace(/\+/g, " "));
                }),
                (c.useMockData = function () {
                  var e = {
                    id: 225225225,
                    username: "225 guy",
                    first_name: "madesta",
                    last_name: "",
                    language_code: "en",
                    is_premium: !1,
                    photo_url: "",
                    full_name: "Test User",
                  };
                  (this.userId = e.id),
                    (this.username = e.username),
                    (this.userData = e),
                    console.log(
                      "Mock user data set. User ID: " +
                        this.userId +
                        ", Username: " +
                        this.username
                    ),
                    (this.initialized = !0),
                    console.log(
                      "Эмитируем событие 'userInitialized' после использования моковых данных."
                    ),
                    this.eventTarget.emit("userInitialized");
                }),
                (c.createOrUpdateUser = (function () {
                  var e = a(
                    i().mark(function e(t) {
                      var n, s;
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (n = new URLSearchParams({
                                    id: t.id.toString(),
                                    username: t.username || "",
                                    first_name: t.first_name || "",
                                    last_name: t.last_name || "",
                                  })),
                                  (e.next = 4),
                                  fetch(
                                    "https://misapat.ru/api/users?" +
                                      n.toString(),
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify({}),
                                    }
                                  )
                                );
                              case 4:
                                if ((s = e.sent).ok) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "Ошибка при отправке POST запроса: " +
                                    s.statusText
                                );
                              case 7:
                                console.log(
                                  "Пользователь успешно создан или обновлен."
                                ),
                                  (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(0)),
                                  console.warn(
                                    "Ошибка при создании или обновлении пользователя.",
                                    e.t0
                                  );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (c.autoConnect = function () {
                  var e = this;
                  try {
                    (this.socket = io("https://misapat.ru", {
                      transports: ["websocket"],
                      secure: !0,
                      rejectUnauthorized: !1,
                    })),
                      this.socket.on("connect", function () {
                        e.socket.emit("register", { userId: e.userId }),
                          e.showUserInfo(!0),
                          console.log("Socket подключен.");
                      }),
                      this.socket.on("disconnect", function () {
                        e.showMessage("Отключено от сервера.", "danger"),
                          e.showUserInfo(!1),
                          console.log("Socket отключен.");
                      }),
                      this.socket.on("energyUpdated", function (t) {
                        void 0 !== t.energy_left
                          ? e.updateEnergy(Math.round(t.energy_left))
                          : console.warn(
                              "energyUpdated event received, but energy_left is undefined."
                            );
                      }),
                      this.socket.on("boostsUpdated", function (t) {
                        console.log("Received boostsUpdated event:", t),
                          void 0 !== t.boosts_left
                            ? e.updateBoosts(t.boosts_left)
                            : console.warn(
                                "boostsUpdated event received, but boosts_left is undefined."
                              );
                      }),
                      this.socket.on("coinsUpdated", function (t) {
                        void 0 !== t.coins
                          ? (e.updateCoins(Math.round(t.coins)),
                            e.eventTarget.emit(
                              "coinsUpdatedExternally",
                              e.currentCoins
                            ))
                          : console.warn(
                              "coinsUpdated event received, but coins is undefined."
                            );
                      }),
                      this.socket.on("passiveIncomePerHour", function (t) {
                        console.log(
                          "Получено событие passiveIncomePerHour:",
                          t
                        );
                        var n =
                          void 0 !== t.passive_income_per_hour
                            ? t.passive_income_per_hour
                            : t.passiveIncomePerHour;
                        if (void 0 !== n) {
                          var s = Math.round(n);
                          if (e.passiveIncomePerHourLabel) {
                            var r = e.formatNumber(s);
                            e.passiveIncomePerHourLabel.string =
                              "+ " + r + " в час";
                          } else
                            console.warn(
                              "passiveIncomePerHourLabel не назначен в SocketManager."
                            );
                        } else console.warn("passiveIncomePerHour event received, but поле passive_income_per_hour или passiveIncomePerHour отсутствует.");
                      }),
                      this.socket.on("tapError", function (t) {
                        e.showMessage(t.message, "warning");
                      }),
                      this.socket.on("registrationError", function (t) {
                        e.showMessage(t.message, "danger"), e.showUserInfo(!1);
                      }),
                      this.socket.on("connect_error", function (t) {
                        e.showMessage(
                          "Ошибка подключения к серверу.",
                          "danger"
                        );
                      }),
                      this.socket.on("boostActivated", function (t) {
                        console.log("Boost activation response:", t),
                          void 0 !== t.newEnergyValue &&
                            e.updateEnergy(Math.round(t.newEnergyValue));
                      }),
                      this.socket.on("boostError", function (e) {
                        console.error("Ошибка активации буста:", e.message);
                      });
                  } catch (e) {
                    this.showMessage("Ошибка подключения к серверу.", "danger"),
                      console.error("Socket connection error:", e);
                  }
                }),
                (c.fetchInitialData = (function () {
                  var e = a(
                    i().mark(function e() {
                      var t, n;
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  fetch(
                                    "https://misapat.ru/api/users/" +
                                      this.userId
                                  )
                                );
                              case 3:
                                if ((t = e.sent).ok) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error(
                                  "HTTP error! status: " + t.status
                                );
                              case 6:
                                return (e.next = 8), t.json();
                              case 8:
                                return (
                                  (n = e.sent),
                                  console.log("API response:", n),
                                  n.created_at
                                    ? ((this.registrationDate = n.created_at),
                                      console.log(
                                        "Дата регистрации получена: " +
                                          this.registrationDate
                                      ))
                                    : console.warn(
                                        "Дата регистрации не найдена в ответе API."
                                      ),
                                  void 0 !== n.energy_left
                                    ? (this.updateEnergy(
                                        Math.round(n.energy_left)
                                      ),
                                      console.log(
                                        "Initial energy fetched: " +
                                          Math.round(n.energy_left)
                                      ))
                                    : console.warn(
                                        "Energy data not found in API response."
                                      ),
                                  void 0 !== n.boosts_left
                                    ? (this.updateBoosts(n.boosts_left),
                                      console.log(
                                        "Initial boosts fetched: " +
                                          n.boosts_left
                                      ))
                                    : console.warn(
                                        "Boosts data not found in API response."
                                      ),
                                  (e.next = 15),
                                  this.fetchTotalCoins()
                                );
                              case 15:
                                return (
                                  (e.next = 17),
                                  this.fetchPassiveIncomePerHour()
                                );
                              case 17:
                                e.next = 22;
                                break;
                              case 19:
                                (e.prev = 19),
                                  (e.t0 = e.catch(0)),
                                  console.error(
                                    "Error fetching initial data:",
                                    e.t0
                                  );
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 19]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()),
                (c.getRegistrationDate = function () {
                  return this.registrationDate;
                }),
                (c.fetchTotalCoins = (function () {
                  var e = a(
                    i().mark(function e() {
                      var t, n;
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  fetch(
                                    "https://misapat.ru/api/totalCoins/" +
                                      this.userId
                                  )
                                );
                              case 3:
                                if ((t = e.sent).ok) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error(
                                  "HTTP error! status: " + t.status
                                );
                              case 6:
                                return (e.next = 8), t.json();
                              case 8:
                                void 0 !== (n = e.sent).coins
                                  ? (this.updateCoins(Math.round(n.coins)),
                                    console.log(
                                      "Total coins fetched: " +
                                        Math.round(this.currentCoins)
                                    ))
                                  : console.warn(
                                      "Coins data not found in API response."
                                    ),
                                  (e.next = 16);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(0)),
                                  console.warn(
                                    "Ошибка при получении количества монет. Используем значение по умолчанию 0.",
                                    e.t0
                                  ),
                                  this.updateCoins(0);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 12]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()),
                (c.getCurrentCoins = function () {
                  return this.currentCoins;
                }),
                (c.updateCoins = function (e) {
                  (this.currentCoins = e),
                    this.coinsLabel
                      ? (this.coinsLabel.string =
                          this.currentCoins.toLocaleString())
                      : console.warn("coinsLabel не назначен в SocketManager."),
                    this.eventTarget.emit(
                      "coinsUpdatedExternally",
                      this.currentCoins
                    );
                }),
                (c.formatNumber = function (e) {
                  return e >= 1e6
                    ? (e / 1e6).toFixed(1).replace(".0", "") + "M"
                    : e >= 1e3
                    ? (e / 1e3).toFixed(1).replace(".0", "") + "k"
                    : e.toString();
                }),
                (c.fetchPassiveIncomePerHour = (function () {
                  var e = a(
                    i().mark(function e() {
                      var t, n, s, r, o;
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  fetch(
                                    "https://misapat.ru/api/passiveIncomePerHour?userId=" +
                                      this.userId
                                  )
                                );
                              case 3:
                                if ((t = e.sent).ok) {
                                  e.next = 9;
                                  break;
                                }
                                return (e.next = 7), t.text();
                              case 7:
                                throw (
                                  ((n = e.sent),
                                  new Error(
                                    "HTTP error! status: " +
                                      t.status +
                                      ", response: " +
                                      n
                                  ))
                                );
                              case 9:
                                return (e.next = 11), t.json();
                              case 11:
                                (s = e.sent),
                                  console.log(
                                    "PassiveIncomePerHour API response:",
                                    s
                                  ),
                                  "passive_income_per_hour" in s
                                    ? ((r = Math.round(
                                        s.passive_income_per_hour
                                      )),
                                      this.passiveIncomePerHourLabel &&
                                        ((o = this.formatNumber(r)),
                                        (this.passiveIncomePerHourLabel.string =
                                          "+ " + o + " в час"),
                                        console.log(
                                          "Пассивный доход в час обновлён: " +
                                            o +
                                            " в час"
                                        )))
                                    : "message" in s
                                    ? console.log(
                                        "Сообщение от сервера: " + s.message
                                      )
                                    : console.warn(
                                        "Неизвестный формат ответа от сервера:",
                                        s
                                      ),
                                  (e.next = 19);
                                break;
                              case 16:
                                (e.prev = 16),
                                  (e.t0 = e.catch(0)),
                                  console.error(
                                    "Ошибка при получении пассивного дохода в час:",
                                    e.t0
                                  );
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 16]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()),
                (c.updateBoosts = function (e) {
                  (this.currentBoosts = e),
                    this.boostsLabel
                      ? ((this.boostsLabel.string =
                          this.currentBoosts + "/" + this.maxBoosts),
                        console.log(
                          "Бусты обновлены: " +
                            this.currentBoosts +
                            "/" +
                            this.maxBoosts
                        ))
                      : console.warn(
                          "boostsLabel не назначен в SocketManager."
                        );
                }),
                (c.updateEnergy = function (e) {
                  (e = Math.max(0, Math.min(this.maxEnergy, e))),
                    (this.currentEnergy = e);
                  var t = e / this.maxEnergy;
                  (this.energyProgressBar.progress = t),
                    (this.energyValueLabel.string = e + "/" + this.maxEnergy);
                }),
                (c.showUserInfo = function (e) {
                  this.coinsLabel &&
                    this.energyProgressBar &&
                    this.energyValueLabel &&
                    this.boostsLabel &&
                    this.passiveIncomePerHourLabel &&
                    ((this.coinsLabel.node.active = e),
                    (this.energyProgressBar.node.active = e),
                    (this.energyValueLabel.node.active = e),
                    (this.boostsLabel.node.active = e),
                    (this.passiveIncomePerHourLabel.node.active = e),
                    console.log("UserInfo показан: " + e));
                }),
                (c.showMessage = function (e, t) {
                  if ((void 0 === t && (t = "info"), this.messagesLabel))
                    switch (((this.messagesLabel.string = e), t)) {
                      case "success":
                        this.messagesLabel.node.color = new g(0, 255, 0);
                        break;
                      case "danger":
                        this.messagesLabel.node.color = new g(255, 0, 0);
                        break;
                      case "warning":
                        this.messagesLabel.node.color = new g(255, 165, 0);
                        break;
                      default:
                        this.messagesLabel.node.color = new g(255, 255, 255);
                    }
                }),
                (c.getCurrentEnergy = function () {
                  return this.currentEnergy;
                }),
                (c.getCurrentBoosts = function () {
                  return this.currentBoosts;
                }),
                (c.activateBoost = function () {
                  this.socket && this.socket.connected && this.userId
                    ? (this.socket.emit("useBoost", { userId: this.userId }),
                      console.log("Буст активирован."))
                    : console.error(
                        "Не удалось использовать буст: сокет не подключен или userId не установлен."
                      );
                }),
                (c.onTap = (function () {
                  var e = a(
                    i().mark(function e() {
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.userId) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  this.showMessage(
                                    "Пользователь не подключен.",
                                    "danger"
                                  ),
                                  e.abrupt("return")
                                );
                              case 3:
                                if (!(this.currentEnergy < 13)) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  this.showMessage(
                                    "Не хватает энергии для тапа.",
                                    "warning"
                                  ),
                                  e.abrupt("return")
                                );
                              case 6:
                                this.socket && this.socket.connected
                                  ? (this.socket.emit("tap", {
                                      userId: this.userId,
                                    }),
                                    this.showMessage("Тап отправлен!", "info"),
                                    this.triggerHapticFeedback())
                                  : this.showMessage(
                                      "Соединение с сервером отсутствует.",
                                      "danger"
                                    );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()),
                (c.getUserId = function () {
                  return this.userId;
                }),
                (c.getUsername = function () {
                  return this.username;
                }),
                (c.setUserId = function (e) {
                  (this.userId = e),
                    this.socket &&
                      this.socket.connected &&
                      (this.socket.emit("register", { userId: this.userId }),
                      console.log("User ID установлен: " + this.userId));
                }),
                (c.isInitialized = function () {
                  return this.initialized;
                }),
                (c.triggerHapticFeedback = function () {
                  var e,
                    t = null == (e = window.Telegram) ? void 0 : e.WebApp;
                  t && t.HapticFeedback
                    ? t.HapticFeedback.impactOccurred("medium")
                    : console.warn("HapticFeedback API недоступен.");
                }),
                o(t, null, [
                  {
                    key: "instance",
                    get: function () {
                      return (
                        t._instance ||
                          console.error(
                            "SocketManager не инициализирован. Убедитесь, что он добавлен на ноду в сцене."
                          ),
                        t._instance
                      );
                    },
                  },
                ]),
                t
              );
            })(d))._instance = null),
            (L = t((P = z).prototype, "coinsLabel", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = t(P.prototype, "energyProgressBar", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(P.prototype, "energyValueLabel", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = t(P.prototype, "messagesLabel", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = t(P.prototype, "boostsLabel", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = t(P.prototype, "incomeManager", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = t(P.prototype, "passiveIncomeModal", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = t(P.prototype, "passiveIncomePerHourLabel", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = P))
          ) || M)
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SpineController.ts.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SocketManager.ts"],
  function (e) {
    var n, t, i, o, r, a, s, l, c, p, f, u, h, g;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (a = e._decorator),
            (s = e.sp),
            (l = e.Prefab),
            (c = e.UITransform),
            (p = e.Node),
            (f = e.Vec3),
            (u = e.instantiate),
            (h = e.Component);
        },
        function (e) {
          g = e.SocketManager;
        },
      ],
      execute: function () {
        var C, m, d, S, b, v, k, w, y;
        r._RF.push({}, "7af28zZEkNKYY1uSBPGocx/", "SpineController.ts", void 0);
        var T = a.ccclass,
          P = a.property;
        e(
          "SpineController",
          ((C = T("SpineController")),
          (m = P(s.Skeleton)),
          (d = P(g)),
          (S = P(l)),
          C(
            ((k = n(
              (v = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, r = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (n = e.call.apply(e, [this].concat(r)) || this),
                    i(n, "spine", k, o(n)),
                    i(n, "socketManager", w, o(n)),
                    i(n, "floatingTextPrefab", y, o(n)),
                    n
                  );
                }
                t(n, e);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    var e = this.getComponent(c);
                    e || (e = this.addComponent(c)),
                      e.setContentSize(4e3, 3e3),
                      e.setAnchorPoint(0.553265, 0.004952),
                      this.node.on(
                        p.EventType.TOUCH_END,
                        this.onSpineClicked,
                        this
                      ),
                      this.spine
                        ? (this.spine.setAnimation(0, "Основная", !0),
                          this.spine.setCompleteListener(
                            this.onAnimationComplete.bind(this)
                          ))
                        : console.warn(
                            "Spine компонент не установлен в SpineController."
                          );
                  }),
                  (r.onSpineClicked = function (e) {
                    if (this.socketManager)
                      if (this.socketManager.getCurrentEnergy() >= 13) {
                        this.spine &&
                          (this.spine.setAnimation(1, "Нажатие", !1),
                          this.spine.addAnimation(1, "Основная", !0, 0)),
                          this.socketManager.onTap();
                        var n = e.getUILocation();
                        this.spawnFloatingText(n);
                      } else
                        this.socketManager.showMessage(
                          "Не хватает энергии для тапа.",
                          "warning"
                        );
                    else
                      console.warn(
                        "SocketManager не установлен в SpineController."
                      );
                  }),
                  (r.onAnimationComplete = function (e) {
                    e &&
                      1 === e.trackIndex &&
                      this.spine.setAnimation(1, "Основная", !0);
                  }),
                  (r.spawnFloatingText = function (e) {
                    if (this.floatingTextPrefab) {
                      var n = this.node.scene.getChildByName("Canvas");
                      if (n) {
                        var t = n.getComponent(c);
                        if (t) {
                          var i = t.contentSize,
                            o = e.x - i.width / 2,
                            r = e.y - i.height / 2,
                            a = new f(o, r, 100),
                            s = u(this.floatingTextPrefab);
                          s.setParent(n), s.setPosition(a);
                        } else console.warn("UITransform не найден на Canvas.");
                      } else console.warn("Canvas не найден.");
                    } else
                      console.warn(
                        "floatingTextPrefab не установлен в SpineController."
                      );
                  }),
                  n
                );
              })(h)).prototype,
              "spine",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (w = n(v.prototype, "socketManager", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = n(v.prototype, "floatingTextPrefab", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = v))
          ) || b)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TabBarController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, n, o, i, a, r, s, l, u, c, b, h, g;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (r = e._decorator),
            (s = e.Node),
            (l = e.Label),
            (u = e.UIOpacity),
            (c = e.tween),
            (b = e.Vec3),
            (h = e.Color),
            (g = e.Component);
        },
      ],
      execute: function () {
        var p,
          f,
          d,
          m,
          v,
          P,
          T,
          w,
          y,
          k,
          x,
          H,
          z,
          L,
          F,
          E,
          S,
          C,
          B,
          I,
          N,
          U,
          R,
          _,
          A,
          D,
          O,
          W,
          G,
          Y,
          M,
          j,
          K,
          V,
          Z,
          q,
          J,
          Q,
          X,
          $,
          ee,
          te,
          ne;
        a._RF.push({}, "40497KNIRZM96W3FB/cr0rR", "TabBarController", void 0);
        var oe = r.ccclass,
          ie = r.property;
        e(
          "TabBarController",
          ((p = oe("TabBarController")),
          (f = ie(s)),
          (d = ie(s)),
          (m = ie(s)),
          (v = ie(s)),
          (P = ie(s)),
          (T = ie(s)),
          (w = ie(s)),
          (y = ie(s)),
          (k = ie(s)),
          (x = ie(s)),
          (H = ie(l)),
          (z = ie(l)),
          (L = ie(l)),
          (F = ie(l)),
          (E = ie(l)),
          (S = ie(s)),
          (C = ie(s)),
          (B = ie(s)),
          (I = ie(s)),
          (N = ie(s)),
          p(
            ((_ = t(
              (R = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    o(t, "mainPage", _, i(t)),
                    o(t, "friendsPage", A, i(t)),
                    o(t, "storePage", D, i(t)),
                    o(t, "leadersPage", O, i(t)),
                    o(t, "tasksPage", W, i(t)),
                    o(t, "iconHome", G, i(t)),
                    o(t, "iconFriends", Y, i(t)),
                    o(t, "iconStore", M, i(t)),
                    o(t, "iconLeaders", j, i(t)),
                    o(t, "iconTasks", K, i(t)),
                    o(t, "textHome", V, i(t)),
                    o(t, "textFriends", Z, i(t)),
                    o(t, "textStore", q, i(t)),
                    o(t, "textLeaders", J, i(t)),
                    o(t, "textTasks", Q, i(t)),
                    o(t, "buttonHome", X, i(t)),
                    o(t, "buttonFriends", $, i(t)),
                    o(t, "buttonLeaders", ee, i(t)),
                    o(t, "buttonTasks", te, i(t)),
                    o(t, "activeButton", ne, i(t)),
                    (t.currentTab = "none"),
                    t
                  );
                }
                n(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    var e = this;
                    this.checkProperties(),
                      this.showPage("home", !1),
                      this.iconHome.on(s.EventType.TOUCH_END, function () {
                        e.showPage("home", !0);
                      }),
                      this.iconFriends.on(s.EventType.TOUCH_END, function () {
                        e.showPage("friends", !0);
                      }),
                      this.iconStore.on(s.EventType.TOUCH_END, function () {
                        e.showPage("store", !0);
                      }),
                      this.iconLeaders.on(s.EventType.TOUCH_END, function () {
                        e.showPage("leaders", !0);
                      }),
                      this.iconTasks.on(s.EventType.TOUCH_END, function () {
                        e.showPage("tasks", !0);
                      });
                  }),
                  (a.checkProperties = function () {
                    [
                      { name: "mainPage", value: this.mainPage },
                      { name: "friendsPage", value: this.friendsPage },
                      { name: "storePage", value: this.storePage },
                      { name: "leadersPage", value: this.leadersPage },
                      { name: "tasksPage", value: this.tasksPage },
                      { name: "iconHome", value: this.iconHome },
                      { name: "iconFriends", value: this.iconFriends },
                      { name: "iconStore", value: this.iconStore },
                      { name: "iconLeaders", value: this.iconLeaders },
                      { name: "iconTasks", value: this.iconTasks },
                      { name: "textHome", value: this.textHome },
                      { name: "textFriends", value: this.textFriends },
                      { name: "textStore", value: this.textStore },
                      { name: "textLeaders", value: this.textLeaders },
                      { name: "textTasks", value: this.textTasks },
                      { name: "buttonHome", value: this.buttonHome },
                      { name: "buttonFriends", value: this.buttonFriends },
                      { name: "buttonLeaders", value: this.buttonLeaders },
                      { name: "buttonTasks", value: this.buttonTasks },
                      { name: "activeButton", value: this.activeButton },
                    ].forEach(function (e) {
                      e.value ||
                        console.warn(
                          'Property "' +
                            e.name +
                            '" is not assigned in the inspector.'
                        );
                    });
                  }),
                  (a.showPage = function (e, t) {
                    void 0 === t && (t = !0),
                      e !== this.currentTab &&
                        (console.log(
                          "Switching to page: " +
                            e +
                            " from currentTab: " +
                            this.currentTab
                        ),
                        "none" !== this.currentTab &&
                          this.hidePage(this.currentTab, t),
                        this.showNewPage(e, t),
                        this.updateTabUI(e),
                        (this.currentTab = e));
                  }),
                  (a.hidePage = function (e, t) {
                    var n = this.getPageNode(e);
                    if (n) {
                      var o = n.getComponent(u);
                      o ||
                        (console.warn(
                          'UIOpacity component not found on "' +
                            e +
                            '" page. Adding one.'
                        ),
                        (o = n.addComponent(u))),
                        t
                          ? (c(n)
                              .to(0.3, { scale: new b(0.95, 0.95, 1) })
                              .start(),
                            c(o)
                              .to(0.3, { opacity: 0 })
                              .call(function () {
                                (n.active = !1),
                                  n.setScale(1, 1, 1),
                                  (o.opacity = 255),
                                  console.log('Page "' + e + '" скрыта.');
                              })
                              .start())
                          : ((n.active = !1),
                            (o.opacity = 255),
                            console.log(
                              'Page "' + e + '" скрыта без анимации.'
                            ));
                    } else
                      console.error('Page node for "' + e + '" not found.');
                  }),
                  (a.showNewPage = function (e, t) {
                    var n = this.getPageNode(e);
                    if (n) {
                      n.active = !0;
                      var o = n.getComponent(u);
                      o ||
                        (console.warn(
                          'UIOpacity component not found on "' +
                            e +
                            '" page. Adding one.'
                        ),
                        (o = n.addComponent(u))),
                        t
                          ? ((o.opacity = 0),
                            n.setScale(0.95, 0.95, 1),
                            c(o).to(0.3, { opacity: 255 }).start(),
                            c(n)
                              .to(0.3, { scale: new b(1.05, 1.05, 1) })
                              .to(0.3, { scale: new b(1, 1, 1) })
                              .call(function () {
                                console.log('Page "' + e + '" показана.');
                              })
                              .start())
                          : ((o.opacity = 255),
                            n.setScale(1, 1, 1),
                            console.log(
                              'Page "' + e + '" показана без анимации.'
                            ));
                    } else
                      console.error('Page node for "' + e + '" not found.');
                  }),
                  (a.getPageNode = function (e) {
                    switch (e) {
                      case "home":
                        return this.mainPage;
                      case "friends":
                        return this.friendsPage;
                      case "store":
                        return this.storePage;
                      case "leaders":
                        return this.leadersPage;
                      case "tasks":
                        return this.tasksPage;
                      default:
                        return console.warn("Unknown page: " + e), null;
                    }
                  }),
                  (a.updateTabUI = function (e) {
                    switch (
                      ((this.textHome.color = h.GRAY),
                      (this.textFriends.color = h.GRAY),
                      (this.textStore.color = h.GRAY),
                      (this.textLeaders.color = h.GRAY),
                      (this.textTasks.color = h.GRAY),
                      (this.activeButton.active = !1),
                      (this.buttonHome.active = !1),
                      (this.buttonFriends.active = !1),
                      (this.buttonLeaders.active = !1),
                      (this.buttonTasks.active = !1),
                      e)
                    ) {
                      case "home":
                        (this.textHome.color = h.WHITE),
                          (this.buttonHome.active = !0);
                        break;
                      case "friends":
                        (this.textFriends.color = h.WHITE),
                          (this.buttonFriends.active = !0);
                        break;
                      case "store":
                        (this.textStore.color = h.WHITE),
                          (this.activeButton.active = !0);
                        break;
                      case "leaders":
                        (this.textLeaders.color = h.WHITE),
                          (this.buttonLeaders.active = !0);
                        break;
                      case "tasks":
                        (this.textTasks.color = h.WHITE),
                          (this.buttonTasks.active = !0);
                    }
                  }),
                  t
                );
              })(g)).prototype,
              "mainPage",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (A = t(R.prototype, "friendsPage", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = t(R.prototype, "storePage", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = t(R.prototype, "leadersPage", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = t(R.prototype, "tasksPage", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = t(R.prototype, "iconHome", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = t(R.prototype, "iconFriends", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = t(R.prototype, "iconStore", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = t(R.prototype, "iconLeaders", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = t(R.prototype, "iconTasks", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = t(R.prototype, "textHome", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = t(R.prototype, "textFriends", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = t(R.prototype, "textStore", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = t(R.prototype, "textLeaders", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = t(R.prototype, "textTasks", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = t(R.prototype, "buttonHome", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = t(R.prototype, "buttonFriends", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ee = t(R.prototype, "buttonLeaders", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (te = t(R.prototype, "buttonTasks", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ne = t(R.prototype, "activeButton", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = R))
          ) || U)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Telegram.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var t, n;
    return {
      setters: [
        function (e) {
          t = e.createClass;
        },
        function (e) {
          n = e.cclegacy;
        },
      ],
      execute: function () {
        n._RF.push({}, "7de8aOSxIpO95DB2tvaKgVA", "Telegram", void 0),
          (e(
            "TelegramWebApp",
            (function () {
              function e() {
                this.tg = null;
              }
              var n = e.prototype;
              return (
                (n.loadSDK = function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    var r;
                    if (null != (r = window.Telegram) && r.WebApp)
                      return (e.tg = window.Telegram.WebApp), void t();
                    var i = document.createElement("script");
                    (i.src = "https://telegram.org/js/telegram-web-app.js"),
                      (i.onload = function () {
                        (e.tg = window.Telegram.WebApp), t();
                      }),
                      (i.onerror = function () {
                        n(
                          new Error(
                            "Не удалось загрузить Telegram Web Apps SDK."
                          )
                        );
                      }),
                      document.head.appendChild(i);
                  });
                }),
                (n.initialize = function (e) {
                  var t;
                  if (this.tg) {
                    var n, r, i, l, o, a, s, c, u;
                    if (null != e && e.expand)
                      null == (n = (r = this.tg).expand) || n.call(r);
                    if (null != e && e.disableVerticalSwipes)
                      null == (i = (l = this.tg).disableVerticalSwipes) ||
                        i.call(l),
                        (this.tg.isVerticalSwipesEnabled = !1);
                    if (null != e && e.backgroundColor)
                      null == (o = (a = this.tg).setBackgroundColor) ||
                        o.call(a, e.backgroundColor);
                    if (null != e && e.headerColor)
                      null == (s = (c = this.tg).setHeaderColor) ||
                        s.call(c, e.headerColor);
                    if (null != (t = this.tg) && t.web_app_setup_swipe_behavior)
                      this.tg.web_app_setup_swipe_behavior({
                        allow_vertical_swipe:
                          null ==
                            (u =
                              null == e ? void 0 : e.disableVerticalSwipes) ||
                          u,
                      });
                  } else console.warn("Telegram WebApp SDK не загружен.");
                }),
                (n.ready = function () {
                  var e = this;
                  return new Promise(function (t) {
                    e.tg ? (e.tg.ready(), t()) : t();
                  });
                }),
                (n.setBackgroundColor = function (e) {
                  this.tg && this.tg.setBackgroundColor
                    ? this.tg.setBackgroundColor(e)
                    : console.warn("Метод setBackgroundColor недоступен.");
                }),
                (n.setHeaderColor = function (e) {
                  this.tg && this.tg.setHeaderColor
                    ? this.tg.setHeaderColor(e)
                    : console.warn("Метод setHeaderColor недоступен.");
                }),
                (n.triggerHapticFeedback = function (e) {
                  void 0 === e && (e = "medium"),
                    this.tg && this.tg.HapticFeedback
                      ? this.tg.HapticFeedback.impactOccurred(e)
                      : console.warn("HapticFeedback API недоступен.");
                }),
                t(e, null, [
                  {
                    key: "instance",
                    get: function () {
                      return (
                        e._instance || (e._instance = new e()), e._instance
                      );
                    },
                  },
                ]),
                e
              );
            })()
          )._instance = null),
          n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UnlockModalEverydayCardItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    var r, a, n, t, o, l, i, c;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (a = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (t = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (l = e._decorator),
            (i = e.Label),
            (c = e.Component);
        },
      ],
      execute: function () {
        var u, y, s, d, p;
        o._RF.push(
          {},
          "336f9EjZc9HTY4IMBl4Ozro",
          "UnlockModalEverydayCardItem",
          void 0
        );
        var f = l.ccclass,
          b = l.property;
        e(
          "UnlockModalEverydayCardItem",
          ((u = f("UnlockModalEverydayCardItem")),
          (y = b(i)),
          u(
            ((p = r(
              (d = (function (e) {
                function r() {
                  for (
                    var r, a = arguments.length, o = new Array(a), l = 0;
                    l < a;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (r = e.call.apply(e, [this].concat(o)) || this),
                    n(r, "numberOfDayLabel", p, t(r)),
                    r
                  );
                }
                return (
                  a(r, e),
                  (r.prototype.setDayNumber = function (e) {
                    this.numberOfDayLabel
                      ? (this.numberOfDayLabel.string = "День " + e)
                      : console.warn(
                          "numberOfDayLabel не назначен в UnlockModalEverydayCardItem."
                        );
                  }),
                  r
                );
              })(c)).prototype,
              "numberOfDayLabel",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (s = d))
          ) || s)
        );
        o._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/main", "chunks:///_virtual/main");
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [
        function (_m) {
          var _exportObj = {};

          for (var _key in _m) {
            if (_key !== "default" && _key !== "__esModule")
              _exportObj[_key] = _m[_key];
          }

          _export(_exportObj);
        },
      ],
      execute: function () {},
    };
  });
});
