import { AsyncStorage } from 'react-native';
import todoConstants from './Constants';

class TodoAPI {
    constructor() {
        this.storageStyle = todoConstants.STORAGE_LOCAL;
        this.storageKey = 'native_proj_';

    }

    getTodos() {
        switch (this.storageStyle) {
            case 'STORAGE_LOCAL':
                return this.getTodosLocal();
            case 'STORAGE_DB':
                return this.getTodosDB();
        }
    }

    setTodos(todos) {
        switch (this.storageStyle) {
            case 'STORAGE_LOCAL':
                return this.setTodosLocal(todos);
            case 'STORAGE_DB':
                return this.setTodosDB(todos);
        }
    }

    getTodosLocal(id = 0) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.storageKey + 'todos').then((todos, error) => {
                if (!error) {
                    if (todos) {
                        resolve(JSON.parse(todos));
                    }
                    else {
                        const todoItems = ['First Todo', 'Second Todo', 'Third Todo'];
                        this.setTodosLocal(todoItems.map(t => {
                            return {
                                id: ++id,
                                name: t,
                                completed: false
                            };
                        })).then((response, error) => {
                            if (error) {
                                reject(error);
                            }
                            resolve(response);
                        });
                    }
                }
            });
        })
    }

    setTodosLocal(todos = []) {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(this.storageKey + 'todos', JSON.stringify(todos), (error) => {
                if (error) {
                    reject(error);
                }
                resolve(todos);
            });
        });
    }

    getTodosDB() {
        return new Promise((resolve, reject) => {
            resolve([{
                id: 0,
                name: 'Todo from DB',
                completed: false
            }]);
        });
    }

}


export default new TodoAPI;