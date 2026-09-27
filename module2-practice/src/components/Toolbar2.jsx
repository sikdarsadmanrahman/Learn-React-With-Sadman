function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlay() {
    alert(`Playing ${movieName}`);
  }

  return <Button onSmash={handlePlay}>{movieName}</Button>;
}

function UploadButton() {
  return (
    <Button
      onSmash={() => {
        alert(`Uploading...`);
      }}
    >
      Upload Image
    </Button>
  );
}

export default function Toolbar2() {
  return (
    <div>
      <PlayButton movieName="No movie" />
      <UploadButton />
    </div>
  );
}
