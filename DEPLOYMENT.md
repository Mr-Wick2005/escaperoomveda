# Deployment Guide - Escape Room WebApp

## Prerequisites

- Node.js and npm installed
- Python 3.8+ installed
- GitHub account
- MongoDB Atlas account
- Google Gemini API key

---

## Step 1: Set Up Environment Variables

### Backend (.env file)

Create a `.env` file in the `backend/` folder with:

```
MONGO_URL=your_mongodb_connection_string
DB_NAME=escaperoom
GEMINI_API_KEY=your_google_gemini_api_key
CORS_ORIGINS=https://your-vercel-frontend.vercel.app,http://localhost:3000
```

### Get MongoDB Atlas Connection String:

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user
4. Click "Connect" → "Connect your application"
5. Copy the connection string and replace password

### Get Gemini API Key:

1. Go to https://aistudio.google.com/app/apikey
2. Create a new API key
3. Copy the key to your .env file

---

## Step 2: Deploy Backend to Render/Railway

### Option A: Render.com (Recommended - Free)

1. Push your code to GitHub
2. Go to https://render.com and sign in
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: escaperoom-backend
   - **Root Directory**: backend
   - **Build Command**: (leave empty)
   - **Start Command**: uvicorn server:app --host 0.0.0.0 --port 10000
6. Add Environment Variables:
   - MONGO_URL: your_mongodb_connection_string
   - DB_NAME: escaperoom
   - GEMINI_API_KEY: your_gemini_api_key
   - CORS_ORIGINS: your_vercel_frontend_url
7. Click "Deploy"

### Option B: Railway

1. Go to https://railway.app
2. Create new project
3. Connect GitHub repo
4. Add environment variables in Railway dashboard
5. Deploy

---

## Step 3: Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: frontend
5. Add Environment Variables (if needed):
   - REACT_APP_API_URL: your_backend_url (e.g., https://escaperoom-backend.onrender.com)
6. Click "Deploy"

---

## Step 4: Update Vercel Configuration

, update `frontend/vercel.json` with your actual backend URL:

```After deploying backendjson
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "https://your-backend-url.onrender.com/api/:path*" }
  ]
}
```

Then redeploy frontend.

---

## Step 5: Test Your Deployment

1. Visit your Vercel frontend URL
2. Test the interview panel - it should connect to your backend
3. If APIs fail, check:
   - CORS_ORIGINS includes your Vercel URL
   - Backend is running and accessible
   - Environment variables are set correctly

---

## Local Development

### Backend:

```
bash
cd backend
pip install -r requirements.txt
python server.py
# Runs on http://localhost:8000
```

### Frontend:

```
bash
cd frontend
npm install
npm start
# Runs on http://localhost:3000
```

---

## Architecture

- **Frontend**: React with Three.js (3D scenes)
- **Backend**: FastAPI with MongoDB
- **AI**: Google Gemini for interview questions and analysis
- **APIs**:
  - POST /api/generate-interview-question
  - POST /api/analyze-interview

---

## Troubleshooting

### CORS Errors:

- Ensure CORS_ORIGINS includes your frontend URL
- Check that backend .env is configured correctly

### API Not Working:

- Check Render/Railway logs for errors
- Verify MONGO_URL is valid
- Ensure GEMINI_API_KEY is set

### Frontend Not Loading:

- Check Vercel build logs
- Ensure all dependencies installed
- Verify package.json scripts are correct
