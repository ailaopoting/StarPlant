/**
 * 音乐管理
 * @author 
 *
 */
class SoundManager {
    public curSound: egret.Sound;
    public curChanel: egret.SoundChannel;
    
    private static _self: SoundManager;

    public static getInstance(): SoundManager {
        if(null == this._self) {
            this._self = new SoundManager;
        }
        return this._self;
    }
    
	public constructor() {
	}
}
