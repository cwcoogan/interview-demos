import FieldService from "../js/MockService";
import isEmpty from "../utils/utils";

const saveForm = async (data) => {
  for (let key in data) {
    console.log(key, data[key])
    if (typeof data[key] === "string" || data[key] instanceof String)
    if (isEmpty(data[key]) && key != "default" && key != "choices")  {
      return;
    }
  }

  FieldService.saveField(data);
};

export default saveForm;
