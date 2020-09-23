export default function scrollHorizontal (event,item) {
    if (event.deltaY > 0) {
        item.scrollLeft += screen.availWidth / 2;
    } else {
        item.scrollLeft -= screen.availWidth / 2;
    }
}