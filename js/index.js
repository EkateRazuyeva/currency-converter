import variables from "./variables.js";
import state from "./state.js";
import { handleChange } from "./convert.js";

const { selects, success } = variables;

const renderCodeList = () => {
  selects.forEach((select) => {
    state.codes.forEach(([code]) => {
      const element = document.createElement("option");
      element.value = code;
      element.innerText = code;
      select.insertAdjacentElement("beforeend", element);
    });

    select.addEventListener("change", handleChange);
  });
};

export const fetchCodes = async () => {
  try {
    const response = await fetch(`${state.url}/codes`);
    const data = await response.json();

    if (data.result === success) {
      state.codes = data.supported_codes;
      renderCodeList();
    }
  } catch (error) {
    console.log(error);
  }
};
