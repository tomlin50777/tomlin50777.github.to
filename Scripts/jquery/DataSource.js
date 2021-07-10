var menuTabItem = [
    { text: "user" },
    { text: "analytics" },
    { text: "customers" },
    { text: "search" },
    { text: "favorites" },
    { text: "additional" },
    { text: "clients" },
    { text: "orders" },
    { text: "shipment" }
];
var noteItem = [
    { text: "user" },
    { text: "analytics" },
    { text: "customers" },
    { text: "search" },
    { text: "favorites" },
    { text: "additional" },
    { text: "clients" },
    { text: "orders" },
    { text: "shipment" }
];
var kanBanItem = [
    { text: 'Sample Data', url: 'View/KanBan/Data.html', bulidFunction: BuildKanBanData },
    { text: 'Box', url: 'View/KanBan/Box.html', bulidFunction:BuildKanBanBox}
];
var musicItem = [
    { text: "Show" },
    { text: "SY" }
];

var menuTabPanelItem = [
    { ID: 1, title: 'Note', item: noteItem },
    { ID: 2, title: 'KanBan', item: kanBanItem },
];

var kanbandata =
{
    "Power": {
        "Power": {
            "Tai-Power": 0.0,
            "Emergency": 0.0,
            "UPS": 0.0,
            "Sub-station": 0.0
        }
    },
    "JiXei": {
        "AMC": {
            "TS": 0.0,
            "HCL": 0.0,
            "NH3": 0.0,
            "TOC": 0.0
        },
        "CR": {
            "Temperature": 0.0,
            "Humidity": 0.0
        },
        "EXHAUST": {
            "E-BGR": 0.0,
            "E-SEX": 0.0
        },
        "PV": {
            "BE-PV": 0.0
        }
    },
    "PCW": {
        "LOOP3": {
            "TEMP": 0.0,
            "Pressure": 0.0
        },
        "LOOP5": {
            "TEMP": 0.0,
            "Pressure": 0.0
        }
    },
    "UPW": {
        "LOOP4": {
            "Particle": 0.0,
            "Resistivity": 0.0,
            "SiO2": 0.0,
            "TOC": 0.0,
            "DO": 0.0,
            "TEMP": 0.0,
            "Pressure": 0.0
        }
    },
    "Bulk gas": {
        "4 %HZ/N2": {
            "AGCM100": 0.0,
            "AGCM101": 0.0,
            "BGCM301": 0.0
        }
    },
    "BGS": {
        "PAR": {
            "PMS": 0.0,
            "H2O": 0.0,
            "O2": 0.0,
            "CO": 0.0,
            "CO2": 0.0,
            "H2": 0.0,
            "THC": 0.0,
            "Pressure": 0.0,
            "N2": 0.0
        },
        "PHE": {
            "PMS": 0.0,
            "H2O": 0.0,
            "O2": 0.0,
            "CO": 0.0,
            "CO2": 0.0,
            "H2": 0.0,
            "THC": 0.0,
            "Pressure": 0.0,
            "N2": 0.0
        },
        "PN2": {
            "PMS": 0.0,
            "H2O": 0.0,
            "O2": 0.0,
            "CO": 0.0,
            "CO2": 0.0,
            "H2": 0.0,
            "THC": 0.0,
            "Pressure": 0.0,
            "N2": 0.0
        },
        "PO2": {
            "PMS": 0.0,
            "H2O": 0.0,
            "AR": 0.0,
            "CO": 0.0,
            "CO2": 0.0,
            "H2": 0.0,
            "THC": 0.0,
            "Pressure": 0.0,
            "N2": 0.0
        },
        "XCDA": {
            "PMS": 0.0,
            "H2O": 0.0,
            "NH3": 0.0,
            "TS": 0.0,
            "TOC": 0.0
        },
        "CDA": {
            "PT": 0.0
        },
        "GNZ": {
            "PT": 0.0
        }
    }
};