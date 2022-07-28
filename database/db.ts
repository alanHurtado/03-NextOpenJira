import mongoose from "mongoose";

const mongooConecction = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConecction.isConnected) {
    console.log("Ya estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConecction.isConnected = mongoose.connections[0].readyState;
    if (mongooConecction.isConnected === 1) {
      console.log("Usuario conexión anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "");
  mongooConecction.isConnected = 1;
  console.log("Conectando a MongoDB:", process.env.MONGO_URL);
};

export const disconect = async () => {
  if (process.env.NODE_ENV === "development") return;
  if (mongooConecction.isConnected !== 0) return;
  await mongoose.disconnect();
  console.log("Desconectado de MongoDB");
};
