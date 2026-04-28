import {computed, ComputedRef} from 'vue'

export function useBemModifier(
    block: string, modifier: string, separator: string = '_'
) : ComputedRef<string> {
    return computed(() => {
        return block + separator + modifier;
    })
}
