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
     * Contiene la direccion del api para el ambiente
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
            HTTP_BAD_REQUEST: 400
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
     * Nombre del usuario administrador
     */
    public static readonly USER_ADMIN = 'Francisco';
}

