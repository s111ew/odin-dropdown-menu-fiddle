const nav = {
    nodes: document.querySelectorAll("li:not(.dropped-content)"),
    dropped: document.querySelectorAll(".dropped-content")
};

function addActiveListeners() {
    const navContainer = document.querySelector("ul");
    navContainer.addEventListener("click", handleNodeClick);
}

function handleNodeClick(event) {
    const target = event.target.closest("li:not(.dropped-content)");
    if (!target) return;

    const nodes = nav.nodes;
    
    hideDropdowns();

    if (target.classList.contains("active")) {
        target.classList.remove("active");
    } else {
        nodes.forEach(node => node.classList.remove("active"));
        target.classList.add("active");
        displayDropdown(target);
    }
}

function displayDropdown(node) {
    if (node.classList.contains("dropdown") && node.classList.contains("active")) {
        const category = ["category", "posts", "extensions"].find(c => node.classList.contains(c));

        if (category) {
            nav.dropped.forEach(li => {
                if (li.classList.contains(category)) {
                    li.classList.remove("hidden");
                }
            });
        }
    }
}

function hideDropdowns() {
    nav.dropped.forEach(node => node.classList.add("hidden"));
}

document.addEventListener("DOMContentLoaded", addActiveListeners);