import GoalProgress from "../components/tracking/GoalProgress";
import { useEffect,useState } from "react";
import { get } from "../services/httpService";

export default function TrackProgress() {
    const [goal, setGoal] = useState([]);

    const { idUsuario } = 1;
    useEffect(() =>
        {
            get(`/habitos/GetHabit/${idUsuario}`)
            .then((data) =>{
                setGoal(data);
            })
        }, []);




    return (
        <div>
            <h1>Seguimiento de Mi Meta</h1>
            <GoalProgress goal={goal} />
        </div>
    );
}
