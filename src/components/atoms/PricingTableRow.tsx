type PricingTableRowProps = {
  readonly label: string;
  readonly price: number;
};

export default function PricingTableRow({
  label,
  price,
}: PricingTableRowProps) {
  return (
    <section className="mb-3 px-4 py-3 grid grid-cols-4 gap-4 border border-zinc-100 rounded-md shadow-md">
      <div className="col-span-3 border-r border-zinc-200">{label}</div>
      <div className="place-self-center">€{price}</div>
    </section>
  );
}
