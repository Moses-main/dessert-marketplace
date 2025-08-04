// import ProductList from "./components/ProductList";
// import Navbar from "./components/Navbar";
// import CartDrawer from "./components/CartDrawer";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       <Navbar />
//       <ProductList />
//       <CartDrawer />
//     </div>
//   );
// }

import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[70%]">
          <ProductList />
        </div>
        <div className="w-full lg:w-[30%]">
          <CartDrawer />
        </div>
      </div>
    </div>
  );
}
