import Swal from "sweetalert2";


export function Toast(icon: "success" | "error" | "info" | "warning", message:string){
    const toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        timer: 3000,
        timerProgressBar:true,
        showConfirmButton: false
    });
    toast.fire(icon, message);
}

export async function register(firstName:string, lastName:string, gender:string, age:string, address:string, phoneNumber:string, email:string, username:string, password:string){
    try {
        const res = await fetch("/api/auth/register",{
            method: "POST",
            headers: {"Content-Type":'application/json'},
            body: JSON.stringify({firstName, lastName, gender, age, address, phoneNumber, email, username, password})
        });
        const data = await res.json();
        return data;
    } catch (error:string | any) {
        return {success: false, message: error.message}
    }
}