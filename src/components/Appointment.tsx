import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Card,
  CardContent,
  Box
} from "@mui/material";

const Announcement = () => {
  const [myNameJa, setMyNameJa] = useState("上村亮太");
  const [myNameEn, setMyNameEn] = useState("Ryota Kamimura");

  const [seminarDate, setSeminarDate] = useState("");

  const [presenter, setPresenter] = useState("");


  return (
    <div className="App">
      <Box p={2}>
      <Container maxWidth="md">
        <p><Link to="/">&lt; 戻る</Link></p>
        <Typography variant="h5" gutterBottom>
          入力フォーム
        </Typography>
        <div className="input-container">
          <TextField
            label="自分の名前(日本語)"
            variant="outlined"
            fullWidth
            value={myNameJa}
            onChange={(event) => setMyNameJa(event.target.value)}
          />
          <TextField
            label="自分の名前(英語)"
            variant="outlined"
            fullWidth
            value={myNameEn}
            onChange={(event) => setMyNameEn(event.target.value)}
          />
          <TextField
            label="発表者名"
            variant="outlined"
            fullWidth
            value={presenter}
            onChange={(event) => setPresenter(event.target.value)}
          />
          <TextField
            label="ゼミの日付"
            variant="outlined"
            fullWidth
            value={seminarDate}
            onChange={(event) => setSeminarDate(event.target.value)}
          />
        </div>

        <Typography variant="h5" gutterBottom>
          メールの件名
        </Typography>
        <Card variant="outlined">
          <CardContent>
            { seminarDate }(水)のゼミについて　About the seminar on { seminarDate }(Wed.)
          </CardContent>
        </Card>


        <Typography variant="h5" gutterBottom>
          メールの本文
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <p>{ presenter } さん</p>

            <br></br>

            <p>こんにちは。情報数理研究室M1の{ myNameJa }です。</p>
            <p>{ seminarDate }(水)のゼミについて、進捗報告の発表をしていただきたいのですがいかがでしょうか。</p>
            <p>よろしくお願いします。</p>

            <br></br>

            <p>{ myNameJa }</p>

            <br></br>

            <p>-----------------------------------------------------------</p>

            <br></br>

            <p>Dear { presenter }, </p>

            <br></br>
            
            <p>I am { myNameEn } (first-year master's student in Degree Programs in System and Information Engineering).</p>
            <p>I would like you to give a presentation on the progress report of the seminar on { seminarDate } (Wed.).</p>
            <p>I look forward to hearing from you.</p>

            <br></br>

            <p>Best Regards,</p>

            <br></br>

            <p>{ myNameEn }</p>
          </CardContent>
        </Card>
      </Container>
      </Box>
    </div>
  );
};

export default Announcement;

