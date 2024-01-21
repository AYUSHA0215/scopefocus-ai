export default function SignUpFooter() {
    return (
        <footer className="pb-16 bg-gray-900 md:pt-10 w-full">
            <div className=" md:mx-10">
                <div className="text-gray-400">
                    <div className=" mt-1 mb-20 md:gap-28 md:grid-cols-4 items-center">
                        <div className="flex justify-center items-center w-full">
                            <ul className="flex space-x-20">
                                <a href='http://localhost:3000' className="mb-1 font-semibold text-white uppercase">
                                    Blog
                                </a>
                                <a href='/contact' className="mb-1 font-semibold text-white uppercase underline">
                                    Contact
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="-mt-12 mt-5 -mb-3 text-center text-gray-300">
                    &copy; ScopeFocus 2024
                </p>
            </div>
        </footer>
    );
}