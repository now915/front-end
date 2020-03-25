module.exports = function () {
    const obj = {
        name: 'gxx',
        age: 24
    }
    obj.sayName = function () {
        console.log(this.name)
    }
}