import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="your name" type="text" />
      <p>
        <Button el="button">A button</Button>
      </p>
      <p>
        <Button el="anchor" href="google.com">
          A link
        </Button>
      </p>
    </main>
  );
}

export default App;
