import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& li": {
      marginBottom: "25px",
    },
    fontFamily: "Nunito",
    width: "60%",
    margin: "60px auto",
    paddingBottom: "200px",
    fontSize: "1.2rem",
  },
}));

export default function Tutorial() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>
        Chatbot:{" "}
        <a
          href="https://m.me/Cominify"
          target="_blank"
          rel="noopener noreferrer"
        >
          m.me/Cominify
        </a>
      </h3>
      <p>
        Hiện tại chỉ hỗ trợ 3 page:{" "}
        <a href="https://beeng.net" target="_blank" rel="noopener noreferrer">
          beeng.net
        </a>
        ,
        <a
          href="https://blogtruyen.vn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          blogtruyen.vn
        </a>
        ,{" "}
        <a
          href="https://truyendep.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          truyendep.com
        </a>{" "}
        (a.k.a mangaK)
      </p>
      <br />
      <h3>Hướng dẫn đăng kí truyện</h3>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li>
          <div>1. Lấy link truyện muốn đăng kí, ví dụ:</div>
          <a
            href="https://beeng.net/truyen-tranh-online/dao-hai-tac-31953"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://beeng.net/truyen-tranh-online/dao-hai-tac-31953
          </a>
        </li>
        <li>
          <div>2. Copy đường dẫn:</div>
          <img src="/assets/tutor-1.jpg" alt="" style={{ width: "50%" }} />
        </li>
        <li>
          <div>3. Gởi cho BOT</div>
          <img src="/assets/tutor-2.jpg" alt="" style={{ width: "50%" }} />
        </li>
        <li>
          <div>4. Đăng kí thành công, BOT sẽ gởi lại chap mới nhất</div>
          <img src="/assets/tutor-3.jpg" alt="" style={{ width: "50%" }} />
        </li>
        <li>
          <p>5. Xong, giờ thì... ngồi rung đùi thôi :)</p>
          <p style={{ textAlign: "justify" }}>
            - Khi nào có chap mới, BOT sẽ gởi về thông báo quá Mesenger
          </p>
          <p style={{ textAlign: "justify" }}>
            - Nếu không muốn nhận thông báo khi truyện update nữa, nhấn nút{" "}
            <span style={{ fontSize: "1.5rem" }}>Unsubscribe</span> trên message
          </p>
        </li>
      </ul>
    </div>
  );
}
