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
  
- Internet Explorer 10

  100 => 36ms  
  1000 => 41ms  
  10000 => 65ms-130ms  

Test case 2
-----------

[x] 10 messages / second
[-] updating same item  
[-] removeItem after onstorage  

- Chrome 29.0.1535.3 dev

  Message length / delay
  
  100 => 2ms  
  1000 => 3ms  
  10000 => 7ms  

- Internet Explorer 10

  100 =>  35 ms  
  1000 => 50 ms - 60 ms (growing)  
  10000 => 159 ms
  
* Almost not difference in IE between removing the item once it's received.


Test case 3:
------------

[x] 10 messages / second    
[x] updating same item
[-] removeItem after onstorage

- Chrome 29.0.1535.3 dev

  Message length / delay
  
  100 => 3ms  
  1000 => 4ms  
  10000 => 10ms  

- Internet Explorer 10

  100 => 32 ms  
  1000 => 33 ms  
  10000 => 35 ms  
