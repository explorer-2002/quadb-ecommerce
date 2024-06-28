import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header"
import Sidebar from "./Sidebar"
import CartOverview from "../Cart/CartOverview"
import { useSelector } from "react-redux"


const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height:100vh;
`

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding:4rem 4.8rem 6.4rem ;
    overflow:auto;
`

const Container = styled.div`
    max-width:120rem;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    gap:3.2rem;
`

function AppLayout(){

    const user = useSelector(state => state.users.user)

return (
<StyledAppLayout>
<Header />
<Sidebar />

<Main>
  <Container>
  <Outlet />
  </Container>

</Main>

{ user?.name !== '' &&
<CartOverview />
}

</StyledAppLayout>
)

}

export default AppLayout;