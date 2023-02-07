// import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "../components/MyComponent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EditPage from "../components/Edit/EditPage";
import MakePost from "../components/Posts/MakePost";
import { useState } from "react";
import { useSelector } from "react-redux";
import Post from "../components/Posts/Post";

/**
 * 2 components: class component / function component (function, arrow function)
 *
 */

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  // this is JSX
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello reactJs with Duke
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <MyComponent></MyComponent>
      </header> */}
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className="post-container">
            <Post />
          </div>
          <Footer setOpenPost={setOpenPost} isOpenPost={isOpenPost} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePost setOpenPost={setOpenPost} />
        </>
      )}
      {pending && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error"> Error when fetching data from server!! </p>
      )}
    </div>
  );
}

export default App;
