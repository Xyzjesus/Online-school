import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "layouts/Header";
import { Context } from "context";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import { ROUTES } from "consts";
import { WalletConnect, Dashboard, Deposit, Withdraw, TransferOwnership, Mint, LeaderBoard } from "./pages";
// import { User } from "types/types";
// import UserList from "components/UserList";


const StyledContainer = styled(Container)({
  paddingTop: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

function App() {
  const { address } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!address) {
      navigate(ROUTES.connect);
    }
  }, [address, navigate]);


  return (
    <StyledContainer>
      <Header />
      <Routes>
        <Route path={ROUTES.connect} element={<WalletConnect />} />
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
        <Route path={ROUTES.deposit} element={<Deposit />} />
        <Route path={ROUTES.withdraw} element={<Withdraw />} />
        <Route path={ROUTES.transferOwnership} element={<TransferOwnership />} />
        <Route path={ROUTES.mint} element={<Mint />} />
        <Route path={ROUTES.leaderboard} element={<LeaderBoard />} />
      </Routes>
    </StyledContainer>
  );
}

export default App;
