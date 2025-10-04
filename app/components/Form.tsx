"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // redirect
import doctor from "../images/doctor.svg";
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

  const handleSubmit = async(e:any)=>{
    e.preventDefault();
    setLoading(true);
    const data = await register(firstName, lastName, gender, age, address, phoneNumber, email, username, password);
    if(data.success){
      setLoading(false);
      console.log(data)
    }
    else{
      setLoading(false);
      console.log(data);
    }
  }

  return (
    <div className="min-h-screen min-w-screen flex justify-between text-white">
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <div className="flex-1/2 flex justify-center items-center h-full mt-50 w-full">
        <Card
          id="formHero"
          className="h-auto w-auto p-5 flex flex-col items-center"
        >
          <CardTitle>Clinic System</CardTitle>
          <CardDescription id="alreadyP" className="relative top-[-20px]">
            Make healthy living a habit.
          </CardDescription>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
              <span className="text-gray-700 font-[500] uppercase leading-relaxed rounded-sm w-full bg-gray-300 text-center">
                Personal Information
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Input type="text" placeholder="First name" value={firstName} onChange={(e:any) => setName(e.target.value)} />
                <Input type="text" placeholder="Last name" value={lastName} onChange={(e:any) => setLastname(e.target.value)}  />
                <Select
                  onValueChange={(value) => setGender(value)}
                  defaultValue={gender}
                >
                  <SelectTrigger className="w-full z-999">
                    <SelectValue
                      id="selectValue"
                      placeholder="Gender"
                    ></SelectValue>
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
                <Input type="number" placeholder="Age"  value={age} onChange={(e:any) => setAge(e.target.value)}  />
                <Select onValueChange={(value) => setRole(value)} value={role}>
                  <SelectTrigger className="w-full">
                    <SelectValue
                      id="selectValue"
                      placeholder="Role"
                    ></SelectValue>
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
                <Input type="text" placeholder="Address"  value={address} onChange={(e:any) => setAddress(e.target.value)}  />
              </div>

              <span className="text-gray-700 font-[500] uppercase leading-relaxed rounded-sm w-full bg-gray-300 text-center">
                Contact Information
              </span>
              <div className="grid grid-cols-2 gap-2">
                <PhoneInput
                  hideDropdown={true}
                  forceDialCode={true}
                  inputClassName="phoneInput"
                  className="phoneWrapper"
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
                <Input type="email" placeholder="Email" required  value={email} onChange={(e:any) => setEmail(e.target.value)} />
              </div>

              <span className="text-gray-700 font-[500] uppercase leading-relaxed rounded-sm w-full bg-gray-300 text-center">
                Account Information
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Input type="text" placeholder="Username"  value={username} onChange={(e:any) => setUsername(e.target.value)}  />
                <Input type="password" placeholder="Password" required  value={password} onChange={(e:any) => setPassword(e.target.value)}  />
              </div>

              {loading ? (
                <Button disabled={loading ? true : false}>
                  <Loader2Icon className="spin" /> Loading
                </Button>
              ) : (
                <Button
                  variant={"default"}
                  className="w-full"
                >
                  Register
                </Button>
              )}

              {/* login shts */}
              <p id="alreadyP" className="mt-2 text-md text-gray-700 text-center">
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
          id="heroPng"
          alt="Doctor"
          priority
          width={1000}
          height={1000}
          className="object-cover pointer-events-none max-w-screen"
        />
      </div>
    </div>
  );
};

export default Form;
