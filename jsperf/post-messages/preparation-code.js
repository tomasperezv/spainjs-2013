/**
 * Preparation code for a jsperf test
 * Current document initializes an IFrame. We send postMessages to it.
 * @see http://jsperf.com/postmessage-test23/5
 */
Benchmark.prototype.setup = function() {

    /**
     * @method sendMessage
     * @public
     */
    var sendMessage = (function() {

        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        iframe.contentDocument.write('<html><head><script>onmessage = function(e) { e.source.postMessage(e.data, \'*\') };<' + '/script><' + '/head><' + '/html>');

        return function(msg) {
            window.onmessage = function() {
                // We are not checking the origin of the message,
                // but it's specially important to do it in a normal
                // implementation.
                deferred.resolve();
            };

            // We are not setting the targetOrigin, notice that
            // in a normal setup we would need it.
            iframe.contentWindow.postMessage(msg, '*');
        };

    })();

    /**
     * @return {String}
     * @method randomString
     * @param {Integer} size
     * @public
     */
    var randomString = function(size) {
        if (typeof size === 'undefined') {
            size = 50;
        }

        var text = "",
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < size; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    };

    // Prepare the strings, we don't want to affect to the tests
    // results in any way.
    var string1 = randomString(),
        string2 = randomString(100),
        string3 = randomString(500),
        string4 = randomString(1000),
        string5 = randomString(10000);

};
