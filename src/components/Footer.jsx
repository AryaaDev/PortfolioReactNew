import { useEffect, useRef, useState } from "react";

export default function Footer() {

    const [visitorTotal, setVisitorTotal] = useState(null);
    const [visitorError, setVisitorError] = useState(false);

    const requestStarted = useRef(false);

    const counterEnabled =
        import.meta.env.PROD ||
        import.meta.env.VITE_ENABLE_VISITOR_COUNTER === "true";

    useEffect(() => {
        if (!counterEnabled || requestStarted.current) return;

        requestStarted.current = true;

        async function trackVisitor() {
            try {
                const response = await fetch(
                    "https://aryaadev-visitor-api.vercel.app/api/visitors",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: "{}"
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.error || "Counter gagal dimuat"
                    );
                }

                const total = Number(data.totalVisitors);

                if (!Number.isFinite(total)) {
                    throw new Error("Nilai counter tidak valid");
                }

                setVisitorTotal(total);
                setVisitorError(false);

            } catch (error) {
                console.error("Visitor counter error:", error);
                setVisitorError(true);
            }
        }

        trackVisitor();
    }, [counterEnabled]);

    return (
        <footer className="footer" id="footer">
            <div className="bagian-footer">

                <a href="#home" className="footer-brand">
                    Arya<span>Dev.</span>
                </a>

                <div className="footer-info">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Muhamad Arya Darmawan
                    </p>

                    <p className="footer-text">
                        Dibangun dengan semangat belajar, berkarya dan berinovasi.
                    </p>
                </div>

                <div className="footer-kanan">
                    <a href="#home" className="back-to-top">
                        <span>Balik ke atas</span>
                        <i className="bx bx-up-arrow-alt"></i>
                    </a>


                    <div
                        className="visitor-counter"
                        aria-label="Total kunjungan portfolio"
                        aria-live="polite"
                    >
                        <span className="visitor-counter-icon" aria-hidden="true">
                            <i className="bx bx-show-alt"></i>
                        </span>

                        <span className="visitor-counter-text">
                            VISITORS
                        </span>

                        <span
                            className="visitor-counter-gap"
                            aria-hidden="true"
                        ></span>


                        <strong className="visitor-counter-angka">
                            {!counterEnabled
                                ? "—"
                                : visitorTotal !== null
                                    ? visitorTotal.toLocaleString("id-ID")
                                    : visitorError
                                        ? "—"
                                        : "…"}
                        </strong>
                    </div>


                </div>

            </div>
        </footer>
    );
}