#!/usr/bin/env node
"use strict";

var fs = require("fs");

var packageConfigs = process.argv.filter(function(arg) {
    return /\.json$/.test(arg);
}).map(function(arg) {
    return arg.trim();
});

console.log("allow-publish: " + packageConfigs);

packageConfigs.forEach(function(packageConfigPath) {
    var contents = fs.readFileSync(packageConfigPath, "utf8");
    var config = JSON.parse(contents);
    config.private = false;

    fs.writeFileSync(packageConfigPath, JSON.stringify(config, null, "    "));
});
