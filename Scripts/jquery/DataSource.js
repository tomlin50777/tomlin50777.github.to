////var menuTabItem = [
////    { text: "user" },
////    { text: "analytics" },
////    { text: "customers" },
////    { text: "search" },
////    { text: "favorites" },
////    { text: "additional" },
////    { text: "clients" },
////    { text: "orders" },
////    { text: "shipment" }
////];
////var noteItem = [
////    { text: "user" },
////    { text: "analytics" },
////    { text: "customers" },
////    { text: "search" },
////    { text: "favorites" },
////    { text: "additional" },
////    { text: "clients" },
////    { text: "orders" },
////    { text: "shipment" }
////];
////var kanBanItem = [
////    { text: 'Sample Data', url: 'View/KanBan/data.html', bulidFunction: BuildKanBanData },
////    { text: 'Box', url: 'View/KanBan/Box.html', bulidFunction:BuildKanBanBox}
////];
////var musicItem = [
////    { text: "Show" },
////    { text: "SY" }
////];

////var menuTabPanelItem = [
////    { ID: 1, title: 'Note', item: noteItem },
////    { ID: 2, title: 'KanBan', item: kanBanItem },
////];

var kanbandata =
{
    "Power": {
        "Power": {
            "Tai-Power": [{ name: 'A', value: 0.0, Process_Area: 'ECT_1' }, { name: 'B', value: 0.0, Process_Area: 'ECT_1' }, { name: 'C', value: 0.0, Process_Area: 'ECT_1' }, { name: 'D', value: 0.0, Process_Area: 'ECT_1' }, { name: 'E', value: 0.0, Process_Area: 'ECT_1' }, { name: 'F', value: 0.0, Process_Area: 'ECT_1' }],
            "Emergency": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "UPS": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "Sub-station": [{ value: 0.0, Process_Area: 'ECT_1' }]
        }
    },
    "JiXei": {
        "AMC": {
            "TS": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "HCL": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "NH3": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "TOC": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "CR": {
            "Temperature": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "Humidity": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "EXHAUST": {
            "E-BGR": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "E-SEX": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "PV": {
            "BE-PV": [{ value: 0.0, Process_Area: 'ECT_1' }]
        }
    },
    "PCW": {
        "LOOP3": {
            "TEMP": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "Pressure": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "LOOP5": {
            "TEMP": [{ value: 0.0, Process_Area: 'ECT_2' }],
            "Pressure": [{ value: 0.0, Process_Area: 'ECT_1' }]
        }
    },
    "UPW": {
        "LOOP4": {
            "Particle": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "Resistivity": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "SiO2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "TOC": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "DO": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "TEMP": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "Pressure": [{ value: 0.0, Process_Area: 'ECT_1' }]
        }
    },
    "Bulk gas": {
        "4 %HZ/N2": {
            "AGCM100": [{ value: 0.0, Process_Area: 'ECT_2' }],
            "AGCM101": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "BGCM301": [{ value: 0.0, Process_Area: 'ECT_1' }]
        }
    },
    "BGS": {
        "PAR": {
            "PMS": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "H2O": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "O2": [{ value: 0.0, Process_Area: 'ECT_3' }],
            "CO": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "CO2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "H2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "THC": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "Pressure": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "N2": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "PHE": {
            "PMS": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "H2O": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "O2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "CO": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "CO2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "H2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "THC": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "Pressure": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "N2": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "PN2": {
            "PMS": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "H2O": [{ value: 0.0, Process_Area: 'ECT_3' }],
            "O2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "CO": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "CO2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "H2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "THC": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "Pressure": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "N2": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "PO2": {
            "PMS": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "H2O": [{ value: 0.0, Process_Area: 'ECT_2' }],
            "AR": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "CO": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "CO2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "H2": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "THC": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "Pressure": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "N2": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "XCDA": {
            "PMS": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "H2O": [{ value: 0.0, Process_Area: 'ECT_3' }],
            "NH3": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "TS": [{ value: 0.0, Process_Area: 'ECT_1' }],
            "TOC": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "CDA": {
            "PT": [{ value: 0.0, Process_Area: 'ECT_1' }]
        },
        "GNZ": {
            "PT": [{ value: 0.0, Process_Area: 'ECT_1' }]
        }
    }
};