import { useEffect, useState, type FormEvent } from "react";
import { Card } from "./components/Card/Card";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

export interface User {
  avatar_url: string;
  name: string;
  login: string;
  created_at: Date;
  public_repos: number;
  bio: string | null;
  followers: number;
  following: number;
  location: string;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
}

export const App = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState<User>();
  const [hasError, setHasError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasError(false);
    setErrMsg("");

    try {
      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(query)}`,
      );

      if (!response.ok) {
        setErrMsg("No results");
        setHasError(true);
        return;
      }

      const data = await response.json();
      setUser(data);
      setQuery("");
    } catch (error) {
      console.error("Failed to fetch the user", error);
      setErrMsg("Unable to search. Check your connection and try again.");
      setHasError(true);
    }
  };

  useEffect(() => {
    const loadInitialUser = async () => {
      const response = await fetch("https://api.github.com/users/octocat");

      if (!response.ok) {
        throw new Error(`Could not load octocat: ${response.status}`);
      }

      const data: User = await response.json();
      setUser(data);
    };

    loadInitialUser().catch((error) => {
      console.error("Failed to load the initial user:", error);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Form
        query={query}
        onSetQuery={setQuery}
        onSubmit={handleSubmit}
        hasError={hasError}
        errMsg={errMsg}
      />
      {user?.name && !hasError ? <Card user={user} /> : <ErrorPage />}
    </div>
  );
};
