/* eslint-disable */
var webApiBasePath = 'http://20.168.100.124:8519';
var webApiBasePathStaticImage = 'http://20.168.100.124:8519'; // 静态图服务
var loginFlag = false; // 是否有登录页

var defaultCenterPoint = [117.972055,40.958455];  // 中心点经纬度

// 统一输入输出坐标系
var inputCrs = 'wgs84ll';
var outputCrs = 'wgs84ll';

var AUTHENTIC_TOKEN_DuGIS = checkUser() && localStorage.getItem('AUTHENTIC_TOKEN_DuGIS');
export function checkUser() {
    if (top.location.href.indexOf('login') === -1 && !localStorage.getItem('AUTHENTIC_TOKEN_DuGIS')) {
        if (loginFlag) {
            top.location.href = '/dugis-demo-3d/login/login.html';
            return false;
        } else {
            autoLogin();
            return true;
        }
    }
    // 默认30min过期，可勾选7天过期
    var expireTime = localStorage.getItem('expireTime');
    var time = expireTime ? 1000 * 60 * 60 * 24 * 6.9 : 1000 * 60 * 29;
    var startTime = localStorage.getItem('startTime');
    var curTime = new Date().getTime();
    if (curTime > parseInt(startTime, 10) + time) {
        localStorage.removeItem('realName');
        localStorage.removeItem('role');
        localStorage.removeItem('startTime');
        localStorage.removeItem('AUTHENTIC_TOKEN_DuGIS');
        localStorage.removeItem('expireTime');
        if (loginFlag) {
            top.location.href = '/dugis-demo-3d/login/login.html';
            return false;
        } else {
            autoLogin();
            return true;
        }
    }
    return true;
}

export function getUpdateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var dates = date.getDate();
    var hour = date.getHours(); // 时
    hour = hour < 10 ? '0' + hour : hour;
    var mini = date.getMinutes(); // 分
    mini = mini < 10 ? '0' + mini : mini;
    return `${year}-${month}-${dates} ${hour}:${mini}`;
};

export function autoLogin() {
    $.ajax({
        url: webApiBasePath + '/login/userLogin?sevenFlag=true',
        type: 'POST',
        dataType: 'json',
        data: {
            username: 'shiju',
            password: 'aoH8c7b@',
//            username: '110jcj',
//            password: 'G!o23$eg',
        },
        success: function (response) {
            if (response.status === 0) {
            	console.log(response.result)
                localStorage.setItem('realName', response.result.realName);
                localStorage.setItem('role', response.result.role);
                localStorage.setItem('startTime', new Date().getTime());
                localStorage.setItem('AUTHENTIC_TOKEN_DuGIS', response.result.token);
                localStorage.setItem('expireTime', 7);
            }
            else {
                $.Toast('error', response.message);
            }
        },
        error: function (err) {
            console.log('失败', err);
        }
    });
}