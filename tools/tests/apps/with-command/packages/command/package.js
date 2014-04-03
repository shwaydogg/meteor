Package.describe({
  summary: "testing",
  version: "1.0.0"
});

Package.on_use(function (api) {
  api.add_files('foo.js');
  api.export('main', 'server');
});
