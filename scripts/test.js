use test
db.books.find({"_id":1})
//increments
db.books.update({"_id":1},{$inc:{"stock":5}})
db.books.update({"_id":1},{$inc:{"stock":3},$set:{"item":'ABC',"info.publisher":'2222',"tags":['software'],"ratings.1":{by:'xyz',rating:3}}})
