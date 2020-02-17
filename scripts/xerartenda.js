use tenda
db.pedidos.drop()
var pedidos=
[
{
_id:"p1",
codcli:"c1",
codpro:"pro1",
cantidade:2,
data:"02/02/2011"
},
{
_id:"p2",
codcli:"c2",
codpro:"pro2",
cantidade:3,
data:"03/03/2011"
},
{
_id:"p3",
codcli:"c1",
codpro:"pro2",
cantidade:4,
data:"04/04/2011"
}
]
db.pedidos.insert(pedidos)
db.pedidos.insert({"_id":'p4',"codcli":'c1',"codpro":'pro3',"cantidade":5,"data":'02/02/2019'})
db.pedidos.update({"_id":'p3'},{$set:{"codpro":'pro4'}})
db.pedidos.update({"_id":'p2'},{$inc:{"cantidade":7}})
db.pedidos.find({"_id":'p3'})
db.pedidos.find({"_id":'p1'},{"_id":0,"data":0})
db.pedidos.find({"cantidade":{$gt:2}},{"_id":0,"codcli":1,"codpro":1})
db.pedidos.find({$and:[{"cantidade":{$gt:2}},{"cantidade":{$lt:5}}]},{"_id":0,"codcli":1,"codpro":1})
db.pedidos.find({},{"_id":0,"codcli":1,"codpro":1})
db.pedidos.update({"_id":'p4'},{$mul:{"cantidade":2}})
