type ActionType = {
    type: string
}
export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case "Toggle-collapsed":
            return !state;
        default:
            throw new Error("Bad action type")
    }
    return state;
}