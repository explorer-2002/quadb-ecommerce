
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useDispatch, useSelector } from 'react-redux';

import { removeUser } from './userSlice';

const UserName = styled.span`
  margin-left: 10px;
  font-size: 18px;
`;

function UserInfo() {
  const navigate = useNavigate()
  const user = useSelector(state => state.users.user)

  const dispatch = useDispatch()

  console.log(localStorage.getItem("name"))

  function handleLogout(){
    localStorage.removeItem("name");
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");

    dispatch(removeUser())
    navigate("/login")
  }

  return (
    <>
      <UserName>
        {user?.name}
        {user?.role === 'admin' && <span>  (admin)</span>}
      </UserName>

       {  user?.name !== '' &&
      <Button onClick={handleLogout} size="medium" variation="primary">Logout</Button>
       }
    </>
  )
}

export default UserInfo
