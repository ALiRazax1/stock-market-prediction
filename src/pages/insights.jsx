"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  ArrowLeft,
  Calendar,
  ExternalLink,
  Menu,
  X,
  Newspaper,
  TrendingDown,
  AlertCircle,
} from "lucide-react"
import { Link } from "react-router"
import { useState } from "react"
import Header from "@/components/ui/header"

// Dummy news data for different companies
const newsData = {
  apple: [
    {
      id: 1,
      title: "Apple Reports Record Q4 Revenue Despite Market Challenges",
      summary:
        "Apple Inc. announced its fourth-quarter earnings, showing resilience in a challenging market environment with strong iPhone and services revenue.",
      content:
        "Apple's latest quarterly results exceeded analyst expectations, driven by robust iPhone sales and continued growth in the services segment...",
      source: "TechCrunch",
      date: "2024-01-15",
      sentiment: "positive",
      category: "earnings",
      readTime: "3 min read",
      image: "",
    },
    {
      id: 2,
      title: "New iPhone Features Drive Consumer Interest",
      summary:
        "The latest iPhone models are generating significant consumer interest with innovative AI-powered features and improved camera technology.",
      content:
        "Apple's newest iPhone lineup has captured market attention with groundbreaking features that leverage artificial intelligence...",
      source: "Bloomberg",
      date: "2024-01-12",
      sentiment: "positive",
      category: "product",
      readTime: "4 min read",
      image: "",
    },
    {
      id: 3,
      title: "Apple Faces Supply Chain Concerns in Asia",
      summary:
        "Recent geopolitical tensions and supply chain disruptions in Asia could impact Apple's production capabilities in the coming quarters.",
      content:
        "Industry analysts are closely monitoring Apple's supply chain operations as regional tensions continue to affect manufacturing...",
      source: "Reuters",
      date: "2024-01-10",
      sentiment: "negative",
      category: "supply-chain",
      readTime: "5 min read",
      image: "",
    },
    {
      id: 4,
      title: "Apple Services Revenue Hits New Milestone",
      summary:
        "Apple's services division continues its impressive growth trajectory, reaching a new revenue milestone that strengthens the company's recurring income.",
      content:
        "The services segment, including App Store, iCloud, and Apple Music, has become increasingly important to Apple's overall financial health...",
      source: "Wall Street Journal",
      date: "2024-01-08",
      sentiment: "positive",
      category: "services",
      readTime: "3 min read",
      image: "",
    },
  ],
  microsoft: [
    {
      id: 5,
      title: "Microsoft Azure Cloud Revenue Surges 30% Year-over-Year",
      summary:
        "Microsoft's cloud computing division shows exceptional growth, solidifying its position as a major competitor to Amazon Web Services.",
      content:
        "Azure's impressive performance continues to drive Microsoft's overall revenue growth, with enterprise customers increasingly adopting cloud solutions...",
      source: "Forbes",
      date: "2024-01-14",
      sentiment: "positive",
      category: "cloud",
      readTime: "4 min read",
      image: "",
    },
    {
      id: 6,
      title: "Microsoft Copilot AI Integration Expands Across Office Suite",
      summary:
        "The company announces broader AI integration across its productivity tools, potentially revolutionizing workplace efficiency.",
      content:
        "Microsoft's AI-powered Copilot is being integrated into more Office applications, promising to transform how users interact with productivity software...",
      source: "The Verge",
      date: "2024-01-11",
      sentiment: "positive",
      category: "ai",
      readTime: "3 min read",
      image: "",
    },
    {
      id: 7,
      title: "Regulatory Scrutiny Increases for Microsoft's Gaming Division",
      summary:
        "Antitrust regulators are examining Microsoft's gaming acquisitions and market practices more closely following recent industry consolidation.",
      content:
        "The gaming industry's consolidation has drawn regulatory attention, with Microsoft's recent acquisitions under increased scrutiny...",
      source: "Financial Times",
      date: "2024-01-09",
      sentiment: "negative",
      category: "regulatory",
      readTime: "5 min read",
      image: "",
    },
    {
      id: 8,
      title: "Microsoft Teams Usage Reaches 300 Million Monthly Active Users",
      summary:
        "The collaboration platform continues its growth momentum, benefiting from hybrid work trends and enterprise digital transformation.",
      content:
        "Microsoft Teams has reached a significant milestone in user adoption, reflecting the ongoing shift toward remote and hybrid work models...",
      source: "TechCrunch",
      date: "2024-01-07",
      sentiment: "positive",
      category: "productivity",
      readTime: "2 min read",
      image: "",
    },
  ],
  tesla: [
    {
      id: 9,
      title: "Tesla Delivers Record Number of Vehicles in Q4",
      summary:
        "Tesla exceeded delivery expectations in the fourth quarter, demonstrating strong demand for electric vehicles despite economic headwinds.",
      content:
        "Tesla's Q4 delivery numbers surpassed analyst predictions, with the company delivering over 400,000 vehicles globally...",
      source: "CNBC",
      date: "2024-01-13",
      sentiment: "positive",
      category: "deliveries",
      readTime: "3 min read",
      image: "",
    },
    {
      id: 10,
      title: "Tesla's Full Self-Driving Beta Expands to More Markets",
      summary:
        "The electric vehicle manufacturer continues rolling out its autonomous driving technology to additional geographic markets.",
      content:
        "Tesla's Full Self-Driving beta program is expanding internationally, bringing advanced autonomous features to more customers worldwide...",
      source: "Electrek",
      date: "2024-01-11",
      sentiment: "positive",
      category: "autonomous",
      readTime: "4 min read",
      image: "",
    },
    {
      id: 11,
      title: "Tesla Faces Increased Competition in EV Market",
      summary:
        "Traditional automakers and new entrants are intensifying competition in the electric vehicle space, challenging Tesla's market dominance.",
      content:
        "The electric vehicle market is becoming increasingly competitive as established automakers launch new EV models...",
      source: "Automotive News",
      date: "2024-01-09",
      sentiment: "negative",
      category: "competition",
      readTime: "5 min read",
      image: "",
    },
    {
      id: 12,
      title: "Tesla Supercharger Network Opens to Other EV Brands",
      summary:
        "Tesla's charging infrastructure becomes more accessible to non-Tesla vehicles, potentially creating new revenue streams.",
      content:
        "The opening of Tesla's Supercharger network to other electric vehicle brands marks a significant shift in the company's strategy...",
      source: "Green Car Reports",
      date: "2024-01-06",
      sentiment: "positive",
      category: "infrastructure",
      readTime: "3 min read",
      image: "",
    },
  ],
}

export default function InsightsPage() {
  const [selectedCompany, setSelectedCompany] = useState("apple")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentNews = newsData[selectedCompany]

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return <TrendingUp className="h-4 w-4 text-green-400" />
      case "negative":
        return <TrendingDown className="h-4 w-4 text-red-400" />
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-400" />
    }
  }

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return "#00FF88"
      case "negative":
        return "#ff4444"
      default:
        return "#fbbf24"
    }
  }

  const getCategoryColor = (category) => {
    const colors = {
      earnings: "#00FF88",
      product: "#BFEDFC",
      "supply-chain": "#ff4444",
      services: "#84cc16",
      cloud: "#00FF88",
      ai: "#BFEDFC",
      regulatory: "#ff4444",
      productivity: "#84cc16",
      deliveries: "#00FF88",
      autonomous: "#BFEDFC",
      competition: "#ff4444",
      infrastructure: "#84cc16",
    }
    return colors[category] || "#BFEDFC"
  }

  const getCompanyStats = (company) => {
    const stats = {
      apple: { articles: 24, positive: 18, negative: 4, neutral: 2 },
      microsoft: { articles: 21, positive: 16, negative: 3, neutral: 2 },
      tesla: { articles: 19, positive: 12, negative: 5, neutral: 2 },
    }
    return stats[company ]
  }

  const stats = getCompanyStats(selectedCompany)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#00202E" }}>
      {/* Header */}
      
      <Header/>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 pt-16"
          style={{ backgroundColor: "rgba(0, 32, 46, 0.95)", backdropFilter: "blur(8px)" }}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="text-lg font-medium py-2 hover:opacity-80 transition-opacity"
              style={{ color: "#BFEDFC" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/insights"
              className="text-lg font-medium py-2"
              style={{ color: "#00FF88" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              to="/prediction"
              className="text-lg font-medium py-2 hover:opacity-80 transition-opacity"
              style={{ color: "#BFEDFC" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Prediction
            </Link>
            <Link
              to="#about"
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
            Market Insights & News
          </h1>
          <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
            Stay updated with the latest news and analysis for your favorite stocks
          </p>
        </div>

        {/* Company Selector and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <Card
              className="border"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardHeader>
                <CardTitle style={{ color: "#BFEDFC" }}>Select Company</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                  <SelectTrigger
                    className="w-full border-2"
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
                      Apple Inc.
                    </SelectItem>
                    <SelectItem value="microsoft" style={{ color: "#BFEDFC" }}>
                      Microsoft Corp.
                    </SelectItem>
                    <SelectItem value="tesla" style={{ color: "#BFEDFC" }}>
                      Tesla Inc.
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              className="border"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                      Total Articles
                    </p>
                    <p className="text-2xl font-bold" style={{ color: "#BFEDFC" }}>
                      {stats.articles}
                    </p>
                  </div>
                  <Newspaper className="h-8 w-8" style={{ color: "#BFEDFC" }} />
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
                      Positive News
                    </p>
                    <p className="text-2xl font-bold" style={{ color: "#00FF88" }}>
                      {stats.positive}
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
                      Negative News
                    </p>
                    <p className="text-2xl font-bold" style={{ color: "#ff4444" }}>
                      {stats.negative}
                    </p>
                  </div>
                  <TrendingDown className="h-8 w-8" style={{ color: "#ff4444" }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentNews.map((article) => (
            <Card
              key={article.id}
              className="border hover:shadow-lg transition-shadow cursor-pointer"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg leading-tight" style={{ color: "#BFEDFC" }}>
                    {article.title}
                  </CardTitle>
                  {getSentimentIcon(article.sentiment)}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{article.source}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4" style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                  {article.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge
                      style={{
                        backgroundColor: `${getCategoryColor(article.category)}20`,
                        color: getCategoryColor(article.category),
                        border: `1px solid ${getCategoryColor(article.category)}40`,
                      }}
                    >
                      {article.category.replace("-", " ")}
                    </Badge>
                    <Badge
                      style={{
                        backgroundColor: `${getSentimentColor(article.sentiment)}20`,
                        color: getSentimentColor(article.sentiment),
                        border: `1px solid ${getSentimentColor(article.sentiment)}40`,
                      }}
                    >
                      {article.sentiment}
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="hover:bg-opacity-10" style={{ color: "#00FF88" }}>
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <Button size="lg" className="bg-lime-400 hover:bg-lime-500" style={{ color: "#00202E" }}>
            Load More Articles
          </Button>
        </div>
      </main>
    </div>
  )
}
