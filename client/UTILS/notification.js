



export default function displayError (err, errorNotification){
    console.log(err)
    const element = document.createElement('div');
    element.classList = 'notification';
    element.innerHTML = `
        <p>${err.response.data.msg}</p>
    `

    errorNotification.appendChild(element)
    setTimeout(() => {
        element.innerHTML = '';
    },2000)
}