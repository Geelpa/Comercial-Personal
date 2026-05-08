window.onload = () => {

    // selects
    document.querySelectorAll("select").forEach(select => {
        select.addEventListener("change", gerar);
    });

    // checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.addEventListener("change", gerar);
    });

    gerar();
};