

// calculating the distance between two points
export function calcDistance(x1: number, y1: number, x2: number, y2: number): number {
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
}
//testing
// console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5).toFixed(2));
// console.log("expect 13.04 : ", calcDistance(3, 4, 10, 15).toFixed(2));
// console.log("expect 17.80 : ", calcDistance(4, 1, 18, 12).toFixed(2));
