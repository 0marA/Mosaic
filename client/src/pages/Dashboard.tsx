import Spotify from "../components/SpotifyAuthBase";
import Weather from "../components/Weather";
import Quotes from "../components/Quotes";
import Jokes from "../components/Jokes";
import Facts from "../components/Facts";
import Tuya from "../components/Tuya";
export default function Dashboard() {
    let jokeQuoteOrFact;

    let randomNum = Math.random();
    if (randomNum > 0.3) jokeQuoteOrFact = <Jokes />;
    else if (randomNum > 0.6) jokeQuoteOrFact = <Quotes />;
    else jokeQuoteOrFact = <Facts />;

    return (
        <>
            <div className="WidgetArea">
                <div
                    className="Widget"
                    style={{ width: "40em", height: "9em" }}
                >
                    <p
                        className="WidgetContent"
                        style={{
                            paddingBottom: ".4em",
                            display: "grid",
                            placeContent: "center",
                        }}
                    >
                        Now Playing
                    </p>
                    {/*<Spotify />*/}
                </div>
            </div>
            <div
                className="Widget"
                style={{
                    width: "17em",
                    right: "2em",
                    marginTop: "4em",
                    position: "absolute",
                }}
            >
                <Weather />
            </div>
            <div
                className="Widget"
                style={{
                    width: "17em",
                    position: "absolute",
                    left: "2em",
                    marginTop: "6em",
                    height: "15em",
                }}
            >
                {jokeQuoteOrFact}
            </div>
            <div
                className="Widget"
                style={{
                    width: "17em",
                    position: "absolute",
                    right: "2em",
                    top: "2em",
                    height: "13em",
                }}
            >
                <Tuya />
            </div>
        </>
    );
}
