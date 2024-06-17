import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');
// Создание таблицы пользователей
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)'
  );
});

// Метод для проверки введенных данных
const checkLoginCredentials = (email, password, onSuccess, onError) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'SELECT * FROM Users WHERE email = ? AND password = ?',
        [email, password],
        (_, { rows }) => {
          if (rows.length > 0) {
            onSuccess();
          } else {
            onError();
          }
        }
      );
    },
    onError
  );
};

const insertUser = (email, password, onSuccess) => {
  db.transaction(
    tx => {
      tx.executeSql('INSERT INTO Users (email, password) VALUES (?, ?)', [email, password], (_, result) => {
        if (result.rowsAffected > 0) {
          onSuccess();
        } else {
          // Обработка ошибки при вставке данных
        }
      });
    },
    // Обработка ошибок транзакции
  );
};

export { insertUser };

export { checkLoginCredentials };