import {reactive} from 'vue'

export function useStyleBackgroundImage(
    url?: object|string
) : {backgroundImage: string} {
    return reactive({
        backgroundImage: `url(${url})`
    });
}
