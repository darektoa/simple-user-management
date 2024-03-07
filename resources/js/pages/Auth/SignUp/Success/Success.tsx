import './style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { usePage } from '@inertiajs/react';
import Card from '@/components/Card';
import React from 'react';
import Button from '@/components/Button';

function Success() {
    const { inputs } = usePage<{
        inputs: {
            email: string;
        };
    }>().props;
    const navigate = useNavigate();

    // if (!inputs?.email) navigate('/sign-up');

    return (
        <main className="flex h-full w-full max-w-lg flex-col items-center justify-start overflow-auto bg-white px-4 py-10 sm:p-10">
            <Card className="mb-4 flex w-full flex-col items-center border-t-4 border-t-green-600 bg-green-50">
                <h2 className="mb-1 text-2xl font-bold">
                    Registration Success
                </h2>
                <p className="mb-4 text-base text-slate-500">
                    Data successfully sent. Yo can Sign-In Now!
                </p>
                <NavLink
                    className="w-auto rounded-md bg-primary-accent px-5 py-2 text-white hover:ring"
                    to="/sign-in"
                >
                    Sign-In here
                </NavLink>
            </Card>
        </main>
    );
}

export default Success;
