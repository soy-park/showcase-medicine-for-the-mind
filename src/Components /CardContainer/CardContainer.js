import React from "react";
import "./CardContainer.css";
import Encouragement from "src/Components/Encouragement/Encouragement";

function CardContainer({ quotes }) {
    const cards = quotes.map(quote => {
        return <Encouragement 
                    key={quote.id}
                    quote={quote.quoteText}
                    author={quote.quoteAuthor}
                />     
    })

    return (
        <section className="cards-container">
            {cards}
        </section>
    )
}

export default CardContainer