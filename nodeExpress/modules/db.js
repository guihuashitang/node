//mongodb数据库
const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const DbUrl = 'mongodb://localhost:27017/';
var ObjectID = require('mongodb').ObjectID;

function _connectDb(callback) {

  MongoClient.connect(DbUrl, {
    useNewUrlParser: true
  }, (err, client) => {
    // assert.equal(null, err);
    if (err) {
      console.log('链接失败', err)
      return
    }

    callback(client)



  })
}


module.exports = {
  find: find,
  insert: insert,
  updata: updata,
  deleteData: deleteData,
  ObjectID
}


//查找
function find(collectionname, json, callback) {

  _connectDb(function (client) {

    var db = client.db("productMall");
    let result = db.collection(collectionname).find(json)

    result.toArray(function (error, data) {
      if (error) {
        return
      }
      client.close();
      return callback(data)


    })
  })
}

//增加
function insert(collectionname, json, callback) {

  _connectDb(function (client) {

    var db = client.db("productMall");
    db.collection(collectionname).insertOne(json, function (error, data) {
      if (error) {
        return
      }
      callback(data)

    })
  })
}

//修改
function updata(collectionname, json1, json2, callback) {

  _connectDb(function (client) {

    var db = client.db("productMall");
    db.collection(collectionname).updateOne(json1,{$set: json2} , function (error, data) {
      if (error) {
        console.log('updata error',error)
        return
      }
      callback(data)

    })
  })
}

//删除
function deleteData(collectionname, json, callback) {

  _connectDb(function (client) {

    var db = client.db("productMall");
    db.collection(collectionname).deleteOne(json, function (error, data) {
      if (error) {
        return
      }
      callback(data)

    })
  })
}


