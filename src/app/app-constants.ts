import { environment } from 'src/environments/environment';

/**
 * Clase dedicada a contener todas las constantes de la aplicacion
 *
 * @author Jhonier Gaviria M. - May. 09-2019
 * @version 1.0.0
 */
export class AppConstants {

    /**
     * Nombre de la aplicacion
     */
    public static readonly APP_NAME = 'MERP App';

    /**
     * Nombre de la aplicacion abreviada
     */
    public static readonly APP_NAME_SHORT = 'MA';

    /**
     * Contiene la direccion del api para el ambiente en ejecución
     */
    public static readonly API_URL = environment.apiUrl;

    /**
     * Codigos http para evaluar las respuestas de las transacciones
     */
    public static readonly HTTP_CODES = {
        /**
         * Codigos de error
         */
        ERRORS: {
            /**
             * Indica que la solicitud no pudo ser procesada debido a un conflicto con el estado actual del recurso que esta identifica.
             */
            HTTP_CONFLICT: 409,
            /**
             * El servidor no procesará la solicitud, porque no puede, o no debe, debido a algo que es percibido como un error del cliente.
             */
            HTTP_BAD_REQUEST: 400,
            /**
             * El usuario no ha sido autorizado
             */
            HTTP_UNAUTHORIZED: 401
        },
        /**
         * Codigos de aprobacion
         */
        SUCCESS: {
            /**
             * Respuesta estándar para peticiones correctas.
             */
            HTTP_OK: 200,
            /**
             * La petición ha sido completada y ha resultado en la creación de un nuevo recurso.
             */
            HTTP_CREATED: 201
        }
    };

    /**
     * Contiene los mensajes basicos de la aplicacion
     */
    public static readonly MESSAGES = {
        /**
         * Mensajes de error en la aplicacion
         */
        ERROR: {
            /**
             * Se usa en la home si no se puede cargar los puestos
             */
            CANT_LOAD_SUBSTATIONS: 'No hemos podido cargar la información de las subestaciones. Intenta recargar la página.',
            /**
             * Se usa cuando hay un error en una peticion y no esta controlado por el servidor
             */
            HTTP_GENERAL_MESSAGE: 'Se ha presentado un inconveniente en el proceso.'
        },
        /**
         * Mensajes de informacion al usuario
         */
        INFO: {

        }
    };

    /**
     * Tiempo para que desaparezcan ciertas alertas que brindan informacion importante
     */
    public static readonly TIME_OUT_TOAST_LARGE = 10000;

    /**
     * Roles de la aplicacion
     */
    public static readonly ROLES = {
        /**
         * Identificador de rol para el interventor
         */
        ROLE_INSPECTOR: 1,
        /**
         * Nombre por defecto para el rol de Interventor
         */
        ROLE_INSPECTOR_NAME: 'Interventor',
        /**
         * Identificador de rol para el interventor
         */
        ROLE_ASSISTANT_INSPECTOR: 2,
        /**
         * Nombre por defecto para el rol de Auxiliar Interventoria
         */
        ROLE_ASSISTANT_INSPECTOR_NAME: 'Auxiliar Interventoria',
        /**
         * Identificador de rol para el interventor
         */
        ROLE_SUPERVISOR: 3,
        /**
         * Nombre por defecto para el rol de Supervisor
         */
        ROLE_SUPERVISOR_NAME: 'Supervisor',
        /**
         * Identificador de rol para el interventor
         */
        ROLE_PLANNER: 4,
        /**
         * Nombre por defecto para el rol de Planillero
         */
        ROLE_PLANNER_NAME: 'Planillero',
    };

    /**
     * Tipos de localidad de la aplicacion
     */
    public static readonly TYPES_TOWNS = {
        /**
         * Identificador por defecto para el tipo de sector barrio
         */
        TYPE_TOWN_NEIGHBORHOOD: 1,

        /**
         * Identificador por defecto para el tipo de sector vereda
         */
        TYPE_TOWN_VILLAGE: 2,

        /**
         * Nombre por defecto para el tipo de sector barrio
         */
        TYPE_TOWN_NEIGHBORHOOD_NAME: 'Barrio',

        /**
         * Nombre por defecto para el tipo de sector vereda
         */
        TYPE_TOWN_VILLAGE_NAME: 'Vereda',
    }
}

