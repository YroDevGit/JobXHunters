import sequelize from "../config/sequelize";
import { DataTypes } from "sequelize";

const Token = sequelize.define("Token", {
    id: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    user: DataTypes.STRING,
    token: DataTypes.STRING,
    active: DataTypes.NUMBER,
    device: DataTypes.STRING,
    unit: DataTypes.STRING,
    status: DataTypes.NUMBER,
    userid: DataTypes.NUMBER
}, {
    tableName: "login",
    timestamps: false
});

export default Token;