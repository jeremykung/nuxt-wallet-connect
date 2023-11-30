import { useWeb3ModalTheme } from "@web3modal/ethers5/vue";

const { setThemeMode, setThemeVariables, themeMode, themeVariables } =
  useWeb3ModalTheme();

setThemeMode("dark");

setThemeVariables({
  "--w3m-color-mix": "#00BB7F",
  "--w3m-color-mix-strength": 40,
});
