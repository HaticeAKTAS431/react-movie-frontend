import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-200 p-8 rounded-xl shadow-xl w-11/12 max-w-md flex flex-col items-center">
        <img className="w-4/5 max-w-[150px] mb-6" src="../src/assets/logo.png" alt="Logo" />
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Giriş Yap
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Hesabınız yok mu?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Kayıt Ol
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
