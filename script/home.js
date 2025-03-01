const buttonGroup = document.getElementsByClassName('completed')
const titleGroup = document.getElementsByClassName('title')
document.getElementById('taskCount').innerText= '0' + titleGroup.length;
for (let i = 0; i < buttonGroup.length; i++) {
    const btn = buttonGroup[i];

    btn.addEventListener('click', function () {
        alert("You Have Completed The Task")
        const index = i;
        btn.disabled = true;
        const Title = titleGroup[index].innerText;
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const time = `${hours}:${minutes}:${seconds}`;


        const parent = document.getElementById('taskCompletedBox');
        parent.classList.remove('hidden')
        const h = document.createElement('h1');
        h.classList.add('bg-white')
        h.classList.add('px-2')
        h.classList.add('my-2')
        h.classList.add('rounded-lg')
        h.innerText=`
            Your Have Completed The Task ${Title} at ${time}
        
        `   

        document.getElementById('taskCount').innerText= `0${parseInt(document.getElementById('taskCount').innerText)-1}`;
        parent.appendChild(h)


    })
}
