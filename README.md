# RESULTADOS

*"Resultados"* es una pequeña app de **React + Vite** en la cual, mediante conexión con la api de [The Sports DB](https://www.thesportsdb.com/api.php) usando **Axios**, se obtiene información de resultados deportivos y clasificaciones de diversas competiciones. 

Actualmente, la app puede obtener datos de la Liga Española de Fútbol (concretamente su primera y segunda división), aunque la idea es ir ampliando el abanico de competiciones en la medida de lo posible.

La idea con *"Resultados"* desde un principio es usar exclusivamente **APIs gratuítas** para evitar que, quien descargue este proyecto, tenga que preocuparse de utilizar varias API keys para que funcione correctamente. En otras palabras, que una vez descargado el repositorio puedas ejecutarlo sin necesidad de configurar nada, y funcione.

### Iniciando la app

1. Clona el repositorio en tu máquina.
2. Instala las dependencias del proyecto con `npm install`.
3. Ejecuta el proyecto con `npm run dev`.
4. Haz clic en el enlace a **localhost** que aparecerá en consola para abrir la app.

### Uso

El uso de "Resultados" no requiere nada por tu parte. Una vez abras la app, verás varias secciones correspondientes a las diversas competiciones. En cada una de ellas puedes encontrar:
1. Una marquesina con los últimos resultados de la competición
2. Una tabla de clasificación de la competición

La marquesina de resultados se detiene al colocar el puntero del ratón encima. Al hacer clic en uno de los resultados se abrirá una ventana emergente en la que se mostrará información más detallada si la hubiera.
