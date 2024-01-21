import { Alert } from '@chakra-ui/react';
import { AlertIcon } from '@chakra-ui/react';
import React, { useState, Fragment, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import supabase from '../../services/supabase';
import { Dialog, Transition } from "@headlessui/react";
import Succeeded from './Success';

const ContactBody = () => {

    const [openSuccess, setOpenSuccess] = useState(false);
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");   

    return (
        <>
            <main >
                <section>
                    <div>
                        <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl md:text-gray-800 mt-5 text-center">
                            Contact Us
                        </h1>
                        <p class="mt-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
                        <section class="bg-white dark:bg-gray-900 mt-[-30px]">
                            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <form action="#" class="space-y-8">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                        <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                                    </div>
                                    <div>
                                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                        <input onChange={(e) => setSubject(e.target.value)} name="subject" type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                        <textarea onChange={(e) => setMessage(e.target.value)} name="message" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button onClick={async (e) => {
                    e.preventDefault();

                    if (!email) {
                        alert('Please fill out your email.');
                        return;
                    }

                    if (!subject) {
                        alert('Please fill out the subject.');
                        return;
                    }

                    setOpenSuccess(true);

                    const { data, error } = await supabase
                        .from("contact-us")
                        .insert([
                            {
                                email,
                                subject,
                                message
                            },
                        ]);
                    if (error) {
                        console.log(error);
                    }
                    if (data) {
                        console.log(data);
                    }
                }} type="button" className="visible text-black ring-1 ring-black bg-blue-500 hover:bg-sky-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-700 mr-2">
                                            Contact Us
                                        </button>
                                        {openSuccess && <Succeeded open={openSuccess} setOpen={setOpenSuccess} />}
                                    </div>
                                </form>
                            </div>

                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ContactBody