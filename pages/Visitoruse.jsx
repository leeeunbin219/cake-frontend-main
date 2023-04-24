import css from "styled-jsx/css";
import Sidebar from "pages/components/Sidebar.jsx";
import Cake_choice from  "./components/Cake_choice";
import Letter from "./components/Letter";

export default function Visitoruse() {
  return (
    <div className="visitoruse_container">
      <Sidebar />
      <p className="visitoruse_text font">사용자님 생일축하해요🎉</p>
      <div className="visitoruse_nickname_password_container">
        <div className="visitoruse_nickname_container">
          <label for="nickname" className="visitoruse_name font">
            &nbsp;&nbsp;&nbsp;&nbsp;닉네임 &nbsp;
          </label>
          <input
            type="text"
            maxLength="3"
            className="visitoruse_nickname font"
            id="nickname"
          />
        </div>
        <div className="visitoruse_password_container">
          <label for="nickname" className="visitoruse_name font">
            비밀번호 &nbsp;
          </label>
          <input
            type="password"
            maxLength="4"
            className="visitoruse_nickname font"
            id="nickname"
          />
        </div>
        <div className="visitoruse_password_container">
          <label for="nickname" className="visitoruse_name font">
            비번확인 &nbsp;
          </label>
          <input
            type="password"
            maxLength="4"
            className="visitoruse_nickname font"
            id="nickname"
          />
        </div>
      </div>
      <div className="visitoruse_tab_container">
        <input
          id="tab1"
          type="radio"
          name="tabs"
          className="visitoruse_input"
          checked
        />
        <label for="tab1" className="visitoruse_label font">
          케이크 선택
        </label>
        <input
          id="tab2"
          type="radio"
          name="tabs"
          className="visitoruse_input"
        />
        <label for="tab2" className="visitoruse_label font">
          편지 쓰기
        </label>
        <section id="content1" className="visitoruse_secion">
          <div className="visitoruse_pinktable">
            <Cake_choice />
          </div>
        </section>
        <section id="content2" className="visitoruse_secion">
          <div className="visitoruse_text">
            <Letter />
          </div>
          <button type="submit" className="useruse_submit_button font">
            만들기
          </button>
        </section>
      </div>
      <style jsx>{visitoruse}</style>
    </div>
  );
}

const visitoruse = css`
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
  .visitoruse_nickname_password_container {
    line-height: 35px;
    display: flex;
  }
  .visitoruse_container {
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
  .visitoruse_text {
    font-size: 40px;
    line-height: 10px;
    margin-top: 9vh;
  }
  .visitoruse_name {
    font-size: 25px;
  }
  .visitoruse_nickname {
    border: none;
    height: 30px;
    width: 150px;
    border-radius: 10px;
    text-align: center;
    font-size: 25px;
  }
  .visitoruse_tab_container {
    margin-top: 20px;
  }
  .visitoruse_nickname:focus {
    border: 2px solid #f073cd;
    outline: none;
  }
  .visitoruse_secion {
    display: none;
    /* padding: 20px 0 0; */
    border-top: 1px solid #f073cd;
  }
  .visitoruse_input {
    display: none;
  }
  .visitoruse_label {
    display: inline-block;
    margin: 0 0 -1px;
    padding: 15px 89px;
    border-radius: 15px 15px 0 0;
    font-weight: 600;
    color: #f073cd;
    font-size: 20px;
  }
  //input 클릭시, label 스타일
  .visitoruse_input:checked + .visitoruse_label {
    color: #ffffff;
    border: 1px solid #f073cd;
    background-color: #f073cd;
  }

  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2 {
    display: block;
  }
  .visitoruse_pinktable {
    position: relative;
    margin-top: 65px;
  }
  .useruse_submit_button {
    border: none;
    background-color: #f073cd;
    color: white;
    width: 100px;
    height: 35px;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 50px;
  }
`;
