interface Vehicule {
    make: string;
    model: string;
    year?: number;
}

function createVehicule(v: Vehicule) {
    v.year ? console.log("Vehicule props :\n" + "\tMake :" + v.make + "\n\tModel :" + v.model + "\n\tYear :" + v.year) : console.log("Vehicule props :\n" + "\tMake :" + v.make + "\n\tModel :" + v.model);
}