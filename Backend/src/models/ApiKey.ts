import { DataTypes } from 'sequelize';
import sequelize from '@/config/sequelize';

const ApiKey = sequelize.define('ApiKey', {
  apikey: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user:{
    type: DataTypes.STRING,
    unique:true,
  },
  password: {
    type: DataTypes.STRING
  },
  date_created:{
    type:DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  date_updated:{
    type: DataTypes.DATE,
    allowNull:true
  },
  status:{
    type: DataTypes.NUMBER,
    allowNull:true
  }
}, {
  tableName: 'auth',
  timestamps: true, 
  createdAt: "date_created",
  updatedAt: "date_updated"
});

export default ApiKey;
