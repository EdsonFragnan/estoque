const connect = require('../config/db');
const operations = require('./operacoes');
const access = (callback) => {
  connect.connection((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {

  findOne: (request, callback) => {
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execFindOne(db, request, (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  findAvisos: (collect, cpf, callback) => {
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execFindAvisos(db, collect, cpf, (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  find: (collectionAccess, callback) => {
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execFind(db, collectionAccess, (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  insertOne: (request, collectionAccess, callback) => {
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execInsertOne(db, collectionAccess, request, (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  deleteOne: (request, collectionAccess, callback) => {
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execDeleteOne(db, collectionAccess, request, (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  updateOne: (request, collectionAccess, callback) => {
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execUpdateOne(db, collectionAccess, request, (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },


};
