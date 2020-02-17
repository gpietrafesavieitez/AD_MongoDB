use baseexemplo;
db.persoas.insert({"nome":"luis","numeros":[23,56,89]})
db.persoas.remove({"nome":"luis"})
db.persoas.insert({"nome":"luis","numeros":[23,56,89]})
db.persoas.insert({"nome":"ana","edad":31,"numeros":[50,36,12,15],"direccion":{"rua":"urzaiz","numero":24,"piso":3,"porta":"a"}})
db.persoas.insert({"nome":"felix","edad":40,"direccion":{"rua":"faisan","numero":14,"piso":1}})
db.persoas.find({"direccion.rua":"faisan"})
db.persoas.find({"nome":{$eq:"luis"}})
//noequal(ne) lists any result without condition or fields in it
db.persoas.find({"edad":{$ne:31}})
//$in looks up for all elements in a conjunto
db.persoas.find({"nome":{$in:["ana","luis"]}})
db.persoas.find({"edad":{$nin:[31,40]}})
db.persoas.find({"edad":{$gt:30}})
db.persoas.find({"edad":{$not:{$gt:31}}})
db.persoas.find({$nor:[{"edad":40},{"nome":"ana"}]})
db.persoas.find({$nor:[{"edad":30},{"edad":{$exists:false}},{"nome":"ana"},{nome:{$exists:false}}]})
db.persoas.find({"edad":{$exists:true,$nin:[30,40]}})
db.persoas.find({"edad":{$gt:30}},{"nome":1,"edad":1,"_id":0})
//Show all fields except name from all documents where edad is greater than 31 or nome equals to "ana"
db.persoas.find({$or:[{"edad":{$gt:31}},{"nome":"ana"}]},{"nome":0})
//Sorting as/descending
db.persoas.find().sort({nome:-1})
//Show first N results
db.persoas.find().limit(2).sort({nome:1})
db.persoas.find().sort({edad:-1}).limit(1)
