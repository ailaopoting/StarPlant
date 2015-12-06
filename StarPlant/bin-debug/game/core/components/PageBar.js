/**
 * 分页
 * @author
 *
 */
var PageBar = (function (_super) {
    __extends(PageBar, _super);
    function PageBar(preBtn, nextbtn, totalPage, currentPageTxt, totalPageTxt) {
        if (totalPage === void 0) { totalPage = 0; }
        if (currentPageTxt === void 0) { currentPageTxt = null; }
        if (totalPageTxt === void 0) { totalPageTxt = null; }
        _super.call(this);
        this._preBtn = preBtn;
        this._nextBtn = nextbtn;
        this._totalPage = totalPage;
        this._currentPageTxt = currentPageTxt;
        this._totalPageTxt = totalPageTxt;
        this._currentPage = 1;
        this.initEventListener();
        this.setStatus();
        this.updataTxt();
    }
    var d = __define,c=PageBar;p=c.prototype;
    d(p, "totalPage"
        ,function () {
            return this._totalPage;
        }
        ,function (totalPage) {
            this._totalPage = totalPage;
            this._currentPage = 1;
            this.setStatus();
            this.updataTxt();
        }
    );
    p.initEventListener = function () {
        this._preBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPre, this);
        this._nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this);
    };
    p.onPre = function (evt) {
        this._currentPage--;
        this.setStatus();
        this.updataTxt();
        this.dispatchEvent(new egret.Event(PageBar.PAGE_CHANGE));
    };
    p.onNext = function (evt) {
        this._currentPage++;
        this.setStatus();
        this.updataTxt();
        this.dispatchEvent(new egret.Event(PageBar.PAGE_CHANGE));
    };
    p.setStatus = function () {
        this._preBtn.visible = true;
        this._nextBtn.visible = true;
        if (this._currentPage <= 1) {
            this._preBtn.visible = false;
            if (this._totalPage > 1) {
                this._nextBtn.visible = true;
            }
            else {
                this._nextBtn.visible = false;
            }
        }
        else if (this._currentPage >= this._totalPage) {
            this._nextBtn.visible = false;
            if (this._currentPage > 1) {
                this._preBtn.visible = true;
            }
            else {
                this._preBtn.visible = false;
            }
        }
    };
    p.updataTxt = function () {
        if (this._currentPageTxt) {
            this._currentPageTxt.text = this._currentPage.toString();
        }
        if (this._totalPageTxt) {
            this._totalPageTxt.text = this._totalPage.toString();
        }
    };
    d(p, "currentPage"
        ,function () {
            return this._currentPage;
        }
        ,function (currentPage) {
            this._currentPage = currentPage;
            this.setStatus();
            this.updataTxt();
            this.dispatchEvent(new egret.Event(PageBar.PAGE_CHANGE));
        }
    );
    /**
     *移除事件监听
     *
     */
    p.dispose = function () {
        this._preBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onPre, this);
        this._nextBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this);
    };
    PageBar.PAGE_CHANGE = "pageChange";
    return PageBar;
})(egret.EventDispatcher);
egret.registerClass(PageBar,"PageBar");
