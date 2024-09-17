function navBar() {
    let navs = document.querySelectorAll("li:not(dropped-content)");

    return {
        "getNavs": return navs,
    }
}