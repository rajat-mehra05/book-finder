# Book Finder

A React application that allows users to search for books using the Google Books API.

## Features

- Search books by title, author, or keywords
- Real-time search with debouncing (500ms delay)
- Responsive design for mobile and desktop
- Smooth animations using Framer Motion
- Loading states and error handling
- Auto-search functionality

## Technologies Used

- React 18.3.1
- Framer Motion 12.23.12 - High performance animation library for React
- Axios 1.11.0 - HTTP client for API requests
- Google Books API - For book data

## Optimizations Implemented

### Performance Optimizations

- **React.memo**: Components are memoized to prevent unnecessary re-renders
- **useCallback**: Functions are memoized to maintain referential equality
- **Debounced Search**: 500ms delay to reduce API calls
- **Lazy Loading**: Images use lazy loading for better performance
- **CSS Optimizations**: will-change properties and optimized transitions

### User Experience Improvements

- **Loading States**: Visual feedback during API calls
- **Error Handling**: Graceful error handling with user-friendly messages
- **Empty States**: Helpful messages when no results are found
- **Auto-search**: Automatic search after typing (with debouncing)
- **Responsive Design**: Mobile-friendly layout

### Code Quality

- **Custom Hooks**: Extracted API logic into reusable hooks
- **Better Error Handling**: Comprehensive error states
- **Improved Accessibility**: Better alt texts and semantic HTML
- **Code Organization**: Separated concerns with custom hooks

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## API Usage

The app uses the Google Books API to fetch book data. Search queries are automatically debounced to reduce API calls and improve performance.

## Performance Metrics

- Reduced unnecessary re-renders with React.memo
- Optimized API calls with debouncing
- Improved loading times with lazy loading
- Better user experience with loading/error states
