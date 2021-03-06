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
define([
    'src/formats/kml/KmlLink',
    'src/util/XmlDocument'
], function (
    KmlLink,
    XmlDocument
) {
    "use strict";
    describe ("KmlLinkTest",function () {
            var validKml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
                "<kml xmlns=\"http://www.opengis.net/kml/2.2\">" +
                "<Link>" +
                "   <href>link</href>" +
                "   <refreshMode>onChange</refreshMode>" +
                "   <refreshInterval>4</refreshInterval>" +
                "   <viewRefreshMode>never</viewRefreshMode>" +
                "   <viewRefreshTime>4</viewRefreshTime>" +
                "   <viewBoundScale>1</viewBoundScale>" +
                "   <viewFormat>BBOX=10,10,10,10</viewFormat>" +
                "   <httpQuery>validQuery</httpQuery>" +
                "</Link>" +
                "</kml>";
            var kmlRepresentation = new XmlDocument(validKml).dom();
            var link = new KmlLink({objectNode:
                kmlRepresentation.getElementsByTagName("Link")[0]});
        it('should have the Href, RefreshMode,RefreshInterval,ViewRefreshMode,ViewRefreshTime, ViewBoundScale, ViewFormat,' +
            'HttpQuery properties', function(){

            expect(link.kmlHref).toEqual('link');
            expect(link.kmlRefreshMode).toEqual('onChange');
            expect(link.kmlRefreshInterval).toEqual(4);
            expect(link.kmlViewRefreshMode).toEqual('never');
            expect(link.kmlViewRefreshTime).toEqual(4);
            expect(link.kmlViewBoundScale).toEqual(1);
            expect(link.kmlViewFormat).toEqual('BBOX=10,10,10,10');
            expect(link.kmlHttpQuery).toEqual('validQuery');
        });
    });
});