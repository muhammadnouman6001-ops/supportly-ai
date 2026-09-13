import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Supportly AI</CardTitle>

          <CardDescription>
            AI-powered customer support platform.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button>Open Dashboard</Button>
        </CardContent>
      </Card>
    </main>
  )
}