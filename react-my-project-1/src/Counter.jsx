
import React,{useState} from "react";


function Counter(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake]  = useState("");
    const [carModel, setCarModel] = useState(""); 

    function handleAddCar(){
        const carYear = document.getElementById("car-year").value;
        const carMake = document.getElementById("car-make").value;
        const carModel = document.getElementById("car-model").value;

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars((prevCars) => [...prevCars, newCar] ); 
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleCarYear(e){
        setCarYear(e.target.value);
    }
    function handleCarMake(e){
        setCarMake(e.target.value);
    }
    function handleCarModel(e){
        setCarModel(e.target.value);
    }

    function deleteItem(index){
        setCars((prevCars) => prevCars.filter((_, i) => i !==index));
    }
    return(<>
        <div>
            <h2>List of car objects</h2>
            
            <ul>
                {cars.map((car, index) => <li key = {index} onClick={() => deleteItem(index)}>
                    {car.year} {car.make} {car.model} </li> ) }
            </ul>

            <input onChange={handleCarYear} id="car-year" type="number" value = {carYear} /> <br/>
            <input onChange={handleCarMake} id="car-make" type="text" placeholder="enter maker" value = {carMake}/> <br/>
            <input onChange={handleCarModel} id="car-model" type="text" placeholder="enter model" value = {carModel} /> <br/>
            <button onClick={handleAddCar}>Add Car</button>

        </div>
       
    </>)
}

export default Counter;