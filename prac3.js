use("Empresa");

db.Empleados.deleteOne({nombre:"Carlos López"});
db.Empleados.deleteOne({nombre:"Ana Torres"});

db.Clientes.deleteOne({nombre:"Juan Martínez"});
db.Clientes.deleteOne({nombre:"Elena Fuentes"});

db.Productos.deleteOne({modelo:"Toyota Corolla"});
db.Productos.deleteOne({modelo:"Nissan Versa"});

db.Precios.deleteOne({modelo:"Toyota Corolla"});
db.Precios.deleteOne({modelo:"Nissan Versa"});

db.Ventas.deleteOne({cliente:"Juan Martínez"});
db.Ventas.deleteOne({cliente:"Elena Fuentes"});
