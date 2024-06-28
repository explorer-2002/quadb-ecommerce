import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: 10px 0;
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.primary ? '#0056b3' : '#5a6268'};
  }
`;

function Dashboard() {
  return (
    <div>
      <ButtonContainer>
      <Link to="/login" className="w-full text-center"><Button primary>Login</Button></Link>
      <Link to="/signup" className="w-full text-center"><Button>Signup</Button></Link>
    </ButtonContainer>
    </div>
  )
}

export default Dashboard
