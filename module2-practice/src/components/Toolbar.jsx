function AlertHandler({ message, children }) {
  return (
    <button
      onClick={() => {
        alert(message);
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertHandler message="Movie is haram">No Movie</AlertHandler>
      <AlertHandler message="Uploading...">Upload Image</AlertHandler>
    </div>
  );
}
