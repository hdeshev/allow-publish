#!/usr/bin/env node
"use strict";
var withPackageJson = require("./lib").withPackageJson;

withPackageJson("remove-prepublish", function(config) {
    if (config.scripts && config.scripts.prepublish) {
        delete config.scripts.prepublish;
    }
});

