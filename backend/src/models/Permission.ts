import mongoose, { Schema, Document } from 'mongoose';

// Definimos como un Union Type estricto de TypeScript los 10 permisos exactos
// Esto evita errores de tipeo en compilación en los permisos en los middlewares.
export type PermissionName =
    | 'libro:read'
    | 'libro:create'
    | 'libro:update'
    | 'libro:change-status'
    | 'libro:delete'
    | 'subscription:create'
    | 'subscription:delete'
    | 'notification:read'
    | 'user:read'
    | 'user:assign-role';

// Interfaz que representa el documento de un Permiso en MongoDB.
// Extiende de Document para heredar las propiedades internas de Mongoose (como _id).
export interface IPermission extends Document {
    name: PermissionName;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

// Esquema de Mongoose que valida la estructura en la base de datos.
const PermissionSchema = new Schema<IPermission>(
    {
        name: {
            type: String,
            required: true,
            unique: true, // Garantiza que el seed no duplique permisos con el mismo nombre
            enum: [
                'libro:read',
                'libro:create',
                'libro:update',
                'libro:change-status',
                'libro:delete',
                'subscription:create',
                'subscription:delete',
                'notification:read',
                'user:read',
                'user:assign-role',
            ],
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Exportamos el modelo tipado con IPermission para usarlo en el repositorio y en el seed
export const Permission = mongoose.model<IPermission>('Permission', PermissionSchema);