Healthcare Appointment Booking App
This is a simple healthcare appointment booking web app where users can see a list of doctors, view their details, and book appointments easily.

 Tools & Libraries I Used
Frontend (Next.js + Bootstrap)
Next.js – For building the frontend pages and routing

Bootstrap – To quickly style the UI without writing a lot of CSS

Axios – For making API calls

React Hooks – Like useState, useEffect, and useRouter for managing state and navigation

🖥️ Backend (Node.js + Express)
Node.js - Framework for backend
Express.js – For building the backend API
CORS - cross-origin support

✨ What the App Can Do
Show a list of available doctors

View more details about each doctor

Book an appointment using a simple form

Show a loader while fetching or submitting data

Works well on both mobile and desktop

⏳ What I Would Improve With More Time

Add login/signup (so users can manage their appointments)

Show doctors’ available dates and time slots

Send email confirmations for booked appointments

Add a dashboard for users to track their appointments

Create an admin panel to manage doctors and appointments

Write tests to check if everything is working properly

Maybe build a mobile version using React Native

 Challenges I Faced
1. Doctor details page
Sometimes the data didn’t load properly when directly visiting the detail page

I fixed it by making sure the data was fetched after the doctor ID was ready

2. Loading feedback
Initially, it looked like nothing was happening when clicking “Book Appointment”

I added a loading spinner to make it clear that something is being processed

3. Connecting frontend and backend
Faced CORS issues at first

Solved it by adding the CORS middleware in the backend and making sure both frontend and backend were running properly

 How to Run the App
For Backend
```
cd backend
npm install
npm start
```
For Frontend
```
cd frontend
npm install
npm run dev
```
