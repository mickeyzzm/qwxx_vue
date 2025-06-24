/**
 * 巡控网格地图操作
 */

//获取所有巡控网格
export function getAllXkGrid(treeData){
    let data=[];
    let pcsData=[];//派出所网格
    $.ajax({
        url:'/qwxx/mapIndex/grid/findXkGrid',
        type: 'get',
        success: function (response) {
            // console.log("巡控网格",response);
           for(var i=0;i<response.length;i++){
            var coordinates = JSON.parse(response[i].coordinates);
           
					var centX = response[i].x;
					var centY = response[i].y;
					// var name = response[i].name;
					var polygonData = [];
                    var polygonData_pcs=[];
                    if(response[i].lx==='派出所辖区网格'||response[i].lx==='警用网格'){
                        for(var j = 0; j < coordinates.length; j++) {
                            var cds=coordinates[j];
                            // console.log("解析网格",cds)
                            for(var l=0;l<cds.length;l++){
                                var cdsc=cds[l];
                                for(var t=0;t<cdsc.length;t++){
                                    var x = cdsc[t][0];
                                    var y = cdsc[t][1];
                                    let point = new BMapGL.Point(x, y);
                                    polygonData_pcs.push(point);
                                }
                               
                            }
                           
                        }
                        var color = rdmRgbColor();
                        pcsData.push({id:response[i].id,label:response[i].name,type:'MultiPolygon',polygon:polygonData_pcs,centX:centX,centY:centY,color:color});
                    }else{
                        for(var j = 0; j < coordinates.length; j++) {
                            var x = coordinates[j][0];
                            var y = coordinates[j][1];
                            let point = new BMapGL.Point(x, y);
                            polygonData.push(point);
                        }
                        var color = rdmRgbColor();
                        data.push({id:response[i].id,label:response[i].name,type:'MultiPolygon',polygon:polygonData,centX:centX,centY:centY,color:color});
                    }
					
                
           }
           for(var i=0;i<treeData.length;i++){
              if(treeData[i].id==='xkwg'){
                treeData[i].children=[];
                treeData[i].children=[...data];
              }else if(treeData[i].id==='qwwg'){
                treeData[i].children=[];
                treeData[i].children=[...pcsData];
              }
           }
        } 
    })
}

export function showXkWg(xkOldNode,xkOldLabel,nodes,map){
    // console.log("老节点",xkOldNode);
    console.log(nodes, 'nodes js 巡控网格')
   if(xkOldNode.length>0){
        for(var i=0;i<xkOldNode.length;i++){
            map.removeOverlay(xkOldNode[i]);
            map.removeOverlay(xkOldLabel[i]);
        }
   }
    if(nodes.length>0){
            // xkOldNode=[];
            // xkOldLabel=[];
            for(var i=0;i<nodes.length;i++){
                if(nodes[i].type){
                    var centX=nodes[i].centX;
                    var centY=nodes[i].centY;
                    var polygonData=nodes[i].polygon;
                    var name=nodes[i].label;
                    var color=nodes[i].color;
                    var polygon = new BMapGL.Polygon(polygonData, {
                        strokeColor: "#ccc",
                        fillColor: color,
                        strokeWeight: 2,
                        strokeOpacity: 0.5,
                    }); //创建多边形
                    map.addOverlay(polygon); //增加多边形
                    //添加到MAP
                    var point = new BMapGL.Point(centX, centY);
                    var opts = {
                        position: point, // 指定文本标注所在的地理位置
                        offset: new BMapGL.Size(30, -30), // 设置文本偏移量
                    };
                    var label = new BMapGL.Label(name, opts); // 创建文本标注对象
                    label.setStyle({
                        backgroundColor: color,
                        boxShadow: "0 2px 8px 0 rgba(7,12,20,0.12)",
                        border: "none",
                        borderRadius: "4px",
                        color: "#fff",
                        fontSize: "12px",
                        height: "28px",
                        textAlign: "center",
                        lineHeight: "26px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                    });
                    map.addOverlay(label);
                    xkOldNode.push(polygon);
                    xkOldLabel.push(label);
                }
        }
    }
}

//获取所有的封控点位
export function getAllFkGrid(treeData){
    let data=[];
    $.ajax({
        url:'/qwxx/mapIndex/grid/findGrid',
        data:{
            lx: '必到点位',
            type: 'Point'
        },
        type: 'get',
        success: function (response) {
           for(var i=0;i<response.length;i++){
                var centX = response[i].x;
                var centY = response[i].y;
                var id = response[i].name;
                var name = response[i].name;
                var color = rdmRgbColor();
                data.push({id:id, label:name, type:'Point', centX:centX, centY:centY, color:color})
           }
           for(var i=0;i<treeData.length;i++){
                if(treeData[i].id==='fkdw'){
                    treeData[i].children=[];
                    treeData[i].children=[...data];
                    break;
                }
            }
        }
    })
}

//获取所有的电子围栏
export function getAllDzwlGrid(treeData){
    let data=[];
    $.ajax({
        url:'/qwxx/mapIndex/jwzb/findDzwl',
        data:{},
        type: 'get',
        success: function (response) {
           for(var i=0;i<response.length;i++){
                var centX = response[i].x;
                var centY = response[i].y;
                var id = response[i].mc;
                var name = response[i].mc;
                var bq = response[i].bq;
                var dz = response[i].dz;
                var mc = response[i].mc;
                var qx = response[i].qx;
                var color = rdmRgbColor();
                data.push({id:id, label:name, type:'Point', centX:centX, centY:centY, color:color, bq:bq, dz:dz, mc:mc, qx:qx})
           }
           for(var i=0;i<treeData.length;i++){
                if(treeData[i].id==='dzwl'){
                    treeData[i].children=[];
                    treeData[i].children=[...data];
                    break;
                }
            }
        }
    })
}

//获取所有的重点路线
export function getAllZDGrid(treeData){
    let data=[];
    $.ajax({
        url:'/qwxx/mapIndex/grid/findGrid',
        data:{
            lx: '巡控路线',
            type: 'MultiLineString'
        },
        type: 'get',
        success: function (response) {
           for(var i=0;i<response.length;i++){
                var coordinates = response[i].coordinates ? JSON.parse(response[i].coordinates) : [];
                var centX = response[i].x;
                var centY = response[i].y;
                // var name = response[i].name;
                var polygonData = [];
                for(var j = 0; j < coordinates.length; j++) {
                    var x = coordinates[j][0];
                    var y = coordinates[j][1];
                    let point = new BMapGL.Point(x, y);
                    polygonData.push(point);
				}
                var color = rdmRgbColor();
                data.push({id:response[i].id,label:response[i].name,type:'MultiLineString',polygon:polygonData,centX:centX,centY:centY,color:color});
           }
           for(var i=0;i<treeData.length;i++){
              if(treeData[i].id==='zdlx'){
                treeData[i].children=[];
                treeData[i].children=[...data];
                break;
              }
           }
        }
    })
}
/**
 * 勤务网格
 */
export function getAllQwwg(treeData){
    let qwwgIndex=0;
    let data=[];
    $.ajax({
        url:'/qwxx/mapIndex/jwwg/getQwwg',
        // data:{
        //     lx: '巡控路线',
        //     type: 'MultiLineString'
        // },
        type: 'get',
        success: function (response) {
            var dataList=response.data;
            console.log("勤务网格获取数据",dataList.length);
           for(var i=0;i<dataList.length;i++){
                if(i>95){
                    break;
                }
                var coordinates = dataList[i].coordinates //? JSON.parse(dataList[i].coordinates) : [];
                // var centX = response[i].x;
                // var centY = response[i].y;
                // var name = response[i].name;
                var polygonData = [];
                for(var j = 0; j < coordinates.length; j++) {
                    var x = coordinates[j][0];
                    var y = coordinates[j][1];
                    let point = new BMapGL.Point(x, y);
                    polygonData.push(point);
				}
                var color = rdmRgbColor();
                data.push({id:dataList[i].id,label:dataList[i].name,type:'MultiPolygon',polygon:polygonData,color:color});
           }
           for(var i=0;i<treeData.length;i++){
            if(treeData[i].id==='qwwg'){
                qwwgIndex=i;
                treeData[i].children=[];
                treeData[i].children=data;
            }
         }
           console.log("勤务网格children数据",treeData[qwwgIndex].children)
        //    console.log("勤务网格数据生成树形数据");
          
        }
    })
}
export function rdmRgbColor() {
    //随机生成RGB颜色
    const arr = [];
    for (let i = 0; i < 3; i++) {
      // 暖色
      arr.push(Math.floor(Math.random() * 128 + 64));
      // 亮色
      //arr.push(Math.floor(Math.random() * 128 + 128));
    }
    const [r, g, b] = arr;
    const color = `#${
      r.toString(16).length > 1 ? r.toString(16) : "0" + r.toString(16)
    }${g.toString(16).length > 1 ? g.toString(16) : "0" + g.toString(16)}${
      b.toString(16).length > 1 ? b.toString(16) : "0" + b.toString(16)
    }`;
    return color;
  }
  