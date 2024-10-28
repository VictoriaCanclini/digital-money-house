<a name="home"></a>

<!-- INTRODUCCIÓN -->

<div align="center">
  <a href="#">
    <img src="/public/img/cover-dm.png" alt="Logo" width="400">
  </a>

  <p align="center">
    <h3 align="center">Digital Money House</h3>
    <br />
    <a href="https://github.com/VictoriaCanclini/digital-money-house"><strong>Repositorio Github »</strong></a>
  </p>
</div>

<!-- SOBRE EL PROYECTO -->

## Sobre el proyecto

Es una aplicación web/mobile de una billetera virtual llamada Digital Money House.
Este producto digital es el mínimo producto viable para el lanzamiento de la billetera, y el usuario tiene las funcionalidades básicas de registro, inicio y cierre de sesión, dar de altos medios de pago como tarjetas de crédito o débito, recargar saldo en su billetera y poder usar los medios de pago o el saldo de su billetera para pagar servicios.
El usuario cuenta con una Cuenta Virtual uniforme única que es la cuenta que le pertenece. Y en donde lleva el registro de todas las transacciones (ingresos y egresos) que se realizan a través de la billetera, también conocido como movimientos o actividad de la cuenta.

### Tecnologías

|       |          |
| :---: | :------: |
| React | Next 14  |
| Redux | Tailwind |

<p align="right"><a href="#home">⬆ Volver a home</a></p>

<!-- PARA EMPEZAR -->

## Para empezar

Para probarlo en tu local. Siga las instrucciones a continuación para ejecutarlo.

### Instalación

1. En primer lugar debe clonar el <a href="https://github.com/VictoriaCanclini/digital-money-house">Repositorio</a> de Github:
   <br>
   `git clone git@github.com:VictoriaCanclini/digital-money-house.git`
2. En segundo lugar dirigirse al directorio del proyecto:
   <br>
   `cd digital-money-house`
3. Luego ejecutar el siguiente comando para instalar las dependencias de javascript:
   <br>
   `npm install`
4. Debemos copiar el archivo que contine las variable de entorno:
   <br>
   `cp .env.example .env`
   Cuando utilizamos un sistema de control de versiones como git, este archivo se excluye del repositorio por medidas de seguridad.
5. Levanta el proyecto usando Docker y Docker Compose:
   <br>
   `docker-compose up`
   O, si prefieres ejecutarlo en segundo plano:
   `docker-compose up -d`
6. Necesitamos iniciar el servidor de desarrollo de Next.js para visualizar los módulos del proyecto escritos
   en React. Si ya has configurado Docker Compose correctamente, el contenedor de Next.js debería ejecutarse automáticamente. De no ser así, puedes iniciarlo manualmente:
   `npm run dev`

<p align="right"><a href="#home">⬆ Volver a home</a></p>
    
<!-- FUNCTIONALITIES -->

## Funcionalidades

- [x] Register
- [x] Login
- [x] Perfil de usuario
- [x] Gestionar los medios de pago
- [x] cargar dinero
- [x] pagar servicios
- [x] Actividad del usuario
- [x] Logout

<p align="right"><a href="#home">⬆ Volver a home</a></p>

<!-- CONTACTO -->

## Contacto

<p align="left">

  <p>Victoria Canclini:</p>
  <a href="mailto:vikicanclini@gmail.com" target="_blank" rel="noopener noreferrer">
    <img alt="Gmail" title="gmail" src="https://custom-icon-badges.demolab.com/badge/-vikicanclini@gmail.com-red?style=for-the-badge&logo=mention&logoColor=white"/></a>
  <a href="https://my-portfolio-victoria.vercel.app" target="_blank" rel="noopener noreferrer">
    <img alt="Portfolio" title="Portfolio" src="https://custom-icon-badges.demolab.com/badge/-Portfolio-black?style=for-the-badge&logoColor=white&logo=web"/></a>
  <a href="www.linkedin.com/in/victoriacanclini" target="_blank" rel="noopener noreferrer">
    <img alt="Linkedin" title="linkedin" src="https://custom-icon-badges.demolab.com/badge/-Linkedin-blue?style=for-the-badge&logoColor=white&logo=linkedin"/></a>
  <a href="https://github.com/VictoriaCanclini" target="_blank" rel="noopener noreferrer">
    <img alt="Github" title="Github" src="https://custom-icon-badges.demolab.com/badge/-Github-grey?style=for-the-badge&logoColor=white&logo=github"/></a>

</p>

<p align="right"><a href="#home">⬆ Volver a home</a></p>
