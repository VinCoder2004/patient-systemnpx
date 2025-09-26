

"use client";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Admin {
    hide: boolean
}

const AdminModal = ({hide} : Admin) => {
    const [otp, setOtp] = useState("");
    const placeholder = "11111" //example 
     const router = useRouter();
    const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault();
        if(otp.length != 5) return;
        if(otp === placeholder){
            alert("Access Granted");
            setOtp("");
             router.push("/admin");  //test
        }
        else{
            alert("Access Denied");
            setOtp("");
        }
    }

  return (
    <div className="absolute top-[50%] left-[50%] translate-[-50%]">
      <div
        className={`${
          hide ? "flex" : "hidden"
        } bg-gradient-to-br flex flex-col items-center from-blue-700 to-blue-600 p-7 rounded-md`}
      >
        <span className="text-xl mb-2">Enter Admin Key</span>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <InputOTP
            value={otp}
            onChange={(value: string) => setOtp(value)}
            maxLength={5}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0}></InputOTPSlot>
              <InputOTPSlot index={1}></InputOTPSlot>
              <InputOTPSlot index={2}></InputOTPSlot>
              <InputOTPSlot index={3}></InputOTPSlot>
              <InputOTPSlot index={4}></InputOTPSlot>
            </InputOTPGroup>
          </InputOTP>
          <Button variant={"destructive"} className="w-full mt-4">
            Authenticate
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminModal;
