import { format, parseISO } from "date-fns";

const HoverInfo = ( { active, payload, label }) => {
    if (active) {
        return (
        <div className="tooltip">
            <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
            <p>{(payload[0].value.toFixed(2) * 9/5 * 100) + 32} °</p>
        </div>
        );
    }
    return null;
}

export default HoverInfo