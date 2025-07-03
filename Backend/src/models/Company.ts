import sequelize from "../config/sequelize";
import { DataTypes } from "sequelize";

export const Company = sequelize.define("Company", {
    id: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    name: DataTypes.TEXT,
    details: DataTypes.TEXT,
    address: DataTypes.TEXT,
    status: DataTypes.NUMBER,
    date_created: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    date_updated: { type: DataTypes.DATE, allowNull: true },
    created_by: DataTypes.NUMBER
}, {
    tableName: "company",
    timestamps: false,
    updatedAt: "date_updated",
    createdAt: "date_created"
});