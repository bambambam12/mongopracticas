use("Empresa");

db.Empleados.insertMany([
  {nombre:"Carlos López", puesto:"Mecánico", edad:32, experiencia:5},
  {nombre:"Ana Torres", puesto:"Vendedora", edad:28, experiencia:3},
  {nombre:"Luis García", puesto:"Gerente", edad:45, experiencia:15},
  {nombre:"Marta Díaz", puesto:"Administrativa", edad:30, experiencia:4},
  {nombre:"Andrés Ruiz", puesto:"Mecánico", edad:38, experiencia:10},
  {nombre:"Sofía Herrera", puesto:"Vendedora", edad:26, experiencia:2},
  {nombre:"Jorge Pérez", puesto:"Chofer", edad:41, experiencia:12},
  {nombre:"Laura Mendoza", puesto:"Contadora", edad:33, experiencia:7},
  {nombre:"Fernando Ortiz", puesto:"Supervisor", edad:39, experiencia:11},
  {nombre:"Claudia Rivera", puesto:"Recepcionista", edad:25, experiencia:1}
]);

db.Clientes.insertMany([
  {nombre:"Juan Martínez", telefono:"5551234567", ciudad:"CDMX"},
  {nombre:"Elena Fuentes", telefono:"5557654321", ciudad:"Guadalajara"},
  {nombre:"Roberto Luna", telefono:"5549873210", ciudad:"Monterrey"},
  {nombre:"Sandra Velázquez", telefono:"5587651234", ciudad:"Puebla"},
  {nombre:"Daniel Castro", telefono:"5598765432", ciudad:"Toluca"},
  {nombre:"Carmen Torres", telefono:"5576549871", ciudad:"Querétaro"},
  {nombre:"Hugo Delgado", telefono:"5553217890", ciudad:"León"},
  {nombre:"Paola Sánchez", telefono:"5543216789", ciudad:"CDMX"},
  {nombre:"Ricardo Esquivel", telefono:"5559876543", ciudad:"Mérida"},
  {nombre:"Mariana Flores", telefono:"5587654320", ciudad:"Tijuana"}
]);

db.Productos.insertMany([
  {modelo:"Toyota Corolla", año:2020, marca:"Toyota", tipo:"Sedán"},
  {modelo:"Nissan Versa", año:2021, marca:"Nissan", tipo:"Sedán"},
  {modelo:"Honda CR-V", año:2019, marca:"Honda", tipo:"SUV"},
  {modelo:"Mazda 3", año:2022, marca:"Mazda", tipo:"Hatchback"},
  {modelo:"Ford Ranger", año:2018, marca:"Ford", tipo:"Pickup"},
  {modelo:"Chevrolet Aveo", año:2021, marca:"Chevrolet", tipo:"Sedán"},
  {modelo:"KIA Sportage", año:2022, marca:"KIA", tipo:"SUV"},
  {modelo:"Volkswagen Jetta", año:2020, marca:"VW", tipo:"Sedán"},
  {modelo:"Hyundai Tucson", año:2019, marca:"Hyundai", tipo:"SUV"},
  {modelo:"Renault Kwid", año:2023, marca:"Renault", tipo:"Mini"}
]);

db.Precios.insertMany([
  {modelo:"Toyota Corolla", precio:350000},
  {modelo:"Nissan Versa", precio:280000},
  {modelo:"Honda CR-V", precio:520000},
  {modelo:"Mazda 3", precio:390000},
  {modelo:"Ford Ranger", precio:450000},
  {modelo:"Chevrolet Aveo", precio:260000},
  {modelo:"KIA Sportage", precio:480000},
  {modelo:"Volkswagen Jetta", precio:370000},
  {modelo:"Hyundai Tucson", precio:510000},
  {modelo:"Renault Kwid", precio:220000}
]);

db.Ventas.insertMany([
  {cliente:"Juan Martínez", modelo:"Toyota Corolla", fecha:"2024-01-10", vendedor:"Ana Torres"},
  {cliente:"Elena Fuentes", modelo:"Honda CR-V", fecha:"2024-02-12", vendedor:"Luis García"},
  {cliente:"Daniel Castro", modelo:"Volkswagen Jetta", fecha:"2024-03-01", vendedor:"Sofía Herrera"},
  {cliente:"Sandra Velázquez", modelo:"Mazda 3", fecha:"2024-03-15", vendedor:"Carlos López"},
  {cliente:"Roberto Luna", modelo:"Ford Ranger", fecha:"2024-04-20", vendedor:"Jorge Pérez"},
  {cliente:"Paola Sánchez", modelo:"KIA Sportage", fecha:"2024-05-10", vendedor:"Ana Torres"},
  {cliente:"Ricardo Esquivel", modelo:"Hyundai Tucson", fecha:"2024-06-18", vendedor:"Luis García"},
  {cliente:"Mariana Flores", modelo:"Chevrolet Aveo", fecha:"2024-07-08", vendedor:"Sofía Herrera"},
  {cliente:"Hugo Delgado", modelo:"Nissan Versa", fecha:"2024-07-19", vendedor:"Andrés Ruiz"},
  {cliente:"Carmen Torres", modelo:"Renault Kwid", fecha:"2024-08-04", vendedor:"Claudia Rivera"}
]);
