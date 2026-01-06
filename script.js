const VAULT_PASS = "vault123"; // demo password
const STORAGE_KEY = "vault_files";

let files = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function unlock() {
  if (pass.value !== VAULT_PASS) {
    error.innerText = "Incorrect password";
    return;
  }
  lockDiv(false);
  render();
}

function lock() {
  lockDiv(true);
}

function lockDiv(isLocked) {
  document.getElementById("lock").style.display = isLocked ? "block" : "none";
  document.getElementById("vault").style.display = isLocked ? "none" : "block";
  pass.value = "";
}

function addFile() {
  const file = document.getElementById("file").files[0];
  if (!file) return;

  files.push({
    id: Date.now(),
    name: file.name,
    size: file.size
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(files));
  render();
}

function render() {
  const list = document.getElementById("files");
  list.innerHTML = "";

  files.forEach(f => {
    const li = document.createElement("li");
    li.innerText = `${f.name} (${Math.round(f.size / 1024)} KB)`;
    list.appendChild(li);
  });
}
