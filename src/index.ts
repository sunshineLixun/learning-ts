import "./global.d.ts";
import "./declare";

import { valueOfPi } from "./constants";

interface Animal {
  eat(): void;
}

class Human {
  name: string = "baby";
  humanEat(): void {
    console.log("humanEat");
  }
}

interface HumanInterface extends Human {
  cry(): void;
}

class Baby implements HumanInterface {
  name: string = "baby";
  humanEat(): void {}
  cry(): void {}
}

class Boy extends Human {}

console.log(globalThis);

console.log(valueOfPi * 2);
