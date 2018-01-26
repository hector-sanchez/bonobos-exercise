# BONOBOS - Store API

This is a small, sample store API with a singular endpoint that renders a list of products along with their inventory. In addition, the project contains an import task to load products and inventory.

The documentation covers the following:

1. Data Import

2. API Endpoint

3. Points of Pride

4. Areas to Improve



### Data Import
---------------

The data import consists of importing two *csv* files, one for products and the other for their corresponding inventory items. 
The application model is composed by two classes a Product class and an Inventory class where a product *has many* inventory items and one inventory item *belongs to* a product. 
To run the import, run the following command in the terminal from the root of the application: 

```
rake import:product_inventory['./products.csv, ./inventory.csv']
```

##### Areas of Notice

* If a product or inventory item already exists in the database, all attributes with the exception of the ID are updated fr the product; for the inventory only the count is updated.

* There is almost zero validation or checks. Failing to provide a file or providing an invalid file, will crash the import. More on this below.

* I suffered formatting issues with the import files. I had to work on them to get them to be true .csv files. I am not sure why. So, in order to run a successful import, you'll need to download the files at the root of this repo and use them for the import. 




### API Endpoint
-----------------

There is only one endpoint:

```/products```

Each product includes its corresponding inventory items.



### Points of Pride
--------------------

There are few things to be incredibly proud of, as this is a very small app. One thing that jumps to mind it's a component of the import. I am leveraging the activerecord-import gem. This tool allows us to run batch imports so that I only make two trips to the database to import all the data. 



### Areas to Improve
---------------------

If I had more time, there are a few things I will change/improve:

**Data Import**
  * As I mentioned above, there are very few chcecks in the import process. In fact, entering an invalid file or missing a file entirely breaks the import. This is definitely something I would address had I more time to work on this. 
  * Following up on the point above, the test coverage for the import is insufficient. This however, is in part because the import as it is covers only a happy path.
  * Also, I mentioned above the import leverages the activerecord-import gem to run batch imports. One issue with this gem is that it suffers with performance issues as the number of records jumps into the several hundreds. So, for larger imports, I will have to break the call to import into chunks. This is still far better than the alternative, however.
  
  **API Endpoint(s)**
  * I would create another enpoint for the inventory items for a given product, and call that endpoint when the user requests to see the available inventory items for a given product. As it is, it seems potentially inefficient because we are returning way to much data  per request.
  
I am sure there are other things I would do much better had I have more time. 
