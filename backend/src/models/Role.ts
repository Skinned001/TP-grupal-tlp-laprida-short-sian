import mongoose, { Schema, Document, Types } from 'mongoose';
import { IPermission } from 'Permission';

// Definimos los 3 únicos roles válidos.
export type RoleName = 'admin' | 'operador' | 'usuario';

// Interfaz del Rol en TypeScript.
// El campo "permissions" se tipa como un arreglo que puede contener:
// - Types.ObjectId[]: cuando el rol se consulta normalmente sin poblar las referencias.
// - IPermission[]: cuando usamos .populate('permissions') para leer los nombres de cada permiso.
export interface IRole extends Document {
    name: RoleName;
    permissions: Types.ObjectId[] | IPermission[];
    createdAt: Date;
    updatedAt: Date;
}

// Esquema de Mongoose.
const RoleSchema = new Schema<IRole>(
    {
        name: {
            type: String,
            required: true,
            unique: true, // Solo puede existir un rol 'admin', un 'operador' y un 'usuario'
            enum: ['admin', 'operador', 'usuario'],
        },
        // Relación 1 a Muchos (un rol tiene múltiples permisos asociados).
        // Se guarda un array de ObjectIds que apuntan al modelo 'Permission'.
        permissions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Permission', // Nombre exacto del modelo exportado en Permission.ts
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Role = mongoose.model<IRole>('Role', RoleSchema);