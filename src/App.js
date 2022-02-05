import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./ThemeContext";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar></Navbar>
        <div className='main'>
          <Switch>
            <Route path='/post/:postId'>
              <PostPage></PostPage>
            </Route>
            <Route path='/'>
              <HomePage></HomePage>
            </Route>
          </Switch>
        </div>
        <div className='footer'>Awesome blog, all rights reserved</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
