function tell_fortune(){
    const currentDate = new Date();
    input = document.getElementById("input");
    output = document.getElementById("fortune");
    characters = ['u', 'j', 'w', 'z', 'i', 'c', 'v', 'd', 'h', 's', 'g', 'k', 'm', 'y', 'q', 'e', 'a', 't', 'b', 'p', 'o', 'x', 'n', 'r', 'f', 'l']
    var score = 0;
    for(let i = 0;i<input.value.length;i++){
        score = score + characters.indexOf(input.value[i])**2 + 1
    }
    const futureDate = new Date(currentDate.getTime() + score * 24 * 60 * 60 * 1000);
    const year = futureDate.getFullYear();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[futureDate.getMonth()];
    const day = String(futureDate.getDate()).padStart(2, '0');

    const dateString = `This will happen in ${year} on ${month} ${day}.`;
    output.innerHTML = dateString;
}