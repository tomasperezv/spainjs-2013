Local storage notification delay
================================

Overview
--------
[SpainJS](http://spainjs.org/)

We want to analyze the time to receive the onstorage notification across tabs, between different browsers.

* Messages / second: num of messages we write per second  
* Updating same item: reusing same item for sending messages vs creating new items for each.  
* Remove after onstorage: if we are creating new items, do we remove them once it's received?


Test case 1
-----------

[x] 10 messages / second  
[-] updating same item  
[x] removeItem after onstorage

- Chrome 29.0.1535.3 dev

  Message length / delay

  100 => 2ms  
  1000 => 3ms  
  10000 => 7ms  
  
- Internet Explorer 10

  100 => 35ms  
  1000 => 40ms  
  10000 => 72ms  
  
  
Test case 2
-----------

[x] 10 messages / second  
[-] updating same item  
[-] removeItem after onstorage  

- Chrome 29.0.1535.3 dev

  Message length / delay
  
  100 => 2ms  
  1000 => 2ms  
  10000 => 4ms

- Internet Explorer 10

  100 => 33ms  
  1000 => 37ms  
  10000 => 69ms
  

Test case 3:
------------

[x] 10 messages / second    
[x] updating same item  
[-] removeItem after onstorage

- Chrome 29.0.1535.3 dev

  Message length / delay
  
  100 => 1ms  
  1000 => 2ms  
  10000 => 2ms  

- Internet Explorer 10

  100 => 34ms  
  1000 => 32ms  
  10000 => 34ms
