"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ArrowDownIcon, ArrowUpIcon, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const teamStats = {
  wins: 9,
  losses: 8,
  ties: 3,
  goalsFor: 70,
  goalsAgainst: 45,
}

const skaterStats = [
  { name: "Caoilin Fritz", position: "D", gamesPlayed: 20, goals: 0, assists: 0, points: 0, faceoffPercentage: 0 },
  { name: "Nila Chuk", position: "C", gamesPlayed: 20, goals: 5, assists: 2, points: 7, faceoffPercentage: 62.2 },
  { name: "Emma Withall", position: "C", gamesPlayed: 20, goals: 3, assists: 3, points: 6, faceoffPercentage: 60.0 },
  { name: "Jaya Jackson", position: "C", gamesPlayed: 20, goals: 3, assists: 1, points: 4, faceoffPercentage: 50.8 },
  { name: "Riley Lawlor", position: "F", gamesPlayed: 20, goals: 3, assists: 1, points: 4, faceoffPercentage: 0 },
  { name: "Hannah Maron", position: "D", gamesPlayed: 20, goals: 0, assists: 0, points: 0, faceoffPercentage: 0 },
  { name: "Marlo Parker", position: "F", gamesPlayed: 20, goals: 1, assists: 0, points: 1, faceoffPercentage: 50.0 },
  { name: "Leoni Kitchen", position: "D", gamesPlayed: 20, goals: 0, assists: 1, points: 1, faceoffPercentage: 0 },
  { name: "Leah Brown", position: "F", gamesPlayed: 19, goals: 1, assists: 0, points: 1, faceoffPercentage: 0 },
  { name: "Quinn Stacey", position: "F", gamesPlayed: 20, goals: 2, assists: 0, points: 2, faceoffPercentage: 0 },
  { name: "Vivian MacDonald", position: "D", gamesPlayed: 20, goals: 3, assists: 1, points: 4, faceoffPercentage: 0 },
  { name: "Emily Carey", position: "F", gamesPlayed: 20, goals: 1, assists: 1, points: 2, faceoffPercentage: 33.3 },
  { name: "Rosalie McAdam", position: "D", gamesPlayed: 20, goals: 1, assists: 1, points: 2, faceoffPercentage: 0 },
  { name: "Avery Ruffell", position: "D", gamesPlayed: 20, goals: 0, assists: 1, points: 1, faceoffPercentage: 0 },
  { name: "Madeleine Malta", position: "F", gamesPlayed: 20, goals: 7, assists: 1, points: 8, faceoffPercentage: 75.0 },
]

const goalieStats = [
  {
    name: "Emilia Zosimadis",
    position: "G",
    gamesTracked: 7,
    saves: 116,
    goalsAgainst: 24,
    shotsAgainst: 140,
    savePercentage: 0.829,
  },
  {
    name: "Bridget Smith",
    position: "G",
    gamesTracked: 5,
    saves: 56,
    goalsAgainst: 5,
    shotsAgainst: 61,
    savePercentage: 0.918,
  },
]

const goalData = [
  { name: "Goals For", value: teamStats.goalsFor },
  { name: "Goals Against", value: teamStats.goalsAgainst },
]

export default function HockeyStatsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Etobicoke Dolphins U13AA Statistics</h1>
      <h2 className="text-2xl font-semibold mb-6">2024-2025 Regular Season</h2>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Games</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.wins + teamStats.losses + teamStats.ties}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wins</CardTitle>
            <ArrowUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.wins}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Losses</CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.losses}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ties</CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-muted-foreground rotate-90" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.ties}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Goals For</CardTitle>
            <ArrowUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.goalsFor}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Goals Against</CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.goalsAgainst}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Goals Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              goalsFor: {
                label: "Goals For",
                color: "hsl(var(--chart-1))",
              },
              goalsAgainst: {
                label: "Goals Against",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={goalData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="var(--color-goalsFor)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground mb-4">
        Please note that the given stats are only for games that have been tracked.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Player Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Games Played</TableHead>
                <TableHead>Goals</TableHead>
                <TableHead>Assists</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>FO%</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skaterStats.map((player) => (
                <TableRow key={player.name}>
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell>{player.position}</TableCell>
                  <TableCell>{player.gamesPlayed}</TableCell>
                  <TableCell>{player.goals}</TableCell>
                  <TableCell>{player.assists}</TableCell>
                  <TableCell>{player.points}</TableCell>
                  <TableCell>
                    {player.faceoffPercentage > 0 ? `${player.faceoffPercentage.toFixed(1)}%` : "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Goalie Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Games Tracked</TableHead>
                <TableHead>Saves</TableHead>
                <TableHead>Goals Against</TableHead>
                <TableHead>Shots Against</TableHead>
                <TableHead>S%</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {goalieStats.map((goalie) => (
                <TableRow key={goalie.name}>
                  <TableCell className="font-medium">{goalie.name}</TableCell>
                  <TableCell>{goalie.gamesTracked}</TableCell>
                  <TableCell>{goalie.saves}</TableCell>
                  <TableCell>{goalie.goalsAgainst}</TableCell>
                  <TableCell>{goalie.shotsAgainst}</TableCell>
                  <TableCell>{(goalie.savePercentage * 100).toFixed(1)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

