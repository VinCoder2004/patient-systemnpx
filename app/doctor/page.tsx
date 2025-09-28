"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, LogOut,Calendar,Users,FileText,User,LayoutDashboard } from "lucide-react";

export default function DoctorPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const handleLogout = () => {
    window.location.href = "/"; // redirect to login
  };
  const cardClass = "bg-card/80 text-foreground border border-border rounded-xl p-4";
  return (
    <div className="flex min-h-screen bg-background text-foreground">

      <aside
        className={`bg-sidebar shadow-lg p-4 w-64 transition-all ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">Doctor Portal</h2>
        <nav className="space-y-3">
          <Button
            variant={activePage === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage("dashboard")}
          >
            <LayoutDashboard className="mr-2" /> Dashboard
          </Button>
          <Button
            variant={activePage === "appointments" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage("appointments")}
          >
            <Calendar className="mr-2" /> Appointments
          </Button>
          <Button
            variant={activePage === "patients" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage("patients")}
          >
            <Users className="mr-2" /> Patients
          </Button>
          <Button
            variant={activePage === "prescriptions" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage("prescriptions")}
          >
            <FileText className="mr-2" /> Prescriptions
          </Button>
          <Button
            variant={activePage === "profile" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage("profile")}
          >
            <User className="mr-2" /> Profile
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
            <span className="font-medium">Doctor</span>
            <Button onClick={handleLogout}>
              <LogOut className="mr-1" /> Logout
            </Button>
          </div>
        </header>

        {activePage === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className={cardClass}>
              <CardHeader>
                <CardTitle>Today’s Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">3 scheduled</p>
              </CardContent>
            </Card>
            <Card className={cardClass}>
              <CardHeader>
                <CardTitle>Assigned Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">12 active</p>
              </CardContent>
            </Card>
            <Card className={cardClass}>
              <CardHeader>
                <CardTitle>Prescriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">5 pending</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activePage === "appointments" && (
          <Card className={cardClass}>
            <CardHeader>
              <CardTitle>Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="p-2 border rounded">10:00 AM - A</li>
                <li className="p-2 border rounded">11:30 AM - B</li>
                <li className="p-2 border rounded">2:00 PM - C</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {activePage === "patients" && (
          <Card className={cardClass}>
            <CardHeader>
              <CardTitle>Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <p>List of assigned patients will appear here.</p>
            </CardContent>
          </Card>
        )}

        {activePage === "prescriptions" && (
          <Card className={cardClass}>
            <CardHeader>
              <CardTitle>Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage and view prescriptions here.</p>
              <Button className="mt-3">Write New Prescription</Button>
            </CardContent>
          </Card>
        )}

        {activePage === "profile" && (
          <Card className={cardClass}>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p>content</p>
              <Button className="mt-3">Edit Profile</Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
