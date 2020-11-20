import React from "react";

const Fundations = () => {
    return (
        <div className="fundations">
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className="fundation">
                <div className="fundation__left">
                    <h1>Fundacja "Dbam o Zdrowie"</h1>
                    <h2>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</h2>
                </div>
                <div>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
            </div>
            <div className="fundation">
                <div className="fundation__left">
                    <h1>Fundacja "Dla dzieci"</h1>
                    <h2>Cel i misja: Pomoc dzieciom z ubogich rodzin.</h2>
                </div>
                <div>
                    <p>ubrania, meble, zabawki</p>
                </div>
            </div>
            <div className="fundation">
                <div className="fundation__left">
                    <h1>Orgnizacja "Lorem Ipsum 1"</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque</h2>
                </div>
                <div>
                    <p>Lorem, ipsum, dolor, sit, amet</p>
                </div>
            </div>
            <div className="pages">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    )
}
export default Fundations