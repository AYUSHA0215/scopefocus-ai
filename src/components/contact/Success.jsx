import { CheckIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Succeeded({ open, setOpen }) {
  return (
      <Transition show={open} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-10 w-screen overflow-y-auto" onClose={setOpen}>
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                 <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                 <Dialog.Panel className="fixed transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                     <div>
                         <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <CheckIcon
                               className="h-6 w-6 text-green-600"
                               aria-hidden="true"
                            />
                         </div>
                         <div className="mt-3 text-center sm:mt-5">
                            <Dialog.Title
                               as="h3"
                               className="text-base font-semibold leading-6 text-gray-900"
                            >
                               Thanks for reaching out!
                            </Dialog.Title>
                            <div className="mt-2">
                               <p className="text-sm text-gray-500">
                                   We&apos;ll get back to you ASAP.
                               </p>
                            </div>
                         </div>
                     </div>
                 </Dialog.Panel>
              </Transition.Child>
          </Dialog>
      </Transition>
  );
}