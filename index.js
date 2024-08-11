const zod = require("zod");
const user = {
  name: "testName",
  password: "testPassword",
  role: "teacher",
};
const user2 = {
  name: "testName",
  password: "testPass",
  role: "student",
};
const user3 = {
  name: 2,
  password: "testPass",
  role: "random",
};
const validateInput = (n) => {
  const schema = zod.string();
  const response = schema.safeParse(n);
  console.log(response);
};
const validateInput2 = (obj) => {
  const schema = zod.object({
    name: zod.string(),
    password: zod.string().min(10),
    role: zod.literal("student").or(zod.literal("teacher")),
  });
  const response = schema.safeParse(obj);
  console.log(response);
};
validateInput("Namaste");
validateInput2(user);
validateInput2(user2);
validateInput2(user3);
