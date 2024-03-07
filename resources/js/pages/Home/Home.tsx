import './style.css';
import { usePage } from '@inertiajs/react';
import React from 'react';
import Card from '@/components/Card';
import Section from '@/components/Section';

function Home() {
    const { activeUsers, inactiveUsers, registeredUsers } = usePage<{
        activeUsers: number;
        inactiveUsers: number;
        registeredUsers: number;
    }>().props;

    return (
        <main className="flex w-full flex-col py-6">
            <Section className="mb-4 flex w-full items-start gap-6">
                <Card className="w-full max-w-xs border-l-2 border-blue-600 bg-blue-50 text-blue-600">
                    <h2 className="mb-3 font-bold text-inherit">
                        Registered Users
                    </h2>
                    <p className="text-5xl font-bold text-inherit">
                        {registeredUsers}
                    </p>
                </Card>
                <Card className="w-full max-w-xs border-l-2 border-green-600 bg-green-50 text-green-600">
                    <h2 className="mb-3 font-bold text-inherit">
                        Active Users
                    </h2>
                    <p className="text-5xl font-bold text-inherit">
                        {activeUsers}
                    </p>
                </Card>
                <Card className="w-full max-w-xs border-l-2 border-yellow-600 bg-yellow-50 text-yellow-600">
                    <h2 className="mb-3 font-bold text-inherit">
                        Inactive Users
                    </h2>
                    <p className="text-5xl font-bold text-inherit">
                        {inactiveUsers}
                    </p>
                </Card>
            </Section>
        </main>
    );
}

export default Home;
