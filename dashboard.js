// ===============================
// Login Verification
// ===============================

if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

// ===============================
// Welcome User
// ===============================

let username = localStorage.getItem("username") || "User";

document.getElementById("welcome").innerHTML =
    "👋 Welcome, " + username;

document.getElementById("date").innerHTML =
    "📅 " + new Date().toLocaleDateString();

// ===============================
// Upload Counter
// ===============================

let uploadCount = 0;

// ===============================
// Identify File
// ===============================

function identifyFile() {

    const input = document.getElementById("file");

    if (input.files.length === 0) {
        alert("Please select a file.");
        return;
    }

    const file = input.files[0];

    uploadCount++;

    // File Name
    document.getElementById("filename").innerHTML =
        "📄 File Name : " + file.name;

    // Extension
    let extension = "";

    if (file.name.includes(".")) {
        extension = file.name.split(".").pop().toLowerCase();
    }

    document.getElementById("extension").innerHTML =
        "📁 Extension : " + extension;

    // Category
    document.getElementById("category").innerHTML =
        "🏷 Category : " + getType(extension);

    // MIME Type
    document.getElementById("mime").innerHTML =
        "🌐 MIME Type : " + (file.type || "Unknown");

    // Size
    let size;

    if (file.size < 1024) {
        size = file.size + " Bytes";
    }
    else if (file.size < 1024 * 1024) {
        size = (file.size / 1024).toFixed(2) + " KB";
    }
    else {
        size = (file.size / (1024 * 1024)).toFixed(2) + " MB";
    }

    document.getElementById("size").innerHTML =
        "📦 Size : " + size;

    // Last Modified
    document.getElementById("modified").innerHTML =
        "📅 Last Modified : " +
        new Date(file.lastModified).toLocaleString();

    // Statistics
    document.getElementById("count").innerHTML =
        "📊 Files Uploaded : " + uploadCount;

    document.getElementById("lastfile").innerHTML =
        "📝 Last Uploaded : " + file.name;

    // Image Preview
    const preview = document.getElementById("imagePreview");

    if (file.type.startsWith("image/")) {

        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };

        reader.readAsDataURL(file);

    } else {

        preview.style.display = "none";
        preview.src = "";

    }

}

// ===============================
// Detect File Type
// ===============================

function getType(ext) {

    switch (ext) {

        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
        case "bmp":
        case "webp":
            return "🖼 Image File";

        case "pdf":
            return "📄 PDF Document";

        case "doc":
        case "docx":
            return "📝 Word Document";

        case "xls":
        case "xlsx":
            return "📊 Excel Spreadsheet";

        case "ppt":
        case "pptx":
            return "📽 PowerPoint Presentation";

        case "txt":
            return "📃 Text File";

        case "mp3":
        case "wav":
        case "aac":
            return "🎵 Audio File";

        case "mp4":
        case "avi":
        case "mov":
        case "mkv":
            return "🎬 Video File";

        case "zip":
        case "rar":
        case "7z":
            return "🗜 Compressed File";

        case "html":
        case "css":
        case "js":
        case "java":
        case "py":
        case "cpp":
        case "c":
            return "💻 Source Code";

        default:
            return "❓ Unknown File";
    }

}

// ===============================
// Logout
// ===============================

function logout() {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    window.location.href = "index.html";

}
// ==========================
// Theme Toggle
// ==========================

window.onload = function () {

    let mode = localStorage.getItem("theme");

    if (mode == "dark") {

        document.body.classList.add("dark");

        document.getElementById("themeBtn").innerHTML =
            "☀️";

    }

    else {

        document.body.classList.add("light");

    }

}

function toggleTheme(){

    if(document.body.classList.contains("dark")){

        document.body.classList.remove("dark");

        document.body.classList.add("light");

        localStorage.setItem("theme","light");

        document.getElementById("themeBtn").innerHTML =
            "🌙";

    }

    else{

        document.body.classList.remove("light");

        document.body.classList.add("dark");

        localStorage.setItem("theme","dark");

        document.getElementById("themeBtn").innerHTML =
            "☀️";

    }

}
