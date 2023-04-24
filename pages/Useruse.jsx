import css from "styled-jsx/css";
import React from "react";
import Color_button from "./components/Color_button";
import Sidebar from "pages/components/Sidebar.jsx";
import { useState, useEffect } from "react";

export default function Useruse() {
  const [nickname, setNickname] = useState([]);

  useEffect(() => {
    async function fetchNickname() {
      const response = await fetch("/api/mynickname");
      const nickname = await response.json();
      setNickname(nickname);
    }
    fetchNickname();
  }, []);

  return (
    <div className="useruse_container">
      <Sidebar />
      <div className="useruse_nickname_container font">
        <label htmlFor="nickname" className="useruse_name font">
          닉네임 :{" "}
        </label>
        <input
          type="text"
          maxLength="7"
          className="useruse_nickname font"
          id="nickname"
        />
        <ul>
          {nickname.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="useruse_color_button">
        <Color_button />
      </div>
      <button type="submit" className="useruse_submit_button font">
        만들기
      </button>
      <style jsx>{useruse}</style>
    </div>
  );
}

const useruse = css`
  @font-face {
    font-family: "Bazzi";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .font {
    font-family: "Bazzi";
  }
  .useruse_container {
    width: 500px;
    height: 100vh;
    background-color: #f7bedf;
    color: white;
    text-align: center;
    //중앙정렬
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .useruse_nickname_container {
    margin-top: 7vh;
  }
  .useruse_name {
    font-size: 35px;
  }
  .useruse_nickname {
    border: none;
    height: 40px;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    font-size: 25px;
  }
  .useruse_nickname:focus {
    border: 2px solid #f073cd;
    outline: none;
  }

  .useruse_color_button {
    height: 400px;
    width: 450px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .useruse_submit_button {
    border: none;
    border-radius: 15px;
    height: 35px;
    width: 90px;
    font-size: 20px;
    margin-top: 120px;
    color: white;
    background-color: #f073cd;
  }
`;
