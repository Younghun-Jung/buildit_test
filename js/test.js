var objs = [];

(function() {
    var max = 10000;
    var names = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];
    var ages = [1, 2, 3, 4, 5, 6, 7];
    var obj;

    for(var i=0; i<max; i++) {
        obj = {
            name: names[Math.floor(Math.random() * 5)],
            age: ages[Math.floor(Math.random() * 7)]
        }

        objs.push(obj);
    }


})()
