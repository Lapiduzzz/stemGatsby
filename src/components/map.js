import {Map, YMaps, ZoomControl} from "react-yandex-maps";
import React from "react";
import {useMedia} from "react-use";

export function MapYandex() {
    const isTablet = useMedia('(max-width: 1199px)')
    const [zoom, setZoom] = React.useState(false)
    const [drag, setDrag] = React.useState(!isTablet)
    /*

        window.addEventListener('touchstart', (e) => console.log(e.touches))
    */

    const behaviors = React.useCallback((mapRef, zoom, drag) => {
        if(!isTablet){
            zoom
                ? mapRef?.behaviors.enable("scrollZoom")
                : mapRef?.behaviors.disable("scrollZoom")
        }
        if (isTablet) {
            drag
                ? mapRef?.behaviors.enable('drag')
                : mapRef?.behaviors.disable('drag')
        }
    }, [zoom, isTablet])

    const zoomHandle = React.useCallback((zoom) => setZoom(zoom), [])
    const dragHandle = React.useCallback((e) => {
        if(e.touches.length === 2){
            return setDrag(true)
        }
        else return setDrag(false)
    }, [])


    return (
        <YMaps>
            <div
                 onMouseDown={() => zoomHandle(true)}
                 onMouseUp={() => zoomHandle(false)}
                 onTouchStart={(e) => dragHandle(e)}
            >
                <Map
                    style={{width: '100vw', height: '100vh'}}
                    defaultState={{
                        center: [59.95153019039679, 30.316641362504463],
                        zoom: 13,
                    }}
                    instanceRef={(mapRef) => {
                        behaviors(mapRef, zoom, drag)
                    }}
                >
                </Map>
            </div>
        </YMaps>
    );
}
