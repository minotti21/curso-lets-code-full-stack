
class Perfil {
    constructor(nome) {
        this.nome = nome
    }

    set defineTema(tema) {

        switch (tema) {
            case 'light':
                this.tema = 'light'
                console.log('Tema light definido.')
                break;

            case 'dark':
                this.tema = 'dark'
                console.log('Tema dark definido.')
                break;
        
            default:
                console.log('O tema pode ser apenas dark ou light.')
                break;
        }
    }

    set defineAvatar(avatar) {

        if (avatar.slice(0,4) === 'http') {
            this.avatar = avatar
            console.log('Avatar definido.')
        } else if (avatar.slice(0,5) === 'https') {
            this.avatar = avatar
            console.log('Avatar definido.')
        } else {
            console.log('A url deve ser iniciada com http ou https.')
        }
    }
}

const perfilFacebook = new Perfil('Vinicius Minotti')

console.log(perfilFacebook)

perfilFacebook.defineAvatar = 'https/avatar'

console.log(perfilFacebook)

perfilFacebook.defineTema = 'dark'

console.log(perfilFacebook)
