"use client";
 
 import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, LogOut, Settings, Users, BarChart, Package } from "lucide-react";
export default function AdminPage() {
    //for side bar//
    const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100
    ">
      <aside className={`bg-white shadow-lg p-4 w-64 transition-all ${sidebarOpen ? "block" : "hidden"} `}>
        <h2 className="text-2xl font-bold mb-6">Clinic Admin</h2>
        <nav className="space-y-3">
          <Button variant="ghost" className="w-full justify-start"><Users className="mr-2"/> User Management</Button>
           <Button variant="ghost" className="w-full justify-start"><BarChart className="mr-2"/> Reports</Button>
             <Button variant="ghost" className="w-full justify-start"><Package className="mr-2"/> Inventory Control</Button>
               <Button variant="ghost" className="w-full justify-start"><Settings className="mr-2"/> System Settings</Button>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <Button variant="outline" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu />
          </Button>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Admin</span>
            <Button><LogOut className="mr-1"/> Logout</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader><CardTitle>Doctors</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-bold">1</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Staff</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-bold">1</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Patients</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-bold">1</p></CardContent>
          </Card>
        </div>
 
        <section className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <p>- Generated patient report (Sept 25, 2025)</p>
            <p>- Added new staff account (Sept 24, 2025)</p>
            <p>- Updated clinic settings (Sept 23, 2025)</p>
          </div>
    </section>
      </main>
    </div>
  );
}