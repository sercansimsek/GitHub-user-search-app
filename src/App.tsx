import { useState, type FormEvent } from "react";
import { Card } from "./components/Card/Card";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

export const App = () => {
  const [query, setQuery] = useState("octocat");
  const [user, setUser] = useState();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(query)}`,
    );
    const data = await response.json();
    setUser(data);
  };

  console.log(user);

  return (
    <div className="App">
      <Header />
      <Form query={query} onSetQuery={setQuery} onSubmit={handleSubmit} />
      <Card />
    </div>
  );
};
