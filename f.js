for (let i = 0; i < 500; i++) {
  setTimeout(() => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    document.querySelector(".iD").innerHTML +=
      `<br>[2025-12-04 ${h}:${m}:${s}] ERROR:System.Core: E1024 // Critical failure: Invalid state transition`;
  }, 200 * i);
}
