class Svg{
    constructor(){
        this.text = "";
        this.textColor = "";
        this.shape = "";
    }
setText(textContent, textColor){
    this.text = `<text x="0" y="15" fill="${textColor}">${textContent}!</text>`
}
setShape(chosenShape){
this.shape = chosenShape.render();
}   
setLogo(){
    return `<svg height="300" width="300">${this.shape}${this.text}</svg>`
}
}

module.exports = Svg;