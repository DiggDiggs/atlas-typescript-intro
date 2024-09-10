import placeholderImage from "../assets/placeholder.svg";

function CoverArt() {
  return (
    <div className="cover-art mb-6">
      <img
        src={placeholderImage}
        alt="Placeholder Cover Art Image"
        className="rounded-md h-96"
      />
    </div>
  );
}

export default CoverArt;