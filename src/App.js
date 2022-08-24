// importando los componentes desde carpeta components
import Header from './components/Header';
import Tarjeta from './components/Tarjeta';

// funcion del componente App
function App() {
  return (
    /* llamado a los componentes importados */
    <div className="App">
      <Header />
      <Tarjeta />
    </div>
  );
}


export default App;
