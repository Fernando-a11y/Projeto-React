
function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  
  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}`); // Use backticks for template literals
    }
  
    return (
      <Button onClick={handlePlayClick}>
        Play {movieName} // Display the movie name correctly
      </Button>
    );
  }
  
  function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading')}>
        Upload Image
      </Button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
      </div>
    );
  }
  