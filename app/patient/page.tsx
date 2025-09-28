"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar,FileText,User,LogOut,ArrowLeft } from "lucide-react";
import doctor from "../images/patient.svg"; 

export default function PatientPage() {
  const [activePage, setActivePage] = useState("home");
  const handleLogout = () => {
    window.location.href = "/";
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 ">
        <Image
          src={doctor}
          alt="Doctor background"
          fill
          className="object-cover opacity-40 scale-80"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-secondary/70 to-accent/80 -z-10"></div>
      <header className="flex items-center justify-between p-6 shadow bg-card/80 backdrop-blur">
        <h1 className="text-2xl font-bold text-primary-foreground">
          🏣 Clinic
        </h1>
        <div className="flex items-center gap-4">
          <span className="font-medium text-foreground">Patient</span>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 text-destructive" /> Logout
          </Button>
        </div>
      </header>

      
      {activePage === "home" && (
        <section className="text-center py-12 px-6">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Welcome to Your Health Portal
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Book appointments, access records, and manage your profile with ease.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-accent px-6 py-3 text-lg rounded-xl shadow"
            onClick={() => setActivePage("appointments")}
          >
            Book an Appointment
          </Button>
        </section>
      )}

      {activePage === "home" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-12">
          <Card
            className="hover:shadow-lg cursor-pointer transition bg-card/80 backdrop-blur"
            onClick={() => setActivePage("appointments")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Calendar /> Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">Schedule and view upcoming visits.</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg cursor-pointer transition bg-card/80 backdrop-blur"
            onClick={() => setActivePage("records")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <FileText /> Medical Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">Access your health history anytime.</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg cursor-pointer transition bg-card/80 backdrop-blur"
            onClick={() => setActivePage("profile")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <User /> Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">Update your personal details.</p>
            </CardContent>
          </Card>
        </div>
      )}

      {activePage === "appointments" && (
        <div className="px-6 pb-12">
          <Button
            variant="ghost"
            className="mb-4 flex items-center gap-2 text-white"
            onClick={() => setActivePage("home")}
          >
            <ArrowLeft /> Back
          </Button>
          <Card className="bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground">Your Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No appointments booked yet.</p>
              <Button className="mt-4 bg-primary  text-primary-foreground">
                Book Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      
      {activePage === "records" && (
        <div className="px-6 pb-12">
          <Button
            variant="ghost"
            className="mb-4 flex items-center gap-2 text-white"
            onClick={() => setActivePage("home")}
          >
            <ArrowLeft /> Back
          </Button>
          <Card className="bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground">Medical Records</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">You have no records yet.</p>
            </CardContent>
          </Card>
        </div>
      )}

     
      {activePage === "profile" && (
        <div className="px-6 pb-12">
          <Button
            variant="ghost"
             className="mb-4 flex items-center gap-2 text-white"
            onClick={() => setActivePage("home")}
          >
            <ArrowLeft /> Back
          </Button>
          <Card className="bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground">Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">profile content</p>
              <Button className="mt-4">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
