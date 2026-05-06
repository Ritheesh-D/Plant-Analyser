# 🌿 AI Plant Analyser & Botanist Assistant

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)

An intelligent, full-stack application designed to bridge the gap between technology and botany. Identify medicinal plants instantly and consult with an AI-powered botanist for deep herbal knowledge.

---

## ✨ Key Features

- 📸 **AI-Powered Scan**: Identify medicinal plants using a machine learning model.
- 💬 **Botanist Chatbot**: Get detailed answers to plant-related queries powered by **Google Gemini 2.5 Flash**.
- 📊 **Dynamic Dashboard**: Access a curated library of over 500 medicinal plants.
- 📜 **Scan History**: Securely save and review your previous identification results.
- 🌍 **Multi-language Support**: Fully localized in **English** and **Tamil**.
- 📄 **PDF Export**: Generate professional PDF reports for your identified plants.
- 🔐 **Secure Auth**: Authentication and user management powered by **Supabase**.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (Vite)
- **Styling**: Vanilla CSS (Custom Glassmorphism design)
- **Icons**: Lucide React
- **Animations**: Particles.js (Custom implementation)

### Backend
- **Server**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: Google Generative AI (Gemini)
- **File Handling**: Multer

### ML Model (External)
- **Engine**: Flask-based Python server (handling image classification)

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
   SUPABASE_SERVICE_KEY=your_supabase_service_key
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
   ```

4. **Database Setup:**
   Run the provided `supabase_setup.sql` in your Supabase SQL Editor to initialize the necessary tables and policies.

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
│   ├── config/         # Database configurations
│   ├── routes/         # API endpoints (Scan, Chat)
│   └── uploads/        # Temporary image storage
├── client/             # React Vite application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Route-level components
│   │   └── context/    # Global state (Auth, Language)
│   └── styles/         # Custom CSS modules
└── supabase_setup.sql  # Database schema
```

---

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the ISC License.

---
Created by [Ritheesh D](https://github.com/Ritheesh-D)
