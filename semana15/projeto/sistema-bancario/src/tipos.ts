export type Transacoes = {
  valor: number;
  date: Date;
  descricao: string;
};

export type Conta = {
  nome: string;
  cpf: string;
  dataNascimento: Date;
  saldo: number;
  extratoBancario: Array<Transacoes>;
};
