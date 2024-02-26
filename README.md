This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## NOTE:
(Use vscode settings to exclude the files)
bunx prisma generate will generate zod schema from prisma schema.
This is ignored in .gitignore: /prisma/generated/zod/index.ts.
You should always delete the generated zod schema for better IDE performance
Copy the code needed into @/lib/schema.ts when needed.

## TODO
- [ ] fix google oauth
- [ ] account link logic: 1, pw first:add image to user 2, oauth first: add pw to user
- [ ] default loading page/skeleton components set
- [ ] use server action to login on social.tsx
- [ ] email verification flow
- [ ] oauth user has same email link to email user
- [ ] send register confirmation email
- [ ] implement DTO layer: https://nextjs.org/blog/security-nextjs-server-components-actions

## Getting Started

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

Second, setting up the .env file from .env.example

1. Get a Mysql dev database locally running or cloud. Generate the database url for prisma.
2. Setup nodemailer smtp
3. Setup Oauth credentials for google and github
4. other settings

Then, run `prisma db push`, init database schema.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
