# Patrones de Diseño y Principios SOLID — Sistema de Biblioteca

## 1. Patrones de Diseño

### 1.1 Singleton
- **Archivos:** `backend/src/database/DatabaseConnection.ts` y `backend/src/main.ts`
- **Problema que resuelve:** Evita que se abran múltiples conexiones simultáneas a MongoDB cada vez que un módulo o repositorio necesita interactuar con la base de datos. Garantiza un único punto de acceso global y una única instancia de conexión durante todo el ciclo de vida del backend.
- **Fragmento de código:**
```typescript
export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private constructor() {}

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
}