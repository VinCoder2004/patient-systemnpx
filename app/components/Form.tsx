"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // redirect
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
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
import toast, { Toaster } from "react-hot-toast";
import { register } from "../hooks/action";

const Form = () => {
  const router = useRouter(); // router somethign dont understand
  const [loading, setLoading] = useState(false);

  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = await register(
      firstName,
      lastName,
      gender,
      age,
      address,
      phoneNumber,
      email,
      username,
      password
    );
    if (data.success) {
      setLoading(false);
      console.log(data);
    } else {
      setLoading(false);
      console.log(data);
    }
  };

  return (
   <div className="min-h-screen min-w-screen flex bg-white text-gray-900 relative overflow-hidden">
{/* 
      <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-fuchsia-400/30 rounded-full blur-3xl bottom-10 right-10"></div> */}

      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>

      <div className="flex-1/2 flex justify-center items-center w-full p-5">
        <Card
          id="formHero"
          className="h-auto w-full max-w-2xl p-8 flex flex-col items-center bg-white/20 backdrop-blur-lg border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-2xl"
        >
          <CardTitle className="text-3xl font-bold text-black mb-2 drop-shadow-md">
            Clinic System
          </CardTitle>
          <CardDescription
            id="alreadyP"
            className="relative top-[-10px] text-black"
          >
            Make healthy living a habit.
          </CardDescription>
          <CardContent className="w-full mt-4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-gray-900 bg-white/80 px-2 py-1 font-semibold uppercase rounded-md w-full text-center shadow-sm">
                Personal Information
              </span>
              <div className="grid grid-cols-2 gap-3 w-full">
                <Input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e: any) => setName(e.target.value)}
                  className="bg-white/90 text-gray-900 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e: any) => setLastname(e.target.value)}
                  className="bg-white/90 text-gray-900 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                />
                <Select
                  onValueChange={(value) => setGender(value)}
                  defaultValue={gender}
                >
                  <SelectTrigger className="w-full bg-white/90 text-gray-900 border border-gray-200">
                    <SelectValue id="selectValue" placeholder="Gender"></SelectValue>
                  </SelectTrigger>
                  <SelectContent className="z-9999">
                    <SelectGroup>
                      <SelectLabel>Select a Gender</SelectLabel>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e: any) => setAge(e.target.value)}
                  className="bg-white/90 text-gray-900 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                />
                <Select onValueChange={(value) => setRole(value)} value={role}>
                  <SelectTrigger className="w-full bg-white/90 text-gray-900 border border-gray-200">
                    <SelectValue id="selectValue" placeholder="Role"></SelectValue>
                  </SelectTrigger>
                  <SelectContent className="z-9999">
                    <SelectGroup>
                      <SelectLabel>Select a role</SelectLabel>
                      <SelectItem value="patient">Patient</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e: any) => setAddress(e.target.value)}
                  className="bg-white/90 text-gray-900 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <span className="text-gray-900 bg-white/80 px-2 py-1 font-semibold uppercase rounded-md w-full text-center shadow-sm">
                Contact Information
              </span>
              <div className="grid grid-cols-2 gap-3 w-full">
                <PhoneInput
                  hideDropdown={true}
                  forceDialCode={true}
                  inputClassName="phoneInput"
                  className="phoneWrapper bg-white/90 text-gray-900 border border-gray-200"
                  defaultCountry="ph"
                  value={phoneNumber}
                  onChange={(value) => {
                    if (value[3] === "0") {
                      setPhoneNumber("");
                      toast.error("Number shouldn't start with zero", {
                        style: { zIndex: "99999" },
                      });
                    } else {
                      setPhoneNumber(value);
                    }
                  }}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  className="bg-white/90 text-gray-900 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <span className="text-gray-900 bg-white/80 px-2 py-1 font-semibold uppercase rounded-md w-full text-center shadow-sm">
                Account Information
              </span>
              <div className="grid grid-cols-2 gap-3 w-full">
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e: any) => setUsername(e.target.value)}
                  className="bg-white/90 text-gray-900 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  className="bg-white/90 text-gray-900 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              {loading ? (
                <Button
                  disabled={loading ? true : false}
                  className="w-full bg-gray-400"
                >
                  <Loader2Icon className="spin" /> Loading
                </Button>
              ) : (
                <Button
                  variant={"default"}
                  className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30 transition-all"
                >
                  Register
                </Button>
              )}

              <p
                id="alreadyP"
                className="mt-3 text-md text-black text-center"
              >
                Already have an account?{" "}
                <button
                  type="button"
                  className="underline text-black font-semibold hover:text-pink-200 transition"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Form;
