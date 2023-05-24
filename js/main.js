const textarea = document.getElementById("message")
const resultCont = document.getElementById("resultCont")
const encrypt_keys = {
    e:"enter",
    i:"imes",
    a:"ai",
    o:"ober",
    u:"ufat",

}
    
function copyToClipboard() {
    
    const value = resultCont.textContent
    console.log(resultCont.textContent);
    navigator.clipboard.writeText(value).then(()=> {
        console.log("Copiado!");
    })
}
function showMsgEncrypted() {
    
    const notFoundCont = document.getElementById("notFoundCont")
    const copyBtn = document.getElementById("copyBtn")
   const finalMsg = encryptMessage(textarea.value)

   notFoundCont.classList.add("inactive")
    copyBtn.classList.remove("inactive")
   resultCont.textContent = finalMsg
  

   

}
function showMsgDecrypted() {
    const resultCont = document.getElementById("resultCont")
    const notFoundCont = document.getElementById("notFoundCont")
    const copyBtn = document.getElementById("copyBtn")
    const finalMsg = decryptMessage(textarea.value)

   notFoundCont.classList.add("inactive")
    copyBtn.classList.remove("inactive")
   resultCont.textContent = finalMsg
  

   

}

function decryptMessage(msg) {
    
    const keys= Object.keys(encrypt_keys)
    const values = Object.values(encrypt_keys)
    
    let message = msg.toLowerCase()
    
    

      for(let i = 0; i< keys.length; i++) {
        if(message.includes(values[i])) {
            message = message.replaceAll(values[i], keys[i])
            
            
            
        }
         
         
      }

return message
}

function encryptMessage(msg) {
    
    const keys= Object.keys(encrypt_keys)
    const values = Object.values(encrypt_keys)
    
    let message = msg.toLowerCase()
    
    

      for(let i = 0; i< keys.length; i++) {
        if(message.includes(keys[i])) {
            message = message.replaceAll(keys[i], values[i])
            
            
            
        }
         
         
      }

return message
}
