export function displayTodayDate() {
    let element = document.getElementById('date');
    element.innerText = new Date().toDateString();
}
