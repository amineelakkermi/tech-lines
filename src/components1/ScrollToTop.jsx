import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY >= 100 ? setIsVisible(true) : setIsVisible(false);
        });
    }, []);

    const goTOtop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <button
                className="btn-Scroll"
                style={{
                    display: isVisible ? "flex" : "none", // Correct display logic
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#007bff",
                    borderRadius: "10px",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    zIndex: "999",
                }}
                onClick={goTOtop}
            >
                <FaArrowUp size={24} />
            </button>
        </div>
    );
};

export default ScrollTop;
