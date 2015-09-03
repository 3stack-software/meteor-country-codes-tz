CountryCodesTz = {

  _enhancedTzList: null,

  _countriesByTimezone: countriesByTz,

  countryCodeFromTz: function(timezone){
    return this._countriesByTimezone[timezone];
  },


  getTzList: function(){
    if (this._enhancedTzList == null){
      this._enhancedTzList = this._generateTzList();
    }
    return this._enhancedTzList;
  },

  _generateTzList: function(){
    var timezones = _.map(moment.tz.names(), function(tz) {
      var countryCode, countryName, label, tzParts;
      countryCode = this.countryCodeFromTz(tz);
      tzParts = tz.split('/');
      label = tzParts.join(' ');
      if (countryCode != null) {
        countryName = CountryCodes.countryName(countryCode);
        if (tzParts[0] !== countryName) {
          label = countryName + " [" + label + "]";
        }
      }
      return {
        tz: tz,
        label: label
      };
    }.bind(this));

    timezones.sort(function(a, b) {
      if (a.label > b.label) {
        return 1;
      }
      if (a.label < b.label) {
        return -1;
      }
      return 0;
    });
    return timezones;
  }
};
