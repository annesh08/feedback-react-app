function App() {
  const title = "Big Title";
  const desc = "The quick brown fox jumps over the lazy dog.";
  const comments = [
    { id: 1, text: "Comment number 1" },
    { id: 2, text: "Comment number 2" },
    { id: 3, text: "Comment number 3" },
    { id: 4, text: "Comment number 4" },
  ];
  return (
    <div className="main">
      <h1>{title.toUpperCase()}</h1>
      <p>{desc}</p>

      <div className="Comments">
        <h3>Comments : {comments.length}</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
