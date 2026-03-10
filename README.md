## Tech Conference Event Registration System

A web-based Tech Conference Registration System built using React, Vite, React Router, Tailwind CSS, and Local Storage.

The system allows users to view conference information, register for the event, review their registration details, and confirm participation. 
The application also detects returning users by storing registration data locally in the browser.

---

## Features

-Event Information Page
-Displays details about the conference including:

. Event name
. Date and time
. Venue location
. Conference description
. Key topics
. Register button
. Registration Form

---

## Users can submit their information through a form.

Fields include:
- Full Name
- Email Address
- Phone Number
- Organization or Institution
- Ticket Type (Standard, VIP, Student)
- Dietary Requirements
- Additional Notes

The form uses React controlled components to manage user input.

---

## Registration Review

After filling out the form, users can:
- Review their submitted information
- Edit incorrect details
- Confirm their registration
- Confirmation Page

Once the user confirms their registration:
- A confirmation message is displayed
- Registration data is stored in browser local storage
- Returning User Detection

When a user revisits the application:

- The system checks the browser’s local storage
  
If registration data exists, the user is redirected to a page displaying their saved registration details

Users can also cancel their registration.

---
## Technologies Used

- React
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript
- Browser Local Storage

---
## Project Structure

tech-conference-registration
│
├── src
│   ├── pages
│   │   ├── info.jsx
│   │   ├── register.jsx
│   │   ├── review.jsx
│   │   ├── Confirmation.jsx
│   │   └── mypage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
└── README.md

---
## Installation

1. Clone the repository
git clone https://github.com/your-username/tech-conference-registration.git

3. Navigate to the project folder
cd tech-conference-registration

5. Install dependencies
npm install

7. Start the development server
npm run dev

User views Event Information

Clicks Register

Completes Registration Form

Reviews submitted information

Confirms registration

Receives confirmation message

Returning users can view saved registration

---
## Learning Objectives

This project demonstrates:

Building multi-page React applications
Implementing client-side routing with React Router
Managing form state using controlled components
Storing data using browser local storage
Handling returning users automatically

---
## Author

Cynthia Iradukunda
