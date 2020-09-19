export default function scrollHorizontal (event,item) {
    if (event.deltaY > 0) {
        item.scrollLeft += 10;
    } else {
        item.scrollLeft -= 10;
    }
}