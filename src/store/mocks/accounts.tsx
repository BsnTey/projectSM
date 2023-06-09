export interface Account {
  token: string;
  dateCheck: string;
  amount: number;
}

let accountsMock: Account[] = [
  {
    token: "bd09a126-e0d6-4eac-a754-9c5f3d404255",
    dateCheck: "09.04.2022 14:52",
    amount: 12,
  },
  {
    token: "a4e03a5f-db74-4a61-b408-29815f231fcd",
    dateCheck: "09.04.2022 14:52",
    amount: 228,
  },
  {
    token: "bd09a136-e0d6-4eac-a758-9c5f3d407250",
    dateCheck: "09.04.2022 14:52",
    amount: 124,
  },
  {
    token: "bd03a136-e0d6-4eac-a754-9c5f3d407257",
    dateCheck: "09.04.2022 14:52",
    amount: 1245,
  },
  {
    token: "2d2dc967-a6b8-455c-8515-01e7583bcf92",
    dateCheck: "09.04.2022 14:52",
    amount: 452,
  },
  {
    token: "5ce05391-b437-4cc1-a824-d19e8e18ecd1",
    dateCheck: "09.04.2022 14:52",
    amount: 1348,
  },
  {
    token: "bd09a136-e0d6-4eac-a754-9c5f3d407252",
    dateCheck: "09.04.2022 14:52",
    amount: 10485,
  },
  {
    token: "bd09a137-e0d6-4eac-a754-9c5f3d407253",
    dateCheck: "09.04.2022 14:52",
    amount: 456554,
  },
];

export default accountsMock;
