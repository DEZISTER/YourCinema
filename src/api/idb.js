const DB_NAME = 'authdb'
const STORAGE_NAME = 'authData'
const DB_VERSION = 1
let DB
export default {
  async getDb () {
    return new Promise((resolve, reject) => {
      if (DB) {
        return resolve(DB)
      }
      const request = window.indexedDB.open(DB_NAME, DB_VERSION)
      request.onerror = e => {
        console.log('Error opening db', e)
        reject('Error')
      }
      request.onsuccess = e => {
        DB = e.target.result
        resolve(DB)
      }
      request.onupgradeneeded = e => {
        let db = e.target.result
        db.createObjectStore(STORAGE_NAME, { autoIncrement: true, keyPath: 'id' })
      }
    })
  },
  async deleteUser (user) {
    const db = await this.getDb()
    return new Promise(resolve => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite')
      trans.oncomplete = () => {
        resolve()
      }
      const store = trans.objectStore(STORAGE_NAME)
      store.delete(user.id)
    })
  },

  async getUser (user) {
    const db = await this.getDb()
    return new Promise(resolve => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite')
      trans.oncomplete = () => {
        resolve(userData)
      }
      const store = trans.objectStore(STORAGE_NAME)
      let userData = false
      store.openCursor().onsuccess = e => {
        const cursor = e.target.result
        if (cursor) {
            if (cursor.value.email == user.email && cursor.value.password == user.password) {
                userData = true
            }
          cursor.continue()
        }
      }
    })
  },

  async getUsers () {
    let db = await this.getDb()
    return new Promise(resolve => {
      let trans = db.transaction([STORAGE_NAME], 'readonly')
      trans.oncomplete = () => {
        resolve(users)
      }
      const store = trans.objectStore(STORAGE_NAME)
      const users = []
      store.openCursor().onsuccess = e => {
        const cursor = e.target.result
        if (cursor) {
          users.push(cursor.value)
          cursor.continue()
        }
      }
    })
  },
  async saveUser (user) {
    let db = await this.getDb()
    return new Promise(resolve => {
      let trans = db.transaction([STORAGE_NAME], 'readwrite')
      trans.oncomplete = () => {
        resolve()
      }
      let store = trans.objectStore(STORAGE_NAME)
      store.put(user)
    })
  }
}