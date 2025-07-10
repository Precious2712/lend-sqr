"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import "../login/styles/login.scss"

interface LoginFormData {
  email: string
  password: string
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    setMessageType("")
    console.log(formData);
    

    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 2000))

    //   if (!formData.email || !formData.password) {
    //     throw new Error("Please fill in all fields")
    //   }

    //   if (!formData.email.includes("@")) {
    //     throw new Error("Please enter a valid email address")
    //   }

    //   setMessage("Login successful!")
    //   setMessageType("success")
    //   setFormData({ email: "", password: "" })
    // } catch (error) {
    //   setMessage(error instanceof Error ? error.message : "Login failed")
    //   setMessageType("error")
    // } finally {
    //   setIsLoading(false)
    // }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="login-page">
      <div className="header">
        <div className="logo-container">
          <img src="/lend-logo.PNG.png" alt="" />
        </div>
      </div>

      <div className="main-content">

        <div className="illustration-section">
          <div className="illustration-container">
            <img
              src="/d76431ad31054d654669dbf388b2a9ec503f6495.png"
              alt="Login visual"
              className="illustration-image"
            />
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