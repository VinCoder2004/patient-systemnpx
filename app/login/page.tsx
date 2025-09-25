"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import doctor from "../images/login.svg";
import { useState } from "react";
import { Loader2Icon, UserLock } from "lucide-react";
import AdminModal from "../components/AdminModal";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  let [hide, setHide] = useState(false);
  return (
    <div className="min-h-screen min-w-screen flex justify-between text-white">
       <AdminModal hide={hide}/>
      <div className="flex-1/2 flex justify-center items-center h-full mt-50 w-full">
        <Card className="w-[370px] shadow-md">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="gap-1 flex flex-col">
              <Label>Email/Username</Label>
              <Input
                type={user?.includes("gmail.com") ? "email" : "text"}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter your email or username"
                required
              />
            </div>
            <div className="gap-1 flex flex-col">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            {loading ? (
              <Button disabled={loading ? true : false} className="w-full mt-2">
                <span>
                  <Loader2Icon className="spin" />
                </span>{" "}
                Logging in
              </Button>
            ) : (
              <Button
                onClick={() => setLoading(true)}
                className="w-full mt-2 cursor-pointer"
              >
                Login
              </Button>
            )}
            <div className="w-full flex justify-end">
              <Button onClick={() => setHide(hide = !hide)} variant={'outline'}><UserLock/> Admin</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={doctor}
          alt="Doctor"
          width={1000}
          height={1000}
          className="object-cover pointer-events-none max-w-screen"
        />
      </div>
    </div>
  );
}
