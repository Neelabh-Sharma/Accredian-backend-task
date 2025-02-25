# Backend Server

## Overview
This is the backend server for the referral system, built with Node.js, Express, and Prisma ORM, and using MySQL as the database.

## Features
- Referral submission API
- Validation of user input
- Prevents duplicate referrals
- Sends confirmation email upon successful referral submission

## Tech Stack
- Node.js
- Express.js
- Prisma ORM
- MySQL
- Nodemailer (for email service)

## Installation

### Prerequisites
- Node.js installed
- MySQL database setup
- Prisma installed globally (`npm install -g prisma`)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/backend.git
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```env
     DATABASE_URL="mysql://user:password@localhost:3306/database_name"
     PORT=5000
     EMAIL_USER="your-email@example.com"
     EMAIL_PASS="your-email-password"
     ```
4. Initialize Prisma and migrate the database:
   ```sh
   npx prisma migrate dev --name init
   ```
5. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
### Submit Referral
- **Endpoint:** `POST /api/referrals`
- **Body:**
  ```json
  {
    "referrerName": "John Doe",
    "referrerEmail": "john@example.com",
    "referralCourse": "Data Science",
    "referredName": "Jane Doe",
    "referredEmail": "jane@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Referral submitted successfully!",
    "referral": { /* Referral data */ }
  }
  ```

## License
This project is licensed under the MIT License.

