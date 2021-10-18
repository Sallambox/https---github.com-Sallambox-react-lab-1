export function DarkCard({darkOrSecondary}) {
    return (
        <div className={`card text-white bg-${darkOrSecondary} mb-3`} style={{maxWidth: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title">Secondary card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}   