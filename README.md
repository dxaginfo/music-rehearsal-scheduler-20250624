# Rehearsal Scheduler

A comprehensive web application for automating band rehearsal scheduling, sending reminders, tracking attendance, and suggesting optimal rehearsal times based on member availability.

## Features

### User Management
- Create accounts with roles (band leader, member)
- Manage profile with instrument/role specification
- Create and manage bands/groups

### Scheduling
- Interactive calendar interface
- Availability polling and collection
- Conflict detection
- Optimal rehearsal time suggestions
- Recurring event creation

### Notifications
- Automated email/SMS reminders
- Calendar integration (Google, Apple, Outlook)
- Push notifications

### Attendance
- RSVP functionality
- Absence management
- Attendance history and reporting

### Venue Management
- Rehearsal space database
- Availability tracking
- Equipment inventory

### Communication
- In-app messaging
- Group discussion threads
- File sharing for sheet music/tracks

### Setlist Management
- Create and manage rehearsal setlists
- Track practice history
- Prioritize songs based on performance readiness

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux for state management
- Material UI components
- FullCalendar for calendar functionality
- Chart.js for analytics

### Backend
- Node.js with Express
- JWT and OAuth 2.0 for authentication
- Prisma ORM
- SendGrid for email
- Twilio for SMS

### Database
- PostgreSQL
- Redis for caching

### DevOps
- Docker containerization
- GitHub Actions for CI/CD
- AWS or Heroku deployment

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL
- Redis

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/music-rehearsal-scheduler-20250624.git
cd music-rehearsal-scheduler-20250624
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# Create .env file in the server directory
cp server/.env.example server/.env
# Edit the .env file with your database credentials and API keys
```

4. Set up the database
```bash
cd server
npx prisma migrate dev
```

5. Start the development servers
```bash
# Start the backend server
cd server
npm run dev

# Start the frontend server
cd ../client
npm start
```

6. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
music-rehearsal-scheduler/
├── client/                   # Frontend React application
│   ├── public/               # Static files
│   ├── src/                  # Source files
│   │   ├── assets/           # Images, fonts, etc.
│   │   ├── components/       # Reusable components
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom hooks
│   │   ├── pages/            # Page components
│   │   ├── services/         # API service calls
│   │   ├── store/            # Redux store setup
│   │   ├── styles/           # Global styles
│   │   ├── types/            # TypeScript type definitions
│   │   ├── utils/            # Utility functions
│   │   ├── App.tsx           # Main App component
│   │   └── index.tsx         # Entry point
│   └── package.json          # Frontend dependencies
│
├── server/                   # Backend Node.js/Express application
│   ├── prisma/               # Prisma schema and migrations
│   ├── src/                  # Source files
│   │   ├── config/           # Configuration files
│   │   ├── controllers/      # Route controllers
│   │   ├── middleware/       # Express middleware
│   │   ├── models/           # Data models
│   │   ├── routes/           # API routes
│   │   ├── services/         # Business logic
│   │   ├── utils/            # Utility functions
│   │   └── app.js            # Express app setup
│   └── package.json          # Backend dependencies
│
├── docker/                   # Docker configuration
│   ├── Dockerfile.client     # Frontend Dockerfile
│   ├── Dockerfile.server     # Backend Dockerfile
│   └── docker-compose.yml    # Docker Compose configuration
│
└── README.md                 # Project documentation
```

## API Documentation

The API documentation is available at `/api/docs` when running the server locally. It provides details on all available endpoints, request/response formats, and authentication requirements.

## Deployment

### Docker Deployment

1. Build and run using Docker Compose
```bash
docker-compose up -d
```

### Manual Deployment

#### Backend
1. Build the production server
```bash
cd server
npm run build
```

2. Start the server
```bash
npm start
```

#### Frontend
1. Build the production client
```bash
cd client
npm run build
```

2. Serve the static files using Nginx or another web server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Material UI](https://mui.com/)
- [FullCalendar](https://fullcalendar.io/)