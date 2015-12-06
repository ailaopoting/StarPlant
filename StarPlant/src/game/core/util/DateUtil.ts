/**
 * 日期相关操作工具集
 * @author 
 *
 */
class DateUtil {
    public static MILLISECONDS_PER_SECOND:number = 1000;
    public static SECONDS_PER_MINUTE:number = 60;
    public static SECONDS_PER_HOUR:number = 3600;
    public static SECONDS_PER_DAY:number = 86400;
    public static SEER2_BASE_YEAR:number = 1970;
    
	public constructor() {
	}
	
	/**
	*获取按20:15:30格式输出的时分秒 
	* @return 
	* 
	*/
    public static getHMS(seconds: number): string {
        var hour: any = Math.floor(seconds / this.SECONDS_PER_HOUR) + "";
        var leftMin: number = seconds % this.SECONDS_PER_HOUR;
        var min: any = Math.floor(leftMin / this.SECONDS_PER_MINUTE) + "";
        var sec: any = leftMin % this.SECONDS_PER_MINUTE + "";
        hour = (<number>hour < 10) ? "0" + hour : hour;
        min = (<number>min < 10) ? "0" + min : min;
        sec = (<number>sec < 10) ? "0" + sec : sec;
        return hour + ":" + min + ":" + sec;
    }
		
    /**
     * 获取按15:30格式输出的分秒 
     * @param seconds
     * @return 
     * 
     */
    public static getMS(seconds: number): string {
        var min: any = Math.floor(seconds / this.SECONDS_PER_MINUTE) + "";
        var sec: any = (seconds % this.SECONDS_PER_MINUTE) + "";
        min = (<number>min < 10) ? "0" + min : min;
        sec = (<number>sec < 10) ? "0" + sec : sec;
        return min + ":" + sec;
    }
}
