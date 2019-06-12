export class Keg {
  public remainingPints: number = 124;
  public sale: boolian = false;
  constructor(public name: string, public brand: string, public style: string, public price: number, public alcoholContent: number) {}
}
