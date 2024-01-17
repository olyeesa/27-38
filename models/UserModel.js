
class UserModel {
    async getUsers() {
      // Получить список пользователей
    }
  
    async createUser(userData) {
      // Создать нового пользователя
    }
  
    async updateUser(id, userData) {
      // Обновить информацию пользователя по id
    }
  
    async deleteUser(id) {
      // Удалить пользователя по id
    }
  
    async asyncFunction() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Async function completed');
        }, 2000);
      });
    }
  
    sum(a, b) {
      return a + b;
    }
  }
  
  module.exports = UserModel;