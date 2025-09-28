"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu,LogOut,Settings,Users,BarChart,Package, LayoutDashboard } from "lucide-react";

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const handleLogout = () => {
    window.location.href = "/";
  };

  const renderContent = () => {
    const cardClass = "bg-card/80 text-foreground border border-border rounded-xl p-4";
     switch (activePage) {
      case "users":
        return (
          <Card className={cardClass}>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Here admin can add/remove doctors, staff, patients.</p>
            </CardContent>
          </Card>
        );
      case "reports":
        return (
          <Card className={cardClass}>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View patient visits, common illnesses, etc.</p>
            </CardContent>
          </Card>
        );
      case "inventory":
        return (
          <Card className={cardClass}>
            <CardHeader>
              <CardTitle>Inventory Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Track medicines, supplies, and stock levels.</p>
            </CardContent>
          </Card>
        );
      case "settings":
        return (
          <Card className={cardClass}>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Clinic info, roles, permissions configuration.</p>
            </CardContent>
          </Card>
        );
        default:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className={cardClass}>
                <CardHeader>
                  <CardTitle>Doctors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">1</p>
                </CardContent>
              </Card>
              <Card className={cardClass}>
                <CardHeader>
                  <CardTitle>Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">1</p>
                </CardContent>
              </Card>
              <Card className={cardClass}>
                <CardHeader>
                  <CardTitle>Patients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">1</p>
                </CardContent>
              </Card>
            </div>
              <section className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="bg-card/80 text-foreground border border-border rounded-lg p-4 shadow">
                <p>- Generated patient report (Sept 25, 2025)</p>
                <p>- Added new staff account (Sept 24, 2025)</p>
                <p>- Updated clinic settings (Sept 23, 2025)</p>
              </div>
            </section>
          </>
        );
    }
  };

   return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside
        className={`bg-sidebar shadow-lg p-4 w-64 transition-all ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">Clinic Admin</h2>
        <nav className="space-y-3">
          <Button
  variant={activePage === "dashboard" ? "default" : "ghost"}
  className="w-full justify-start"
  onClick={() => setActivePage("dashboard")}
>
 <LayoutDashboard className="mr-2"/> Dashboard
</Button>

<Button
  variant={activePage === "users" ? "default" : "ghost"}
  className="w-full justify-start"
  onClick={() => setActivePage("users")}
>
  <Users className="mr-2" /> User Management
</Button>

<Button
  variant={activePage === "reports" ? "default" : "ghost"}
  className="w-full justify-start"
  onClick={() => setActivePage("reports")}
>
  <BarChart className="mr-2" /> Reports
</Button>

<Button
  variant={activePage === "inventory" ? "default" : "ghost"}
  className="w-full justify-start"
  onClick={() => setActivePage("inventory")}
>
  <Package className="mr-2" /> Inventory Control
</Button>

<Button
  variant={activePage === "settings" ? "default" : "ghost"}
  className="w-full justify-start"
  onClick={() => setActivePage("settings")}
>
  <Settings className="mr-2" /> System Settings
</Button>

        </nav>
      </aside>
       <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu />
          </Button>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Admin</span>
            <Button onClick={handleLogout}>
              <LogOut className="mr-1" /> Logout
            </Button>
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
}
