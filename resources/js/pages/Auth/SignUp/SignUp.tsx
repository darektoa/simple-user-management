import './style.css';
import type { SignUpReturn } from './types';
import { usePage } from '@inertiajs/react';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Partial from './partials';

function SignUp(): SignUpReturn {
    const { CSRF_TOKEN, errors, flash, inputs } = usePage<{
        CSRF_TOKEN: string;
        flash: {
            message: string;
            errors: string;
        };
        inputs: {
            fullname: string;
            email: string;
        };
    }>().props;

    const [show, setShow] = useState({
        error: Boolean(
            flash.message || (Object.values(errors).length && flash.errors),
        ),
    });

    return (
        <main className="flex h-full w-full flex-col items-center justify-start overflow-auto bg-sky-50 px-4 py-10 sm:p-10">
            <Partial.ModalError
                show={show.error}
                data={errors}
                onClose={() =>
                    setShow((states) => ({ ...states, error: false }))
                }
            />

            <form
                action="/sign-up"
                method="POST"
                className="w-full max-w-lg"
            >
                <input
                    type="hidden"
                    name="_token"
                    defaultValue={CSRF_TOKEN}
                />

                <Card className="mb-4 flex w-full flex-col border-t-4 border-t-primary-main">
                    <h2 className="mb-4 text-lg font-bold">Sign Up</h2>

                    <p className="mb-2">
                        Full Name <span className="text-red-600">*</span>
                    </p>
                    <input
                        type="text"
                        name="fullname"
                        required
                        defaultValue={inputs?.fullname}
                        placeholder="Please enter your full name . . ."
                        className="mb-4 w-full rounded-md bg-gray-50 px-4 py-2"
                    />
                    <p className="mb-2">
                        Email <span className="text-red-600">*</span>
                    </p>
                    <input
                        type="email"
                        name="email"
                        required
                        defaultValue={inputs?.email}
                        placeholder="Please enter your email . . ."
                        className="mb-2 w-full rounded-md bg-gray-50 px-4 py-2"
                        autoFocus
                    />
                    <p className="mb-2">
                        Password <span className="text-red-600">*</span>
                    </p>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Please enter your password . . ."
                        className="mb-4 w-full rounded-md bg-gray-50 px-4 py-2"
                    />
                    <p className="mb-2">
                        Confirm Password <span className="text-red-600">*</span>
                    </p>
                    <input
                        type="password"
                        name="confirm_password"
                        required
                        placeholder="Please re-enter your password . . ."
                        className="mb-4 w-full rounded-md bg-gray-50 px-4 py-2"
                    />
                </Card>

                <div className="flex items-center justify-between">
                    <Button
                        type="submit"
                        className="mr-4 bg-primary-accent text-white"
                    >
                        Submit
                    </Button>
                    <span>
                        Already have an account ?{' '}
                        <NavLink
                            to="/sign-in"
                            className="underline"
                        >
                            sign in here
                        </NavLink>
                    </span>
                </div>
            </form>
        </main>
    );
}

export default SignUp;
