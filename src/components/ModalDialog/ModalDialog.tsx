import { Button } from "@components/Button/Button";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface ModalDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalDialog({ open, onClose }: ModalDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-4xl bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-2 pb-4">
              <div className="flex justify-end">
                <Button
                  onClick={onClose}
                  className="bg-transparent text-4xl text-neutral-500 transition duration-100 ease-in-out hover:bg-transparent hover:text-neutral-400"
                >
                  ×
                </Button>
              </div>
              <div className="p-4 sm:flex sm:items-start">
                <div className="mt-4 text-center text-2xl sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="font-semibold text-black">
                    Are you sure?
                  </DialogTitle>
                  <p className="text-neutral-500">
                    You are about to delete this item.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col bg-white px-6 py-4">
              <Button
                onClick={onClose}
                className="bg-primary-500 hover:bg-primary-400 w-full justify-center rounded-md px-3 py-4 text-2xl text-black sm:w-auto"
              >
                Yes, delete
              </Button>
              <div className="h-4"></div>
              <Button
                data-autofocus
                onClick={onClose}
                className="w-full justify-center rounded-md bg-neutral-700 px-3 py-4 text-2xl text-white hover:bg-gray-50 hover:bg-neutral-600 sm:w-auto"
              >
                Cancel
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
