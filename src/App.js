import Header from "./components/Header/Header";
import ArticleList from "./components/ArticleList/ArticleList";
import { useState } from "react";
import Form from "./components/Form/Form";

function App() {
  const [user, setUser] = useState();

  const hasUser = Boolean(user);

  return (
    <div className="App h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser}/>}
    </div>
  );
}

export default App;
