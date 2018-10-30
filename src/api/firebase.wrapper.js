import firebase from 'firebase';
import firebaseKey from '../config/firebase.key';

firebase.initializeApp(firebaseKey.config);

const resources = {
  database: firebase.database(),
  storage: firebase.storage(),
  auth: firebase.auth()
};

const dataModule = {
  set: (path, obj) => {
    resources.database.ref(path).set(obj);
  },
  push: (path, obj) => {
    resources.database.ref(path).push(obj);
  },
  update: (path, obj) => {
    resources.database.ref(path).update(obj);
  },
  get: async path => resources.database.ref(path).once('value'),
  remove: path => resources.database.ref(path).remove(),
  getUniqueKey: path => resources.database.ref(path).push().key
};

const storageModule = {
  getReference: path => resources.storage.ref(path),
  upload: async (path, file) => resources.storage.ref(path).put(file),
  dowonload: async path => resources.storage.ref(path).getDownloadURL(),
};

const authModule = resources.auth;

export { dataModule, authModule, storageModule };
