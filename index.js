const express = require("express");
const { 
    createNewCar,
    getCars,
    getOneCar,
    getSortedCars,
    getByYear,
    update,
    removeCar} = require("./controllers/cars");
require("./db/config");
const app = express();
app.use(express.json());

app.post("/cars", createNewCar);
app.get("/cars", getCars);
app.get("/cars/id/:id", getOneCar);
app.get("/cars/sorted", getSortedCars);
app.get("/cars/year/:year", getByYear);
app.put("/cars/:id", update);
app.delete("/cars/:id", removeCar);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});