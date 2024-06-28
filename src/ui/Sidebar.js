import styled from "styled-components"

// import Logo from './Logo'
import MainNav from './MainNav'
import AddProduct from "../Products/AddProduct"
import { useSelector } from "react-redux"


const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row:1 / -1;
    display:flex;
    flex-direction: column;
    gap:3.2rem;
`

export default function Sidebar() {
  const user = useSelector(state => state.users.user)

  return (
    <StyledSidebar>
      
      <MainNav />
      
      {
        (user?.role === 'admin') && <AddProduct />
      }
    </StyledSidebar>
  )
}
