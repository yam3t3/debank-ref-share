// Add an event listener to the button
document.getElementById("copyButton").addEventListener("click", function () {
  // Get the current tab's URL and generate the timestamped URL
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const originalUrl = currentTab.url;
    const timestamp = new Date().getTime();
    const newUrl = `${originalUrl}?t=${timestamp}&r=80808`;

    // Copy the generated URL to the clipboard
    navigator.clipboard.writeText(newUrl).then(() => {
      // Change the button text after copying
      document.getElementById("copyButton").innerText = "URL Copied!";
      console.log(`Copied to clipboard: ${newUrl}`);
    });
  });
});
