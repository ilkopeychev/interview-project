import moment from 'moment';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export interface Data {
  customerName: string,
  orderNumber: number,
  customerAddress: string,
  orderValue: number,
  orderDate: string,
  shipDate:string,
  status:boolean
}
export class PersonDTO{
  public customer:Customer;
  public order_details:OrderDetails;
  public shipping_details:ShippingDetails;
  public status: string;

  constructor(customer: Customer, order_details: OrderDetails, shipping_details: ShippingDetails, status: string){
    this.customer = customer;
    this.order_details = order_details;
    this.shipping_details = shipping_details;
    this.status = status;
  }
}

export class Customer {
  address: Address;
  first_name:string;
  last_name: string;
  constructor(address: Address, first_name:string,last_name: string){
    this.address=address;
    this.first_name=first_name;
    this.last_name=last_name;
  }
}

export class Address {
  line1:string;
  line2:string;
  city:string; 
  state: string; 
  zip: string
  constructor(line1:string, line2:string, city: string, state: string, zip:string) {
    this.line1=line1;
    this.line2=line2;
    this.city=city;
    this.state=state;
    this.zip=zip;
  }
  
}

export class OrderDetails {
value:number;
date:string;
constructor(value:number,date: string){
  this.value=value;
  this.date=date;
}
}

export class ShippingDetails {
  date:string;
  constructor(date:string){
    this.date=date;
  }
}


export class Person {

 orderNumber: string;
 customerName: string;
 customerAddress: string;
 orderValue: number;
 orderDate: string;
 shipDate: string;
 status: string;
constructor(
  entity: PersonDTO
){
  this.orderNumber=entity.customer.address.zip;
  this.customerName=entity.customer.last_name+", "+entity.customer.first_name;
  this.customerAddress=entity.customer.address.line1;
  this.orderValue=entity.order_details.value;
  this.orderDate=moment(new Date(entity.order_details.date)).format('YYYY-DD-MM');
  this.shipDate=moment(new Date(entity.shipping_details.date)).format('YYYY-DD-MM');
  this.status=entity.status
}
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
}
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);
export type Order = 'asc' | 'desc';


export const headCells: HeadCell[] = [
  { id: 'orderNumber',  disablePadding: true, label: 'Order Number' },
  { id: 'customerName', disablePadding: false, label: 'Customer Name' },
  { id: 'customerAddress',  disablePadding: false, label: 'Customer Address' },
  { id: 'orderValue',  disablePadding: false, label: 'Order Value' },
  { id: 'orderDate',  disablePadding: false, label: 'Order Date' },
  { id: 'shipDate',  disablePadding: false, label: 'Ship Date' },
  { id: 'status',  disablePadding: false, label: 'Status' },
];


