import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from '@chakra-ui/react';
import { AlertIcon } from '@chakra-ui/react';
import { AlertTitle } from '@chakra-ui/react';
import { AlertDescription } from '@chakra-ui/react'

const SignInBody = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleGoogle = (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        console.log('Google button clicked');
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate('/dashboard');
            })
            .catch((error) => {
                console.log("error signing in with google")
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/")
                console.log(user);
                setMessage({ error: false, msg: "Welcome!" });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setMessage({ error: true, msg: "Incorrect username or password." });
            });

    }

    return (
        <>
            <main >
                <section>
                    <div>
                        <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl md:text-gray-800 mt-14 text-center">
                            Sign In.
                        </h1>
                        <form class="max-w-md mx-auto">
                            <div class="relative z-0 w-full mb-5 group mt-10">
                                <input type="email" name="floating_email" id="floating_email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder=" " class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>

                            <div class="relative z-0 w-full mb-5 mt-8 group">
                                <input type="password" name="floating_password" id="floating_password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="text-black mt-8 hover:bg-sky-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto block"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>

                        <div className="flex justify-center items-center mt-8">
                            <button type="button" onClick={handleGoogle} className="visible text-black ring-1 ring-black bg-blue-500 hover:bg-sky-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-700 mr-2 mb-2">
                                <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                Sign in with Google
                            </button>
                        </div>

                        <div className="mt-12 mb-7 text-center"> <p>
                            Don't have an account?{' '}
                            <NavLink
                                to="/signup"
                                className="text-black hover:bg-sky-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-3 mb-2"
                            >
                                Sign Up
                            </NavLink>

                        </p></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SignInBody