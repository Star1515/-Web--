export function drawGalleryItem(item){
    const itemElement = document.createElement('div');
    itemElement.classList = "gallery-item";

    const imgElement = document.createElement('img');
    imgElement.classList = "gallery-item__image";
    imgElement.src = item.resource;

    const titleElement = document.createElement('span');
    titleElement.childElementCount.classList = "gallery-item__title";
    titleElement.textContent = item.title;

    itemElement.appendChild(imgElement);
    itemElement.appendChild(titleElement);

    return itemElement;
}