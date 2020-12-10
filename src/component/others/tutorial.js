import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& li": {
      marginBottom: "25px",
    },
    "& li > img": {
      width: "75%",
    },
    overflowWrap: "break-word",
    fontFamily: "Nunito",
    width: "60%",
    margin: "60px auto",
    paddingBottom: "200px",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "1rem",
      paddingRight: "32px",
      paddingLeft: "32px",
      "& li > img": {
        width: "100%",
      },
    },
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
        Hiện tại chỉ hỗ trợ các trang:{" "}
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
          href="http://truyentranhtuan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          truyentranhtuan.com
        </a>
        ,{" "}
        <a
          href="https://truyentranh.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          truyentranh.net
        </a>
      </p>
      <br />
      <h3>Hướng dẫn đăng kí truyện</h3>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li>
          <div>
            1. Lấy đường dẫn truyện muốn đăng kí (là đường dẫn đến trang truyện,
            chọn chapter,...), ví dụ:
          </div>
          <div>
            <a
              href="https://beeng.net/truyen-tranh-online/dao-hai-tac-31953"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://beeng.net/truyen-tranh-online/dao-hai-tac-31953
            </a>
            <br />
            hoặc{" "}
            <a
              href="https://blogtruyen.vn/3415/onepunch-man"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://blogtruyen.vn/3415/onepunch-man
            </a>
          </div>
        </li>
        <li>
          <div>2. Copy đường dẫn:</div>
          <img src="/assets/tutor-1.jpg" alt="" />
        </li>
        <li>
          <div>3. Gởi cho BOT</div>
          <img src="/assets/tutor-2.jpg" alt="" />
        </li>
        <li>
          <div>4. Đăng kí thành công, BOT sẽ gởi lại chap mới nhất</div>
          <img src="/assets/tutor-3.jpg" alt="" />
        </li>
        <li>
          <p>5. Xong, giờ thì... ngồi rung đùi thôi :)</p>
          <p>- Khi nào có chap mới, BOT sẽ gởi về thông báo quá Mesenger</p>
          <p>
            - Nếu không muốn nhận thông báo khi truyện update nữa, nhấn nút{" "}
            <span style={{ fontSize: "1.5rem" }}>Unsubscribe</span> trên message
          </p>
        </li>
      </ul>
    </div>
  );
}
