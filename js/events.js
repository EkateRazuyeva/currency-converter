import variables from "./variables.js";
import { fetchCodes, handleTabClick } from "./index.js";
import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";

const { amountInput, form, switchButton, tabs } = variables;

fetchCodes();

amountInput.addEventListener("keyup", handleInput);
form.addEventListener("submit", handleSubmit);
switchButton.addEventListener("click", switchCurrencies);
tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));
