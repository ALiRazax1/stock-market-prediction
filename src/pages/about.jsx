"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TrendingUp,
  ArrowLeft,
  Menu,
  X,
  GraduationCap,
  Users,
  Target,
  Lightbulb,
  Code,
  Brain,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Heart,
  Star,
  Rocket,
} from "lucide-react"
import { Link } from "react-router"
import { useState } from "react"
import Header from "@/components/ui/header"

// Team members data
const teamMembers = [
  "Syeda Aisha",
  "Sabahat",
  "Husnain Ahmed",
  "Anas Iqbal",
  "Usama Arshad",
  "Ali Raza",
]

// Project statistics
const projectStats = [
  { label: "Lines of Code", value: "50,000+", icon: Code },
  { label: "AI Models Trained", value: "15", icon: Brain },
  { label: "Data Points Analyzed", value: "1M+", icon: BarChart3 },
  { label: "Hours Invested", value: "2,400+", icon: Zap },
]

// Technologies used
const technologies = [
  "React & Next.js",
  "TypeScript",
  "Machine Learning",
  "Python",
  "TensorFlow",
  "Node.js",
  "PostgreSQL",
  "AWS Cloud",
  "Docker",
  "Git & GitHub",
]

// Project milestones
const milestones = [
  {
    phase: "Research & Planning",
    description: "Market analysis, technology selection, and project architecture design",
    duration: "2 months",
    status: "completed",
  },
  {
    phase: "AI Model Development",
    description: "Training machine learning models for stock prediction and sentiment analysis",
    duration: "3 months",
    status: "completed",
  },
  {
    phase: "Frontend Development",
    description: "Building responsive user interface with modern web technologies",
    duration: "2 months",
    status: "completed",
  },
  {
    phase: "Integration & Testing",
    description: "Connecting all components and comprehensive testing across platforms",
    duration: "1 month",
    status: "completed",
  },
]

export default function AboutPage() {

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#00202E" }}>
      {/* Header */}
     <Header/>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-4 text-sm hover:opacity-80 transition-opacity"
            style={{ color: "#BFEDFC" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4" style={{ color: "#BFEDFC" }}>
              About StockPro
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "rgba(191, 237, 252, 0.8)" }}>
              A revolutionary AI-powered stock market prediction platform created by passionate university students as
              their final year project
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <Card
            className="border text-center p-8"
            style={{
              backgroundColor: "rgba(0, 32, 46, 0.8)",
              borderColor: "rgba(191, 237, 252, 0.2)",
              background: "linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(191, 237, 252, 0.1) 100%)",
            }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: "rgba(0, 255, 136, 0.2)" }}>
                <GraduationCap className="h-12 w-12" style={{ color: "#00FF88" }} />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#BFEDFC" }}>
              Born from Academic Excellence
            </h2>
            <p className="text-lg max-w-4xl mx-auto" style={{ color: "rgba(191, 237, 252, 0.8)" }}>
              StockPro represents the culmination of months of intensive research, development, and innovation by a
              dedicated team of computer science students. This project combines cutting-edge artificial intelligence
              with modern web technologies to democratize financial market analysis and make professional-grade
              investment tools accessible to everyone.
            </p>
          </Card>
        </section>

        {/* Project Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#BFEDFC" }}>
            Project by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <Card
                key={index}
                className="border text-center"
                style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-8 w-8" style={{ color: "#00FF88" }} />
                  </div>
                  <p className="text-3xl font-bold mb-2" style={{ color: "#BFEDFC" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#BFEDFC" }}>
              Meet Our Team
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(191, 237, 252, 0.8)" }}>
              A diverse group of talented students who came together with a shared vision of revolutionizing financial
              technology
            </p>
          </div>

          <Card
            className="border"
            style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12" style={{ color: "#00FF88" }} />
              </div>
              <CardTitle style={{ color: "#BFEDFC" }}>The StockPro Development Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg border"
                    style={{
                      backgroundColor: "rgba(191, 237, 252, 0.05)",
                      borderColor: "rgba(191, 237, 252, 0.1)",
                    }}
                  >
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0, 255, 136, 0.2)" }}
                    >
                      <Star className="h-8 w-8" style={{ color: "#00FF88" }} />
                    </div>
                    <h3 className="text-lg font-semibold" style={{ color: "#BFEDFC" }}>
                      {member}
                    </h3>
                    <p className="text-sm mt-2" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                      Computer Science Student
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              className="border"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8" style={{ color: "#00FF88" }} />
                  <CardTitle style={{ color: "#BFEDFC" }}>Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                  To democratize financial market analysis by leveraging artificial intelligence and machine learning,
                  making sophisticated investment tools accessible to everyone regardless of their financial background
                  or expertise level.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-8 w-8" style={{ color: "#00FF88" }} />
                  <CardTitle style={{ color: "#BFEDFC" }}>Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>
                  To become the leading platform for AI-driven financial insights, empowering individuals to make
                  informed investment decisions and contributing to a more transparent and accessible financial
                  ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#BFEDFC" }}>
            Technologies & Tools
          </h2>
          <Card
            className="border"
            style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
          >
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg border"
                    style={{
                      backgroundColor: "rgba(191, 237, 252, 0.05)",
                      borderColor: "rgba(191, 237, 252, 0.1)",
                    }}
                  >
                    <Code className="h-6 w-6 mx-auto mb-2" style={{ color: "#00FF88" }} />
                    <p className="text-sm font-medium" style={{ color: "#BFEDFC" }}>
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#BFEDFC" }}>
            Development Journey
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="border"
                style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#00FF88" }}
                      >
                        <span className="text-sm font-bold" style={{ color: "#00202E" }}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold" style={{ color: "#BFEDFC" }}>
                          {milestone.phase}
                        </h3>
                        <span
                          className="text-sm px-3 py-1 rounded-full"
                          style={{ backgroundColor: "rgba(0, 255, 136, 0.2)", color: "#00FF88" }}
                        >
                          {milestone.duration}
                        </span>
                      </div>
                      <p style={{ color: "rgba(191, 237, 252, 0.8)" }}>{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#BFEDFC" }}>
            What Makes StockPro Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              className="border text-center"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardContent className="p-6">
                <Brain className="h-12 w-12 mx-auto mb-4" style={{ color: "#00FF88" }} />
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#BFEDFC" }}>
                  AI-Powered Predictions
                </h3>
                <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                  Advanced machine learning algorithms trained on vast datasets for accurate market predictions
                </p>
              </CardContent>
            </Card>

            <Card
              className="border text-center"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardContent className="p-6">
                <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: "#00FF88" }} />
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#BFEDFC" }}>
                  Secure & Reliable
                </h3>
                <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                  Built with security best practices and robust architecture for reliable performance
                </p>
              </CardContent>
            </Card>

            <Card
              className="border text-center"
              style={{ backgroundColor: "rgba(0, 32, 46, 0.8)", borderColor: "rgba(191, 237, 252, 0.2)" }}
            >
              <CardContent className="p-6">
                <Globe className="h-12 w-12 mx-auto mb-4" style={{ color: "#00FF88" }} />
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#BFEDFC" }}>
                  Accessible to All
                </h3>
                <p className="text-sm" style={{ color: "rgba(191, 237, 252, 0.7)" }}>
                  User-friendly interface designed to make complex financial data understandable for everyone
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card
            className="border p-8"
            style={{
              backgroundColor: "rgba(0, 32, 46, 0.8)",
              borderColor: "rgba(191, 237, 252, 0.2)",
              background: "linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(191, 237, 252, 0.1) 100%)",
            }}
          >
            <div className="flex justify-center mb-6">
              <Heart className="h-12 w-12" style={{ color: "#00FF88" }} />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#BFEDFC" }}>
              Built with Passion, Designed for Impact
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "rgba(191, 237, 252, 0.8)" }}>
              StockPro is more than just a final year project—it's our contribution to making financial markets more
              accessible and transparent for everyone. Join us on this journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-lime-400 hover:bg-lime-500" style={{ color: "#00202E" }}>
                <Rocket className="mr-2 h-5 w-5" />
                Try StockPro Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-opacity-10"
                style={{ borderColor: "#BFEDFC", color: "#BFEDFC", backgroundColor: "transparent" }}
              >
                Learn More
              </Button>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
