import { Header } from "@modules/Header";
import { CreateAndSell } from "./pages/CreateAndSell";
import { Footer } from "./pages/Footer";
import { Main } from "./pages/Main";
import { Top } from "./pages/Top";
import { useWindowSize } from "@hooks/useWindowSize";

export const App = () => {
  const size = useWindowSize();

  return (
    <>
      {size.width > 600 && <div style={{ height: "1.875rem" }} />}
      <Header />
      <Main />
      <Top />
      <CreateAndSell />
      <Footer />
      {size.width <= 600 && (
        <div
          style={{
            textTransform: "uppercase",
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: "110%",
            background: "#141416",
            padding: "1.75rem 6.25rem",
            color: "#fff",
            position: "fixed",
            bottom: "3.25rem",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "1.25rem",
            textWrap: "nowrap",
            zIndex: 250,
          }}
        >
          Connect Wallet
        </div>
      )}
    </>
  );
};
