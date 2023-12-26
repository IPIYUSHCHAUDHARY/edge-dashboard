const attrTab = document.querySelector('#attribute-tab');
const attrNames = document.querySelectorAll('.overviewTable table thead th');

for (let item of attrNames) {
    item.addEventListener('click', function() {
        attrTab.click();
    })
}