export default class Multimedia {

    constructor(url) {
        this._url = () => url
    }

    get url() {
        return this._url()
    }

    setInicio() {
        const message = "Este método es para realizar un cambio en la URL del video"
        return message
    }

}