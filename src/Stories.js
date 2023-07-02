function ArrayStories(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} alt="9gag" />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}

export default function Stories() {

    const array = [
        { name: "9gag", image: "assets/img/9gag.svg" },
        { name: "meowed", image: "assets/img/meowed.svg" },
        { name: "barked", image: "assets/img/barked.svg" },
        { name: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg" },
        { name: "wawawicomics", image: "assets/img/wawawicomics.svg" },
        { name: "respondeai", image: "assets/img/respondeai.svg" },
        { name: "filomoderna", image: "assets/img/filomoderna.svg" },
        { name: "memeriagourmet", image: "assets/img/memeriagourmet.svg" }
    ]

    return (
        <div class="stories">

            {array.map((story) => <ArrayStories key = {story.name} name = {story.name} image = {story.image} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}