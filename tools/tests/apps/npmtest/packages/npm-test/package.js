Npm.depends({"meteor-test-executable": "0.0.1"});

Package.describe({
	version: "1.0.0",
	summary: "npm test package"
});

Package.on_use(function (api) {
  api.add_files("npmtest.js", "server");
});
