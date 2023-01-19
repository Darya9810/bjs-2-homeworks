
function parseCount(string) {
    let parsed = Number.parseInt(string);
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(base) {
    try {
        return parseCount(base);
    } catch (error) {
        return error;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a > b + c || b > a + c || c > a + b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        let perimetr = this.a + this.b + this.c ;
        return perimetr;
    }
    getArea() {
        let s = this.getPerimeter () / 2;
        let area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        };
    }
}