use("Empresa");

db.Empleados.updateOne({nombre:"Luis García"}, {$set:{edad:46}});
db.Empleados.updateOne({nombre:"Marta Díaz"}, {$set:{puesto:"Supervisora"}});

db.Clientes.updateOne({nombre:"Roberto Luna"}, {$set:{ciudad:"CDMX"}});
db.Clientes.updateOne({nombre:"Sandra Velázquez"}, {$set:{telefono:"5512345678"}});

db.Productos.updateOne({modelo:"Honda CR-V"}, {$set:{año:2020}});
db.Productos.updateOne({modelo:"Mazda 3"}, {$set:{tipo:"Sedán"}});

db.Precios.updateOne({modelo:"Honda CR-V"}, {$set:{precio:530000}});
db.Precios.updateOne({modelo:"Mazda 3"}, {$set:{precio:400000}});

db.Ventas.updateOne({cliente:"Daniel Castro"}, {$set:{vendedor:"Claudia Rivera"}});
db.Ventas.updateOne({cliente:"Sandra Velázquez"}, {$set:{fecha:"2024-03-20"}});
