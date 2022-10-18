


export default function RegisterText (first, second, url){
    return `
    <div class="register__rigth__side flex center">
        <div class="register__rigth__side__background flex center">
            <div class="register__rigth__side__text flex ">
                <h2>
                    <p class="logo__first__half">Sneek/</p>
                    <p class="logo__second__half">Gaming</p>
                </h2>
                <div class="register__rigth__side__text__content">
                    <p>Lorem, ipsum.</p>
                    <h3>Lorem ipsum dolor Perspiciatis, repellat.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, laboriosam.</p>
                </div>
                <div class="">
                    <p>${first}</p>
                    <a href=${url}>${second}</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    `
};