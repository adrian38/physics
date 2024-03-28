// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    PHYSICS_BACK_URL: '192.168.1.129',
    PHYSICS_BACK_PORT: '3000',
    PHYSICS_BACK_SECURITY: 'http',
    PHYSICS_MQTT_USER: 'physics_user',
    PHYSICS_MQTT_HOST: '192.168.1.129',
    PHYSICS_MQTT_PASSWORD: 'physics_password',
    PHYSICS_MQTT_PORT: '8883',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
