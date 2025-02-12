# Likenotion

This project is a simplified clone of the popular productivity application, Notion. It's designed to replicate some of the core features of Notion, providing a platform where users can create, edit, and organize their notes in a flexible and intuitive interface.

## Development with:

<!-- ![NextJS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) -->

- [NextJS](https://nextjs.org/docs)
- [Shadcn-ui](https://ui.shadcn.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Clerk](https://clerk.com/docs)
- [Convex](https://docs.convex.dev/home)
- [Edgestore](https://edgestore.dev/docs/quick-start)
- [Blocknote](https://www.blocknotejs.org/docs)
- [Next-intl](https://next-intl.dev/docs/getting-started)

<!-- ![Shadcn-ui](https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF.svg?style=for-the-badge&logo=Clerk&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-ee342f.svg?style=for-the-badge&logo=Convex&logoColor=white)
![Edgestore](https://img.shields.io/badge/Edgestore-a57fff.svg?style=for-the-badge&logo=Edgestore&logoColor=white)
![Blocknote](https://img.shields.io/badge/Blocknote-ff8c00.svg?style=for-the-badge&logo=Blocknote&logoColor=white) -->

## Functionality:

- mobile-responsive design;
- intuitive, customizable UI using Tailwind CSS and ShadCN components;
- authentication (sign-in / sign-up) with Clerk;
- real-time data (save / fetch) sync using Convex;
- full-featured note-taking and task management;
- seamless storage management with EdgeStore;
- support for multiple languages (English and Russian) using i18next;

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (>= 16.x)
- **Npm** (or yarn)

1. Clone the repository
2. Install the dependencies

```
npm install
```

3. Set up the environment variables

```
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

4. Run Convex

```
npx convex dev
```

5. Run the development server

```
npm run dev
```

click here to visit => [_**Likenotion**_](https://likenotion.vercel.app/)

<div align="center">
    <p style="width: 500px;">
        <a href="https://likenotion.vercel.app" target="_blank" >
            <img alt="Likenotion" src ="./public/app-banner.png" width="500">
        </a>
    </p>
</div>
