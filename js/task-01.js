const listEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${listEl.length}`);


listEl.forEach((el) => {
    const headingsEl = el.firstElementChild; 
    const itemsEl = el.lastElementChild;
    const itemEl = itemsEl.children;
    console.log(`Category: ${headingsEl.textContent}
Elements: ${itemEl.length}`);
});


