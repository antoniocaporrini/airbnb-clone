# 🚀 Staybnb (Airbnb clone)

Welcome to **Staybnb**, a modern full-stack web application built with cutting-edge technologies. This project was a significant learning experience for me, as I had never worked with **TypeScript**, **Next.js**, or **Prisma** before. Throughout the development, I tackled multiple challenges, from managing authentication providers to properly structuring the database with Prisma.

## 🌟 Features
- 🔐 **Authentication** – Secure user authentication with NextAuth (Google & GitHub providers).
- 📍 **Interactive Map** – Location-based functionality using Leaflet.
- 📡 **API Handling** – Efficient API requests with Axios.
- 🏎 **State Management** – Implemented with Zustand.
- 🎨 **Responsive Design** – Styled with Tailwind CSS.
- 🚀 **High Performance** – Optimized with Vite 6 & Next.js 15 App Router.

## 🛠 Tech Stack
### **Frontend**
- ⚛️ **React 18** – Component-based UI development.
- 🟦 **TypeScript** – Strongly typed JavaScript for better maintainability.
- 🎨 **Tailwind CSS** – Rapid UI styling and design.
- 🗺 **Leaflet** – Interactive maps integration.

### **Backend**
- 🌐 **Next.js 15 (App Router)** – Server-side rendering and API handling.
- 🛢 **MongoDB & Prisma** – Database management and ORM.
- 🔐 **NextAuth.js** – Authentication and session handling.

### **State Management & API Handling**
- ⚡ **Zustand** – Lightweight state management.
- 🌐 **Axios** – API requests and data fetching.

## 🏆 Challenges & Learning Experience
1️⃣ **TypeScript Mastery** – Since I had never used TypeScript before, I learned by trial and error, refactoring my code multiple times to improve type safety and reduce runtime errors.

2️⃣ **Authentication Troubleshooting** – I encountered and fixed issues related to OAuth providers (Google & GitHub), ensuring a seamless login experience.

3️⃣ **Understanding Prisma** – Initially, I wasn't familiar with Prisma's role as an ORM, but I gradually grasped its power in handling database operations with MongoDB.

4️⃣ **Next.js Exploration** – Coming from a traditional React background, learning **Next.js 15 (App Router)** was a great experience, especially handling server-side rendering and API routes.

## 🎬 Demo
📌 **Watch the app in action!** *(Insert GIF of site navigation here)*

![Demo GIF](https://your-gif-url-here.com/demo.gif)

## 🚀 Getting Started
### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/project-name.git
cd project-name
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up environment variables
Create a `.env.local` file and add the required variables:
```env
NEXTAUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string
```

### 4️⃣ Run the development server
```bash
npm run dev
```

Your app will be available at [http://localhost:3000](http://localhost:3000) 🎉

## 🤝 Contributing
If you'd like to contribute, feel free to fork the repository and submit a pull request. Any improvements, bug fixes, or feature suggestions are welcome!

## 📄 License
This project is licensed under the **MIT License**.



You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
