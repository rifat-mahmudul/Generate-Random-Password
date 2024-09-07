const password = () => {
    const passInput = document.getElementById('passInput').value;
    const passValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+_{}|<>?"

    let generatePass = "";
    
    for(i = 0; i < passInput; i++){
        const passIndex = Math.round(Math.random() * passValue.length);
        const randomChar = passValue[passIndex];

        generatePass += randomChar;

        const result = document.getElementById('result');
        result.innerHTML = `
        <h3>Your Password is ${generatePass}</h3>
        `
    }
}