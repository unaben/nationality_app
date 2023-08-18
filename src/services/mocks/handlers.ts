import { rest } from "msw";

const nameNationalizeResponse = {
  count: 2346926,
  name: "john",
  country: [
    {
      country_id: "US",
      probability: 0.048398225615958565,
    },
    {
      country_id: "IM",
      probability: 0.04438246053773764,
    },
    {
      country_id: "IE",
      probability: 0.042102085396037124,
    },
  ],
};

export const handlers = [
  rest.get("https://api.nationalize.io/?name=john", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...nameNationalizeResponse }));
  }),
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "You must add request handler." })
    );
  }),
];
