const {Triangle, Circle, Square} = require("./shapes")

test("should render blue triangle", ()=>{
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="95,65 20,200 176,200" fill="blue"/>');
});

test("should render blue square", ()=>{
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="28" y="75" width="130" height="150" fill="blue"/>');
});

test("should render blue circle", ()=>{
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="100" cy="150" r="80" fill="blue"/>');
})
