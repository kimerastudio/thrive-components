import "./App.css";
import { ComponentsShowcase } from "./pages/ComponentsShowcase";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-gray-800">
            Thrive UI Components
          </h1>
        </div>
      </header>
      <main>
        <ComponentsShowcase />
      </main>
    </div>
  );
}

export default App;
