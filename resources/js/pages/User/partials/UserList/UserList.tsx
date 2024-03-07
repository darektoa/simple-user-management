import './style.css';
import type { UserItem } from '../../types';
import { usePage, router } from '@inertiajs/react';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Divider from '@/components/Divider';
import Icon from '@/components/Icon';
import Component from '../../components';
import ModalAdd from '../ModalAdd';
import ModalDelete from '../ModalDelete';
import ModalDetail from '../ModalDetail';

function UserList() {
    const { me, users } = usePage<{
        me: UserItem;
        users: UserItem[];
    }>().props;
    const [show, setShow] = useState<{
        add: null | boolean;
        delete: null | UserItem;
        edit: null | UserItem;
    }>({
        add: null,
        delete: null,
        edit: null,
    });

    const [values, setValues] = useState({});

    const handleChange = (e: SyntheticEvent) => {
        const target = e.target as EventTarget & {
            name: string;
            files?: File[];
            value?: string | number;
        };

        const key = target?.name;
        const value = target?.files?.[0] || target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (show.add) router.post(`/users`, values);
        if (show.edit) router.patch(`/users/${show.edit?.id}`, values);
        if (show.delete) router.delete(`/users/${show.delete?.id}`, values);
    };

    useEffect(() => {
        setShow({
            add: null,
            edit: null,
            delete: null,
        });
    }, [users]);

    return (
        <>
            <Card className="w-full p-5 xl:px-12 xl:py-4">
                <header className="flex w-full items-center py-6">
                    <div>
                        <h3 className="mb-1 text-xl font-bold leading-normal xl:text-2xl">
                            Users
                        </h3>
                        <p className="mb-0 text-sm text-gray-400 sm:text-base">
                            List of all users
                        </p>
                    </div>

                    <Component.Search className="mx-auto" />

                    <Button
                        className="ml-auto flex items-center bg-white stroke-primary-main p-2 text-primary-main"
                        onClick={() =>
                            setShow((states) => ({
                                ...states,
                                add: true,
                            }))
                        }
                    >
                        <Icon.FeatherIcon.Plus className="h-5 w-5 stroke-inherit" />
                        <span className="ml-2 text-inherit">New</span>
                    </Button>
                </header>
                <Divider className="mb-6" />
                <div className="scrollbar-thin mb-4 h-[600px] w-full overflow-auto xl:mb-8 xl:min-h-[25rem]">
                    <table className="w-full">
                        <thead>
                            <tr className="sticky top-0 bg-white">
                                <th className="w-0 px-1">#</th>
                                <th className="px-2 py-1 text-left text-xs sm:px-4 sm:py-3 sm:text-base">
                                    Name
                                </th>
                                <th className="px-2 py-1 text-left text-xs sm:px-4 sm:py-3 sm:text-base">
                                    Status
                                </th>
                                <th
                                    colSpan={10}
                                    className="w-0 px-1 py-1 text-center text-xs sm:px-4 sm:py-3 sm:text-base"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="[&>*:nth-child(odd)]:bg-gray-100/80">
                            {users?.map((user, index) => (
                                <tr key={user.id}>
                                    <td className="px-2 py-1 text-left text-xs sm:px-4 sm:py-3 sm:text-base">
                                        {index + 1}
                                    </td>
                                    <td className="px-2 py-1 text-left text-xs sm:px-4 sm:py-3 sm:text-base">
                                        <p className="font-bold">
                                            {user?.fullname}{' '}
                                            <span
                                                className="text-blue-500"
                                                hidden={user.email !== me.email}
                                            >
                                                (You)
                                            </span>
                                        </p>
                                        <small>{`${user?.email}`}</small>
                                    </td>
                                    <td className="px-2 py-1 text-left text-xs sm:px-4 sm:py-3 sm:text-base">
                                        <Component.Status
                                            code={user.status}
                                            className="font-bold"
                                        >
                                            {user.status === 1
                                                ? 'Active'
                                                : 'Inactive'}
                                        </Component.Status>
                                    </td>
                                    <td className="w-0 stroke-yellow-500 p-1 text-center text-xs sm:py-3 sm:text-base">
                                        <Button
                                            className="p-3"
                                            onClick={() =>
                                                setShow((states) => ({
                                                    ...states,
                                                    edit: user,
                                                }))
                                            }
                                        >
                                            <Icon.FeatherIcon.Edit className="h-4 w-4 stroke-inherit" />
                                        </Button>
                                    </td>
                                    <td className="w-0 p-1 text-center text-xs sm:py-3 sm:text-base">
                                        <Button
                                            className="stroke-red-500 p-3"
                                            hidden={user.deleted_at !== null}
                                            disabled={user.email === me.email}
                                            onClick={() =>
                                                setShow((states) => ({
                                                    ...states,
                                                    delete: user,
                                                }))
                                            }
                                        >
                                            <Icon.FeatherIcon.Trash className="h-4 w-4 stroke-inherit" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <footer className="flex w-full flex-col items-start xl:flex-row xl:items-baseline xl:text-left">
                    <p className="mb-4 w-full text-center text-xs text-gray-400 xl:mr-2 xl:w-auto">
                        Request List
                    </p>
                </footer>
            </Card>

            <ModalAdd
                show={Boolean(show.add)}
                onSubmit={handleSubmit}
                onChange={handleChange}
                onClose={() =>
                    setShow((states) => ({
                        ...states,
                        add: null,
                    }))
                }
            />

            <ModalDetail
                show={Boolean(show.edit)}
                data={show.edit}
                onSubmit={handleSubmit}
                onChange={handleChange}
                onClose={() =>
                    setShow((states) => ({
                        ...states,
                        edit: null,
                    }))
                }
            />

            <ModalDelete
                show={Boolean(show.delete)}
                onSubmit={handleSubmit}
                onClose={() =>
                    setShow((states) => ({
                        ...states,
                        delete: null,
                    }))
                }
            />
        </>
    );
}

export default UserList;
