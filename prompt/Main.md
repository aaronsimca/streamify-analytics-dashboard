# Cursor IDE Structured Prompt

## Project Overview

[Project Name]: Streamify Analytics Dashboard
[Key Features]:

- Key Metrics Display
- Data Visualization Charts
- Interactive Data Table
- Responsive Design
- User Interaction Features

## Technology Stack

- Frontend: React, Tailwind CSS (or preferred CSS framework)
- State Management: React Context API or Redux
- Data Mocking: JSON Server, MirageJS, or similar
- Additional Tools: Chart.js or D3.js for data visualization

## Development Guidelines

### General

1. Follow best practices for clean, maintainable React code.
2. Implement error handling and logging where appropriate.
3. Ensure responsive design for all screen sizes.
4. Optimize for performance with techniques like lazy loading and memoization.

### Frontend

1. Create new components in a `/components` directory.
2. Implement a single-page application (SPA) structure.
3. Use modular CSS or styled-components for styling.
4. Implement sorting and filtering functionalities for the data table.
5. Add interactive features to charts (e.g., hover effects, click events).

### Backend (Mocked)

1. Set up a mock API using JSON Server or MirageJS.
2. Create realistic mock data for all required metrics and charts.
3. Implement API endpoints for fetching different types of data.

## Feature Implementation

Key Metrics Display:

- Description: Cards showing important metrics
- Frontend Tasks:
  1. Create reusable card component
  2. Implement data fetching from mock API
  3. Display Total Users, Active Users, Total Streams, Revenue, and Top Artist

Data Visualization:

- Description: Charts for User Growth, Revenue Distribution, and Top Streamed Songs
- Frontend Tasks:
  1. Set up chosen charting library (e.g., Chart.js)
  2. Create User Growth line chart component
  3. Implement Revenue Distribution pie chart
  4. Develop Top 5 Streamed Songs bar chart
  5. Add interactivity to charts (hover effects, click events)

Data Table:

- Description: Interactive table showing recent stream data
- Frontend Tasks:
  1. Create table component with sorting and filtering capabilities
  2. Implement pagination or infinite scrolling
  3. Add columns for Song Name, Artist, Date Streamed, Stream Count, and User ID

User Interaction:

- Description: Sorting, filtering, and chart interaction features
- Frontend Tasks:
  1. Implement sorting functionality for the data table
  2. Add filtering options for artist and song name
  3. Create hover and click interactions for charts
  4. Ensure all interactions update related components (e.g., filtering table updates charts)

## Testing

- Implement unit tests for at least one component using Jest or React Testing Library.
- Test sorting and filtering functionalities.
- Ensure responsiveness across different screen sizes.

## Deployment

1. Set up a Git repository for version control.
2. Ensure the application can be run locally with simple commands (npm install, npm start).
3. [Optional] Deploy the application to a hosting service like Vercel, Netlify, or GitHub Pages.

## Additional Instructions

- Focus on creating a visually appealing and user-friendly interface.
- Consider adding additional features that would be valuable for a music streaming analytics dashboard.
- Optimize the application for fast loading times and minimal re-renders.
- Include a README file explaining your thought process, how to run the application, and any trade-offs made.
- Complete and submit the assignment within 2-3 days, or communicate if additional time is needed.

Remember to adapt and expand this prompt based on your specific implementation decisions and any additional features you choose to include.
