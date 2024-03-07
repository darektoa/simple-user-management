## About Project

Application for simple user management. Using **Laravel** + **React**

## Prerequisites

-   PHP version **>= 8.2.8**
-   Node.js version **>= 20.10.0**
-   MariaDB version **>= 10.x.x** or MySQL
-   Composer version **>= 2.6.6**
-   PNPM instead of NPM

## How to Install ?

-   Open your terminal
-   Change directory you want
-   Type `git clone --branch main https://github.com/darektoa/simple-user-management ./simple-user-management` in terminal
-   After that, type `cd simple-user-management` to enter the `simple-user-management` directory
-   Type `composer install` in current terminal to install the PHP depdencies.
-   And type `pnpm install` in the same terminal to install the javascript depedencies.

## How to Run ?

-   Create a database whatever the name
-   Type `cp .env.example .env` in terminal
-   Adjust the `DB_DATABASE` according the database you created
-   Type `php artisan key:generate` in terminal
-   Type `php artisan migrate --seed` in terminal
-   After that serve the project with `php artisan serve` in your terminal
-   If you want to change the react view, please run `pnpm run dev` in your second terminal
-   Voila! your project is ready to use
