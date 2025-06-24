/* eslint-disable */
window.BMAPGL_STATIC_URL = 'http://20.168.100.124:8119';
window.BMAPGL_URL = 'http://20.168.100.124:8519';
window.TRAFFIC_URL = 'http://20.168.100.124:8519';
window.BMAPGL_STYLE_URL = 'http://20.168.100.124:8519';
window.BMAP_AUTHENTIC_KEY='183b897e3bcb4129bbc98ce8dcafcb40';
//window.BMAP_AUTHENTIC_KEY='e8604904579846d1835212af999c3ecd';
window.BMAPGL_PATH = '/dugis-demo-3d';

window.BMAPGL_84 = true;
// 84使用旧的瓦片数据需要开启此开关
window.BMAPGL_TILE_ATTACH = true;

export default (function(){ 
	document.write('<link rel="stylesheet" type="text/css" href="' + window.BMAPGL_STATIC_URL + window.BMAPGL_PATH + '/api/bmap.css"/></head>'); 
	document.write('<script type="text/javascript" src="' + window.BMAPGL_STATIC_URL + window.BMAPGL_PATH + '/api/api.js"></script>');
})()
