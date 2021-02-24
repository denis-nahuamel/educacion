export interface EstudianteInterface {
  id?: string;
  apellidoMaterno?: string;
  apellidoPaterno?: string;
  celular?: string;
  dni?: string;
  nombres?: string;
   cursos: Cursos;
}
export interface Cursos {
  curso?: boolean;
}

