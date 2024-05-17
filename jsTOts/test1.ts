// TypeScript code

// Function to calculate the area of a rectangle
function calculateArea(rectangleLength: number, width: number): number {
    return rectangleLength * width;
}

// Example usage
const rectangleLength: number = 5;
const width: number = 4;
const area: number = calculateArea(rectangleLength, width);
console.log("Area of the rectangle:", area);
