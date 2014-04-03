Package.describe({
  summary: "another program, for testing",
  version: "1.0.0"
});

Package.on_use(function (api) {
  api.add_files(["other.js"], 'server');
});
