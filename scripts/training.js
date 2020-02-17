use training;
db.scores.find({"score":{$lt:60}})
db.scores.find({"score":{$lt:60}}).limit(5)
db.scores.find({$or:[{"kind":"exam"},{"kind":"quiz"}]})
//db.scores.insert({"_id":1,"kind":"taller","score":15,"student":5},{"_id":2,"kind":"taller","score":25,"student":4})
db.scores.insert({"_id":1,"kind":"taller","score":15,"student":5})
db.scores.insert({"_id":2,"kind":"taller","score":25,"student":4})
db.scores.find({$and:[{kind:"taller"},{student:{$lt:5}}]})
db.scores.find().limit(10).sort({"student":-1})
//db.scores.remove({}) same as db.scores.drop() (?)
db.stuff.insert({"_id":123,"hello":"world"})
db.stuff.update({"_id":123},{$set:{"hello":"si"}})
db.stuff.insert({"_id":124,"by":"no"})
//Replaces the document from field with id 123 for a new one (DOESN'T UPDATE, JUST DROPS IT AND CREATES A NEW ONE)
db.stuff.update({"_id":123},{"helo":"xa"})
db.stuff.update({"_id":123},{"casa":"no"})
db.scores.update({"_id:":1},{"score":35})
db.scores.update({"_id":2},{$set:{"score":35}})
db.scores.update({"_id":2},{$set:{"scor":12}})
db.scores.update({"_id":2},{$unset:{"score":12}})
//Upsert focus on the first condition
//		 _____________	si no existe lo crea
db.stuff.update({"nome":"luis"},{"edad":70},{upsert:true})
db.stuff.update({"_id":125},{"helo":"xi"},{upsert:true})
db.stuff.update({"helo":"xa"},{$set:{"casa":"no"}},{upsert:true})
db.stuff.update({"_id":125},{$set:{"helo":"xa"}})
// Only updates the first coincidence
db.stuff.update({"helo":'xa'},{$set:{"tel":111111}})
// For update all documents with that coincidence
db.stuff.update({"helo":'xa'},{$set:{"tel":222222}},{multi:true})