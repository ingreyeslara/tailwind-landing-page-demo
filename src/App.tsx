import Image from "./abc.jpg";
import Image2 from "./git.png";
function App() {
  const backgroundImageStyle = {
    backgroundImage: `url("${Image}")`,
    backgroundSize: "cover",
  };
  const backgroundImageStyle2 = {
    backgroundImage: `url("${Image2}")`,
    backgroundSize: "contain",
  };
  return (
    <div className="App">
      <div className=" text-white " style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-8 py-16">
          <div className=" max-w-xl grid grid-cols-1 gap-8">
            <h2 className="text-xl uppercase font-bold">INTEGRACIÓN CONTINUA GIT LAB</h2>
            <h1 className="text-6xl font-bold">
              ADMINISTRACIÓN DE PROYECTOS
            </h1>
            <p className="text-justify" >
            El archivo .gitlab-ci.yml sirve para configurar el comportamiento de Gitlab CI en cada proyecto. En el archivo se define la estructura y el orden de los pipelines y determina qué ejecutar con el Gitlab runner y qué decisiones tomar cuando condiciones específicas se cumplen (como cuando un proceso falla o termina exitosamente).
            </p>            
          </div>
        </div>
      </div>
      <div className="px-8 py-16">
        <div className="max-w-md mb-16">
          <h2 className="text-5xl">
             CI CONFIGURACIÓN
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <div>
            <h3 className="text-2xl font-bold mb-2">IMAGE</h3>
            <p className="text-justify">
            La primera opción de configuración es image, image sirve para determinar qué imagen se va utilizar para ejecutar el runner. Hay que recordar que, en su nivel más básico, los trabajos de CI son simplemente automatización de script, se tiene que determinar qué ambiente necesita el script para correr de manera exitosa. ¿Necesitas instalar dependencias desde NPM y ejecutar scripts de package.json? Entonces es muy probable que la imagen de Node sirva como base. Quizá se necesite correr pruebas unitarias de una aplicación de Python e instalar dependencias desde PyPi; entonces se debería instalar la imagen de Pyt
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">SCRIPT</h3>
            <p className="text-justify">
            El keyword image permite “preinstalar” los paquetes que el script necesitará para correr: desde sistema operativo y lenguajes de programación, hasta software específico como bases de datos.
            Un último punto, image puede utilizarse de manera global o por cada job que se ejecute. Es decir, si el proyecto lo requiere se puede utilizar una imagen de Node para un job y otra de Ruby para otro.
            </p>
          </div>
        </div>
      </div>
      <div className=" text-white " style={backgroundImageStyle2}>
      <div className="bg-gradient-to-r from-black px-8 py-16">
          <div className=" max-w-xl grid grid-cols-1 gap-8">
            <h2 className="text-xl uppercase font-bold">UNIVERSIDAD TECNOLÓGICA DE DURANGO</h2>
            <h2 className="text-6xl font-bold">
              NOMBRE DEL ALUMNO:
            </h2>
            <h1 className="text-6xl font-bold">
              CUENTA GIT:
            </h1>
            <h1 className="text-6xl font-bold">
              CUENTA GIT LAB:
            </h1>
            <h1 className="text-6xl font-bold">
              E-MAIL:
            </h1>                      
          </div>
        </div>
     </div>
    </div>     
  );
}
export default App;
