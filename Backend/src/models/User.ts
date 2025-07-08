import {DataTypes } from "sequelize";
import sequelize from "@/config/sequelize";

const User = sequelize.define("User",{
firstname: {type:DataTypes.STRING, allowNull:false},
lastname: {type:DataTypes.STRING},
middlename: {type:DataTypes.STRING},
username: {type:DataTypes.STRING, unique:true},
type: {type: DataTypes.STRING},
password: {type:DataTypes.STRING},
date_updated: {type:DataTypes.DATE, allowNull:true},
date_created: {type:DataTypes.DATE, defaultValue:DataTypes.NOW},
status: {type:DataTypes.NUMBER},
id:{type:DataTypes.NUMBER, primaryKey:true, autoIncrement:true}
},{
    tableName: "users",
    timestamps:true,
    updatedAt: "date_updated",
    createdAt: "date_created"
});

export default User;