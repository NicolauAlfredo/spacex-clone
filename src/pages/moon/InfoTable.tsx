import type { StatsItem } from "../../types/type";

type InfoTableProps = {
  stats: StatsItem[];
  className: string
};

export function InfoTable({ stats, className }: InfoTableProps) {
  return (
    <table className={`${className}__table`}>
      <tbody>
        {stats.map((stats, index) => (
          <tr key={index} className={`${className}__table-row}`}>
            <td className={`${className}__table-label`}>{stats.label}</td>
            <td className={`${className}__table-value`}>{stats.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
