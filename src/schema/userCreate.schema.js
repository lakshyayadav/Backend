exports.userCreateSchema = {
  type: "object",
  additionalProperties: false,
  required: ["firstName", "email", "lastName", "mobile", "bank", "ifsc"],
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
      email: true,
    },
    mobile: {
      type: "string",
    },
    bank: {
      type: "string",
    },
    ifsc: {
      type: "string",
    },
  },
};
