import FieldService from "../js/MockService";
import isEmpty from "../utils/utils";

const saveForm = async (data) => {
  for (let key in data) {
    if (typeof data[key] === "string" || data[key] instanceof String)
      if (isEmpty(data[key]) && key != "default" && key != "choices") {
        return;
      }
  }
  data.choices = data.choices.filter((choice) => choice != "" && choice != " ");

  if (!data.choices.includes(data.default) && !isEmpty(data.default)) data.choices.push(data.default);

  const response = await FieldService.saveField(data);
  console.log(response);
  return response;
};

export default saveForm;
