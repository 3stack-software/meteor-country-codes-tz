Package.describe({
  name: '3stack:country-codes-tz',
  version: '0.1.0',
  summary: 'A library to guess or lookup a country based on a timeozne',
  git: 'https://github.com/3stack-software/meteor-country-codes-tz',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@0.9.2');

  api.export('CountryCodesTz');

  api.use([
    '3stack:country-codes@0.1.1',
    'momentjs:moment@2.10.3',
    'risul:moment-timezone@0.3.1_1'
  ]);
  api.addFiles([
    'country-code-tz.js',
    'country-code-tz-common.js'
  ]);

});
