import type { InfoTableProps } from "../../../../../../types/infoTable.types";
import "./InfoTable.css";

export function InfoTable({ stats, className }: InfoTableProps) {
  return (
    <table className={`${className}__table`}>
      <tbody>
        {stats.map((stat) => (
          <tr key={stat.label} className={`${className}__table-row`}>
            <td className={`${className}__table-label`}>{stat.label}</td>
            <td className={`${className}__table-value`}>{stat.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
