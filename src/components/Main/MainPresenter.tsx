import { useState, useEffect } from "react";
import "../../styles/main.css";
import "../../styles/footer.css";
import "../Footer/FooterContainer";
import FooterContaier from "../Footer/FooterContainer";
import { useAppContext } from "../AppContext";
const MainPresenter = () => {
  const { handleShowPersonalData, handleReset: contextReset } = useAppContext();
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [usedContents, setUsedContents] = useState([]);
  const [content, setContent] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus  Quia, omnis! sunt adipisci, soluta fuga veniam quod eius esse eos quos ipsa reiciendis a alias deserunt amet, aut unde natus? Maxime sequi labore quam neque deleniti, velit architecto veritatis minus! Perferendis atque iusto vitae, porro aliquid accusantium blanditiis minus consectetur sapiente. Sapiente earum laborum debitis eveniet atque dolorum ea quisquam? A doloribus incidunt neque praesentium nisi quia, excepturi nihil officiis, odit odio error debitis ut."
  );

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleReplace = () => {
    let newContent = getContent(selectedOption);
    setContent(newContent);
    setUsedContents([newContent]);
  };

  const handleAppend = () => {
    let newContent = getContent(selectedOption);
    if (!usedContents.includes(newContent)) {
      setContent((prevContent) => prevContent + ` ${newContent}`);
      setUsedContents((prev) => [...prev, newContent]);
    } else {
      alert("To już było, pora na coś nowego :))");
    }
  };

  const getContent = (option) => {
    if (option === "first") {
      return data[0]?.content || "";
    } else if (option === "second") {
      return data[1]?.content || "";
    } else if (option === "random") {
      const randomItems = data.slice(2);
      const randomIndex = Math.floor(Math.random() * randomItems.length);
      return randomItems[randomIndex]?.content || "";
    }
    return "";
  };

  const handleReset = () => {
    setSelectedOption("");
    setUsedContents([]);
    setContent(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus  Quia, omnis! sunt adipisci, soluta fuga veniam quod eius esse eos quos ipsa reiciendis a alias deserunt amet, aut unde natus? Maxime sequi labore quam neque deleniti, velit architecto veritatis minus! Perferendis atque iusto vitae, porro aliquid accusantium blanditiis minus consectetur sapiente. Sapiente earum laborum debitis eveniet atque dolorum ea quisquam? A doloribus incidunt neque praesentium nisi quia, excepturi nihil officiis, odit odio error debitis ut."
    );
    contextReset();
  };

  return (
    <>
      <main className="main">
        <div className="main__titleGroup">
          <h1 className="main__title">Nagłówek H1</h1>
          <span className="main__underline" />
        </div>
        <div className="main__blockGroup">
          <div className="main__firstBlock">
            <h2>BLOK PIERWSZY</h2>
            <div className="checkboxGroup">
              <label className="checkboxLabel">
                <input
                  type="radio"
                  className="checkboxInput"
                  value="first"
                  checked={selectedOption === "first"}
                  onChange={handleRadioChange}
                />
                <span className="checkboxCustom" />
                Opcja pierwsza
              </label>
              <label className="checkboxLabel">
                <input
                  type="radio"
                  className="checkboxInput"
                  value="second"
                  checked={selectedOption === "second"}
                  onChange={handleRadioChange}
                />
                <span className="checkboxCustom" />
                Opcja druga
              </label>
              <label className="checkboxLabel">
                <input
                  type="radio"
                  className="checkboxInput"
                  value="random"
                  checked={selectedOption === "random"}
                  onChange={handleRadioChange}
                />
                <span className="checkboxCustom" />
                Opcja losowa
              </label>
            </div>
          </div>
          <div className="main__secondBlock">
            <h2>BLOK DRUGI</h2>
            <div className="main__buttonGroup">
              <button onClick={handleReplace}>ZASTĄP</button>
              <button onClick={handleAppend}>DOKLEJ</button>
            </div>
          </div>
          <div className="main__thirdBlock">
            <h2>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</h2>
            <p>{content}</p>
          </div>
        </div>
      </main>
      <FooterContaier
        handleShowPersonalData={() => {}}
        handleReset={handleReset}
      />
    </>
  );
};

export default MainPresenter;
