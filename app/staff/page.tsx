"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu,LogOut,Users,Calendar,ClipboardList,LayoutDashboard } from "lucide-react";

export default function StaffPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const handleLogout = () => {
    window.location.href = "/"; // redirect to login page
  };

  return (
    <div className="flex min-h-screen bg-background">
      <aside
        className={`bg-card shadow-lg p-4 w-64 transition-all ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-foreground">Staff Panel</h2>
        <nav className="space-y-3">
          <Button
            variant={activePage === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage("dashboard")}
          >
            <LayoutDashboard className="mr-2 text-primary" /> Dashboard
          </Button>
          <Button
            variant={activePage === "patients" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage("patients")}
          >
            <Users className="mr-2 text-secondary" /> Patient Registration
          </Button>
          <Button
            variant={activePage === "appointments" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage("appointments")}
          >
            <Calendar className="mr-2 text-accent" /> Appointment Management
          </Button>
          <Button
            variant={activePage === "queue" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage("queue")}
          >
            <ClipboardList className="mr-2 text-destructive" /> Queue Management
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
            <Menu className="text-foreground" />
          </Button>
          <div className="flex items-center space-x-4">
            <span className="font-medium text-foreground">Staff</span>
            <Button onClick={handleLogout}>
              <LogOut className="mr-1 text-destructive" /> Logout
            </Button>
          </div>
        </header>

        {activePage === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Patient Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="bg-primary" onClick={() => setActivePage("patients")}>
                  Add New Patient
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground">
                  <li className="flex justify-between p-2 border rounded">
                    Appointment #1
                    <Button size="sm" variant="secondary">
                      Edit
                    </Button>
                  </li>
                  <li className="flex justify-between p-2 border rounded">
                    Appointment #2
                    <Button size="sm" variant="secondary">
                      Cancel
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Queue Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Current Queue: 5 Patients Waiting</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activePage === "patients" && (
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foregroun">Patient Registration</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              <p>Register patients.</p>
            </CardContent>
          </Card>
        )}

        {activePage === "appointments" && (
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Appointment Management</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              <p>Manage appointments here.</p>
            </CardContent>
          </Card>
        )}

        {activePage === "queue" && (
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Queue Management</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              <p>Track and manage queue here.</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
