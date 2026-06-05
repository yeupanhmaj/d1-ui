# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv@0.15.4 create --template minimal --types ts --add eslint prettier sveltekit-adapter="adapter:cloudflare+cfTarget:workers" drizzle="database:d1" --install pnpm d1-ui
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Cloudflare bindings (including D1) are available in local dev via adapter-cloudflare platform emulation.

## D1 + Drizzle workflow (local first)

1. Update schema in `src/lib/server/db/schema.ts`.
2. Generate SQL migration:

```sh
pnpm db:generate
```

3. Apply migration to local D1 first:

```sh
pnpm db:migrate:local
```

4. Verify your app locally:

```sh
pnpm dev
```

5. Sync schema to remote D1:

```sh
pnpm db:migrate:remote
```

Or run both steps 3 + 5:

```sh
pnpm db:sync
```

Check pending migrations:

```sh
pnpm db:migrations:list:local
pnpm db:migrations:list:remote
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
