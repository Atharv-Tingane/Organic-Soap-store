# Organic-Soap-store
A modern e-commerce web platform for handmade, 100% natural organic soaps and skincare products.

## Backend

The Express/MongoDB API lives in `OrganicSoap`.

1. Copy `OrganicSoap/.env.example` to `OrganicSoap/.env` and set a new MongoDB connection string and a long random JWT secret.
2. Run `npm start` from `OrganicSoap` (or `npm run dev` during development).
3. Run `npm test` to execute the no-database health and validation checks.
4. To create the first catalog administrator, set the `ADMIN_*` variables and run `npm run create-admin`. Signup never grants admin privileges.

Endpoints:

- `GET /health`
- `POST /user/signup`, `POST /user/login`, `POST /user/logout`, `GET /user/user`
- `PATCH /user/profile`, `GET/POST /user/addresses`, `PATCH/DELETE /user/addresses/:id` (authenticated customer)
- `GET /category` (category writes require an authenticated `admin`)
- `GET /products/all`, `GET /products/:id`, `GET /products/category/:cat`, `GET /products/tag/:tag` (product writes require an `admin`)
- `POST /orders`, `GET /orders/my`, `GET /orders/my/:id` (authenticated customer)
- `GET /orders`, `PATCH /orders/:id/status` (authenticated `admin`)
- `GET /cart`, `POST/PATCH/DELETE /cart/items` (authenticated customer)
- `GET /reviews/product/:productId`, `POST/PATCH/DELETE /reviews` (authenticated customer for writes)
- `GET /admin/dashboard`, `GET /admin/users`, `GET /admin/users/:id`, `PATCH /admin/users/:id/status` (authenticated `admin`)

`GET /products/all` supports `page`, `limit`, `category`, `tags`, `search`, and `active` query parameters. Set `CLIENT_ORIGIN` exactly to the deployed frontend origin (comma-separated for multiple approved origins). Set `TRUST_PROXY=true` only when the API is behind a trusted reverse proxy.

Orders currently use Cash on Delivery (`COD`). On checkout, the API calculates prices from the database rather than accepting client totals, deducts stock atomically, and stores product/address snapshots. An admin can progress orders through `pending → confirmed → processing → shipped → delivered`; cancellation before shipping restores the stock.

Carts are stored per user and are rechecked for stock at checkout. Reviews are limited to one per user/product and require a delivered order for that product; each product exposes its aggregate `ratingAverage` and `ratingCount`.

The admin dashboard reports customer/order counts, pending orders, low-stock products, delivered revenue, and order statuses. Admins can search customers and block/unblock accounts; blocked accounts cannot log in or access authenticated routes.
