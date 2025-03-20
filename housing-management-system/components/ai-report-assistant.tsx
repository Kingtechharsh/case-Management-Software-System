"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BrainCircuitIcon, LightbulbIcon, SendIcon } from "lucide-react"

export function AIReportAssistant() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [conversation, setConversation] = useState([
    {
      role: "assistant",
      content:
        "I can help you analyze your program data and generate insights. What would you like to know about your housing assistance program?",
    },
  ])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    // Add user message to conversation
    const userMessage = { role: "user", content: query }
    setConversation((prev) => [...prev, userMessage])

    // Clear input and set loading state
    setQuery("")
    setIsLoading(true)

    try {
      // Simulate AI processing delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate AI response based on query
      let aiResponse = ""

      if (query.toLowerCase().includes("progress")) {
        aiResponse =
          "Based on your current progress rate of 75%, you're on track to complete the Housing Assistance Program by June 2025. This is 2 months ahead of the average completion time."
      } else if (query.toLowerCase().includes("recommend") || query.toLowerCase().includes("suggest")) {
        aiResponse =
          "I recommend focusing on completing your Income Verification Form which is due in 3 days. Additionally, the Financial Literacy Workshop would be beneficial for your long-term housing stability goals."
      } else if (query.toLowerCase().includes("compare")) {
        aiResponse =
          "Compared to similar participants, you're making excellent progress. Your documentation submission rate is 25% faster than average, and you've utilized 3 out of 5 available support services."
      } else {
        aiResponse =
          "I've analyzed your program data and noticed you're making steady progress. Your recent document submissions have all been approved promptly. Is there a specific aspect of your housing assistance program you'd like insights on?"
      }

      // Add AI response to conversation
      setConversation((prev) => [...prev, { role: "assistant", content: aiResponse }])
    } catch (error) {
      console.error("Error generating AI response:", error)
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I encountered an error analyzing your data. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <BrainCircuitIcon className="h-5 w-5 text-blue-600 mr-2" />
          <div>
            <CardTitle>AI Report Assistant</CardTitle>
            <CardDescription>Ask questions about your program data</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <div className="space-y-4">
          {conversation.map((message, index) => (
            <div key={index} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === "assistant" ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white"
                }`}
              >
                {message.role === "assistant" && message.content.includes("recommend") && (
                  <LightbulbIcon className="h-4 w-4 text-amber-500 mb-1 inline-block mr-1" />
                )}
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-3 bg-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-300"></div>
                  <span className="text-sm text-gray-500">Analyzing data...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <form onSubmit={handleSubmit} className="w-full flex space-x-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about your program data..."
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <SendIcon className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

