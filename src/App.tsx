import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Announcement from "./components/Announcement";
import Appointment from "./components/Appointment";


const Home = () => {
  return (
    <>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="30vh"
      width="150px"
      margin="auto"
    >
      <img
          src="/mma.png"
          alt="MMA"
          style={{ width: "100%" }}
      />
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="80%"
      margin="auto"
    >
      <Box mb={2}>
        <Typography variant="body1">
          MMAゼミ用のメール送信テンプレートです。
        </Typography>
        <Typography variant="body1">
          使った人は<Link to="https://github.com/nope0124/mma-announce">GitHub</Link>に星押してくれると嬉しいです
        </Typography>
      </Box>
      <Typography variant="body1">
        <Link to="/announcement">全体連絡テンプレートページへ移動</Link>
      </Typography>
      <Typography variant="body1">
        <Link to="/appointment">個別連絡テンプレートページへ移動</Link>
      </Typography>
    </Box>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
};

export default App;
