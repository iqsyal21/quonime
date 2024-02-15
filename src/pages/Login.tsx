import { useEffect, useState } from "react";
import sukunaDeBg from "../assets/images/sukuna-de.jpeg";
import LoginForm from "../components/LoginForm";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const swipeCard = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const getToken = sessionStorage.getItem("token");
    if (getToken) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${sukunaDeBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <main className="m-auto py-8">
        {showToast && (
          <div className="absolute z-10 toast toast-top toast-end">
            <div
              role="alert"
              className={`alert ${isResponseSuccess ? "alert-success" : "alert-error"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isResponseSuccess ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                )}
              </svg>
              <span>
                {isLogin ? "Login" : "Register"} {isResponseSuccess ? "Success" : "Failed"}
              </span>
            </div>
          </div>
        )}

        <div
          className={`card w-80 lg:w-max bg-[#00A9FF] shadow-xl ${
            isLogin ? "swipeLogin" : "swipeRegister"
          }`}
        >
          <div
            className={`flex flex-col-reverse w-max lg:w-[1024px] ${
              isLogin ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="card-body w-80 lg:w-3/4 px-12 lg:px-24 py-16 lg:py-32 bg-base-100 rounded-2xl">
              <h2 className="text-center text-3xl font-bold" onClick={swipeCard}>
                {isLogin ? "Login to QuoNime" : "Create Account"}
              </h2>
              <div className="my-4 line-clamp-1 hover:line-clamp-none">
                <p>{isLogin ? "login" : "register"} sample</p>
                <p>email: eve.holt@reqres.in</p>
                <p>password: cityslicka</p>
              </div>
              <LoginForm
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setShowToast={setShowToast}
                setIsResponseSuccess={setIsResponseSuccess}
              />
              <Link to="/" className="text-center mt-8">
                <button className="btn btn-ghost">Back to home</button>
              </Link>
            </div>
            <div className="card-body w-80 lg:w-1/2 m-auto min-h-64 text-white text-center">
              <h2 className="text-3xl font-bold mb-8">
                {isLogin ? "Welcome Back!" : "Hello Friend!"}
              </h2>
              <p className="mb-4">
                {isLogin
                  ? "To keep connected with us please login with your account"
                  : "Enter your account and happy enjoy with us"}
              </p>
              <button
                className="btn btn-ghost border-base-100 rounded-full px-16"
                onClick={swipeCard}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
