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
                this.__s(t, ["height", "skinName", "width", "x", "y"], [42, new egret.gui.ButtonSkin("allMoneyIcon_up"), 62, 0, 2]);
                return t;
            };
            p.curMoney_i = function () {
                var t = new egret.gui.Button();
                this.curMoney = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [41, new egret.gui.ButtonSkin("curMoneyIcon_up"), 65, 0, 2]);
                return t;
            };
            p.moneyState_i = function () {
                var t = new egret.gui.Label();
                this.moneyState = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "总财", 0x000000, 119, 12]);
                return t;
            };
            p.moneyVal_i = function () {
                var t = new egret.gui.Label();
                this.moneyVal = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [20, "999999", 81, 160, 12]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "userCoinUI";
                return t;
            };
            MoneyUISkin._skinParts = ["moneyState", "moneyVal", "allMoney", "curMoney"];
            return MoneyUISkin;
        })(egret.gui.Skin);
        components.MoneyUISkin = MoneyUISkin;
        egret.registerClass(MoneyUISkin,"skin.components.MoneyUISkin");
    })(components = skin.components || (skin.components = {}));
})(skin || (skin = {}));
