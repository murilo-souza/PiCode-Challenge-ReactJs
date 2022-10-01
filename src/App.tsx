import { GlobalStyles } from "./global/GlobalStyles";
import { RegisterProvider } from "./hooks/useRegister";
import { WebRoutes } from "./routes/web.routes";

function App() {
  return (
    <RegisterProvider>
      <WebRoutes />
      <GlobalStyles />
    </RegisterProvider>
  );
}

export default App;
