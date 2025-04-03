"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GamesList from "@/components/admin/games-list"
import AddGameForm from "@/components/admin/add-game-form"
import AnalyticsPanel from "@/components/admin/analytics-panel"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("games")

  return (
    <Tabs defaultValue="games" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-white/10">
        <TabsTrigger value="games">Games</TabsTrigger>
        <TabsTrigger value="add">Add Game</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>

      <TabsContent value="games" className="p-4 mt-4 rounded-md bg-white/10">
        <GamesList />
      </TabsContent>

      <TabsContent value="add" className="p-4 mt-4 rounded-md bg-white/10">
        <AddGameForm onSuccess={() => setActiveTab("games")} />
      </TabsContent>

      <TabsContent value="analytics" className="p-4 mt-4 rounded-md bg-white/10">
        <AnalyticsPanel />
      </TabsContent>
    </Tabs>
  )
}

