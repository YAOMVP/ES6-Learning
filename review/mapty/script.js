'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



class Workout {

    date = new Date();
    id = (Date.now() + "").slice(-10);

    constructor(coords, distance, duration) {
        this.coords = coords; // [lat,lng]
        this.distance = distance; //km
        this.duration = duration; //min
    }
}

class Running extends Workout {

    type = "running";

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }

    calcPace() {
        // min/km 
        this.pace = this.duration / this.distance;
        return this.pace;
    }

}

class Cycling extends Workout {

    type = "cycling"; // A property is available on all the instances

    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }

    calcSpeed() {
        // km/h

        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}


const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1, cycling1);


///////////////////////////////////////////////



const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map;
let mapEvent;

class App {

    map; //private instance properties
    mapEvent; //private instance properties
    //constructor is called immediately when a new object is created from this class, so the app is created when the page loads.
    workouts = [];


    constructor() {
        this._getPosition();
        form.addEventListener("submit", this._newWorkout.bind(this)); //this._newWorkout谁调用指向谁 form调用指向form，但是我们想指向App() 所以用bind()



    }

    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
                alert("Could not get your position!!")
            })

    }

    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`https://www.google.com.au/maps/@${latitude},${longitude}`);

        //Leaflet overview function
        const coords = [latitude, longitude]

        // console.log(this);

        this.map = L.map('map').setView(coords, 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        //Coming from the leaflet library 
        //Handling clicks on map
        this.map.on("click", this._showForm.bind(this));
    }

    _showForm(mapE) {

        this.mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
    }

    _toggleElevationField() {

        inputType.addEventListener("change", function() {
            inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
            inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
        })

    }

    _newWorkout(e) {
        //  When we use rest parameter, we get an array inputs,
        const validInputs = (...inputs) =>
            //Loop over the inputs array, check each inp isFinite or not, it will only return rtue, all of the inp is true.
            inputs.every(inp => Number.isFinite(inp));

        const allPositive = (...inputs) => inputs.every(inp => inp > 0);

        e.preventDefault();

        //Get data from form

        const type = inputType.value;
        const distance = +inputDistance.value; //convert into a number
        const duration = +inputDuration.value;
        const { lat, lng } = this.mapEvent.latlng;
        let workout;

        //If workout running, create running object
        if (type === "running") {
            const cadence = +inputCadence.value;
            //Check if data is valid (each of them should be a number)

            // if (!Number.isFinite(distance) ||   !Number.isFinite(duration) ||!Number.isFinite(cadence))
            if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)) {
                return alert("Inputs have to be positive numbers!");
            }

            workout = new Running([lat, lng], distance, duration, cadence);
        }

        //If workout cycling, create cycling object
        if (type === "cycling") {
            const elevation = +inputElevation.value;

            //Check if data is valid (each of them should be a number)
            // if (!Number.isFinite(distance) ||   !Number.isFinite(duration) ||!Number.isFinite(elevation))
            if (!validInputs(distance, duration, elevation) || !allPositive(distance, duration)) {
                return alert("Inputs have to be positive numbers!");
            }
            workout = new Cycling([lat, lng], distance, duration, elevation);

        }

        //Add new object to workout array
        this.workouts.push(workout);
        console.log(workout);

        //Render workout on map as marker
        this.renderWorkoutMarker(workout)

        //Render workout on List


        //Hide form + Clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";
    }

    renderWorkoutMarker(workout) {
        L.marker(workout.coords)
            .addTo(this.map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`,
            }))


        .setPopupContent("workout")
            .openPopup()

    }
}



const app = new App();