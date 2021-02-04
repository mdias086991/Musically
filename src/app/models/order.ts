import {OrderItems} from './order_items';

export class Order {
    name: string;
    email: string;
    cpf: string;
    paymanet: string;
    items: Array<OrderItems[]>;
    
}