//Objective is to find earliest time slot that works for both slots 
//and is of given duration.

let slots1 = [[10,50],[60,120],[140,210]]
let slots2 = [[0,15],[60,70]]
let duration = 8


//O((n + m)log(n + m)) solution that sorts the slots first then uses
//two pointers to iterate and find the intersections between them.
//Note: This solution is similar to 'Interval List Connections'

//Sort the two arrays according to start time
slots1.sort((a,b) => {
    return a[0] - b[0]
})

slots2.sort((a,b) => {
    return a[0] - b[0]
})

let p1 = 0
let p2 = 0
let result = []

while (p1 < slots1.length && p2 < slots2.length) {
    //Find the intersection; if the intersection is of 
    //the duration or more, return it
    let startTime = Math.max(slots1[p1][0], slots2[p2][0])
    let endTime = Math.min(slots1[p1][1], slots2[p2][1])
    if (endTime - startTime >= duration) {
        result.push(startTime, startTime + duration)
        break
    }
    
    //Move the pointer of the interval with smaller end time
    if (slots1[p1][1] < slots2[p2][1]) {
        p1++
    } else {
        p2++
    }
}

return result