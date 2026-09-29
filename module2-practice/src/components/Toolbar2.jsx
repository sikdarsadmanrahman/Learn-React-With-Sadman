function Button({ onSmash, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSmash();
        console.log(children);
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar2() {
  return (
    <div className="Toolbar" onClick={() => alert("Toolbar is clicked")}>
      <Button onSmash={() => alert("Movie is Hara")}>No Movie</Button>
      <Button onSmash={() => alert("Mahsa Allah, you're on the right track.")}>
        Halal Life
      </Button>
    </div>
  );
}
