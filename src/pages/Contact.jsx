import React, {useState} from 'react';
import ContactBody from '../components/contact/Contactbody';
import ContactHeader from '../components/contact/Contactheader';
import ContactFooter from '../components/contact/Contactfooter';
 
export default function Contact() {
    return(
        <main className="flex flex-col space-y-1 pt-20 pb-20">
            <section className="flex flex-col items-center">
                <ContactHeader />
            </section>
            <section className="flex flex-col items-center">
                <ContactBody />
            </section>
            <section className="flex flex-col w-full fixed bottom-0">
                <ContactFooter />
            </section>
        </main>
    );
}