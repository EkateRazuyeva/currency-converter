import state from "./state.js";
import variables from "./variables.js";

const { success } = variables;

export const handleChange = ({ target: { value, name } }) => {
  state.pair = {
    ...state.pair,
    [name]: value,
  };
};

export const handleInput = ({ target: { value, name } }) => {
  state[name] = Number(value);
};

const insertResults = ({
  base_code: baseCode,
  target_code: targetCode,
  convertion_rate: rate,
  convertion_result: result,
  time_last_update_utc: time,
}) => {};

export const handleSubmit = async (e) => {
  e?.preventDefault();

  const {
    url,
    amount,
    pair: { from, to },
  } = state;

  state.loading = true;

  if (!amount || !from || !to) return;

  try {
    const response = await fetch(`${url}/pair/${from}/${to}/${amount}`);
    const data = await response.json();

    if (data.result === success) insertResults(data);

    state.loading = false;
  } catch (error) {
    console.log(error);
  }
};
