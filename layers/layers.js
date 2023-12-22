var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ESTADOS_MG_2 = new ol.format.GeoJSON();
var features_ESTADOS_MG_2 = format_ESTADOS_MG_2.readFeatures(json_ESTADOS_MG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTADOS_MG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTADOS_MG_2.addFeatures(features_ESTADOS_MG_2);
var lyr_ESTADOS_MG_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTADOS_MG_2, 
                style: style_ESTADOS_MG_2,
                interactive: true,
                title: '<img src="styles/legend/ESTADOS_MG_2.png" /> ESTADOS_MG'
            });
var format_ESTADOS_MG_3 = new ol.format.GeoJSON();
var features_ESTADOS_MG_3 = format_ESTADOS_MG_3.readFeatures(json_ESTADOS_MG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTADOS_MG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTADOS_MG_3.addFeatures(features_ESTADOS_MG_3);
var lyr_ESTADOS_MG_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTADOS_MG_3, 
                style: style_ESTADOS_MG_3,
                interactive: true,
                title: '<img src="styles/legend/ESTADOS_MG_3.png" /> ESTADOS_MG'
            });
var lyr_Dtnaelocalizaodasescolasmunicipais_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Dtna e localização das escolas municipais ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Dtnaelocalizaodasescolasmunicipais_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4951904.200085, -2093366.374197, -4765561.130702, -1960073.094009]
                            })
                        });
var lyr_Diamantinaelocalizaodasescolas_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Diamantina e localização das escolas ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Diamantinaelocalizaodasescolas_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4858676.877680, -2069970.100859, -4848231.347812, -2062495.532965]
                            })
                        });
var format_DISTRITOS_DTNA_MG_6 = new ol.format.GeoJSON();
var features_DISTRITOS_DTNA_MG_6 = format_DISTRITOS_DTNA_MG_6.readFeatures(json_DISTRITOS_DTNA_MG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOS_DTNA_MG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOS_DTNA_MG_6.addFeatures(features_DISTRITOS_DTNA_MG_6);
var lyr_DISTRITOS_DTNA_MG_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOS_DTNA_MG_6, 
                style: style_DISTRITOS_DTNA_MG_6,
                interactive: true,
                title: '<img src="styles/legend/DISTRITOS_DTNA_MG_6.png" /> DISTRITOS_DTNA_MG'
            });
var format_MG_Municipios_2022_7 = new ol.format.GeoJSON();
var features_MG_Municipios_2022_7 = format_MG_Municipios_2022_7.readFeatures(json_MG_Municipios_2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MG_Municipios_2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MG_Municipios_2022_7.addFeatures(features_MG_Municipios_2022_7);
var lyr_MG_Municipios_2022_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MG_Municipios_2022_7, 
                style: style_MG_Municipios_2022_7,
                interactive: true,
                title: '<img src="styles/legend/MG_Municipios_2022_7.png" /> MG_Municipios_2022'
            });
var format_comunidadesquilombos_8 = new ol.format.GeoJSON();
var features_comunidadesquilombos_8 = format_comunidadesquilombos_8.readFeatures(json_comunidadesquilombos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunidadesquilombos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunidadesquilombos_8.addFeatures(features_comunidadesquilombos_8);
var lyr_comunidadesquilombos_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comunidadesquilombos_8, 
                style: style_comunidadesquilombos_8,
                interactive: true,
                title: '<img src="styles/legend/comunidadesquilombos_8.png" /> comunidades quilombos'
            });
var format_distritoslocalizao_9 = new ol.format.GeoJSON();
var features_distritoslocalizao_9 = format_distritoslocalizao_9.readFeatures(json_distritoslocalizao_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distritoslocalizao_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritoslocalizao_9.addFeatures(features_distritoslocalizao_9);
var lyr_distritoslocalizao_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_distritoslocalizao_9, 
                style: style_distritoslocalizao_9,
                interactive: true,
                title: '<img src="styles/legend/distritoslocalizao_9.png" /> distritos localização'
            });
var format_QUILOMBOS_DTNA_MG_10 = new ol.format.GeoJSON();
var features_QUILOMBOS_DTNA_MG_10 = format_QUILOMBOS_DTNA_MG_10.readFeatures(json_QUILOMBOS_DTNA_MG_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QUILOMBOS_DTNA_MG_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUILOMBOS_DTNA_MG_10.addFeatures(features_QUILOMBOS_DTNA_MG_10);
var lyr_QUILOMBOS_DTNA_MG_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QUILOMBOS_DTNA_MG_10, 
                style: style_QUILOMBOS_DTNA_MG_10,
                interactive: true,
                title: '<img src="styles/legend/QUILOMBOS_DTNA_MG_10.png" /> QUILOMBOS_DTNA_MG'
            });
var format_pontos_11 = new ol.format.GeoJSON();
var features_pontos_11 = format_pontos_11.readFeatures(json_pontos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pontos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pontos_11.addFeatures(features_pontos_11);
var lyr_pontos_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pontos_11, 
                style: style_pontos_11,
                interactive: true,
                title: '<img src="styles/legend/pontos_11.png" /> pontos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_ESTADOS_MG_2.setVisible(true);lyr_ESTADOS_MG_3.setVisible(true);lyr_Dtnaelocalizaodasescolasmunicipais_4.setVisible(true);lyr_Diamantinaelocalizaodasescolas_5.setVisible(true);lyr_DISTRITOS_DTNA_MG_6.setVisible(true);lyr_MG_Municipios_2022_7.setVisible(true);lyr_comunidadesquilombos_8.setVisible(true);lyr_distritoslocalizao_9.setVisible(true);lyr_QUILOMBOS_DTNA_MG_10.setVisible(true);lyr_pontos_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,lyr_ESTADOS_MG_2,lyr_ESTADOS_MG_3,lyr_Dtnaelocalizaodasescolasmunicipais_4,lyr_Diamantinaelocalizaodasescolas_5,lyr_DISTRITOS_DTNA_MG_6,lyr_MG_Municipios_2022_7,lyr_comunidadesquilombos_8,lyr_distritoslocalizao_9,lyr_QUILOMBOS_DTNA_MG_10,lyr_pontos_11];
lyr_ESTADOS_MG_2.set('fieldAliases', {'ESTADOS': 'ESTADOS', 'REGIAO': 'REGIAO', 'COD_UF': 'COD_UF', 'UF': 'UF', 'HECTARES': 'HECTARES', });
lyr_ESTADOS_MG_3.set('fieldAliases', {'ESTADOS': 'ESTADOS', 'REGIAO': 'REGIAO', 'COD_UF': 'COD_UF', 'UF': 'UF', 'HECTARES': 'HECTARES', });
lyr_DISTRITOS_DTNA_MG_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nome': 'nome', 'geocodigo': 'geocodigo', 'anoderefer': 'anoderefer', 'geometriaa': 'geometriaa', 'nomeabrev': 'nomeabrev', 'igamunicip': 'igamunicip', 'igageododi': 'igageododi', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'link': 'link', });
lyr_MG_Municipios_2022_7.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_comunidadesquilombos_8.set('fieldAliases', {'id': 'id', 'nome': 'nome', });
lyr_distritoslocalizao_9.set('fieldAliases', {'fid': 'fid', 'localização': 'localização', 'População': 'População', 'fotos': 'fotos', });
lyr_QUILOMBOS_DTNA_MG_10.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'fotos': 'fotos', 'Informaça': 'Informaça', });
lyr_pontos_11.set('fieldAliases', {'fid': 'fid', 'campos ': 'campos ', 'fotos': 'fotos', });
lyr_ESTADOS_MG_2.set('fieldImages', {'ESTADOS': '', 'REGIAO': '', 'COD_UF': '', 'UF': '', 'HECTARES': '', });
lyr_ESTADOS_MG_3.set('fieldImages', {'ESTADOS': 'TextEdit', 'REGIAO': 'TextEdit', 'COD_UF': 'TextEdit', 'UF': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_DISTRITOS_DTNA_MG_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'anoderefer': 'TextEdit', 'geometriaa': 'TextEdit', 'nomeabrev': 'TextEdit', 'igamunicip': 'TextEdit', 'igageododi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'link': 'TextEdit', });
lyr_MG_Municipios_2022_7.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_comunidadesquilombos_8.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', });
lyr_distritoslocalizao_9.set('fieldImages', {'fid': 'TextEdit', 'localização': 'TextEdit', 'População': 'Range', 'fotos': 'ExternalResource', });
lyr_QUILOMBOS_DTNA_MG_10.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', 'fotos': 'ExternalResource', 'Informaça': 'TextEdit', });
lyr_pontos_11.set('fieldImages', {'fid': 'TextEdit', 'campos ': 'TextEdit', 'fotos': 'ExternalResource', });
lyr_ESTADOS_MG_2.set('fieldLabels', {'ESTADOS': 'no label', 'REGIAO': 'no label', 'COD_UF': 'no label', 'UF': 'no label', 'HECTARES': 'no label', });
lyr_ESTADOS_MG_3.set('fieldLabels', {'ESTADOS': 'no label', 'REGIAO': 'no label', 'COD_UF': 'no label', 'UF': 'no label', 'HECTARES': 'no label', });
lyr_DISTRITOS_DTNA_MG_6.set('fieldLabels', {'OBJECTID': 'no label', 'nome': 'no label', 'geocodigo': 'no label', 'anoderefer': 'no label', 'geometriaa': 'no label', 'nomeabrev': 'no label', 'igamunicip': 'no label', 'igageododi': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'link': 'no label', });
lyr_MG_Municipios_2022_7.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_comunidadesquilombos_8.set('fieldLabels', {'id': 'no label', 'nome': 'no label', });
lyr_distritoslocalizao_9.set('fieldLabels', {'fid': 'no label', 'localização': 'no label', 'População': 'no label', 'fotos': 'no label', });
lyr_QUILOMBOS_DTNA_MG_10.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'fotos': 'no label', 'Informaça': 'no label', });
lyr_pontos_11.set('fieldLabels', {'fid': 'no label', 'campos ': 'no label', 'fotos': 'no label', });
lyr_pontos_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});