"use client";
import Image from "next/image"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import doctor from "../images/login.svg";

export default function LoginPage() {
  return (
    <div className="min-h-screen min-w-screen flex justify-between text-white">
       <div className="flex-1/2 flex justify-center items-center h-full mt-50 w-full">
      <Card className="w-[350px] shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" />
          </div>
          <Button className="w-full mt-2">Login</Button>
        </CardContent>
      </Card>
    </div>
     <div className="flex-1 flex justify-center items-center  -translate-x-20 -translate-y-30">
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
