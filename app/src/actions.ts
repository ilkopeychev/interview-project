import { Person } from "./DataTypes";

export const GET_CUSTOMERS="GET_CUSTOMERS";

export const customerAction = (data: Person[]) => ({
  type: GET_CUSTOMERS,
  payload: data
 });