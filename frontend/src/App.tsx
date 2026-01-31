import { cn } from "@/lib/utils"

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Vite + React + TypeScript
        </h1>
        <p className="text-muted-foreground">
          Tailwind CSS and shadcn/ui ready!
        </p>
        <button
          className={cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium",
            "bg-primary text-primary-foreground hover:bg-primary/90",
            "h-10 px-4 py-2 transition-colors"
          )}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
