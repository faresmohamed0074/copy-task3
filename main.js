function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((copyButton) => {
  copyButton.addEventListener("click", () => {
    const codeSample = copyButton.previousElementSibling;
    const codeText = codeSample.textContent.trim();
    copyToClipboard(codeText);

    // Optional: Provide visual feedback
    copyButton.textContent = "Copied!";

    // Reset the button text after some time (e.g., 2 seconds)
    setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 2000);
  });
});
