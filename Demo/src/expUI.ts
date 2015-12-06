class expUI extends egret.Sprite
{
    private maskRect: egret.Rectangle;
    private txt: egret.TextField;
    private bright: egret.Bitmap;
    public constructor()
    {
        super();
        this.addEventListener( egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
    }
    public onAddToStage(): void
    {
        
        //底部的进度条
        var dark: egret.Bitmap = new egret.Bitmap( RES.getRes( "bardark_png" ) );
        this.addChild( dark );
        //上面的进度条
        this.bright = new egret.Bitmap( RES.getRes( "barbright_png" ) );
        this.addChild( this.bright );

        this.maskRect = new egret.Rectangle( 0, 0, 0, 24 );
        this.bright.mask = this.maskRect;//设置空的遮罩，亮条不显示
        
        
        this.txt = new egret.TextField();
        this.txt.size = 14;
        this.txt.y = -5;
        this.txt.width = ConstantA.stageW;
        this.txt.textColor = 0xffffff;//设置颜色
        this.txt.bold = true;
        //this.txt.strokeColor = 0xFF9999;//设置描边颜色
        //this.txt.stroke = 1;//设置描边大小
        this.txt.textAlign = "center";
        this.txt.text = "0/0";
        this.addChild( this.txt );
    }

    /**
     * 加载资源文件中
     */
    public onProgress( A: number, B: number, C: string ): void
    {
        this.txt.text = "Exp:" + A + "/" + B + C;
        var per: number = A / B;//加载的比例
        this.maskRect = new egret.Rectangle( 0, 0, per * this.bright.width, 24 );//计算遮罩的大小
        this.bright.mask = this.maskRect;
    }

}