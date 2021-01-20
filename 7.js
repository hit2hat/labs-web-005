let array = ['top1', 'top2', 'top3', 'middle1', 'middle2', 'middle3', 'bottom1', 'bottom2', 'bottom3'];


function randplace() {
    let numb = Math.floor(Math.random()*array.length);
    document.getElementById(array[numb]).innerHTML = '×';
    array.splice(numb, 1);
}


function clicks (a) {
    if (document.getElementById(a).innerHTML == '') {
        document.getElementById(a).innerHTML = '○';
    }
    else {
        alert('error');
        return 0;
    }
    for (let i=0; i<array.length; i++) {
        if (array[i] == a) {
            array.splice(i, 1);
        }
    }
    if (win()) {
        alert('Победа ноликов');
        return 0;
    }
    if (array.length == 0) {
        alert('Ничья');
        return 0;
    }
    document.getElementById('step').innerHTML = '× is next';
    randplace();
    if (win()) {
        alert('Победа крестиков');
        return 0;
    }
    document.getElementById('step').innerHTML = '○ is next';
}


function clean () {
    array = ['top1', 'top2', 'top3', 'middle1', 'middle2', 'middle3', 'bottom1', 'bottom2', 'bottom3'];
    for (let i=0; i<array.length; i++) {
        document.getElementById(array[i]).innerHTML = '';
    }
    document.getElementById('step').innerHTML = '○ is next';
}


function win() {
    if (document.getElementById('top1').innerHTML != '' &&
        document.getElementById('top1').innerHTML == document.getElementById('top2').innerHTML &&
        document.getElementById('top2').innerHTML == document.getElementById('top3').innerHTML) {
        return true;
    }
    if (document.getElementById('middle1').innerHTML !='' &&
        document.getElementById('middle1').innerHTML == document.getElementById('middle2').innerHTML &&
        document.getElementById('middle2').innerHTML == document.getElementById('middle3').innerHTML) {
        return true;
    }
    if (document.getElementById('bottom1').innerHTML !='' &&
        document.getElementById('bottom1').innerHTML == document.getElementById('bottom2').innerHTML &&
        document.getElementById('bottom2').innerHTML == document.getElementById('bottom3').innerHTML) {
        return true;
    }
    if (document.getElementById('top1').innerHTML !='' &&
        document.getElementById('top1').innerHTML == document.getElementById('middle1').innerHTML &&
        document.getElementById('middle1').innerHTML == document.getElementById('bottom1').innerHTML) {
        return true;
    }
    if (document.getElementById('top2').innerHTML !='' &&
        document.getElementById('top2').innerHTML == document.getElementById('middle2').innerHTML &&
        document.getElementById('middle2').innerHTML == document.getElementById('bottom2').innerHTML) {
        return true;
    }
    if (document.getElementById('top3').innerHTML !='' &&
        document.getElementById('top3').innerHTML == document.getElementById('middle3').innerHTML &&
        document.getElementById('middle3').innerHTML == document.getElementById('bottom3').innerHTML) {
        return true;
    }
    if (document.getElementById('top1').innerHTML !='' &&
        document.getElementById('top1').innerHTML == document.getElementById('middle2').innerHTML &&
        document.getElementById('middle2').innerHTML == document.getElementById('bottom3').innerHTML) {
        return true;
    }
    if (document.getElementById('top3').innerHTML !='' &&
        document.getElementById('top3').innerHTML == document.getElementById('middle2').innerHTML &&
        document.getElementById('middle2').innerHTML == document.getElementById('bottom1').innerHTML) {
        return true;
    }
    return false;
}