# GitHub User Search App

A React and TypeScript practice project built to improve my skills in working with third-party APIs, managing asynchronous data, and creating responsive, interactive user interfaces.

The app allows users to search for GitHub profiles and explore information such as repositories, followers, following, location, and profile links. It also includes light and dark themes for a more personalized experience.

## ✨ Features

- Search for GitHub users by username
- Display profile information dynamically using the GitHub REST API
- Show profile details, including avatar, bio, repositories, followers, and following
- Display an initial GitHub profile when the app loads
- Handle unsuccessful searches and network errors
- Switch between light and dark themes
- Responsive interface for different screen sizes
- Type-safe data handling with TypeScript

## 🛠️ Technologies Used

### Core technologies

- **React 19** — Building reusable UI components and managing application state
- **TypeScript** — Defining data structures and improving type safety
- **Vite** — Providing the development server and production build tooling
- **SCSS / Sass** — Organizing styles and implementing themes and responsive layouts
- **HTML5** — Structuring the application
- **CSS3** — Styling the interface, responsive layouts, and interactive states

### API integration

- **GitHub REST API** — Retrieving user profiles and their public GitHub information
- **Fetch API** — Making asynchronous HTTP requests to the GitHub API

### Development tools

- **ESLint** — Identifying potential code issues and maintaining code quality
- **React Hooks** — Managing component state and side effects with `useState` and `useEffect`

## 📚 Most Crucial Learning

### Connecting a React application to a real API

The most important lesson from this project was learning how to retrieve external data, manage the different outcomes of an API request, and display the results dynamically in a React application.

Instead of relying on static data, the app sends a request to the GitHub API using the requested username:

```ts
const response = await fetch(
  `https://api.github.com/users/${encodeURIComponent(query)}`,
);
```

The application then checks whether the request was successful, processes the JSON response, and updates the user state:

```ts
if (!response.ok) {
  setErrMsg("No results");
  setHasError(true);
  return;
}

const data = await response.json();
setUser(data);
```

This helped me understand the complete data flow:

**User input → API request → Response handling → React state → UI update**

I also learned that API integration involves more than successfully fetching data. A reliable application must account for unsuccessful responses, network errors, and situations where the requested user cannot be found.

## 💡 Other Key Learnings

### 1. Managing state and side effects in React

I practiced using `useState` to manage several aspects of the application:

- The username entered into the search field
- The currently displayed GitHub user
- Error messages and error states
- The selected color theme

I also used `useEffect` to load an initial profile when the application starts and to update the document's theme attribute when the theme changes.

This reinforced how React state and side effects help keep an interface synchronized with application data.

### 2. Working with TypeScript and external data

I defined a `User` interface to describe the profile information used by the application.

This helped me better understand how TypeScript can make data structures explicit, improve code readability, and provide better editor support when working with API responses.

### 3. Handling errors and improving user experience

I practiced handling unsuccessful API responses and network failures separately, displaying an appropriate message when a search does not succeed.

This reinforced an important principle: an application should provide useful feedback instead of leaving users confused when something goes wrong.

### 4. Implementing a light and dark theme

I implemented theme switching using React state and a `data-theme` attribute on the document's root element.

This helped me understand how application state can control global styling and how CSS can respond to different theme settings.

### 5. Building reusable components

I separated the interface into components such as `Header`, `Form`, `Card`, and `ErrorPage`.

This gave me more practice organizing a React application into smaller, focused components that are easier to maintain and reuse.

## 🚀 Running the Project Locally

Make sure you have Node.js and npm installed.

Clone the repository:

```bash
git clone https://github.com/sercansimsek/GitHub-user-search-app.git
```

Navigate to the project directory:

```bash
cd GitHub-user-search-app
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the linter:

```bash
npm run lint
```

## 🎯 Final Takeaway

This project helped me deepen my understanding of how a React application communicates with an external API and transforms the returned data into an interactive user experience.

The biggest takeaway was learning to manage the full lifecycle of dynamic data: collecting user input, making asynchronous requests, handling errors, updating state, and rendering the appropriate UI.

It also gave me valuable practice with TypeScript, reusable components, and theme management.
