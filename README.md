# 🌿 AI Plant Analyser & Botanist Assistant

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)

An intelligent, full-stack MERN application designed to bridge the gap between technology and botany. Identify medicinal plants instantly and consult with an AI-powered botanist for deep herbal knowledge.

---

## ✨ Key Features

- 📸 **AI-Powered Scan**: Identify medicinal plants using advanced image processing.
- 💬 **Botanist Chatbot**: Get detailed answers to plant-related queries powered by **Google Gemini**.
- 📊 **Dynamic Dashboard**: Access a curated library of over 500 medicinal plants with detailed profiles.
- 📜 **Scan History**: Securely save and review your previous identification results in your personal dashboard.
- 🌍 **Multi-language Support**: Fully localized in **English** and **Tamil**.
- 📄 **Information Export**: Access detailed botanical reports for identified plants.
- 🔐 **Secure Auth**: Full user authentication system including Signup, Login, Password Reset, and Account Management.
- 🌓 **Theme Support**: Integrated Light/Dark mode for better user experience.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (Vite)
- **State Management**: Context API (Auth, Language, Theme)
- **Styling**: Vanilla CSS (Custom Glassmorphism design)
- **Icons**: Lucide React
- **Animations**: Particles.js (Custom implementation)

### Backend
- **Server**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: Google Generative AI (Gemini SDK)
- **Authentication**: JWT & Supabase Auth
- **File Handling**: Multer (for image uploads)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Supabase Account
- Google AI Studio API Key (for Gemini)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ritheesh-D/Plant-Analyser.git
   cd Plant-Analyser
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` folder:
   ```env
   PORT=5000
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

3. **Frontend Setup:**
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the `client` folder:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Database Setup:**
   Run the provided `supabase_setup.sql` in your Supabase SQL Editor to initialize the necessary tables (`users`, `scan_history`) and storage buckets.

### Running the Application

1. **Start Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend:**
   ```bash
   cd client
   npm run dev
   ```

---

## 📂 Project Structure

```text
├── backend/            # Express server & API routes
│   ├── config/         # Database & Supabase configurations
│   ├── models/         # Database models/schema definitions
│   ├── routes/         # API endpoints (Scan, Chat, User)
│   └── server.js       # Main entry point
├── client/             # React Vite application
│   ├── src/
│   │   ├── components/ # Reusable UI components (Chatbot, Navbar)
│   │   ├── pages/      # Route-level components (Dashboard, Scan, Auth)
│   │   ├── context/    # Global state (Auth, Language, Theme)
│   │   ├── services/   # API & Supabase service layers
│   │   └── utils/      # Helper functions
│   └── styles/         # Custom CSS (Glassmorphism)
└── supabase_setup.sql  # Database schema
```

---

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the ISC License.

---
Created by [Ritheesh D](https://github.com/Ritheesh-D)
