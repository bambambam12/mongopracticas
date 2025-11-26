use("Empresa");

db.Empleados.find();
db.Empleados.find({puesto:"Mecánico"});
db.Empleados.find({edad:{$gt:30}});
db.Empleados.find({experiencia:{$gte:10}});
db.Empleados.find({nombre:/^L/});
db.Empleados.find({edad:{$lte:28}});
db.Empleados.find({puesto:{$in:["Vendedora","Chofer"]}});
db.Empleados.find({experiencia:{$lt:5}});
db.Empleados.find({puesto:{$ne:"Gerente"}});
db.Empleados.find({nombre:"Luis García"});

db.Clientes.find();
db.Clientes.find({ciudad:"CDMX"});
db.Clientes.find({telefono:/^555/});
db.Clientes.find({ciudad:{$ne:"Puebla"}});
db.Clientes.find({nombre:/a$/});
db.Clientes.find({ciudad:{$in:["Monterrey","Guadalajara"]}});
db.Clientes.find({telefono:{$exists:true}});
db.Clientes.find({nombre:"Roberto Luna"});
db.Clientes.find({ciudad:{$regex:"a"}});
db.Clientes.find({telefono:{$gte:"5555000000"}});

db.Productos.find();
db.Productos.find({tipo:"SUV"});
db.Productos.find({marca:"Honda"});
db.Productos.find({año:{$gte:2020}});
db.Productos.find({modelo:/^M/});
db.Productos.find({año:{$lt:2021}});
db.Productos.find({marca:{$in:["Toyota","Mazda"]}});
db.Productos.find({tipo:{$ne:"Sedán"}});
db.Productos.find({modelo:"Mazda 3"});
db.Productos.find({año:{$gte:2019,$lte:2022}});

db.Precios.find();
db.Precios.find({precio:{$gt:400000}});
db.Precios.find({precio:{$lt:300000}});
db.Precios.find({modelo:"Mazda 3"});
db.Precios.find({precio:{$gte:350000,$lte:450000}});
db.Precios.find({modelo:/^H/});
db.Precios.find({precio:{$in:[220000,450000]}});
db.Precios.find({precio:{$ne:480000}});
db.Precios.find({precio:{$exists:true}});
db.Precios.find({modelo:"Renault Kwid"});

db.Ventas.find();
db.Ventas.find({vendedor:"Luis García"});
db.Ventas.find({modelo:"Honda CR-V"});
db.Ventas.find({fecha:"2024-03-01"});
db.Ventas.find({cliente:/^M/});
db.Ventas.find({modelo:{$in:["Mazda 3","KIA Sportage"]}});
db.Ventas.find({fecha:{$gte:"2024-05-01"}});
db.Ventas.find({vendedor:{$ne:"Ana Torres"}});
db.Ventas.find({modelo:/a$/});
db.Ventas.find({cliente:"Daniel Castro"});
