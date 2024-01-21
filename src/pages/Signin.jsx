import React, {useState} from 'react';
import SignInBody from '../components/signin/Signinbody';
import SignInHeader from '../components/signin/Signinheader';
import SignInFooter from '../components/signin/Signinfooter';
 
export default function SignIn() {
    return(
        <main className="flex flex-col space-y-1 pt-20 pb-20">
            <section className="flex flex-col items-center">
                <SignInHeader />
            </section>
            <section className="flex flex-col items-center">
                <SignInBody />
            </section>
            <section className="flex flex-col w-full fixed bottom-0">
                <SignInFooter />
            </section>
        </main>
    );
}