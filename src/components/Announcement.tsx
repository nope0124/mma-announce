import { useState } from "react";
import { Link } from "react-router-dom";
import DynamicForm from './DynamicForm';
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
  const [nextSeminarDate, setNextSeminarDate] = useState("");

  const [presenters, setPresenters] = useState<string[]>([]);
  const [nextPresenters, setNextPresenters] = useState<string[]>([]);

  const [formUrl, setFormUrl] = useState("");

  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <Box p={2}>
      <Container maxWidth="md">
        <p><Link to="/">&lt; 戻る</Link></p>
        <Typography variant="h4" gutterBottom>
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
            label="自分のEmail"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="ゼミの日付"
            variant="outlined"
            fullWidth
            value={seminarDate}
            onChange={(event) => setSeminarDate(event.target.value)}
          />
          <TextField
            label="次回ゼミの日付"
            variant="outlined"
            fullWidth
            value={nextSeminarDate}
            onChange={(event) => setNextSeminarDate(event.target.value)}
          />
          <TextField
            label="アンケートURL"
            variant="outlined"
            fullWidth
            value={formUrl}
            onChange={(event) => setFormUrl(event.target.value)}
          />
          <Typography variant="h6">発表者一覧</Typography>
          <DynamicForm forms={presenters} setForms={setPresenters} />
          <Typography variant="h6">次の発表者一覧</Typography>
          <DynamicForm forms={nextPresenters} setForms={setNextPresenters} />
        </div>


        <Typography variant="h4" gutterBottom>
          メールの文面
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <p>情報数理研究室の皆様</p>

            <br></br>

            <p>M1の{ myNameJa }です。</p>
            <p>{ seminarDate } (水)のゼミについての連絡です。</p>

            <br></br>

            <p>時間：</p>
            <p>{ seminarDate } (水) 9:00~</p>

            <br></br>

            <p>内容：</p>
            <p>
              {presenters.map((presenter) => (
                presenter.length > 0 &&
                <span>{ presenter } さん、</span>
              ))}
              （研究進捗報告）
            </p>

            <br></br>
            
            <p>方法：</p>
            <p>Teamsのビデオ会議(「研究室ゼミ」のチャネル内)</p>
            <p>発表者、B4、M1、教員は原則対面 @SB911-1</p>

            <br></br>

            <p>ゼミは体調不良などでなければ"必ず"出席をお願いします。</p>
            <p>また、ゼミについてのアンケートを実施しております(進捗報告と出席確認を含む)。</p>
            <p>当日までに"必ず"記入してください。</p>
            <p>{ formUrl }</p>

            <br></br>

            <p>今回を含むこれまでのアンケート結果は、研究室ゼミチャネルのフォルダ「進捗報告_回答(progress_reports)」内にあります。</p>

            <br></br>

            <p>次回以降の発表順(予定)</p>
            <p>{ nextSeminarDate } (水) 
              {nextPresenters.map((nextPresenter) => (
                nextPresenter.length > 0 &&
                <span> { nextPresenter } さん、</span>
              ))}
              （進捗報告）
            </p>

            <br></br>

            <p>-----------------------------------------------------------</p>

            <br></br>

            <p>Dear MMA's members</p>

            <br></br>

            <p>I am { myNameEn } ( first-year master's student in Degree Programs in System and Information Engineering).</p>
            <p>I announce the schedule for the seminar.</p>
            
            <br></br>
            
            <p>Date:</p>
            <p>{ seminarDate } (Wed.) 9:00~</p>

            <br></br>

            <p>About:</p>
            <p>
              {presenters.map((presenter) => (
                presenter.length > 0 &&
                <span>{ presenter } さん、</span>
              ))}
              （Research Progress Report）
            </p>

            <br></br>

            <p>Method:</p>
            <p>The web meeting in Microsoft Teams.(in channel "研究室ゼミ")</p>
            <p>Presenters, B4s, M1s, and faculty are generally face-to-face @SB911-1</p>

            <br></br>

            <p>Please attend the seminar unless you are not feeling well.</p>
            <p>Please join this seminar from the channel "研究室ゼミ" of the MMA-s.</p>
            <p>I also carry out a questionnaire about the seminar. Please be sure to fill in by the day.</p>
            <p>{ formUrl }</p>

            <br></br>

            <p>The results of previous surveys, including this one, can be found in the folder “進捗報告_回答(progress_reports)" in the 研究室ゼミ channel.</p>

            <br></br>

            <p>Presentation order after next time(Plan)</p>
            <p>{ nextSeminarDate } (Wed.) 
              {nextPresenters.map((nextPresenter) => (
                nextPresenter.length > 0 &&
                <span> { nextPresenter } さん、</span>
              ))}
              （Research Progress Report）
            </p>

            <br></br>

            <p>Best regards.</p>
            
            <br></br>

            <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>筑波大学 大学院 理工情報生命学術院 システム情報工学研究群</p>
            <p>情報理工学位プログラム1年</p>
            <p>{ myNameJa }</p>
            <p>Email: { email }</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>

            <br></br>

            <p>卒業した場合のメーリングリスト退会方法はこちら</p>
            <p>For information on how to unsubscribe from the mailing list when you graduate, please visit this page.
</p>
            <p>https://ml.cc.tsukuba.ac.jp/mlmn/listinfo/mma-all</p>
          </CardContent>
        </Card>
      </Container>
      </Box>
    </div>
  );
};

export default Announcement;
