"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pencil, Trash2, MoreVertical, Eye, EyeOff, Search, RefreshCw } from "lucide-react"
import type { Game } from "@/lib/types"
import EditGameForm from "@/components/admin/edit-game-form"

export default function GamesList() {
  const { toast } = useToast()
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [editingGame, setEditingGame] = useState<Game | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [gameToDelete, setGameToDelete] = useState<Game | null>(null)

  const fetchGames = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/games")
      const data = await response.json()
      setGames(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch games",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  const handleToggleStatus = async (game: Game) => {
    try {
      const response = await fetch(`/api/admin/games/${game._id}/toggle-status`, {
        method: "PATCH",
      })

      if (response.ok) {
        setGames(games.map((g) => (g._id === game._id ? { ...g, enabled: !g.enabled } : g)))

        toast({
          title: "Success",
          description: `Game ${game.enabled ? "disabled" : "enabled"} successfully`,
        })
      } else {
        throw new Error("Failed to update game status")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update game status",
        variant: "destructive",
      })
    }
  }

  const handleDeleteGame = async () => {
    if (!gameToDelete) return

    try {
      const response = await fetch(`/api/admin/games/${gameToDelete._id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setGames(games.filter((g) => g._id !== gameToDelete._id))

        toast({
          title: "Success",
          description: "Game deleted successfully",
        })
      } else {
        throw new Error("Failed to delete game")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete game",
        variant: "destructive",
      })
    } finally {
      setDeleteDialogOpen(false)
      setGameToDelete(null)
    }
  }

  const filteredGames = games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search games..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-1 text-white bg-white/10 border-white/20 hover:bg-white/20"
          onClick={fetchGames}
          disabled={loading}
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          <span>Refresh</span>
        </Button>
      </div>

      <div className="border rounded-md border-white/20">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-white/5">
              <TableHead className="text-white">Title</TableHead>
              <TableHead className="text-white">Category</TableHead>
              <TableHead className="text-white">Plays</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Added</TableHead>
              <TableHead className="text-white w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  <RefreshCw className="w-6 h-6 mx-auto animate-spin text-white/70" />
                </TableCell>
              </TableRow>
            ) : filteredGames.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-white/70">
                  No games found
                </TableCell>
              </TableRow>
            ) : (
              filteredGames.map((game) => (
                <TableRow key={game._id} className="hover:bg-white/5">
                  <TableCell className="font-medium text-white">{game.title}</TableCell>
                  <TableCell className="text-white/70">{game.category}</TableCell>
                  <TableCell className="text-white/70">{game.plays.toLocaleString()}</TableCell>
                  <TableCell>
                    {game.enabled ? (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-500/20 text-red-400">
                        Disabled
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-white/70">{new Date(game.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                          <MoreVertical className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setEditingGame(game)}>
                          <Pencil className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleToggleStatus(game)}>
                          {game.enabled ? (
                            <>
                              <EyeOff className="w-4 h-4 mr-2" />
                              Disable
                            </>
                          ) : (
                            <>
                              <Eye className="w-4 h-4 mr-2" />
                              Enable
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setGameToDelete(game)
                            setDeleteDialogOpen(true)
                          }}
                          className="text-red-500 focus:text-red-500"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Edit Game Dialog */}
      {editingGame && (
        <Dialog open={!!editingGame} onOpenChange={(open) => !open && setEditingGame(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Game</DialogTitle>
              <DialogDescription>Make changes to the game details below.</DialogDescription>
            </DialogHeader>
            <EditGameForm
              game={editingGame}
              onSuccess={(updatedGame) => {
                setGames(games.map((g) => (g._id === updatedGame._id ? updatedGame : g)))
                setEditingGame(null)
                toast({
                  title: "Success",
                  description: "Game updated successfully",
                })
              }}
            />
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{gameToDelete?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteGame}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

