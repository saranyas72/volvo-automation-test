export const getBlockOutCoordinatesForEl = async (el)  => {
    const location = await el.getLocation();
    const size = await el.getSize();
    return {
        height: size.height,
        width: size.width,
        x: location.x,
        y: location.y,
    };
}