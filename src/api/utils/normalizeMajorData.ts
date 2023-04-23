import { Major, OriginalMajor } from '@/api/types';

export const normalizeMajorData = (major: OriginalMajor): Major => {
  return {
    id: major.cod_curso,
    name: major.nome
  };
}