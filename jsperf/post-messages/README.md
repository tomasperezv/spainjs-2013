Cross-platform application development: post messages length
============================================================

Overview
--------
[SpainJS](http://spainjs.org/)

We want to see the number of messages we can send depending on the size of the message, and how that evolves depending on the browser.

[Run test/See results](http://jsperf.com/postmessage-test23/5)

Comments
--------
- In the most of the browsers, the speed is pretty similar, so the performance is not affected depending on the message length.
- There is a big difference between the number of post messages that browsers can send.
