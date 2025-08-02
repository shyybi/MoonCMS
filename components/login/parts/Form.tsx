import { useState } from "react";

interface FormProps {
  isDarkBg: boolean;
}

const Form = ({ isDarkBg }: FormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion à implémenter
    console.log("Login attempt:", { username, password });
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold ${isDarkBg ? "text-white" : "text-black"}`}>
            Sign-In
          </h1>
						<p className={`mt-2 ${isDarkBg ? "text-gray-300" : "text-gray-600"}`}>
						Sign in to your account
						</p>
        </div>

        <div>
          <label 
            htmlFor="username" 
            className={`block text-sm font-medium mb-2 ${isDarkBg ? "text-white" : "text-black"}`}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkBg 
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                : "bg-white border-gray-300 text-black placeholder-gray-500"
            }`}
            placeholder="username"
          />
        </div>

        <div>
          <label 
            htmlFor="password" 
            className={`block text-sm font-medium mb-2 ${isDarkBg ? "text-white" : "text-black"}`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkBg 
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                : "bg-white border-gray-300 text-black placeholder-gray-500"
            }`}
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className={`ml-2 text-sm ${isDarkBg ? "text-gray-300" : "text-gray-600"}`}>
              Se souvenir de moi
            </span>
          </label>
          <a 
            href="#" 
            className={`text-sm hover:underline ${isDarkBg ? "text-blue-400" : "text-blue-600"}`}
          >
            Mot de passe oublié ?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Form;