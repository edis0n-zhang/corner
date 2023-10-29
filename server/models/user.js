const sqlite3 = require('sqlite3').verbose();

class User {
    static create(username, email, password, callback) {
        const db = new sqlite3.Database('./database/users.db');
        db.run("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password], function(err) {
            callback(err, this.lastID); // Returns the last inserted row id
        });
        db.close();
    }
}

module.exports = User;
