const db = require('../db').get();
const TABLE_NAME = 'home_ip';

exports.getAll = function() {
  return db.get(`SELECT * FROM ${TABLE_NAME}`);
};

const get = exports.get = function(name) {
  return db.get(`SELECT * FROM ${TABLE_NAME} WHERE name = ?`, name);
};

exports.save = function(name, ip) {
  return get(name)
    .then(data => {
      console.log('save', data);
      if (!data) {
        return db.run(`INSERT INTO ${TABLE_NAME} (name, ip) VALUES (?, ?)`, name, ip);
      } else {
        return db.run(`UPDATE ${TABLE_NAME} SET ip = ? WHERE name = ?`, ip, name);
      }
    });
};
