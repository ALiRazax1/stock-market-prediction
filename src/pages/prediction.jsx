"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, ArrowLeft, Activity, Brain, Newspaper, MessageSquare, DollarSign } from "lucide-react"
import { Link } from "react-router"
import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import Header from "@/components/ui/header"

// Dummy data for different prediction types
const predictionData = {
  "news-sentiments": {
    apple: [
      { date: "Jan", value: 150, confidence: 85 },
      { date: "Feb", value: 155, confidence: 78 },
      { date: "Mar", value: 162, confidence: 82 },
      { date: "Apr", value: 158, confidence: 75 },
      { date: "May", value: 165, confidence: 88 },
      { date: "Jun", value: 172, confidence: 91 },
    ],
    microsoft: [
      { date: "Jan", value: 280, confidence: 82 },
      { date: "Feb", value: 285, confidence: 79 },
      { date: "Mar", value: 292, confidence: 85 },
      { date: "Apr", value: 288, confidence: 77 },
      { date: "May", value: 295, confidence: 89 },
      { date: "Jun", value: 302, confidence: 92 },
    ],
    tesla: [
      { date: "Jan", value: 220, confidence: 75 },
      { date: "Feb", value: 235, confidence: 72 },
      { date: "Mar", value: 245, confidence: 78 },
      { date: "Apr", value: 238, confidence: 74 },
      { date: "May", value: 252, confidence: 81 },
      { date: "Jun", value: 265, confidence: 85 },
    ],
  },
  "financial-news": {
    apple: [
      { date: "Jan", value: 148, confidence: 88 },
      { date: "Feb", value: 152, confidence: 85 },
      { date: "Mar", value: 159, confidence: 89 },
      { date: "Apr", value: 163, confidence: 82 },
      { date: "May", value: 168, confidence: 91 },
      { date: "Jun", value: 175, confidence: 94 },
    ],
    microsoft: [
      { date: "Jan", value: 275, confidence: 86 },
      { date: "Feb", value: 282, confidence: 83 },
      { date: "Mar", value: 289, confidence: 87 },
      { date: "Apr", value: 295, confidence: 84 },
      { date: "May", value: 301, confidence: 90 },
      { date: "Jun", value: 308, confidence: 93 },
    ],
    tesla: [
      { date: "Jan", value: 215, confidence: 78 },
      { date: "Feb", value: 228, confidence: 75 },
      { date: "Mar", value: 240, confidence: 81 },
      { date: "Apr", value: 248, confidence: 79 },
      { date: "May", value: 255, confidence: 84 },
      { date: "Jun", value: 268, confidence: 87 },
    ],
  },
  "social-media": {
    apple: [
      { date: "Jan", value: 152, confidence: 72 },
      { date: "Feb", value: 158, confidence: 69 },
      { date: "Mar", value: 165, confidence: 75 },
      { date: "Apr", value: 160, confidence: 71 },
      { date: "May", value: 167, confidence: 78 },
      { date: "Jun", value: 174, confidence: 82 },
    ],
    microsoft: [
      { date: "Jan", value: 278, confidence: 74 },
      { date: "Feb", value: 284, confidence: 71 },
      { date: "Mar", value: 291, confidence: 77 },
      { date: "Apr", value: 287, confidence: 73 },
      { date: "May", value: 294, confidence: 80 },
      { date: "Jun", value: 301, confidence: 84 },
    ],
    tesla: [
      { date: "Jan", value: 225, confidence: 68 },
      { date: "Feb", value: 238, confidence: 65 },
      { date: "Mar", value: 248, confidence: 71 },
      { date: "Apr", value: 242, confidence: 67 },
      { date: "May", value: 255, confidence: 74 },
      { date: "Jun", value: 268, confidence: 78 },
    ],
  },
}

// Pie chart data for overall predictions
const pieData = [
  { name: "Apple", value: 35, color: "#00FF88" },
  { name: "Microsoft", value: 40, color: "#BFEDFC" },
  { name: "Tesla", value: 25, color: "#84cc16" },
]

export default function PredictionPage() {
  const [selectedPrediction, setSelectedPrediction] = useState("news-sentiments")
  const [selectedCompany, setSelectedCompany] = useState("apple")

  const currentData = predictionData[selectedPrediction][selectedCompany]

  const getPredictionIcon = (type) => {
    switch (type) {
      case "news-sentiments":
        return <Newspaper className="h-5 w-5" />
      case "financial-news":
        return <DollarSign className="h-5 w-5" />
      case "social-media":
        return <MessageSquare className="h-5 w-5" />
      default:
        return <Brain className="h-5 w-5" />
    }
  }

  const getCompanyColor = (company) => {
    switch (company) {
      case "apple":
        return "#00FF88"
      case "microsoft":
        return "#BFEDFC"
      case "tesla":
        return "#84cc16"
      default:
        return "#00FF88"
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#00202E" }}>
      {/* Header */}
    <Header/>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-4 text-sm hover:opacity-80 transition-opacity"
            style={{ color: "#BFEDFC" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2" style={{ color: "#BFEDFC" }}>
            AI Stock Predictions
          </h1>
          <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
            Advanced machine learning models analyzing market sentiment and financial data
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card
            className="border"
            style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                    Accuracy Rate
                  </p>
                  <p className="text-2xl font-bold" style={{ color: "#00FF88" }}>
                    87.3%
                  </p>
                </div>
                <Activity className="h-8 w-8" style={{ color: "#00FF88" }} />
              </div>
            </CardContent>
          </Card>

          <Card
            className="border"
            style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                    Predictions Today
                  </p>
                  <p className="text-2xl font-bold" style={{ color: "#BFEDFC" }}>
                    1,247
                  </p>
                </div>
                <Brain className="h-8 w-8" style={{ color: "#BFEDFC" }} />
              </div>
            </CardContent>
          </Card>

          <Card
            className="border"
            style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                    Market Trend
                  </p>
                  <p className="text-2xl font-bold flex items-center gap-1" style={{ color: "#00FF88" }}>
                    <TrendingUp className="h-5 w-5" />
                    Bullish
                  </p>
                </div>
                <TrendingUp className="h-8 w-8" style={{ color: "#00FF88" }} />
              </div>
            </CardContent>
          </Card>

          <Card
            className="border"
            style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                    Confidence
                  </p>
                  <p className="text-2xl font-bold" style={{ color: "#84cc16" }}>
                    92%
                  </p>
                </div>
                <Activity className="h-8 w-8" style={{ color: "#84cc16" }} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Section */}
          <div className="lg:col-span-2">
            <Card
              className="border"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle className="flex items-center gap-2" style={{ color: "#BFEDFC" }}>
                    {getPredictionIcon(selectedPrediction)}
                    Stock Price Predictions
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Select value={selectedPrediction} onValueChange={setSelectedPrediction}>
                      <SelectTrigger
                        className="w-full sm:w-[180px] border-2"
                        style={{
                          backgroundColor: "rgba(191, 237, 252, 0.1)",
                          borderColor: "rgba(191, 237, 252, 0.3)",
                          color: "#BFEDFC",
                        }}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent
                        style={{
                          backgroundColor: "#00202E",
                          borderColor: "rgba(191, 237, 252, 0.3)",
                        }}
                      >
                        <SelectItem value="news-sentiments" style={{ color: "#BFEDFC" }}>
                          News Sentiments
                        </SelectItem>
                        <SelectItem value="financial-news" style={{ color: "#BFEDFC" }}>
                          Financial News
                        </SelectItem>
                        <SelectItem value="social-media" style={{ color: "#BFEDFC" }}>
                          Social Media
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                      <SelectTrigger
                        className="w-full sm:w-[140px] border-2"
                        style={{
                          backgroundColor: "rgba(191, 237, 252, 0.1)",
                          borderColor: "rgba(191, 237, 252, 0.3)",
                          color: "#BFEDFC",
                        }}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent
                        style={{
                          backgroundColor: "#00202E",
                          borderColor: "rgba(191, 237, 252, 0.3)",
                        }}
                      >
                        <SelectItem value="apple" style={{ color: "#BFEDFC" }}>
                          Apple
                        </SelectItem>
                        <SelectItem value="microsoft" style={{ color: "#BFEDFC" }}>
                          Microsoft
                        </SelectItem>
                        <SelectItem value="tesla" style={{ color: "#BFEDFC" }}>
                          Tesla
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={currentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(191, 237, 252, 0.2)" />
                      <XAxis dataKey="date" stroke="#BFEDFC" />
                      <YAxis stroke="#BFEDFC" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#00202E",
                          border: "1px solid rgba(191, 237, 252, 0.3)",
                          borderRadius: "8px",
                          color: "#BFEDFC",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={getCompanyColor(selectedCompany)}
                        strokeWidth={3}
                        dot={{ fill: getCompanyColor(selectedCompany), strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, stroke: getCompanyColor(selectedCompany), strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Prediction Insights */}
            <Card
              className="border mt-6"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardHeader>
                <CardTitle style={{ color: "#BFEDFC" }}>AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#00FF88" }} />
                    <div>
                      <p className="font-medium" style={{ color: "#BFEDFC" }}>
                        Strong Bullish Signal
                      </p>
                      <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                        Our AI model predicts a 15% price increase over the next 30 days based on current sentiment
                        analysis.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#84cc16" }} />
                    <div>
                      <p className="font-medium" style={{ color: "#BFEDFC" }}>
                        High Confidence Level
                      </p>
                      <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                        The prediction confidence is at 92%, indicating strong model certainty in the forecast.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#BFEDFC" }} />
                    <div>
                      <p className="font-medium" style={{ color: "#BFEDFC" }}>
                        Market Momentum
                      </p>
                      <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                        Positive momentum detected across multiple data sources including news and social media.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Overall Predictions Pie Chart */}
            <Card
              className="border"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardHeader>
                <CardTitle style={{ color: "#BFEDFC" }}>Portfolio Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#BFEDFC",
                          border: "1px solid #00202E",
                          borderRadius: "8px",
                          color: "#00202E",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {pieData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm" style={{ color: "#BFEDFC" }}>
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium" style={{ color: "#BFEDFC" }}>
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Status */}
            <Card
              className="border"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardHeader>
                <CardTitle style={{ color: "#BFEDFC" }}>Market Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span style={{ color: "rgba(191, 237, 252, 0.8)" }}>Market Open</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-sm font-medium" style={{ color: "#00FF88" }}>
                      Active
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: "rgba(191, 237, 252, 0.8)" }}>Next Update</span>
                  <span className="text-sm font-medium" style={{ color: "#BFEDFC" }}>
                    2 min
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: "rgba(191, 237, 252, 0.8)" }}>Data Sources</span>
                  <span className="text-sm font-medium" style={{ color: "#84cc16" }}>
                    Live
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card
              className="border"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardHeader>
                <CardTitle style={{ color: "#BFEDFC" }}>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-lime-400 hover:bg-lime-500" style={{ color: "#00202E" }}>
                  Export Report
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 hover:bg-opacity-10"
                  style={{
                    borderColor: "rgba(191, 237, 252, 0.3)",
                    color: "#BFEDFC",
                    backgroundColor: "transparent",
                  }}
                >
                  Set Alert
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 hover:bg-opacity-10"
                  style={{
                    borderColor: "rgba(191, 237, 252, 0.3)",
                    color: "#BFEDFC",
                    backgroundColor: "transparent",
                  }}
                >
                  Share Analysis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}