// interface Circle {
//     readonly centerX : number;
//     readonly centerY: number;
//     readonly radius: number;
// }

interface Circle {
    centerX : number;
    centerY: number;
    radius: number;
}

function moveCircle( c: Circle, centerX: number, centerY: number, radius: number) {
    c.centerX = centerX;
    c.centerY = centerY;
    c.radius = radius;
}