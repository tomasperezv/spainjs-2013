Local storage notification delay
================================

Overview
--------
[SpainJS](http://spainjs.org/)

We want to analyze the time to receive the onstorage notification across tabs, between different browsers.


Test case 1
-----------

[x] 10 messages / second
[-] updating same item
[x] removeItem after onstorage

- Chrome 29.0.1535.3 dev

  Message length / delay

  100 => 3ms
  1000 => 3ms
  10000 => 7ms
  
- Internet Explorer 9 

  100 => 
  1000 => 
  10000 =>

Test case 2
-----------

[x] 10 messages / second
[x] Chrome 29.0.1535.3 dev
[-] updating same item
[-] removeItem after onstorage

- Chrome 29.0.1535.3 dev

  Message length / delay
  
  100 => 2ms
  1000 => 3ms
  10000 => 7ms

- Internet Explorer 9 

  100 => 
  1000 => 
  10000 =>

Test case 2:

[x] 10 messages / second
[x] Chrome 29.0.1535.3 dev
[x] updating same item

- Chrome 29.0.1535.3 dev

  Message length / delay
  
  100 => 3ms
  1000 => 4ms
  10000 => 10ms

- Internet Explorer 9 

  100 => 
  1000 => 
  10000 =>
