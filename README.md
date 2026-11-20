# Code Forge — Frontend

React + Vite, plain CSS variables, React Router.

## Run
    npm install
    cp .env.example .env     # set VITE_API_URL
    npm run dev

## Build
    npm run build

## Content
All text/placeholders live in `src/data.js` (items in [BRACKETS] are placeholders).

## Contact form
Sends `POST {VITE_API_URL}/contact` with JSON `{ name, email, type, message }` (credentials included).
