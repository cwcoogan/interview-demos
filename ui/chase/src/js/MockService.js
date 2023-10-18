var FieldService =  {
	getField: function(id) {
		return {
		  "label": "Sales region",
		  "required": false,
		  "choices": [
			"Asia",
			"Australia",
			"Western Europe",
			"North America",
			"Eastern Europe",
			"Latin America",
			"Middle East and Africa"
		  ],
		  "displayAlpha": true,
		  "default": "North America"
		}
	},
	async saveField (data) {
		try {
			const response = await fetch("http://www.mocky.io/v2/566061f21200008e3aabd919", 
			  {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			  });
			if (response.ok) {
			  console.log("Post Data:", data);
			} else {
			  console.error("Error posting data");
			  return -1;
			}
		  } catch {
			console.error("Error posting data:");
			return -1;
		  }
	}
}

export default FieldService;