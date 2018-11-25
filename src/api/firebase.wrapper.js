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
  get: async (path) => resources.database.ref(path).once('value'),
  remove: path => resources.database.ref(path).remove(),
  getUniqueKey: path => resources.database.ref(path).push().key,
  genData: path => {
    for (let i=0; i<200; i++) {
      const obj = {
        gender: Math.random()*2>1 ? '남자':'여자',
        resLocation: '서울특별시',
        poll: {
          0: parseInt(Math.random()*5 + 1),
          1: parseInt(Math.random()*4 + 1),
          2: parseInt(Math.random()*5 + 1),
          3: parseInt(Math.random()*4 + 1),
          4: parseInt(Math.random()*3 + 1),
          5: parseInt(Math.random()*6 + 1),
          6: parseInt(Math.random()*6 + 1),
          7: parseInt(Math.random()*6 + 1)
        }
      };
      resources.database.ref('/resList/-LS4HX3UDSdh3jKbdPfU').push(obj);
    }
  }
};

const storageModule = {
  getReference: path => resources.storage.ref(path),
  upload: async (path, file) => resources.storage.ref(path).put(file),
  dowonloadUrl: async path => resources.storage.ref(path).getDownloadURL()
};

const authModule = resources.auth;

export { dataModule, authModule, storageModule };
