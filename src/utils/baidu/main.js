// GL版命名空间为BMapGL
// 按住鼠标右键，修改倾斜角和角度

$(function(){
	console.log(AUTHENTIC_TOKEN_DuGIS)
})


//今日有效警情信息
var view_jqxx;
var clusterLayer_jqxx;
var datas_jqxx = [];
function showJqxx(){
	var status = $("input[id='jqxx']").is(':checked') == true ? 1 : 0;
	if(status == 1) {
		$.getJSON(ctx + "mapIndex/findJqxx", {}, function(data){
			//console.log(data);
			for(var i = 0; i < data.length; i++){
				var item = data[i];
				datas_jqxx.push({
	                geometry: {
	                    type: 'Point',
	                    coordinates: [item.dtppx, item.dtppy],
	                    data: item
	                },
	                properties: {
	                    icon: [
	                        ctx + 'images/map/new/110报警.png'
	                    ][data.length % 1], 
	                    	width: 59, 
	                    	height: 62
	                }
	            });
			}
			view_jqxx = new mapvgl.View({ map: map });
	        clusterLayer_jqxx = new mapvgl.ClusterLayer({
	            minSize: 30, // 聚合点显示的最小直径
	            maxSize: 50, // 聚合点显示的最大直径
	            clusterRadius: 150, // 聚合范围半径
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
	                    //console.log(e.dataItem);
	                    var label = new BMapGL.Label('', {
	                        position: new BMapGL.Point(e.dataItem.geometry.coordinates[0], e.dataItem.geometry.coordinates[1]), // 指定文本标注所在的地理位置
	                        offset: new BMapGL.Size(0, 0), // 设置文本偏移量,
	                        zIndex: 9999,
	                    });
	                    label.setStyle({ display: '', border: 'none' });
	                    var content = '<div id="containerOne">'
                            +'<div class="posInfo" style="display: inline;">'
                            +'<div class="titleBox" style="display: inline; width: 300px;">'
                            +'<span class="postext">详细信息</span></div>'
                            +'<img src="/qwxx/ajax/libs/baidu/images/cancel.png" alt="" class="close1 close" style="display: inline; opacity: 1;">'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">数据来源：</span>'
                            +'<span class="Info">承德市公安局接处警系统</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">接警编号：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.jdbh+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">接警单位：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.mc+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">经度：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.dtppx+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">纬度：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.dtppy+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">报警人：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.bjrxm+'-'+e.dataItem.geometry.data.bjrxb+'（'+e.dataItem.geometry.data.bjrdh+'）</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">发案时间：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.fasj+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">接警时间：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.jjsj+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">警情类别：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.jqlbmc+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">发案地点：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.fadd+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">警情概要：</span>'
                            +'<span class="Info" style="word-break: break-all; white-space: normal;">'+e.dataItem.geometry.data.jqgy+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<span class="descInfo">报警类型：</span>'
                            +'<span class="Info">'+e.dataItem.geometry.data.bjlx+'</span>'
                            +'</div>'
                            +'<div class="posItem">'
                            +'<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="openPOI(\''+e.dataItem.geometry.coordinates[1]+'\', \''+e.dataItem.geometry.coordinates[0]+'\')"><i class="fa fa-map-pin"></i> 周边 POI</a>'
                            +'</div>'
                            +'</div>';
	                    label.setContent(content);
	                    map.addOverlay(label);
	                 	// 关闭lable
	                    $('.close').on('click', () => {
	                        label.setStyle({ display: 'none' });
	                    });
	                    map.addEventListener('click', function(){
	                    	label.setStyle({ display: 'none' });
	                    });
	                    
	                }
	            }
	        });
	        view_jqxx.addLayer(clusterLayer_jqxx);
	        clusterLayer_jqxx.setData(datas_jqxx);
		});
	}else{
		clusterLayer_jqxx.clear();
		datas_jqxx.length = 0;
	}
}

var type = 1;
var myChart;
var option;
document.addEventListener('DOMContentLoaded', function() {
  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(document.getElementById('pieCharts'));
  option = {
    color: [
      "#00C2FF",
      "#0085FF",
      "#FFFF00",
      "#00CC03",
      "#00EAFF",
      "#FF9900",
      "#7B3DD1",
      "#0055FF",
      "#CC0000",
    ],
    title: {
      show: true,
      text: '警情统计',
      itemGap: 0, //主副标题之间的距离
      x: '14%', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
      y: 'center',
      textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
        fontSize: 18,
        color: '#17A6FA'
      },
    },
    tooltip: {
      show: true,
      trigger: "item",
      formatter: "{b}{c} ({d}%)",
      backgroundColor: "rgba(0, 21, 43)",
      borderColor: "rgba(0, 104, 106)",
      textStyle: {
        color: '#fff',
        fontSize: 20,
      },
    },
    legend: {
      orient: "vertical", //设置图例的方向
      left: "45%",
      top: "center",
      itemHeight: 10,
      itemWidth: 10,
      itemGap: 10, //设置图例的间距
      icon: "rect", // 图例项的icon,类型包括 circle(圆形),rect(正方形),
      //roundRect(圆角正方形),triangle(三角形),diamond(菱形),
      //pin(大头针行),arrow(箭头形),none(无图例项的icon)
      formatter: (e) => {
        let ratio = 0;
        let value = 0;
        console.log(e)
        //  通过e的内容,获取后台的百分比和车数
        if (_data.length > 0) {
        	_data.forEach((item) => {
            if (e == item.name) {
              ratio = ((item.value * 100) / 3799).toFixed(0);
              value = item.value;
            }
          });
        }
        let arr = [
          "{a|" + e + "}",
          // "{b|" + ratio + "%}",
          "{c|" + value + "}" + "\n{d|}",
        ];
        // //此处的a,b,c是textStyle里面配置的a,b,c,d可以自定义
        return arr.join("");
      },
      textStyle: {
        //图例文字的样式
        rich: {
          d: {
            width: "100%",
            borderWidth: 0.5,
            height: 0,
            backgroundColor: "1",
          },
          a: {
            width: 60,
            align: "left",
            fontSize: 12,
            color: "1",
          },
          b: {
            width: 40,
            align: "left",
            fontSize: 12,
            color: "1",
          },
          c: {
            width: 30,
            align: "left",
            fontSize: 12,
            color: "1",
          },
        },
      },
    },
    series: [
     // 最内刻度线
    {
      type: "gauge",
      radius: "70%",
      center: ["23%", "48%"],
      clockwise: true,
      startAngle: "90",
      endAngle: "-269.9999",
      splitNumber: 50, //线的条数
      pointer: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      splitLine: {
        show: true,
        length: 5,
        lineStyle: {
          color: "rgba(52, 185, 232, .5)",
          width: 1,
        },
      },
      axisLabel: {
        show: false,
      },
    },
      // 数据
      {
        type: "pie",
        center: ["23%", "48%"],
        radius: ["52%", "72%"],
        label: {
          show: false,
        },
        data: [],
      },
    ],
  }
  var _data;
  $.getJSON(ctx + "mapIndex/jqTj1", {type:1}, function(data){
	    _data = data;
    	option.series[1].data = data;
    	myChart.setOption(option);
        $(window).resize(myChart.resize);
  });
  
  myChart.on("click", function(params){
    	if(params.data.bh.length == 2) {
    		$.getJSON(ctx + "mapIndex/jqTj2", {bh:params.data.bh, type:type}, function(data){
    			_data = data;
    			option.series[1].data = data;
    			myChart.setOption(option);
    		    $(window).resize(myChart.resize);
    		});
    	}else{
    		if(params.data.bh.substring(5, 6) == '00'){
    			$.getJSON(ctx + "mapIndex/jqTj3", {bh:params.data.bh, type:type}, function(data){
    				_data = data;
    				option.series[1].data = data;
    				myChart.setOption(option);
    			    $(window).resize(myChart.resize);
    			});
    		}else{
    			$.getJSON(ctx + "mapIndex/jqTj1", {type:type}, function(data){
    				_data = data;
    				option.series[1].data = data;
    				myChart.setOption(option);
    			    $(window).resize(myChart.resize);
    			});
    		}
    	}
    });
})


function changeJqtj(ind) {
	type = ind;
	if(ind == 1){
		$("#t1").css("color", "#3385ff");
		$("#t1").css("fontWeight", "bold");
		$("#t2").css("fontWeight", "normal");
		$("#t3").css("fontWeight", "normal");
		$("#t2").css("color", "#333");
		$("#t3").css("color", "#333");
	}else if(ind == 2){
		$("#t2").css("color", "#3385ff");
		$("#t2").css("fontWeight", "bold");
		$("#t1").css("fontWeight", "normal");
		$("#t3").css("fontWeight", "normal");
		$("#t1").css("color", "#333");
		$("#t3").css("color", "#333");
	}else if(ind == 3){
		$("#t3").css("color", "#3385ff");
		$("#t3").css("fontWeight", "bold");
		$("#t2").css("fontWeight", "normal");
		$("#t1").css("fontWeight", "normal");
		$("#t1").css("color", "#333");
		$("#t2").css("color", "#333");
	}
	$.getJSON(ctx + "mapIndex/jqTj1", {type:type}, function(data){
		_data = data;
		option.series[1].data = data;
		myChart.setOption(option);
	    $(window).resize(myChart.resize);
	});
}

function changeTj(ind) {
	if(ind == 1){
		$("#x1").css("color", "#3385ff");
		$("#x1").css("fontWeight", "bold");
		$("#x2").css("fontWeight", "normal");
		$("#x2").css("color", "#333");
		$("#eq1").show();
		$("#eq2").hide();
	}else{
		$("#x2").css("color", "#3385ff");
		$("#x2").css("fontWeight", "bold");
		$("#x1").css("fontWeight", "normal");
		$("#x1").css("color", "#333");
		$("#eq2").show();
		$("#eq1").hide();
	}
}

