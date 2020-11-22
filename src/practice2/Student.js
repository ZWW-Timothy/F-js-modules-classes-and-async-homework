import { Person } from "./Person";

// eslint-disable-next-line import/prefer-default-export
export class Student extends Person {
  constructor(name, className) {
    super(name);
    this.className = className;
  }

  study = () => {
    this.move();
    // eslint-disable-next-line no-console
    console.log(`${this.name} is studying in ${this.className}`);
  };
}
