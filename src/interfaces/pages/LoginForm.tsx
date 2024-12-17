import React, { useState } from "react";
import TextInput from "../component/TextInput";
import { supabase } from "../../supabase";
import { useNavigate } from 'react-router-dom';


const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset error state saat user mulai mengetik
    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log('handleSubmit');
    const { email, password } = formData; // Ambil email dan password dari formData
    e.preventDefault(); // Mencegah perilaku default form
  
    async function signInWithEmail() {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        // Tangani error jika ada
        console.error("Error signing in:", error.message);
        // Anda bisa mengatur state error di sini jika perlu
      } else {
        // Berhasil login, lakukan sesuatu (misalnya redirect)
        console.log("Login successful!");
        navigate('/dashboard'); // Redirect ke dashboard
      }
    }
    signInWithEmail(); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <img src="" alt="" />
      <h2 className="text-2xl font-bold text-center">Selamat Datang di Mediverse</h2>
      <p className="text-sm text-gray-600">
        Masukkan email dan kelola Mediverse Anda 
        di dashboard sekarang
      </p>
      <TextInput
        type="email"
        name="email"
        label="email"
        value={formData.email}
        placeholder="Enter your email"
        error={errors.email}
        onChange={handleChange}
      />
      <TextInput
        type="password"
        name="password"
        label="password"
        value={formData.password}
        placeholder="Enter your password"
        error={errors.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="button"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;