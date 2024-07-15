import FooterPresenter from "./FooterPresenter";
import { useAppContext } from "../AppContext";

const FooterContaier = ({ handleReset }) => {
  const { setShowPersonalData } = useAppContext();

  const handleShowPersonalData = () => {
    setShowPersonalData(true);
  };
  return (
    <FooterPresenter
      handleShowPersonalData={handleShowPersonalData}
      handleReset={handleReset}
    />
  );
};

export default FooterContaier;
