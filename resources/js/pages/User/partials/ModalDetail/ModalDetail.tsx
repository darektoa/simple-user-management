import './style.css';
import type { ModalDetailProps } from './types';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Str from '@/utilities/Str';
import React from 'react';

function ModalDetail(props: ModalDetailProps) {
    const { className, data, onChange, onClose, onSubmit, ...attrs } = props;

    return (
        <Modal
            {...attrs}
            onClose={onClose}
            className={Str.joinWithSpace(
                'user-modal-detail scrollbar-thin',
                className,
            )}
            wrapperClassName="p-5 items-start lg:items-center"
        >
            <header className="sticky top-0 flex items-center justify-center bg-white px-6 pt-2 lg:p-6">
                <h2 className="text-center text-xl font-bold">
                    Detail Information
                </h2>
                <Button
                    className="absolute right-6 h-8 w-8 rounded-full bg-transparent p-1"
                    onClick={onClose}
                >
                    x
                </Button>
            </header>
            <section className="flex h-full w-full flex-col p-6">
                <form
                    className="flex w-full flex-col"
                    onSubmit={onSubmit}
                >
                    <p className="mb-2">
                        Full Name
                        <span className="text-red-600">*</span>
                    </p>
                    <input
                        type="text"
                        name="fullname"
                        required
                        placeholder="Please enter the full name . . ."
                        className="mb-4 w-full rounded-md bg-gray-50 px-4 py-2"
                        onChange={onChange}
                        defaultValue={data?.fullname}
                    />
                    <p className="mb-2">
                        Email
                        <span className="text-red-600">*</span>
                    </p>
                    <input
                        required
                        type="text"
                        name="email"
                        placeholder="Enter new email . . ."
                        className="mb-4 mr-4 w-full rounded-md bg-gray-50 px-4 py-2"
                        onChange={onChange}
                        defaultValue={data?.email}
                    />
                    <p className="mb-2">
                        Status
                        <span className="text-red-600">*</span>
                    </p>
                    <select
                        required
                        name="status"
                        className="mb-4 w-full rounded-lg bg-gray-50 px-4 py-2 text-base font-normal"
                        onChange={onChange}
                    >
                        {['Active', 'Inactive']?.map((status, index) => (
                            <option
                                key={`status-${status}`}
                                value={index + 1}
                                selected={data?.status == index + 1}
                            >
                                {status}
                            </option>
                        ))}
                    </select>
                    <div className="sticky bottom-0 bg-white py-6">
                        <Button
                            type="submit"
                            className="w-full bg-yellow-500 text-white"
                        >
                            Edit
                        </Button>
                    </div>
                </form>
            </section>
        </Modal>
    );
}

export default ModalDetail;
