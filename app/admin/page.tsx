import { redirect } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AdminDashboard from "@/components/admin/dashboard"
import { getServerSession } from "@/lib/auth"

export default async function AdminPage() {
  const session = await getServerSession()

  if (!session?.user?.isAdmin) {
    redirect("/")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900">
      <Header />

      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-white">Admin Dashboard</h1>
        <AdminDashboard />
      </div>

      <Footer />
    </main>
  )
}

