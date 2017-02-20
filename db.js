const path = require('path');
const db = require('sqlite');

exports.open = function() {
  return db.open(path.join(__dirname, './db/ip.db'));
};

exports.get = function() {
  return db;
};

exports.close = function() {
  return db.close();
};
