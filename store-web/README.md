# BONOBOS - Store Web Application

This a is a simple ReactJS application that consumes the sample Bonobos Store API.

This document covers the following:

1. Areas of Importance

2. Points of Pride

3. Areas to Improve



### Areas of Importance

* The inventory for each product is originally 42 items. In order to showcase the badges in the *Show/Hide Inventory* buttons, I decided to randomize the size of the list in the client. I am still pulling **ALL** inventory records for each product.
* I took the liberty of capitalizing the names of products and styles. This too happens on the client. The original names remain as they were on the server.
* For the sake of expediency, Bootstrap 4 was added the old fashion way using a CDN and not leveraging a package.
* I leveraged the Create React Appl library in order to get this up and running rather quickly.



### Points of Pride

* For the most part I keep a pretty good separation of components with only one container running the show. I would have preferred to use another container for the inventory but because this is a small app and because I only have one endpoint that lumps the product along with its inventory, I thought this would suffice for now. More on this below.

* Got it done pretty quickly. 



### Areas to Improve

* Test Test Test. For the sake of expediency, I decided to forgot unit testing. **This is not something I make a habbit of doing**.

* As mentioned above, I would have preferred to hit a second endpoint for each product's inventory. Since the API eager loads each products inventory and lumps it up with the product, I was not able to do that. Expediency over good design won in this regard.

* With a little bit omre time, I would have done a bit more error checking. I am, after all, consuming an external resource; some error checking particularly around that feature would have been a welcomed addition.

* While I am mostly satisfied with the breakdown of containers and components, I would have loved to have a little bit more time to refactor the 'Show/Hide Inventory' button into its own component. While not essential, that change would've served to clean up the product component a bit.
