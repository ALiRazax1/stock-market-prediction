import { Link } from "react-router"
import { Button } from "./button"
import { TrendingUp, BarChart3, Brain, Users, Shield, Zap, ArrowRight, Star } from "lucide-react"

export default function Header(){
    return(
        <header
        className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50"
        style={{
          backgroundColor: "#00202E",
          borderColor: "rgba(191, 237, 252, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Link to="/" className="flex items-center justify-center">
          <TrendingUp className="h-8 w-8" style={{ color: "#00FF88" }} />
          <span className="ml-2 text-xl font-bold" style={{ color: "#BFEDFC" }}>
            StockPro
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#BFEDFC" }}
          >
            Home
          </Link>
          <Link
            to="#insights"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#BFEDFC" }}
          >
            Insights
          </Link>
          <Link
            to="/prediction"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#BFEDFC" }}
          >
            Prediction
          </Link>
          <Link
            to="#about"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#BFEDFC" }}
          >
            About Us
          </Link>
        </nav>
        <div className="ml-6 flex gap-2">
          <Link to ='/login'><Button
            variant="ghost"
            size="sm"
            className="hover:bg-opacity-10"
            style={{ color: "#BFEDFC", backgroundColor: "transparent" }}
          >
            Login
          </Button></Link>
          <Link to={'/signup'}>
          <Button size="sm" className="hover:opacity-90" style={{ backgroundColor: "#BFEDFC", color: "#00202E" }}>
            Sign Up
          </Button></Link>
        </div>
      </header>
    )
}