abstract class Vehicle
{
    private _make: string;
    private _model: string;
    private _year: number;
    private _isRented: boolean;
    private _price: number;

    
    constructor(make:string, model:string, year:number, isRented: boolean)
    {
        this._make = make;
        this._model = model;
        this._year = year;
        this._isRented = isRented;
    }

    get make(): string {
    return this._make;
  }

  set make(value: string) {
    if(value === '') throw new Error("Please provide appropriate value for make");
    this._make = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    if(value === '') throw new Error("Please provide appropriate value for model");
    this._model = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    if(value === 0) throw new Error("Please provide appropriate value for year");
    this._year = value;
  }

  get isRented(): boolean {
    return this._isRented;
  }

  set isRented(value: boolean) {
    this._isRented = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if(value <= 0) throw new Error("Please provide appropriate price");
    this._price = value;
  }
  abstract rentalRate(input : Vehicle) : number;

  rent(vehRen: Vehicle): string {

    if (vehRen.isRented)  
    {
        return "Vehicled is not available. Already Rented!!"
    } 
    else
    {
        vehRen.isRented = true;
        return "Successfully Rented!!"
    }    
  }
  
  return(vehRen: Vehicle): string{
    if (!vehRen.isRented)  
    {
        return "Vehicled is available. Already Returned!!"
    } 
    else
    {
        vehRen.isRented = false;
        return "Successfully Returned!!"
    }

  }
}

// Car, Truck, Motorcycle

class Car extends Vehicle
{
    public colour: string;
    public doors: number;
    rentalRate(input: Vehicle): number {
        if(input.make == "Toyota")
        {
            return 150;
        }
        else if (input.make == "Honda")
        {
            return 200;
        }
        else if (input.make == "Audi")
        {
            return 500;
        }
        else
        {
            return 100;
        }     
    }
}

class Truck extends Vehicle
{
    public doors: number;
    public wheels: number;
    rentalRate(input: Vehicle): number 
    {    
        if(input.make == "Toyota")
        {
            return 1500;
        }
        else if (input.make == "Honda")
        {
            return 2000;
        }
        else if (input.make == "Mercedees")
        {
            return 5000;
        }
        else
        {
            return 1000;
        } 
    }
}

class MotorCycle extends Vehicle
{
    public engineCC: string;
    rentalRate(input: Vehicle): number
    {
        if(input.make == "Toyota")
        {
                return 150;
        }
        else if (input.make == "Honda")
        {
            return 200;
        }
        else if (input.make == "Audi")
        {
            return 500;
        }
        else
        {
            return 100;
        } 
    } 
}
