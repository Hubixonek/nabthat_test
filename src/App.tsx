import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import MainPresenter from "./components/Main/MainPresenter";
import { AppProvider } from "./components/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <HeaderContainer />
        <MainPresenter />
      </AppProvider>
    </>
  );
}

export default App;
