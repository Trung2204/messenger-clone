# Messenger Clone

This is a [Next.js](https://nextjs.org) project that clones the functionality of a real-time chat application similar to Messenger. It uses various modern web technologies to provide a seamless chat experience.

This project follows Antonio's tutorial from YouTube: [Watch the tutorial](https://youtu.be/PGPGcKBpAk8?si=wBEKukc80QsFzK18).

## Table of Contents
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Prisma Setup](#prisma-setup)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [Contribution Guidelines](#contribution-guidelines)

## Key Features

### User Interface & Experience
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- User profile customization and settings

### Authentication & Security
- Credential authentication with NextAuth
- Google authentication integration
- Github authentication integration

### Messaging Features
- Real-time messaging using Pusher
- Group chats and one-on-one messaging
- Message notifications and alerts
- Message attachments and file sharing
- Message read receipts
- Online/offline user status

### Development Tools & Enhancements
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- File and image upload using Cloudinary CDN

### Advanced Functionalities
- How to write POST, GET, and DELETE routes in route handlers (app/api)
- How to fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)
- Handling relations between Server and Child components in a real-time environment
- Creating and managing chat rooms and channels

## Prerequisites
- Node.js
- npm/yarn/pnpm/bun
- A GitHub account for authentication
- A Google account for authentication
- A Pusher account for real-time messaging
- A Cloudinary account for file and image upload

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
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-app-name
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

## Contribution Guidelines

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch. (`git checkout -b feature-branch`)

3. Make your changes.

4. Commit your changes. (`git commit -m 'Add some feature'`)

5. Push to the branch. (`git push origin feature-branch`)

6. Open a pull request.

Let me know if there are any other changes you'd like to make!