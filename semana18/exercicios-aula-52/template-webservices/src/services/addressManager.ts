import axios from "axios";
import { address } from "../types/address";

const URL = "https://viacep.com.br/ws";

export async function getAddressByCep(cep: string): Promise<address> {
  try {
    // Busca as informações a partir do cep.
    const result = await axios.get(`${URL}/${cep}/json`);
   
    const myAddress: address = {
      name: result.data.logradouro, 
      // logradouro essa parte tem que colocar exatamente como está na api 
      neighbourhood: result.data.bairro,
      // neighbourhood essa parte tem que colocar exatamente como está na api 
      city: result.data.localidade,
      // cidade essa parte tem que colocar exatamente como está na api 
      state: result.data.uf,
      // uf essa parte tem que colocar exatamente como está na api 
    };
    return myAddress;
  } catch (error) {
    throw new Error(error.message);
  }
}
