class Shape{
    constructor(){
        this.color =  "";   
    }
    setColor(shapeColor){
        this.color = shapeColor
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="100" cy="150" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="28" y="75" width="130" height="150" fill="${this.color}"/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="95,65 20,200 176,200" fill="${this.color}"/>`
    }
}

module.exports={
    Circle, Square, Triangle
}