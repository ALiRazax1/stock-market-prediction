import { Link,NavLink } from "react-router"
import { Button } from "./button"
import { TrendingUp,Menu,X } from "lucide-react"
import { useState } from "react"
export default function Header(){
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(<>
        <header id="header"
        className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50"
        style={{
          backgroundColor: "#00202E",
          borderColor: "rgba(191, 237, 252, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Link to="/" className="flex items-center justify-center">
          <TrendingUp className="h-8 w-8" style={{ color: "#00FF88" }} />
          <span
           className="ml-2 text-xl font-bold"
           style= {{color:"#BFEDFC"}}>
            StockPro
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <NavLink  
            to="/"
            className= "text-sm font-medium hover:opacity-80 transition-opacity"
            style={({isActive})=>({color: isActive?"#00FF88":"#BFEDFC"})}
          >
            Home
          </NavLink>
          <NavLink
            to="/s"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={({isActive})=>({color: isActive?"#00FF88":"#BFEDFC"})}
          >
            Insights
          </NavLink>
          <NavLink
            to="/prediction"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={({isActive})=>({color: isActive?"#00FF88":"#BFEDFC"})}
          >
            Prediction
          </NavLink>
          <NavLink
            to="/f"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
style={({isActive})=>({color: isActive?"#00FF88":"#BFEDFC"})}          >
            About Us
          </NavLink>
        </nav>
        <div className="ml-6 hidden  md:flex gap-2">
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
{/* Mobile button */}
<button
          className="ml-auto md:hidden p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: "#BFEDFC" }}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>





      {/* asd0 */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 pt-16"
          style={{ backgroundColor: "rgba(0, 32, 46, 0.95)", backdropFilter: "blur(8px)" }}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="#home"
              className="text-lg font-medium py-2 hover:opacity-80 transition-opacity"
              style={{ color: "#BFEDFC" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#insights"
              className="text-lg font-medium py-2 hover:opacity-80 transition-opacity"
              style={{ color: "#BFEDFC" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/prediction"
              className="text-lg font-medium py-2 hover:opacity-80 transition-opacity"
              style={{ color: "#BFEDFC" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Prediction
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium py-2 hover:opacity-80 transition-opacity"
              style={{ color: "#BFEDFC" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="pt-4 border-t" style={{ borderColor: "rgba(191, 237, 252, 0.2)" }}>
              <Button
                variant="ghost"
                className="w-full mb-2 hover:bg-opacity-10"
                style={{ color: "#BFEDFC", backgroundColor: "transparent" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Button>
              <Button
                className="w-full hover:opacity-90"
                style={{ backgroundColor: "#BFEDFC", color: "#00202E" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
</>

    )
}



