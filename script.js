console.log("javascript fonctionne  !");

const btnmessage = document.getElementById("btnmessage");
const message = document.getElementById("message");



btnmessage.addEventListener("click", function (){
    message.textcontent = " bravo, tu as clique sur le button !";
});