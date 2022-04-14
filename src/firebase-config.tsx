import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export function configure() {
  const firebaseConfig = {
    apiKey: 'AIzaSyAS3yTswFT-RW-qC6fsjJPpUlJ_66uWGpg',
    authDomain: 'troydle-f1631.firebaseapp.com',
    projectId: 'troydle-f1631',
    storageBucket: 'troydle-f1631.appspot.com',
    messagingSenderId: '526594911155',
    appId: '1:526594911155:web:b90e595e18e7ee0a0b39c6',
    measurementId: 'G-VS1GWD574M',
  }

  const app = initializeApp(firebaseConfig)
}
