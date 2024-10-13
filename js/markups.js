export const renderResult = ({ code, amount, full }) => {
  return `  <div class="form-result_item-icon icon">
               <img src="./images/arrow.svg" alt="" />
             </div>

            <div class="form-result_item-titles">
                 <div class="form-result_item-title">${code}</div>
                 <div class="form-result_item-full">${full}</div>
            </div>

             <div class="form-result_item-value">${amount.toFixed(2)}</div>`;
};
