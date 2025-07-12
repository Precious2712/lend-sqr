"use client"

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import "../login/styles/login.scss";
import { useRouter } from "next/navigation";
import { HeaderLogo } from "@/components/svgComp/AllSvgComp";
import Image from "next/image";

interface LoginFormData {
  email: string
  password: string
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setMessageType("");

    setTimeout(() => {
      console.log(formData);
      setMessage("Login successful!");
      router.push('/dashboard');
      setMessageType("success");
      setIsLoading(false);
    }, 2000);
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="login-page">

      <div className="main-content">

        <div className="illustration-section">
          <div>
            <div className="logo-container">
              <HeaderLogo />
            </div>

            <div>
              <Image
                src={'/d76431ad31054d654669dbf388b2a9ec503f6495.png'}
                height={100}
                width={430}
                alt="Illustration"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-container">
            <div className="form-header">
              <h1 className="welcome-title">Welcome!</h1>
              <p className="welcome-subtitle">Enter details to login.</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="form-input password-input"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button type="button" className="show-button" onClick={togglePasswordVisibility}>
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              <div className="forgot-password">
                <Link href="/forgot-password" className="forgot-link">
                  FORGOT PASSWORD?
                </Link>
              </div>

              <button type="submit" className="login-button" disabled={isLoading}>
                {isLoading ? "LOGGING IN..." : "LOG IN"}
              </button>

              {message && (
                <div className={messageType === "success" ? "success-message" : "error-message"}>{message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}