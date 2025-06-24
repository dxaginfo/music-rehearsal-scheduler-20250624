# Rehearsal Scheduler

A comprehensive web application for scheduling and managing band rehearsals. The application allows musicians to create groups, schedule rehearsals, track attendance, manage venues, and coordinate with band members efficiently.

## Features

- **User Authentication**: Secure login and registration with JWT
- **Group Management**: Create and manage musical groups/bands
- **Rehearsal Scheduling**: Plan rehearsals with date, time, and venue
- **Smart Scheduling**: Get suggestions for optimal rehearsal times based on member availability
- **Attendance Tracking**: Monitor who's attending rehearsals
- **Venue Management**: Manage rehearsal spaces and their availability
- **Song Management**: Track songs to be practiced during rehearsals
- **Notifications**: Automated email and SMS reminders for upcoming rehearsals
- **Mobile Responsive**: Works on all devices (desktop, tablet, mobile)

## Technology Stack

### Frontend
- React 18
- TypeScript
- Redux Toolkit for state management
- Material UI for component library
- FullCalendar for calendar views
- Formik & Yup for form handling and validation

### Backend
- Node.js with Express
- TypeScript
- Prisma ORM for database operations
- PostgreSQL database
- JWT for authentication
- SendGrid for email notifications
- Twilio for SMS notifications

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/music-rehearsal-scheduler-20250624.git
cd music-rehearsal-scheduler-20250624
```

2. Install dependencies for the server
```bash
cd server
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env file with your configuration
```

4. Run database migrations
```bash
npx prisma migrate dev
```

5. Seed the database (optional)
```bash
npm run seed
```

6. Install dependencies for the client
```bash
cd ../client
npm install
```

7. Start development servers

In one terminal (server):
```bash
cd server
npm run dev
```

In another terminal (client):
```bash
cd client
npm start
```

8. Access the application at http://localhost:3000

## Deployment

### Backend Deployment
- Set `NODE_ENV=production` in your environment
- Run `npm run build` to compile TypeScript
- Use a process manager like PM2 to run the server

### Frontend Deployment
- Run `npm run build` in the client directory
- Deploy the static files to a web server or CDN

## API Documentation

The API documentation is available at `/api-docs` when the server is running in development mode.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.