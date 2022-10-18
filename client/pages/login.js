import view from '../UTILS/view.js';
import RegisterText from '../components/Register-Text.js';
import displayError from '../UTILS/notification.js';
import Form from '../components/Form.js';
import Loader from '../UTILS/loader.js';

const loginBtn =document.querySelector('.login__btn');
const registerBtn =document.querySelector('.register__btn');
const profileContainer =document.querySelector('.profile__container');

let profile = null;

export let isLogin = false;
let loading = false;

export async function Login (path){
    const r = view.innerHTML =
     `
    <div class="container">
    <div class="main__content flex">
        <div class="register__left__side flex center">
            <div class="register__left__side__title">
                <h2>Welcome to Sneek/Gaming</h2>
            </div>
            ${ loading? Loader() : Form(true)}
            <div class="error__container"></div>
        </div>
        ${ RegisterText("Don't have an acount yet", "Sign up here", '#/register') }
    </div>
    `
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const errorNotification = document.querySelector('.error__container');

    document.querySelector('.login__form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const userInputs = {
            email: emailInput.value,
            password: passwordInput.value
        }
    
        try {
            await axios.post('http://127.0.0.1:8000/api/v1/auth/login', userInputs)
            .then((res)=> {
                login(res)
            })
            .catch((err) => {
               displayError(err, errorNotification);
            });
        } catch (error) {
            console.log(error)
        }
    })
    return r
};

function login(res){
    sessionStorage.setItem('token', res.data.token)
    sessionStorage.setItem('user', res.data.user.name)
    loading = true
    setTimeout(() => {
        if(loginBtn.innerHTML === 'Log In'){
            loginBtn.innerHTML = 'Log Out'
            loginBtn.href = '#/'
            loginBtn.addEventListener('click', logout)
        }

        isLogin = true;
        loading = false

        window.location.replace('#/');
        registerBtn.style.display = 'none';

        profile = document.createElement('div');
        profile.classList = 'nav__profile'
        profile.innerHTML = `
            <img scr="" alt=""/>
            <p>${res.data.user.name}</p>
        `
        profileContainer.appendChild(profile);
    },1000)  
};

function logout(e){
    const element = e.target
    element.innerHTML = "Log In";

    isLogin = false;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');

    profile.innerHTML = '';
    registerBtn.style.display = 'block';
    
    setTimeout(()=> {
        element.href = "#/login"
    },2000)
};

function stayLogin(){
    const token = sessionStorage.getItem('token')
    const user = sessionStorage.getItem('user')

    if(user && token){
        setTimeout(() => {
            if(loginBtn.innerHTML === 'Log In'){
                loginBtn.innerHTML = 'Log Out'
                loginBtn.href = '#/'
                loginBtn.addEventListener('click', logout)
            }
    
            isLogin = true;
    
            window.location.replace('#/');
            registerBtn.style.display = 'none';
    
            profile = document.createElement('div');
            profile.classList = 'nav__profile'
            profile.innerHTML = `
                <img scr="" alt=""/>
                <p>${user}</p>
            `
            profileContainer.appendChild(profile);
        },100) 
    }
}

stayLogin()


