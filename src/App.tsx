import { GlobalStyles } from "./global/GlobalStyles";
import { Books } from "./pages/Books";

import { Students } from "./pages/Students";
import { Navbar } from "./components/Navbar";
import { WebRoutes } from "./routes/web.routes";

function App() {
  return (
    <>
      <WebRoutes />
      <GlobalStyles />
    </>
  );
}

export default App;
