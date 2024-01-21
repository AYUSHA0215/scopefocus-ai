import { Link } from 'react-router-dom';

export default function ContactFooter() {
    return (
        <footer className="pb-5 bg-gray-900 md:pt-10 w-full">
            <div className=" md:mx-10">
                <div className="text-gray-400">
                    <div className=" mt-1 mb-20 md:gap-28 md:grid-cols-3 items-center">
                        <div className="flex justify-center items-center w-full">
                            <ul className="flex space-x-20">
                                <a href="http://localhost:3000" className="mb-4 font-semibold text-white uppercase underline">
                                    Blog
                                </a>
                                <a href="signup" className="mb-4 font-semibold text-white uppercase underline">
                                    Sign Up
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="-mt-14 text-center text-gray-300">
                    &copy; ScopeFocus 2024
                </p>
            </div>
        </footer>
    );
}