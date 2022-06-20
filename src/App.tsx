import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "layouts/Header";
import { Context } from "context";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import { ROUTES } from "consts";
import { WalletConnect, Dashboard, Deposit, Withdraw, TransferOwnership, Mint, LeaderBoard } from "./pages";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY-qQ3cSPkesRnLDzhk87WZvfgoz2udgM",
  authDomain: "code-punks-online-school.firebaseapp.com",
  projectId: "code-punks-online-school",
  storageBucket: "code-punks-online-school.appspot.com",
  messagingSenderId: "705581633580",
  appId: "1:705581633580:web:c255fae48f100643b38189",
  measurementId: "G-3J5J90M16D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
