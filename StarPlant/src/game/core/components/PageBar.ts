/**
 * 分页
 * @author 
 *
 */
class PageBar extends egret.EventDispatcher{
    public static PAGE_CHANGE: string = "pageChange";

    private _preBtn: egret.gui.Button;
    private _nextBtn: egret.gui.Button;
    private _currentPage: number;
    private _totalPage: number;
    private _currentPageTxt: egret.TextField;
    private _totalPageTxt: egret.TextField;

    public constructor(preBtn: egret.gui.Button,nextbtn: egret.gui.Button,totalPage: number = 0,currentPageTxt: egret.TextField = null,totalPageTxt: egret.TextField = null) {
        super();
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


    public set totalPage(totalPage: number) {
        this._totalPage = totalPage;
        this._currentPage = 1;
        this.setStatus();
        this.updataTxt();
    }

    public get totalPage(): number {
        return this._totalPage;
    }

    private initEventListener(): void {
        this._preBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPre,this);
        this._nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNext,this);
    }

    private onPre(evt: egret.TouchEvent): void {
        this._currentPage--;
        this.setStatus();
        this.updataTxt();
        this.dispatchEvent(new egret.Event(PageBar.PAGE_CHANGE));
    }

    private onNext(evt: egret.TouchEvent): void {
        this._currentPage++;
        this.setStatus();
        this.updataTxt();
        this.dispatchEvent(new egret.Event(PageBar.PAGE_CHANGE));
    }

    private setStatus(): void {
        this._preBtn.visible = true;
        this._nextBtn.visible = true;
        if(this._currentPage <= 1) {
            this._preBtn.visible = false;
            if(this._totalPage > 1) {
                this._nextBtn.visible = true;
            } else {
                this._nextBtn.visible = false;
            }
        }
        else if(this._currentPage >= this._totalPage) {
            this._nextBtn.visible = false;
            if(this._currentPage > 1) {
                this._preBtn.visible = true;
            } else {
                this._preBtn.visible = false;
            }
        }
    }

    private updataTxt(): void {
        if(this._currentPageTxt) {
            this._currentPageTxt.text = this._currentPage.toString();
        }
        if(this._totalPageTxt) {
            this._totalPageTxt.text = this._totalPage.toString();
        }
    }

    public set currentPage(currentPage: number) {
        this._currentPage = currentPage;
        this.setStatus();
        this.updataTxt();
        this.dispatchEvent(new egret.Event(PageBar.PAGE_CHANGE));
    }

    public get currentPage(): number {
        return this._currentPage;
    }
    
    /**
     *移除事件监听 
     * 
     */
    public dispose(): void {
        this._preBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onPre,this);
        this._nextBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onNext,this);
    }
}
