var ObjectId = require('mongodb').ObjectID;
module.exports = {
  execFindOne: (db, req, callback) => {
    const envio = {
      'matricula': req
    };
    db.collection('estoque_usuario').findOne(envio, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execFindAvisos: (db, collect, req, callback) => {
    db.collection(collect).find({id_cadastro: {$eq:req}}).toArray((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },


  execFind: (db, collectionAccess, callback) => {
    db.collection(collectionAccess).find().toArray(function(err, items) {
       if (err) {
         callback(err, null);
       } else {
         callback(null, items);
       }
    });
  },

  execInsertOne: (db, collectionAccess, request, callback) => {
    db.collection(collectionAccess).insert(request, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execDeleteOne: (db, collectionAccess, req, callback) => {
    db.collection(collectionAccess).deleteOne(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execUpdateOne: (db, collectionAccess, req, callback) => {
    const id = req._id;
    delete req._id;
    db.collection(collectionAccess).update({_id: new ObjectId(id)}, {$set:req}, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
}
