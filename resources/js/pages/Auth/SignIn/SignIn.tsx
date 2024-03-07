import './style.css';
import { Link } from 'react-router-dom';
import { usePage } from '@inertiajs/react';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import Card from '@/components/Card';
import React from 'react';

function SignIn() {
    const { CSRF_TOKEN, errors, inputs, flash } = usePage<{
        CSRF_TOKEN: string;
        flash: {
            message: string;
            errors: string;
            success: string;
        };
        inputs: {
            username: string;
            email: string;
        };
    }>().props;

    return (
        <main className="flex h-full w-full flex-col items-center justify-center p-10">
            <Alert
                hidden={!flash?.message}
                className="mb-4 flex w-full max-w-lg flex-col bg-blue-200 text-blue-600"
            >
                {flash?.message}
            </Alert>

            <Alert
                hidden={!flash?.success}
                className="mb-4 flex w-full max-w-lg flex-col bg-green-200 text-green-600"
            >
                {flash?.success}
            </Alert>

            <Alert
                className="mb-4 flex w-full max-w-lg flex-col bg-red-200 text-red-600"
                hidden={!Object.values(errors).length && !flash?.errors}
            >
                {typeof errors === 'string'
                    ? errors
                    : Object.values(errors).map((error) => (
                          <p className="text-inherit">{error}</p>
                      ))}
            </Alert>

            <Card className="w-full max-w-lg">
                <header>
                    <h1 className="mb-6 text-center text-2xl font-bold">
                        Sign In
                    </h1>
                </header>
                <section>
                    <form
                        action="/sign-in"
                        method="POST"
                        className="flex flex-col items-center"
                    >
                        <input
                            type="text"
                            name="username"
                            className="mb-4 w-full rounded-md bg-gray-100 px-4 py-2"
                            placeholder="Email"
                            defaultValue={inputs?.username}
                            autoFocus
                        />
                        <input
                            type="password"
                            name="password"
                            className="mb-4 w-full rounded-md bg-gray-100 px-4 py-2"
                            placeholder="Password"
                        />
                        <input
                            type="hidden"
                            name="_token"
                            value={CSRF_TOKEN}
                        />
                        <Button
                            type="submit"
                            className="mb-4 w-full max-w-xs bg-primary-accent text-white"
                        >
                            Sign In
                        </Button>
                        <p>
                            Doesn't have an account?{' '}
                            <Link
                                to="/sign-up"
                                className="underline"
                            >
                                sign up here
                            </Link>
                        </p>
                    </form>
                </section>
            </Card>
        </main>
    );
}

export default SignIn;
