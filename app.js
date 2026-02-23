import { auth } from "./firebase.js";
import {
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
sendPasswordResetEmail,
sendEmailVerification,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* Message */
function showMessage(text,type){
messageBox.textContent=text;
messageBox.className="message "+type;
messageBox.classList.remove("hidden");
}

/* Tabs */
tabLogin.onclick=()=>{
tabLogin.classList.add("active");
tabSignup.classList.remove("active");
loginForm.classList.add("active");
signupForm.classList.remove("active");
};

tabSignup.onclick=()=>{
tabSignup.classList.add("active");
tabLogin.classList.remove("active");
signupForm.classList.add("active");
loginForm.classList.remove("active");
};

/* Signup */
signupBtn.onclick=()=>{
createUserWithEmailAndPassword(auth,signupEmail.value,signupPassword.value)
.then((userCred)=>{
sendEmailVerification(userCred.user);
showMessage("Account created. Verification email sent.","success");
})
.catch(e=>showMessage(e.message,"error"));
};

/* Login */
loginBtn.onclick=()=>{
signInWithEmailAndPassword(auth,loginEmail.value,loginPassword.value)
.then((userCred)=>{
if(!userCred.user.emailVerified){
showMessage("Verify your email first.","error");
signOut(auth);
}
})
.catch(e=>showMessage(e.message,"error"));
};

/* Forgot */
forgotBtn.onclick=()=>{
if(!loginEmail.value){
showMessage("Enter email first.","error");
return;
}
sendPasswordResetEmail(auth,loginEmail.value)
.then(()=>showMessage("Password reset email sent.","success"))
.catch(e=>showMessage(e.message,"error"));
};

/* Auth state */
onAuthStateChanged(auth,user=>{
if(user){
authScreen.classList.add("hidden");
app.classList.remove("hidden");
initChart();
}else{
authScreen.classList.remove("hidden");
app.classList.add("hidden");
}
});

/* Logout */
logoutBtn.onclick=()=>signOut(auth);

/* Nav */
document.querySelectorAll(".nav").forEach(btn=>{
btn.onclick=()=>{
document.querySelectorAll(".nav").forEach(n=>n.classList.remove("active"));
btn.classList.add("active");

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(btn.dataset.page).classList.add("active");
};
});

/* Chart */
function initChart(){
new Chart(document.getElementById("chart"),{
type:"line",
data:{
labels:["Jan","Feb","Mar","Apr"],
datasets:[{
label:"Users",
data:[12,19,3,5]
}]
}
});
}
