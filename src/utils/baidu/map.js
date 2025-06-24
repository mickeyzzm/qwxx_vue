/* eslint-disable */
(function () {
    var view;
    var zoom = 10;
    var adcode = 0; // 默认全国
    var cityName = '';
    var poiMarkers = [];
    var searchMode = 1;
    //实时路况
    var tafficOpen = false;

    var poiResults = [];
    var poiSearchInputDom = $('#sole-input');
    var poiResultListDom = $('#poi-results-list');
    var poiResultContainerDom = $('#poi-results-container');
    //poiResultContainerDom.css({ maxHeight: window.innerHeight - 70 });

    var hasShowStartPoint = false;
    var hasShowEndPoint = false;
    var startMarker = null;
    var endMarker = null;
    var routeMode = 'car';
    var waypoints = [];
    var line = null;
    var routeResultContainerDom = $('#route-results-container');
    var routeResultListDom = $('#route-results-list');
    var routeSteps = [];
    //routeResultContainerDom.css({ maxHeight: window.innerHeight - 163 });
    var aoiBoundaryMap = null; // aoi查询图层

    var polygons = []; // 行政区划面
    var currentPage = 1;
    var pageSize = 10;
    var total = 0;
    var pageInstance = null;
    // 初始化Label
    var label = new BMapGL.Label('', {
        position: new BMapGL.Point(defaultCenterPoint[0], defaultCenterPoint[1]), // 指定文本标注所在的地理位置
        offset: new BMapGL.Size(0, 32), // 设置文本偏移量,
        zIndex: 9999
    });
    // 自定义文本标注样式
    label.setStyle({
        border: 'none',
        background: 'transparent',
        transform: 'translate(-50%, -100%)',
        display: 'none'
    });

    // 初始化Mark 首次map 打点
    var myIconOne = new BMapGL.Icon('/qwxx/img/marker_blue.png', new BMapGL.Size(32, 32), {
        anchor: new BMapGL.Size(16, 32),
        imageSize: new BMapGL.Size(32, 32)
    });
    var markerOne = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915), {
        icon: myIconOne
    });

    function initMapClick(e) {
        if (searchMode === 1) {
            /*var curPX = map.pointToPixel(new BMapGL.Point(e.latlng.lng, e.latlng.lat));
            label.setStyle({
                display: 'none',
            });
            rgcPoint(e.latlng, function () {
                var labelWidth = $('#containerOne').width();
                if ((curPX.x + labelWidth / 2) > window.innerWidth) {
                    map.panBy(-labelWidth / 2, 0);
                } else if (curPX.x < labelWidth / 2) {
                    console.log(labelWidth);
                    map.panBy(labelWidth / 2, 0);
                } else if (curPX.y < 100) {
                    map.panBy(0, 100);
                }
            });*/
            //markerOne.setPosition(new BMapGL.Point(e.latlng.lng, e.latlng.lat));
            //map.addOverlay(markerOne);
            return;
        }
        else if (searchMode === 2) {
            if (!hasShowStartPoint) {
                setStartPointPosition(e.latlng);
                return;
            }

            if (!hasShowEndPoint) {
                setEndPointPosition(e.latlng);
                return;
            }
        }
    }
    
    // 初始化地图
    function initMap() {
    	map = new BMapGL.Map('allmap');
    	var point = new BMapGL.Point(defaultCenterPoint[0], defaultCenterPoint[1]);
    	map.centerAndZoom(point, 11);
	    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
	    //map.setDisplayOptions({ poiIcon: false });
//	    map.setHeading(64.5);
//	    map.setTilt(73);
//	    map.setOptions(darkStyle);
        var navigation = new BMapGL.NavigationControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT,
            type: BMAP_NAVIGATION_CONTROL_SMALL,
            offset: new BMapGL.Size(-5, 16),
        });
        map.addControl(navigation);
        
        let cityName = '河北省';
        const bdary = new BMapGL.Boundary();
        console.log(bdary)
        
        
        /*//城市列表插件
        var size = new BMapGL.Size(316, 16);
        map.addControl(
            new BMapGL.CityListControl({
                anchor: BMAP_ANCHOR_TOP_LEFT,
                offset: size
            })
        );*/
        view = new mapvgl.View({ map: map });
        aoiBoundaryMap = new mapvgl.PolygonLayer({
            lineColor: 'rgba(36,104,242,1)',
            lineWidth: 2,
            fillColor: 'rgba(36,104,242,0.10)',
            dashArray: [10, 5],
            data: [],
        });
        view.addLayer(aoiBoundaryMap);
        map.addOverlay(label);
        map.addEventListener('click', initMapClick);
        
        // 添加比例尺控件
	    var scaleCtrl = new BMapGL.ScaleControl({
	        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
	        offset: new BMapGL.Size(50, 16),
	    });
	    map.addControl(scaleCtrl);
	 	// 添加3D控件
	    var navi3DCtrl = new BMapGL.NavigationControl3D({
	        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
	        offset: new BMapGL.Size(380, 138),
	    }); 
	    map.addControl(navi3DCtrl);
    }

    function generatePoiListItem(poi, index) {
        return [
            '<li class="result-item poi-result-item">',
            '<div class="poi-result-item-right">',
            // poi.name && `<div class='poiName' title=${poi.name}>${index + 1}.${poi.name}</div>`,
            poi.name && '<div class="poiName" title="' + poi.name + '">' + (index + 1) + '.' + poi.name + '</div>',
            poi.address && '<div>' + poi.address + '</div>',
            poi.telphone && '<div>' + poi.telphone + '</div>',
            '</div>',
            '</li>'
        ].join(' ');
    }

    function clearPoiData() {
        label.setStyle({
            display: 'none'
        });
        //map.addEventListener('click', initMapClick);
        // hideRgcContainer();
        poiSearchInputDom.val('');
        poiResultContainerDom.hide();
        poiResultListDom.empty();
        $.each(poiMarkers, function (i, marker) {
            map.removeOverlay(marker);
        });
        poiMarkers = [];
        $.each(polygons, function (i, polygon) {
            map.removeOverlay(polygon);
        });
        polygons = [];
        aoiBoundaryMap.setData([]);
    }

    function closePoiSearch() {
        clearPoiData();
        $('#sole-searchbox-content').hide();
    }

    $('#clear-search-poi').on('click', function () {
        // 关闭页面上的label
        label.setStyle({
            display: 'none'
        });
        map.removeOverlay(markerOne);
        //map.addEventListener('click', initMapClick);

        $(this).hide();
        resetPage();
        clearPoiData();
        searchMode = 1;
    });
    // 关闭 设置起点 结束点
    function closeRoute() {
        $('#route-searchbox-content').hide();
        routeResultContainerDom.hide();

        map.removeOverlay(line);
        map.removeOverlay(startMarker);
        map.removeOverlay(endMarker);
        hasShowStartPoint = false;
        hasShowEndPoint = false;
        line = [];

        $('#route-input-start').val('');
        $('#route-input-end').val('');
    }

    function openPoiSearch() {
        poiSearchInputDom.val('');
        $('#sole-searchbox-content').show();
    }

    function openRoute() {
        $('#route-searchbox-content').show();
    }

    function showPois(pois) {
        var points = [];

        poiResults = pois;
        poiResultContainerDom.show();
        map.removeEventListener('click', initMapClick);
        $.each(pois, function (i, poi) {
            var point = new BMapGL.Point(poi.location.x, poi.location.y);
            var icon = new BMapGL.Icon('/qwxx/ajax/libs/baidu/images/marker' + (i + 1) + '.png', new BMapGL.Size(32, 32), {
                anchor: new BMapGL.Size(16, 32),
                imageSize: new BMapGL.Size(32, 32)
            });
            var marker = new BMapGL.Marker(point, {
                icon: icon
            });

            map.addOverlay(marker);
            poiMarkers.push(marker);
            points.push(point);

            poiResultListDom.append(generatePoiListItem(poi, i));

            marker.addEventListener('mouseover', (e) => {
                map.removeOverlay(markerOne);
                map.removeEventListener('click', initMapClick);
                labelContent(
                    (pixel = point),
                    (postext = poi.name),
                    (CityName = poi.address),
                    (style = { Show: 'flex', hidden: 'none' })
                );
                var icon = new BMapGL.Icon('/qwxx/ajax/libs/baidu/images/marker' + (i + 1) + '_hover.png', new BMapGL.Size(32, 32), {
                    anchor: new BMapGL.Size(16, 32),
                    imageSize: new BMapGL.Size(32, 32)
                });
                marker && marker.setIcon(icon);
                $('.poi-result-item').eq(i).css({ 'background-color': '#e6f0ff' }).siblings().css({ 'background-color': '#fff' });
            });
            marker.addEventListener('mouseout', (e) => {
                var icon = new BMapGL.Icon('/qwxx/ajax/libs/baidu/images/marker' + (i + 1) + '.png', new BMapGL.Size(32, 32), {
                    anchor: new BMapGL.Size(16, 32),
                    imageSize: new BMapGL.Size(32, 32)
                });
                marker && marker.setIcon(icon);
                label.setOffset(new BMapGL.Size(0, -36)); // 设置文本偏移量,
                $('.poi-result-item').eq(i).css({ 'background-color': '#fff' });
            });
            marker.addEventListener('click', (e) => {
                var icon = new BMapGL.Icon('/qwxx/ajax/libs/baidu/images/marker' + (i + 1) + '_blue.png', new BMapGL.Size(48, 48), {
                    anchor: new BMapGL.Size(24, 48),
                    imageSize: new BMapGL.Size(48, 48)
                });
                marker && marker.setIcon(icon);
                label.setOffset(new BMapGL.Size(0, -52)); // 设置文本偏移量,
            });
        });
        if (points.length === 1) {
            map.setCenter(points[0]);
        }
        else {
            map.setViewport(points);
        }
        if (pois.length < 10) {
            poiResultListDom.children(':last-child').css({ borderBottom: 'none' });
        }
    }

    function showBoundary(boundaries) {
        var count = boundaries.length; // 行政区域的点有多少个
        if (count === 0) {
            return;
        }

        var pointArray = [];
        for (var i = 0; i < count; i++) {
            var ply = new BMapGL.Polygon(boundaries[i], {
                strokeWeight: 2,
                strokeColor: 'rgba(36,104,242,1)',
                fillColor: 'rgba(36,104,242,0.10)',
            }); // 建立多边形覆盖物
            map.addOverlay(ply); // 添加覆盖物
            var path = ply.getPath();
            pointArray = pointArray.concat(path);
            polygons.push(ply);
        }
        map.setViewport(pointArray); // 调整视野
    }
    // 页码控制
    // function initSoleSearchPagination() {
    //     pageInstance = $('#sole-search-pagination-container').pagination({
    //         dataSource: Array(total),
    //         pageNumber: currentPage,
    //         totalNumber: total,
    //         hideWhenLessThanOnePage: true,
    //         prevText: '<',
    //         nextText: '>',
    //         afterPageOnClick: onSoleSearchPageChange,
    //         afterPreviousOnClick: onSoleSearchPageChange,
    //         afterNextOnClick: onSoleSearchPageChange
    //     });
    //     pageInstance.show();
    // }

    // function onSoleSearchPageChange(_, page) {
    //     currentPage = page;
    //     searchPois($('#sole-input').val());
    // }

    // function resetPage() {
    //     currentPage = 1;
    //     pageSize = 10;
    //     total = 0;
    //     pageInstance && pageInstance.hide();
    //     pageInstance = null;
    // }

    // function searchPois(keyword) {
    //     clearPoiData();
    //     if (!keyword) {
    //         return;
    //     }

    //     $('#btn-open-route').addClass('loading');
    //     poiSearchInputDom.val(keyword);
    //     $.ajax({
    //         url: webApiBasePath + '/search/v1/search',
    //         headers: {
    //             Authorization: AUTHENTIC_TOKEN_DuGIS
    //         },
    //         data: {
    //             pageNum: currentPage ? currentPage : 1,
    //             pageSize: pageSize ? pageSize : 10,
    //             q: keyword,
    //             adcode: adcode,
    //             outputCrs: outputCrs,
    //         },
    //         dataType: 'json',
    //         success: function (response) {
    //             $('#btn-open-route').removeClass('loading');
    //             if (response.status === 0) {
    //                 // 优先判断是否行政区划
    //                 if (response.result.isBoundary) {
    //                     showBoundary(response.result.boundaryResultVO.boundaries);
    //                 }
    //                 else {
    //                     total = response.result.total;
    //                     initSoleSearchPagination();
    //                     total > 0 && showPois(response.result.data);
    //                 }
    //             }
    //             else {
    //                 parent.top.addToast('error', response.message);
    //             }
    //         }
    //     });
    // }

    function initSoleSearchPagination () {
        $('#pre-page').attr('disabled', true);
        $('#pre-page').on('click', function () {
            onSoleSearchPageChange(currentPage - 1);
            $('#next-page').attr('disabled', false);
        });
        $('#next-page').on('click', function () {
            onSoleSearchPageChange(currentPage + 1);
        });
    }

    function onSoleSearchPageChange (page) {
        currentPage = page;
        if (currentPage === 1) {
            $('#pre-page').attr('disabled', true);
        } else {
            $('#pre-page').attr('disabled', false);
        }
        searchPois($('#sole-input').val());
    }

    function resetPage () {
        currentPage = 1;
        pageSize = 10;
        $('#pre-page').attr('disabled', true);
    }

    function searchPois(keyword) {
        $('#next-page').attr('disabled', false);
        clearPoiData();
        if (!keyword) {
            return;
        }
        $('#btn-open-route').addClass('loading');
        poiSearchInputDom.val(keyword);
        $.ajax({
            url: webApiBasePath + '/search/v1/search/as',
            headers: {
                Authorization: AUTHENTIC_TOKEN_DuGIS
            },
            data: {
                pageNum: currentPage ? currentPage : 1,
                pageSize: pageSize ? pageSize : 10,
                q: keyword,
                city: cityName,
                outputCrs: outputCrs,
            },
            dataType: 'json',
            success: function (response) {
                $('#btn-open-route').removeClass('loading');
                if (response.status === 0) {
                    if (response.result.data && response.result.data.length > 0) {
                        $('.autocomplete-suggestions').css({'z-index': -1});
                        showPois(response.result.data);
                    } else {
                        if (currentPage > 1) {
                            $('#next-page').attr('disabled', true);
                            parent.top.addToast('error', '已经是最后一页了');
                        } else {
                            parent.top.addToast('error', '未获取到数据');
                        }
                    }
                } else {
                    parent.top.addToast('error', response.message);
                }
            }
        });
    }

    function searchAoiBypoint(point, name) {
        aoiBoundaryMap.setData([]);
        $.ajax({
            url: webApiBasePath + '/search/v1/search/aoipoint',
            headers: {
                Authorization: AUTHENTIC_TOKEN_DuGIS
            },
            data: {
                name: name,
                x: point.x,
                y: point.y,
                crs: inputCrs,
                outputCrs: outputCrs,
            },
            dataType: 'json',
            success: function (response) {
                if (response.status == 0 && response.result) {
                    var aoigeojson = [
                        {
                            geometry: response.result
                        }
                    ];
                    aoiBoundaryMap.setData(aoigeojson);
                    if (response.result.coordinates.length) {
                        var viewPoints = parseData(response.result.coordinates, []);
                        map.setViewport(viewPoints);
                    } else {
                        map.setCenter(new BMapGL.Point(point.x, point.y));
                    }
                }
                else {
                    map.setCenter(new BMapGL.Point(point.x, point.y));
                }
            },
            error: function (err) {
                map.setCenter(new BMapGL.Point(point.x, point.y));
            }
        });
    }

    function parseData(data, newdata) {
        var arr = newdata;
        for (var i = 0; i < data.length; i++) {
            if (Array.isArray(data[i]) && !Array.isArray(data[i][0])) {
                newdata.push(new BMapGL.Point(data[i][0], data[i][1]));
            }
            else {
                parseData(data[i], newdata);
            }
        }
        return arr;
    }

    function autoComp() {
        // 搜索提示
        $('#sole-input').autocomplete({
            serviceUrl: webApiBasePath + '/search/v1/suggest?city=' + cityName,
            deferRequestBy: 200,
            ajaxSettings: {
                headers: {
                    Authorization: AUTHENTIC_TOKEN_DuGIS
                }
            },
            paramName: 'keyword',
            width: '288px',
            transformResult: function (response) {
                return {
                    suggestions: $.map(response.result, function (dataItem) {
                        var value = dataItem.text;
                        return { value: value, data: dataItem };
                    })
                };
            },
            noCache: true,
            dataType: 'json',
            onSelect: function (suggestion) {
                console.log('You selected: ' + suggestion.value, suggestion.data);
                searchPois(suggestion.value); // 根据输入提示查询POI
            },
            formatResult: function (suggestion, value) {
                var reg = new RegExp('(' + value + ')', 'g');
                var realStr = suggestion.value.replace(reg, "<span style='color:#2468F2;'>" + value + '</span>');
                if (suggestion) {
                    var html = `
                    <div class="historySearch" title=${suggestion.value}>
                    <img src="./img/iconSearch.png" /><span>${realStr}</span> 
                    </div>`;
                }
                else {
                    var html = `
                    <div class="historySearch" title=${suggestion.value}>
                    暂无更多....
                    </div>`;
                }
                return html;
            },
            beforeRender: function (container, suggestions) {
                // poi详情，列表等展示时隐藏联想结果
                if (poiResultContainerDom.is(':visible')) {
                    container.css({
                        'z-index': -1
                    });
                }
                else {
                    container.css({
                        'z-index': 9999
                    });
                }
                return suggestions;
            },
            onSearchStart(params) {
                $('#btn-open-route').addClass('loading');
            },
            onSearchComplete() {
                $('#btn-open-route').removeClass('loading');
            }
        });
    }

    function initSearch() {
        $('#btn-open-route').on('click', function () {
            closePoiSearch();
            openRoute();
            searchMode = 2;
        });
        $('#btn-close-route').on('click', function () {
            closeRoute();
            openPoiSearch();
            searchMode = 1;
        });

        $('#sole-input').on('keyup', function (event) {
            let inputVal = $(this).val();
            if (!inputVal) {
                clearPoiData();
                resetPage();
            }
            else {
                $('#clear-search-poi').show();
            }
            // enter键
            if (event.keyCode === 13) {
                searchPois(inputVal);
            }
        });

        $('#search-button').on('click', function () {
        	var keyword = $('#sole-input').val();
        	if(keyword.length == 8 && keyword.substring(0, 3) == '339') {
        		$.getJSON(ctx + "taskMap/showPosition", {bh:keyword, type:2}, function(data){
        			console.log(data)
    				if(JSON.stringify(data) == '{}') {
    					$.modal.msgError('暂无轨迹!');
    					return;
    				}
        			var point = new BMapGL.Point(data.y, data.x);
			    	map.centerAndZoom(point, 17);
				    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    			});
        	}else if(keyword.length == 8 && keyword.substring(0, 3) == '739') {
        		
        	}else if(keyword.length == 15 && keyword.substring(0, 2) == '86') {
        		
        	}else if(keyword.length == 7 && keyword.substring(0, 2) == '冀H') {
        		
        	}else if (searchMode === 1) {
                searchPois($('#sole-input').val());
            }
        });

        // 监听城市控件变化
        map.addEventListener('citychange', function (e) {
            cityName = e.name;
            adcode = getCodeByName(cityName);
            if (searchMode === 1) {
                searchPois($('#sole-input').val());
            }
            autoComp();
        });

        // 点击列表项
        poiResultListDom.on('click', '.poi-result-item', function () {
            var index = $(this).index();
            var poi = poiResults[index];
            // 查询当前AOI
            searchAoiBypoint(poi.location, poi.name);
            // 更新marker
            var marker = poiMarkers[index];
            var icon = new BMapGL.Icon('/qwxx/ajax/libs/baidu/images/marker' + (index + 1) + '_blue.png', new BMapGL.Size(48, 48), {
                anchor: new BMapGL.Size(24, 48),
                imageSize: new BMapGL.Size(48, 48)
            });
            marker && marker.setIcon(icon);
            // 展示label
            labelContent(
                (pixel = new BMapGL.Point(poi.location.x, poi.location.y)),
                (postext = poi.name),
                (CityName = poi.address),
                (style = { Show: 'flex', hidden: 'none' })
            );
            label.setOffset(new BMapGL.Size(0, -52)); // 设置文本偏移量,
        });

        poiResultListDom.on('mouseenter', '.poi-result-item', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var index = $(this).index();
            var marker = poiMarkers[index];
            var icon = new BMapGL.Icon('/qwxx/ajax/libs/baidu/images/marker' + (index + 1) + '_hover.png', new BMapGL.Size(32, 32), {
                anchor: new BMapGL.Size(16, 32),
                imageSize: new BMapGL.Size(32, 32)
            });
            marker && marker.setIcon(icon);
        });

        poiResultListDom.on('mouseleave', '.poi-result-item', function () {
            var index = $(this).index();
            var marker = poiMarkers[index];
            var icon = new BMapGL.Icon('/qwxx/ajax/libs/baidu/images/marker' + (index + 1) + '.png', new BMapGL.Size(32, 32), {
                anchor: new BMapGL.Size(16, 32),
                imageSize: new BMapGL.Size(32, 32)
            });
            marker && marker.setIcon(icon);
            label.setOffset(new BMapGL.Size(0, -36)); // 设置文本偏移量,
        });

        // 不好使 ，暂时搁置。。。
        // poiResultListDom.on("mouseenter", ".poiName", function (e) { 
        //   e.preventDefault();
        //   e.stopPropagation();
        //   $(".popverPoititle").css({
        //     display: "block",
        //     top: e.pageY - 10,
        //     left: 50,
        //   });
        //   $(".popverPoititle").html($(this).text());
        // });
        // poiResultListDom.on("mouseleave", ".poiName", function (e) {
        //   e.preventDefault();
        //   e.stopPropagation();
        //   $(".popverPoititle").css({
        //     display: "none",
        //   });
        //   $(".popverPoititle").html();
        // });
    }

    // labelContent  新增
    function rgcPoint(point, callback) {
        var pontStr = point.lat + ',' + point.lng;

        $.ajax({
            url: webApiBasePath + '/search/v1/geocoding',
            headers: {
                Authorization: AUTHENTIC_TOKEN_DuGIS
            },
            data: {
                location: pontStr,
                coordinateType: inputCrs,
                outputCrs: outputCrs,
            },
            dataType: 'json',
            success: function (response) {
                if (response.status === 0) {
                    var name = '';
                    var district = '';
                    var result = response.result[0];
                    if (result.pois.length > 0 && result.pois[0].distance < 50) {
                        district = (result.province || '') +
                            (result.city || '') +
                            (result.district || '');
                        name = district + result.pois[0].name;
                    }
                    else {
                        district = (result.province || '') + (result.city || '');
                        name = district + result.district;
                    }
                    labelContent((pixel = point), (postext = null), (CityName = name));
                    callback && callback();
                }
                else {
                    parent.top.addToast('error', response.message);
                }
            }
        });
    }

    function getWaypointsString() {
        if (!waypoints || waypoints.length < 1) {
            return '';
        }

        var strings = waypoints.map(function (item) {
            var point = item.getPosition();
            return point.lat + ',' + point.lng;
        });

        return strings.join('|');
    }

    function generateRouteStepItem(step) {
        return [
            '<li class="result-item route-result-item">',
            step.text,
            '</li>'
        ].join(' ');
    }

    function showRoute(result) {
        routeSteps = result.steps;
        map.removeOverlay(line);

        routeResultListDom.empty();
        routeResultContainerDom.show();

        $('#route-distance').text((result.distance / 1000).toFixed(1));
        $('#route-time').text((result.time / 60).toFixed(0));
        var points = [];
        $.each(result.steps, function (i, step) {
            var xys = step.path.split(',');
            for (var j = 0, length = xys.length; j < length - 1; j += 2) {
                var point = new BMapGL.Point(xys[j], xys[j + 1]);
                points.push(point);
            }
            routeResultListDom.append(generateRouteStepItem(step));
        });
        line = new BMapGL.Polyline(points, {
            strokeColor: '#2468f2',
            strokeWeight: 4,
            strokeOpacity: 1
        });
        map.addOverlay(line);
    }
    // 搜索起点终点路段信息。。。
    function searchRoute() {
        if (!hasShowStartPoint || !hasShowEndPoint) {
            return;
        }

        var startPoint = startMarker.getPosition();
        var endPoint = endMarker.getPosition();
        $.ajax({
            url: webApiBasePath + '/route/v1/route',
            headers: {
                Authorization: AUTHENTIC_TOKEN_DuGIS
            },
            dataType: 'json',
            data: {
                index: 'direction',
                action: 'mapMatch',
                origin: startPoint.lat + ',' + startPoint.lng,
                destination: endPoint.lat + ',' + endPoint.lng,
                waypoints: getWaypointsString(),
                mode: routeMode,
                details: 'true',
                inputCrs: inputCrs,
                outputCrs: outputCrs,
            },
            success: function (response) {
                if (response.status === 0) {
                    showRoute(response.result);
                }
                else {
                    parent.top.addToast('error', response.message);
                }
            }
        });
    }
    // 设置输入框中的 起点终点 信息
    function rgc(input, point) {
        var pontStr = point.lat + ',' + point.lng;
        $.ajax({
            url: webApiBasePath + '/search/v1/geocoding',
            headers: {
                Authorization: AUTHENTIC_TOKEN_DuGIS
            },
            data: {
                location: pontStr,
                coordinateType: inputCrs,
                outputCrs: outputCrs,
            },
            dataType: 'json',
            success: function (response) {
                if (response.status === 0) {
                    var text = '';
                    var result = response.result[0];
                    if (result.pois.length > 0 && result.pois[0].distance < 100) {
                        text = result.pois[0].name;
                    }
                    else {
                        text = (result.province || '') +
                            (result.city || '') +
                            (result.district || '');
                    }
                    input.val(text);
                }
                else {
                    parent.top.addToast('error', response.message);
                }
            }
        });
    }

    function setStartPointPosition(point) {
        if (!hasShowStartPoint) {
            hasShowStartPoint = true;
            map.addOverlay(startMarker);
        }

        startMarker.setPosition(point);
        $('#route-input-start').val(point.lng + ',' + point.lat);
        rgc($('#route-input-start'), point);
        searchRoute();
    }

    function setEndPointPosition(point) {
        if (!hasShowEndPoint) {
            hasShowEndPoint = true;
            map.addOverlay(endMarker);
        }

        endMarker.setPosition(point);
        $('#route-input-end').val(point.lng + ',' + point.lat);
        rgc($('#route-input-end'), point);
        searchRoute();
    }

    //  清除起点
    $('#ClearStartPoint').click(() => {
        $('#route-input-start').val('');
        map.removeOverlay(startMarker);
        map.removeOverlay(line);
        hasShowStartPoint = false;
        line = [];
    });
    //   清除结束点
    $('#ClearEndPoint').click(() => {
        map.removeOverlay(endMarker);
        map.removeOverlay(line);
        hasShowEndPoint = false;
        $('#route-input-end').val('');
        line = [];
    });

    function initRoute() {
        var startIcon = new BMapGL.Icon('/qwxx/img/start.png', new BMapGL.Size(32, 32), {
            anchor: new BMapGL.Size(16, 32),
            imageSize: new BMapGL.Size(32, 32)
        });
        var endIcon = new BMapGL.Icon('/qwxx/img/end.png', new BMapGL.Size(32, 32), {
            anchor: new BMapGL.Size(16, 32),
            imageSize: new BMapGL.Size(32, 32)
        });
        startMarker = new BMapGL.Marker(new BMapGL.Point(116.316576, 40.052111), {
            enableMassClear: false,
            icon: startIcon
        });
        startMarker.enableDragging();
        endMarker = new BMapGL.Marker(new BMapGL.Point(116.322307, 40.04395), {
            enableMassClear: false,
            icon: endIcon
        });
        endMarker.enableDragging();
        startMarker.addEventListener('dragend', function (e) {
            setStartPointPosition(e.latLng);
            searchRoute();
        });
        endMarker.addEventListener('dragend', function (e) {
            setEndPointPosition(e.latLng);
            searchRoute();
        });
        routeResultListDom.on('click', '.route-result-item', function () {
            var index = $(this).index();
            var step = routeSteps[index];
            var points = [];
            var xys = step.path.split(',');
            for (var j = 0, length = xys.length; j < length - 1; j += 2) {
                var point = new BMapGL.Point(xys[j], xys[j + 1]);
                points.push(point);
            }
            map.setViewport(points);
        });

        $('#route-searchbox-content .tab-item').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            routeMode = $(this).attr('data-index');
            searchRoute();
        });
    }

    // 起终点交换
    $('.routeTurn').on('click', function () {
        var tempPos = startMarker.getPosition();
        startMarker.setPosition(endMarker.getPosition());
        endMarker.setPosition(tempPos);
        var tempVal = $('#route-input-start').val();
        $('#route-input-start').val($('#route-input-end').val());
        $('#route-input-end').val(tempVal);
        searchRoute();
    })

    function getCityName() {
        $.ajax({
            url: webApiBasePath + '/search/v1/search/city',
            headers: {
                Authorization: AUTHENTIC_TOKEN_DuGIS
            },
            data: {
                coordinate: inputCrs,
                location: defaultCenterPoint[0] + ',' + defaultCenterPoint[1],
                zoom: zoom
            },
            dataType: 'json',
            success: function (response) {
                if (response.status === 0) {
                    cityName = response.result.name;
                    adcode = parseInt(response.result.adcode, 10);
                    autoComp();
                }
                else {
                    parent.top.addToast('error', response.message);
                }
            }
        });
    }

    /**
     * 封装labelContent
     * @param {*} pixel 经纬度
     * @param {*} postext 头部信息
     * @param {*} CityName  地址信息
     */
    function labelContent(
        pixel,
        postext,
        CityName, style = { Show: '', hidden: '' }
    ) {
        label.setStyle({
            display: '',
        });
        label.setContent(`<div id="containerOne"> 
                <div class="posInfo" style="display:${style.Show}">
                  <div>
                    <span class="postext">${postext}</span>
                    <img src="/qwxx/img/copyblue.png" alt="复制" class="copyBtnBox copyHook" id='copy'>
                  </div>
                  <img src="/qwxx/img/ui_close.png" alt="" class="close1 close">
                </div>
                <div class="posItem">
                    <div id="rgc-point">
                        <span class="descInfo">经纬度：</span> 
                        <span class="Info">${pixel.lng},${pixel.lat}</span>
                    </div>
                    <div id="copy" style="display:${style.hidden}" class="copyHook">
                        复制
                    </div>
                    <img src="/qwxx/img/ui_close.png" alt="" class="close2 close" style="display:${style.hidden}">
                </div>
                <div class="posItem" id="rgc-name">
                    <span class="descInfo">地址信息：</span>
                    <span class="Info"> ${CityName}</span>
                </div>
            </div>`);
        if (style.Show) {
            label.setOffset(new BMapGL.Size(0, -36)); // 设置文本偏移量,
            label.setPosition(new BMapGL.Point(pixel.lng, pixel.lat));
        }
        else {
            label.setOffset(new BMapGL.Size(0, -36)); // 设置文本偏移量,
            label.setPosition(new BMapGL.Point(pixel.lng, pixel.lat));
        }
        // 复制操作
        $('.copyHook').on('click', function (e) {
            map.removeEventListener('click', initMapClick);
            var trigger = $('#rgc-point');
            var clipboard = new Clipboard('.copyHook', {
                text: function () {
                    return trigger.text();
                }
            });
            clipboard.on('success', function (e) {
                parent.top.addToast('success', '复制成功');
                //map.addEventListener('click', initMapClick);
            });
            clipboard.on('error', function (e) {
                parent.top.addToast('error', '复制失败');
            });
        });
        // 关闭lable
        $('.close').on('click', () => {
            map.removeEventListener('click', initMapClick);
            label.setStyle({
                display: 'none'
            });
            map.removeOverlay(markerOne);
            setTimeout(() => {
                //map.addEventListener('click', initMapClick);
            }, 10);
        });
    }

    function init() {
        getCityName();
        initMap();
        initSearch();
        initSoleSearchPagination();
        initRoute();
    }
    init();
    // $('#btn-open-route').click();
})();
