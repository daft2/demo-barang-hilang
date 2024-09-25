"use client"

import { useState } from "react"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"

type LostItem = {
  id: string
  title: string
  date: string
  location: string
  status: "Lost" | "Under Investigation" | "Found"
}

const statusColors = {
  Lost: "bg-red-500",
  "Under Investigation": "bg-yellow-500",
  Found: "bg-green-500",
}

export function LostItemHistoryComponent() {
  const [lostItems, setLostItems] = useState<LostItem[]>([
    { id: "1", title: "Blue Backpack", date: "2023-09-15", location: "Central Park", status: "Lost" },
    { id: "2", title: "iPhone 12", date: "2023-09-18", location: "Coffee Shop", status: "Under Investigation" },
    { id: "3", title: "Gold Watch", date: "2023-09-20", location: "Gym", status: "Found" },
  ])

  const [editingItem, setEditingItem] = useState<LostItem | null>(null)

  const handleEdit = (item: LostItem) => {
    setEditingItem({ ...item })
  }

  const handleSave = () => {
    if (editingItem) {
      setLostItems(lostItems.map(item => item.id === editingItem.id ? editingItem : item))
      setEditingItem(null)
    }
  }

  const handleMarkAsFound = (id: string) => {
    setLostItems(lostItems.map(item => 
      item.id === id ? { ...item, status: "Found" } : item
    ))
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Lost Item History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Reported Items</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] rounded-md border p-4">
            <ul className="space-y-4">
              {lostItems.map((item) => (
                <li key={item.id}>
                  <Card>
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">Lost on: {item.date}</p>
                        <p className="text-sm text-muted-foreground">Location: {item.location}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge className={`${statusColors[item.status]} text-white`}>
                          {item.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                                Edit
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Item Details</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="title" className="text-right">
                                    Title
                                  </Label>
                                  <Input
                                    id="title"
                                    value={editingItem?.title}
                                    onChange={(e) => setEditingItem({ ...editingItem!, title: e.target.value })}
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="date" className="text-right">
                                    Date
                                  </Label>
                                  <Input
                                    id="date"
                                    type="date"
                                    value={editingItem?.date}
                                    onChange={(e) => setEditingItem({ ...editingItem!, date: e.target.value })}
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="location" className="text-right">
                                    Location
                                  </Label>
                                  <Textarea
                                    id="location"
                                    value={editingItem?.location}
                                    onChange={(e) => setEditingItem({ ...editingItem!, location: e.target.value })}
                                    className="col-span-3"
                                  />
                                </div>
                              </div>
                              <Button onClick={handleSave}>Save Changes</Button>
                            </DialogContent>
                          </Dialog>
                          {item.status !== "Found" && (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => handleMarkAsFound(item.id)}
                            >
                              Mark as Found
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}