function SongTitle({ title, artist }) {
  return (
    <div>
      <h2 className="text-steel-blue-700 mb-2 text-2xl font-bold leading-8">
        {title}
      </h2>
      <p className="text-steel-blue-700 mb-4">{artist}</p>
    </div>
  );
}

export default SongTitle;
