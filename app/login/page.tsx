"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import doctor from "../images/doctor_new.svg";
import { useState } from "react";
import { Loader2Icon, UserLock } from "lucide-react";
import AdminModal from "../components/AdminModal";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  let [hide, setHide] = useState(false);

  return (
    <div className="min-h-screen flex bg-white text-gray-900 overflow-hidden">
      <AdminModal hide={hide} />

     
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent z-10" />
        <Image
          src={doctor}
          alt="Doctor illustration"
          className="w-[650px] h-auto drop-shadow-2xl z-20"
          priority
        />
        <div className="absolute bottom-10 text-center z-30">
          <h2 className="text-2xl font-bold text-gray-700">
            Your Health, Our Priority
          </h2>
          <p className="text-gray-500">Login to continue your journey</p>
        </div>
      </div>

     
      <div className="flex w-full lg:w-1/2 justify-center items-center px-8 lg:px-16 bg-white">
        <Card className="w-full max-w-[480px] shadow-2xl border-0 rounded-3xl p-6 lg:p-8 bg-white/80 backdrop-blur-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-center text-4xl font-bold text-gray-900">
              Welcome Back 👋
            </CardTitle>
            <p className="text-center text-gray-500 mt-2">
              Sign in to access your dashboard
            </p>
          </CardHeader>

          <CardContent className="space-y-5 mt-5">
            <div className="gap-1 flex flex-col">
              <Label>Email / Username</Label>
              <Input
                type={user?.includes("gmail.com") ? "email" : "text"}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter your email or username"
                required
                className="bg-gray-50 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition rounded-xl h-12 px-4"
              />
            </div>

            <div className="gap-1 flex flex-col">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="bg-gray-50 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition rounded-xl h-12 px-4"
              />
            </div>

            {loading ? (
              <Button
                disabled
                className="w-full mt-3 bg-gray-400 h-12 rounded-xl text-lg flex items-center justify-center gap-2"
              >
                <Loader2Icon className="animate-spin" /> Logging in...
              </Button>
            ) : (
              <Button
                onClick={() => setLoading(true)}
                className="w-full mt-3 h-12 rounded-xl text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30 transition-all"
              >
                Login
              </Button>
            )}

            <div className="flex justify-end mt-2">
              <Button
                onClick={() => setHide((hide = !hide))}
                variant="outline"
                className="border-gray-300 hover:bg-gray-100 flex items-center gap-1 rounded-lg"
              >
                <UserLock size={16} /> Admin
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
