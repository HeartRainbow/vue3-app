const arr = [
    {
        min: 50,
        max: 60
    },
    {
        min: 40,
        max: 50
    },
    {
        min: 30,
        max: 40
    },
    {
        min: 20,
        max: 30
    },
    {
        min: 10,
        max: 20
    },
]

function change(val, i) {
    arr[i - 1].min = val
    arr[i].max = val;

    arr.forEach((item, index) => {
        if(index < i) {
            arr[i - index - 1].min = arr[i - index].max;
            if (i - index > 1) {
                arr[i - index -1].max = arr[i - index -1].min + 1;
            }
        }

    })
    arr[0].max = -1;
}

change(100, 3);
console.log(arr);