import { useRecoilValue } from "recoil";
import { stats } from "../store/selectors/selectors";

export function ListStat() {
    const p = useRecoilValue(stats); 
    return (
      <div>
        <ul>
          <li key={1}>Total items: {p.totalNum}</li>
          <li key={2}>Items Completed: {p.completed}</li>
          <li key={3}>Items not completed: {p.uncompleted}</li>
          <li key={4}>Percent completed: {p.percentCompleted}</li>
          <li key={5}>Text not completed: {p.notCompleted}</li>
        </ul>
      </div>
    );
  }