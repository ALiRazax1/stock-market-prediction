import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TrendingUp, BarChart3, Brain, Users, Shield, Zap, ArrowRight, Star } from "lucide-react"
import { Link } from "react-router"
import Header from "./components/ui/header"
export  function App() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#00202E" }}>
      {/* Header */}
   
      <Header/>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: "#00202E" }}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    style={{ color: "#BFEDFC" }}
                  >
                    Smart Stock Market Predictions with AI
                  </h1>
                  <p className="max-w-[600px] md:text-xl" style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                    Make informed investment decisions with our advanced AI-powered stock market analysis and
                    predictions. Get real-time insights and maximize your portfolio returns.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-lime-400 hover:bg-lime-500" style={{ color: "#BFEDFC" }}>
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-opacity-10"
                    style={{ borderColor: "#BFEDFC", color: "#BFEDFC", backgroundColor: "transparent" }}
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 rating</span>
                  </div>
                  <span>•</span>
                  <span>10,000+ active traders</span>
                </div>
              </div>
              <img
                src="/home/markus-spiske-XrIfY_4cK1w-unsplash.jpg"
                width="600"
                height="400"
                alt="Stock Market Dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section
          id="insights"
          className="w-full py-12 md:py-24 lg:py-32"
          style={{ backgroundColor: "rgba(191, 237, 252, 0.8)" }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg px-3 py-1 text-sm"
                  style={{ backgroundColor: "rgba(0, 255, 136, 0.2)", color: "#00FF88" }}
                >
                  Market Insights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: "#00202E" }}>
                  Real-Time Market Intelligence
                </h2>
                <p
                  className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  style={{ color: "rgba(0, 32, 46, 0.8)" }}
                >
                  Get comprehensive market analysis with our advanced algorithms that process millions of data points to
                  deliver actionable insights for your investment strategy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/home/austin-distel-DfjJMVhwH_8-unsplash.jpg"
                width="600"
                height="400"
                alt="Market Analysis Dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <BarChart3 className="h-6 w-6 mt-1" style={{ color: "#00FF88" }} />
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: "#00202E" }}>
                        Technical Analysis
                      </h3>
                      <p style={{ color: "rgba(0, 32, 46, 0.8)" }}>
                        Advanced charting tools with 50+ technical indicators for comprehensive market analysis.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Brain className="h-6 w-6 mt-1" style={{ color: "#00FF88" }} />
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: "#00202E" }}>
                        Sentiment Analysis
                      </h3>
                      <p style={{ color: "rgba(0, 32, 46, 0.8)" }}>
                        AI-powered sentiment analysis from news, social media, and market data.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="h-6 w-6 mt-1" style={{ color: "#00FF88" }} />
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: "#00202E" }}>
                        Real-Time Alerts
                      </h3>
                      <p style={{ color: "rgba(0, 32, 46, 0.8)" }}>
                        Instant notifications for price movements, volume spikes, and trading opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prediction Section */}
        <section id="prediction" className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: "#00202E" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg px-3 py-1 text-sm"
                  style={{ backgroundColor: "rgba(191, 237, 252, 0.2)", color: "#BFEDFC" }}
                >
                  AI Predictions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: "#BFEDFC" }}>
                  Future-Proof Your Investments
                </h2>
                <p
                  className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  style={{ color: "rgba(191, 237, 252, 0.8)" }}
                >
                  Our machine learning models analyze historical patterns, market trends, and economic indicators to
                  provide accurate stock price predictions and investment recommendations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 lg:order-first">
                <div className="grid gap-6">
                  <Card
                    className="border"
                    style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2" style={{ color: "#BFEDFC" }}>
                        <Brain className="h-5 w-5" style={{ color: "#BFEDFC" }} />
                        Machine Learning Models
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                        Advanced neural networks trained on decades of market data for accurate predictions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card
                    className="border"
                    style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2" style={{ color: "#BFEDFC" }}>
                        <TrendingUp className="h-5 w-5" style={{ color: "#00FF88" }} />
                        Price Forecasting
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                        Short-term and long-term price predictions with confidence intervals.
                      </p>
                    </CardContent>
                  </Card>
                  <Card
                    className="border"
                    style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2" style={{ color: "#BFEDFC" }}>
                        <Shield className="h-5 w-5" style={{ color: "#BFEDFC" }} />
                        Risk Assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                        Comprehensive risk analysis to help you make informed investment decisions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <img
                src="/home/pexels-jakubzerdzicki-21299740.jpg"
                width="600"
                height="500"
                alt="AI Prediction Models"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32"
          style={{ backgroundColor: "rgba(0, 32, 46, 0.8)" }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg px-3 py-1 text-sm"
                  style={{ backgroundColor: "rgba(191, 237, 252, 0.2)", color: "#BFEDFC" }}
                >
                  About StockPro
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: "#BFEDFC" }}>
                  Trusted by Thousands of Investors
                </h2>
                <p
                  className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  style={{ color: "rgba(191, 237, 252, 0.8)" }}
                >
                  Founded by financial experts and AI researchers, StockPro combines decades of market experience with
                  cutting-edge technology to democratize professional-grade investment tools.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card
                className="text-center border"
                style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
              >
                <CardHeader>
                  <Users className="h-12 w-12 mx-auto" style={{ color: "#BFEDFC" }} />
                  <CardTitle style={{ color: "#BFEDFC" }}>Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                    Our team includes former Wall Street analysts, quantitative researchers, and AI specialists.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="text-center border"
                style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
              >
                <CardHeader>
                  <Shield className="h-12 w-12 mx-auto" style={{ color: "#00FF88" }} />
                  <CardTitle style={{ color: "#BFEDFC" }}>Secure Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                    Bank-grade security with encrypted data transmission and secure cloud infrastructure.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="text-center border"
                style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
              >
                <CardHeader>
                  <TrendingUp className="h-12 w-12 mx-auto" style={{ color: "#BFEDFC" }} />
                  <CardTitle style={{ color: "#BFEDFC" }}>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                    Our predictions have achieved 85% accuracy rate over the past 3 years of market analysis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32"
          style={{ background: "linear-gradient(135deg, #BFEDFC 0%, #BFEDFC 100%)" }}
        >
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              style={{ color: "#00202E" }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Trading?
                </h2>
                <p
                  className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  style={{ color: "rgba(0, 32, 46, 0.8)" }}
                >
                  Join thousands of successful traders who trust StockPro for their investment decisions. Start your
                  free trial today and experience the power of AI-driven market analysis.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 border-2"
                    style={{
                      backgroundColor: "rgba(0, 32, 46, 0.1)",
                      borderColor: "#00202E",
                      color: "#00202E",
                    }}
                  />
                  <Button
                    type="submit"
                    className="hover:opacity-90"
                    style={{ backgroundColor: "#00202E", color: "#BFEDFC" }}
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs" style={{ color: "rgba(0, 32, 46, 0.7)" }}>
                  Start your 14-day free trial. No credit card required.{" "}
                  <Link to="/terms" className="underline underline-offset-2 hover:opacity-80">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="hover:opacity-90" style={{ backgroundColor: "#00202E", color: "#BFEDFC" }}>
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-opacity-10 border-2"
                  style={{ borderColor: "#00202E", color: "#00202E", backgroundColor: "transparent" }}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
        style={{ backgroundColor: "#00202E", borderColor: "rgba(191, 237, 252, 0.2)" }}
      >
        <p className="text-xs" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
          © {new Date().getFullYear()} StockPro. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-xs hover:underline underline-offset-4"
            style={{ color: "rgba(191, 237, 252, 0.7)" }}
          >
            Terms of Service
          </Link>
          <Link
            to="#"
            className="text-xs hover:underline underline-offset-4"
            style={{ color: "rgba(191, 237, 252, 0.7)" }}
          >
            Privacy Policy
          </Link>
          <Link
            to="#"
            className="text-xs hover:underline underline-offset-4"
            style={{ color: "rgba(191, 237, 252, 0.7)" }}
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
