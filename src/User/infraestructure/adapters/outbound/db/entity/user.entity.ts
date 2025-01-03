
import { Model, DataTypes } from "sequelize";
import sequelize from "../../../../../../config/db.config";

class UserEntity extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
}

UserEntity.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    { sequelize, modelName: "User", tableName: 'users' }
);

// Sincronizar el modelo con la base de datos
UserEntity.sync({ force: false })
  .then(() => {
    console.log('Tabla de usuarios creada correctamente.');
  })
  .catch(error => {
    console.error('Error al crear la tabla:', error);
  });

export default UserEntity;