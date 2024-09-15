## Trademark Search Frontend Application
21BKT0060 Khushi Mittal

This project is a frontend application built with Next.js and TailwindCSS. The purpose of the application is to replicate the functionality and design of the Trademarkia search page, featuring a search bar, filters, and API integration to display trademark search results.

## Features
Search Functionality: Users can search for trademarks by name.
Filters: Users can filter search results by Owner, Law Firm, Attorney, and Status.
Loading States: A loading spinner appears during API requests.
Error Handling: Displays appropriate error messages when the API fails or no results are found.
SSR (Server-Side Rendering): Ensures that initial search results are rendered server-side for better SEO and faster page loads.
Persistent URLs: The application updates the URL with search query parameters, allowing users to share search result links.
TypeScript: The project is built with TypeScript for type safety.
## Technologies Used
Next.js: Framework for server-rendered React applications.
TailwindCSS: Utility-first CSS framework for styling.
TypeScript: Superset of JavaScript that adds static types.
Requirements
Before starting, ensure you have the following installed:

Node.js (>=14.x)
npm (>=6.x)
Project Setup
1. Clone the Repository
bash

git clone https://github.com/your-repo/trademark-search-app.git
cd trademark-search-app
2. Install Dependencies
bash

npm install
3. Configure TailwindCSS
TailwindCSS has already been installed and configured in the project. The configuration is located in the tailwind.config.js file. Global styles are defined in styles/globals.css.

4. Running the Application
To run the application locally in development mode, use the following command:

bash

npm run dev
This will start a development server at http://localhost:3000.

5. Build for Production
To build the project for production:

bash

npm run build
This will create an optimized production build in the .next directory.

6. Linting and Formatting
You can run the following commands to lint and format your code:

Linting: npm run lint
Formatting: npm run format
7. Search API Endpoint
The search functionality integrates with an external API to fetch trademark data. You must update the API URL in the pages/api/search.ts file with the correct endpoint.

typescript

const response = await axios.get('https://api.example.com/search', {
  params: { query, owner, lawFirm, attorney, status },
})
Replace 'https://api.example.com/search' with the actual API URL provided in the Postman documentation.

Project Structure
php

├── components/         # Reusable UI components
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   └── index.tsx       # Main search page
├── public/             # Static assets
├── styles/             # Global styles
├── README.md           # Project documentation
├── tailwind.config.js  # TailwindCSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
## Enhancements
TypeScript: The project is fully typed using TypeScript to ensure type safety.
Server-Side Rendering (SSR): The initial search results are server-rendered to enhance the performance and SEO of the application.
Persistent URL Parameters: The app updates the URL with search query parameters so that search results can be shared with others.
Bonus Features (Optional)
Pagination: Implement pagination for search results.
Advanced Error Handling: More detailed error handling based on API response codes.
Known Issues
Ensure that the external API URL is reachable and correct to avoid connection errors.