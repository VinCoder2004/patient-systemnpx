"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // redirect
import doctor from "../images/doctor.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2Icon } from "lucide-react";

const Form = () => {
  const router = useRouter(); // router somethign dont understand
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  // pang testing if ga sulod ang mga values
  console.log(gender);
  console.log(role);
  return (
    <div className="min-h-screen min-w-screen flex justify-between text-white">
      <div className="flex-1/2 flex justify-center items-center h-full mt-50 w-full">
        <Card className="h-auto w-auto p-5 flex flex-col items-center">
          <CardTitle>Clinic System</CardTitle>
          <CardDescription className="relative top-[-20px]">
            Make healthy living a habit.
          </CardDescription>
          <CardContent>
            <form className="flex flex-col items-center gap-2">
              <span className="text-gray-700 font-[500] uppercase leading-relaxed rounded-sm w-full bg-gray-300 text-center">
                Personal Information
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Input type="text" placeholder="First name" />
                <Input type="text" placeholder="Last name" />
                <Select onValueChange={(value) => setGender(value)} defaultValue ={gender}>
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder="Gender"
                    ></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Gender</SelectLabel>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input type="number" placeholder="Age" />
                <Select onValueChange={(value) => setRole(value)} value={role}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Role"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a role</SelectLabel>
                      <SelectItem value="patient">Patient</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input type="text" placeholder="Address" />
              </div>

              <span className="text-gray-700 font-[500] uppercase leading-relaxed rounded-sm w-full bg-gray-300 text-center">
                Contact Information
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Input type="number" placeholder="Phone Number" />
                <Input type="email" placeholder="Email" required />
              </div>

              <span className="text-gray-700 font-[500] uppercase leading-relaxed rounded-sm w-full bg-gray-300 text-center">
                Account Information
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" required />
              </div>

              {loading ? (
                <Button disabled={loading ? true : false}>
                  <Loader2Icon className="spin"/>{" "}
                  Loading
                </Button>
              ) : (
                <Button
                  variant={"default"}
                  onClick={() => setLoading(true)}
                  className="w-full"
                >
                 Register
                </Button>
              )}

              {/* login shts */}
              <p className="mt-2 text-md text-gray-700 text-center">
                Already have an account?{" "}
                <button
                  type="button"
                  className="underline text-violet-700 cursor-pointer hover:text-violet-400"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
              </p>

            </form>
          </CardContent>
        </Card>
      </div>
      <div>
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
};

export default Form;
