import mongoose, { Schema, Document } from 'mongoose';

// Aca definimos los estados posibles de un libro como un tipo de typescript 

export type EstadoLibro = "DISPONIBLE" | "PRESTADO" | "EN_REPARACION"

export interface ILibro extends Document {
    titulo: string;
    descripcion: string;
    estado: EstadoLibro;
    createdAt: Date;
    updatedAt: Date;
}

// Modelo de mongo
const LibroSchema = new Schema<ILibro>({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
        enum: ['DISPONIBLE', 'PRESTADO', 'EN_REPARACION'],
        default: 'DISPONIBLE'
    }
}, {
    timestamps: true 
}),


export const Libro = mongoose.model<ILibro>('Libro', LibroSchema);