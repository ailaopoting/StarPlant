var skin;
(function (skin) {
    var components;
    (function (components) {
        var UserUISkin = (function (_super) {
            __extends(UserUISkin, _super);
            function UserUISkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [112, 152]);
                this.elementsContent = [this.__3_i(), this.userName_i(), this.userIconRes_i(), this.__4_i(), this.__5_i(), this.miVal_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            var d = __define,c=UserUISkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return UserUISkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [25, "能量", 0x050000, 81, 11]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [25, "x", 0x050000, 83, 39]);
                return t;
            };
            p.miVal_i = function () {
                var t = new egret.gui.Label();
                this.miVal = t;
                this.__s(t, ["size", "textColor", "x", "y"], [25, 0xF31408, 96, 41]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["userIcon", 0, -1]);
                return t;
            };
            p.userIconRes_i = function () {
                var t = new egret.gui.UIAsset();
                this.userIconRes = t;
                this.__s(t, ["height", "width", "x", "y"], [68, 68, 8, 5]);
                return t;
            };
            p.userName_i = function () {
                var t = new egret.gui.Label();
                this.userName = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "999", "center", 0x000000, 80, 1, 82]);
                return t;
            };
            UserUISkin._skinParts = ["userName", "userIconRes", "miVal"];
            return UserUISkin;
        })(egret.gui.Skin);
        components.UserUISkin = UserUISkin;
        egret.registerClass(UserUISkin,"skin.components.UserUISkin");
    })(components = skin.components || (skin.components = {}));
})(skin || (skin = {}));
