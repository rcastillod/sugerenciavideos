import Multimedia from './Multimedia.js'

const getData = (()=>{
    function insertVideo(url, id) {
        let iframeVideo = document.getElementById(id)
        iframeVideo.setAttribute('src', url)
    }
    return {
        publicInsertVideo: (url, id) => {
            insertVideo(url, id)
        }
    }
})()

export default class Reproductor extends Multimedia {

    constructor(url, id) {
        super(url)
        this._id = () => id
    }

    get id() {
        return this._id()
    }

    setInicio(time) {
        let tiempo = `?start=${time}`
        let newUrl = this.url+tiempo
        getData.publicInsertVideo(newUrl, this.id)
    }
    
    playMultimedia() {
        getData.publicInsertVideo(this.url, this.id)
    }

}