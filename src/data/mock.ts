export const mockOrderBook = {
  bids: [
    { price: 13944677.734, size: 0.002, total: 0.0 },
    { price: 13871484.375, size: 0.0, total: 0.0 },
    { price: 13542968.75, size: 0.0, total: 0.0 },
    { price: 12885937.5, size: 0.0, total: 0.0 },
    { price: 11571875.0, size: 0.013, total: 0.01 },
    { price: 11143750.0, size: 0.001, total: 0.02 },
    { price: 10787500.0, size: 0.015, total: 0.03 },
    { price: 10737500.0, size: 0.0, total: 0.03 },
    { price: 10568976.3, size: 0.0, total: 0.03 },
    { price: 10514231.1, size: 0.0, total: 0.03 },
  ],
  asks: [
    { price: 14200000.0, size: 49.152, total: 49.15 },
    { price: 14641291.769, size: 0.007, total: 49.16 },
    { price: 15000000.0, size: 1.123, total: 50.28 },
    { price: 15516093.406, size: 0.004, total: 50.29 },
    { price: 16000000.0, size: 0.0, total: 50.29 },
    { price: 17000000.0, size: 1.002, total: 51.29 },
    { price: 17800000.0, size: 2.002, total: 53.29 },
    { price: 18000000.0, size: 1.0, total: 54.29 },
    { price: 19683625.464, size: 0.0, total: 54.29 },
    { price: 19839102.286, size: 1.0, total: 55.29 },
  ],
  spread: {
    value: 255322.27,
    percentage: 1.8,
  },
};

export const mockTrades = [
  { time: "10:52:01", price: 14070000.0, amount: 0.001, type: "buy" },
  { time: "10:52:00", price: 14070000.0, amount: 0.001, type: "sell" },
  { time: "10:51:59", price: 14070000.0, amount: 0.001, type: "buy" },
];

export const mockMarketInfo = {
  price: 14070000.0,
  change: -0.9,
  volume: 10658878.3,
  marketCap: 1950000000000.0,
  contract: "0x7764...fb19",
};

export const mockBalances = {
  ETH: 0.0,
  USD: 0.0,
};