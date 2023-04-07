# Expo Router Example

## Instalar proyecto
```sh
npm install
```

En caso de mostrar un error de tipo Fetch, ejecutar el siguiente comando
```sh
npm install -g expo-cli
npm install
```


Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## Generar Aplicacion
Aca pdoras encontrar como generar la aplicacion con EAS

- Registrarse en Expo
- Instalar eas-cli
```sh
npm install -g eas-cli
```
- Iniciar sesion con Expo desde eas-cli
 ```sh
eas login
```

- Generar la configuracion de construccion
 ```sh
eas build:configure
```
- Crear la aplicacion desde Expo
 ```sh
eas build -p <plataformo> --profile preview
```


## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)
