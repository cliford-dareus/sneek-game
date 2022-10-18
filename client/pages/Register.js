import view from "../UTILS/view.js"
import RegisterText from "../components/Register-Text.js";
import displayError from "../UTILS/notification.js";
import Form from "../components/Form.js";

export default async function (path){
    console.log(path)
    view.innerHTML = `
        <div class="container">
        <div class="main__content flex">
            <div class="register__left__side flex center">
                <div class="register__left__side__title">
                    <h2>Welcome to Sneek/Gaming</h2>
                    <p>Create your account</p>
                </div>
                ${Form(false)}
                <div class="error__container"></div>
            </div>
           ${RegisterText("Already have an account!", "sign In here", '#/login')}
        </div>
    </div>
    `

    const registerForm = document.querySelector('.register__form');
    const userNameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const errorNotification = document.querySelector('.error__container');

    registerForm.addEventListener('submit',async (e) => {
        e.preventDefault();

        const userInputs = {
            name : userNameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        try {
            await axios.post('http://127.0.0.1:8000/api/v1/auth/register', userInputs)
                .then((res) => {
                    console.log(res)
                    
                    const token = res.data.token
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('user',res.data.user.name)
                    
                    window.location.replace("#/");
                })
                .catch((err) => {
                    displayError(err, errorNotification);
                })
        } catch (error) {
            console.log(error)
        }
    });

}

