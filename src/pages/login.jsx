

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { TrendingUp, Eye, EyeOff, ArrowLeft } from "lucide-react"
import { Link } from "react-router"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#00202E" }}>
      <div className="w-full max-w-md p-6">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2  text-sm hover:opacity-80 transition-opacity"
          style={{ color: "#BFEDFC" }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <img className="w-[30%]" src="/logo/logo-removebg-preview-Edited.png"/>
        </div>

        {/* Login Card */}
        <Card
          className="border"
          style={{
            backgroundColor: "rgba(0, 32, 46, 0.8)",
            borderColor: "rgba(191, 237, 252, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold" style={{ color: "#BFEDFC" }}>
              Welcome Back
            </CardTitle>
            <CardDescription style={{ color: "rgba(191, 237, 252, 0.7)" }}>
              Sign in to your IRMTP account to continue your trading journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" style={{ color: "#BFEDFC" }}>
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-2"
                  style={{
                    backgroundColor: "rgba(191, 237, 252, 0.1)",
                    borderColor: "rgba(191, 237, 252, 0.3)",
                    color: "#BFEDFC",
                  }}
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" style={{ color: "#BFEDFC" }}>
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="border-2 pr-10"
                    style={{
                      backgroundColor: "rgba(191, 237, 252, 0.1)",
                      borderColor: "rgba(191, 237, 252, 0.3)",
                      color: "#BFEDFC",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    style={{ color: "rgba(191, 237, 252, 0.7)" }}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm" style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                    Remember me
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "#00FF88" }}
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button type="submit" className="w-full bg-lime-400 hover:bg-lime-500" style={{ color: "#00202E" }}>
                Sign In
              </Button>
            </form>

            {/* Divider */}
          

            {/* Sign Up Link */}
            <div className="text-center">
              <span style={{ color: "rgba(191, 237, 252, 0.7)" }}>Don't have an account? </span>
              <Link
                to="/signup"
                className="hover:opacity-80 transition-opacity font-medium"
                style={{ color: "#00FF88" }}
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-xs" style={{ color: "rgba(191, 237, 252, 0.5)" }}>
          By signing in, you agree to our{" "}
          <Link to="/terms" className="hover:opacity-80" style={{ color: "#00FF88" }}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="hover:opacity-80" style={{ color: "#00FF88" }}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
