"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, User, LogOut, ArrowLeft } from "lucide-react";
import doctor from "../images/patient.svg";
import doctor2 from "../images/doctor2.svg";

export default function PatientPage() {
  const [activePage, setActivePage] = useState("home");
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-white text-gray-900 overflow-hidden">
      
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 overflow-hidden flex items-center justify-center">
        <Image
          src={doctor}
          alt="Doctor illustration"
          className="w-[480px] h-auto opacity-90 drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-bl from-pink-100 via-indigo-100 to-blue-100 overflow-hidden flex items-center justify-center">
        <Image
          src={doctor2}
          alt="Doctor illustration"
          className="w-[480px] h-auto opacity-90 drop-shadow-2xl"
          priority
        />
      </div>

  
      <header className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          🏣 Clinic
        </h1>
        <div className="flex items-center gap-4">
          <span className="font-medium text-gray-600">Patient</span>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-gray-300 hover:bg-gray-100 flex items-center gap-2 text-gray-700 rounded-xl"
          >
            <LogOut className="text-red-500" /> Logout
          </Button>
        </div>
      </header>

      {activePage === "home" && (
        <section className="text-center py-16 px-6 relative z-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Welcome to Your Health Portal
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Book appointments, access records, and manage your profile with
            ease.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg rounded-xl shadow-md shadow-purple-500/30 transition-all"
            onClick={() => setActivePage("appointments")}
          >
            Book an Appointment
          </Button>
        </section>
      )}

      {activePage === "home" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-12 z-10">
          <Card
            className="hover:shadow-xl transition bg-white/80 border border-gray-200 rounded-2xl backdrop-blur-md cursor-pointer"
            onClick={() => setActivePage("appointments")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-600">
                <Calendar /> Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Schedule and view upcoming visits.
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-xl transition bg-white/80 border border-gray-200 rounded-2xl backdrop-blur-md cursor-pointer"
            onClick={() => setActivePage("records")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <FileText /> Medical Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access your health history anytime.
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-xl transition bg-white/80 border border-gray-200 rounded-2xl backdrop-blur-md cursor-pointer"
            onClick={() => setActivePage("profile")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-600">
                <User /> Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Update your personal details.</p>
            </CardContent>
          </Card>
        </div>
      )}

      {activePage === "appointments" && (
        <div className="px-6 pb-12 z-10">
          <Button
            variant="ghost"
            className="mb-4 flex items-center gap-2 text-gray-600 hover:text-indigo-600"
            onClick={() => setActivePage("home")}
          >
            <ArrowLeft /> Back
          </Button>
          <Card className="bg-white/80 border border-gray-200 rounded-2xl backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-gray-800">Your Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">No appointments booked yet.</p>
              <Button className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl">
                Book Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {activePage === "records" && (
        <div className="px-6 pb-12 z-10">
          <Button
            variant="ghost"
            className="mb-4 flex items-center gap-2 text-gray-600 hover:text-purple-600"
            onClick={() => setActivePage("home")}
          >
            <ArrowLeft /> Back
          </Button>
          <Card className="bg-white/80 border border-gray-200 rounded-2xl backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-gray-800">Medical Records</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">You have no records yet.</p>
            </CardContent>
          </Card>
        </div>
      )}

      {activePage === "profile" && (
        <div className="px-6 pb-12 z-10">
          <Button
            variant="ghost"
            className="mb-4 flex items-center gap-2 text-gray-600 hover:text-pink-600"
            onClick={() => setActivePage("home")}
          >
            <ArrowLeft /> Back
          </Button>
          <Card className="bg-white/80 border border-gray-200 rounded-2xl backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-gray-800">Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Profile content</p>
              <Button className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
