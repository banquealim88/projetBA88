var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_communesvosges_1 = new ol.format.GeoJSON();
var features_communesvosges_1 = format_communesvosges_1.readFeatures(json_communesvosges_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesvosges_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesvosges_1.addFeatures(features_communesvosges_1);
var lyr_communesvosges_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communesvosges_1, 
                style: style_communesvosges_1,
                interactive: false,
                title: '<img src="styles/legend/communesvosges_1.png" /> communes vosges'
            });
var format_EPCIvosges_2 = new ol.format.GeoJSON();
var features_EPCIvosges_2 = format_EPCIvosges_2.readFeatures(json_EPCIvosges_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCIvosges_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCIvosges_2.addFeatures(features_EPCIvosges_2);
var lyr_EPCIvosges_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCIvosges_2, 
                style: style_EPCIvosges_2,
                interactive: false,
                title: '<img src="styles/legend/EPCIvosges_2.png" /> EPCI vosges'
            });
var lyr_rseaubus_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "réseau bus",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/rseaubus_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [596252.014586, 6057996.895875, 816229.146637, 6213909.057328]
                            })
                        });
var lyr_rseauroutier_georef_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "réseau routier_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/rseauroutier_georef_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [599087.355672, 6064673.418951, 803271.388372, 6207289.182847]
                            })
                        });
var format_stopsimagine_5 = new ol.format.GeoJSON();
var features_stopsimagine_5 = format_stopsimagine_5.readFeatures(json_stopsimagine_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stopsimagine_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stopsimagine_5.addFeatures(features_stopsimagine_5);
var lyr_stopsimagine_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stopsimagine_5, 
                style: style_stopsimagine_5,
                interactive: false,
                title: '<img src="styles/legend/stopsimagine_5.png" /> stops imagine'
            });
var format_stopsdobus_6 = new ol.format.GeoJSON();
var features_stopsdobus_6 = format_stopsdobus_6.readFeatures(json_stopsdobus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stopsdobus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stopsdobus_6.addFeatures(features_stopsdobus_6);
var lyr_stopsdobus_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stopsdobus_6, 
                style: style_stopsdobus_6,
                interactive: false,
                title: '<img src="styles/legend/stopsdobus_6.png" /> stops déobus'
            });
var format_stopsfluo_7 = new ol.format.GeoJSON();
var features_stopsfluo_7 = format_stopsfluo_7.readFeatures(json_stopsfluo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stopsfluo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stopsfluo_7.addFeatures(features_stopsfluo_7);
var lyr_stopsfluo_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stopsfluo_7, 
                style: style_stopsfluo_7,
                interactive: false,
                title: '<img src="styles/legend/stopsfluo_7.png" /> stops fluo'
            });
var format_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8 = new ol.format.GeoJSON();
var features_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8 = format_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8.readFeatures(json_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8.addFeatures(features_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8);
var lyr_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8, 
                style: style_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8,
                interactive: false,
    title: 'typologie des communes dans le zonage des aires dattraction des villes<br />\
    <img src="styles/legend/typologiedescommunesdanslezonagedesairesdattractiondesvilles_8_0.png" /> commune-centre<br />\
    <img src="styles/legend/typologiedescommunesdanslezonagedesairesdattractiondesvilles_8_1.png" /> autre commune du pôle principal<br />\
    <img src="styles/legend/typologiedescommunesdanslezonagedesairesdattractiondesvilles_8_2.png" /> commune de la couronne<br />\
    <img src="styles/legend/typologiedescommunesdanslezonagedesairesdattractiondesvilles_8_3.png" /> commune hors attraction des villes<br />'
        });
var format_zonesderevitalisationrurale_9 = new ol.format.GeoJSON();
var features_zonesderevitalisationrurale_9 = format_zonesderevitalisationrurale_9.readFeatures(json_zonesderevitalisationrurale_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonesderevitalisationrurale_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonesderevitalisationrurale_9.addFeatures(features_zonesderevitalisationrurale_9);
var lyr_zonesderevitalisationrurale_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonesderevitalisationrurale_9, 
                style: style_zonesderevitalisationrurale_9,
                interactive: false,
    title: 'zones de revitalisation rurale<br />\
    <img src="styles/legend/zonesderevitalisationrurale_9_0.png" /> Classée en ZRR<br />\
    <img src="styles/legend/zonesderevitalisationrurale_9_1.png" /> Commune non classée<br />'
        });
var format_allocatairesduRSA_10 = new ol.format.GeoJSON();
var features_allocatairesduRSA_10 = format_allocatairesduRSA_10.readFeatures(json_allocatairesduRSA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allocatairesduRSA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allocatairesduRSA_10.addFeatures(features_allocatairesduRSA_10);
var lyr_allocatairesduRSA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_allocatairesduRSA_10, 
                style: style_allocatairesduRSA_10,
                interactive: false,
    title: 'allocataires du RSA<br />\
    <img src="styles/legend/allocatairesduRSA_10_0.png" /> données indisponibles<br />\
    <img src="styles/legend/allocatairesduRSA_10_1.png" /> 1 - 10 allocataires<br />\
    <img src="styles/legend/allocatairesduRSA_10_2.png" /> 10 - 30 allocataires<br />\
    <img src="styles/legend/allocatairesduRSA_10_3.png" /> 30 - 2000 allocataires<br />'
        });
var format_mdianeduniveaudevie_11 = new ol.format.GeoJSON();
var features_mdianeduniveaudevie_11 = format_mdianeduniveaudevie_11.readFeatures(json_mdianeduniveaudevie_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mdianeduniveaudevie_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mdianeduniveaudevie_11.addFeatures(features_mdianeduniveaudevie_11);
var lyr_mdianeduniveaudevie_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mdianeduniveaudevie_11, 
                style: style_mdianeduniveaudevie_11,
                interactive: false,
    title: 'médiane du niveau de vie<br />\
    <img src="styles/legend/mdianeduniveaudevie_11_0.png" /> données non disponibles<br />\
    <img src="styles/legend/mdianeduniveaudevie_11_1.png" /> 5000 - 19000 €<br />\
    <img src="styles/legend/mdianeduniveaudevie_11_2.png" /> 19000 - 22000 €<br />\
    <img src="styles/legend/mdianeduniveaudevie_11_3.png" /> 22000 - 26000 €<br />'
        });
var format_tauxdepauvretparEPCI_12 = new ol.format.GeoJSON();
var features_tauxdepauvretparEPCI_12 = format_tauxdepauvretparEPCI_12.readFeatures(json_tauxdepauvretparEPCI_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tauxdepauvretparEPCI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tauxdepauvretparEPCI_12.addFeatures(features_tauxdepauvretparEPCI_12);
var lyr_tauxdepauvretparEPCI_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tauxdepauvretparEPCI_12, 
                style: style_tauxdepauvretparEPCI_12,
                interactive: false,
    title: 'taux de pauvreté par EPCI<br />\
    <img src="styles/legend/tauxdepauvretparEPCI_12_0.png" /> 10 - 13 %<br />\
    <img src="styles/legend/tauxdepauvretparEPCI_12_1.png" /> 13 - 16 %<br />\
    <img src="styles/legend/tauxdepauvretparEPCI_12_2.png" /> 16 - 19 %<br />'
        });
var format_densitdepopulation_13 = new ol.format.GeoJSON();
var features_densitdepopulation_13 = format_densitdepopulation_13.readFeatures(json_densitdepopulation_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_densitdepopulation_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_densitdepopulation_13.addFeatures(features_densitdepopulation_13);
var lyr_densitdepopulation_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_densitdepopulation_13, 
                style: style_densitdepopulation_13,
                interactive: false,
    title: 'densité de population<br />\
    <img src="styles/legend/densitdepopulation_13_0.png" /> commune de catégorie intermédiaire<br />\
    <img src="styles/legend/densitdepopulation_13_1.png" /> commune peu dense<br />\
    <img src="styles/legend/densitdepopulation_13_2.png" /> commune très peu dense<br />'
        });
var format_communesavecaidealim_14 = new ol.format.GeoJSON();
var features_communesavecaidealim_14 = format_communesavecaidealim_14.readFeatures(json_communesavecaidealim_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesavecaidealim_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesavecaidealim_14.addFeatures(features_communesavecaidealim_14);
var lyr_communesavecaidealim_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communesavecaidealim_14, 
                style: style_communesavecaidealim_14,
                interactive: true,
                title: '<img src="styles/legend/communesavecaidealim_14.png" /> communes avec aide alim'
            });
var format_Structuresaidelogement_15 = new ol.format.GeoJSON();
var features_Structuresaidelogement_15 = format_Structuresaidelogement_15.readFeatures(json_Structuresaidelogement_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Structuresaidelogement_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Structuresaidelogement_15.addFeatures(features_Structuresaidelogement_15);
var lyr_Structuresaidelogement_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Structuresaidelogement_15, 
                style: style_Structuresaidelogement_15,
                interactive: true,
                title: '<img src="styles/legend/Structuresaidelogement_15.png" /> Structures aide logement'
            });
var format_Rpertoireaidealimentaire_16 = new ol.format.GeoJSON();
var features_Rpertoireaidealimentaire_16 = format_Rpertoireaidealimentaire_16.readFeatures(json_Rpertoireaidealimentaire_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rpertoireaidealimentaire_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rpertoireaidealimentaire_16.addFeatures(features_Rpertoireaidealimentaire_16);
var lyr_Rpertoireaidealimentaire_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rpertoireaidealimentaire_16, 
                style: style_Rpertoireaidealimentaire_16,
                interactive: true,
    title: 'Répertoire aide alimentaire<br />\
    <img src="styles/legend/Rpertoireaidealimentaire_16_0.png" /> Autre<br />\
    <img src="styles/legend/Rpertoireaidealimentaire_16_1.png" /> BA-autre<br />\
    <img src="styles/legend/Rpertoireaidealimentaire_16_2.png" /> BA-CCAS<br />\
    <img src="styles/legend/Rpertoireaidealimentaire_16_3.png" /> CCAS<br />\
    <img src="styles/legend/Rpertoireaidealimentaire_16_4.png" /> CRF<br />\
    <img src="styles/legend/Rpertoireaidealimentaire_16_5.png" /> RDC<br />\
    <img src="styles/legend/Rpertoireaidealimentaire_16_6.png" /> SPF<br />'
        });
var group_Aidealimentaire = new ol.layer.Group({
                                layers: [lyr_communesavecaidealim_14,lyr_Structuresaidelogement_15,lyr_Rpertoireaidealimentaire_16,],
                                title: "Aide alimentaire"});
var group_criteressociodemographiques = new ol.layer.Group({
                                layers: [lyr_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8,lyr_zonesderevitalisationrurale_9,lyr_allocatairesduRSA_10,lyr_mdianeduniveaudevie_11,lyr_tauxdepauvretparEPCI_12,lyr_densitdepopulation_13,],
                                title: "criteres socio-demographiques"});
var group_transports = new ol.layer.Group({
                                layers: [lyr_rseaubus_3,lyr_rseauroutier_georef_4,lyr_stopsimagine_5,lyr_stopsdobus_6,lyr_stopsfluo_7,],
                                title: "transports"});
var group_gographie = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_communesvosges_1,lyr_EPCIvosges_2,],
                                title: "géographie"});

lyr_OpenStreetMap_0.setVisible(true);lyr_communesvosges_1.setVisible(true);lyr_EPCIvosges_2.setVisible(true);lyr_rseaubus_3.setVisible(false);lyr_rseauroutier_georef_4.setVisible(false);lyr_stopsimagine_5.setVisible(false);lyr_stopsdobus_6.setVisible(false);lyr_stopsfluo_7.setVisible(false);lyr_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8.setVisible(false);lyr_zonesderevitalisationrurale_9.setVisible(false);lyr_allocatairesduRSA_10.setVisible(false);lyr_mdianeduniveaudevie_11.setVisible(false);lyr_tauxdepauvretparEPCI_12.setVisible(false);lyr_densitdepopulation_13.setVisible(false);lyr_communesavecaidealim_14.setVisible(false);lyr_Structuresaidelogement_15.setVisible(false);lyr_Rpertoireaidealimentaire_16.setVisible(false);
var layersList = [group_gographie,group_transports,group_criteressociodemographiques,group_Aidealimentaire];
lyr_communesvosges_1.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'zonage-zrr-2020_LIBGEO': 'zonage-zrr-2020_LIBGEO', 'zonage-zrr-2020_ZRR_SIMP': 'zonage-zrr-2020_ZRR_SIMP', 'zonage-zrr-2020_ZONAGE_ZRR': 'zonage-zrr-2020_ZONAGE_ZRR', 'densité-pop-vosges_commune': 'densité-pop-vosges_commune', 'densité-pop-vosges_indice densité pop': 'densité-pop-vosges_indice densité pop', 'typologie-zones-urbaines_commune': 'typologie-zones-urbaines_commune', 'typologie-zones-urbaines_typologie communes en zonage d\'aav': 'typologie-zones-urbaines_typologie communes en zonage d\'aav', 'typologie-zones-urbaines_field_4': 'typologie-zones-urbaines_field_4', 'typologie-zones-urbaines_field_5': 'typologie-zones-urbaines_field_5', 'niveau-de-vie-et-RSA_Commune': 'niveau-de-vie-et-RSA_Commune', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA', });
lyr_EPCIvosges_2.set('fieldAliases', {'ID_EPCI': 'ID_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', 'NATURE_EPC': 'NATURE_EPC', 'SIREN_EPCI': 'SIREN_EPCI', 'pop_mun_13': 'pop_mun_13', 'pop_tot_13': 'pop_tot_13', 'pop_mun_14': 'pop_mun_14', 'pop_tot_14': 'pop_tot_14', 'pop_tot_15': 'pop_tot_15', 'pop_mun_15': 'pop_mun_15', 'compet_sco': 'compet_sco', 'statuts': 'statuts', 'nb_comm': 'nb_comm', 'civilite': 'civilite', 'presidence': 'presidence', 'adresse': 'adresse', 'code_posta': 'code_posta', 'siege_cc': 'siege_cc', 'num_tel': 'num_tel', 'email': 'email', 'url_site': 'url_site', 'pop_mun': 'pop_mun', 'pop_tot': 'pop_tot', 'pauvreté-EPCI-Vosges_NOM_EPCI': 'pauvreté-EPCI-Vosges_NOM_EPCI', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018', });
lyr_stopsimagine_5.set('fieldAliases', {'stop_id': 'stop_id', 'stop_name': 'stop_name', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', 'location_type': 'location_type', 'wheelchair_boarding': 'wheelchair_boarding', });
lyr_stopsdobus_6.set('fieldAliases', {'stop_id': 'stop_id', 'stop_name': 'stop_name', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', 'location_type': 'location_type', 'wheelchair_boarding': 'wheelchair_boarding', });
lyr_stopsfluo_7.set('fieldAliases', {'stop_id': 'stop_id', 'stop_name': 'stop_name', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', 'location_type': 'location_type', 'wheelchair_boarding': 'wheelchair_boarding', });
lyr_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'zonage-zrr-2020_LIBGEO': 'zonage-zrr-2020_LIBGEO', 'zonage-zrr-2020_ZRR_SIMP': 'zonage-zrr-2020_ZRR_SIMP', 'zonage-zrr-2020_ZONAGE_ZRR': 'zonage-zrr-2020_ZONAGE_ZRR', 'densité-pop-vosges_commune': 'densité-pop-vosges_commune', 'densité-pop-vosges_indice densité pop': 'densité-pop-vosges_indice densité pop', 'typologie-zones-urbaines_commune': 'typologie-zones-urbaines_commune', 'typologie-zones-urbaines_typologie communes en zonage d\'aav': 'typologie-zones-urbaines_typologie communes en zonage d\'aav', 'typologie-zones-urbaines_field_4': 'typologie-zones-urbaines_field_4', 'typologie-zones-urbaines_field_5': 'typologie-zones-urbaines_field_5', });
lyr_zonesderevitalisationrurale_9.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'zonage-zrr-2020_LIBGEO': 'zonage-zrr-2020_LIBGEO', 'zonage-zrr-2020_ZRR_SIMP': 'zonage-zrr-2020_ZRR_SIMP', 'zonage-zrr-2020_ZONAGE_ZRR': 'zonage-zrr-2020_ZONAGE_ZRR', });
lyr_allocatairesduRSA_10.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'zonage-zrr-2020_LIBGEO': 'zonage-zrr-2020_LIBGEO', 'zonage-zrr-2020_ZRR_SIMP': 'zonage-zrr-2020_ZRR_SIMP', 'zonage-zrr-2020_ZONAGE_ZRR': 'zonage-zrr-2020_ZONAGE_ZRR', 'densité-pop-vosges_commune': 'densité-pop-vosges_commune', 'densité-pop-vosges_indice densité pop': 'densité-pop-vosges_indice densité pop', 'typologie-zones-urbaines_commune': 'typologie-zones-urbaines_commune', 'typologie-zones-urbaines_typologie communes en zonage d\'aav': 'typologie-zones-urbaines_typologie communes en zonage d\'aav', 'typologie-zones-urbaines_field_4': 'typologie-zones-urbaines_field_4', 'typologie-zones-urbaines_field_5': 'typologie-zones-urbaines_field_5', 'niveau-de-vie-et-RSA_Commune': 'niveau-de-vie-et-RSA_Commune', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA', });
lyr_mdianeduniveaudevie_11.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'zonage-zrr-2020_LIBGEO': 'zonage-zrr-2020_LIBGEO', 'zonage-zrr-2020_ZRR_SIMP': 'zonage-zrr-2020_ZRR_SIMP', 'zonage-zrr-2020_ZONAGE_ZRR': 'zonage-zrr-2020_ZONAGE_ZRR', 'densité-pop-vosges_commune': 'densité-pop-vosges_commune', 'densité-pop-vosges_indice densité pop': 'densité-pop-vosges_indice densité pop', 'typologie-zones-urbaines_commune': 'typologie-zones-urbaines_commune', 'typologie-zones-urbaines_typologie communes en zonage d\'aav': 'typologie-zones-urbaines_typologie communes en zonage d\'aav', 'typologie-zones-urbaines_field_4': 'typologie-zones-urbaines_field_4', 'typologie-zones-urbaines_field_5': 'typologie-zones-urbaines_field_5', 'niveau-de-vie-et-RSA_Commune': 'niveau-de-vie-et-RSA_Commune', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA', });
lyr_tauxdepauvretparEPCI_12.set('fieldAliases', {'ID_EPCI': 'ID_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', 'NATURE_EPC': 'NATURE_EPC', 'SIREN_EPCI': 'SIREN_EPCI', 'pop_mun_13': 'pop_mun_13', 'pop_tot_13': 'pop_tot_13', 'pop_mun_14': 'pop_mun_14', 'pop_tot_14': 'pop_tot_14', 'pop_tot_15': 'pop_tot_15', 'pop_mun_15': 'pop_mun_15', 'compet_sco': 'compet_sco', 'statuts': 'statuts', 'nb_comm': 'nb_comm', 'civilite': 'civilite', 'presidence': 'presidence', 'adresse': 'adresse', 'code_posta': 'code_posta', 'siege_cc': 'siege_cc', 'num_tel': 'num_tel', 'email': 'email', 'url_site': 'url_site', 'pop_mun': 'pop_mun', 'pop_tot': 'pop_tot', 'pauvreté-EPCI-Vosges_NOM_EPCI': 'pauvreté-EPCI-Vosges_NOM_EPCI', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018', });
lyr_densitdepopulation_13.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'zonage-zrr-2020_LIBGEO': 'zonage-zrr-2020_LIBGEO', 'zonage-zrr-2020_ZRR_SIMP': 'zonage-zrr-2020_ZRR_SIMP', 'zonage-zrr-2020_ZONAGE_ZRR': 'zonage-zrr-2020_ZONAGE_ZRR', 'densité-pop-vosges_commune': 'densité-pop-vosges_commune', 'densité-pop-vosges_indice densité pop': 'densité-pop-vosges_indice densité pop', });
lyr_communesavecaidealim_14.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', });
lyr_Structuresaidelogement_15.set('fieldAliases', {'Ville': 'Ville', 'Organisme gestionnaire': 'Organisme gestionnaire', 'Adresse': 'Adresse', 'Nombre de places': 'Nombre de places', 'Type de public': 'Type de public', 'Contact': 'Contact', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Rpertoireaidealimentaire_16.set('fieldAliases', {'Ville': 'Ville', 'Association': 'Association', 'Nom complet de l association': 'Nom complet de l association', 'Adresse de l association': 'Adresse de l association', 'Forme d aide alimentaire': 'Forme d aide alimentaire', 'Remarque': 'Remarque', 'Distribution': 'Distribution', 'Ouvert le lundi': 'Ouvert le lundi', 'Horaires lundi': 'Horaires lundi', 'Ouvert le mardi': 'Ouvert le mardi', 'Horaires mardi': 'Horaires mardi', 'Ouvert le mercredi': 'Ouvert le mercredi', 'Horaires mercredi': 'Horaires mercredi', 'Ouvert le jeudi': 'Ouvert le jeudi', 'Horaires jeudi': 'Horaires jeudi', 'Ouvert le vendredi': 'Ouvert le vendredi', 'Horaires vendredi': 'Horaires vendredi', 'Ouvert le samedi': 'Ouvert le samedi', 'Horaires samedi': 'Horaires samedi', 'Nombre de bénéficiaires': 'Nombre de bénéficiaires', 'N° téléphone': 'N° téléphone', 'Mail': 'Mail', 'Nom d un interlocuteur': 'Nom d un interlocuteur', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'field_26': 'field_26', });
lyr_communesvosges_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'zonage-zrr-2020_LIBGEO': 'TextEdit', 'zonage-zrr-2020_ZRR_SIMP': 'TextEdit', 'zonage-zrr-2020_ZONAGE_ZRR': 'TextEdit', 'densité-pop-vosges_commune': 'TextEdit', 'densité-pop-vosges_indice densité pop': 'Range', 'typologie-zones-urbaines_commune': 'TextEdit', 'typologie-zones-urbaines_typologie communes en zonage d\'aav': 'Range', 'typologie-zones-urbaines_field_4': 'TextEdit', 'typologie-zones-urbaines_field_5': 'TextEdit', 'niveau-de-vie-et-RSA_Commune': 'TextEdit', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'Range', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'Range', });
lyr_EPCIvosges_2.set('fieldImages', {'ID_EPCI': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'TextEdit', 'NATURE_EPC': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'pop_mun_13': 'TextEdit', 'pop_tot_13': 'TextEdit', 'pop_mun_14': 'TextEdit', 'pop_tot_14': 'TextEdit', 'pop_tot_15': 'Range', 'pop_mun_15': 'Range', 'compet_sco': 'TextEdit', 'statuts': 'TextEdit', 'nb_comm': 'TextEdit', 'civilite': 'TextEdit', 'presidence': 'TextEdit', 'adresse': 'TextEdit', 'code_posta': 'TextEdit', 'siege_cc': 'TextEdit', 'num_tel': 'TextEdit', 'email': 'TextEdit', 'url_site': 'TextEdit', 'pop_mun': 'Range', 'pop_tot': 'Range', 'pauvreté-EPCI-Vosges_NOM_EPCI': 'TextEdit', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': 'TextEdit', });
lyr_stopsimagine_5.set('fieldImages', {'stop_id': 'Range', 'stop_name': 'TextEdit', 'stop_lat': 'TextEdit', 'stop_lon': 'TextEdit', 'location_type': 'Range', 'wheelchair_boarding': 'Range', });
lyr_stopsdobus_6.set('fieldImages', {'stop_id': 'Range', 'stop_name': 'TextEdit', 'stop_lat': 'TextEdit', 'stop_lon': 'TextEdit', 'location_type': 'Range', 'wheelchair_boarding': 'TextEdit', });
lyr_stopsfluo_7.set('fieldImages', {'stop_id': 'Range', 'stop_name': 'TextEdit', 'stop_lat': 'TextEdit', 'stop_lon': 'TextEdit', 'location_type': 'Range', 'wheelchair_boarding': 'TextEdit', });
lyr_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'zonage-zrr-2020_LIBGEO': 'TextEdit', 'zonage-zrr-2020_ZRR_SIMP': 'TextEdit', 'zonage-zrr-2020_ZONAGE_ZRR': 'TextEdit', 'densité-pop-vosges_commune': 'TextEdit', 'densité-pop-vosges_indice densité pop': 'Range', 'typologie-zones-urbaines_commune': 'TextEdit', 'typologie-zones-urbaines_typologie communes en zonage d\'aav': 'Range', 'typologie-zones-urbaines_field_4': 'TextEdit', 'typologie-zones-urbaines_field_5': 'TextEdit', });
lyr_zonesderevitalisationrurale_9.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'zonage-zrr-2020_LIBGEO': 'TextEdit', 'zonage-zrr-2020_ZRR_SIMP': 'TextEdit', 'zonage-zrr-2020_ZONAGE_ZRR': 'TextEdit', });
lyr_allocatairesduRSA_10.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'zonage-zrr-2020_LIBGEO': 'TextEdit', 'zonage-zrr-2020_ZRR_SIMP': 'TextEdit', 'zonage-zrr-2020_ZONAGE_ZRR': 'TextEdit', 'densité-pop-vosges_commune': 'TextEdit', 'densité-pop-vosges_indice densité pop': 'Range', 'typologie-zones-urbaines_commune': 'TextEdit', 'typologie-zones-urbaines_typologie communes en zonage d\'aav': 'Range', 'typologie-zones-urbaines_field_4': 'TextEdit', 'typologie-zones-urbaines_field_5': 'TextEdit', 'niveau-de-vie-et-RSA_Commune': 'TextEdit', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'Range', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'Range', });
lyr_mdianeduniveaudevie_11.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'zonage-zrr-2020_LIBGEO': 'TextEdit', 'zonage-zrr-2020_ZRR_SIMP': 'TextEdit', 'zonage-zrr-2020_ZONAGE_ZRR': 'TextEdit', 'densité-pop-vosges_commune': 'TextEdit', 'densité-pop-vosges_indice densité pop': 'Range', 'typologie-zones-urbaines_commune': 'TextEdit', 'typologie-zones-urbaines_typologie communes en zonage d\'aav': 'Range', 'typologie-zones-urbaines_field_4': 'TextEdit', 'typologie-zones-urbaines_field_5': 'TextEdit', 'niveau-de-vie-et-RSA_Commune': 'TextEdit', 'niveau-de-vie-et-RSA_Médiane du niveau vie (€)': 'Range', 'niveau-de-vie-et-RSA_Nombre d\'allocataires du RSA': 'Range', });
lyr_tauxdepauvretparEPCI_12.set('fieldImages', {'ID_EPCI': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'TextEdit', 'NATURE_EPC': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'pop_mun_13': 'TextEdit', 'pop_tot_13': 'TextEdit', 'pop_mun_14': 'TextEdit', 'pop_tot_14': 'TextEdit', 'pop_tot_15': 'Range', 'pop_mun_15': 'Range', 'compet_sco': 'TextEdit', 'statuts': 'TextEdit', 'nb_comm': 'TextEdit', 'civilite': 'TextEdit', 'presidence': 'TextEdit', 'adresse': 'TextEdit', 'code_posta': 'TextEdit', 'siege_cc': 'TextEdit', 'num_tel': 'TextEdit', 'email': 'TextEdit', 'url_site': 'TextEdit', 'pop_mun': 'Range', 'pop_tot': 'Range', 'pauvreté-EPCI-Vosges_NOM_EPCI': 'TextEdit', 'pauvreté-EPCI-Vosges_TAUX PAUVRETÉ (%) 2018': 'TextEdit', });
lyr_densitdepopulation_13.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'zonage-zrr-2020_LIBGEO': 'TextEdit', 'zonage-zrr-2020_ZRR_SIMP': 'TextEdit', 'zonage-zrr-2020_ZONAGE_ZRR': 'TextEdit', 'densité-pop-vosges_commune': 'TextEdit', 'densité-pop-vosges_indice densité pop': 'Range', });
lyr_communesavecaidealim_14.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Structuresaidelogement_15.set('fieldImages', {'Ville': 'TextEdit', 'Organisme gestionnaire': 'TextEdit', 'Adresse': 'TextEdit', 'Nombre de places': 'TextEdit', 'Type de public': 'TextEdit', 'Contact': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Rpertoireaidealimentaire_16.set('fieldImages', {'Ville': 'TextEdit', 'Association': 'TextEdit', 'Nom complet de l association': 'TextEdit', 'Adresse de l association': 'TextEdit', 'Forme d aide alimentaire': 'TextEdit', 'Remarque': 'TextEdit', 'Distribution': 'TextEdit', 'Ouvert le lundi': 'TextEdit', 'Horaires lundi': 'TextEdit', 'Ouvert le mardi': 'TextEdit', 'Horaires mardi': 'TextEdit', 'Ouvert le mercredi': 'TextEdit', 'Horaires mercredi': 'TextEdit', 'Ouvert le jeudi': 'TextEdit', 'Horaires jeudi': 'TextEdit', 'Ouvert le vendredi': 'TextEdit', 'Horaires vendredi': 'TextEdit', 'Ouvert le samedi': 'TextEdit', 'Horaires samedi': 'TextEdit', 'Nombre de bénéficiaires': 'TextEdit', 'N° téléphone': 'TextEdit', 'Mail': 'TextEdit', 'Nom d un interlocuteur': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'field_26': 'TextEdit', });
lyr_communesvosges_1.set('fieldLabels', {});
lyr_EPCIvosges_2.set('fieldLabels', {});
lyr_stopsimagine_5.set('fieldLabels', {});
lyr_stopsdobus_6.set('fieldLabels', {});
lyr_stopsfluo_7.set('fieldLabels', {});
lyr_typologiedescommunesdanslezonagedesairesdattractiondesvilles_8.set('fieldLabels', {});
lyr_zonesderevitalisationrurale_9.set('fieldLabels', {});
lyr_allocatairesduRSA_10.set('fieldLabels', {});
lyr_mdianeduniveaudevie_11.set('fieldLabels', {});
lyr_tauxdepauvretparEPCI_12.set('fieldLabels', {});
lyr_densitdepopulation_13.set('fieldLabels', {});
lyr_communesavecaidealim_14.set('fieldLabels', {});
lyr_Structuresaidelogement_15.set('fieldLabels', {});
lyr_Rpertoireaidealimentaire_16.set('fieldLabels', {});
lyr_Rpertoireaidealimentaire_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});