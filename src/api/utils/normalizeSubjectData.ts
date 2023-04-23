import { Subject, OriginalSubject } from '../types';

export const normalizeSubjectData = (subject: OriginalSubject): Subject => {
  return {
    id: subject.id_disciplina,
    name: subject.nome_disciplina,
    code: subject.cod_disciplina ?? '',
    weight: +subject.creditos,
    term: subject.periodo,
    major: subject.curso,
  };
}