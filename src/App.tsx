import { Card } from "./components/Card/Card";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <Card />
    </div>
  );
};
