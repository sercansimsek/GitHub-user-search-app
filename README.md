# GitHub User Search App

A React and TypeScript practice project for exploring GitHub profiles through the GitHub REST API. The app lets you search by username, view profile details, and switch between light and dark themes.

## ✨ Features

- Search GitHub profiles by username
- Trim and validate user input before making a request
- Load the `octocat` profile when the app first opens
- Display the user's avatar, name, username, bio, join date, public repositories, followers, and following
- Show location and available social, website, and company information, with fallback text when details are missing
- Handle unsuccessful API responses and network errors with user-facing feedback
- Switch between light and dark themes
- Use reusable React components and responsive SCSS styling

## 🛠️ Technologies Used

- **React 19** — Component-based UI and state management
- **TypeScript** — Typed props, event handling, and profile data
- **Vite** — Development server and production build
- **SCSS / Sass** — Styling, theme variants, and responsive layouts
- **GitHub REST API** — Source of public GitHub profile data
- **Fetch API** — Asynchronous HTTP requests
- **React Hooks** — `useState` for application state and `useEffect` for initial data loading and theme updates
- **ESLint** — Code-quality checks

## 📚 Most Crucial Learning

### Managing the full API request lifecycle

The biggest learning from this project was connecting a React interface to a real API and managing the flow from user input to the rendered result.

The app trims the entered username, checks that it is not empty, safely encodes it for the request URL, and fetches the profile:

```ts
const username = query.trim();

if (!username) {
  setErrMsg("Enter a GitHub username.");
  setHasError(true);
  return;
}

const response = await fetch(
  `https://api.github.com/users/${encodeURIComponent(username)}`,
);
```

The app then checks whether the response succeeded, processes the JSON data, and updates React state. Unsuccessful responses and network failures are handled separately so the user receives useful feedback.

This helped me understand the complete data flow:

**Input validation → API request → Response and error handling → State update → UI render**

### Other key learnings

- **React state and effects:** Managing the search query, selected profile, error state, and theme with `useState`; using `useEffect` to load an initial profile and apply the selected theme to the document.
- **TypeScript with API data:** Describing profile fields through a `User` interface and typing component props and form events.
- **Input validation and user feedback:** Preventing empty or whitespace-only searches before making a request and displaying messages when searches fail.
- **Optional profile information:** Providing fallback text when details such as a user's location, bio, website, or social information are unavailable.
- **Reusable components:** Separating the interface into `Header`, `Form`, `Card`, and `ErrorPage`.
- **Theme switching:** Using React state and a root `data-theme` attribute to coordinate light and dark styling.

## 🚀 Run Locally

Make sure [Node.js](https://nodejs.org/) and npm are installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/sercansimsek/GitHub-user-search-app.git
   ```

2. Open the project directory:

   ```bash
   cd GitHub-user-search-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## 🧰 Available Scripts

| Command           | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `npm run dev`     | Start the local development server                          |
| `npm run build`   | Run TypeScript project checks and create a production build |
| `npm run lint`    | Run ESLint                                                  |
| `npm run preview` | Preview the production build locally                        |

## 🎯 Final Takeaway

This project gave me practical experience building a data-driven React interface: validating user input, fetching external data asynchronously, handling errors, typing API-related data, and rendering optional profile information. It also strengthened my understanding of reusable components and theme management in a TypeScript and SCSS project.
