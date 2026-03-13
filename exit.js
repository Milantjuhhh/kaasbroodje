function exitGame() {
    if (confirm("Weet je zeker dat je het spel wilt afsluiten?")) {
        window.close();

        // fallback als browser sluiten blokkeert
        setTimeout(() => {
            window.location.href = "about:blank";
        }, 100);
    }
}