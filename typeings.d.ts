export interface IProduct {
    id : string;
    name: string;
    price: number;
    image? : any;
    category?: ICategory
    purchase?: IPurchase

}

export interface IPurchase {
    product: IProduct,
    purchaseDate: Date;
}
//Express the IPurchase using 

export interface ICategory  {
    id: string;
    name: string;
}

export interface User {
    name: string;
    email: string;
    level: Level
}

type Level = 'Admin' | 'Manager' | 'Staff' | 'Customer'

// Admin Type
type Admin = User & {
    level: 'Admin',
    adminPrivileges: string[]
}

// Manager Type
type Manager = User & {
    level: 'Manager',
    managerPrivileges: string[]
}

// Staff Type
type Staff = User & {
    level: 'Staff',
    staffPrivileges: string[]
}

//Customer Type 
type Customer = User & {
    level: 'Customer',
    customerPrivileges: string[]
}


export interface IMove {
    id: string;
    date: Date;

} 

export interface IChart {
    labels: string[];
    dataset: {
        data: number[];
        backgroundColor: string;
        borderWidth: number;
    }
}

export interface ChartProps {
    data: IChart
    title: string;
}

