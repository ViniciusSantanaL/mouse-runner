import { useTime } from "hooks/useTime";
import './styles.css'
export function Table(props: {title: string}) {
    const {times} = useTime();
    return (
    
    <table className="tokens-grid">
        <caption>{props.title}</caption>
      <thead>
        <tr>
          <th>Try</th>
          <th>Time in Seconds</th>
          <th>Time in Miliseconds</th>
        </tr>
      </thead>
      <tbody>
        {times.map((time, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{time.timeInSeconds < 10 ? '0' + time.timeInSeconds : time.timeInSeconds}</td>
              <td>{time.timeInMiliseconds < 10 ? '0' + time.timeInMiliseconds : time.timeInMiliseconds}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    )
}