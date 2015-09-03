country-codes-tz
--------------------------

Maps timezones to their respective countries.

Useful as:

  * A timezone list
  * A method of pre-populating a "country" selection, based on `Intl.DateTimeFormat().resolvedOptions().timeZone`


Usage
================

```
meteor add 3stack:country-codes-tz
```

Then Call

```js
CountryCodesTz.getTzList();
// where country matches tz name: {tz: "Australia/Brisbane", label: "Australia Brisbane"}
// when country doesn't match tz: {tz: "Asia/Kabul",         label: "Afghanistan [Asia Kabul]"}

CountryCodesTz.countryCodeFromTz('Australia/Brisbane');
// AU
```

