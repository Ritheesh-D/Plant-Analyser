# 🌿 Plant AI Analyser: Deep Dive Documentation

Welcome to the **Plant AI Analyser**, a highly sophisticated, AI-powered botanical identification tool. This project is a complete **MERN (MongoDB, Express, React, Node.js)** stack implementation seamlessly integrated with Google’s Gemini AI vision model. It identifies medicinal plants and maps them to a deep database of herbal knowledge.

This completely documented guide explains the architecture, codebase, data flow, and everything required to understand and maintain the project.

---

## 🏗️ 1. Project Architecture & Code Structure

The project strictly follows the separation of concerns paradigm, isolating the client UI and the server API.

### `frontend/` (React Vite Client)
The frontend is instantiated using Vite for optimized bundling and relies heavily on React 18 paradigms (Context API, Hooks).

*   **`src/components/`**: Modular, reusable UI components. 
    *   `ParticlesBackground.jsx`: A pure vanilla-JS-in-React custom hook that mounts dozens of DOM nodes spanning CSS keyframes to produce dynamic, drifting background effects.
*   **`src/context/AuthContext.jsx`**: Global state management that persists the authenticated user's session data across page loads using `localStorage`.
*   **`src/pages/`**: Holds the page-level route components.
    *   `Scan.jsx`: Hooks into the user's HTML5 `<video>` feed via `navigator.mediaDevices.getUserMedia()`, captures base64 snapshot string representations of the canvas, and proxies them to the backend API.
    *   `Result.jsx`: Pulls the exact AI data from local storage mapping to dynamically populate the info cards (Uses, Treatments, Medicinal Forms).
    *   `Dashboard.jsx` & `History.jsx`: Private routes guarded by Auth logic. They iterate over the `plants.json` mappings and user-saved history arrays to display responsive flex-grids of plant cards.
*   **`src/services/api.js`**: Reusable Axios configuration containing methods like `scanPlant(...)` and `login(...)`.

### `backend/` (Express Node Server)
The backend acts as the data relay, database manipulator, and AI authentication proxy.

*   **`server.js`**: The foundational Express bootstrap. It initializes CORS, mounts JSON/UrlEncoded middleware, starts Mongoose database connections, and registers the `/api/scan` and `/api/auth` sub-routers.
*   **`routes/auth.js`**: Exposes POST endpoints for login and registration, interacting with the MongoDB user schemas.
*   **`routes/scan.js`**: The most critical engine. This route accepts form-data (via `multer`) from the frontend, securely reads your server-side API Key to invoke the Gemini API (`@google/genai`), and instructs it to identify the payload based on system prompt rules.
*   **`models/User.js`**: Mongoose Schema definition for user creation. Crucially, it manages passwords securely featuring Pre-Save hooks utilizing `bcrypt.hash()` up to 12 salt rounds before hitting the remote MongoDB database.

---

## 💾 2. The Dataset & AI Inference Data Flow

Understanding how the data is constructed and returned is the core of the Plant AI Analyser. The system works via a dual "Offline-dataset" plus "Generative-AI" approach.

### The Original Dataset (`plants.json`)
The application houses an incredibly deep dataset of **over 500 plants** in the JSON format. 
*   **Location in Code:** This dataset resides in two places. It is utilized by the backend as a static fallback reference, and it is natively mapped inside the initial Javascript codebase (and `generate-plants.js`) to generate your full visual library on the Dashboard.
*   **Dataset Structure:** Each array index is an object containing critical keys such as: 
    *   `commonName` (e.g. "Aloe Vera")
    *   `scientificName` (e.g. "Aloe barbadensis")
    *   `herbalUses`, `commonTreatments`, `medicineForm` (All formatted as arrays of strings)
    *   `habitat` & `sideEffects`

### How the Data Flow Functions during a Plant Scan
1.  **Capture:** The user points a camera or chooses an image in `Scan.jsx`. 
2.  **Transmission:** The image is sent to the backend endpoint `/api/scan` via a `multipart/form-data` POST request.
3.  **Storage:** Multer temporarily saves this image in the `backend/uploads/` directory to convert it to raw binary buffer.
4.  **AI Prompts:** The backend triggers the `Gemini Vision` engine, passing the image binary completely alongside a rigorous, hardcoded system prompt commanding the AI model to *only* return a valid JSON structure aligning exactly with our dataset's object keys (`commonName`, `herbalUses`, etc).
5.  **Fallback Safe:** If the AI model fails or throws an exception, the backend provides an algorithmic fallback logic, sending a guaranteed safe plant profile from the `plants.json` dataset as a fail-safe payload.
6.  **Response Handling:** The frontend catches the response object, injects it into local storage (`plant_scan_result`), and fires `navigate('/result')` to render the beautiful result cards.

---

## 🎨 3. UI/UX and CSS Compilation

To ensure the highest performance and the precise preservation of the requested design styles, **Tailwind CSS was explicitly avoided.**

*   **`frontend/src/index.css`**: The true source of styling truth. Over 1,000 lines of heavily curated, cascading stylesheets utilizing `var(--colors)` mapped to the neon green (`#00ff99`) and dark theme constants. Employs advanced `backdrop-filter: blur(16px)` properties to achieve true Glassmorphism and `keyframes` for 60fps levitating modal logic.

---

## 🚀 4. Environment Variables & Security

*   The Gemini API Key (`GEMINI_API_KEY`) is locked entirely behind the backend server environments (`backend/.env`). 
*   The frontend is totally unexposed, meaning malicious users cannot read the bundle in DevTools to steal your Google API Key or your MongoDB connection string (`MONGODB_URI`).

## ⚙️ 5. Startup Commands

Start both servers concurrently using separate terminal tabs:

**Boot the Backend:**
```bash
cd backend
npm install
node server.js 
# Will run on Port 5000 and connect to MongoDB
```

**Boot the Frontend:**
```bash
cd frontend
npm install
npm run dev 
# Will utilize Vite hot-reload module and port on Localhost:5173
```
