import { log } from './logger';

// eslint-disable-next-line no-self-compare
const prodDoc = 'yeatmanlab' === 'yeatmanlab' ? ['prod', 'roar-prod'] : ['external', 'yeatmanlab'];
// eslint-disable-next-line no-undef
const rootDoc = ROAR_DB_DOC === 'production' ? prodDoc : ['dev', 'my-roar-app'];

/* eslint-disable import/prefer-default-export */
export const roarConfig = {
  firebaseConfig: {
    apiKey: "AIzaSyAXWxaPnY9Rq7atpq2R8ykQgD5xmvM18Mk",
    authDomain: "giannaroar-a800d.firebaseapp.com",
    projectId: "giannaroar-a800d",
    storageBucket: "giannaroar-a800d.firebasestorage.app",
    messagingSenderId: "40290466629",
    appId: "1:40290466629:web:b03b15d91f42695d121c2c",
  },
  rootDoc: rootDoc,
};

// eslint-disable-next-line operator-linebreak
const logMessage =
  `This ROAR app will write data to the ${roarConfig.firebaseConfig.projectId} `
  + `Firestore database under the document ${rootDoc.join(' > ')}.`;
log.info(logMessage);
