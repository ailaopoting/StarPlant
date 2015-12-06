var skin;
(function (skin) {
    var components;
    (function (components) {
        var MoneyUISkin = (function (_super) {
            __extends(MoneyUISkin, _super);
            function MoneyUISkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [44, 356]);
                this.elementsContent = [this.__3_i(), this.moneyState_i(), this.moneyVal_i(), this.allMoney_i(), this.curMoney_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            var d = __define,c=MoneyUISkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MoneyUISkin._skinParts;
                }
            );
            p.allMoney_i = function () {
                var t = new egret.gui.Button();
                this.allMoney = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [52, new egret.gui.ButtonSkin("allMoneyIcon_up_png"), 78, 7, -3]);
                return t;
            };
            p.curMoney_i = function () {
                var t = new egret.gui.Button();
                this.curMoney = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [51, new egret.gui.ButtonSkin("curMoneyIcon_up_png"), 80, 6, -3]);
                return t;
            };
            p.moneyState_i = function () {
                var t = new egret.gui.Label();
                this.moneyState = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 20, "总财", 0xDAED0D, 76, 13]);
                return t;
            };
            p.moneyVal_i = function () {
                var t = new egret.gui.Label();
                this.moneyVal = t;
                this.__s(t, ["bold", "size", "text", "textAlign", "textColor", "width", "x", "y"], [true, 20, "999999", "right", 0xE8E002, 205, 137, 12]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["userCoinUI_png", 31, 1]);
                return t;
            };
            MoneyUISkin._skinParts = ["moneyState", "moneyVal", "allMoney", "curMoney"];
            return MoneyUISkin;
        })(egret.gui.Skin);
        components.MoneyUISkin = MoneyUISkin;
        egret.registerClass(MoneyUISkin,"skin.components.MoneyUISkin");
    })(components = skin.components || (skin.components = {}));
})(skin || (skin = {}));
