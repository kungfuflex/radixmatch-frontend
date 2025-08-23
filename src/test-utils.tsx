import { render, RenderOptions } from '@testing-library/react';
import { WalletProvider } from './context/wallet-provider';
import { ThemeProvider } from './components/theme-provider';
import { ReactElement } from 'react';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <WalletProvider>{children}</WalletProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };