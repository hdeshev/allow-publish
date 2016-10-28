#!/usr/bin/env node
"use strict";
var withPackageJson = require("./lib").withPackageJson;

withPackageJson("allow-publish", function(config) {
    config.private = false;
});
