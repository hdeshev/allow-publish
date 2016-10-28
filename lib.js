var fs = require("fs");

exports.withPackageJson = function(actionName, changeAction) {
    var packageConfigs = process.argv.filter(function(arg) {
        return /\.json$/.test(arg);
    }).map(function(arg) {
        return arg.trim();
    });

    if (packageConfigs.length === 0) {
        throw new Error("You need to specify a package.json path.");
    }

    packageConfigs.forEach(function(packageConfigPath) {
        console.log(actionName + ": " + packageConfigPath);
        var contents = fs.readFileSync(packageConfigPath, "utf8");

        var config = JSON.parse(contents);
        console.log("Package name: " + config.name);

        changeAction(config);

        fs.writeFileSync(packageConfigPath, JSON.stringify(config, null, "    "));
    });
}
