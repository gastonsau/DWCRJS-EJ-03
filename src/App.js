
import './styles/App.css';
import Card from './components/Card'

function App() {
  const productos = [
    { nombre: 'Zapatilla Adidas', descripcion: 'Zapatilla Adidas color negro de tela', precio: 25000, sku: '1111111', cantDisponible: 30, id: 1 },
    { nombre: 'Remera cuello redondo', descripcion: 'Remera roja cuello redondo de algodón', precio: 5000, sku: '1111112', cantDisponible: 100, id: 2 },
    { nombre: 'Cinturón de cuero', descripcion: 'Cinturón de cuero de vaca marrón con hebilla metálica', precio: 2500, sku: '1111113', cantDisponible: 20, id: 3 },  
  ];
  console.log('ENT'+productos[0].nombre)
  return (
    <>
      <h1>Producto</h1>
      <Card 
      nombre = {productos[0].nombre} 
      descripcion = {productos[0].descripcion} 
      sku = {productos[0].sku} 
      precio = {productos[0].precio} 
      cantDisponible = {productos[0].cantDisponible}
       >
      </Card>
      
    </>
  );
}

export default App;
