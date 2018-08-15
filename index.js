var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import getDecorators from "inversify-inject-decorators";
import { Container, injectable } from "inversify";
let container = new Container();
let { lazyInject } = getDecorators(container);
let TYPES = { Weapon: "Weapon" };
let Sword = class Sword {
    constructor() {
        this.durability = 100;
        this.name = "Sword";
    }
    use() {
        this.durability = this.durability - 10;
    }
};
Sword = __decorate([
    injectable()
], Sword);
class Warrior {
}
__decorate([
    lazyInject(TYPES.Weapon)
], Warrior.prototype, "weapon", void 0);
container.bind(TYPES.Weapon).to(Sword);
let warrior = new Warrior();
console.log(warrior.weapon instanceof Sword); // true
