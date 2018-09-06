/*
 * Copyright 2015-2017 WorldWind Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

requirejs(['./WorldWindShim',
        './LayerManager'],
    function (WorldWind,
              LayerManager) {
        "use strict";

        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        var happy = 0;
        var wwd = new WorldWind.WorldWindow("canvasOne");

        // Standard WorldWind layers
        var layers = [
            {layer: new WorldWind.BMNGLayer(), enabled: true},
            {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
            {layer: new WorldWind.BingAerialLayer(null), enabled: false},
            {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: false},
            {layer: new WorldWind.BingRoadsLayer(null), enabled: false},
            {layer: new WorldWind.CompassLayer(), enabled: true},
            {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
            {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
        ];

        for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }


        // Create a layer manager for controlling layer visibility.
        var layerManager = new LayerManager(wwd);

        // Web Map Service information from NASA's Near Earth Observations WMS
        // var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
        var serviceAddress = "http://aworldbridgelabs.com:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities";
        // Named layer displaying Average Temperature data
        // var layerName = "MOD_LSTD_CLIM_M";
        var layerNames = [
            "USGS:14_GovernmentalUnitBoundaries",
            "USGS:29_Contours", //Puerto Rico
            "USGS:4_NaturalEarth",
            "USGS:16_Blank", //australia ocean (according to Albert)
            "USGS:2_NaturalEarth",
            "USGS:3_LandCover" //some island
        ];

        // Called asynchronously to parse and create the WMS layer
        var createLayer = function (xmlDom) {
            // Create a WmsCapabilities object from the XML DOM
            var wms = new WorldWind.WmsCapabilities(xmlDom);
            console.log(wms);
            // Retrieve a WmsLayerCapabilities object by the desired layer name
            var wmsLayerCapabilities = wms.getNamedLayer(layerName);
            console.log(wmsLayerCapabilities);
            // Form a configuration object from the WmsLayerCapability object
            var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
            console.log(wmsConfig);
            // Modify the configuration objects title property to a more user friendly title
            wmsConfig.title = "National Forest";
            // Create the WMS Layer from the configuration object
            var wmsLayer = new WorldWind.WmsLayer(wmsConfig);

            // Add the layers to WorldWind and update the layer manager
            wwd.addLayer(wmsLayer);
            layerManager.synchronizeLayerList();
            wwd.layers[8].enabled = false;
        };

        wwd.addLayer(wmsLayer);
        var logError = functioon(jqXhr,text,exception){
            console.log("There was a failure retrieving the capabilities document: " + text + " exception: " + exception);
        };
        $.get(serviceAddress).done(createLayer).fail(logError);

        $('.trees').on("click",function(){
            var hello = document.getElementById("wood");
            if(hello.id === "wood"){
                if(happy === 0){
                    for(var i = 0; i < wwd.layers.length; i++){
                        if(wwd.layers[i].displayName === "USGS:14_GovernmentalUnitBoundaries"){
                            wwd.layers[i].enabled = true;
                            happy = 1;
                            break
                        }
                    }
                }
            }else{
                for(var h = 0; h <)
            }
        });

        var createLayer1 = function (xmlDom) {
            // Create a WmsCapabilities object from the XML DOM
            var wms = new WorldWind.WmsCapabilities(xmlDom);
            console.log(wms);
            // Retrieve a WmsLayerCapabilities object by the desired layer name
            var wmsLayerCapabilities = wms.getNamedLayer(layerName1);
            console.log(wmsLayerCapabilities);
            // Form a configuration object from the WmsLayerCapability object
            var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
            console.log(wmsConfig);
            // Modify the configuration objects title property to a more user friendly title
            wmsConfig.title = "Puerto Rico";
            // Create the WMS Layer from the configuration object
            var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
            // Add the layers to WorldWind and update the layer manager
            wwd.addLayer(wmsLayer);
            layerManager.synchronizeLayerList();
        };
        $('.island').on("click",function(){
            var hello = document.getElementById("rico");
            if(hello.id === rico){
                if(happy === 0){
                    for(var i = 0; i < wwd.layers.length; i++){
                    }
                }
            }
        });

        var createLayer2 = function (xmlDom) {
            // Create a WmsCapabilities object from the XML DOM
            var wms = new WorldWind.WmsCapabilities(xmlDom);
            console.log(wms);
            // Retrieve a WmsLayerCapabilities object by the desired layer name
            var wmsLayerCapabilities = wms.getNamedLayer(layerName2);
            console.log(wmsLayerCapabilities);
            // Form a configuration object from the WmsLayerCapability object
            var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
            console.log(wmsConfig);
            // Modify the configuration objects title property to a more user friendly title
            wmsConfig.title = "Colors";
            // Create the WMS Layer from the configuration object
            var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
            // Add the layers to WorldWind and update the layer manager
            wwd.addLayer(wmsLayer);
            layerManager.synchronizeLayerList();
        };
        $('.colorful').on("click",function(){
            var hello = document.getElementById("rainbow");
            if(hello.id === rainbow){
                if(happy === 0){
                    for(var i = 0; i < wwd.layers.length; i++){
                    }
                }
            }
        });

        var createLayer3 = function (xmlDom) {
            // Create a WmsCapabilities object from the XML DOM
            var wms = new WorldWind.WmsCapabilities(xmlDom);
            console.log(wms);
            // Retrieve a WmsLayerCapabilities object by the desired layer name
            var wmsLayerCapabilities = wms.getNamedLayer(layerName2);
            console.log(wmsLayerCapabilities);
            // Form a configuration object from the WmsLayerCapability object
            var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
            console.log(wmsConfig);
            // Modify the configuration objects title property to a more user friendly title
            wmsConfig.title = "US Oceans";
            // Create the WMS Layer from the configuration object
            var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
            // Add the layers to WorldWind and update the layer manager
            wwd.addLayer(wmsLayer);
            layerManager.synchronizeLayerList();
        };
        $('.ocean').on("click",function(){
            var hello = document.getElementById("america");
            if(hello.id === america){
                if(happy === 0){
                    for(var i = 0; i < wwd.layers.length; i++){
                    }
                }
            }
        });

        var createLayer4 = function (xmlDom) {
            // Create a WmsCapabilities object from the XML DOM
            var wms = new WorldWind.WmsCapabilities(xmlDom);
            console.log(wms);
            // Retrieve a WmsLayerCapabilities object by the desired layer name
            var wmsLayerCapabilities = wms.getNamedLayer(layerName2);
            console.log(wmsLayerCapabilities);
            // Form a configuration object from the WmsLayerCapability object
            var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
            console.log(wmsConfig);
            // Modify the configuration objects title property to a more user friendly title
            wmsConfig.title = "Colors";
            // Create the WMS Layer from the configuration object
            var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
            // Add the layers to WorldWind and update the layer manager
            wwd.addLayer(wmsLayer);
            layerManager.synchronizeLayerList();
        };
        $('.dark').on("click",function(){
            var hello = document.getElementById("shadow");
            if(hello.id === shadow){
                if(happy === 0){
                    for(var i = 0; i < wwd.layers.length; i++){
                    }
                }
            }
        });

        var createLayer5 = function (xmlDom) {
            // Create a WmsCapabilities object from the XML DOM
            var wms = new WorldWind.WmsCapabilities(xmlDom);
            console.log(wms);
            // Retrieve a WmsLayerCapabilities object by the desired layer name
            var wmsLayerCapabilities = wms.getNamedLayer(layerName2);
            console.log(wmsLayerCapabilities);
            // Form a configuration object from the WmsLayerCapability object
            var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
            console.log(wmsConfig);
            // Modify the configuration objects title property to a more user friendly title
            wmsConfig.title = "Colors";
            // Create the WMS Layer from the configuration object
            var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
            // Add the layers to WorldWind and update the layer manager
            wwd.addLayer(wmsLayer);
            layerManager.synchronizeLayerList();
        };
        $('.pacific').on("click",function(){
            var hello = document.getElementById("hola");
            if(hello.id === hola){
                if(happy === 0){
                    for(var i = 0; i < wwd.layers.length; i++){
                    }
                }
            }
        });
            // Called if an error occurs during WMS Capabilities document retrieval
        var logError = function (jqXhr, text, exception) {
            console.log("There was a failure retrieving the capabilities document: " + text + " exception: " + exception);
        };

        $.get(serviceAddress).done(createLayer).fail(logError);
        $.get(serviceAddress).done(createLayer1).fail(logError);
        $.get(serviceAddress).done(createLayer2).fail(logError);

    });