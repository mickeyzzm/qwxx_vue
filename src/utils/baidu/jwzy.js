export function getKyjl(){
    let result=0;
    $.ajax({
        url:"/qwxx/screenApi/getKyjl",
        type: 'get',
        async: false,
        success: function (response) {
            // console.log("可用警力",response);
            result=response.data.kyjl
        }
    });
    return result;
}
export function getZbjl(){
    let result=0;
    $.ajax({
        url:"/qwxx/screenApi/getZbjl",
        type: 'get',
        async: false,
        success: function (response) {
            // console.log("值班警力",response);
            result=response.data.zbjl
        }
    });
    return result;
}
export function getRwjl(){
    let result=0;
    $.ajax({
        url:"/qwxx/screenApi/getRwjl",
        type: 'get',
        async: false,
        success: function (response) {
            // console.log("任务警力",response);
            result=response.data.rwjl
        }
    });
    return result;
}
export function getPdt(){
    let result=0;
    $.ajax({
        url:"/qwxx/mapIndex/jwzb/findPdt",
        type: 'get',
        async: false,
        success: function (response) {
            // console.log("pdt",response);
            result=response.length
        }
    });
    return result;
}
export function getZfjly(){
    let result=0;
    $.ajax({
        url:"/qwxx/mapIndex/jwzb/findZfjly",
        type: 'get',
        async: false,
        success: function (response) {
            // console.log("执法记录仪",response);
            result=response.length
        }
    });
    return result;
}
export function getYdjwzd(){
    let result=0;
    $.ajax({
        url:"/qwxx/mapIndex/jwzb/findJwzd",
        type: 'get',
        async: false,
        success: function (response) {
            // console.log("移动警务终端",response);
            result=response.length
        }
    });
    return result;
}
export function getPTU(ptuList){
    let result=0;
    $.ajax({
        url:"/qwxx/mapIndex/jwzb/findPTU",
        type: 'get',
        async: false,
        success: function (response) {
            console.log("获取的ptu",response);
            ptuList.length=0;
           for(var i=0;i<response.length;i++){
                ptuList.push(response[i]);
           }
        }
    });
}
export function showJqMap(map,x,y){
    var point = new BMapGL.Point(x, y);
    map.centerAndZoom(point, 10);
    // 创建点标记
    var marker = new BMapGL.Marker(point, {
        icon: new BMapGL.Icon('/qwxx/images/map/new/110报警.png', new BMapGL.Size(32, 32), {
            anchor: new BMapGL.Size(16, 32),
            imageSize: new BMapGL.Size(32, 32),
        }),
    });
    map.addOverlay(marker);
}
export function showPTUMap(map,ptuList){
    let data=ptuList;
    let datas_ptu=[];
    for(var i = 0; i < data.length; i++){
        var item = data[i];
        var deptname = item.deptname;
        datas_ptu.push({
            geometry: {
                type: 'Point',
                coordinates: [item.x, item.y],
                data: item
            },
            properties: {
                icon: [
                    '/qwxx/images/map/'+deptname+'.png'
                ][data.length % 1], width: 87, height: 94
            }
        });
    }
    let view_ptu = new mapvgl.View({ map: map });
    let clusterLayer_ptu = new mapvgl.ClusterLayer({
        minSize: 70, // 聚合点显示的最小直径
        maxSize: 100, // 聚合点显示的最大直径
        clusterRadius: 200, // 聚合范围半径
        //gradient: { 0: 'blue', 0.5: 'green', 1.0: 'red' }, // 聚合点颜色梯度
        maxZoom: 15, // 聚合的最大级别，当地图放大级别高于此值将不再聚合
        minZoom: 5, // 聚合的最小级别，当地图放大级别低于此值将不再聚合
        // 是否显示文字
        showText: true,
        // 开始聚合的最少点数，点数多于此值才会被聚合
        minPoints: 5,
        // 设置文字样式
        textOptions: {
            fontSize: 12,
            color: 'white'
        },
        enablePicked: true,
        onClick(e) {
            if (e.dataItem) {
                var label = new BMapGL.Label('', {
                    position: new BMapGL.Point(e.dataItem.geometry.coordinates[0], e.dataItem.geometry.coordinates[1]), // 指定文本标注所在的地理位置
                    offset: new BMapGL.Size(0, 0), // 设置文本偏移量,
                    zIndex: 9999,
                });
                label.setStyle({ display: '', border: 'none',background: 'rgba(0, 170, 255, 0.8)' });
                var content = '<div id="containerOneDialog">'
                    +'<div class="posInfo" style="display: inline;">'
                    +'<div class="titleBox" style="display: inline; width: 300px;">'
                    +'<span class="postext">详细信息</span></div>'
                    +'<span style="display: inline; opacity: 1;color:#fff;float:right;font-size:14px;font-weight:bold;">X</span>'
                    +'</div>'
                    +'<div class="posItem">'
                    +'<span class="descInfo"><i class="fa fa-database"></i> 数据来源：</span>'
                    +'<span class="Info">PTU</span>'
                    +'</div>'
                    +'<div class="posItem">'
                    +'<span class="descInfo"><i class="fa fa-car"></i> 警车号码：</span>'
                    +'<span class="Info">'+e.dataItem.geometry.data.hphm+'（'+e.dataItem.geometry.data.time+'）</span>'
                    +'</div>'
                    +'<div class="posItem">'
                    +'<span class="descInfo"><i class="fa fa-tty"></i> 5G终端：</span>'
                    +'<span class="Info">'+e.dataItem.geometry.data.zfy+'</span>'
                    +'</div>'
                    +'<div class="posItem">'
                    +'<span class="descInfo"><i class="fa fa-phone"></i> PTD对讲：</span>'
                    +'<span class="Info">'+e.dataItem.geometry.data.pdt+'</span>'
                    +'</div>'
                    +'<div class="posItem">'
                    +'<span class="descInfo"><i class="fa fa-building-o"></i> 单位：</span>'
                    +'<span class="Info">'+e.dataItem.geometry.data.deptname+'</span>'
                    +'</div>'
                    +'<div class="posItem">'
                    +'<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="openPOI(\''+e.dataItem.geometry.coordinates[1]+'\', \''+e.dataItem.geometry.coordinates[0]+'\')"><i class="fa fa-map-pin"></i> 周边 POI</a>'
                    +'<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="openVideo(\''+e.dataItem.geometry.coordinates[1]+'\', \''+e.dataItem.geometry.coordinates[0]+'\')"><i class="fa fa-video-camera"></i> 周边监控</a>'
                    +'<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="talk(\''+e.dataItem.geometry.data.pdt+'\');"><i class="fa fa-bell"></i> PDT对讲</a>'
                    +'<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="open5G(\''+e.dataItem.geometry.data.zfy+'\')"><i class="fa fa-video-camera"></i> 现场直播</a>'
                    +'<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="call(\''+e.dataItem.geometry.data.zfy+'\')"><i class="fa fa-phone"></i> 现场通话</a>'
                    +'<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="openGJ(\'pdt\', \''+e.dataItem.geometry.data.pdt+'\')"><i class="fa fa-map"></i> 轨迹播放</a>'
                    +'</div>'
                    +'</div>';
                label.setContent(content);
                map.addOverlay(label);
                 // 关闭lable
                $('.close').on('click', () => {
                    label.setStyle({ display: 'none' });
                });
                map.addEventListener('click', function(){
//	                    	label.setStyle({ display: 'none' });
                    map.removeOverlay(label);
                });
            }
        }
    });
    view_ptu.addLayer(clusterLayer_ptu);
    clusterLayer_ptu.setData(datas_ptu);
}