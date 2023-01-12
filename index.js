// Code your solution in this file!

function distanceFromHqInBlocks(location){
    const hq = 42;
    const startingPoint = location;
    const num1 = Math.max(hq, startingPoint);
    const num2 = Math.min(hq, startingPoint);
    const blocksFromHq = num1 -num2;
    return blocksFromHq;
}

function distanceFromHqInFeet(location){
    const hq = 42;
    const startingPoint = location;
    const num1 = Math.max(hq, startingPoint);
    const num2 = Math.min(hq, startingPoint);
    const blocksFromHq = num1 -num2;
    const feetFromHq = blocksFromHq * 264;
    return feetFromHq;
}

function distanceTravelledInFeet(startingPoint, destination){
    const num1 = Math.max(startingPoint, destination);
    const num2 = Math.min(startingPoint, destination);
    const blocksTravelled = num1 - num2;
    const feetTravelled = blocksTravelled * 264;
    return feetTravelled;
}

function calculatesFarePrice(start, destination){
    const num1 = Math.max(start, destination);
    const num2 = Math.min(start, destination);
    const blocksTravelled = num1 - num2;
    const feetTravelled = blocksTravelled * 264;
    let fare;
    if (feetTravelled < 400){
        fare = 0;
        return fare;
    }else if (feetTravelled <2000){
        fare = (feetTravelled - 400) * 0.02;
        return fare;
    }else if (feetTravelled < 2500){
        fare = 25;
        return fare;
    }else {
        return "cannot travel that far"
    }
}