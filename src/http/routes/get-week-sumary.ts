import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekSummary } from "../../functions/get-week-summury";

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async (app) => {
  app.get("/summary", async () => {
    const WeekSummary = await getWeekSummary();
    return { WeekSummary };
  });
};
