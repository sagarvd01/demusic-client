export interface ObservableModel{
    type: string,
    value: string,
    relevant ?: boolean
}

export enum ObservableTypes{
    "ac_fetch" = "ac_fetch",
    "chain_fetch" = "chain_fetch",
    "user_reject" = "user_reject",
    "error" = "error",
    "claim_update_success" = "claim_update_success",
    "claim_update_error" = "claim_update_error"
}