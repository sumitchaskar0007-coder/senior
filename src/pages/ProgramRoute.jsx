import { useParams } from "react-router-dom";
import ProgramPage from "../components/ProgramPage";
import { programs } from "../data/programData";

export default function ProgramRoute() {
    const { slug } = useParams();
    const program = programs[slug];

    if (!program) {
        return <div>Program Not Found</div>;
    }

    return <ProgramPage data={program} />;
}
