import { PersonDTO } from './../DataTypes';
import axios from "axios";

const GET_CUSTOMER_URL="http://localhost:4000/";

export const api = {
  getCustomers: async function () {
    return axios.get<PersonDTO[]>(GET_CUSTOMER_URL, {});
  },
};