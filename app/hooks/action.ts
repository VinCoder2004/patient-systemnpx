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