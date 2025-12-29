import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";


function StartGame() {
  return (
    <div>
      <h1 className="text-2xl mb-4">Start Game</h1>
      <TextInputFormContainer />
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default StartGame;
