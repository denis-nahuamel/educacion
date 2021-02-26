import { CursoInterface} from './curso';
export interface EstudianteInterface {
  id?: string;
  apellidoMaterno?: string;
  apellidoPaterno?: string;
  celular?: string;
  dni?: string;
  nombres?: string;
  // cursos: CursoInterface;
  curso?: string;
}

