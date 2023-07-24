class Svg{
    constructor(){
        this.text = "";
        this.textColor = "";
        this.shape = "";
    }
setText(textContent, textColor){
    this.text = `<text x="65" y="160" font-size="2em" fill="${textColor}">${textContent}</text>`
}
setShape(chosenShape){
this.shape = chosenShape.render();
}   
setLogo(){
    return `<svg height="300" width="200">${this.shape}${this.text}</svg>`
}
}

module.exports = Svg;