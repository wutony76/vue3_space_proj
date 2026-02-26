import { initializeApp } from 'firebase/app'
import { getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || '',
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.VUE_APP_FIREBASE_APP_ID || ''
}

// 避免重複初始化
let app = null
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
}

export { app }
export default app
