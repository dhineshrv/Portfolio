
import { ThemeProvider } from "@/hooks/use-theme";
import { PortfolioLayout } from "@/components/portfolio-layout";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <PortfolioLayout />
    </ThemeProvider>
  );
};

export default Index;
