export default function Toolbar() {
  return (
    <div
      onClick={() => {
        alert("Toolbar clicked");
      }}
    >
      <button
        onClick={() => {
          alert("No Movie clicked");
        }}
      >
        No Movie
      </button>
      <button
        onClick={() => {
          alert("Masha Allah! You are on the right TrackEvent.");
        }}
      >
        Lead a Halal Life
      </button>
    </div>
  );
}
