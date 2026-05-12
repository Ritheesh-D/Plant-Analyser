# AI Plant Analyser & Botanist Assistant - Project Report

## 1. Introduction
The **AI Plant Analyser & Botanist Assistant** is a cutting-edge full-stack application designed to bridge the gap between technology and botany. In an era where traditional herbal knowledge is often overlooked, this platform provides users with instant access to medicinal plant identification and expert botanical advice. Leveraging state-of-the-art AI models, the system identifies plants from images and offers deep insights into their therapeutic uses, habitat, and precautions.

## 2. Project Goals
- **Instant Identification**: Provide a seamless way to identify medicinal plants using computer vision.
- **Educational Resource**: Offer detailed information on over 500 plants, including their scientific names, herbal uses, and medical properties.
- **Interactive Assistance**: Implement an AI-powered chatbot that acts as a virtual botanist.
- **Personalized Experience**: Allow users to track their scan history and manage their botanical discoveries.
- **Accessibility**: Support multiple languages (English and Tamil) to cater to a broader audience.

## 3. System Architecture
The application follows a modern decoupled architecture:

### 3.1 Frontend (React.js)
- **User Interface**: A responsive, "Glassmorphism" styled UI built with React 18.
- **State Management**: Context API for Authentication and Language settings.
- **Routing**: React Router for secure navigation between Landing, Dashboard, Scan, and History pages.
- **Features**: Real-time camera access for scanning, dynamic plant library, and PDF report generation using `jsPDF`.

### 3.2 Backend (Node.js & Express)
- **RESTful API**: Handles authentication, profile management, and coordinates between the ML model and the AI chatbot.
- **File Management**: `Multer` is used for handling image uploads securely.
- **Security**: Middleware for JWT-based authentication and CORS configuration.

### 3.3 Database & Auth (Supabase)
- **PostgreSQL**: Stores user profiles and scan history.
- **Row Level Security (RLS)**: Ensures data privacy, allowing users to only access their own records.
- **Auth**: Managed authentication system for signup, login, and password recovery.

### 3.4 AI & Machine Learning
- **Plant Identification**: A Flask-based Python server running a deep learning model (CNN) for image classification.
- **Botanist Chatbot**: Powered by **Google Gemini 2.5 Flash**, providing expert-level answers to plant-related queries.

### 3.5 System Flow
1. **User Interaction**: User uploads an image via the React frontend.
2. **Backend Processing**: Node.js server receives the image and forwards it to the Flask ML service.
3. **Identification**: The CNN model identifies the plant and returns a key to the Node.js server.
4. **Data Retrieval**: Node.js server fetches detailed medicinal information (English/Tamil) based on the identification.
5. **Persistence**: The scan result and image are saved to the Supabase database for history tracking.
6. **Delivery**: The final comprehensive plant report is displayed to the user with an option to download as PDF.

## 4. Key Features
- **📸 AI-Powered Scan**: Users can upload or capture images of plants. The system identifies the plant and retrieves detailed medicinal data from a curated database.
- **💬 Botanist Chatbot**: An interactive AI assistant that can discuss plant care, herbal remedies, and botanical science.
- **📊 Dynamic Dashboard**: A comprehensive library showcasing a wide variety of medicinal plants with search and filter capabilities.
- **📜 Scan History**: Users can revisit their previous scans, complete with identification results and timestamps.
- **🌍 Multi-language Support**: Full localization in **English** and **Tamil**, making the knowledge accessible to local communities.
- **📄 PDF Export**: Professional PDF reports can be generated for any identified plant, suitable for sharing or documentation.

## 5. Technical Stack
| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite, Lucide React, Particles.js, jsPDF |
| **Backend** | Node.js, Express.js, Multer, Axios |
| **Database** | Supabase (PostgreSQL) |
| **AI (Chat)** | Google Gemini 2.5 Flash |
| **AI (Scan)** | Python (Flask), TensorFlow/Keras (ML Model) |
| **Styling** | Vanilla CSS (Glassmorphism) |

## 6. Implementation Details
### 6.1 Database Schema
The system uses two primary tables in Supabase:
- `profiles`: Stores user-specific data like username, email, and language preference.
- `scan_history`: Records all plant scans performed by the user, including the result JSON and image URLs.

### 6.2 AI Integration
The chatbot uses a sophisticated prompt engineering strategy to ensure it remains focused on botany. It provides structured responses covering plant details, herbal uses, habitats, and side effects in the user's preferred language.

## 7. Future Enhancements
- **Community Forum**: A space for users to share herbal recipes and botanical findings.
- **Offline Mode**: Local caching of plant data for access in remote areas without internet.
- **Real-time Camera Stream**: Moving from static image uploads to a real-time AR-based identification.
- **Expanded ML Model**: Increasing the identification accuracy and the number of supported plant species.

## 8. Conclusion
The AI Plant Analyser & Botanist Assistant is more than just an app; it is a digital herbarium. By combining modern web technologies with advanced AI, it empowers users to reconnect with nature and harness the power of medicinal plants safely and effectively.

---
**Report Generated for:** AI Plant Analyser Project  
**Date:** May 2026  
**Status:** Version 2.0 (Optimized)
