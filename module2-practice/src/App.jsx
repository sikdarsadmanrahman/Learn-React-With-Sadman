import Toolbar from "./components/Toolbar";
import Toolbar2 from "./components/Toolbar2";

export default function App() {
  function onClickHandler() {
    console.log("Button clicked");
  }

  return (
    <>
      <button onClick={onClickHandler}>I can't do anything</button>
      <button
        onClick={() => {
          alert("button clicked");
        }}
      >
        I can show message
      </button>
      <Toolbar />
      <Toolbar2 />
    </>
  );
}
