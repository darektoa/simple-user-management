import { BrowserRouter } from 'react-router-dom';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';

createInertiaApp({
    resolve: (path) =>
        resolvePageComponent(
            `./routes/${path}.tsx`,
            import.meta.glob('./routes/**/*.tsx'),
        ),
    setup: ({ App, el: root, props }) =>
        createRoot(root).render(
            <BrowserRouter>
                <App {...props} />
            </BrowserRouter>,
        ),
});
