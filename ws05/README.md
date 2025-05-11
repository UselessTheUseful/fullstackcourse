API for doing CRUD operations on a mongodb database.
Tank schema
{
  "name": ,
  "type": ,
  "cannon": {
    "name": ",
    "caliber": ,
    "stabilizer":
  },
  "engine": {
    "name": ,
    "hp": ,
    "max_speed": {
      "forward" : ,
      "reverse" :
    }
  },
  "weight":
}

GET /api/getall
Returns an array containing all tank objects in the databe.

GET /api/:id
Return a specific tank based on the id provided in the path variable.

POST /api/add
Add a tank to the database based on json document provided in the request body. (remember the schema).

PATCH /api/update/:id
Updates a tank in the database with the data provided in the request body, based on the id provided in the path variable. Returns the updated tank document.

DELETE /api/delete/:id
Delete a tank from the database based on the id provided in the path variable.
