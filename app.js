import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* Login */
document.getElementById("loginBtn").onclick = ()=>{
const email=email.value;
const password=password.value;

signInWithEmailAndPassword(auth,email,password)
.catch(err=>alert(err.message));
};

/* Auth State */
onAuthStateChanged(auth,(user)=>{
if(user){
loginSection.classList.add("hidden");
dashboard.classList.remove("hidden");
initChart();
}else{
loginSection.classList.remove("hidden");
dashboard.classList.add("hidden");
}
});

/* Logout */
logoutBtn.onclick=()=>signOut(auth);

/* Sidebar Toggle */
toggleSidebar.onclick=()=>{
sidebar.classList.toggle("collapsed");
};

/* SPA Navigation */
document.querySelectorAll(".navBtn").forEach(btn=>{
btn.onclick=()=>{
document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
document.getElementById(btn.dataset.page).classList.remove("hidden");
};
});

/* Chart */
function initChart(){
new Chart(document.getElementById("myChart"),{
type:"bar",
data:{
labels:["Jan","Feb","Mar","Apr"],
datasets:[{
label:"Users",
data:[12,19,3,5]
}]
}
});
}

/* Particles */
tsParticles.load("particles",{
particles:{number:{value:80},size:{value:3}}
});
