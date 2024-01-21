import React from 'react';
import SignUpHeader from '../components/signup/Signupheader';
import SignUpFooter from '../components/signup/Signupfooter';
import SignUpBody from '../components/signup/Signupbody';

export default function Signup() {
    return (
        <main className="flex flex-col space-y-1 pt-20 pb-20">
            <section className="flex flex-col items-center">
                <SignUpHeader />
            </section>
            <section className="flex flex-col items-center">
                <SignUpBody />
            </section>
            <section className="flex flex-col w-full fixed bottom-0">
                <SignUpFooter />
            </section>
        </main>
    );
}