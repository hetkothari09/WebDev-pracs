class ColorComponent {
    private color: string;
  
    constructor(initialColor: string) {
      this.color = initialColor;
    }
  
    setColor(newColor: string): void {
      this.color = newColor;
    }
  
    getColor(): string {
      return this.color;
    }
  }
  
  // Example usage
  const myComponent = new ColorComponent("#ff0000");
  console.log("Initial color:", myComponent.getColor()); // Output: #ff0000
  
  myComponent.setColor("#00ff00");
  console.log("Updated color:", myComponent.getColor()); // Output: #00ff00
  