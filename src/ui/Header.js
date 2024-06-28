import styled from "styled-components"
import UserInfo from "../User/UserInfo"
import AddProduct from "../Products/AddProduct"


const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding:1.2rem 4.8rem;
    border-bottom:1px solid var(--color-grey-100);
    display:flex;
    justify-content: space-between;
    align-items: center;
`

export default function Header() {
 
  return (
    <StyledHeader>
      {
        localStorage.getItem("name") ?? <UserInfo />
      }

    </StyledHeader>
  )
}