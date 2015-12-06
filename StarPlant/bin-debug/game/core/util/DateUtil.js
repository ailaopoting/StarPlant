/**
 * 日期相关操作工具集
 * @author
 *
 */
var DateUtil = (function () {
    function DateUtil() {
    }
    var d = __define,c=DateUtil;p=c.prototype;
    /**
    *获取按20:15:30格式输出的时分秒
    * @return
    *
    */
    DateUtil.getHMS = function (seconds) {
        var hour = Math.floor(seconds / this.SECONDS_PER_HOUR) + "";
        var leftMin = seconds % this.SECONDS_PER_HOUR;
        var min = Math.floor(leftMin / this.SECONDS_PER_MINUTE) + "";
        var sec = leftMin % this.SECONDS_PER_MINUTE + "";
        hour = (hour < 10) ? "0" + hour : hour;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        return hour + ":" + min + ":" + sec;
    };
    /**
     * 获取按15:30格式输出的分秒
     * @param seconds
     * @return
     *
     */
    DateUtil.getMS = function (seconds) {
        var min = Math.floor(seconds / this.SECONDS_PER_MINUTE) + "";
        var sec = (seconds % this.SECONDS_PER_MINUTE) + "";
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        return min + ":" + sec;
    };
    DateUtil.MILLISECONDS_PER_SECOND = 1000;
    DateUtil.SECONDS_PER_MINUTE = 60;
    DateUtil.SECONDS_PER_HOUR = 3600;
    DateUtil.SECONDS_PER_DAY = 86400;
    DateUtil.SEER2_BASE_YEAR = 1970;
    return DateUtil;
})();
egret.registerClass(DateUtil,"DateUtil");
