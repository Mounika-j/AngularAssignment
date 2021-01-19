// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  configUrl : 'http://localhost:3000/',
  CompositeUrl : 'https://compositeapi20201209040814.azurewebsites.net/api/Composite/',
  IdentityManagementUrl: 'https://identitymanagementapi20201209034057.azurewebsites.net/api/IdentityManagement/',
  resourceManagementUrl: 'https://resourcemanagementapi20201209035901.azurewebsites.net/',
  patientManagementUrl: 'https://patientmanagementapi20201214234751.azurewebsites.net/',
  appointmentMangementUrl: 'https://patientmanagementapi20201214234751.azurewebsites.net/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
