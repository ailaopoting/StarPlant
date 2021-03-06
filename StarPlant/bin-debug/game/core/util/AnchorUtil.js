/**
 * 该工具类用于解决EgretEngine2.5版本没有anchorX/anchorY属性值的问题
 * 在创建游戏场景前需要执行AnchorUtil.init();初始化工具并完成属性的注入
 * 方式一（推荐）：
 * AnchorUtil.setAnchorX(target, anchorX); //设置对象的anchorX值
 * AnchorUtil.setAnchorY(target, anchorY); //设置对象的anchorY值
 * AnchorUtil.setAnchor(target, anchor); //同时设置对象的anchorX和anchorY值
 * 方式二：
 * target["anchorX"] = value; //设置对象的anchorX值
 * target["anchorY"] = value; //设置对象的anchorY值
 * target["anchor"] = value; //同时设置对象的anchorX和anchorY值
 * 方式三：
 * 修改egret.d.ts，在DisplayObject声明中添加anchorX、anchorY和anchor属性，代码的写法和引擎之前版本相同：
 * target.anchorX = value; //设置对象的anchorX值
 * target.anchorY = value; //设置对象的anchorY值
 * target.anchor = value; //同时设置对象的anchorX和anchorY值
 *
 * Created by Saco on 2015/9/16.
 */
var AnchorUtil = (function () {
    function AnchorUtil() {
    }
    var d = __define,c=AnchorUtil;p=c.prototype;
    /**
     * 初始化工具类，并完成注入anchorX/anchorY属性
     */
    AnchorUtil.init = function () {
        if (this._isInited)
            return;
        this._propertyChange = Object.create(null);
        this._anchorChange = Object.create(null);
        this.injectAnchor();
        this._isInited = true;
    };
    /**
     * 设置对象的anchorX值
     * @param target 被设置相对冒点属性的对象
     * @param value 相对锚点值
     */
    AnchorUtil.setAnchorX = function (target, value) {
        target["anchorX"] = value;
    };
    /**
     * 设置对象的anchorY值
     * @param target 被设置相对冒点属性的对象
     * @param value 相对锚点值
     */
    AnchorUtil.setAnchorY = function (target, value) {
        target["anchorY"] = value;
    };
    /**
     * 设置对象的anchor值，同时改变anchorX和anchorY值
     * @param target 被设置相对冒点属性的对象
     * @param value 相对锚点值
     */
    AnchorUtil.setAnchor = function (target, value) {
        target["anchorX"] = target["anchorY"] = value;
    };
    /**
     * 获得对象的anchorX值
     * @param target 取值的对象
     * @returns {any|number} anchorX值
     */
    AnchorUtil.getAnchorX = function (target) {
        return target["anchorX"] || 0;
    };
    /**
     * 获得对象的anchorY值
     * @param target 取值的对象
     * @returns {any|number} anchorY值
     */
    AnchorUtil.getAnchorY = function (target) {
        return target["anchorY"] || 0;
    };
    /**
     * 注入anchorX/anchorY属性，并重写引擎底层方法实现相对锚点
     */
    AnchorUtil.injectAnchor = function () {
        Object.defineProperty(egret.DisplayObject.prototype, "width", {
            get: function () {
                return this.$getWidth();
            },
            set: function (value) {
                var _this = this;
                this.$setWidth(value);
                AnchorUtil._propertyChange[this.hashCode] = true;
                egret.callLater(function () {
                    AnchorUtil.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "height", {
            get: function () {
                return this.$getHeight();
            },
            set: function (value) {
                var _this = this;
                this.$setHeight(value);
                AnchorUtil._propertyChange[this.hashCode] = true;
                egret.callLater(function () {
                    AnchorUtil.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "anchorX", {
            get: function () {
                return this["_anchorX"];
            },
            set: function (value) {
                var _this = this;
                this._anchorX = value;
                AnchorUtil._propertyChange[this.hashCode] = true;
                AnchorUtil._anchorChange[this.hashCode] = true;
                egret.callLater(function () {
                    AnchorUtil.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "anchorY", {
            get: function () {
                return this["_anchorY"];
            },
            set: function (value) {
                var _this = this;
                this._anchorY = value;
                AnchorUtil._propertyChange[this.hashCode] = true;
                AnchorUtil._anchorChange[this.hashCode] = true;
                egret.callLater(function () {
                    AnchorUtil.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "anchor", {
            get: function () {
                return this["_anchorX"];
            },
            set: function (value) {
                var _this = this;
                this._anchorX = value;
                this._anchorY = value;
                AnchorUtil._propertyChange[this.hashCode] = true;
                AnchorUtil._anchorChange[this.hashCode] = true;
                egret.callLater(function () {
                    AnchorUtil.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        if (egret.gui && egret.gui.UIComponent) {
            Object.defineProperty(egret.gui.UIComponent.prototype, "width", {
                get: function () {
                    return this._UIC_Props_._uiWidth;
                },
                set: function (value) {
                    var _this = this;
                    this.$setWidth(value);
                    AnchorUtil._propertyChange[this.hashCode] = true;
                    egret.callLater(function () {
                        AnchorUtil.changeAnchor(_this);
                    }, this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(egret.gui.UIComponent.prototype, "height", {
                get: function () {
                    return this._UIC_Props_._uiHeight;
                },
                set: function (value) {
                    var _this = this;
                    this.$setHeight(value);
                    AnchorUtil._propertyChange[this.hashCode] = true;
                    egret.callLater(function () {
                        AnchorUtil.changeAnchor(_this);
                    }, this);
                },
                enumerable: true,
                configurable: true
            });
            egret.gui.UIComponent.prototype.setActualSize = function (w, h) {
                var _this = this;
                var change = false;
                if (this._UIC_Props_._uiWidth != w) {
                    this._UIC_Props_._uiWidth = w;
                    change = true;
                }
                if (this._UIC_Props_._uiHeight != h) {
                    this._UIC_Props_._uiHeight = h;
                    change = true;
                }
                if (change) {
                    this.invalidateDisplayList();
                    this.dispatchResizeEvent();
                    AnchorUtil._propertyChange[this.hashCode] = true;
                    egret.callLater(function () {
                        AnchorUtil.changeAnchor(_this);
                    }, this);
                }
            };
        }
    };
    AnchorUtil.changeAnchor = function (tar) {
        if (AnchorUtil._propertyChange[tar.hashCode] && AnchorUtil._anchorChange[tar.hashCode]) {
            tar.anchorOffsetX = tar._anchorX * tar.width;
            tar.anchorOffsetY = tar._anchorY * tar.height;
            delete AnchorUtil._propertyChange[tar.hashCode];
        }
    };
    return AnchorUtil;
})();
egret.registerClass(AnchorUtil,"AnchorUtil");
