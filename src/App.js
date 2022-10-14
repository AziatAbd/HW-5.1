import "./App.css";

const comment = [
  {
    id: "e1",
    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    id: "e2",
    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    id: "e3",

    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];

function App() {
  return (
    <div className="App">
      {comment.map((item) => {
        return (
          <div className="wrapper" key={item.id}>
            <div className="user-info">
              <img src={item.author.avatarUrl} alt="" />
              <p className="user-name">{item.author.name}</p>
            </div>
            <div>
              <div className="comment-text">{item.text}</div>
              <div className="comment-date">{item.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
