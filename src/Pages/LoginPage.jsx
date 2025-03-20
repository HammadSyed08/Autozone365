import LoginForm from "../Components/loginPage/LoginForm";
import LoginPara from "../Components/loginPage/loginPara";
import '../Components/loginPage/Login.css'

export default function LoginPage() {
  return (
    <div className="login_section">
      <div className="loginPage_container">
        <div className="login_para">
          <LoginPara />
        </div>
        <div className="login_form">
          <LoginForm />
        </div>
     </div>
    </div>
  )
}
