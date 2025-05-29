
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { TrendingUp, Eye, EyeOff, ArrowLeft, Check } from "lucide-react"
import { Link } from "react-router"
import { useState } from "react"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRequirements = [
    { text: "At least 8 characters", met: password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { text: "Contains number", met: /\d/.test(password) },
    { text: "Contains special character", met: /[!@#$%^&*]/.test(password) },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center py-12" style={{ backgroundColor: "#00202E" }}>
      <div className="w-full max-w-md p-6">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 text-sm hover:opacity-80 transition-opacity"
          style={{ color: "#BFEDFC" }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <TrendingUp className="h-10 w-10" style={{ color: "#00FF88" }} />
          <span className="ml-3 text-2xl font-bold" style={{ color: "#BFEDFC" }}>
            StockPro
          </span>
        </div>

        {/* Sign Up Card */}
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
              Create Your Account
            </CardTitle>
            <CardDescription style={{ color: "rgba(191, 237, 252, 0.7)" }}>
              Join thousands of traders using AI-powered market analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" style={{ color: "#BFEDFC" }}>
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="border-2"
                    style={{
                      backgroundColor: "rgba(191, 237, 252, 0.1)",
                      borderColor: "rgba(191, 237, 252, 0.3)",
                      color: "#BFEDFC",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" style={{ color: "#BFEDFC" }}>
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="border-2"
                    style={{
                      backgroundColor: "rgba(191, 237, 252, 0.1)",
                      borderColor: "rgba(191, 237, 252, 0.3)",
                      color: "#BFEDFC",
                    }}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" style={{ color: "#BFEDFC" }}>
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
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
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

                {/* Password Requirements */}
                {password && (
                  <div className="space-y-1 mt-2">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <Check className={`h-3 w-3 ${req.met ? "text-green-400" : "text-gray-400"}`} />
                        <span style={{ color: req.met ? "#00FF88" : "rgba(191, 237, 252, 0.5)" }}>{req.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" style={{ color: "#BFEDFC" }}>
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="border-2 pr-10"
                    style={{
                      backgroundColor: "rgba(191, 237, 252, 0.1)",
                      borderColor: "rgba(191, 237, 252, 0.3)",
                      color: "#BFEDFC",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    style={{ color: "rgba(191, 237, 252, 0.7)" }}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label
                  htmlFor="terms"
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(191, 237, 252, 0.8)" }}
                >
                  I agree to the{" "}
                  <Link to="/terms" className="hover:opacity-80" style={{ color: "#00FF88" }}>
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="hover:opacity-80" style={{ color: "#00FF88" }}>
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              {/* Marketing Emails */}
              <div className="flex items-start space-x-2">
                <Checkbox id="marketing" className="mt-1" />
                <Label htmlFor="marketing" className="text-sm" style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                  Send me market insights and trading tips via email
                </Label>
              </div>

              {/* Create Account Button */}
              <Button type="submit" className="w-full bg-lime-400 hover:bg-lime-500" style={{ color: "#00202E" }}>
                Create Account
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" style={{ borderColor: "rgba(191, 237, 252, 0.2)" }} />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Sign Up */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="border-2 hover:bg-opacity-10"
                style={{
                  borderColor: "rgba(191, 237, 252, 0.3)",
                  color: "#BFEDFC",
                  backgroundColor: "transparent",
                }}
              >
                Google
              </Button>
              <Button
                variant="outline"
                className="border-2 hover:bg-opacity-10"
                style={{
                  borderColor: "rgba(191, 237, 252, 0.3)",
                  color: "#BFEDFC",
                  backgroundColor: "transparent",
                }}
              >
                GitHub
              </Button>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <span style={{ color: "rgba(191, 237, 252, 0.7)" }}>Already have an account? </span>
              <Link
                to="/login"
                className="hover:opacity-80 transition-opacity font-medium"
                style={{ color: "#00FF88" }}
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center text-xs" style={{ color: "rgba(191, 237, 252, 0.5)" }}>
          🔒 Your data is protected with bank-grade encryption
        </div>
      </div>
    </div>
  )
}
