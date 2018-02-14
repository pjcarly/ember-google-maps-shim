'use strict';

module.exports = {
  name: 'google-maps-shim',

  contentFor: function(type, config) {
    var content = '';

    if (type === 'head') {
      var src = '//maps.googleapis.com/maps/api/js';
      var googleMapsConfig = config['googleMaps'] || {};
      var params = [];

      var key = googleMapsConfig.key;
      if (key) {
        params.push('key=' + encodeURIComponent(key));
      }

      var version = googleMapsConfig.version;
      if (version) {
        params.push('v=' + encodeURIComponent(version));
      }

      var client = googleMapsConfig.client;
      if (client) {
        params.push('client=' + encodeURIComponent(client));
      }

      var channel = googleMapsConfig.channel;
      if (channel) {
        params.push('channel=' + encodeURIComponent(channel));
      }

      var libraries = googleMapsConfig.libraries;
      if (libraries && libraries.length) {
        params.push('libraries=' + encodeURIComponent(libraries.join(',')));
      }

      var language = googleMapsConfig.language;
      if (language) {
        params.push('language=' + encodeURIComponent(language));
      }

      var protocol = googleMapsConfig.protocol;
      if (protocol) {
        src = protocol + ':' + src;
      }

      src += '?' + params.join('&');
      content = '<script type="text/javascript" src="' + src + '"></script>';

      var exclude = googleMapsConfig.exclude;
      if (exclude) {
        content = ''
      }
    }

    return content;
  }
};
