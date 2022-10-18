



export default function Form(isLogin){

    return `${isLogin? 
    `<form action="" class="login__form flex">
        <label for="email">Username</label>
        <input type="text" id="email" name="email">
        <label for="password">Set Password</label>
        <input type="text" id="password" name="password">
        <button type="submit" class="btn register__form__btn">sign in</button>
    </form>`: 
    `<form action="" class="register__form flex">
        <label for="username">Username</label>
        <input type="text" id="username">
        <label for="email">Email address</label>
        <input type="email" id="email">
        <label for="password">Set Password</label>
        <input type="password" id="password" name="password">
        <button type="submit" class="btn register__form__btn">Sign up</button>
    </form>`
    }

`
}