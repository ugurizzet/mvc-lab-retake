const cars = [
    {
        id: 1,
        make: "ALFA ROMEO",
        model: "Giulia",
        year: 2022,
        color: "Red"
    },

    {
        id: 2,
        make: "Ford",
        model: "Fiesta",
        year: 2010,
        color: "Blue"
    },
    {
        id: 3,
        make: "Honda",
        model: "Civic",
        year: 2015,
        color: "Red"
    },
    {
        id: 4,
        make: "BMW",
        model: "X5",
        year: 2018,
        color: "Silver"
    },
    {
        id: 5,
        make: "Audi",
        model: "A4",
        year: 2019,
        color: "Black"
    },
    {
        id: 6,
        make: "Acura",
        model: "MDX Type S",
        year: 2024,
        color: "Silver"
    },
    {
        id: 7,
        make: "ASTON MARTIN",
        model: "V8 Vantage",
        year: 2024,
        color: "Black"
    },
    {
        id: 8,
        make: "ALFA ROMEO",
        model: "4C Spider",
        year: 2015,
        color: "Yellow"
    },
    {
        id: 9,
        make: "Toyota",
        model: "Yaris",
        year: 2001,
        color: "White"
    },

];

function getCars() {
    return cars;
}

function getCarInformation(id) {
    const car = cars.find(car => car.id === id);
    if (car) {
        return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
    } else {
        return "Car doesn't exist";
    }
}

function getCarAge(id) {
    const car = cars.find(car => car.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old.`;
    } else {
        return "Car doesn't exist";
    }
}

module.exports = {
    getCars,
    getCarInformation,
    getCarAge
};