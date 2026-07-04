export type StarlinkPlan = {
  title: string;
  description: string;
  features?: string[];
  price: number;
  priceLabel: string;
};

export type StarlinkPlanGroup = {
  plans: StarlinkPlan[];
  footer: string;
};