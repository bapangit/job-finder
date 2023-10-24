import Button from "Components/Buttons/Button";
import { useNavigate } from "react-router";

function Lost() {
  const navigate = useNavigate();
  return (
    <div>
      Page Not Found <Button label="Go To Home" onClick={() => navigate("/")} />
    </div>
  );
}

export default Lost;
