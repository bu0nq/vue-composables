import {computed, ComputedRef} from 'vue'

export function useBemElement(
    block: string, element: string, separator: string = '__'
) : ComputedRef<string> {
    return computed(() => {
        return block + separator + element;
    })
}
