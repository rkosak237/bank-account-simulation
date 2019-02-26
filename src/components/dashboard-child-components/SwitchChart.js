import * as React from "react";

export default ({ event}) => (
    <article className="summary__analysis">
        <div className="toggle">
            <input
                onClick={event}
                type="checkbox"
            />
            <span className="toggle__btn" />
            <span className="toggle__label" />
            <span className="toggle__bg" />
        </div>
    </article>
)