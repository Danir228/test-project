import Header from "../header/header";
import Main from "../main/main";

import "./app.scss";
import "./reset.scss";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
};

export default App;