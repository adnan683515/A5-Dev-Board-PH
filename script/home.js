const buttonGroup = document.getElementsByClassName('completed')
const titleGroup = document.getElementsByClassName('title')
document.getElementById('taskCount').innerText = '0' + titleGroup.length;
const specificDate = new Date();
const month = specificDate.getMonth() + 1;
const day = specificDate.getDate();
const year = specificDate.getFullYear();
const days = [
    'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
];
const WeeKDays = days[specificDate.getDay()];
document.getElementById('nameOfDay').innerText = WeeKDays;
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const TodayTime = `${monthNames[month - 1]}  ${day}, ${year}`;
document.getElementById('nowDate').innerText = TodayTime;

for (let i = 0; i < buttonGroup.length; i++) {
    const btn = buttonGroup[i];
    btn.addEventListener('click', function () {
        const LastTask = parseInt(document.getElementById('taskCount').innerText);
        if (LastTask === 1) {
            alert("Board update Successfully!")
        }
        alert("You Have Completed The Task")
        const index = i;
        btn.disabled = true;
        const Title = titleGroup[index].innerText;
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const PM_AM = hours > 12 ? 'PM' : "AM";
        const time = `${hours}:${minutes}:${seconds} ${PM_AM}`;
        const parent = document.getElementById('taskCompletedBox');
        parent.classList.remove('hidden')
        const h = document.createElement('h1');
        h.classList.add('bg-slate-100')
        h.classList.add('px-2')
        h.classList.add('my-2')
        h.classList.add('rounded-lg')
        h.innerText = `
            Your Have Completed The Task ${Title} at ${time}`
        document.getElementById('taskCount').innerText = `0${parseInt(document.getElementById('taskCount').innerText) - 1}`;
        document.getElementById('totalTask').innerText = `${parseInt(document.getElementById('totalTask').innerText) + 1}`;
        parent.appendChild(h)
    })
}
document.getElementById('clearHistory').addEventListener('click', function () {

    document.getElementById('taskCompletedBox').innerHTML = ""

})


document.getElementById('colour-btn-cng').addEventListener('click', function () {


    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    document.getElementById('fullBody').style.background=color;



})

