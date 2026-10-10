
$("pdfBtn").addEventListener("click", () => {
  const result = $("output").textContent.trim();

  if (!result) {
    alert("Buat draft gugatan terlebih dahulu.");
    return;
  }

  window.print();
});
