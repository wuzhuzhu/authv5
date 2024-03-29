This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Github Repository
[clone the repository code](https://github.com/siliconflow/web-kickstarter.git) 
## Branches
  **boilerplate**  
  The boilerplate branch contains the basic template code for the project. This provides a starting point for new development.

  **dev**   
  The dev branch is used for ongoing development work. All new features and bug fixes are merged into dev during the development phase.

  **main**
  The main branch contains the production-ready source code. This branch contains thoroughly tested code deployed onto production。

## Examples
 **Data fetching**
 See dev route: 
- [x] [GET:服务端组件基本](http://localhost:3000/example/fetch-data/server/basic)
- [x] [GET:服务端组件错误处理(实际上在examle层级实现error.tsx)](http://localhost:3000/example/fetch-data/server/error)
- [ ] [GET:客户端组件](http://localhost:3000/example/fetch-data/server/error)
- [x] [GET:客户端组件(使用Route Handler)](http://localhost:3000/example/fetch-data/route-handler/api-from-client)
- [ ] [POST:Server Action](http://localhost:3000/example/mutate/server-action)
- [ ] [POST:Server Action on Client](http://localhost:3000/example/mutate/server-action-on-client)
- [ ] [POST:By Post route handler](http://localhost:3000/example/mutate/route-handler)


## NOTE:
(Use vscode settings to exclude the files)
bunx prisma generate will generate zod schema from prisma schema.
This is ignored in .gitignore: /prisma/generated/zod/index.ts.
You should always delete the generated zod schema for better IDE performance
Copy the code needed into @/lib/schema.ts when needed.

## TODO
- [x] fix google oauth
- [ ] multi oauth provider link to same email user
- [ ] account link logic: 1, pw first:add image to user 2, oauth first: add pw to user
- [ ] default loading page/skeleton components set
- [ ] use server action to login on social.tsx
- [x] email verification flow
- [x] oauth user has same email link to email user
- [x] send register confirmation email
- [ ] implement DTO layer: https://nextjs.org/blog/security-nextjs-server-components-actions

## Fetching Data
https://m09tqret04o.feishu.cn/wiki/ULAawULUziLp0UkSkmUcl0sHn2f?from=from_copylink

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


