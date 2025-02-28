# Messenger Clone

This is a [Next.js](https://nextjs.org) project that clones the functionality of a real-time chat application similar to Messenger. It uses various modern web technologies to provide a seamless chat experience.

## Features

- User authentication with NextAuth
- Real-time messaging with Pusher
- Group chat functionality
- User presence indication
- Profile management
- Responsive design

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/Trung2204/messenger-clone.git
cd messenger-clone
npm install
```

Next, set up the environment variables. Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL=your-database-url
NEXTAUTH_SECRET=your-nextauth-secret
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
PUSHER_APP_ID=your-pusher-app-id
NEXT_PUBLIC_PUSHER_APP_KEY=your-pusher-app-key
PUSHER_SECRET=your-pusher-secret
```

Then, run the development server:

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

## Prisma Setup

Generate the Prisma client:

```bash
npx prisma generate
```

Run the Prisma migrations:

```bash
npx prisma migrate dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM.
- [NextAuth Documentation](https://next-auth.js.org/getting-started/introduction) - learn about authentication in Next.js.
- [Pusher Documentation](https://pusher.com/docs) - learn about real-time communication.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
