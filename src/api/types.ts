export type OriginalSubject = {
  _id: string,
  id_disciplina: number,
  cod_disciplina: string,
  nome_disciplina: string,
  creditos: number,
  periodo: string,
  curso: string,
  valido: boolean,
}

export type Subject = {
  id: number,
  name: string,
  code: string,
  weight: number,
  term: string,
  major: string,
}

export type OriginalMajor = {
  _id: string,
  cod_curso: string,
  nome: string,
}

export type Major = {
  id: string,
  name: string,
}