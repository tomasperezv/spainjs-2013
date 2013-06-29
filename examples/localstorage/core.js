// Initialize the Spotify namespace if needed.
var Spotify = (Spotify || {});

/**
 * @class {Spotify.Example.LocalStorage}
 * @author Tomas Perez <tom@0x101.com>
 */
Spotify.Example = (function(namespace) {

    namespace.LocalStorage = {

        /**
         * @type {Object} _params
         * @private
         */
        _params: {},

        /**
         * Store default values for the parameters.
         *
         * @type {Object} _defaults
         * @private
         */
        _defaults: {

            /**
             * Default value for the number of messages per second
             * @type {Integer} NUMBER_MESSAGES
             */
            NUMBER_MESSAGES: 100,

            /**
             * Default message size.
             * @type {Integer} SIZE 
             */
            SIZE: 300,
        },

        /**
         * @param {Integer} size
         * @return {String}
         * @method _generateMessage
         * @private
         */
        _randomString: function(size) {

            var result = '',
                possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

                for (var i = 0; i < size; i++) {
                    result += possible.charAt(Math.floor(Math.random() * possible.length));
                }

                return result;

            },

        /**
         * @param {Object} params
         * @method _processParams
         * @private
         */
        _processParams: function(params) {

            if (typeof params === 'undefined') {
                params = {};
            }

            this._params = {
                numberOfMessages: params.numberOfMessages || this._defaults.NUMBER_MESSAGES,
                size: params.size || this._defaults.SIZE
            };

        },

        /**
         * @method _getTimestamp
         * @public
         */
        getTimestamp: function() {
            return Date.now();
        },

        /**
         * @method _writeRandomItem 
         * @private
         */
        _writeRandomItem: function() {

            var itemKey = 'key-' + this._randomString(5),
                contentObject = {
                    body: this._randomString(this._params.size),
                    timestamp: this.getTimestamp()
                };

            window.localStorage.setItem(itemKey, JSON.stringify(contentObject));

        },

        /**
         * Simple gateway to receive and send back messages through
         * localStorage.
         *
         * @method listen
         * @public
         */
        listen: function(onMessageReceived) {

            var self = this;

            /**
             * @param {Event} storageEvent
             */
            window.onstorage = function(storageEvent) {

                var currentTime = self.getTimestamp();

                if (typeof onMessageReceived === 'function') {

                    // In a real world we'd need to try/catch to detect
                    // corrupted JSON.
                    var data = JSON.parse(storageEvent.newValue),
                        milliseconds = (currentTime - data.timestamp);

                    onMessageReceived(milliseconds);

                }

            };

        },

        /**
         * @param {Object} params
         * @param {Function} onMessageBack 
         * @method send
         * @public
         */
        send: function(params, onMessageBack) {
            this._processParams(params);

            var self = this;
            window.setInterval(function() {
                for (var i = 0; i < self._params.numberOfMessages; i++) {
                    self._writeRandomItem();
                }
            }, 1000);

        }

    };

  return namespace;

})(Spotify.Example || {});
