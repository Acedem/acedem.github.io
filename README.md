# Portfolio Website
## Getting Started

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Deployment

This is going to be deployed to Github. Hence, the pages need to be static. To do this, `output: 'export'` was added to the `next.config.ts` file. Now, whenever changes to the website are made, the website has to be rebuilt by running:

```bash
npm run build
```

You can check that the application was build successfully by running:

```bash
npx serve ./dist
```

>`dist` is the directory where the static html is saved.