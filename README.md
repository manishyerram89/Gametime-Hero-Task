# Gametime Hero – RSVP Manager

This is a React application built as part of the Gametime Hero coding challenge. It allows us to manage RSVP responses by adding players, updating their status, and viewing overall statistics.

## Overview

The application is designed to be simple, scalable, and maintainable. It uses best practices like dependency injection, type safety with TypeScript, and separation of concerns between logic and UI. The core logic is handled in a dedicated service layer to ensure testability and code cleanliness.

## Features

- Add or update a player's RSVP  
- RSVP statuses supported: "Yes", "No", and "Maybe"  
- Automatically updates the RSVP list  
- Displays real-time stats: total, confirmed, declined, and maybe   
- Fully responsive layout with Bootstrap  

## Getting Started

### 1. Clone the repository

git clone https://github.com/manishyerram89/Gametime-Hero-Task.git  
cd Gametime-Hero-Task

### 2. Install dependencies

npm install

### 3. Start the development server

npm start

The app will be available at http://localhost:3000

## Project Structure

src/  
├── services/  
│   ├── rsvp.service.ts        // Contains RSVP logic  
│   └── console.logger.ts      // Simple logger used via DI  
├── types/  
│   └── rsvp.types.ts          // TypeScript interfaces and enums  
├── App.tsx                    // Main component containing UI and state logic  
└── index.tsx                  // Entry point  

## Styling and Responsiveness

- Bootstrap 5 is used for layout and styling  
- The app layout is responsive and works across different screen sizes  
- RSVP List container becomes scrollable if there are too many entries to fit the card  

## Contact

Author: Manish Yerram  
Email: manishyerram89@gmail.com  
GitHub: https://github.com/manishyerram89  
