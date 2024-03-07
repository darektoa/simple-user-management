import './style.css';
import type { ModalAddProps } from './types';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import React from 'react';
import Str from '@/utilities/Str';

function ModalAdd(props: ModalAddProps) {
    const { className, onChange, onClose, onSubmit, ...attrs } = props;

    return (
        <Modal
            {...attrs}
            onClose={onClose}
            className={Str.joinWithSpace(
                'user-modal-add scrollbar-thin',
                className,
            )}
        >
            <header className="sticky top-0 flex items-center justify-center bg-white px-6 pt-2 lg:p-6">
                <h2 className="text-center text-xl font-bold">Add New User</h2>
                <Button
                    className="absolute right-6 h-8 w-8 rounded-full bg-transparent p-1"
                    onClick={onClose}
                >
                    x
                </Button>
            </header>
            <section className="flex h-full w-full flex-col p-6">
                <form
                    className="flex flex-col"
                    onSubmit={onSubmit}
                >
                    <p className="mb-2">
                        Full Name
                        <span className="text-red-600">*</span>
                    </p>
                    <input
                        required
                        type="text"
                        name="fullname"
                        placeholder="Please enter the full name . . ."
                        className="mb-4 w-full rounded-md bg-gray-50 px-4 py-2"
                        onChange={onChange}
                    />
                    <p className="mb-2">
                        Email
                        <span className="text-red-600">*</span>
                    </p>
                    <input
                        required
                        type="text"
                        name="email"
                        placeholder="Enter email . . ."
                        className="mb-4 mr-4 w-full rounded-md bg-gray-50 px-4 py-2"
                        onChange={onChange}
                    />
                    <p className="mb-2">
                        Password
                        <span className="text-red-600">*</span>
                    </p>
                    <input
                        required
                        type="password"
                        name="password"
                        placeholder="Enter password . . ."
                        className="mb-4 mr-4 w-full rounded-md bg-gray-50 px-4 py-2"
                        onChange={onChange}
                    />
                    <p className="mb-2">
                        Confirm Password
                        <span className="text-red-600">*</span>
                    </p>
                    <input
                        required
                        type="password"
                        name="confirm_password"
                        placeholder="Re-Enter password . . ."
                        className="mb-4 mr-4 w-full rounded-md bg-gray-50 px-4 py-2"
                        onChange={onChange}
                    />
                    <div className="sticky bottom-0 bg-white py-6">
                        <Button
                            type="submit"
                            className="w-full bg-primary-main text-white"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </section>
        </Modal>
    );
}

export default ModalAdd;
