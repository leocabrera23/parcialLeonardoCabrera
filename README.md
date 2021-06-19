---
# Parcial N° 1

### Materia: Programación

### Alumno: Leonardo Cabrera

### Profesor: Alberto Cortez
---

## Consignas   
#### 1- Crear con sequelize una base de datos con sus relaciones a partir del material dado

#### 2- Exportala a workbench

#### 3- Generar un gráfico de entidad relación con la herramienta de ingeniería inversa
---


## _Comandos para la creación de las tablas_

### sin clave foránea:

```
sequelize model:generate --name Brand --attributes name:string

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name Size --attributes size:string

sequelize model:generate --name Gender --attributes type:string

sequelize model:generate --name Payment --attributes type:string

sequelize model:generate --name State --attributes description:string

sequelize model:generate --name Address --attributes street:string,number:integer
```
### con clave foránea:

```
sequelize model:generate --name User --attributes first_name:string,last_name:string,username:string,email:string,password:string,addresses_id:integer

sequelize model:generate --name Order --attributes number:integer,date:date,total:decimal,payments_id:integer,users_id:integer,users_addresses_id:integer,states_id:integer

sequelize model:generate --name Shipping --attributes street:string,number:integer,orders_id:integer

sequelize model:generate --name Product --attributes name:string,price:decimal,stock:integer,stock_min:integer,stock_max:integer,brand_id:integer,categories_id:integer,genders_id:integer,sizes_id:integer

sequelize model:generate --name Image --attributes name:string,product_id:integer

sequelize model:generate --name OrdersDetails --attributes quantity:decimal,subtotal:decimal,products_id:integer,orders_id:integer
```
---


<h2 align="center">Gráfico</h2>
 
<p align="center">
  <img 
 src="https://user-images.githubusercontent.com/83379102/122653025-57f49880-d118-11eb-8b95-030c49976959.png"/>
</p>




