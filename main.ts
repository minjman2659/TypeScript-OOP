console.log('Hello World!');

abstract class Car {
  private engine: boolean = false;
  constructor(public tire: string, protected chair: number) {}
  getEngine() {
    return this.engine;
  }
}

class Audi extends Car {
  constructor(public tire: string, protected chair: number) {
    super(tire, chair);
  }
  driving() {
    return this.tire;
  }
}
