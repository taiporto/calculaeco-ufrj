export type OriginalSubject = {
  _id: string,
  id_disciplina: string,
  cod_disciplina: string,
  nome_disciplina: string,
  creditos: string,
  periodo: string,
  curso: string,
  valido: string,
}

export type Subject = {
  id: string,
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