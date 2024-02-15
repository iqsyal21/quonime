import React, { useEffect, useState } from "react";
import { signIn, signUp } from "../lib/api";
import { useNavigate } from "react-router-dom";

interface loginFormProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
  setIsResponseSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<loginFormProps> = ({
  isLogin,
  setIsLogin,
  setShowToast,
  setIsResponseSuccess,
}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const responseSubmit = (status: boolean) => {
    if (status) {
      setIsResponseSuccess(true);
      setShowToast(true);
      setIsLoading(false);

      setTimeout(() => {
        isLogin ? navigate("/dashboard") : setIsLogin(true);
        setShowToast(false);
      }, 2000);
    } else {
      setIsResponseSuccess(false);
      setShowToast(true);
      setIsLoading(false);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (isLogin) {
      try {
        await signIn(email, password);
        responseSubmit(true);
      } catch (error) {
        responseSubmit(false);
      }
    } else {
      try {
        await signUp(email, password);
        responseSubmit(true);
      } catch (error) {
        responseSubmit(false);
      }
    }
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isLogin]);

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="btn btn-info w-full mt-4" disabled={isLoading}>
        {isLoading && <span className="loading loading-spinner"></span>}
        {isLogin ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default LoginForm;
