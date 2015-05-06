var ee = require('event-emitter');

var state = ee({});

var moduleParser = function(modules) {
    var yearFilter = /([0-9]{4}\/[0-9])\s*((?:[S|Y][0-9]\s*([A-Z]{2}[0-9]{4})\s*([A-Za-z\ ]*)\s*(–|P\(([0-9\.]*)\))\s*([0-9\.]*)\s*\n)*)/gmi;
    var yearsData = [];
    var m;
    while ((m = yearFilter.exec(modules)) !== null) {
        yearsData.push({
            year: m[1],
            data: m[0],
            modules: []
        });
    }
    yearsData.forEach(function(year) {
        var moduleFilter = /([S|Y][0-9]\s*([A-Z]{2}[0-9]{4})\s*([A-Za-z\ ]*)\s*(–|P\(([0-9\.]*)\))\s*([0-9\.]*)\s*$)/gmi;
        while ((m = moduleFilter.exec(year.data)) !== null) {
            year.modules.push({
                code:m[2],
                name:m[3],
                score: isNaN(parseFloat(m[5])) ? '-' : parseFloat(m[5]),
                possible: isNaN(parseFloat(m[6])) ? '-' : parseFloat(m[6])
            });
        }
    });
    return yearsData;
};

state.setModules = function(modules) {
    this.modules = moduleParser(modules);
    console.log(this.modules);
    this.emit("modules_update");
};

module.exports = state;