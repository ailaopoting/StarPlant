/**
 * 请求类型集合
 * @author
 *
 */
var RequestType = (function () {
    function RequestType() {
    }
    var d = __define,c=RequestType;p=c.prototype;
    //协议定义=================
    RequestType.GET_USER_INFO = 1; //获得用户信息  用户id..... 
    //系统错误码===============
    RequestType.SYS_ERROR = 1;
    return RequestType;
})();
egret.registerClass(RequestType,"RequestType");
