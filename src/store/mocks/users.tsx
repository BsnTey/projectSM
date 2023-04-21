interface User {
  id: number | undefined;
  name: string | undefined;
  token: string | undefined;
  email: string | undefined;
}

const usersMock: User[] = [
  {
    id: 1,
    name: "Иван",
    token: "20f5a17a-5a44-41f8-9169-54eb727eed21",
    email: "faslfh34@mail.ru",
  },
];

export default usersMock;
