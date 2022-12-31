import { initializeApp } from 'firebase/app'
import {
	signInWithPopup,
	getAuth,
	GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBN66lw5ZC6BocTQM0VNC6uJenrOK-OAg4',
	authDomain: 'react-chat-6658f.firebaseapp.com',
	projectId: 'react-chat-6658f',
	storageBucket: 'react-chat-6658f.appspot.com',
	messagingSenderId: '33768616449',
	appId: '1:33768616449:web:4e5f8c6ee45864b2cf4600',
}

const app = initializeApp(firebaseConfig)

const loginWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider()
		const auth = getAuth

		const { user } = await signInWithPopup(auth, provider)

		return { uid: user.uid, displayName: user.displayName }
	} catch (error) {
		if (error.code !== 'auth/cancelled-popup-request') {
			console.log(error)
		}

		return null
	}
}

export { loginWithGoogle }
