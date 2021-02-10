// Implantation de la sélection du Mode Sombre ou Mode Clair dans le menu

let LinkMode = document.querySelector('.LinkMode')
let LogoMode = document.querySelector('.LogoMode')
let BurgerMenu = document.querySelector('.MenuHover')
let LogoTwitter = document.querySelector('.LogoTwitter')
let LogoInstagram = document.querySelector('.LogoInstagram')
let LogoFacebook = document.querySelector('.LogoFacebook')

document.querySelector('.ModeSombre').addEventListener('click', () => {
    LinkMode.href = `mainSombre.css`
    LogoMode.src = `images/DarkThemeLogo.png`
    BurgerMenu.src = `images/DarkThemeMenu.png`
    LogoTwitter.src = `images/DarkTwitter.svg`
    LogoInstagram.src = `images/DarkInstagram.svg`
    LogoFacebook.src = `images/DarkFacebook.svg`
})

document.querySelector('.ModeClair').addEventListener('click', () => {
    LinkMode.href = `mainClair.css`
    LogoMode.src = "images/LightThemeLogo.png"
    BurgerMenu.src = `images/LightThemeMenu.png`
    LogoTwitter.src = `images/LightTwitter.svg`
    LogoInstagram.src = `images/LightInstagram.svg`
    LogoFacebook.src = `images/LightFacebook.svg`
})