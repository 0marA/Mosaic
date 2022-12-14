import { useState } from "react";
import lampOn from "../imgs/CustomIcons/lampOn.png";
import lampOff from "../imgs/CustomIcons/lampOff2.png";
import axios from "axios";
export default function Tuya() {
    const [successIcon, setSuccessIcon] = useState(false);
    const lampsOn = async () => {
        const request = await axios.get(
            `${process.env.REACT_APP_CLIENT_URL}/.netlify/functions/lampsOn`
        );
        if (request.data.message === "success") {
            setSuccessIcon(true);
            setTimeout(() => {
                setSuccessIcon(false);
            }, 2500);
        }
    };
    const lampsOff = async () => {
        const request = await axios.get(
            `${process.env.REACT_APP_CLIENT_URL}/.netlify/functions/lampsOff`
        );
        if (request.data.message === "success") {
            setSuccessIcon(true);
            setTimeout(() => {
                setSuccessIcon(false);
            }, 2500);
        }
    };

    return (
        <>
            <p
                className="WidgetContent"
                style={{
                    display: "grid",
                    placeContent: "center",
                    marginTop: "-.2em",
                    borderRadius: ".2em",
                    backgroundColor: "rgb(245, 182, 115)",
                }}
            >
                Control {successIcon ? "" : "💡"}
            </p>
            <div className="WidgetContent" style={{ marginTop: "-.3em" }}>
                <button>
                    <img
                        src={lampOff}
                        alt="lamp"
                        onClick={lampsOff}
                        style={{
                            width: "100px",
                            height: "100px",
                            position: "absolute",
                            left: "1em",
                        }}
                    />
                </button>
                <button>
                    <img
                        src={lampOn}
                        alt="lamp"
                        onClick={lampsOn}
                        style={{
                            width: "100px",
                            height: "100px",
                            marginLeft: "3em",
                            position: "absolute",
                            left: "1em",
                        }}
                    />
                </button>
                <div
                    className="wrapper"
                    style={{ display: successIcon ? "" : "none" }}
                >
                    <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                    >
                        <circle
                            className="checkmark__circle"
                            cx="26"
                            cy="26"
                            r="25"
                            fill="none"
                        />
                        <path
                            className="checkmark__check"
                            fill="none"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}
