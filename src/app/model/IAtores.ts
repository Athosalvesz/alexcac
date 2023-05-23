/* eslint-disable eol-last */
export interface IAtores{
  nome: string;
  idade: string;
  classificacao: number;
  foto: string;
  obras: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
