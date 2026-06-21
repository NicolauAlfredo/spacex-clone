import type { StatsItem } from "../../types/Type";

type InfoTableProps = {
  stats: StatsItem[];
  className: string;
};

export function InfoTable({ stats, className }: InfoTableProps) {
  return (
    <table className={`${className}__table`}>
      <tbody>
        {stats.map((stat, index) => (
          <tr key={index} className={`${className}__table-row`}>
            <td className={`${className}__table-label`}>{stat.label}</td>
            <td className={`${className}__table-value`}>{stat.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
